(function(window, document) {

  var serverReach = EL.ServerReach = function() {

    var model = MODEL.serreach;

    var eventName;

    var $gdServerReachability = $('#gdServerReachability'),
        $btnNewServer = $('#btnNewServer'),
        $createNewServer = $('#createNewServer'),
        $btnUpdateServer = $("#btnUpdateServer"),
        $btnEditServer = $('#btnEditServer'),
        $btnDeleteServer = $('#btnDeleteServer'),
        $frAddNewServer = $("#frAddNewServer"),
        $IP_Hostname = $("#IP_Hostname");

    var statusFormatter = function(value, row) {
      return PINGSTATUS[value] || value;
    };

    var refreshGrid = function() {

      $.ajax({
        url: "xhrserverreachgrid.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: function(rows) {
          $gdServerReachability.datagrid({columns:[[
              // {field:"ipaddress", title:"IP Address/Hostname", width:170, sortable:true },
              //        //{field:"ping", title:"Ping", width: 100, formatter: EL.Formatter.bool},
              // {field:"ping", title:"Ping Enabled", width: 100, formatter: EL.Formatter.bool, sortable:true},
              // {field:"status", title:"Status", width: 210, formatter: statusFormatter, sortable:true}
              {field:"ipaddress", title:model.iphostnm, width:170, sortable:true },
                     //{field:"ping", title:"Ping", width: 100, formatter: EL.Formatter.bool},
              {field:"ping", title:model.pingenable, width: 100, formatter: EL.Formatter.bool, sortable:true},
              {field:"status", title:model.status, width: 210, formatter: statusFormatter, sortable:true}
            ]],
            singleSelect: true,
            height: 268,
            remoteSort: false
          });

          $gdServerReachability.datagrid("loadData", { rows: rows });
        }
      });
    };

    var showEditDialog = function(title) {
      var model = MODEL.buttons;

      $createNewServer.dialog({
        title:  '<span class="icon-serReach">' + title + '</span>',
        width: 510,
        height: "auto",
        modal: true,
        resizable: false,
        buttons:{
          // "   OK   " : function() {
          //   $frAddNewServer.submit();
          // },
          // "  Cancel  " : function() {
          //   $(this).dialog("destroy");
          // }
          "   OK   " : {
            text: model.oks,
            click: function() {$frAddNewServer.submit();},
            id: "btnOk"
          },
          "  Cancel  " : {
            text: model.cancels,
            click: function() {$(this).dialog("destroy");},
            id: "btnClose"
          }
        },
        close: function() {
          $createNewServer.dialog('destroy');
        }
      });

    };

    $btnUpdateServer.click(refreshGrid).click();

    $btnNewServer.click(function() {

      eventName = "new";

      var rows = $gdServerReachability.datagrid("getRows");

      $IP_Hostname.removeAttr("disabled");

      if (rows.length < 8) {
        $('input,select', $createNewServer).val('');

        /*default value*/
        $('#No_Pings').val(15);
        $('#Successful_Ping').val(60);
        $('#Unsuccessful_Ping').val(5);
        $('#UnsuccessfulPing_Failure').val(5);
        $('#Resume_Ping').val(180);

        $frAddNewServer.validate().resetForm();

        showEditDialog(model.addnew);
      } else {
        EL.Dialog.alert(model.reachemax);
      }
    });

    $btnEditServer.click(function() {

      eventName = "edit";

      var row = $gdServerReachability.datagrid("getSelected");

      if (!row) {
        return EL.Dialog.alert(model.noselect);
      }

      var tocken = $.extend({ipaddress: row["ipaddress"]}, EL.Auth.getJSON());

      //$IP_Hostname.attr("disabled", true);

      $.ajax({
        url: "xhreditserverreachget.jsp",
        type: "post", data: JSON.stringify(tocken),
        dataType: "json",
        success: function(data) {
          $IP_Hostname.val(data.iphostname);
          $('#chkEnablePingMonitoring').attr('checked', data.chkenpingmonitoring);
          $('#No_Pings').val(data.noofpingstoenfeature);
          //$('#Successful_Ping').val(data.waittimesuccessfulping);
          //$('#Unsuccessful_Ping').val(data.waittimeunsuccessfulping);
          $('#UnsuccessfulPing_Failure').val(data.unsuccessfulpingfailure);
          $('#Resume_Ping').val(data.resumeping);

          // showEditDialog('Edit Server Property: "{0}"'.format(data.iphostname));
          showEditDialog('{0}: "{1}"'.format(model.editserver,data.iphostname));
        }
      });
    });

    $btnDeleteServer.click(function() {
      var row = $gdServerReachability.datagrid("getSelected");

      if (!row) {
        return EL.Dialog.alert(model.noselect);
      }

      var tocken = $.extend({ipaddress: row["ipaddress"]}, EL.Auth.getJSON());

      // EL.Dialog.confirm("Do you really want to delete the server \"" + row["ipaddress"] + "\"?", function() {
      EL.Dialog.confirm(model.deleteser.format(row["ipaddress"]), function() {
        $.ajax({
          url: "xhrserverreachdel.jsp",
          type: "post", data: JSON.stringify(tocken),
          dataType: "json",
          success: function(data) {
            EL.UpdateStatus(data);
            refreshGrid();
          }
        });
      });
    });

    function dsendSerReach(url, objSerReachJson) {
      $.ajax({
        url: url,
        type: "post", data: JSON.stringify(objSerReachJson),
        dataType: "json",
        success: function(data) {
          if (EL.UpdateStatus(data)) {
            $createNewServer.dialog("destroy");
            refreshGrid();
          }
        }
      });
    }

    // validate the Create New Server form
    $("#frAddNewServer").validate({
      rules: {
        IP_Hostname:  {required:true, maxlength:32},
        No_Pings:     {required:true, number:true, min:1, max:200},
        //Successful_Ping: {required: true,number:true,range: [5, 600]},
        //Unsuccessful_Ping: {required: true,number:true,range: [3, 600]},
        UnsuccessfulPing_Failure: {required: true, number:true, range: [1, 100]},
        Resume_Ping: {required: true, number:true, range: [1, 1200]}
      },
      submitHandler: function(form)
      {  
        var pingStatus = null;
        var status = null;
        var Boolchkenpingmonitoring = $("#chkEnablePingMonitoring").is(':checked');

        var cookie_Value = parseInt(getAuthCookie("authCookieId"));
        var url ;
        var iphostname = $IP_Hostname.val();
        var noofpingstoenfeature = parseInt($("#No_Pings").val());
        //var waittimesuccessfulping = parseInt($("#Successful_Ping").val());
        //var waittimeunsuccessfulping = parseInt($("#Unsuccessful_Ping").val());
        var unsuccessfulpingfailure = parseInt($("#UnsuccessfulPing_Failure").val());
        var resumeping = parseInt($("#Resume_Ping").val());

        if (eventName == 'new') {
          url="xhrnewserverreachpost.jsp";
          var objSerReachJson = { 
            "cookie" : cookie_Value ,
            "iphostname" : iphostname,
            "chkenpingmonitoring" : Boolchkenpingmonitoring,
            "noofpingstoenfeature" : noofpingstoenfeature,
            //"waittimesuccessfulping" : waittimesuccessfulping,
            //"waittimeunsuccessfulping" : waittimeunsuccessfulping,
            "unsuccessfulpingfailure" : unsuccessfulpingfailure,
            "resumeping" : resumeping
          };
        }
        else if (eventName == 'edit') {
          url="xhreditserverreachpost.jsp";
          var currentRowData = $gdServerReachability.datagrid("getSelected");
          var oldipaddress_value = currentRowData.ipaddress;
          var objSerReachJson = {
            "cookie" : cookie_Value ,
            "oldiphostname" : oldipaddress_value, 
            "newiphostname" : iphostname, 
            "chkenpingmonitoring" : Boolchkenpingmonitoring, 
            "noofpingstoenfeature" : noofpingstoenfeature,
            //"waittimesuccessfulping" : waittimesuccessfulping,
            //"waittimeunsuccessfulping" : waittimeunsuccessfulping,
            "unsuccessfulpingfailure" : unsuccessfulpingfailure, 
            "resumeping" : resumeping
          };        
        }
        dsendSerReach( url,objSerReachJson);

      }
    });


    EL.Privilege.setButton([$("#btnNewServer"), $("#btnEditServer"), $("#btnDeleteServer")], 0x00100000);

  };

})(window, document);