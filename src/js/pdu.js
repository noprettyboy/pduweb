/*
PDU functionalities
*/
(function() {

  var refreshTimer;

  var self = EL.PDUS = function() {

    var model = MODEL.pdu;

    var $pduproperty = $("#pduproperty"),
        $container = $(".pdu"),
        pduid = 1,
        tocken;

    //Prevent click too fast
    self.init = function() {
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(self.start, 500);
    };

    self.start = function() {
      var opts = EL.Master.getTabOpts($pduproperty);
      pduid = opts.pduid;
      tocken = $.extend({ pduid:pduid }, EL.Auth.getJSON());

      self.setPDUProperty();
    };

    self.setPDUProperty = function() {
      var pduCtrlTypeArr = [];
      for(var k in PDUCTRLTYPE) {
        pduCtrlTypeArr.push({ 
          text: PDUCTRLTYPE[k],
          value: PDUCTRLTYPE[k]
        });
      }

      /*
      1: means will be rewrite by post back datas.
      */
      var saveData = {
        name:     1,
        location: 1,
        delay:    1,
        powctrl:  0,
        resetegy: 0,
        resetout: 0
      };

      var rows = [
          /*Editable */
          // { key:"name", name:"PDU Name",group:"PDU Setting",
          { key:"name", name:model.pduname,group:model.pduset,
            editor: { type:"text", required: true},
            maxlength: 32
          },
          // { key:"location", name:"PDU Location",group:"PDU Setting",
          { key:"location", name:model.pdulocation,group:model.pduset,
            editor: { type:"text", required: true},
            maxlength: 32
          },
          // { key:"delay", name:"PDU Unit Coldstart Delay (0 - 3600 s)", group:"PDU Setting",
          { key:"delay", name:model.pduunitdelay, group:model.pduset,
            editor: { type:"text", required: true},
            min: 0, max: 3600
          },
          // { key:"powctrl", name:"Outlet State On PDU Startup", group:"PDU Setting", editor: {
          { key:"powctrl", name:model.outletstate, group:model.pduset, editor: {
              type:'combobox',
              options:{ 
                data: pduCtrlTypeArr, 
                required:true
              }
            }
          },
          // { key:"resetegy", name:"Reset Energy", group: "PDU Energy"},
          { key:"resetegy", name:model.resetenergy, group:model.pduenergy},
          // { key:"resetout", name:"Reset Outlet Energy", group: "PDU Energy"},
          { key:"resetout", name:model.resetolenergy, group:model.pduenergy},

          /*readonly*/
          // { key:"mac", name:"PDU MAC Address", group:"PDU Attribute"},
          { key:"mac", name:model.pdumacaddress, group:model.pduattribute},
          // { key:"rating", name:"Rating", group:"PDU Attribute"},
          { key:"rating", name:model.rating, group:model.pduattribute},
          /*
          { key:"ratevol", name:"Rating Voltage", group:"PDU Attribute"},
          { key:"ratecur", name:"Rating Current", group:"PDU Attribute"},
          { key:"ratepow", name:"Rating Power", group:"PDU Attribute"},
          { key:"ratecap", name:"Rating Capacity", group:"PDU Attribute"},
          */
          // { key:"resetmeter", name:"Resettable Energy Meter", group:"PDU Attribute"},
          { key:"resetmeter", name:model.resetenergymeter, group:model.pduattribute},
          // { key:"powval", name:"Active Power Value (W)", group:"PDU Attribute"},
          { key:"powval", name:model.activepowervalue, group:model.pduattribute},
          // { key:"powstat", name:"Active Power Status, Setting", group:"PDU Attribute"}
          { key:"powstat", name:model.activepowerset, group:model.pduattribute}
        ];

      EL.Privilege.setProperty(rows, 0x00000100);

      var getHandler = function(obj) {

        rows = EL.EditGrid.clearRows(rows, obj);

        for(var i = 0, len = rows.length; i < len; i++) {
          var row = rows[i],
              key = row.key,
              val = obj[key];

          //reset the value in saveData;          
          (key in saveData) && (saveData[key] = val);

          var resetHandler = function() {
            //make the save value different with cached : saveData, 1 means force update;
            var cmd = 'EL.PDUS.resetEnergy(' + JSON.stringify({ key: key, value: 1, force:1 }) + ')';
            // row.value = '<a onclick=\'' + cmd + '\' href="#"> Reset </a>';
            row.value = '<a onclick=\'' + cmd + '\' href="#"> {0} </a>'.format(model.reset);
            //will send 0
            saveData[key] = 0;
          };

          switch(key) {
            case "powctrl":
              row.value = PDUCTRLTYPE[val];
              break;
            case "powstat":
              var params = {pduid: pduid, max: (obj["actlimit"] / 1000)};
              row.value = EL.SetAlarm.getAlarmStr("xhrpdualarm", val, params, "W");
              break;
            case "resetegy":
              EL.Privilege.hasPrivilege(0x00000100)
                ? resetHandler()
                // : row.value = "No Permission: " + PRIVILEGES[0x00000100];
                : row.value = "{0} ".format(model.nopermission) + PRIVILEGES[0x00000100];
              break;
            case "resetout":
              EL.Privilege.hasPrivilege(0x00000100)
                ? resetHandler()
                // : row.value = "No Permission: " + PRIVILEGES[0x00000100];
                : row.value = "{0} ".format(model.nopermission) + PRIVILEGES[0x00000100];
              break;
            case "powval":
              row.value = (val / 1000).toFixed(0);
              break;
            default:
              row.value = val;
          }
        }

        $pduproperty.propertygrid({
          showGroup: true,
          scrollbarSize: 0,
          onAfterEdit: setHandler
        });
        $pduproperty.propertygrid("loadData", {rows : rows});

        $(".center .loader").hide();

        //for multi-language
        (function() {
          $(".pdu .datagrid-header-row td[field=name] span").eq(0).text(MODEL.sensor.name);
          $(".pdu .datagrid-header-row td[field=value] span").eq(0).text(MODEL.sensor.value);
        }());
      };

      var setHandler = function(idx, row, changes) {
        var key = row.key,
            val = row.value;

        /*
        If it need to valid the number and validate failed, rollback the changes on the UI. 
        */
        if (!EL.EditGrid.validField(row, val)) {
          row.value = saveData[key];
          $pduproperty.propertygrid("updateRow", {index: idx, row: row});
          return;
        }

        (key == "powctrl") && (val = self.getPDUCtrlValue(row.value));
        (key == "delay") && (val = val ? parseInt(val) : 0);

        //it's the same value, ignore it.
        if (!row.force && val == saveData[key]) {
          return;
        }

        /*Send Change Request*/
        var sendRequest = function() {
          saveData[key] = val;
          
          var saveTocken = $.extend({}, tocken, saveData);

          $.ajax({contentType: "application/json",
            url: "xhrpduset.jsp",
            type:"post", data: JSON.stringify(saveTocken),
            dataType:"json",
            success: function(obj) {
              if (EL.UpdateStatus(obj) && changes == "reset") {
                // EL.Dialog.alert("Reset Success!");
                EL.Dialog.alert(model.resetsuccess);
              }

              //rollback the data of force update
              row.force && (saveData[key] = 0);
            },
            error:function() {
              console.log(arguments);
            }
          });
        };

        var rollbackPowControl = function() {
          row.value = PDUCTRLTYPE[saveData[key]];
          $pduproperty.propertygrid("updateRow", {index: idx, row: row});
        };

        if (key == "powctrl") {
          // EL.Dialog.confirm("Are you sure you want to make this change for all outlets?", sendRequest, rollbackPowControl);
          EL.Dialog.confirm(model.surechangeol, sendRequest, rollbackPowControl);
        } else {
          sendRequest();
        }

      };

      /*
      public method
      */
      var resetEnergy = self.resetEnergy = function(row) {
        // EL.Dialog.confirm("Do you really want to reset the energy?", function() {
        EL.Dialog.confirm(model.reallyresetenergy, function() {
          setHandler(0, row, "reset");
        });
      };

      $.ajax({contentType: "application/json",
        url: "xhrpduget.jsp",
        type:"post", data: JSON.stringify(tocken),
        dataType:"json",
        success: getHandler,
        error:function() {
          console.log(arguments);
        }
      });
    };

    return self;
  };

  //public method
  self.getPDUCtrlValue = function(ctrlStr) {
    for(k in PDUCTRLTYPE) {
      if (ctrlStr == PDUCTRLTYPE[k]) {
        return parseInt(k);
      }
    }
    return 0;
  };

})();