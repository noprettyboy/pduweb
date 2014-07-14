(function(window,document) {

  //USB functionality
  var self = EL.LoginSet = {};

  self.init = function() {

    $( "input:submit, input:reset, input:button").button();

    var chkUserBlocking = $('#chkUserBlocking');

    chkUserBlocking.change(function () {
      if (chkUserBlocking.attr('checked')) {
        $('#txtLoginfailCount').attr('disabled', false).removeClass('disableBg');
        $('#drpBlockTimeout').attr('disabled', false).removeClass('disableBg');
      } else {
        $('#txtLoginfailCount').attr('disabled', true).addClass('disableBg');
        $('#drpBlockTimeout').attr('disabled', true).addClass('disableBg');
      }
    });

    chkUserBlocking.change();

    //Getting the data from the sever in JSON format  
    var cookie_Value = getAuthCookie("authCookieId");
    cookie_Value = parseInt(cookie_Value);
    var objLoginSettJson = {"cookie" : cookie_Value}; 
    var xmlhttp = getXMLObject();
    if (xmlhttp) {
      var url = 'xhrloginsetget.jsp';         
      xmlhttp.onreadystatechange  = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var data = xmlhttp.responseText;
          data = JSON.parse(data);
          var privilege_val = data.privilege;
          var chkUserBlocking_value = parseInt(data.chkuserblocking);
          var existingchkUserBlocking_value = $("#chkUserBlocking").attr('checked');
          if (existingchkUserBlocking_value == true)
            existingchkUserBlocking_value = 1;
          else
            existingchkUserBlocking_value = 0;
          if (chkUserBlocking_value != existingchkUserBlocking_value) {
            $("#chkUserBlocking").click();
          }

          $('#txtLoginfailCount').val(parseInt(data.maxnumfailedlogins));
          //$('#drpBlockTimeout').val(data.blocktimeout);
          $('#drpBlockTimeout')[0].value = data.blocktimeout;
          //$('#drpIdleTimeout').val(data.idletimeout);
          $('#drpIdleTimeout')[0].value = data.idletimeout;

          if (privilege_val == 0) {
            $("#btnMainSubmit").attr('disabled',true).addClass('disableButton');
          } else {
            $("#btnMainSubmit").attr('disabled',false).removeClass('disableButton');
          }
        }
      };
      xmlhttp.open("POST", url, true); 
      xmlhttp.setRequestHeader("Content-Type", "application/json");      
      xmlhttp.send(JSON.stringify(objLoginSettJson));   
    }

    //Form validation
    $("#loginsetholder").mouseover(function() {
      generateTooltips();
    });

    //Sending data to the server in JSON format
    function dsendLoginSetting(url, changeLoginSettJson) {
      var xmlhttp = getXMLObject();
      if (xmlhttp) {
        xmlhttp.onreadystatechange  = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
          {        
            var data = JSON.parse(xmlhttp.responseText);
            var uptStatus  = parseInt(data.uptstatus);
            if (uptStatus == 1) {
               $('#mydialog').dialog('destroy');
               $('#mydialog').html('');
               return false;
            } else if (uptStatus == 2)
            {
              //window.location.href = 'login.htm';
              window.location.reload();
            } else {
              $('#mydialog').dialog('destroy');
                $('#mydialog').html('');
              $("#errordialog").html("Error: Updating Values! & uptStatus is : " + uptStatus);
              $("#errordialog").dialog('open');
                return false;
            }
          }
        }
      }
      xmlhttp.open("POST", url, true); 
      xmlhttp.setRequestHeader("Content-Type", "application/json");           
      xmlhttp.send(JSON.stringify(changeLoginSettJson));
    }
    // validate the contact form
    $("#frloginset").validate({
      rules: {
        txtloginfailcount: {required:true, digits: true, max: 10, min: 3 }
      },
      submitHandler: function(form) { 
        var maxnumfailedlogins = parseInt($('#txtLoginfailCount').val());
        if (maxnumfailedlogins.length == 0) {
          maxnumfailedlogins = 0;
        }
        var boolchkUserBlocking = $('#chkUserBlocking').is(':checked');
        var intchkUserBlocking;
        if (boolchkUserBlocking) {
          intchkUserBlocking = 1;
        } else {
          intchkUserBlocking = 0;
        }
        var blocktimeout = parseInt($('#drpBlockTimeout').val());
        var idletimeout = parseInt($('#drpIdleTimeout').val());
        var changeLoginSettJson = {"cookie" : cookie_Value,"chkuserblocking":intchkUserBlocking, "maxnumfailedlogins" : maxnumfailedlogins, "blocktimeout" : blocktimeout, "idletimeout" : idletimeout};
        var url = 'xhrsetloginset.jsp';
        dsendLoginSetting(url, changeLoginSettJson);
      }
    });

    EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000400);
  };

})(window, document);