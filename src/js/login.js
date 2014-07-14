/*
Login
*/
(function() {

  EL.Login = function(model) {

    var $mask = $("#maskingDiv").hide();

    var $loginDialog = $("#login"),
        $loginmsg = $("#loginmsg"),
        $username = $("#username"),
        $password = $("#password"),
        $logform = $("#frlogin");

    $loginDialog.dialog({
      title : '<div class="icon-users">{0}</div>'.format(model.title),
      width: 285, height: "auto",
      modal: true, resizable: false,
      buttons: [
        {
          text: model.login,
          click: function() {
            submitHandler();
          }
        },
        {
          text: model.clear,
          click: function() {
            $("label.error").hide();
            $logform[0].reset();
          }
        }
      ]
    });

    //hide clse button
    $(".ui-dialog-titlebar-close").hide();

    $loginDialog.height("auto");

    function submitHandler(e) {
      if (!$logform.valid()) {
        return false;
      }

      e && e.preventDefault();

      $mask.show();

      var cookie = 0,
          username = $username.val(),
          password = $password.val(),
          tocken = {"cookie": cookie, "username": username, "password": password};

      $loginmsg.html("").hide();
      //update logintime
      localStorage["logintime"] = +new Date();

      $.ajax({
        url: "xhrlogin.jsp", type: "post",
        data: JSON.stringify(tocken),
        dataType: "json",
        success: function(cookie) {

          var authCookieId_Value = parseInt(cookie.cookie);

          if (authCookieId_Value) {
            //$.removeCookie(cookieName, {path:"/"} );
            $.cookie("elid", authCookieId_Value);
            $.cookie("authCookieId", username);
            $.cookie(username, authCookieId_Value);

            location.href = "master.htm";
          }
        },
        error: function(req) {
          $mask.hide();

          var msg = model.authfail;

          req.status && (req.status != 401) && (msg = AJAXSTATUS[req.status]);
          req.status == 0 && (msg = model.connfail);

          $loginmsg
            .html(msg)
            .show();
        }
      });
    }

    $logform
      .submit(submitHandler)
      .validate({
        rules: {
          username: {
            required: true
            //, minlength: 3
          },
          password: {
            required: true
            //, minlength: 8
          }
        }
      });

    //Press Enter to submit the form (fix for IE)
    function onKeyUp(e) {
      if (e.keyCode == 13) submitHandler();
    };
    $username.keyup(onKeyUp);
    $password.keyup(onKeyUp);

    //auto login
    $(document).ready(function() {
      var token = location.hash.getParameterByName("token");
      if (token) {
        //add ? or '#', make it as a querystring.
        var srcToken = '?' + Base64.decode(token)
          , username = srcToken.getParameterByName("username")
          , password = srcToken.getParameterByName("password");

        if (username && password) {
          $username.val(username);
          $password.val(password);
          $logform.submit();
        }
      }
    });

  };

})();