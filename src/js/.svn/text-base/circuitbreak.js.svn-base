(function(window) {

  var curID;

  /*
  Circuit break
  */
  var self = EL.CircuitBreak = function() {
    var model = MODEL.breakers;

    var $grid = $("#circuitgrid"),
        pduid = 1,
        rows,
        tocken;

    self.init = function() {
      var opts = EL.Master.getTabOpts($grid);
      
      pduid = opts.pduid;
      tocken = $.extend({ pduid:pduid }, EL.Auth.getJSON());

      window.clearTimeout( curID );
      curID = window.setTimeout( self.getCircuit, 500);
    };

    self.getCircuit = function() {
      var circuitFormat = function(value) {
        return (value / 1000).toFixed(2);
      };

      var getCircuitHandler = function(rows) {
        //add the remaing capacity, cannot use formatter because it doesn't have field;
        for(var i=0, len=rows.length; i<len; i++) {
          var row = rows[i],
              val = circuitFormat(row["rating"]) - circuitFormat(row["rmscurrent"]);
          (val < 0) && (val = 0);
          rows[i]["remaing"] = val.toFixed(2);
        }

        //format columns
        var cols = [[
          // {field:"cb", title:"Circuit ID", width:80, align:"center"},
          // {field:"status", title:"Status, Setting", width:140, align:"center", formatter: function(value, row) {
          //   var params = { pduid: pduid, cb: row["cb"], max: circuitFormat(row["curlimit"]) };
          //   return EL.SetAlarm.getAlarmStr("xhrcbsalarm", value, params, "A", 0x00020000);
          // }},
          // {field:"rmscurrent", title:"Current, RMS (A)", width:110, formatter:circuitFormat},
          // {field:"rating", title:"Rating (A)", width:100, formatter:circuitFormat},
          // {field:"remaing", title:"Remaining Capacity (A)", width:140},
          // {field:"inputphases", title:"Input Phases", width:100},
          // {field:"connectedoutlets", title:"Connected Outlets", width:110}
          {field:"cb", title:model.circuitid, width:140, align:"center"},
          {field:"status", title:model.statusset, width:180, align:"center", formatter: function(value, row) {
            var params = { pduid: pduid, cb: row["cb"], max: circuitFormat(row["curlimit"]) };
            return EL.SetAlarm.getAlarmStr("xhrcbsalarm", value, params, "A", 0x00020000);
          }},
          {field:"rmscurrent", title:model.currentrms, width:120, formatter:circuitFormat},
          {field:"rating", title:model.rating, width:120, formatter:circuitFormat},
          {field:"remaing", title:model.remaincapacity, width:180},
          {field:"inputphases", title:model.inputphases, width:180},
          {field:"connectedoutlets", title:model.connoutlet, width:170}
        ]];

        cols = EL.EditGrid.clearCols(cols, rows);

        $grid.datagrid({ columns: cols });
        $grid.datagrid("loadData", {rows: rows});

        $(".center .loader").hide();

      };

      $.ajax({contentType: "application/json",
        url: "xhrcbsgetgrid.jsp",
        type:"post", data: JSON.stringify(tocken),
        dataType:"json",
        success: getCircuitHandler ,
        error:function() {
          console.log(arguments);
        }
      });
    };

    return self;
  };

}(window));