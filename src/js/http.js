(function() {

  var self = EL.Http = function() {

    //$( "input:submit, input:reset, input:button").button();
    var valHttp, valHttps;
    //form validation start
    try
    { 
      var cookie_Value = getAuthCookie("authCookieId");
      cookie_Value = parseInt(cookie_Value);      
      var objHttpJson = {"cookie" : cookie_Value};
      //Getting data from the server in JSON format
      var url = 'xhrhttpget.jsp';
      var xmlhttp = getXMLObject();

      if (xmlhttp) 
      {                   
        xmlhttp.onreadystatechange  = function() {

          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = xmlhttp.responseText;
            data = JSON.parse(data);
            var cookie = data.cookie;
            var privilege_val = data.privilege;
            valHttp = data.http;
            valHttps = data.https;
            $("#txtHttpPort").val(valHttp); 
            $("#txtHttpsPort").val(valHttps);
          }

        };
        xmlhttp.open("POST", url, true); 
        xmlhttp.setRequestHeader("Content-Type", "application/json");      
        xmlhttp.send(JSON.stringify(objHttpJson));   
      }                                               
      $("#httpHolder").mouseover(function() {
        generateTooltips();
      });
      //Send data to the sever in JSON format
      function dsendHttpForm(valHttp, valHttps) {
        try
        {
          var cookie_Value = getAuthCookie("authCookieId");
          var cookie_Value = parseInt(cookie_Value);      
          var cookie = cookie_Value;
          var changeHttpJsonObj = {"cookie" : cookie, "http" : parseInt(valHttp), "https" : parseInt(valHttps)};
          var xmlhttp = getXMLObject();   
          if (xmlhttp) 
          {                   
            xmlhttp.onreadystatechange  = function() {
              try
              {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
                {                            
                  var data = JSON.parse(xmlhttp.responseText);
                  if (EL.UpdateStatus(data)) {
                    var url  = location.href.replace("master.htm", "login.htm");
                        port = (url.indexOf('https') > -1) ? valHttps : valHttp;

                    EL.ResetDevice.reboot(30, self.getUrl(url, port));

                    $('#mydialog').dialog('destroy');
                    $('#mydialog').html('');
                  }
                }
              }
              catch(e)
              {
                alert("Error Occured for onreadystatechange at Change httpSettings: " + e.message);
                return false;
              }
            }
          }
          xmlhttp.open("POST", "xhrhttppost.jsp", true); 
          xmlhttp.setRequestHeader("Content-Type", "application/json");      
          xmlhttp.send(JSON.stringify(changeHttpJsonObj));   
        }
        catch(e)
        {
          alert("Error at updateHttpSettings : " + e.message);
          return false;
        }
      }
      // validate the contact form
       $("#frhttp").validate({
        rules: {
          txtHttpPort: {required: true, digits:true,min: 1, max: 65535},
          txtHttpsPort:{required: true, digits:true,min: 1, max: 65535, notEqualTo:"#txtHttpPort"}  
        },
        submitHandler: function(form) { 
          var httpVal, httpsVal;
          httpVal = $('#txtHttpPort').val();
          httpsVal = $('#txtHttpsPort').val();
          if (valHttp != httpVal || valHttps != httpsVal) {
            //EL.Confirm(MODEL.netsvr.change, function() {
              dsendHttpForm(httpVal, httpsVal);
            //});
          } else {
            $('#mydialog').dialog('destroy');
            $('#mydialog').html('');
            return false;
          }
        }
      });
    }
    catch (e)
    {
      alert("Validation Error" +e.message);
    }

    EL.Privilege.setButton([$("#btnMainSubmit")], "0x00040000");

  };

  /*
  Get new url from new port:
  https://127.0.0.1:8054/, 8080 => http://127.0.0.1:8080/
  */
  self.getUrl = function(url, port) {
    var idx     = url.indexOf('/', 10),
        prevUrl = url.substr(0, idx);

    prevUrl = prevUrl.indexOf(':') > 0
      ? prevUrl.replace(/:[\d]+/, ':' + port)
      : (prevUrl + ':' + port);

    return prevUrl + url.substr(idx);
  };

}());