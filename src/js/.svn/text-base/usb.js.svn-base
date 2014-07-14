(function(window,document) {

  //USB functionality
  var self = EL.USB = {};

  self.init = function() {
    $( "input:submit, input:reset, input:button").button();

    var cookie_Value = getAuthCookie("authCookieId");
    cookie_Value = parseInt(cookie_Value);
    var objUSBJson = {"cookie" : cookie_Value};
    var url =  'xhrusbget.jsp'; //'samplejson.json';//  
    var xmlhttp = getXMLObject();                     
    if (xmlhttp) 
    {
      xmlhttp.onreadystatechange  = function() {
        try
        {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200)//200 
          {   
            var data = xmlhttp.responseText;
            data = JSON.parse(data);
              var privilege_val = data.privilege;
              var chkUSBAccess = parseInt(data.chkusbaccess);
              if (chkUSBAccess == 0) {
              $("#chkEnableUSB").attr('checked', false);
              }else if (chkUSBAccess == 1) {
              $("#chkEnableUSB").attr('checked', true);
              }
            
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
      xmlhttp.send(JSON.stringify(objUSBJson));   
    }   

    $("#frusb").validate({ 
      submitHandler: function(form) {             
        try
        {
          var cookie_Value = getAuthCookie("authCookieId");
          cookie_Value = parseInt(cookie_Value);      
          var chkusbaccess = $('#chkEnableUSB').is(':checked') == true ? 1 : 0;
          var changeUSBJsonObj = {"cookie" : cookie_Value, "chkusbaccess" : parseInt(chkusbaccess)};
          var xmlhttp = getXMLObject();   
          if (xmlhttp) 
          {                   
             xmlhttp.onreadystatechange  = function() {
             try
             {
              if (xmlhttp.readyState == 4 && xmlhttp.status == 200)//200 
              {    
              var data = JSON.parse(xmlhttp.responseText);   
              var uptStatus  = parseInt(data.uptstatus);
              if (uptStatus == 1) {
                 $('#mydialog').dialog('destroy');
                 $('#mydialog').html('');
                 return false;
              } else if (uptStatus == 2)
              {
                window.location.href = 'login.htm';
              }else {
                $('#mydialog').dialog('destroy');
                  $('#mydialog').html('');
                  $("#errordialog").html("Error in Updating USB settings");
                $("#errordialog").dialog('open');
                  return false;                  
              }
            }
           }
           catch(e)
           {
            $("#errordialog").html("Error occured : " + e.message);
            $("#errordialog").dialog('open');
              return false;
          }
         }
         }
         xmlhttp.open("POST", "xhrusbpost.jsp", true); //"samplejson.json"
         xmlhttp.setRequestHeader("Content-Type", "application/json");               
         xmlhttp.send(JSON.stringify(changeUSBJsonObj));   
      }
      catch(e)
      {
        $("#errordialog").html("Error in Updating USB settings : " + e.message);
        $("#errordialog").dialog('open');
         return false;
      }
      }
    });

    EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000800);
  };

})(window, document);