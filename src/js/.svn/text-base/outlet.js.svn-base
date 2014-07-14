(function() {

  var refreshTimer;

  var self = EL.Outlet = function() {
    var model = MODEL.outletstools;

    var $outletproperty = $("#outletproperty"),
        $container = $(".outlet"),
        pduid = 1,
        id = 1,                       //outlet id
        tocken;

    //Prevent click too fast
    self.init = function() {
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(self.start, 500);
    };

    self.start = function() {

      var opts = EL.Master.getTabOpts($outletproperty);
      pduid = opts.pduid;
      id = opts.outid;

      tocken = $.extend({ pduid:pduid, id:id }, EL.Auth.getJSON());

      self.setOutletProperty();
    };

    self.setOutletProperty = function() {

      var powStartArr = [];
      for(var k in POWERSTATUS) {
        powStartArr.push({ 
          text: POWERSTATUS[k],
          value: POWERSTATUS[k]
        });
      }

      // var rows = [
      //   //editable field
      //   {key:"name", name:"Outlet Name", group:"Outlet Setting", editor:{
      //     type:'text',
      //     options:{ required:true }
      //   }, maxlength: 32 },
      //   {key:"powstart", name:"State On Startup", group:"Outlet Setting", editor: {
      //     type:'combobox',
      //     options:{ data: powStartArr, required:true }
      //   }},
      //   {key:"delayon", name:"On Delay (0 ~ 7200s)", group:"Outlet Setting", editor:"text", min:0, max:7200},
      //   {key:"delayoff", name:"Off Delay (0 ~ 7200s)", group:"Outlet Setting", editor:"text", min:0, max:7200},
      //   {key:"rebotdur", name:"Reboot Duration (5 ~ 60s)", group:"Outlet Setting", editor:"text", min:5, max:60},
      //   //readonly field
      //   {key:"id", name:"Outlet ID", group:"Outlet Attribute"},
      //               /*
      //               {key:"status", name:"Status", group:"Outlet Attribute"
      //                 //, formatter:function(value) { return STATUSTYPE[value]; }
      //               },
      //               */
      //   {key:"current", name:"Current (A)", group:"Outlet Attribute"},
      //   {key:"voltage", name:"Voltage (V)", group:"Outlet Attribute"},
      //   {key:"actpow", name:"Active Power (W)", group:"Outlet Attribute"},
      //   {key:"peapow", name:"Peak Power (W)", group:"Outlet Attribute"},
      //   {key:"powfac", name:"Power Factor", group:"Outlet Attribute"},
      //   {key:"resetmeter", name:"Resettable Energy Meter", group: "Outlet Attribute"}
      // ];

      var rows = [
        //editable field
        {key:"name", name:model.outletname, group:model.outletset, editor:{
          type:'text',
          options:{ required:true }
        }, maxlength: 32 },
        {key:"powstart", name:model.stateonstart, group:model.outletset, editor: {
          type:'combobox',
          options:{ data: powStartArr, required:true }
        }},
        {key:"delayon", name:model.ondelay, group:model.outletset, editor:"text", min:0, max:7200},
        {key:"delayoff", name:model.offdelay, group:model.outletset, editor:"text", min:0, max:7200},
        {key:"rebotdur", name:model.rebootduration, group:model.outletset, editor:"text", min:5, max:60},
        //readonly field
        {key:"id", name:model.outletid, group:model.outletattr},
        {key:"current", name:model.current, group:model.outletattr},
        {key:"voltage", name:model.voltage, group:model.outletattr},
        {key:"actpow", name:model.activepower, group:model.outletattr},
        {key:"peapow", name:model.peakpower, group:model.outletattr},
        {key:"powfac", name:model.powerfactor, group:model.outletattr},
        {key:"resetmeter", name:model.energymeter, group:model.outletattr}
      ];

      EL.Privilege.setProperty(rows, 0x02000000);

      /*
      1: means will be rewrite by post back datas.
      */
      var saveData = {
        name: 1,
        delayon: 1,
        delayoff: 1,
        rebotdur: 1,
        powstart: 1
      };

      var saveHandler = function(idx, row, changes) {
        var key = row.key,
            val = row.value;

        /*
        If it need to valid the number and validate failed, rollback the changes on the UI. 
        */
        if (!EL.EditGrid.validField(row, val)) {
          row.value = saveData[key];
          $outletproperty.propertygrid("updateRow", {index: idx, row: row});
          return;
        }

        ("delayon delayoff rebotdur".indexOf(key) > -1) && (val = val ? parseInt(val) : 0);
        (key == "powstart") && (val = EL.PDUS.getPDUCtrlValue(val));

        //it's the same value, ignore it.
        if (val == saveData[key]) {
          return;
        }

        saveData[key] = val;
        
        var saveTocken = $.extend({}, tocken, saveData);

        $.ajax({contentType: "application/json",
          url: "xhroutset.jsp",
          type:"post", data: JSON.stringify(saveTocken),
          dataType:"json",
          success: function(obj) {
            EL.UpdateStatus(obj);
          },
          error:function() {
            console.log(arguments);
          }
        });
      };

      var outletHandler = function(obj) {

        rows = EL.EditGrid.clearRows(rows, obj);

        for(var i = 0, len = rows.length; i < len; i++) {
          var row = rows[i],
              key = row.key,
              val = obj[key];

          //reset the value in saveData;          
          saveData[key] && (saveData[key] = val);

          switch(key) {
            case "id":
              row.value = "Outlet " + val;
              break;
            //32-bit status value
            case "powstart":
              /*
              var tag = val >>> (id - 1) & 0x0001;
              saveData[key] = tag;
              row.value = PDUCTRLTYPE[tag];
              */
              row.value = PDUCTRLTYPE[val];
              break;
            /*              
            case "status":
              row.value = STATUSTYPE[val];
              break;
            */
            case "current":
            case "powfac":
              var tag = (val / 1000).toFixed(2);
              row.value = tag;
              break;
            case "actpow":
            case "peapow":
            case "voltage":
              row.value = (val / 1000).toFixed(0);
              break;
            default:
              row.value = val;
          }
        }

        //outlet in use property
        // rows.push({
        //     key:    "outinuse"
        //   , name:   model.outinuse
        //   , value:  $(".tree-node-selected .icon-ol-load").size() ? MODEL.buttons.yes : MODEL.buttons.no
        //   , group:  model.outletattr
        // });

        $outletproperty.propertygrid({
          showGroup: true,
          scrollbarSize: 0,
          onAfterEdit: saveHandler
        });
        $outletproperty.propertygrid("loadData", {rows : rows});

        $(".center .loader").hide();
      };

      $.ajax({contentType: "application/json",
        url: "xhroutget.jsp",
        type:"post", data: JSON.stringify(tocken),
        dataType:"json",
        success: outletHandler,
        error:function() {
          console.log(arguments);
        }
      });

    };

    return self;

  };

})();