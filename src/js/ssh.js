(function(window,document) {

  var self = EL.SSH = {};

  self.init = function() {

    var valSshPort, valChkSshval;

    var cookie_Value = getAuthCookie("authCookieId");
    cookie_Value = parseInt(cookie_Value);
    var objSshJson = {"cookie" : cookie_Value};
    //Getting data from the server in JSON format.
    var url = 'xhrsshget.jsp';
    var xmlhttp = getXMLObject();
    if (xmlhttp) 
    {
      xmlhttp.onreadystatechange  = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var data = xmlhttp.responseText;
          data = JSON.parse(data);
          var cookie = data.cookie;
          valSshPort = data.sshPort;
          valChkSshval = data.chkSshAcs;
          $("#SSH_PORT").val(valSshPort);
          $("#chkEnableSSH").attr('checked', valChkSshval);
        }
      };
      xmlhttp.open("POST", url, true); 
      xmlhttp.setRequestHeader("Content-Type", "application/json");      
      xmlhttp.send(JSON.stringify(objSshJson));   
    }

    //Send data to the server in JSON format.
    function dsendSshForm(sshPortVal, chkSshVal) {
      var cookie_Value = getAuthCookie("authCookieId");
      var cookie_Value = parseInt(cookie_Value);      
      var cookie = cookie_Value;
      var changeSshJson = {"cookie" : cookie, "sshPort" : parseInt(sshPortVal), "chkSshAcs" : chkSshVal};
      var xmlhttp = getXMLObject();   
      if (xmlhttp) {
        xmlhttp.onreadystatechange  = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {        
            var data = JSON.parse(xmlhttp.responseText);

            if (EL.UpdateStatus(data)) {
              (sshPortVal != valSshPort) && EL.ResetDevice.reboot(30);

              $('#mydialog').dialog('destroy');
              $('#mydialog').html('');
            }
          }
        }
      }
      xmlhttp.open("POST", "xhrsshpost.jsp", true); 
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      xmlhttp.send(JSON.stringify(changeSshJson));
    }

    //Form Validations start
    $("#SSH_holder").mouseover(function() {
      generateTooltips();
    });

    /////////////////////////// validate the contact form////////////////////////////////////
    $("#frssh").validate({
      rules: {
        SSH_PORT: {required: true, digits:true, min: 1, max: 65535}     
      },
      submitHandler: function(form) { 
        var sshPortVal, chkSshVal;
        sshPortVal = $('#SSH_PORT').val();  
        chkSshVal = $('#chkEnableSSH').is(':checked');
        if (sshPortVal != valSshPort || chkSshVal != valChkSshval) {
          dsendSshForm(sshPortVal, chkSshVal);
        } else {
          $('#mydialog').dialog('destroy');
          $('#mydialog').html('');
          return false;
        }
      }
    });
    ///////////////////////// Validation code end ////////////////////////////////////////

    EL.Privilege.setButton([$("#btnMainSubmit")], "0x00040000");

  };

})(window, document);