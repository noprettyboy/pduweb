/*
*roles functionalities
*/
(function($, window, document) {  

  var roles = EL.Roles = function() {
    model = MODEL.role;

    var $roleGrid = $("#rolegrid"),
        //edit role related;
        $editRoleDialog = $("#editrole"),
        $editRoleGrid = $("#editrolegrid"),
        $priviRoleDialog = $("#privirole"),
        $txtRoleName = $("#txtRoleName"),
        $txtDescription = $('#txtDescription'),
        $parametersGrid = $("#gdDivParameters"),
        $privilegesGrid = $("#gdDivPrivileges"),
        $roleform = $("#editrole .formval"),
        $btnNewRole = $("#btnNewRole"),
        $btnEditRole = $("#btnEditRole"),
        $btnDeleteRole = $("#btnDeleteRole"),
        $btnEditPrivileges = $("#btnEditPrivileges"),
        $btnSavePrivileges = $("#btnSavePrivileges"),
        editmode,
        switchoutlet;

    roles.init = function() {
      roles.setRolesList();
      //roles.setBtnStatus();
      roles.bindEvent();
      roles.setValidate();

      //not admin user? disable all the role functions;
      !EL.Privilege.isSuperUser() && EL.Privilege.setButton(
        [$btnNewRole, $btnEditRole, $btnDeleteRole, $btnEditPrivileges, $btnSavePrivileges],
        0
      );
    };

    roles.setValidate = function() {
      $.validator.addMethod("username", function(value, element) {
        return value && /^[A-Za-z_][A-Za-z_0-9]+$/g.test(value);
      }, "The field must start with letter, and consist with numbers, letters and underlines.");

      $roleform.validate({
        rules: {
          txtRoleName: {required: true, minlength: 3, maxlength: 32, username: true},
          txtDescription: {maxlength: 64}
        }
      });
    };

    roles.setRolesList = function() {
      $.ajax({contentType: "application/json",
        url : "xhrrolesgetgrid.jsp",
        type : "post", data : EL.Auth.getTocken(),
        //type : "get",
        dataType : "json",
        success : function(data) {
          roles.setRolesGrid(data);
        },
        error : function(res, err) {
          console.log(res, err);
        }
      });
    };

    roles.setRolesGrid = function(rows) {
      $roleGrid.datagrid({
        columns: [[
          // {field:'rolename', title:'Role Name', sortable:true, width:248},
          {field:'rolename', title:'{0}'.format(model.rolename), sortable:true, width:248},
          // {field:'description', title:'Description', sortable:true, width:249}
          {field:'description', title:'{0}'.format(model.description), sortable:true, width:249}
        ]],
        singleSelect: true,
        height: 306,
        remoteSort: false
      });
      $roleGrid.datagrid("loadData", { rows: EL.User.filterDNA(rows) });
    };

    /*
    * set the button states: Does user have the right to do the operation?
    */
    roles.setBtnStatus = function() {
      $.ajax({contentType: "application/json",
        url : "xhrrolegetpriv.jsp",
        type : "post", data : EL.Auth.getTocken(),
        dataType : "json",
        success : function(data) {
          if (data.privilege) {
            roles.bindEvent();
          }
        },
        error : function(res, err) {
          console.log(res, err);
        }
      });

    };

    /*
    Binding event on button
    */    
    roles.bindEvent = function() {
      //we only need to bind the event once
      var $btns = $(".roles .btn");
      if ($btns.hasClass("disable")) {

        $btns.removeClass("disable");

        $btnNewRole.click(function(e) {
          editmode = false;

          roles.setRolesEditDialog();
          //if create new role, set the first tabl selected.
          $editRoleDialog.tabs("select", 0);
        });

        $btnEditRole.click(function(e) {
          editmode = true;

          var rolename = roles.getSelectRoleName();

          if (rolename) {
            roles.setRolesEditDialog(rolename);
          } else {
            // EL.Dialog.alert('Please select a row!');
            EL.Dialog.alert(model.noselect);
          }
        });

        $btnDeleteRole.click(function(e) {
          var rolename = roles.getSelectRoleName();

          if (rolename) {
            if (rolename == "admin") {
              // EL.Dialog.alert("This role can not be deleted!");
              EL.Dialog.alert(model.rolenotbedel);
            }else {
              // EL.Dialog.confirm("Do you really want to delete the role " + rolename + "?", function() {
                EL.Dialog.confirm(model.reallydelrole.format(rolename), function() {
                roles.delRole(rolename);
              });
            }
          } else {
            // EL.Dialog.alert('Please select a row');
            EL.Dialog.alert(model.noselect)
          }
        });

        roles.setEditRolePrivi(1);

      }
    };

    /*
    Get selected role from user list grid.
    */
    roles.getSelectRoleName = function() {
      var row = $roleGrid.datagrid('getSelected');

      return row ? row["rolename"] : row;
    };

    roles.setEditRolePrivi = function(privi) {
      if (privi) {
        $btnEditPrivileges.click(roles.setRolesPriviDialog);
        $btnSavePrivileges.click(roles.saveRoles);
        roles.setEditRoleBtn();
      } else {
        $btnEditPrivileges.off();
        $btnSavePrivileges.off();
        roles.setEditRoleBtn("admin");
      }
    };

    roles.setEditRoleBtn = function(rolename) {
      /*
      Admin & User role cannot be modified.
      */
      if (rolename == "admin") {
        $btnEditPrivileges.addClass("disableButton");
        $btnSavePrivileges.addClass("disableButton");
      } else {
        $btnEditPrivileges.removeClass("disableButton");
        $btnSavePrivileges.removeClass("disableButton");
      }
    };

    /*
    Setting editing roles
    */
    roles.setRolesEditDialog = function(rolename) {
      var modelbt = MODEL.buttons;

      roles.setEditRoleBtn(rolename);

      //create tabs
      $editRoleDialog.tabs({
        //fix bug, first time opened edit role grid will be empty
        select: function(event, ui) {
          (ui.index == 1) && $editRoleGrid.datagrid();
        }
      });
      //initial dialogs
      $editRoleDialog.dialog({
        // title:  '<img src="images/role_add.png" alt=icon/> Role Information',
        title:  '<div class="icon-roleadd"> {0} </div>'.format(model.roleinfo),
        width: 430,
        autoHeight: true,
        modal: true,
        resizable: false,
        dialogClass: 'sample',
        buttons: {
          "Cancel" :{
            // text: " Cancel ",
            text: modelbt.cancels,
            click: function() {
              $(this).dialog("destroy");
            },
            // title: "Click Cancel to Close",
            title: "{0}".format(model.clickcancel),
            id: "btnCancel"
          }
        },
        close: function() {
          $(this).dialog("destroy");
        }
      });

      //reset form
      $roleform.validate().resetForm();

      //no role name offered means create a new role
      if (!rolename) {
        //filled with empty privileges
        roles.setRolesEditGrid([]);

        $txtRoleName
          .val("")
          .attr("readonly", false)
          .removeClass("disable");
        $txtDescription
          .val("");
          //.attr("readonly", false);

      } else {
        var tocken =  $.extend({rolename: rolename}, EL.Auth.getJSON());

        //filled in privileges
        $.ajax({contentType: "application/json",
          url : "xhreditrolesget.jsp",
          type : "post", data : JSON.stringify(tocken),
          dataType : "json",
          success : function(data) {

            var privileges = data.privileges,
                switchoutlet = data.switchoutlet1 | data.switchoutlet2 << 24;

            $txtRoleName
              .val(data.rolename)
              .attr("readonly", true)
              .addClass("disable");
            $txtDescription
              .val(data.description);
              //.attr("readonly", true);

            var rows = roles.getRoleDataFromBytes(privileges, switchoutlet);

            roles.setRolesEditGrid(rows);
          }
        });
      }
    };

    roles.saveRoles = function(e) {
      if ($(e.target).hasClass("disableButton")) return;

      if (!$roleform.valid()) {
        return;
      }

      var rolesData = $editRoleGrid.datagrid("getRows"),
          privileges = 0, switchoutlet = 0;

      //get privileges and outlets bytes data from arr
      for(var i = 0, len = rolesData.length; i < len; i++ ) {
        var id = rolesData[i].id;

        if (id == 0x00004000) {
          var outlets = roles.getOutletArrFromText(rolesData[i].parameters);
          for(var j in outlets) {
            switchoutlet = switchoutlet | outlets[j];
          }
        }

        privileges = privileges | id;

        //we need not this logic again, because where will no empty switchoutlet option on the rows.
        //if (switchoutlet || id != 0x00004000) { }  
      }

      var tocken =  $.extend(EL.Auth.getJSON(), {
        rolename: $txtRoleName.val(),
        description : $txtDescription.val(),
        privileges : privileges,
        switchoutlet1 : switchoutlet & 16777215,
        switchoutlet2 : switchoutlet >>> 24
      });

      url = editmode ? "xhreditrolesset.jsp" : "xhrnewrolesset.jsp";

      $.ajax({contentType: "application/json",
        url : url,
        type : "post", data : JSON.stringify(tocken),
        dataType : "json",
        success : function(data) {
          switch(data.uptstatus) {
            case 1:
              //EL.Dialog.alert("Update successfully");
              $editRoleDialog.dialog("destroy");
              roles.setRolesList();
              break;
            case 2:
              EL.Dialog.alert("Authentication/Authorization failed.");
              break;
            case 3:
              EL.Dialog.alert("Entered Role is already existed.");
              break;
            default:
              EL.Dialog.alert("Role is not created, update failed.");
              break;
          }
        },
        error : function(res, err) {
          console.log(res, err);
        }
      });

    };

    roles.delRole = function(rolename) {
      var tocken =  $.extend(EL.Auth.getJSON(), { rolename: rolename });

      $.ajax({contentType: "application/json",
        url : "xhrrolesdel.jsp",
        type : "post", data : JSON.stringify(tocken),
        dataType : "json",
        success : function(data) {
          if (EL.UpdateStatus(data)) {
            EL.Message(model.deldone);
            roles.setRolesList();
          }
        },
        error : function(res, err) {
          console.log(res, err);
        }
      });
    };

    /*
    return type: [{ id: "", privileges: "", parameters: "" }, ...]
    */
    roles.getRoleDataFromBytes = function(privileges, switchoutlet) {
      var rows = [];

      //pick up privileges 
      for(var key in PRIVILEGES) {
        if (privileges & key) {
          var row = {
            id : key,
            privileges : EL.Privilege.getText(key),
            parameters : ""
          };

          //has switch outlets
          if (key == 0x00004000) {
            var outletArr = [];

            for(var id in OUTLETS) {
              if (id & switchoutlet) {
                outletArr.push(OUTLETS[id]);
              }
            }

            //using ' ' to the parameters value from PRIVILEGES
            row.parameters = outletArr.join(' , ') + ' ';
          }

          rows.push(row);
        }
      }
      return rows;
    };

    roles.setRolesEditGrid = function(data) {
      $editRoleGrid.datagrid({
        columns:[[
          // {field:'privileges', title:'Privileges', width:226},
          {field:'privileges', title:'{0}'.format(model.privileges), width:226},
          // {field:'parameters', title:'Parameters', width:174, formatter: function(value) {
          {field:'parameters', title:'{0}'.format(model.parameters), width:174, formatter: function(value) {
            return "<span title='" + value + "'>" + value + "</span>"
          }}
        ]],
        singleSelect: true,
        height: 340
      });

      //fix bug the UI will be delayed for some time.
      $editRoleGrid.datagrid("loadData", data);
    };

    roles.setRolesPriviDialog = function(e) {
      var modelbt = MODEL.buttons;
      if ($(e.target).hasClass("disableButton")) return;

      //privilege dialog
      $priviRoleDialog.dialog({
        // title:  '<img src="images/role_key.png" alt="icon"/> Privileges Editing',
        // title:  '<div class="icon-rolekey"> Privileges Editing </div>',
        title:  '<div class="icon-rolekey"> {0} </div>'.format(model.privilegesedit),
        width: 670,
        height: "auto",
        modal: true,
        resizable: false,
        buttons: {
          "OK" :{
            // text: " OK ",
            text: " {0} ".format(modelbt.oks),
            click: function() {
              var privArr = $privilegesGrid.datagrid("getSelections"),
                  paraArr = $parametersGrid.datagrid("getSelections"),
                  privileges = 0,
                  outlets = 0;

              for(var o in paraArr) {
                outlets = outlets | paraArr[o]["parameters"];
              }

              for(var i in privArr) {
                //If the outlets is zero, then skip selected the SwitchOutlet options.
                var privi = privArr[i]["privileges"];
                if (outlets || privi != 0x00004000) {
                  privileges = privileges | privi;
                }
              }

              var rows =  roles.getRoleDataFromBytes(privileges, outlets);

              roles.setRolesEditGrid(rows);

              $(this).dialog("destroy");
            },
            // title: "Click here to close"
            title: "{0}".format(model.clicksavecancel)
          }
        },
        close: function() {
          $(this).dialog("destroy");
        }           
      });

      //grid related
      $privilegesGrid.datagrid({
        columns: [[
          {checkbox:true, align:"center"},
          {field: "privileges", title: model.privileges, width: 270, formatter: function(value) {
            return EL.Privilege.getText(value)
          }}
        ]],
        checkbox: true,
        onSelect: function(rowid, row) {
          var $parametersGridContainer = $parametersGrid.closest(".datagrid");
          if (row["privileges"] == 0x00004000) {
            $parametersGridContainer.show();
            $parametersGrid.datagrid();
          } else {
            $parametersGridContainer.hide();
          }
        },
        onUnselect: function(rowid, row) {
          var $parametersGridContainer = $parametersGrid.closest(".datagrid");
          (row["privileges"] == 0x00004000) && $parametersGridContainer.hide();
        },
        idField: "privileges",
        height: 350
      });

      $parametersGrid.datagrid({
        columns: [[
          {checkbox:true, align:"center"},
          {field: "parameters", title:model.parameters, width: 270, formatter: function(value) {
            return OUTLETS[value]
          }}
        ]],
        idField: "parameters",
        checkbox: true,
        height: 350
      });

      var priviArr = [], paramArr = [];

      for(var key in PRIVILEGES_Arr) {
        priviArr.push({ privileges : PRIVILEGES_Arr[key] });
      }

      var outcount = 0;
      for(var id in OUTLETS) {
        (outcount++ < EL.Privilege.outcount) && paramArr.push({ parameters : id });
      }

      $privilegesGrid.datagrid("loadData", priviArr);
      $parametersGrid.datagrid("loadData", paramArr);

      //set selection
      $privilegesGrid.datagrid("clearSelections");
      $parametersGrid.datagrid("clearSelections");

      var editRows = $editRoleGrid.datagrid('getRows');

      for(var i = 0, len = editRows.length; i < len ; i++) {
        var id = editRows[i].id, 
            param = editRows[i].parameters;

        $privilegesGrid.datagrid("selectRecord", id);
        if (id == 0x00004000 && param) {
          var arr  = roles.getOutletArrFromText(param);
          for(j in arr) {
            $parametersGrid.datagrid("selectRecord", arr[j]);
          }
        }
      }

    };

    /*
    input: Outlet 1 , Outlet 2 , Outlet 3 , Outlet 4 , Outlet 5 , Outlet 6 , Outlet 7 
    output: [ 1, 2, 4, 8 , 16 , 32, 64 ]
    */
    roles.getOutletArrFromText = function(strOutlets) {
      var arr = [];
      for(var id in OUTLETS) {
        //Is the outlet selected, etc: has the "Outlet 1 " in parameters
        if (strOutlets.indexOf(OUTLETS[id] + ' ') > -1) {
          arr.push(id);
        }
      }
      return arr;
    };



    return roles;
  };


})(jQuery, window, document);
