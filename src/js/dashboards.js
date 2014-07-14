(function(window, document) {

  var refreshTimer;

  var timerID = 0, timerArr = [];

  /*
  Dashboard functionalities
  */
  var self = EL.DashBoard = function() {

    var model = MODEL.dashboard;

    var $container    = $(".dashboard"),
        $pduList      = $(".dashboard .itemlist"),
        $statusGrid   = $("#statusgrid"),
        $currentGrid  = $("#currentgrid"),
        $voltageGrid  = $("#voltagegrid"),
        $energyGrid   = $("#energygrid"),
        $alarmGrid    = $("#alarmgrid"),
        $alarmDialog  = $("#alarmdialog"),
        $sensorGrid   = $("#sensorgrid"),
        firstRun      = 1,
        width         = 158,
        widthFirst    = 158,          //for align datagrids (status/v/a) to pdu list
        //widthPdu      = 180,
        pducount      = EL.Master.pducount;
        //current requet is https request
        interval      = location.href.indexOf("https") > -1 ? 10000 : 1000,
        // title = "Loading";
        title         = model.loading;

    //Need to refresh the dashboard?
    self.visibleAll = function() {
      return $("#mydialog:visible").size() < 1
        &&  $(".dashboard:visible").size() > 0;
    };

    //Need to refresh the datagrid?
    self.visible = function() {
      //There is: 1) no dialog popuped 2) dashboard is visiable, 3) No force change password
      return $(".dashboard:visible").size() > 0;
    };

    //Prevent click too fast
    self.init = function() {
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(self.start, 500);
    };

    self.initUI = function() {
      //disable the close button of dashboard;
      $(".ui-tabs-nav li:first-child .ui-icon-close").hide();

      //Create testing row data
      var pduData = []
        , statusData = []
        , powData = []
        , phaseArr = []
        , phaseObj = [];

      for(var i = 0; i < pducount; i++){
        pduData.push({});
        statusData.push("");
        powData.push({
         "activepower":       "",
         "apparentpower":     "",
         "totalenergymeter":  ""
        });
        phaseObj.push("");
      };

      for (i = 0; i < EL.Master.pduphase; i++) {
        phaseArr.push(phaseObj);
      }

      $statusGrid.datagrid({columns:[[
        {title: title, field:"field", width: width}
      ]]}).datagrid("loadData", {rows: [{}]});

      $currentGrid.datagrid({columns:[[
        {title: title, field:"field", width: width}
      ]]}).datagrid("loadData", {rows: [{}]});

      $voltageGrid.datagrid({columns:[[
        {title: title, field:"field", width: width}
      ]]}).datagrid("loadData", {rows: [{}]});

      $energyGrid.datagrid({columns:[[
        {title: title, field:"field", width: width}
      ]]}).datagrid("loadData", {rows: [{}]});

      $alarmGrid.datagrid({columns:[[
        {title: title, field:"field", width: width}
      ]]}).datagrid("loadData", {rows: [{}]});

      $sensorGrid.datagrid({columns:[[
        {title: title, field:"field", width: width}
      ]]}).datagrid("loadData", {rows: [{}]});


      self.getStatusParams(statusData);
      self.getCurrentParams(phaseArr);
      self.getVoltageParams(phaseArr);
      self.getEnergyParams(powData);
    };

    var getWidth = function(idx, len) {
      var width = (($(".dashboard").width() - 160) / pducount | 0) - 4;

      //if (idx == 0)       width -= 8;
      //if (idx == len -1)  width -= 20;
      if (pducount == 1) width = width - widthFirst - 10 + 160;
      return width;
    };

    self.start = function() {
      //stop timer previous opened
      self.stop();

      timerID = window.setInterval(function() {
        self.visibleAll() && self.refresh();
      } , 9 * interval);

      //refresh once
      self.refresh();

      //init UI
      self.initUI();
    };

    /*
    Refresh datagrid
    */
    self.refresh = function() {
      self.getPDUList();

      timerArr = [
        window.setTimeout(self.getStatusParams,  1 * interval),
        window.setTimeout(self.getCurrentParams, 2 * interval),
        window.setTimeout(self.getVoltageParams, 3 * interval),
        window.setTimeout(self.getEnergyParams,  4 * interval),
        window.setTimeout(self.getSensors,       5 * interval)
      ];
    };

    /*
    Before refresh stop all the timer
    */
    self.stop = function() {
      window.clearInterval(timerID);
      for(var i = 0, len = timerArr.length; i<len; i++) {
        window.clearTimeout(timerArr[i]);
      }
    };

    /*
    get PDU list
    */
    self.getPDUList = function() {
      if (!self.visible()) return;

      var createList = function(arr) {
        var i = 0, html = '';

        //Refresh the tree if count of pdu changed;
        pducount && (pducount != arr.length) && EL.Master.setTree();
        pducount = arr.length || 1;
        pducount > 1 
          ? $pduList.addClass("haslist") 
          : $pduList.removeClass("haslist");

        //This will execute at least once, if no pdu return
        do {
          var obj = arr[i],
              key = "",
              val = "";
          for(key in obj) {
            val = obj[key];
          }

          var strItem = '<div class="item">'
            + '<div class="body">'
            + '<h3>PDU #' + (parseInt(i) + 1) + '</h3>'
            + '<p>' + key + '</p>'
            + '<p>' + val + '</p>'
            + '</div>'
            + '</div>';

          html += strItem;
        } while ( ++i < pducount );

        $pduList.html($(html));
        $(".itemlist .item").width( 100 / pducount + "%" );

        //widthPdu = $(".item", $pduList).width() - 4;

        //loading imags
        if (firstRun) {
          $(".center .loader").hide();
          firstRun = 0;
        }
      };

      $.ajax({contentType: "application/json",
        url: "xhrpdulist.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: createList
      });
    };

    /*
    get cols from [{key: val}, {key: val} ...]
    */
    self.getCols = function(title, arr, decimal) {
      var cols = [{
        field : 'type',
        title : title,
        width : widthFirst
      }], len = 0;

      for(var i in arr) {
        var l = arr[i].length;
        (l  > len) && (len = l );
      }

      for(var i = 0; i < len ; i++) {
        cols.push({
          field: "p" + (i + 1),
          title: "",
          width: getWidth(i, len),
          formatter:function(value) {
            return (value / 1000).toFixed(decimal);
          }
        });
      }

      return cols;
    };

    /*
    get rows from [{key: val}, {key: val} ...]
    */
    self.getRows = function(type, arr) {
      var total = 0, 
          rows = {
            "total": arr.length,
            "rows": []
          }, cols = 0;

      for(var i in arr) {
        var row = { type: type + (parseInt(i) + 1) };
        //for(var j = 0, len = arr[i].length; j < len ; j++) {
        for(var j in arr[i]) {
          row["p" + (parseInt(j) + 1)] = arr[i][j];
        }

        (j + 1 > cols) && (cols = j + 1);

        rows["rows"].push(row);
      }

      return rows;
    };

    /*
    get pdu params
    */
    self.getStatusParams = function(data) {
      if (!self.visible()) return;
      /*
      get pdu status
      */
      var setStatusGrid = function(arr) {
        (arr.length == 0) && arr.push(0);

        //columns
        var cols = [{
          field: "name", 
          title: "PDU",
          width: widthFirst
        }];
        // var row = { name: "Status" };
        var row = { name: model.status };

        for(var i = 0, len = arr.length; i < len; i++) {
          //columns;
          cols.push({
            field: "p" + (i+1),
            title: "PDU #" + (i+1),
            width: getWidth(i, len),
          });

          //rows
          // var alarm = '<a href="javascript:EL.DashBoard.onAlarm('+ (i + 1) +')" class="alarm alarm-warning">' + arr[i] + ' Alarms </a>';
          var alarm = '<a href="javascript:EL.DashBoard.onAlarm('+ (i + 1) +')" class="alarm alarm-warning">' + arr[i] + ' {0} </a>'.format(model.alarms);
          // row["p" + (i+1)] = arr[i] > 0 ? alarm : "OK";
          row["p" + (i+1)] = arr[i] > 0 ? alarm : "{0}".format(model.ok);
        }

        var oldCols = $statusGrid.datagrid("getColumnFields") || [];
        ((len + 1) != oldCols.length) &&  $statusGrid.datagrid({ columns:[cols] , fitColumns:false });

        $statusGrid.datagrid('loadData', {"rows":[ row ]});
      };

      if (data) return setStatusGrid(data);

      $.ajax({contentType: "application/json",
        url: "xhrpdustatusget.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: setStatusGrid
      });
    };

    self.getCurrentParams = function(data) {
      if (!self.visible()) return;
      /*
      Get pdu current
      */
      var setCurrentGrid = function(arr) {
        var rows = self.getRows("L", arr),
            // cols = self.getCols("Current, RMS (A)", arr, 2);
            cols = self.getCols("{0}".format(model.currentrms), arr, 2);

        var oldCols = $currentGrid.datagrid("getColumnFields") || [];
        (cols.length != oldCols.length) && $currentGrid.datagrid({ columns: [ cols ] , fitColumns:false });
        $currentGrid.datagrid('loadData', rows);
      };

      if (data) return setCurrentGrid(data);

      $.ajax({contentType: "application/json",
        url: "xhrpducurrentget.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: setCurrentGrid
      });
    };

    self.getVoltageParams = function(data) {
      if (!self.visible()) return;
      /*
      Get pdu voltage
      */
      var setVoltageGrid = function(arr) {
        var rows = self.getRows("L", arr),
            // cols = self.getCols("Voltage, RMS (V)", arr, 0);
            cols = self.getCols("{0}".format(model.voltagerms), arr, 0);

        var oldCols = $voltageGrid.datagrid("getColumnFields") || [];
        (cols.length != oldCols.length) && $voltageGrid.datagrid({ columns: [ cols ], fitColumns:false });

        $voltageGrid.datagrid('loadData', rows);
      };

      if (data) return setVoltageGrid(data);

      $.ajax({contentType: "application/json",
        url: "xhrpduvoltageget.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: setVoltageGrid
      });
    };

    self.getEnergyParams = function(data) {
      if (!self.visible()) return;
      /*
      Get pdu energy
      */
      var setEnergyGrid = function(data) {
        var colLen = data.length;

        //create rows
        var rows = [
            {name:"activepower"},
            {name:"apparentpower"},
            {name:"totalenergymeter"}
          ];

        for(var i = 0; i < colLen; i++) {
          var colName = "pdu" + (i + 1),
              pduObj = data[i];

          //only 3 rows
          for(var j = 0; j < rows.length; j++) {
            var key = rows[j]["name"];
                val = pduObj[key];

            rows[j][colName] = val;
          }
        }

        //create columns
        var cols = [{
          field: "name",
          // title: "PDU power energy",
          title: "{0}".format(model.pdupowerenergy),
          width: widthFirst, 
          formatter: function(value) {
            return POWERENERGY[value];
          }
        }];
        for(i = 0; i < colLen; i++) {
          cols.push({
            field: "pdu" + (i + 1),
            title: "",
            width: getWidth(i, colLen),
            formatter: function(value, row) {
              value = value >>> 0;
              var decimal = (row.name == "totalenergymeter") ? 1 : 0;
              return (value / 1000).toFixed(decimal);
            }
          });
        }

        var oldCols = $energyGrid.datagrid("getColumnFields") || [];
        (cols.length != oldCols.length) && $energyGrid.datagrid({ columns: [ cols ] , fitColumns:false });

        $energyGrid.datagrid('loadData', {rows : rows});
      };

      if (data) return setEnergyGrid(data);

      $.ajax({contentType: "application/json",
        url: "xhrpduenergyget.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: setEnergyGrid
      });
    };


    /*
    sensors
    */
    self.onAlarm = function(id) {
      //cannot use this method to trigger click event handler, after refresh, it will popup many times.
      //$container.on("click", "a.alarm", function(e) {      });
      var tocken = $.extend({pduid: id}, EL.Auth.getJSON());

      //then get the data
      $.ajax({contentType: "application/json",
        url: "xhralarmgetpdugrid.jsp",
        type: "post", data: JSON.stringify(tocken),
        dataType: "json",
        success: function(data) {
          alarmHandler(id, data);
        }
      });

      //alarm event handler
      var alarmHandler = function(id, data) {
        //prop up dialog
        $alarmDialog.dialog({
          // title : '<h4 class="icon-bell">Active Alarms for PDU #' + id + '</h4>',
          title : '<h4 class="icon-bell">{0}'.format(model.activealarmpdu) + id + '</h4>',
          resizable: false,
          width: 600,
          height: 300,
          modal: true,
          closeOnEscape: true,
          buttons: {
            // "Close": function() {
            //   $(this).dialog("destroy");
            // }
            "Close": {
              text: model.close,
              click: function(){$(this).dialog("destroy");},
              id: "btnClose"
            }
          }
        });

        $alarmGrid.datagrid({ columns: [[
          // {field:"type", title:"Alarm Type", width:360, formatter:function(value) {
          {field:"type", title:"{0}".format(model.alarmtype), width:360, formatter:function(value) {
            return ALARMTYPE[value]
          }},
          // {field:"count", title:"Count", width:222, formatter: function(value, row) {
          {field:"count", title:"{0}".format(model.count), width:222, formatter: function(value, row) {
            // return value ? '<a href="#" onclick=\'EL.DashBoard.naviTree(' + id + ', "' + ALARMNAVI[row["type"]] + '")\'>' + value + " Alarms</a>" : "OK" ;
            return value ? '<a href="#" onclick=\'EL.DashBoard.naviTree(' + id + ', "' + ALARMNAVI[row["type"]] + '")\'>' + value + " {0}</a>".format(model.alarms) : "OK" ;
          }}
        ]], singleSelect:true });

        $alarmGrid.datagrid('loadData', {rows: data});
      };
    };

    /*

    */
    self.getSensors = function() {
      if (!self.visible()) return;

      var sensorHandler = function(data) {

        //show or hide the container of the grid;
        (data.length < 1) 
          ? $sensorGrid.closest(".gridlist").hide()
          : $sensorGrid.closest(".gridlist").show();

        var oldCols = $sensorGrid.datagrid("getColumnFields") || [];
        (data.length > 0 && oldCols.length < 6) && $sensorGrid.datagrid({columns:[[
          // {field:"type", title:"External Sensors, Type", width: width},
          // {field:"sensorname", title:"Sensor Name", width:width},
          // {field:"pduname", title:"PDU Name", width:width},
          // {field:"location", title:"Location", width:"110"},
          // {field:"value", title:"Value", width:"100"},
          // {field:"status", title:"Status", width:"100"}
          {field:"type", title:"{0}".format(model.externalsensor), width: width, formatter: function(value) {
            return SENSORTYPE[value];
          }},
          {field:"sensorname", title:"{0}".format(model.sensorname), width:width},
          {field:"pduid", title:"{0}".format(model.pduid),      width: width / 2 - 15},
          {field:"pduname", title:"{0}".format(model.pduname),  width: width / 2 + 15},
          {field:"location", title:"{0}".format(model.location), width:"90"},
          {field:"value", title:"{0}".format(model.value), width:"80", formatter: EL.ExtSensor.Value},
          {field:"status", title:"{0}".format(model.status), width:"150", formatter: function(value) {
            return EL.SetAlarm.getAlarmTxt(STATUSTYPE[value]);
          }}
        ]], fitColumns:false });

        $sensorGrid.datagrid("loadData", {rows: data});
      };

      $.ajax({contentType: "application/json",
        url: "xhrextsensorsgetgrid.jsp", type: "post",
        data: EL.Auth.getTocken(),
        dataType: "json",
        success: sensorHandler
      });
    };

    return self;
  };

  /*
  Navigation to tree
  */
  self.naviTree = function(pduid, alarmnavi) {
    $("[node-id=" + alarmnavi + "]", $("#tree>li").eq(pduid)).click();
    $("#alarmdialog").dialog("destroy");
  };

})(window, document);