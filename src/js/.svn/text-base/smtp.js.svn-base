(function() {

  EL.SMTP = function() {
    var model = MODEL.smtp;

    var submitButtonID = "btnMainSubmit";

    $('#btnSendTestEmailSMTP').click(function () {
      $('#txtRecipientEmailAddress').attr('disabled', false).removeClass('disableBg');
      submitButtonID = "btnSendTestEmailSMTP";
      $('#frsmtpone').submit(); 
    });
    
    $('#btnMainSubmit').click(function () {
      submitButtonID = "btnMainSubmit";
      $('#txtRecipientEmailAddress').attr('disabled', true).addClass('disableBg');
      $("#frsmtpone").submit();
      $('#txtRecipientEmailAddress').attr('disabled', false).removeClass('disableBg');
    });
    
    function resetFields() {
      $("img[id*='error']").remove();
      $("img[src*='images/tick.gif']").remove();
      var elementsByName = document.getElementsByTagName('input');
      for (var i = 0; i < elementsByName.length; i ++ ) {
        elementsByName[i].style.borderColor = '';
      }
    }
        
    //$( "input:submit, input:reset, input:button").button();

    //server authentication checkbox functionality
    var chkRequiredAuth = $('#chkRequiredAuth');

    chkRequiredAuth.change(function () {
      if (chkRequiredAuth.attr('checked')) {
        $('#txtUserNameSMTP').attr('disabled', false).removeClass('disableBg');
        $('#txtPasswordSMTP').attr('disabled', false).removeClass('disableBg');
      }else
      {
        $('#txtUserNameSMTP').attr('disabled', true).addClass('disableBg');
        $('#txtPasswordSMTP').attr('disabled', true).addClass('disableBg');
      }
    });
    
    chkRequiredAuth.change(); 

    var cookie_Value = getAuthCookie("authCookieId");
    cookie_Value = parseInt(cookie_Value);  
    var xmlhttp = getXMLObject(); 
    var objSmtpJson = { "cookie" : cookie_Value};     
    var privilege_value;
    if (xmlhttp)
    {
      xmlhttp.onreadystatechange = function() {

        if (xmlhttp.readyState == 4  && xmlhttp.status == 200) {
          var data = JSON.parse(xmlhttp.responseText);
          $("#txtServerName").val(data.servername);
          $("#txtPort").val(data.port);
          $("#txtSenderEmailAddress").val(data.senderemail);
          $("#txtNumberofSendingRetries").val(data.nosendingretries);
          $("#txtTimeIntervalforRetries").val(data.timeintervalforretries);
          //$("#chkRequiredAuth").attr('checked' ,data.chkreqauth);
          var chkreqauth_value = parseInt(data.chkreqauth);
          if (chkreqauth_value) {
            $("#chkRequiredAuth").attr("checked", "checked");
            $('#txtUserNameSMTP').attr('disabled', false).removeClass('disableBg');
            $('#txtPasswordSMTP').attr('disabled', false).removeClass('disableBg');
            $("#txtUserNameSMTP").val(data.username);
            $("#txtPasswordSMTP").val(data.password);
          } else {
            $("#chkRequiredAuth").removeAttr("checked");
            $("#txtUserNameSMTP").val('');
            $("#txtPasswordSMTP").val('');  
            $('#txtUserNameSMTP').attr('disabled', true).addClass('disableBg');
            $('#txtPasswordSMTP').attr('disabled', true).addClass('disableBg');
          }
        }

      }
      xmlhttp.open("POST", "xhrsmtpget.jsp" , true); //"samplejson.json"
      xmlhttp.setRequestHeader("Content-Type", "application/json"); 
      xmlhttp.send(JSON.stringify(objSmtpJson));
    } 


    $("#SMTPholder").mouseover(function() {
      //alert('mouserover event alert on SMTP holder');
      generateTooltips();
    });
   // validate the contact form
    $("#frsmtpone").validate({
      rules: {
        txtServerName: {required: true, maxlength:64},
        txtPort: {required: true, number:true,range:[1, 65535]},
        txtSenderEmailAddress: {required: true, email:true}, 
        txtsendingretryscount: {required: true,number:true,range:[0,10]},
        txtTimeIntervalforRetries: {required: true,number:true,range:[1,60]},
        txtUserNameSMTP: {required:true, minlength:1, maxlength:32},
        txtpassword: {required:true, minlength:3, maxlength:32},
        txtrecipientemail: {required: true, email:true}
      },
      submitHandler: function(form) {
        var cookie_Value = getAuthCookie("authCookieId");
        cookie_Value = parseInt(cookie_Value);  
        var url, objSMTPJson;         
        var servername=$("#txtServerName").val();
        var port= parseInt($("#txtPort").val());
        var senderemail=$("#txtSenderEmailAddress").val();
        var nosendingretries= parseInt($("#txtNumberofSendingRetries").val());
        var timeintervalforretries=parseInt($("#txtTimeIntervalforRetries").val());
        var chkreqauth=$("#chkRequiredAuth").is(':checked');
        var username =$("#txtUserNameSMTP").val();
        var pasword=$("#txtPasswordSMTP").val();
        var recipientmailaddress=$("#txtRecipientEmailAddress").val();
        if (chkreqauth) {             
          chkreqauth=1;             
          }
        else{
          chkreqauth=0; 
          username= "";
          pasword= "";
        }
        if (submitButtonID == "btnSendTestEmailSMTP")
        {
          url = "xhrsmtpsendmailpost.jsp";
          objSMTPJson = { "cookie" : cookie_Value ,"servername" : servername, "port" :port, "senderemail" :senderemail,
                  "nosendingretries":nosendingretries, "timeintervalforretries":timeintervalforretries, "chkreqauth" :chkreqauth,
                  "username" :username, "password" : pasword, "recipientmailaddress" : recipientmailaddress};
        }else if (submitButtonID == "btnMainSubmit")
        {
          url = "xhrsetsmtppost.jsp";
          objSMTPJson = { "cookie" : cookie_Value ,"servername" : servername, "port" :port, "senderemail" :senderemail,
                  "nosendingretries":nosendingretries, "timeintervalforretries":timeintervalforretries, "chkreqauth" :chkreqauth,
                  "username" :username, "password" : pasword };             
        }
        dsendSMTP(url, objSMTPJson);
        //return false;
      }
     });
        
    $("#errordialog_send").dialog({
      // title:  '<img src="images/16x16/email.png" alt=icon/>   Testing SMTP configuration',
      title:  '<div class="icon-testemail">  {0}  </div>'.format(model.testsmtp),
      resizable: false,
      width: 300, 
      height: 120,
      modal: true,
      autoOpen: false,
      dialogClass: 'ajaxerrdlg'
    });

    var modelbt = MODEL.buttons;
    $("#errordialog_result").dialog({
      // title:  '<img src="images/16x16/email.png" alt=icon/>   Testing SMTP configuration',
      title:  '<div class="icon-testemail">  {0}  </div>'.format(model.testsmtp),
      resizable: false,
      width: 300, 
      height: 250,
      modal: true,
      autoOpen: false,
      dialogClass: 'sample',
      buttons: {
        "OK" : {
          // text: "OK",
          text: modelbt.oks,
          "id": "btnOkAtErrorDialogResult",
          click: function() {
            $( this ).dialog( "close" );
          }
        }
      },
      open: function(event, ui) {
        $(this).closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
      } 
    });       
    
    function dsendSMTP(url, objSMTPJson)
    {
      submitbtn="";
      var xmlhttp = getXMLObject();
      $('#btnCancelatErrorDialogSend').click(function () {
        xmlhttp.abort();
        $("#errordialog_send").dialog('close');
      });
      if (xmlhttp) 
      {       
        var spnSmtpSend = document.getElementById('spnSmtpSend');
        var spnSmtpResult = document.getElementById('spnSmtpResult');
        if (submitButtonID == "btnSendTestEmailSMTP") {
          // spnSmtpSend.innerHTML = "Sending test email, please wait ..."
          spnSmtpSend.innerHTML = model.testemailinfo;
          $('#errordialog_send').dialog('open');  
        }
        xmlhttp.onreadystatechange  = function() {
          try
          {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200)//0 
            {   
              var data, uptstatus;  
              data = JSON.parse(xmlhttp.responseText);
              uptstatus  = parseInt(data.uptstatus);
              if (submitButtonID != "btnSendTestEmailSMTP") {
                $('#errordialog_send').dialog('close');               
                if (uptstatus == 1)
                {
                  $('#mydialog').dialog('destroy');
                  $('#mydialog').html('');
                  destroySendDialogs();
                }
                else if ( uptstatus == 2 ) {
                  window.location.reload();
                } 
                else {  
                  $("#errordialog").html(model.errorinfo + uptstatus);
                  $("#errordialog").dialog('open');           
                  $('#mydialog').dialog('destroy'); 
                  destroySendDialogs();         
                  return false;
                } 
              }else if (submitButtonID != "btnMainSubmit") {            
                $('#errordialog_send').dialog('close'); 
                if (uptstatus == 0)
                {                                                                   
                  spnSmtpResult.innerHTML = model.probleminfo;
                  spnSmtpResult.innerHTML += model.checkinfo;
                }
                else if (uptstatus == 1)
                {
                  spnSmtpResult.innerHTML = model.succinfo;
                }
                else if (uptstatus == 2)
                {
                  window.location.reload();
                }
                else if (uptstatus == 3) {
                  spnSmtpResult.innerHTML = model.probleminfo;
                  spnSmtpResult.innerHTML += model.checkinfo;
                  spnSmtpResult.innerHTML += model.errorname;
                }
                else if (uptstatus == 4) {
                  spnSmtpResult.innerHTML = model.probleminfo;
                  spnSmtpResult.innerHTML += model.checkinfo;
                  spnSmtpResult.innerHTML += model.errorconn;
                }
                else if (uptstatus == 5) {
                  spnSmtpResult.innerHTML = model.probleminfo;
                  spnSmtpResult.innerHTML += model.checkinfo;
                  spnSmtpResult.innerHTML += model.errordns;
                }
                else
                {                                                                   
                  spnSmtpResult.innerHTML = model.probleminfo;
                  spnSmtpResult.innerHTML += model.checkinfo;
                }
                $('#errordialog_result').dialog('open');
              }
            }
          }
          catch(e)
          {
            alert(model.errorsmtp + e.message);
            return false;
          }
        }         
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-Type", "application/json"); 
        xmlhttp.send(JSON.stringify(objSMTPJson));
      }
    }   
    
    function destroySendDialogs() {
      $('#errordialog_send').dialog('destroy');
      $('#errordialog_send').remove();
      $('#errordialog_result').dialog('destroy');
      $('#errordialog_result').remove();  
    }

    EL.Privilege.setButton([$("#btnMainSubmit"), $("#btnSendTestEmailSMTP")], 0x00080000);

  };

}());