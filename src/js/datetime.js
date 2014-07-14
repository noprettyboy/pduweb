/*
Datetime
*/
(function() {

  var dateTime = EL.DateTime = function() {
  
    var model;

    dateTime.init = function() {

      model = MODEL.datetime;

      //Getting data from the server in JSON format
      var $dpDateTime = $("#dpDateTime"),
        $hour = $("#hour"),
        $min = $("#min"),
        $sec = $("#sec"),
        $txtFirstTimeServer = $("#txtFirstTimeServer"),
        $txtSecondTimeServer = $("#txtSecondTimeServer"),
        $rdSynchronizewithNTP = $("#rdSynchronizewithNTP"),
        $serverConfigMessage = $("serverConfigMessage"),
        $chkAutoDaylightSaving = $('#chkAutoDaylightSaving'),
        $btnMainSubmit = $('#btnMainSubmit'),
        $drpTimeZone = $("#drpTimeZone");


      /*Localization for dropdown list*/
      (function() {
        var localeCode = $.cookie("locale");
        var $drpTimeZoneLocale = $("#drpTimeZone_" + localeCode);
        $drpTimeZoneLocale.size() && $drpTimeZone.html($drpTimeZoneLocale.html());
      })();


      $('#divMaskingtemp').remove();
      $('div#datetimeholder').show(); 

      $btnMainSubmit.click(function () {
        if ($('input[name=Timeformat]:checked').val() == 1) {
          $("#frdate").submit();
        } else {
          $("#frdatetime").submit();
        }
      });
      
      var data;
      var cookie;
      var timezone;
      var url= 'xhrdatetimeget.jsp';
      // Creating Date Picker
      $dpDateTime.datepicker({
        showOn: "button",
        buttonImage: "",
        buttonImageOnly: true,
        currentText: 'Now',
        minDate: new Date(1900, 0, 1),
        dateFormat: "yy-mm-dd",
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true
      });

      //click now go to current date of PDU
      $(document).on("click", ".ui-datepicker-current", function(e) {
        $dpDateTime.datepicker( "setDate", EL.Master.logintime );
      });

      $hour.numberspinner({min: 0, max: 23});
      $min.numberspinner({min: 0, max: 59});
      $sec.numberspinner({min: 0, max: 59});

      $('input[name=Timeformat]').change();

      var getTimeOffset = function() {
        var zoneReg = /\([\w: +-]+\)/g,
            zone = $drpTimeZone.find("option:selected").text().match(zoneReg),
            offset = 0;

        if (zone) {
          //(UTC+08:34)
          var timeReg = /[1-9][\d]*/g,
              time = zone[0].match(timeReg);

          if (time) {
            var hour = parseInt(time[0]),
                min = time[1] ? parseInt(time[1]) : 0;

            offset = Math.abs(hour * 60) + min;

            zone[0].indexOf('-') > -1 && (offset = 0 - offset);
            $chkAutoDaylightSaving.is(':checked') && (offset = offset + 60);
          }
        }

        return offset * 60;   //minutes => seconds
      };

      var getUTCTime = function() {
        var utc = new Date(),
            date = $dpDateTime.datepicker("getDate");

        utc
          .setUTCFullYear(date.getUTCFullYear)
          .setUTCMonth(date.getUTCMonth)
          .setUTCDate(date.getUTCDate)
          .setUTCHours($hour.val())
          .setUTCMinutes($min.val())
          .setUTCSeconds($sec.val());
      };

      var getDateHandler = function(data) {
        //$drpTimeZone.val(data.timezone);
        $drpTimeZone[0].value = data.timezone;
        var chkAutoDaylightSaving_value = parseInt(data.chkautotimeadjust);

        if (chkAutoDaylightSaving_value ==  0)
          $chkAutoDaylightSaving.attr('checked', false);
        else if (chkAutoDaylightSaving_value ==  1)
          $chkAutoDaylightSaving.attr('checked', true);
        else
          $chkAutoDaylightSaving.attr('checked', data.chkautotimeadjust);

        var radUserOrNTP = parseInt(data.radiouserorntp);

        if (radUserOrNTP == 1) {
          $('#rdUserSpecifiedTime').attr('checked', true);
          $('#rdUserSpecifiedTime').click();
          $('input[name=Timeformat]').change();
        } else if (radUserOrNTP == 2) {
          $('#rdSynchronizewithNTP').attr('checked', true);
          $('#rdSynchronizewithNTP').click();
          $('input[name=Timeformat]').change();
        }

        var date_value = (data.date).toString();
        var year_value = parseInt(date_value.substring(0, 2))+2000;
        var month_value = date_value.substring(2, 4);
        var datealone_value = date_value.substring(4);
        var buildDate = year_value + "-" + month_value + "-" + datealone_value;

        $dpDateTime.val(buildDate);

        var time_value = (data.time).toString();
        var hour_value = time_value.substring(0, 2);
        var min_value = time_value.substring(2, 4);
        var sec_value = time_value.substring(4);

        //Update to support update time without UI
        try {
          $hour.numberspinner("setValue", hour_value);
          $min.numberspinner("setValue", min_value);
          $sec.numberspinner("setValue", sec_value);
        } catch(e) {
          console.log(e);
        }

        $txtFirstTimeServer.val(data.ipfirsttimeserv);
        $txtSecondTimeServer.val(data.ipesecondtimeserv);

        //Update datetime in Master page; current local time;
        var date = new Date();
        date.setFullYear(year_value, month_value - 1, datealone_value);
        date.setHours(hour_value, min_value, sec_value);
        EL.Master.curtime = date;
      };

      var updateDate = dateTime.updateDate = function() {
        $.ajax({
          url: url,
          type: "post", dataType: "json",
          data: EL.Auth.getTocken(),
          success: getDateHandler,
        });
      };
        
      // Change event for User specified time and Syncronize with NTP Server
      $('input[name=Timeformat]').change(function() {
        if ($('input[name=Timeformat]:checked').val() == 1) {
          $dpDateTime.datepicker("enable");
          $hour.numberspinner("enable");
          $min.numberspinner("enable");
          $sec.numberspinner("enable");
          $txtFirstTimeServer.attr('disabled', true);
          $txtSecondTimeServer.attr('disabled', true);
          $serverConfigMessage.css('display', 'none');
        } else if ($('input[name=Timeformat]:checked').val() == 2) {
          $dpDateTime.datepicker("disable");
          $hour.numberspinner("disable");
          $min.numberspinner("disable");
          $sec.numberspinner("disable");
          $txtFirstTimeServer.attr('disabled', false);
          $txtSecondTimeServer.attr('disabled', false);
          $serverConfigMessage.css('display', 'block');
        }
      });

      //calling the Change Event 
      $('input[name=Timeformat]').change();
      //form validation starts
      $("#datetimeholder").mouseover(function() {
        generateTooltips();
      });

      function dsendprivileges( url, objDateTimeJson ) {
        $.ajax({
          url: url,
          type:"post", data: JSON.stringify(objDateTimeJson),
          dataType: "json",
          success: function(data) {
            if (EL.UpdateStatus(data)) {
              updateDate();
              //wait for 1 seconds to get the UI updated;
              EL.Master.removeDialog();
            }
          }
        });
      }

      var timerValidator = $("#frdate").validate({
        rules: { dpDateTime: { required: true, customDate: true } },
        submitHandler: submitDateTime
      });

      // validate the Ping History Form
      var serverValidator = $("#frdatetime").validate({
        rules: {
          firsttimeserver:  {ipv4: true},
          secondtimeserver: {ipv4: true}
        },
        submitHandler: submitDateTime
      });

      $('input[name=Timeformat]').change(function() {
        if ($('input[name=Timeformat]:checked').val() == 1) {

          serverValidator.resetForm();

          $dpDateTime.datepicker("enable");
          $hour.numberspinner("enable");
          $min.numberspinner("enable");
          $sec.numberspinner("enable");
          $txtFirstTimeServer.attr('disabled', true);
          $txtSecondTimeServer.attr('disabled', true);
          $serverConfigMessage.css('display', 'none');
        }else if ($('input[name=Timeformat]:checked').val() == 2) {
          timerValidator.resetForm();

          $dpDateTime.datepicker("disable");
          $hour.numberspinner("disable");
          $min.numberspinner("disable");
          $sec.numberspinner("disable");
          $txtFirstTimeServer.attr('disabled', false);
          $txtSecondTimeServer.attr('disabled', false);
          $serverConfigMessage.css('display', 'block');
        }
      });

      function submitDateTime() {
        var timezone;
        var ipfirsttimeserv;
        var ipesecondtimeserv;
        var time;
        var url= "xhrdatetimepost.jsp"; 
        var datetimevalue;

        timezone = parseInt($drpTimeZone.val());

        var chkautotimeadjust = $chkAutoDaylightSaving.is(':checked');
        if (chkautotimeadjust) chkautotimeadjust = 1;
        else chkautotimeadjust = 0

        datetimevalue = $dpDateTime.val();
        var newDateArray = datetimevalue.split("-");
        var newYear_value = parseInt(newDateArray[0]) - 2000;
        var newMon_value = newDateArray[1];
        var newDate_value = newDateArray[2];
        datetimevalue = newYear_value + newMon_value + newDate_value;

        var radiouserorntp = parseInt($('input[name=Timeformat]:checked').val());

        if (($hour.val()).length!=0 && ($min.val()).length !=0 && ($sec.val()).length !=0) {
          var newhour_value = $hour.val();
          if (newhour_value.length == 1)
            newhour_value = "0" + newhour_value.toString();
          
          var newMin_value = $min.val();
          if (newMin_value.length == 1)
            newMin_value = "0" + newMin_value.toString();
            
          var newsec_value = $sec.val();
          if (newsec_value.length == 1)
            newsec_value = "0" + newsec_value.toString();

          time = newhour_value + newMin_value + newsec_value;
        } else {
          time = "";
        }

        ipfirsttimeserv   = ($txtFirstTimeServer.val()).length != 0   ? $txtFirstTimeServer.val()   : "0.0.0.0";
        ipesecondtimeserv = ($txtSecondTimeServer.val()).length != 0  ? $txtSecondTimeServer.val()  : "0.0.0.0";

        var objDateTimeJson = $.extend({}, EL.Auth.getJSON(), {
            "offset" : getTimeOffset(),
            "timezone":timezone,
            "chkautotimeadjust":chkautotimeadjust,
            "radiouserorntp" :radiouserorntp,
            "date" : datetimevalue,
            "time": time,
            "ipfirsttimeserv":ipfirsttimeserv,
            "ipesecondtimeserv":ipesecondtimeserv
          });

        dsendprivileges(url, objDateTimeJson);  
      }


      //check NTP Server
      $("#btnChkNTP").click(function() {
        if (!$rdSynchronizewithNTP.is(":checked") || !$("#frdatetime").valid()) {
          return EL.Dialog.alert(model.checkntpinfo);
        }

        var timerServer1 = $txtFirstTimeServer.val(),
            timerServer2 = $txtSecondTimeServer.val();

        var tocken = $.extend({
          "server1": timerServer1,
          "server2": timerServer2
        }, EL.Auth.getJSON());

        $.ajax({
          url: "xhrntpcheckpost.jsp",
          type: "post", data: JSON.stringify(tocken),
          dataType: "json",
          success: function(data) {

            var html = "";

            if (timerServer1) {
              html += "<div class='{0}'>{2} : {1}</div>".format( 
                data.uptstatus1 ? "icon-apply" : "icon-cross",
                data.uptstatus1 ? model.succ : model.fail,
                model.firstip
              );
            }

            if (timerServer2) {
              html += "<div class='{0}'>{2} : {1}</div>".format( 
                data.uptstatus2 ? "icon-apply" : "icon-cross",
                data.uptstatus2 ? model.succ : model.fail,
                model.secondip
              );
            }

            html = '<div style="margin:1em">' + html + '</div>';

            EL.Dialog.message(html, null, {icon: "none"});

          }
        })
      });

      updateDate();

      EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000004);
    };


    return dateTime;

  };

})();
