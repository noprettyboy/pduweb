(function(window,document) {

  //USB functionality
  var self = EL.PasswordPolicy = {};

  self.init = function() {

    $( "input:submit, input:reset").button();
    var errorImage = '<img src="images/cross.gif" alt=""/>';
    //Password Aging checkbox functionality
    var chkPasswordAging = $('#chkPasswordAging');

    chkPasswordAging.change(function () {
      if (chkPasswordAging.attr('checked')) {
        $('#drpPasswordAgingInterval').attr('disabled', false).removeClass('disableBg');
      } else {
        $('#drpPasswordAgingInterval').attr('disabled', true).addClass('disableBg');
      }
    });

    chkPasswordAging.change();

    var chkStrongPasswords = $('#chkStrongPasswords');

    chkStrongPasswords.change(function () {

      if (chkStrongPasswords.attr('checked')) {
        $('#txtMinPasswordLength').attr('disabled', false).removeClass('disableBg');
        $('#txtMaxPasswordLength').attr('disabled', false).removeClass('disableBg');
        $('#chkEnforceOneLowercase').attr('disabled', false).removeClass('disableBg');
        $('#chkEnforceOneUppercase').attr('disabled', false).removeClass('disableBg');
        $('#chkEnforceOneNumericCase').attr('disabled', false).removeClass('disableBg');
        $('#chkEnforceOneSpecialCharacter').attr('disabled', false).removeClass('disableBg');
        $('#txtPasswordHistorySize').attr('disabled', false).removeClass('disableBg');
      } else {
        $('#txtMinPasswordLength').attr('disabled', true).addClass('disableBg');
        $('#txtMaxPasswordLength').attr('disabled', true).addClass('disableBg');
        $('#chkEnforceOneLowercase').attr('disabled', true).addClass('disableBg');
        $('#chkEnforceOneUppercase').attr('disabled', true).addClass('disableBg');
        $('#chkEnforceOneNumericCase').attr('disabled', true).addClass('disableBg');
        $('#chkEnforceOneSpecialCharacter').attr('disabled', true).addClass('disableBg');
        $('#txtPasswordHistorySize').attr('disabled', true).addClass('disableBg');
      }

    });

    chkStrongPasswords.change();

    var cookie_Value = getAuthCookie("authCookieId");
    cookie_Value = parseInt(cookie_Value);
    var xmlhttp = getXMLObject();
    var objPwPolicyJson = {"cookie" : cookie_Value};
    if (xmlhttp) {
      var url = 'xhrpwpolicyget.jsp';         
      xmlhttp.onreadystatechange  = function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
        {   
          var data = xmlhttp.responseText;
          data = JSON.parse(data);                  

          //$('#drpPasswordAgingInterval').val( Math.abs(data.pwdaginginterval) );
          $('#drpPasswordAgingInterval')[0].value = Math.abs(data.pwdaginginterval);
          $('#txtMinPasswordLength').val(parseInt(data.minpwdlen));
          $('#txtMaxPasswordLength').val(parseInt(data.maxpwdlen));

          $("#chkPasswordAging")
            .attr('checked', data.pwdaginginterval > 0)
            .change();

          $("#chkEnforceOneLowercase").attr('checked', data.pswpolicy & 1 ? true : false);
          $("#chkEnforceOneUppercase").attr('checked', data.pswpolicy & 2 ? true : false);
          $("#chkEnforceOneNumericCase").attr('checked', data.pswpolicy & 4 ? true : false);
          $("#chkEnforceOneSpecialCharacter").attr('checked', data.pswpolicy & 8 ? true : false);
          $("#chkStrongPasswords")
            .attr('checked', data.pswpolicy & 16 ? true : false)
            .change();
        }

      }; 
      xmlhttp.open("POST", url, true); 
      xmlhttp.setRequestHeader("Content-Type", "application/json");      
      xmlhttp.send(JSON.stringify(objPwPolicyJson));   
    }

    //Strong Password  checkbox functionality 
    $("#pwpolicyholder").mouseover(function () {
      generateTooltips();
    });

    function dsendPwdPlcyForm(url, changePwdPlcyJson) {
      var xmlhttp = getXMLObject();
      if (xmlhttp) {                   
        xmlhttp.onreadystatechange  = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
          {        
            var data = JSON.parse(xmlhttp.responseText);

            if (EL.UpdateStatus(data)) {
              $('#mydialog').dialog('destroy');
              $('#mydialog').html('');
            }
          }
        }
      }
      xmlhttp.open("POST", url, true); 
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      xmlhttp.send(JSON.stringify(changePwdPlcyJson));
    }

    // validate the contact form
    $("#frpwpolicy").validate({
      rules: {
        txtminpasslength: { required: true, digits: true, min:8, max: 32},
        txtmaxpasslength: { required: true, digits: true, min: 16, max: 32, greaterThan: "#txtMinPasswordLength"},
        txtpasshistorysize: { required: true, number: true, max: 12, min: 1 }
      },
      submitHandler: function(form) { 
        var chkPasswordAging, chkStrongPasswords, pswpolicy = 0;

        var pwdaginginterval = parseInt($('#drpPasswordAgingInterval').val());
        var minpwdlen = parseInt($('#txtMinPasswordLength').val());
        if (minpwdlen.length == 0) {
          minpwdlen = 0;
        }
        var maxpwdlen = parseInt($('#txtMaxPasswordLength').val());
        if (maxpwdlen.length == 0) {
          maxpwdlen = 0;
        }

        var boolchkPasswordAging = $("#chkPasswordAging").is(':checked');
        if (!boolchkPasswordAging) {
          pwdaginginterval = 0 - pwdaginginterval;
        }

        pswpolicy = ($("#chkEnforceOneLowercase").is(':checked') ? 1 : 0)
          | ($("#chkEnforceOneUppercase").is(':checked') ? 2 : 0)
          | ($("#chkEnforceOneNumericCase").is(':checked') ? 4 : 0)
          | ($("#chkEnforceOneSpecialCharacter").is(':checked') ? 8 : 0)
          | ($("#chkStrongPasswords").is(':checked') ? 16 : 0);

        var changePwdPlcyJson = {"cookie" : cookie_Value, "pwdaginginterval" : pwdaginginterval, "strongpwd" : chkStrongPasswords,  "minpwdlen" : minpwdlen, "maxpwdlen" : maxpwdlen, "pswpolicy": pswpolicy};
        var url = 'xhrpwpolicyset.jsp'; 
        dsendPwdPlcyForm(url, changePwdPlcyJson);
      }
    });

    chkPasswordAging.change();
    chkStrongPasswords.change();

    EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000400);
  };

})(window, document);