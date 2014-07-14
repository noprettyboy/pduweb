
(function() {
  EL.SNMP = function() {

    var tabSNMPSettings = $('#tabSNMPSettings');
    tabSNMPSettings.tabs();

    //$('#txtReadCommunityString').attr('disabled', true).addClass('disableBg');
    //$('#txtWriteCommunityString').attr('disabled', true).addClass('disableBg');

    $("div#tabSNMPSettings").show();


    var $chkEnableSNMPv1andv2 = $('#chkEnableSNMPv1andv2').change(function(e) {
      if ($chkEnableSNMPv1andv2.is(":checked")) {
        $("#txtReadCommunityString").removeAttr("disabled");
        $("#txtWriteCommunityString").removeAttr("disabled");
      } else {
        $("#txtReadCommunityString").attr("disabled", true);
        $("#txtWriteCommunityString").attr("disabled", true);
      }
    });

    var cookie_Value = getAuthCookie("authCookieId");
    var cookie_Value = parseInt(cookie_Value);      
    var objSnmpJson = {"cookie" : cookie_Value};  
    //Getting data from the server in JSON format
    var url = 'xhrsnmpget.jsp';
    var xmlhttp = getXMLObject();           
    if (xmlhttp) {
      xmlhttp.onreadystatechange  = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var data = xmlhttp.responseText;
          data = JSON.parse(data);
          var cookie = data.cookie;

          var chkSnmpV1V2Acs, chkSnmpV3Acs, chkTrapsAcs;
          chkSnmpV1V2Acs = (data.chkSnmpV1V2Acs);
          chkSnmpV3Acs = (data.chkSnmpV3Acs);
          chkTrapsAcs = (data.chkTrapsAcs);

          if (chkSnmpV1V2Acs == 0) {
            $("#chkEnableSNMPv1andv2").attr('checked', false);
          }else if (chkSnmpV1V2Acs == 1) {
            $("#chkEnableSNMPv1andv2").attr('checked', true);
          }

          $chkEnableSNMPv1andv2.change();

          $("#txtReadCommunityString").val(data.readCommStr); 
          $("#txtWriteCommunityString").val(data.writeCommStr);
          if (chkSnmpV3Acs == 0) {
            $("#chkEnableSNMPv3").attr('checked', false);
          }else if (chkSnmpV3Acs == 1) {
            $("#chkEnableSNMPv3").attr('checked', true);
          }
          $("#txtSysContact").val(data.sysContact); 
          $("#txtSysName").val(data.sysName); 
          $("#txtSysLocation").val(data.sysLocation); 
          if (chkTrapsAcs == 0) {
            $("#chkEnableSysSNMPTrapEvent").attr('checked', false);
          }else if (chkTrapsAcs == 1) {
            $("#chkEnableSysSNMPTrapEvent").attr('checked', true);
          }

          $("#txtHost1").val(data.host1); 
          $("#txtPort1").val(data.port1); 
          $("#txtCommunity1").val(data.community1); 
          $("#txtHost2").val(data.host2); 
          $("#txtPort2").val(data.port2); 
          $("#txtCommunity2").val(data.community2); 
          $("#txtHost3").val(data.host3);
          $("#txtPort3").val(data.port3); 
          $("#txtCommunity3").val(data.community3); 
        }
      };
      xmlhttp.open("POST", url, true); 
      xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");      
      xmlhttp.send(JSON.stringify(objSnmpJson));   
    }


    $("#tabSNMPSettings").mouseover(function() {
      generateTooltips();
    });

    // validate the contact form
    $("#frsnmp").validate({
      rules: {
        txtSysContact:{maxlength:32 },
        txtSysName:{maxlength:32 },
        txtSysLocation:{maxlength:32 },
        txtPort1: {required: true, digits:true, range: [1, 65535]},
        txtPort2: {required: true, digits:true, range: [1, 65535]},
        txtPort3: {required: true, digits:true, range: [1, 65535]},
        txtReadCommunityString:   {required:true, minlength:4, maxlength: 32},
        txtWriteCommunityString:  {required:true, minlength:4, maxlength: 32},
        txtHost1: {maxlength: 32 },
        txtHost2: {maxlength: 32 },
        txtHost3: {maxlength: 32 },
        txtCommunity1: {minlength: 4, maxlength: 32},
        txtCommunity2: {minlength: 4, maxlength: 32},
        txtCommunity3: {minlength: 4, maxlength: 32}
      },
      submitHandler: function(form) { 
        var cookie_Value = getAuthCookie("authCookieId");
        var cookie_Value = parseInt(cookie_Value);      
        var cookie = cookie_Value;
        var intchkSnmpV1V2AcsVal, intchkSnmpV3AcsVal, intchkTrapsAcsVal;
        var chkSnmpV1V2AcsVal = $('#chkEnableSNMPv1andv2').is(':checked');  
        var readCommStrVal =  $("#txtReadCommunityString").val(); 
        var writeCommStrVal = $("#txtWriteCommunityString").val();
        var chkSnmpV3AcsVal = $("#chkEnableSNMPv3").is(':checked');

        if ($("#txtSysContact").val() == null || $("#txtSysContact").val() == '')
            var sysContactVal = ""; 
        else
            var sysContactVal = $("#txtSysContact").val();

        if ($("#txtSysName").val() == null || $("#txtSysName").val() == '')
          var sysNameVal = ""; 
        else
          var sysNameVal = $("#txtSysName").val();

        if ($("#txtSysLocation").val() == null || $("#txtSysLocation").val() == '')
            var sysLocationVal = "";
        else
            var sysLocationVal = $("#txtSysLocation").val();

        var chkTrapsAcsVal = $("#chkEnableSysSNMPTrapEvent").is(':checked');

        if ($("#txtHost1").val() == null || $("#txtHost1").val() == '')
          var host1Val = "";
        else
          var host1Val = $("#txtHost1").val();

        var port1Val = parseInt($("#txtPort1").val());

        if ($("#txtCommunity1").val() == null || $("#txtCommunity1").val() == '')
            var community1Val = "";
        else
            var community1Val = $("#txtCommunity1").val();

        if ($("#txtHost2").val() == null || $("#txtHost2").val() == '')
          var host2Val = "";
        else
          var host2Val = $("#txtHost2").val();

        var port2Val = parseInt($("#txtPort2").val());
        if ($("#txtCommunity2").val() == null || $("#txtCommunity2").val() == '')
            var community2Val = "";
        else
            var community2Val = $("#txtCommunity2").val();

        if ($("#txtHost3").val() == null || $("#txtHost3").val() == '')
            var host3Val = "";
        else
            var host3Val = $("#txtHost3").val();

        var port3Val = parseInt($("#txtPort3").val());
        if ($("#txtCommunity3").val() == null || $("#txtCommunity3").val() == '')
            var community3Val = "";
        else 
            var community3Val = $("#txtCommunity3").val();

        /*
        if ($("#tabSNMPSettings").tabs("option", "selected") != 1) {
          //$("#tabSNMPSettings").tabs({ selected: 1 });
          $("#frsnmp").submit();
          return false;
        }
        */

        var changeSnmpJsonObj = {
          "cookie" : cookie, 
          "chkSnmpV1V2Acs": chkSnmpV1V2AcsVal,
          "readCommStr": readCommStrVal,
          "writeCommStr": writeCommStrVal,
          "chkSnmpV3Acs": chkSnmpV3AcsVal,
          "sysContact": sysContactVal,
          "sysName": sysNameVal,
          "sysLocation": sysLocationVal,
          "chkTrapsAcs": chkTrapsAcsVal,
          "host1": host1Val,
          "port1": port1Val,
          "community1": community1Val,
          "host2": host2Val,
          "port2": port2Val,
          "community2": community2Val,
          "host3": host3Val,
          "port3": port3Val,
          "community3": community3Val  
        };

        //EL.Confirm(MODEL.netsvr.change, function() {
          var xmlhttp = getXMLObject();   
          if (xmlhttp) {
            xmlhttp.onreadystatechange  = function() {
              if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var data = JSON.parse(xmlhttp.responseText);

                if (EL.UpdateStatus(data)) {
                  $('#mydialog').dialog('destroy');
                  $('#mydialog').html('');
                }
              }
            }
          }
          xmlhttp.open("POST", "xhrsnmppost.jsp", true);
          xmlhttp.send(JSON.stringify(changeSnmpJsonObj));
        //});
      }
    });

    EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000200);

  };
})();
