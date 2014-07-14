(function(window, document) {

  var refreshTimer;

  var self = EL.ExtSensor = function() {

    var $editSensorGrid = $("#sensoreditgrid"),
        editGrid = new EL.EditGrid(),
        pduid = 1,
        rows;

    var editSensorHandler = function(arr) {
      var model = MODEL.sensor;
      rows = arr;

      //get enumable aisletype
      var aisleArr = [];
      for(var k in AISLETYPE) {
        aisleArr.push({
          txt: AISLETYPE[k],
          val: parseInt(k)
        });
      }

      //format columns
      var cols = [[
        // {field:"id", title:"ID", width:40, align:"center"},
        {field:"id", title:"{0}".format(model.id), width:40, align:"center"},
        // {field:"type", title:"Type, Setting", width:120, formatter: function(value) {
        {field:"type", title:"{0}".format(model.typeset), width:220, formatter: function(value) {
          return SENSORTYPE[value];
        }},
        // {field:"status", title:"Status, Setting", width:100, formatter: function(value, row) {
        {field:"status", title:"{0}".format(model.statusset), width:180, formatter: function(value, row) {
          var type = row["type"],
              unit;

          (type == 1) && (unit = TEMPUNIT[EL.Privilege.temperature]);
          (type == 2) && (unit = "H");

          return EL.SetAlarm.getAlarmStr(
            SENSORALARMURL[type], value, {pduid: pduid, sensorid: row["id"], sensortype: type}, unit, 0x00000010
          );
        }},
        // {field:"reading", title:"Value", width:80},
        // {field:"serialnumber", title:"Serial NO.", width:140},
        // {field:"aisle", title:"Aisle", width:70,
        {field:"reading", title:"{0}".format(model.value), width:100, formatter: EL.ExtSensor.Value},
        {field:"serialnumber", title:"{0}".format(model.serialno), width:140},
        {field:"aisle", title:"{0}".format(model.aisle), width:70,
          formatter: function(value, row) {
            //var type = row["type"];
            //return (type == 1 || type == 2) ? AISLETYPE[value] : "－";
            return AISLETYPE[value];
          },
          editor:{
            type:'combobox',
            options:{
              valueField: 'val',
              textField: 'txt',
              data: aisleArr,
              required:true
            }
          }
        },
        // {field:"name", title:"Name", width:150, editor:{
        {field:"name", title:"{0}".format(model.name), width:150, editor:{
          type: 'validatebox',
          options:{
            validType: "length[0,16]"
          }
        }},
        // {field:"description", title:"Description", width:160, editor:{
        {field:"description", title:"{0}".format(model.description), width:150, editor:{
          type: 'validatebox',
          options:{
            validType: "length[0,16]"
          }
        }},
        // {field:"location", title:"Location", width:160, editor:{
        {field:"location", title:"{0}".format(model.location), width:150, editor:{
          type: 'validatebox',
          options:{
            validType: "length[0,16]"
          }
        }}
      ]];

      //format save function
      var saveTocken = $.extend(
        { pduid:pduid }, 
        EL.Auth.getJSON(), 
        { id:"", aisle:0, name:"", description:"", location:"" }
      );

      var permission = 0x00000010 & EL.Privilege.privilege;
      editGrid.init($editSensorGrid, cols, rows, "xhrextsensorset.jsp", saveTocken, permission);

      $(".center .loader").hide();
    };

    //Prevent click too fast
    self.init = function() {
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(self.start, 500);
    };

    self.start = function() {
      var opts = EL.Master.getTabOpts($editSensorGrid);
      pduid = opts.pduid;

      //toggle the disable status on the checkbox.
      $("input.switch").switchCheckBox();

      var tocken = $.extend({ pduid:pduid }, EL.Auth.getJSON());

      $.ajax({contentType: "application/json",
        url: "xhrextsensorgetgrid.jsp",
        type:"post", data: JSON.stringify(tocken),
        dataType:"json",
        success: editSensorHandler ,
        error:function() {
          console.log(arguments);
        }
      });
    };

    return self;
  };

  self.Value = function(value, row) {

    switch (parseInt(row.type)) {
      //Direct value
      case 1:
        return (value / 10).toFixed(1);
      case 2:
        return value;
      case 3:
      case 4:
      case 7:
      case 8:
        return POWERSTATUS[value > 0 ? 1 : 0];
      case 5:
      case 6:
        return FLUID[value];
    }

    return value;
  };

}(window, document));