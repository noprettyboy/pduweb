/*
Outlets functionalities.
*/
(function(window) {

  var refreshTimer;

  //persistent this timer, need to clear it after user reload the page;
  var statusTimer;

  var self = EL.Outlets = function() {
    var model = MODEL.outletstools;

    var $outletsgrid = $("#outletsgrid"),
        $selectPower = $("#powstat"),
        $submitPower = $(".outlets form button"),
        pduid = 1,
        //editGrid = new EL.EditGrid(),
        tocken,
        rows,
        powerStatusArr = [];

    var powerFormat = function(value, row) {
      return (value / 1000).toFixed(0);
    };

    /*
    Set checkbox in outlet grid
    */
    var setOutletsPrivi = function() {
      var $inputs = $(".outlets .datagrid-body input[type=checkbox]");

      $inputs.each(function(idx) {
        var $input = $(this),
            privi = EL.Privilege.outlets & (1 << idx);

        if (privi == 0) {
          $input.attr("disabled", true);
          $input.attr("checked", false);
          $outletsgrid.datagrid("unselectRow", idx);
        }
      });
    };

    var clearPendingStatus = function() {
      self.pending = 0;

      $submitPower.text(model.apply);
      //stop timer
      window.clearInterval(statusTimer);
      //refresh datagrid
      self.getOutletsGrid();
    };

    var setPendingStatus = function() {
      self.pending = 1;
      $submitPower.text(model.excuting);
    };

    //Prevent click too fast
    self.init = function() {
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(self.start, 500);
      
      $("#powctrl").html(model.powctrl);
    };

    self.start = function() {
      var opts = EL.Master.getTabOpts($outletsgrid);
      pduid = opts.pduid;
      tocken = $.extend({ pduid:pduid }, EL.Auth.getJSON());

      self.setPowerCtrl();
      //self.getOutletsGrid();
      clearPendingStatus();

      EL.Privilege.outletopr && self.checkStatus();
      // EL.Privilege.setNotSupport([$submitPower]);
    };

    self.setPowerCtrl = function() {
      if (!EL.Privilege.outletopr) {
        return $outletsgrid.removeAttr("toolbar");
      }

      for(k in POWERCTRLTYPE) {
        powerStatusArr.push({
          text: POWERCTRLTYPE[k],
          value: parseInt(k)
        });
      }

      $selectPower.combobox({width: 180});
      $selectPower.combobox("loadData", powerStatusArr);

      $submitPower.click(function(e) {
        var selrows = $outletsgrid.datagrid('getSelections'),
            value = 0,
            len = selrows.length,
            powCtrlVal = parseInt($selectPower.combobox("getValue")) || 0;

        e.preventDefault();

        if (self.pending) {
          $.ajax({contentType: "application/json",
            url: "xhroutpowcancel.jsp",
            type:"post", data: JSON.stringify(tocken),
            dataType:"json",
            success: function(data) {
              if (EL.UpdateStatus(data)) {
                clearPendingStatus();
              }
            }
          });

          return;
        }

        if (len < 1) {
          return EL.Dialog.alert(model.noselect);
        }

        EL.Dialog.confirm(model.doexecute, function() {
          //disable submit button
          $submitPower.attr("disabled", true);

          //get selected outlet value
          for(var i = 0; i < len; i++) {
            var id = selrows[i]["id"] - 1;
            value = (1 << id) | value;
          }

          var outlet1 = value & 16777215,
              outlet2 = value >>> 24;

          //save tocken
          var saveTocken = $.extend(
            EL.Auth.getJSON(), 
            {
              pduid : pduid,
              powstat: powCtrlVal,
              outlet1: outlet1,
              outlet2: outlet2
            }
          );

          var savePowCtrlHandler = function(obj) {
            //enable submit button
            $submitPower.attr("disabled", false);

            var status     = obj["uptstatus"],
                //overload outlet id
                oloutletid = 0, 
                oloutArr   = [];

            if (status == 51) {
              oloutletid = obj["oloutletid"];
            } else if (!EL.UpdateStatus(obj)) {
              return;
            }

            //nagative means pending status;
            var newPowCtrl = 0 - powCtrlVal;
            //0 doesn't have nagative number; 
            (newPowCtrl == 0) && (newPowCtrl = -2); 

            //Update datagrid ui
            for (var i = 0; i < len; i++) {
              var outidx = selrows[i]["id"] - 1;
              //If this outlet is not in overload status
              if (((1 << outidx) & oloutletid) == 0) {
                $outletsgrid.datagrid('updateRow', {
                  index: outidx,
                  row: { powstat: powCtrlVal }
                });

              //Put it in overload outlet arr
              } else {
                oloutArr.push(outidx + 1);
              }
            }

            //Has overload outlet, popup message
            oloutArr.length && EL.Alert(
              UPDATESTATUS[51].format(oloutArr.join(', '))
            );

            //Set pending status.
            setPendingStatus();
            self.checkStatus();
          };

          $.ajax({contentType: "application/json",
            url: "xhroutpowstatset.jsp",
            type:"post", data: JSON.stringify(saveTocken),
            dataType:"json",
            success: savePowCtrlHandler
          });
        });

      });

      EL.Privilege.setButton([$submitPower], 0x00004000);
    };

    self.setOutletsGrid = function(rows) {
      var ctrlTypeArr = [];
      for(var k in PDUCTRLTYPE) {
        ctrlTypeArr.push({
          text: PDUCTRLTYPE[k],
          value: parseInt(k)
        });
      }

      // var cols = [[
      //   {checkbox:true, align:"center"},
      //   {field:"id", title:"Outlet ID", width:150, formatter:function(value) {
      //     //return "Outlet " + value;
      //     return value;
      //   }},
      //   {field:"name", title:"Outlet Name", width:150,
      //     editor:{
      //       type:'text',
      //       required: true
      //     }
      //   },
      //   {field:"status", title:"Alarm Status", width:150, formatter:function(value, row) {
      //     var params = {pduid:pduid, id: row.id, max: powerFormat(row["actlimit"]) };

      //     return EL.SetAlarm.getAlarmStr("xhroutalarm", value, params, "W", 0x02000000);
      //   }},
      //   {field:"actpow", title:"Active Power (W)", width:150, formatter: powerFormat },
      //   {field:"powstat", title:"Power Status", width:150, formatter:function(value, row) {
      //     var icon = "icon-" + ((Math.abs(value) == 0 || Math.abs(value) == 2) ? "off" : "on"),
      //         txt = value > -1 ? POWERCTRLTYPE[value] : "Pending...";

      //     return '<span class="' + icon + '">' + txt + '</span>';
      //   }}
                      
      //           /*    ,{field:"powstat", title:"Power State On Startup", width:240,
      //                   formatter:function(value) {
      //                     return PDUCTRLTYPE[value];
      //                   },
      //                   editor:{
      //                     type:'combobox',
      //                     options:{ data: ctrlTypeArr, required:true }
      //                   }
      //                 }
      //                 ,{field:"name", title:"Outlet Name", width:240,
      //                   editor:{
      //                     type:'text',
      //                     required: true
      //                   }
      //                 }
      //                 ,{field:"current", title:"Current (mA)", width:100},
      //                 {field:"peapow", title:"Peak Power", width:100},
      //                 {field:"powfac", title:"Pow Factory", width:100},
      //                 {field:"delayon", title:"On Delay", width:80, editor:{
      //                   type:'numberbox',
      //                   options:{ required:true, max:7200, min:0 }
      //                 }},
      //                 {field:"delayoff", title:"Off Delay", width:80, editor:{
      //                   type:'numberbox',
      //                   options:{ required:true, max:7200, min:0 }
      //                 }},
      //                 {field:"rebotdur", title:"Reboot Duration", width:120, editor:{
      //                   type:'numberbox',
      //                   options:{ required:true, max:60, min:5 }
      //                 }}   */
                      
      // ]];
      var cols = [[
        {checkbox:true, align:"center"},
        {field:"id", title:model.outletid, width:120, formatter:function(value) {
          //return "Outlet " + value;
          return value;
        }},
        {field:"name", title:model.outletname, width:140,
          editor:{
            type:'text',
            required: true
          }
        },
        {field:"status", title:model.alarmstatus, width:180, formatter:function(value, row) {
          var params = {pduid:pduid, id: row.id, max: powerFormat(row["actlimit"]) };

          return EL.SetAlarm.getAlarmStr("xhroutalarm", value, params, "W", 0x02000000);
        }},
        {field:"actpow", title:model.activepower, width:140, formatter: powerFormat },
        {field:"powstat", title:model.powerstatus, width:180, formatter:function(value, row) {
          var icon = "icon-" + ((Math.abs(value) == 0 || Math.abs(value) == 2) ? "off" : "on"),
              txt = value > -1 ? POWERCTRLTYPE[value] : "Pending...";

          return '<span class="' + icon + '">' + txt + '</span>';
        }}                   
      ]];

      rows && (cols = EL.EditGrid.clearCols(cols, rows));

      $outletsgrid.datagrid({
        //columns: newCols,
        columns: cols,
        onSelect: setOutletsPrivi,
        onSelectAll: setOutletsPrivi
      });
    };

    self.getOutletsGrid = function() {
      $.ajax({contentType: "application/json",
        url: "xhroutgetgrid.jsp",
        type:"post", data: JSON.stringify(tocken),
        dataType:"json",
        success: function(rows) {
          self.setOutletsGrid(rows);

          $outletsgrid.datagrid("loadData", rows);

          //jEasyUI bug: remove the checked status of the header;
          $(".outlets .datagrid-header input").attr("checked", false)

          $(".center .loader").hide();
          setOutletsPrivi();
        },
        error:function() {
          console.log(arguments);
        }
      });
    };

    /*Is in the pending?*/
    self.pending = 1;

    /*
    Check outlet status is in pending?
    */
    self.checkStatus = function() {

      var statusHandler = function() {

        if ($(".outlets:visible").size() < 1) return;

        $.ajax({contentType: "application/json",
          url: "xhroutpowstatus.jsp",
          type:"post", data: JSON.stringify(tocken),
          dataType:"json",
          success: function(data) {
            if (typeof data.pending == "number") {
              self.pending = data.pending;

              if (self.pending) {
                setPendingStatus();
              } else {
                clearPendingStatus();
              }
            }
          }
        });
      };

      statusTimer = window.setInterval(statusHandler, 7000);

      //fire now;
      statusHandler();

    };

    return self;
  };

})(window);
