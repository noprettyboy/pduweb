(function() {

  var self = EL.ForceHttps = function() {

    var $httpsBtn = $("#forcehttps"),
        $httpsChk = $("#chkForcehttps"),
        url       = location.href,
        isHttp    = url.indexOf("http:") > -1;

    var getUrl = self.getUrl = function(http, https) {
      var curUrl, port = isHttp ? https : http;

      curUrl = url.replace("master.htm", "login.htm");
      curUrl = isHttp ? curUrl.replace("http:", "https:") : curUrl.replace("https:", "http:");

      curUrl = EL.Http.getUrl(curUrl, port);

      return curUrl;
    };

    self.update = function(){
      $httpsChk.attr("checked", EL.Privilege.https ? true : false);
    };

    //contructor
    (function(){

      //Check permission
      EL.Privilege.setButton([$httpsChk, $httpsBtn], 0x00000400);

      //refresh data
      self.update();

      //rebind again, in order to prevent dialog
      $httpsBtn.click(function(e) {
        var model = MODEL.forcehttpinfo;
        e.stopPropagation();
        e.preventDefault();


        if ($httpsChk.attr("disabled")) return;


        // var msg = 'After changing the setting, you will need to reset the Network Card to take effect.<br/> Do you really want to apply changes now?';
        var msg = model.confirminfo;

        var tocken = $.extend({"forcehttpsvalue": $httpsChk.attr("checked") ? 1 : 0 }, EL.Auth.getJSON());

        EL.Confirm(msg, function() {

          EL.DashBoard.stop();

          //Get http & https port in order to get the new url
          $.ajax({
            url:  "xhrhttpget.jsp",
            type: "post", data: EL.Auth.getTocken(),
            dataType: "json",
            success: function(data) {

              //Switch http & https protocol, according to the data of http/https
              $.ajax({
                url: "xhrforcehttpspost.jsp",
                type: "post", data: JSON.stringify(tocken),
                dataType: "json",
                success: function() {
                  EL.ResetDevice.reboot(30, getUrl(data.http, data.https));
                }
              });
            }
          });

        });
      });

    })();

  };

})();