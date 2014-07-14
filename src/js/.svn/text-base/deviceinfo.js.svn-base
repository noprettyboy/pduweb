(function() {

  var self = EL.DeviceInfo = {};

  self.init = function() {
    var model = MODEL.devinfo;
    var gdOutletDevInfo     = $("#gdOutletDevInfo");
    var gdCBDevInfo       = $("#gdCBDevInfo");
    var tabDeviceInformation  = $('#tabDeviceInformation');

    //Getting the Device Information from the server in JSON format
    tabDeviceInformation.tabs({
      //reset datagrid
      select: function() {
        gdOutletDevInfo.datagrid();
        gdCBDevInfo.datagrid();
      }
    });

    //tabs one
    var cookie_Value = getAuthCookie("authCookieId");
    cookie_Value = parseInt(cookie_Value);
    var objDevInfoJson = {"cookie" : cookie_Value};
    var xmlhttp = getXMLObject();
    if (xmlhttp) 
    {
      xmlhttp.onreadystatechange  = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
        {
          var data = xmlhttp.responseText;
          data = JSON.parse(data);
          $("#model").html(data.model);
          $("#serialNum").html(data.serialnumber);
          $("#rating").html(data.rating);
          $("#funcType").html(FUNCTYPE[data.functiontype]);
          $("#devipv4Addrr").html(data.deviceip4addr);
          $("#devipv6Addrr").html(data.deviceip6addr);
          $("#macAddr").html(data.devicemacaddr);
          //$("#boardID").html(data.boardid);
          $("#bootver").html(data.bootver);
          $("#langver").html(data.langver);
          $("#firmvarVer").html(data.firmwareversion);
          $("div a#devInfoDwdLink").attr("href", data.pdumibhref);

          $('div#tabDeviceInformation').show();
        }
      };
      xmlhttp.open("POST", 'xhrdevinfopduinfoget.jsp', true); 
      xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");      
      xmlhttp.send(JSON.stringify(objDevInfoJson));   
    }

    var setDeviceInfoOutlet = function(rows) {
      //wince   node.js  support
      if (rows.length < 1) {
        tabDeviceInformation.tabs( "remove" , 1 );
        return;
      }

      var cols = [[
        // { title: 'Label', field: 'Label', width: 80, align: 'center', sortable:true},
        // { title: 'Operating Voltage', field: 'OperatingVoltage', width:220, align: 'center', sortable:true},
        // { title: 'Rated Current', field: 'RatedCurrent', width: 220, align: 'center', sortable:true}
        { title: model.label, field: 'Label', width: 80, align: 'center', sortable:true},
        { title: model.operatevol, field: 'OperatingVoltage', width:220, align: 'center', sortable:true},
        { title: model.ratecurrent, field: 'RatedCurrent', width: 220, align: 'center', sortable:true}
      ]];

      gdOutletDevInfo.datagrid({
        columns: cols,
        singleSelect: true,
        width: 530,
        height: 375,
        remoteSort: false        
      });
      gdOutletDevInfo.datagrid("loadData", rows);
    };

    var getDeviceInfoOutlet = function() {
      $.ajax({
        url: 'xhrdevinfoolgetgrid.jsp',
        type: "post", data: EL.Auth.getTocken(),
        dataType : "json",
        success: setDeviceInfoOutlet
      });
    };

    var setDeviceInfoCircuitBreak = function(rows) {
      var cols = [[
        // { title: 'Label', field: 'Label', width:75, align: 'center', sortable:true},
        // { title: 'Type', field: 'Type', width:190, sortable:true},
        // { title: 'Rated Current', field: 'RatedCurrent', width:110, align: 'center', sortable:true},
        // { title: 'Protected Outlets', field: 'ProtectedOutlets', width: 140, align: 'center', sortable:true}
        { title: model.label, field: 'Label', width:75, align: 'center', sortable:true},
        { title: model.type, field: 'Type', width:190, sortable:true, formatter: function(value) {
          return CBTYPE[value]
        }},
        { title: model.ratecurrent, field: 'RatedCurrent', width:110, align: 'center', sortable:true},
        { title: model.protoutlet, field: 'ProtectedOutlets', width: 140, align: 'center', sortable:true}
      ]];

      gdCBDevInfo.datagrid({
        columns: cols,
        singleSelect: true,
        width: 530,
        height: 375,
        remoteSort: false
      });
      gdCBDevInfo.datagrid("loadData", rows);
    };

    var getDeviceInfoCircuitBreak = function() {
      $.ajax({
        url: 'xhrdevinfocbgetgrid.jsp',
        type: "post", data: EL.Auth.getTocken(),
        dataType : "json",
        success: setDeviceInfoCircuitBreak
      });
    };

    getDeviceInfoOutlet();
    getDeviceInfoCircuitBreak();

    $("#frdevinfo").validate({
      submitHandler: function(form) {
        gdOutletDevInfo.jqEnGrid('destroy');
        gdCBDevInfo.jqEnGrid('destroy');
       }    
    });
  };

})();