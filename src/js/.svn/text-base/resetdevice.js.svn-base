(function() {

  var self = EL.ResetDevice = {};

  self.init = function() {
    $("#btnMainSubmit").click(function() {
      self.reboot(30);
    });

    EL.Privilege.setButton([$("#btnMainSubmit")], 0x00002000);
  };

  self.count = 0;

  self.reboot = function(seconds, url) {
    EL.DashBoard.stop();

    var tocken = $.extend(EL.Auth.getJSON(), {reset: 1});

    $.ajax({
      url: "xhrresetdevset.jsp",
      type: "post", data: JSON.stringify(tocken),
      success: function() {
        $('#mydialog').dialog('destroy');
        EL.ResetDevice.reset(seconds, url);
        return false;
      }
    });
  };

  self.reset = function(seconds, url) {
    EL.DashBoard.stop();

    var model = MODEL.master;
    $("#resetDeviceDialog").dialog({
      // title : '<div class="icon-reload">Network Card Reset</div>',
      title : '<div class="icon-reload">{0}</div>'.format(model.resetdevicedl.txt),
      resizable: false,
      width: 285, 
      minHeight: 142,
      modal: true,
      autoOpen: false,
      closeOnEscape: false,
      close: false
    });
    $("#resetDeviceDialog").dialog('open');

    self.count = seconds;
    self.countdown(url);
  };

  self.countdown = function (url) {
    url = url || "login.htm";

    var setTime = function() {
      $("#aredirect").attr("href", url);
      $("#spSecondsAtResetDev").html(self.count);
    };

    var timerid = window.setInterval(function() {
      if (--self.count < 1) {
        window.clearInterval(timerid);
        window.location = url;
      } else {
        setTime();
      }

    }, 1000);

    setTime();
  };


})();



