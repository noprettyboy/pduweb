(function(window) {

  var self = EL.UploadCfg = {};

  self.init = function(tag) {
    $('.fileUpload').fileUploader({
      limit: 1,
      allowedExtension: "",
      beforeEachUpload: function() {
        self.forceDialog(true);
      },
      afterEachUpload: function() {
        if ($(".px-widget .error").size() < 1) {
          if (tag == "config") {
            self.applyConfig();
          } else {
            self.applyUpdate();
          }
        }
      }
    });

    /*
    $("#pxupload1").click(function(e) {
      e.preventDefault();
      e.stopPropagation();

      var $file = $("input[type=file]", $(this));
      console.log($file);
      $file.trigger("click");
    });
    */

  };

  //Make the dialog closable?
  self.forceDialog = function(mode) {
    mode
      ? $(".ui-dialog:visible").addClass("forcedlg")
      : $(".ui-dialog:visible").removeClass("forcedlg");
  };

  self.reportProgress = function(url, needTime) {
    var restart = function() {
      self.forceDialog(false);
      EL.ResetDevice.reset(30);
    };

    if (EL.Master.pducount > 1) {
      var $loadingbar = $("#loadingbar");
      $loadingbar.progressbar();

      var easyTime = 0,
          interval = 1000;

      var refresh = function() {
        window.setTimeout(function() {
          easyTime += interval;

          var value = (easyTime / needTime) * 100 | 0;

          $loadingbar.progressbar('setValue', value);

          if (parseInt(value) < 100) {
            refresh();
          } else {
            restart();
          }
        }, interval);
      };

      refresh();
    } else {
      restart();
    }
  };

  self.applyUpdate = function() {
    var mode = MODEL.blkconf;
    $(".upload-data .status").html(
        mode.uploadsucc
      + '<div id="loadingbar"></div>'
    );

    //3 minutes for each.
    self.reportProgress("xhrprogress.jsp", 3 * 60 * 1000 * (EL.Master.pducount - 1));
    //EL.ResetDevice.reset(30);
  };

  self.applyConfig = function() {
    var mode = MODEL.blkconf;
    $(".upload-data .status").html(
        mode.uploadsucc
      + '<input class="btn" id="applyconfig" value=" {0} " />'.format(mode.applyconf)
      + '<div id="loadingbar"></div>'
    );


    $("#applyconfig").click(function() {
      EL.Message2(mode.pleasewait); 
      $.ajax({contentType: "application/json",
        url: "xhrfwconfigapply.jsp",
        type:"post", data: EL.Auth.getTocken(),
        dataType:"json",
        success: function(data) {
          if (EL.UpdateStatus(data)) {
            EL.Close();
            $("#applyconfig").hide();
            //11 seconds for each.
            self.reportProgress("xhrprogress.jsp", 11 * 1000 * (EL.Master.pducount - 1));
            //EL.ResetDevice.reboot(30);
          }
        }
      });
      
    });
  };

})(window);