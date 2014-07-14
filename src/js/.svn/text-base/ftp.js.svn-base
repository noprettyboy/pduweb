(function() {

  EL.Ftp = function() {

    $( "input:submit, input:reset, input:button").button();
    var valftpPort, valChkftp;

    //  Form validations start
    var cookie_Value = getAuthCookie("authCookieId");
    cookie_Value = parseInt(cookie_Value);


    (function() {
      var objftpJson = {"cookie" : cookie_Value};

      //Getting data from the server in JSON format
      $.ajax({
        url: "xhrftpget.jsp",
        type: "post", data: JSON.stringify(objftpJson),
        dataType: "json",
        success: function(data) {
          valftpPort = data.ftpport;
          valChkftp = data.chkftpacs;
          $("#chkEnableFTP").attr('checked', valChkftp ? true : false);
          $("#txtFTPPort").val(valftpPort);
        }
      });

    })();


    //Sending data to the server in JSON format
    function dsendftpForm(ftpPortVal, chkftpVal) {

      var changeftpJsonObj = {
        "cookie" : cookie_Value,
        "ftpport" : parseInt(ftpPortVal),
        "chkftpacs" : parseInt(chkftpVal)
      };

      $.ajax({
        url: "xhrftppost.jsp",
        type: "post", data: JSON.stringify(changeftpJsonObj),
        dataType: "json",
        success: function(data) {
          if (EL.UpdateStatus(data)) {
            (ftpPortVal != valftpPort) && EL.ResetDevice.reboot(30);

            $('#mydialog').dialog('destroy');
            $('#mydialog').html('');
          }
        }
      });
    }
    
    $("#FTP_Holdings").mouseover(function() {
      generateTooltips();
    });

    // validate the contact form
    $("#frftp").validate({
      rules: {
        txtFTPPort: {required:true, number:true, min: 1, max:65535}     
      },
      submitHandler: function(form) { 
        var ftpPortVal, chkftpVal;
        ftpPortVal = parseInt($('#txtFTPPort').val());
        if (ftpPortVal.length == 0) {
          ftpPortVal = 0;
        }
        boolchkftpVal = $('#chkEnableFTP').is(':checked');
        if (boolchkftpVal) {
          intchkftpVal = 1;
        } else {
          intchkftpVal = 0;
        }
        if (ftpPortVal != valftpPort || intchkftpVal != valChkftp) {
          //EL.Confirm(MODEL.netsvr.change, function() {
            dsendftpForm(ftpPortVal, intchkftpVal);
          //});
        } else {      
           $('#mydialog').dialog('destroy');
           $('#mydialog').html('');
           return false;
        }         
      }
    });

    EL.Privilege.setButton([$("#btnMainSubmit")], "0x00040000");

  };

}());