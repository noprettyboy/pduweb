(function() {

  EL.Telnet = function() {

    var valtelPort, valChktelval;
    try {
      var cookie_Value = getAuthCookie("authCookieId");
      cookie_Value = parseInt(cookie_Value);
      var objTelnetJson = {"cookie" : cookie_Value};
      //Getting data from the server in JSON format
      var url = 'xhrtelnetget.jsp';
      var xmlhttp = getXMLObject();
      if (xmlhttp) {
        xmlhttp.onreadystatechange  = function() {
          try
          {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
            {   
              var data = xmlhttp.responseText;
              data = JSON.parse(data);
              var cookie = data.cookie 
                    var privilege_val = data.privilege;
                valtelPort = data.telnetPort;
                valChktelval = data.chkTelAcs;
                $("#Tel_Port").val(valtelPort);
                $("#chkEnableSSH").attr('checked', valChktelval);
                if (privilege_val == 0) {
                $("#btnMainSubmit").attr('disabled',true).addClass('disableButton');
              } else {
                  $("#btnMainSubmit").attr('disabled',false).removeClass('disableButton');
              }
            }
          }
          catch(e)
          {
            alert("Error Occured At Auth onreadystatechange : " + e.message);
          }
        };
        xmlhttp.open("POST", url, true); 
        xmlhttp.setRequestHeader("Content-Type", "application/json");      
        xmlhttp.send(JSON.stringify(objTelnetJson));   
      }
      //Sending data to the server using JQUERY .post method
      function dsendTelnetForm(telPortVal, chkTelVal) {
        var cookie_Value = getAuthCookie("authCookieId");
        var cookie_Value = parseInt(cookie_Value);
        var cookie = cookie_Value;
        var changeTelnetJsonObj = {"cookie" : cookie, "telnetPort" : parseInt(telPortVal), "chkTelAcs" : chkTelVal};
        var xmlhttp = getXMLObject();   
        if (xmlhttp) 
        {
          xmlhttp.onreadystatechange  = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              var data = JSON.parse(xmlhttp.responseText);
              if (EL.UpdateStatus(data)) {
                (telPortVal != valtelPort) && EL.ResetDevice.reboot(30);

                $('#mydialog').dialog('destroy');
                $('#mydialog').html('');
              }
            }
          }
        }
        xmlhttp.open("POST", "xhrtelnetpost.jsp", true); 
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(changeTelnetJsonObj));
      }
      // Form validations start
      $("#Telnet_Holdings").mouseover(function() {
        generateTooltips();
      });

      // validate the contact form
      $("#frtelnet").validate({
        rules: {
          Tel_Port: {required: true, digits: true, min: 1, max: 65535}
        },
        submitHandler: function(form) {
          var telPortVal, chkTelVal;
          telPortVal = $('#Tel_Port').val();
          chkTelVal = $('#chkEnableSSH').is(':checked');
          if (telPortVal != valtelPort || chkTelVal != valChktelval) {
            //EL.Confirm(MODEL.netsvr.change, function() {
              dsendTelnetForm(telPortVal, chkTelVal);
            //});
          } else {
            $('#mydialog').dialog('destroy');
            $('#mydialog').html('');
            return false;
          }
        }
      });

    }catch(e) {
      alert(" Telnet Validation Error: " + e.message);
    }

    EL.Privilege.setButton([$("#btnMainSubmit")], "0x00040000");

  };

}());