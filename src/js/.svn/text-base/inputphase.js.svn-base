(function(window) {

  var curID , volID, engID;

  var self = EL.InputPhase = function() {
    var model = MODEL.phases;
    var $ipscurrentgrid = $("#ipscurrentgrid"),
        $ipsvoltagegrid = $("#ipsvoltagegrid"),
        $ipsenergygrid = $("#ipsenergygrid"),
        pduid = 1,
        width = 170,
        interval      = location.href.indexOf("https") > -1 ? 10000 : 1000,
        tocken;

    var phaseFormatter = function(value) {
      return "L" + value;
    };

    self.init = function() {
      var opts = EL.Master.getTabOpts($ipscurrentgrid);
      pduid = opts.pduid;
      tocken = $.extend({ pduid:pduid }, EL.Auth.getJSON());

      //Pre-fill with testing data.
      var data = [], powData = [];
      for (var i = 1 ; i <= EL.Master.pduphase; i++) {
        data.push({
          "phase" : i,
          "reading": 0,
          "status": 5,
          "cblowcritical": 1,
          "cblowwarning": 1,
          "cbupwarning": 1,
          "cbupcritical": 1
        });
        powData.push({
          "phase" : i,
          "appPower" :  0,
          "powFactor" : 0,
          "actPower" :  0
        });
      };
      self.setCurrentGrid(data);
      self.setVoltageGrid(data);
      self.setEnergyGrid(powData);

      $(".center .loader").hide();

      //add timeout for each request;
      window.clearTimeout(curID);
      window.clearTimeout(volID);
      window.clearTimeout(engID);

      curID = window.setTimeout( self.setCurrentGrid,   600);
      volID = window.setTimeout( self.setVoltageGrid,   interval * 1);
      engID = window.setTimeout( self.setEnergyGrid,    interval * 2);
    };


    var decimalPower = function(value) {
      return (value / 1000).toFixed(0);
    };

    //unit format of current
    var decimalFormat = function(value, row) {
      return (value / 1000).toFixed(2);
    };

    var voltageFormat = function(value, row) {
      return (value / 1000).toFixed(0);
    };

    var valtag = ' &nbsp;--';

    self.setCurrentGrid = function(data) {

      //format columns
      var cols = [[
        // {field:"phase", title:"Phase Current, RMS", width:122, align:"center", formatter:phaseFormatter},
        // {field:"reading", title:"Reading (A)", width:118, formatter: decimalFormat},
        // {field:"lowcritical", title:"Lower Critical (A)", width:102, formatter: function(value, row) {
        //     var field = "cblowcritical";
        //     return (typeof row[field] == "undefined" || !row[field]) ? decimalFormat(value) : valtag;
        // }},
        // {field:"lowwarning", title:"Lower Warning (A)", width:110, formatter: function(value, row) {
        //     var field = "cblowwarning";
        //     return (typeof row[field] == "undefined" || !row[field]) ? decimalFormat(value) : valtag;
        // }},
        // {field:"upwarning", title:"Upper Warning (A)", width:110, formatter: function(value, row) {
        //     var field = "cbupwarning";
        //     return (typeof row[field] == "undefined" || !row[field]) ? decimalFormat(value) : valtag;
        // }},
        // {field:"upcritical", title:"Upper Critical (A)", width:100, formatter: function(value, row) {
        //     var field = "cbupcritical";
        //     return (typeof row[field] == "undefined" || !row[field]) ? decimalFormat(value) : valtag;
        // }},
        // {field:"status", title:"Status, Setting", width:120, align:"center", formatter: function(value, row) {
        //   var params = { pduid: pduid, phase: row["phase"], max: decimalFormat(row["curlimit"]) };

        //   return EL.SetAlarm.getAlarmStr("xhripscurrentalarm", value, params , "A", 0x00010000);
        // }}
        {field:"phase", title:model.phasecurrentrms, width:122, align:"center", formatter:phaseFormatter},
        {field:"reading", title:model.reading+"(A)", width:118, formatter: decimalFormat},
        {field:"lowcritical", title:model.lowercritical+"(A)", width:width, formatter: function(value, row) {
            var field = "cblowcritical";
            return (typeof row[field] == "undefined" || !row[field]) ? decimalFormat(value) : valtag;
        }},
        {field:"lowwarning", title:model.lowerwarning+"(A)", width:width, formatter: function(value, row) {
            var field = "cblowwarning";
            return (typeof row[field] == "undefined" || !row[field]) ? decimalFormat(value) : valtag;
        }},
        {field:"upwarning", title:model.upperwarning+"(A)", width:width, formatter: function(value, row) {
            var field = "cbupwarning";
            return (typeof row[field] == "undefined" || !row[field]) ? decimalFormat(value) : valtag;
        }},
        {field:"upcritical", title:model.uppercritical+"(A)", width:width, formatter: function(value, row) {
            var field = "cbupcritical";
            return (typeof row[field] == "undefined" || !row[field]) ? decimalFormat(value) : valtag;
        }},
        {field:"status", title:model.statusset, width:width, align:"center", formatter: function(value, row) {
          var params = { pduid: pduid, phase: row["phase"], max: decimalFormat(row["curlimit"]) };

          return EL.SetAlarm.getAlarmStr("xhripscurrentalarm", value, params , "A", 0x00010000);
        }}
      ]];

      if (data) {
        $ipscurrentgrid.datagrid({ columns: cols });
        $ipscurrentgrid.datagrid("loadData", {rows: data});
        return;
      }

      $.ajax({contentType: "application/json",
        url: "xhripscurrentgetgrid.jsp",
        type:"post", data: JSON.stringify(tocken),
        dataType:"json",
        success: function(rows) {
          $ipscurrentgrid.datagrid({ columns: cols });
          $ipscurrentgrid.datagrid("loadData", {rows: rows});
        } ,
        error:function() {
          console.log(arguments);
        }
      });
    };

    self.setVoltageGrid = function(data) {
      //format columns
      var cols = [[
        // {field:"phase", title:"Phase Voltage, RMS", width:122, align:"center", formatter:phaseFormatter},
        // {field:"reading", title:"Reading (V)", width:118, formatter: voltageFormat},
        // {field:"lowcritical", title:"Lower Critical (V)", width:102, formatter: function(value, row) {
        //     var field = "cblowcritical";
        //     return (typeof row[field] == "undefined" || !row[field]) ? voltageFormat(value) : valtag;
        // }},
        // {field:"lowwarning", title:"Lower Warning (V)", width:110, formatter: function(value, row) {
        //     var field = "cblowwarning";
        //     return (typeof row[field] == "undefined" || !row[field]) ? voltageFormat(value) : valtag;
        // }},
        // {field:"upwarning", title:"Upper Warning (V)", width:110, formatter: function(value, row) {
        //     var field = "cbupwarning";
        //     return (typeof row[field] == "undefined" || !row[field]) ? voltageFormat(value) : valtag;
        // }},
        // {field:"upcritical", title:"Upper Critical (V)", width:100, formatter: function(value, row) {
        //     var field = "cbupcritical";
        //     return (typeof row[field] == "undefined" || !row[field]) ? voltageFormat(value) : valtag;
        // }},
        // {field:"status", title:"Status, Setting", width:120, align:"center", formatter: function(value, row) {
        //   var params = { pduid: pduid, phase: row["phase"], max: voltageFormat(row["vollimit"]) };

        //   return EL.SetAlarm.getAlarmStr("xhripsvoltagealarm", value, params, "V", 0x00010000);
        // }}
        {field:"phase", title:model.phasevoltagerms, width:122, align:"center", formatter:phaseFormatter},
        {field:"reading", title:model.reading+"(V)", width:118, formatter: voltageFormat},
        {field:"lowcritical", title:model.lowercritical+"(V)", width:width, formatter: function(value, row) {
            var field = "cblowcritical";
            return (typeof row[field] == "undefined" || !row[field]) ? voltageFormat(value) : valtag;
        }},
        {field:"lowwarning", title:model.lowerwarning+"(V)", width:width, formatter: function(value, row) {
            var field = "cblowwarning";
            return (typeof row[field] == "undefined" || !row[field]) ? voltageFormat(value) : valtag;
        }},
        {field:"upwarning", title:model.upperwarning+"(V)", width:width, formatter: function(value, row) {
            var field = "cbupwarning";
            return (typeof row[field] == "undefined" || !row[field]) ? voltageFormat(value) : valtag;
        }},
        {field:"upcritical", title:model.uppercritical+"(V)", width:width, formatter: function(value, row) {
            var field = "cbupcritical";
            return (typeof row[field] == "undefined" || !row[field]) ? voltageFormat(value) : valtag;
        }},
        {field:"status", title:model.statusset, width:width, align:"center", formatter: function(value, row) {
          var params = { pduid: pduid, phase: row["phase"], max: voltageFormat(row["vollimit"]) };

          return EL.SetAlarm.getAlarmStr("xhripsvoltagealarm", value, params, "V", 0x00010000);
        }}
      ]];

      if (data) {
        $ipsvoltagegrid.datagrid({ columns: cols });
        $ipsvoltagegrid.datagrid("loadData", {rows: data});
        return;
      }

      $.ajax({contentType: "application/json",
        url: "xhripsvoltagegetgrid.jsp",
        type:"post", data: JSON.stringify(tocken),
        dataType:"json",
        success: function(rows) {
          $ipsvoltagegrid.datagrid({ columns: cols });
          $ipsvoltagegrid.datagrid("loadData", {rows: rows});
        } ,
        error:function() {
          console.log(arguments);
        }
      });
    };

    self.setEnergyGrid = function(data) {
      //format columns
      var cols = [[
        // {field:"phase", title:"Phase Power", width:122, align:"center", formatter:phaseFormatter},
        // {field:"appPower", title:"Apparent Power (VA)", width:118, formatter: decimalPower},
        // {field:"powFactor", title:"Power Factor", width:102, formatter: decimalFormat},
        // {field:"actPower", title:"Active Power (W)", width:110, formatter: decimalPower}
        {field:"phase", title:model.phasepower, width:122, align:"center", formatter:phaseFormatter},
        {field:"appPower", title:model.apparentpower, width:width + 118, formatter: decimalPower},
        {field:"powFactor", title:model.powerfactor, width:width * 2, formatter: decimalFormat},
        {field:"actPower", title:model.activepower, width:width * 2, formatter: decimalPower}
      ]];

      if (data) {
        $ipsenergygrid.datagrid({ columns: cols });
        $ipsenergygrid.datagrid("loadData", {rows: data});
        return;
      }

      $.ajax({contentType: "application/json",
        url: "xhripspowergetgrid.jsp",
        type:"post", data: JSON.stringify(tocken),
        dataType:"json",
        success: function(rows) {
          $ipsenergygrid.datagrid({ columns: cols });
          $ipsenergygrid.datagrid("loadData", {rows: rows});
        } ,
        error:function() {
          console.log(arguments);
        }
      });
    };

    return self;
  };

})(window);
