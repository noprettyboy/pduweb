(function() {

  EL.LDAP = function() {
    var model = MODEL.ldap;
  
    var BITENABLE = 128,
        BITSALE	  = 64,
        BITBIND   = 32,
        BITTYPE   = 1;

    var $ldapenable   = $("#ldapenable"),
        $ldaptype     = $("#ldaptype"),
        $ldaphost     = $("#ldaphost"),
        $ldapport     = $("#ldapport"),
        $ldapbind     = $("#ldapbind"),
        $ldapdn       = $("#ldapdn"),
        $ldapsasl     = $("#ldapsasl"),
        $ldapauth     = $("#ldapauth"),
        $ldapdomain   = $("#ldapdomain"),
        $ldappass     = $("#ldappass"),
        $ldaprepass   = $("#ldaprepass"),
        $ldapbasedn   = $("#ldapbasedn"),
        $ldapnameattr = $("#ldapnameattr"),
        $ldapuser     = $("#ldapuser"),
        $ldapusername = $("#ldapusername"),
        $ldappassword = $("#ldappassword"),
        $btnldaptest  = $("#btnldaptest"),
        $chkldaptest  = $("#chkldaptest"),
        $form         = $("#ldap_holder form");

    var setLDAP = function(data) {
        $ldapenable.attr("checked", data.ldapebst & BITENABLE ? true : false);
        //$ldaptype.val(data.ldapebst & BITTYPE ? 1 : 0);
        $ldaptype[0].value = data.ldapebst & BITTYPE ? '1' : '0';

        $ldaphost.val(data.ldaphost);
        $ldapport.val(data.ldapport);
        $ldapbind.attr("checked", data.ldapebst & BITBIND ? true : false);
        $ldapsasl.attr("checked", data.ldapebst & BITSALE ? true : false);
        $ldapauth.val(data.ldapauth);
        $ldapdomain.val(data.ldapdomain);
        $ldapdn.val(data.ldapdn);
        $ldappass.val(data.ldappass);
        $ldaprepass.val(data.ldappass);
        $ldapbasedn.val(data.ldapbasedn);
        $ldapnameattr.val(data.ldapnameattr);
        $ldapuser.val(data.ldapuser);

        $ldapenable.change();
        $ldaptype.change();
        $ldapsasl.change();
    };

    var sendLDAP = function(istest, cb) {
      var url = istest ? "xhrldaptest.jsp" : "xhrldapset.jsp";

      $chkldaptest
        .attr("checked", istest)
        .change();

      if (!$form.valid()) return;

      var $ldapebst = 
        (($ldapenable.is(":checked") ? 1 : 0) << 7) |
        (($ldapsasl.is(":checked") ? 1 : 0) << 6) |
        (($ldapbind.is(":checked") ? 1 : 0) << 5) |
        ($ldaptype.val());

      var saveToken = {
        ldapebst:     $ldapebst,
        ldaphost:     $ldaphost.val(),
        ldapport:     parseInt($ldapport.val()),
        ldapauth:     $ldapauth.val(),
        ldapdomain:   $ldapdomain.val(),
        ldapdn:       $ldapdn.val(),
        ldappass:     $ldappass.val(),
        ldapbasedn:   $ldapbasedn.val(),
        ldapnameattr: $ldapnameattr.val(),
        ldapuser:     $ldapuser.val()
      };

      istest && $.extend(saveToken, {
        username: $ldapusername.val(),
        password: $ldappassword.val()
      });

      $.ajax({
        url: url,
        type: "post", data: JSON.stringify($.extend(saveToken, EL.Auth.getJSON())),
        dataType: istest ? "html" : "json",
        success: function(data) {
          if (EL.UpdateStatus(data)) {
            EL.Master.removeDialog();
          }

          cb && cb(data);
        }
      });
    };

    var getLDAP = function() {
      $form.validate({
        rules: {
          ldaphost:     {required:true, maxlength:64},
          ldapport:     {required:true, number:true, range: [1, 65535]},
          ldapdn:       {required:true, minlength:1, maxlength:64},
          ldappass:     {required:true, minlength:1, maxlength:32},
          ldapdomain:   {required:true, minlength:3, maxlength:32},
          ldaprepass:   {required:true, equalTo: "#ldappass"},
          ldapbasedn:   {required:true, minlength:1, maxlength:64},
          ldapnameattr: {required:true, minlength:1, maxlength:64},
          ldapuser:     {required:true, minlength:1, maxlength:64},
          ldapusername: {required:true, minlength:3, maxlength:32},
          ldappassword: {required:true, minlength:1, maxlength:32}
        },
        submitHandler: function(){

        }
      });

      $.ajax({
        url: "xhrldapget.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: setLDAP
      });
    };

    getLDAP();

    //LDAP type changed: if it's AD, checked the "Use Bind Credentials";
    $ldaptype.change(function() {
      if ($ldapenable.is(":checked")){
        if ($ldaptype.val() == "1") {
          $ldapbind.attr("disabled", true);
          $ldapbind.attr("checked", true);
        } else {
          $ldapbind.attr("disabled", false);
        }
        $ldapbind.change();
      }
    });

    /*Enable/disable function*/
    $ldapsasl.change(function() {
      // var flag = !$ldapsasl.is(":checked");
      var flag1 = $ldapenable.is(":checked");
      if(flag1){
        var flag2 = !$ldapsasl.is(":checked");
        $ldapauth.attr("disabled", flag2);
        $ldapdomain.attr("disabled", flag2);
      }
    });

    $ldapbind.change(function() {
      var flag1 = $ldapenable.is(":checked");
      if(flag1){
        var flag2 = !$ldapbind.is(":checked");
        $ldapdn.attr("disabled", flag2);
        //$ldapauth.attr("disabled", flag);
        $ldappass.attr("disabled", flag2);
        $ldaprepass.attr("disabled", flag2);
      }
    });

    $ldapenable.change(function() {
      var flag = $ldapenable.is(":checked");
      // $("#ldap_holder .body input, #ldap_holder .body select").attr("disabled", !flag);
      $("#ldap_holder .body input, #ldap_holder .body select").attr("disabled", !flag);
      if (flag) {
        $ldapbind.change();
        $ldapsasl.change();
      }
    }).change();

    $chkldaptest.change(function() {
      var flag = $chkldaptest.is(":checked");
      $("#ldaptest input").attr("disabled", !flag);
    }).change();

    $("#btnMainSubmit").click(function(){
      sendLDAP(false);
    });

    /*Test LDAP*/
    $btnldaptest.click(function(){
      sendLDAP(true, function(status) {
        status = parseInt(status);

        var html = "";

        // html += "<div class='{0}'>Connection test: {1}</div>".format( 
        //   status > 0 ? "icon-apply" : "icon-cross",
        //   status > 0 ? "SUCCEEDED" : "FAILED"
        // );

        // html += "<div class='{0}'>Configuration test: {1}</div>".format( 
        //   status > 1 ? "icon-apply" : "icon-cross",
        //   status > 1 ? "SUCCEEDED" : "FAILED"
        // );

        // html += "<div class='{0}'>Authentication test: {1}</div>".format( 
        //   status > 2 ? "icon-apply" : "icon-cross",
        //   status > 2 ? "SUCCEEDED" : "FAILED"
        // );

        // html += "<div class='{0}'>User has roles assigned: {1}</div>".format( 
        //   status > 3 ? "icon-apply" : "icon-cross",
        //   status > 3 ? "SUCCEEDED" : "FAILED"
        // );

        // html += "<div class='{0}'>User has known roles assigned: {1}</div>".format( 
        //   status > 4 ? "icon-apply" : "icon-cross",
        //   status > 4 ? "SUCCEEDED" : "FAILED"
        // );
        html += "<div class='{0}'>{1}: {2}</div>".format( 
          status > 0 ? "icon-apply" : "icon-cross",model.conntest,
          status > 0 ? "SUCCEEDED" : "FAILED"
        );

        html += "<div class='{0}'>{1}: {2}</div>".format( 
          status > 1 ? "icon-apply" : "icon-cross",model.conftest,
          status > 1 ? "SUCCEEDED" : "FAILED"
        );

        html += "<div class='{0}'>{1}: {2}</div>".format( 
          status > 2 ? "icon-apply" : "icon-cross",model.authtest,
          status > 2 ? "SUCCEEDED" : "FAILED"
        );

        html += "<div class='{0}'>{1}: {2}</div>".format( 
          status > 3 ? "icon-apply" : "icon-cross",model.userrole,
          status > 3 ? "SUCCEEDED" : "FAILED"
        );

        html += "<div class='{0}'>{1}: {2}</div>".format( 
          status > 4 ? "icon-apply" : "icon-cross",model.userknownrole,
          status > 4 ? "SUCCEEDED" : "FAILED"
        );

        html = '<div style="margin:1em">' + html + '</div>';

        EL.Dialog.message(html, null, {icon: "none"});
      });
    });

    //$("#btnMainSubmit").click(sendLDAP);
    EL.Privilege.setButton([$("#btnMainSubmit")], 0x01000000);

  };

}());
