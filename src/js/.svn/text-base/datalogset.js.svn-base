/*User*/
(function() {

  var self = EL.DataLogSet = {}

  self.init = function() {

    var cookie_Value = getAuthCookie("authCookieId");
    cookie_Value = parseInt(cookie_Value);
    var objDataLogJson = { "cookie" : cookie_Value};

    var data;
    var cookie;
    var xmlhttp = getXMLObject();

    var $chkDatalog = $("#chkDatalog"),
        $txtLogInterval = $('#txtLogInterval');

    if (xmlhttp) {
      xmlhttp.onreadystatechange  = function() {

        if (xmlhttp.readyState == 4  && xmlhttp.status == 200) {  
          data = JSON.parse(xmlhttp.responseText);
          cookie = parseInt(data.cookie);

          var loginterval = parseInt(data.loginterval);

          $txtLogInterval.val(loginterval);
          $chkDatalog.attr("checked", data.logenable ? true : false);

          /*
          if (privilege_val == 0) {
            $("#btnMainSubmit").attr('disabled',true).addClass('disableButton');
          } else {
            $("#btnMainSubmit").attr('disabled',false).removeClass('disableButton');
          }
          */
        }

      }
      xmlhttp.open("POST", "xhrdatalogget.jsp", true); 
      xmlhttp.setRequestHeader("Content-Type", "application/json"); 
      xmlhttp.send(JSON.stringify(objDataLogJson));
    }
    
    $( "input:submit, input:reset, input:button").button();
    var errorImage = '<img src="images/cross.gif" alt=""/>';

    function send_DataLogSettings(url ,objDataLogJson) {
      var xmlhttp = getXMLObject();
      if (xmlhttp) {
        xmlhttp.onreadystatechange  = function() {
          if (xmlhttp.readyState == 4  && xmlhttp.status == 200) 
          { 
            data = JSON.parse(xmlhttp.responseText);
            var uptstatus = parseInt(data.uptstatus);
            if (uptstatus == 1) 
              {
              $('#mydialog').dialog('destroy');
              $('#mydialog').html('');  
              return false;
            }
            else if ( uptstatus == 2 )
            {
              window.location.href = 'login.htm';
            } 
            else {
              $("#errordialog").html("Error: Updating Values! & uptstatus is : " + uptstatus);
              $("#errordialog").dialog('open');
              $('#mydialog').dialog('destroy');
              return false;
            }
          }
        }
        xmlhttp.open("POST", url, true); 
        xmlhttp.setRequestHeader("Content-Type", "application/json"); 
        xmlhttp.send(JSON.stringify(objDataLogJson));
      }
    }

    $("#dataLogHolder").mouseover(function() {
      generateTooltips();
    });

    // validate the contact form
    $("#frdataLog").validate({
      rules: {
        txtLogInterval: {required: true,number:true, min: 1, max: 1440},  
      },
      submitHandler: function(form) { 
        url = "xhrdatalogset.jsp";
        var loginterval = parseInt($txtLogInterval.val()),
            logenable = $chkDatalog.is(":checked") ? 1 : 0;

        if (loginterval.length == 0) {
          loginterval = 0;
        }
        var objDataLogJson = {"cookie" : cookie_Value, "loginterval" : loginterval, "logenable": logenable }
        send_DataLogSettings(url,objDataLogJson);
      }
    });


    EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000002);

  };

})();



