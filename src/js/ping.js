(function() {

  EL.Ping = function() {

    var $gdPingResults = $("#gdPingResults"),
        $txthostname = $('#txthostname');

    $('#txtNoofRequests').numberspinner({min: 1, max: 20});

    //Spinner minimum & Maximum declaration
    $('#divMaskingtemp').remove();
    $('div#PingNwHostHolder').show();

    //form validation starts
    $("#PingNwHostHolder").mouseover(function() {
      generateTooltips();
    });

    $("#pingHistResultsDialog").dialog({
      title : '<div class="dicon"><img src="images/16x16/connect.png" alt=icon></img></div>Ping Results',
      resizable: false,
      width: 560, 
      height: 'auto',
      modal: true,
      autoOpen: false,
      closeOnEscape: false,
      buttons: {
        "Cancel" :{
          text: " Close ",
          click: function() {
            EL.Master.removeDialog();
            $(this).dialog("close");
          }
        }
      }
    });

    //Sending Ping data to the server in JSON Format
    function dsendpingForm(url, changePingJsonObj) {
      $.ajax({
        url: url,
        type:"POST", data: JSON.stringify(changePingJsonObj),
        dataType: "json",
        success: function(data) {

          $("#divPingingHostLoadImage").remove();

          var pingResult = "Pinging " + $txthostname.val() + " with 32 bytes of data: <br/>";

          for(var key in data) {
            var val = parseInt(data[key]);
            if (val > 0) {
              pingResult += "Reply From " + $txthostname.val() + ": bytes=32 time=" + val + " TTL=255 <br/>";
            } else {
              pingResult += "Could not be resolved. </br/>";
            }
          }

          $gdPingResults.html(pingResult);

          $('#pingHistResultsDialog').dialog('open');
        }
      });
    }     

    // validate the Ping History Form
    $("#frpingHist").validate({
      rules: {
        txthostname: {required:true, maxlength:64}
      },
      submitHandler: function(form) { 
        var cookie_Value = getAuthCookie("authCookieId");
        cookie_Value = parseInt(cookie_Value);
        var valhostname, valnoofreqs;
        valhostname = $txthostname.val();
        valnoofreqs = parseInt($('#txtNoofRequests').val());
        var changePingJsonObj = {"cookie" : cookie_Value, "hostname" : valhostname, "noofreqs" : valnoofreqs};
        var url = 'xhrpingpost.jsp';
        $('#btnMainSubmit').parent('div').parent('div').append('<div id="divPingingHostLoadImage" style="float: left; width: 107px; vertical-align:middle; margin-left: 8px;"><img src="images/large-loading.gif" style="width:20px;padding-left:10px;padding-right:10px;float:left;"><label id="lbPingingHost">Pinging Host.. </label></div>');  

        /*
        $txthostname.attr('disabled', true).addClass('disableButton');
        $('#btnMainSubmit').attr('disabled', true).addClass('disableButton');
        $('#txtNoofRequests').spinner('disable').addClass('disableButton');
        $('#lbPingingHost').attr('disabled', true).addClass('disableButton');
        $("#PingNwHostHolder").addClass("opacityElement");
        */

        //waiting for waiting icons
        window.setTimeout(function() {
          dsendpingForm(url, changePingJsonObj);
        }, 1000);
      }
    });

    $("#btnCancel").click(function() {
      $.ajax({url: "xhrpingcancel.jsp"});  
    });    

    EL.Privilege.setButton([$("#btnMainSubmit")], 0x00400000);
  };

}());
