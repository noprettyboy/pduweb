(function() {

  var self = EL.ChangePsw = function() {
    var $changepsw_result = $("#changepsw_result");

    var submitHandler = function(form) {
      var oldpassword, newPassword;
      oldpassword   = $('#txtOldpassword').val();
      newPassword   = $('#txtPassword').val();
      var isUpdated = updateNewPassword(oldpassword, newPassword);
      return false;
    };

    //Send data to the server in JSON format to Change Password.
    function updateNewPassword(txtOldpassword, newPassword) {
      var model = MODEL.changepw;
    
      var changePasswordJson = $.extend(
        {"oldpassword" : txtOldpassword, "newpassword" : newPassword},
        EL.Auth.getJSON()
      );

      $.ajax({
        url: "xhrchangepwpost.jsp",
        type: "post", data: JSON.stringify(changePasswordJson),
        dataType : "json",
        success: function(data) {
          if (EL.UpdateStatus(data)) {
            $('#mydialog').dialog('destroy');
            $('#mydialog').html('');
          } else {
            $changepsw_result
              // .html('Change Password Failed.')
              .html(model.chgpwfail)
              .show();
          }
        }
      });
    }

    $('#txtOldpassword')
      .focus(function() {
        $changepsw_result.hide();
      })
      .focus();

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

          //strong password dones't enabled?
          if ((pswpolicy & 16) == 0) {
            min = 8;
            max = 32;
            policy = {};
          }

          $("#frchangepw").validate({
            rules: {
              //txtOldpassword: {required: true, minlength: 6, maxlength: 32},
              txtPassword: $.extend({required: true, minlength: min, maxlength: max, notEqualTo:"#txtOldpassword"}, policy),
              txtConfirmPassword: $.extend({required: true, equalTo:"#txtPassword"}, policy)
            },
            submitHandler: submitHandler
          });
        }
      });
    };

    getPasswordPolicy();

    EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000080);
  };

}());