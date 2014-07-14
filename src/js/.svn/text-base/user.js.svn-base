/*User*/
(function() {

  EL.User = function() {

    var model = MODEL.users;

    var rolenameval;
    var selected;

    var $gdUser           = $('#gdUser'),
        $gdRoleinUser     = $('#gdRoleinUser'),
        $tabCreateNewUser = $('#tabCreateNewUser'),
        $chkEnableSNMPAccess =  $('#chkEnableSNMPAccess'),
        $chkenable        = $('#chkenable'),
        $drpSecurityLevel = $('#drpSecurityLevel'),
        $btnNewUser       = $('#btnNewUser'),
        $btnEditUser      = $('#btnEditUser'),
        $btnDeleteUser    = $('#btnDeleteUser'),
        $deleteUser       = $('#deleteUserDialog');

    var username      = $('#username');
    var fullname      = $('#fullname');
    var password      = $('#password');
    var cnfpassword   = $('#cnfpassword');
    var telenum       = $('#telenum');
    var email         = $('#email');
    var frpasschk     = $('#frpasschk');

    var $locklayer = $("#roles .locklayer"),
        $txtAuthPassPhrase = $("#txtAuthPassPhrase"),
        $txtConfirmAuthPassPhrase = $('#txtConfirmAuthPassPhrase'),
        $txtPrivacyPassPhrase = $('#txtPrivacyPassPhrase'),
        $txtConfirmPrivacyPassPhrase = $("#txtConfirmPrivacyPassPhrase"),
        $authalgor = $("#authalgor"),
        $privalgor = $("#privalgor");


    var rowindexUser, rowidUser, rowindexRoleinUser, rowidRoleinUser, eventName;
    var validator;
    var user, rolename;

    var xmlhttp = getXMLObject(); 

    var cookie_Value = parseInt(getAuthCookie("authCookieId"));

    var setUserGrid = function(rows) {
      var cols = [[
        // {field:'active', title: 'Active', width:90, align:"center", formatter: EL.Formatter.bool, sortable: true},
        {field:'active', title: '{0}'.format(model.active), width:90, align:"center", formatter: EL.Formatter.bool, sortable: true},
        // {field:'username', title:'User Name', width:125, sortable: true},
        {field:'username', title:'{0}'.format(model.username), width:125, sortable: true},
        // {field:'fullname', title:'Full Name', width:125, sortable: true},
        {field:'fullname', title:'{0}'.format(model.fullname), width:125, sortable: true},
        // {field:'roles', title:'Roles', sortable: true, width:150, sortable: true}
        {field:'roles', title:'{0}'.format(model.roles), sortable: true, width:150, sortable: true}
      ]];

      $gdUser.datagrid({
        columns: cols,
        height: 308,
        singleSelect: true,
        remoteSort: false
      });

      $gdUser.datagrid("loadData", {rows: EL.User.filterDNA(rows)});
    };

    var getUserGrid = function() {
      $.ajax({
        url: "xhrusersgetgrid.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: setUserGrid
      });
    };

    /*
    Set checkbox in Role grid
    */
    var setRolePrivi = function() {
      var $inputs = $("#roles .datagrid-body input[type=checkbox]"),
          rows = $gdRoleinUser.datagrid("getRows");

      //default user's role cannot be changed;
      (user == "admin" && eventName != "new")
        ? $locklayer.show()
        : $locklayer.hide();

      //it's not default user?
      $inputs.each(function(i) {
        var $input = $(this),
            privi = (rows[i]["rolename"] == rolename) || EL.Privilege.isSuperUser();

        if (!privi) {
          $input.attr("disabled", true);
          $input.attr("checked", false);
          $gdRoleinUser.datagrid("unselectRow", i);
        } else {
          $input.removeAttr("disabled");
        }
      });
    };

    var setUserRole = function(rows) {
      var modelrl = MODEL.role;
      var cols = [[
        {checkbox:true, align:"center"},
        // {field:'rolename', title:'Role Name', width:150 },
        {field:'rolename', title:'{0}'.format(modelrl.rolename), width:150 },
        // {field:'description', title:'Description', width: 340}
        {field:'description', title:'{0}'.format(modelrl.description), width: 340}
      ]];

      $gdRoleinUser.datagrid({
        columns: cols,
        height: 308,
        singleSelect: true,
        onSelectAll: setRolePrivi,
        onSelect: setRolePrivi
      });

      $gdRoleinUser.datagrid("loadData", {rows: EL.User.filterDNA(rows)});
      //disable other roles
      setRolePrivi();
    };

    var getUserRole = function() {
      $.ajax({
        url: "xhrrolesgetgrid.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: setUserRole
      });
    };

    var openEditUserDialog = function(title) {
      var model = MODEL.buttons;

      validator && validator.resetForm();

      $tabCreateNewUser.dialog({
        // title:  '<img src="images/user_add.png" alt=icon/> ' + title,
        title: '<div class="icon-useradd">{0}</div>'.format(title),
        width: 550,
        height: 'auto',
        modal: true,
        resizable: false,
        dialogClass: 'sample',
        buttons: {
          "Submit":{
            id: "btnEditUserAtDialog",
            // text: "   OK   ",
            text: model.oks,
            click: function() {$('#frCreateNewUser').submit();},
            id: "btnOk"
          },
          "Cancel" :{
            // text: " Cancel ",
            text: model.cancels,
            click: function() {$(this).dialog("destroy");},
            id: "btnCancel"
          }
        },
        close: function() {
          $(this).dialog('destroy');
        }
      });

      $tabCreateNewUser.dialog('open');

      //reset privilege
      privilege();
    };

    // Creating User and RoleinUser Grids.
    getUserGrid();
    getUserRole();

    $tabCreateNewUser.tabs({
      select: function(e, ui) {
        //regresh to display it.
        $gdRoleinUser.datagrid();
      }
    });

    $btnNewUser.click(function() {
      username.removeAttr("disabled");
      $locklayer.hide();

      $("#chkRoleinUserOperator").attr('checked',true);
      eventName = 'new';

      resetRoleFields();

      //update global rolename to the rolename of current user
      rolename = EL.Privilege.rolename;
      setRolePrivi();

      // openEditUserDialog("Create New User");
      openEditUserDialog(model.createnewuser);
      $gdRoleinUser.datagrid("unselectAll");
    });

    $btnEditUser.click(function() {
      var row = $gdUser.datagrid("getSelected");

      resetRoleFields();

      if (!row) {
        // return EL.Dialog.alert("Please select a row!");
        return EL.Dialog.alert(model.noselect);
      }

      user = row["username"];

      if (user == "admin" && EL.Privilege.username != "admin") {
        return EL.Alert(model.nopermission);
      }

      if (!EL.Privilege.isCurrentUser(user)
        && !EL.Privilege.isSuperUser()) {
        return EL.Dialog.alert(model.nopermission);
      }

      (user == "admin" || user == EL.Privilege.username)
        ? $chkenable.attr('disabled', true)
        : $chkenable.attr('disabled', false);

      username.attr("disabled", "disabled");
      eventName = 'edit';

      var objeditUsersJson = $.extend({"username": row["username"]}, EL.Auth.getJSON());

      $.ajax({
        url: "xhredituserget.jsp",
        type:"post", data: JSON.stringify(objeditUsersJson),
        dataType: "json",
        success: function(data) {
          $('#username').val(data.username);
          $('#fullname').val(data.fullname);
          $('#password').val(data.password);
          $('#cnfpassword').val(data.password);
          $('#telenum').val(data.telenum);
          $('#email').val(data.email);

          //$drpSecurityLevel.val(data.drpsecuritylevel);
          $drpSecurityLevel[0].value = data.drpsecuritylevel;
          //$('#authproto').val(data.temperature);
          $('#authproto')[0].value = data.temperature;

          $chkenable.attr('checked', data.chkenable ? true : false);
          $('#frpasschk').attr('checked', data.frpasschk ? true : false);

          rolename = data["rolename"];

          var roles = $gdRoleinUser.datagrid('getData')["rows"];
          for(var i = 0, len = roles.length; i < len; i++) {
            if (roles[i]["rolename"] == rolename) {
              $gdRoleinUser.datagrid("selectRow", i);
              break;
            }
          }

          $chkEnableSNMPAccess
            .attr("checked", data.snmpchk ? true : false)
            .change();

          $drpSecurityLevel.change();

          //These should be done after enalbeSNMP & $drpSecurityLevel changed;
          $('#chkPasswordAuth')
            .attr('checked', data.chkpasswordauth ? true : false)
            .change();
          $('#chkPrivacyAuth')
            .attr('checked', data.chkprivacyauth ? true : false)
            .change();

          $txtAuthPassPhrase.val(data.txtauthpassphrase);
          $txtConfirmAuthPassPhrase.val(data.txtauthpassphrase);
          $txtPrivacyPassPhrase.val(data.txtprivacypassphrase);
          $txtConfirmPrivacyPassPhrase.val(data.txtprivacypassphrase);
          //$authalgor.val(data.authalgor);
          $authalgor[0].value = data.authalgor;
          //$privalgor.val(data.privalgor);
          $privalgor[0].value = data.privalgor;

          // openEditUserDialog("Edit Userz: \"" + data.username + "\"");
          openEditUserDialog(model.edituser +"\"" + user + "\"");
        }
      });
    });

    $btnDeleteUser.click(function() {
      var row = $gdUser.datagrid("getSelected");

      if (!row) {
        // return EL.Alert("Please select a row!");
        return EL.Alert(model.noselect);
      }

      var userName = row["username"],
          userRole = row["roles"];

      if (userName == "admin") {
        // return EL.Alert("This user cannot be deleted!");usernotbedel
        return EL.Alert(model.usernotbedel);
      }

      if (userName == EL.Privilege.username) {
        // return EL.Alert("You cannot delete yourself!");
        return EL.Alert(model.notdelyourself);
      }

      if (EL.Privilege.rolename != "admin") {
        // return EL.Alert("You cannot delete this user");
        return EL.Alert(model.notdelthisuser);
      }

      var objDeleteUserJson = {"cookie": cookie_Value, "username": userName};

      // EL.Confirm("Do you really want to delete the user {0}?".format(userName), function() {
        EL.Confirm(model.reallydeluser.format(userName), function() {
        $.ajax({
          url: "xhrusersdel.jsp",
          type: "post", data: JSON.stringify(objDeleteUserJson),
          dataType: "json",
          success: function(data) {
            //only sucess need to refresh the Grid.
            if (EL.UpdateStatus(data)) {
              getUserGrid();
            }
          }
        });

        $(this).dialog('destroy');
      });

    });

    function resetRolesatManageRoles() {
      $('#gdURole').remove();
      $('#deleteURoleDialog').remove();
      $('#divUEditArguments').remove();
      $('#addUPrivileges').remove();
      $('#tabUCreateNewRole').remove(); 
      $('#btnUNewRole').remove();
      $('#btnUEditRole').remove();
      $('#btnUDeleteRole').remove();
    }

    function resetRolesatEditRoles() {
      $('#gdRURole').remove();
      $('#deleteRURoleDialog').remove();
      $('#divRUEditArguments').remove();
      $('#addRUPrivileges').remove();
      $('#tabRUCreateNewRole').remove();  
    }

    // Change Events
    $chkEnableSNMPAccess.change(function () {
      if ($chkEnableSNMPAccess.attr('checked')) {
        $drpSecurityLevel.attr('disabled', false).removeClass('disableBg');
        $('#chkPasswordAuth').attr('disabled', false).removeClass('disableBg');
        checkPasswordAuthStatus();
        $('#chkPrivacyAuth').attr('disabled', false).removeClass('disableBg');
        checkPrivacyAuthStatus();
        $('#drpAuthProtocol').attr('disabled', false).removeClass('disableBg');
        $('#drpPrivacyProtocol').attr('disabled', false).removeClass('disableBg');
        checkdrpSecurityLevelStatus();
      } else {
        $drpSecurityLevel.attr('disabled',true).addClass('disableBg')
        disableAllinSNMPAccess();         
      }
    });     
      
    $drpSecurityLevel.change(function () {
      checkdrpSecurityLevelStatus();
    });

    // Calling Change Events    
    //$chkEnableSNMPAccess.change();
    //$drpSecurityLevel.change();

    // Misc Functions for Change Events 
    function checkPasswordAuthStatus() {
      if ($('#chkPasswordAuth').attr('checked')) {
        $txtAuthPassPhrase.attr('disabled', true).addClass('disableBg');
        $txtConfirmAuthPassPhrase.attr('disabled', true).addClass('disableBg');
      } else {
        $txtAuthPassPhrase.attr('disabled', false).removeClass('disableBg');
        $txtConfirmAuthPassPhrase.attr('disabled', false).removeClass('disableBg');
      }
    }

    function checkPrivacyAuthStatus() {
      if ($('#chkPrivacyAuth').attr('checked')) {
        $txtPrivacyPassPhrase.attr('disabled', true).addClass('disableBg');
        $txtConfirmPrivacyPassPhrase.attr('disabled', true).addClass('disableBg');
      } else {
        $txtPrivacyPassPhrase.attr('disabled', false).removeClass('disableBg');
        $txtConfirmPrivacyPassPhrase.attr('disabled', false).removeClass('disableBg');
      }
    }
    
    function checkdrpSecurityLevelStatus() {
      if (!$drpSecurityLevel.attr('disabled')) {
        var selectedValue = $drpSecurityLevel.val();
        if (selectedValue == 0) {
          disableAllinSNMPAccess();
        }else if (selectedValue == 1) {
          disableAllinSNMPAccess();
          $('#chkPasswordAuth').attr('disabled', false).removeClass('disableBg');
          $('#drpAuthProtocol').attr('disabled', false).removeClass('disableBg');
          $authalgor.attr("disabled", false);
        }else if (selectedValue == 3) {
          disableAllinSNMPAccess();
          $('#chkPasswordAuth').attr('disabled', false).removeClass('disableBg');
          $('#drpAuthProtocol').attr('disabled', false).removeClass('disableBg');
          $('#chkPrivacyAuth').attr('disabled', false).removeClass('disableBg');
          $('#drpPrivacyProtocol').attr('disabled', false).removeClass('disableBg');
          $authalgor.attr("disabled", false);
          $privalgor.attr("disabled", false);
        }
      }
    }

    function disableAllinSNMPAccess() {
      $('#chkPasswordAuth').attr('checked', true);
      $('#chkPasswordAuth').attr('disabled',true).addClass('disableBg')
      $txtAuthPassPhrase.attr('disabled', true).addClass('disableBg');
      $txtConfirmAuthPassPhrase.attr('disabled', true).addClass('disableBg');
      //$txtAuthPassPhrase.val('');
      //$txtConfirmAuthPassPhrase.val('');
      $('#chkPrivacyAuth').attr('checked', true);
      $('#chkPrivacyAuth').attr('disabled',true).addClass('disableBg')
      $txtPrivacyPassPhrase.attr('disabled', true).addClass('disableBg');
      $txtConfirmPrivacyPassPhrase.attr('disabled', true).addClass('disableBg');
      //$txtPrivacyPassPhrase.val('');
      //$txtConfirmPrivacyPassPhrase.val('');
      $('#drpAuthProtocol').attr('disabled',true).addClass('disableBg');
      $('#drpPrivacyProtocol').attr('disabled',true).addClass('disableBg');

      $authalgor.attr("disabled", true);
      $privalgor.attr("disabled", true);
    }

    //Status Changed
    $('#chkPasswordAuth').change(checkPasswordAuthStatus);
    $('#chkPrivacyAuth').change(checkPrivacyAuthStatus);
    
    //Form validation
    //$tabCreateNewUser.mouseover(generateTooltips);

    //Post New/Edit Users data to the Server
    function dsendUsersForm(url, objUsersJson) {
      $.ajax({
        url: url,
        type: "post", data: JSON.stringify(objUsersJson),
        dataType: "json",
        success: function(data) {
          if (EL.UpdateStatus(data)) {
            getUserGrid();
            $tabCreateNewUser.dialog('destroy');
          }
          // (data.uptstatus == 3) && EL.Dialog.alert("Entered username is already existed.");
          (data.uptstatus == 3) && EL.Dialog.alert(model.enteruserexist);
        }
      });
    }

    // validating the Create New User form
    validator = $("#frCreateNewUser").validate({
      rules:{
        username: {required: true, minlength: 3, maxlength: 31, nowhitespaces: true},
        fullname: {maxlength: 62},
        password: {required: true, minlength: 8, maxlength: 31},
        cnfpassword: {required: true, equalTo:"#password"},
        telenum: {maxlength:64},
        email: {maxlength:64, email:true},
        authpassphrase: {required:true, minlength: 8, maxlength: 31, notEqualTo:"snmpv3"},
        cfmauthpassphrase: {required:true, equalTo:"#txtAuthPassPhrase"},
        privacypassphrase:{required: true,minlength: 8, maxlength: 31},
        cfmprivacypassphrase:{required: true, equalTo: "#txtPrivacyPassPhrase"}
      },
      submitHandler: function(form) {
        var url;

        selected = $tabCreateNewUser.tabs( "option", "selected" );

        var roleRow = $gdRoleinUser.datagrid("getSelected");
        if (!roleRow) {
          // return EL.Dialog.alert("Please select a role!");noselectrole
          return EL.Dialog.alert(model.noselectrole);
        }

        var usernameval = $('#username').val();
        var fullnameval = $('#fullname').val();
        var passwordval = $('#password').val();
        var telenumval  = $('#telenum').val();
        var emailval    = $('#email').val();
        var chkenableval  = $chkenable.is(':checked');
        var frpasschkval  = $('#frpasschk').is(':checked');
        var snmpchkval  = $chkEnableSNMPAccess.is(':checked');
        var drpsecuritylevelval = parseInt($drpSecurityLevel.val());
        var chkpasswordauthval = $('#chkPasswordAuth').is(':checked');
        var txtauthpassphraseval = $txtAuthPassPhrase.val();
        var chkprivacyauthval = $('#chkPrivacyAuth').is(':checked');
        var txtprivacypassphraseval = $txtPrivacyPassPhrase.val();

        rolenameval = roleRow["rolename"];

        var temperatureval = parseInt($('#authproto').val());

        var objUsersJson = {
          "cookie" : cookie_Value,
          "username": usernameval,
          "fullname": fullnameval,
          "password": passwordval,
          "telenum": telenumval,
          "email": emailval,
          "chkenable": chkenableval,
          "frpasschk": frpasschkval,
          "snmpchk": snmpchkval,
          "drpsecuritylevel": drpsecuritylevelval,
          "chkpasswordauth": chkpasswordauthval,
          "txtauthpassphrase": txtauthpassphraseval,
          "chkprivacyauth": chkprivacyauthval,
          "txtprivacypassphrase": txtprivacypassphraseval,
          "authalgor": parseInt($authalgor.val()),
          "privalgor": parseInt($privalgor.val()),
          "rolename": rolenameval,
          "temperature": temperatureval
        };

        if (eventName == 'new') {
          url = 'xhrnewusersset.jsp';
        } else {
          url = 'xhredituserpost.jsp';
        }

        dsendUsersForm(url, objUsersJson);

        //If current user change the setting of himself, update the temperature;
        (usernameval == EL.Privilege.username) && (EL.Privilege.temperature = temperatureval);
      }
    });

    //password policy
    var getPasswordPolicy = function() {
      $.ajax({
        url: "xhrpwpolicyget.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: function(data) {
          /*{"pwdpolicy":0,"pwdaginginterval":86400,"minpwdlen":8,"maxpwdlen":32,"pswpolicy":11}*/
          var min = data.minpwdlen,
              max = data.maxpwdlen,
              pswpolicy = data.pswpolicy,
              policy = {
                lowerChar : pswpolicy & 1 ? true: false,
                upperChar : pswpolicy & 2 ? true: false,
                numberChar : pswpolicy & 4 ? true: false,
                specialChar : pswpolicy & 8 ? true: false
              };

          if (pswpolicy & 16) {
            password.rules("add", $.extend({
              minlength: min,
              maxlength: max
            }, policy));

            cnfpassword.rules("add", $.extend({
              equalTo:"#password"
            }, policy));
          }

        }
      });
    };

    //delay some time to get the password policy
    window.setTimeout(getPasswordPolicy, 300);

    function resetRoleFields() {
      $tabCreateNewUser.tabs('select', 0);
      username.val('');
      fullname.val('');
      password.val('');
      cnfpassword.val('');
      telenum.val('');
      email.val('');

      frpasschk.attr("checked", false);

      $txtAuthPassPhrase.val('');
      $txtConfirmAuthPassPhrase.val('');
      $txtPrivacyPassPhrase.val('');
      $txtConfirmPrivacyPassPhrase.val('');

      $chkenable
        .attr('checked', false)
        .removeAttr("disabled");

      $chkEnableSNMPAccess
        .attr("checked", false)
        .change();

      $drpSecurityLevel
        .val("0")
        .change();
    }

    var privilege = function() {
      EL.Privilege.setButton([$btnNewUser, $btnEditUser, $btnDeleteUser, $("#btnOk")], 0x00000020);
    };

    privilege();

  };

  //filter rows
  EL.User.filterDNA = function(rows) {
    var newRows = [];
    for (var i = 0, l = rows.length; i < l; i++) {
      var row = rows[i];
      if (
        EL.Master.pdumode != 1 && (row["username"] == "landlord" || row["rolename"] == "Landlord")
      ){

      } else {
        newRows.push(row);
      }
    }
    return newRows;
  };

})();



