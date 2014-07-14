/*
View Log functionalities
*/

(function(window, document) {

  //EnLogic namespace
  var EL = window.EL = window.EL || {};

  EL.ViewDataLog = function(opts) {
    var model = MODEL.eventlog;
    opts = opts || {};

    var dataLog = this,
        $selector = $(opts.selector || ".viewlog"),   //container
        $txtLog = $(".txtLog", $selector),
        url = opts.url || "datalog.txt",
        clearurl = url == "datalog.txt" ? "xhrdatalogclear.jsp" : "xhrevtlogclear.jsp";

    dataLog.init = function() {

      var initHandler = function() {
        dataLog.clearLog();
        dataLog.getLog();

        EL.Privilege.setButton([$("#clearlog")], 0x00800000);
      };

      var clearHandler = function() {
        EL.Dialog.confirm(model.clearloginfo, function() {
          $.ajax({contentType: "application/json",
            url : clearurl,
            type : "post", data : EL.Auth.getTocken(),
            success : function() {
              dataLog.clearLog();
            }
          });
        });
      };

      //bind clear log button
      $(".refreshlog", $selector)
        .off()
        .on("click", initHandler);

      $(".clearlog", $selector)
        .off()
        .on("click", clearHandler);

      $(".savelog", $selector).attr({
        "href": url,
        "target": "_blank"
      });

      initHandler();

      $(document).ready(function() {
        if (window.location.href.indexOf("fullwindow") > 0) {
          $txtLog.height($(window).height() - 20);
        }
      });

    };


    //clear all the data in log grid.
    dataLog.clearLog = function() {
       $txtLog.val("");
    };

    //start to get Log
    dataLog.getLog = function() {
      $.ajax({contentType: "application/json",
        url : url,
        type : "post", data : EL.Auth.getTocken(),
        //type : "GET",
        dataType : "html",
        success : function(data) {
          $txtLog.val(data);
        },
        error : function(res, err) {
          console.log(res, err);
        }
      });
    };


    return dataLog;
  };


})(window, document);