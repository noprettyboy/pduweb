/* Authentication */
(function() {

  EL.Auth = {
    getJSON : function() {
      return {"cookie": parseInt( getAuthCookie("authCookieId") )};
    },
    getTocken : function() {
      return JSON.stringify(EL.Auth.getJSON());
    }
  };

}());

/* Dialog */
(function() {
  var dialog = EL.Dialog = {};

  var $alertDialog, $confirmDialog;

  dialog.create = function() {
    $alertDialog = $("#alertDialog");
    if ($alertDialog.size() < 1) {
      $alertDialog = $('<div title="Alert" id="alertDialog" class="alertdlg"><h3 style=""></h3></div>');
      $alertDialog.appendTo($(document));
    }

    $confirmDialog = $("#confirmDialog");
    if ($confirmDialog.size() < 1) {
      $confirmDialog = $('<div title="Confirm" id="confirmDialog" class="confirmdlg"><h3 style=""></h3></div>');
      $confirmDialog.appendTo($(document));
    }
  };

  dialog.close = EL.Close = function() {
    $("#alertDialog, #confirmDialog").dialog("destroy");
  };
  dialog.message2 = EL.Message2 = function(msg, callback, options) {
    var model = MODEL.buttons;
    dialog.create();
    options = $.extend({icon:"message", title:model.message}, options);

    $("h3", $alertDialog)
      .removeAttr('class')
      .addClass("icon-" + options.icon)
      .html(msg);


    $alertDialog.dialog({
      title: '<h4>' + options.title + '</h4>',
      modal: true,
      resizable: false,
      height: "auto",
      minHeight: 120
      // buttons: {
        // Close: function() {
        //   $(this).dialog("destroy");
        //   callback && callback();
        // }
        // Close: {
        //   text: model.closes,
        //   click: function() {$(this).dialog("destroy");callback && callback();},
        //   id: "btnClose"
        // }
      // }
    });    
    $("div a").attr("id","");
  };

  dialog.alert = EL.Alert = function(msg, callback, options) {
    var model = MODEL.buttons;
    dialog.create();

    options = $.extend( {icon:"alert"}, options );

    $("h3", $alertDialog)
      .removeAttr('class')
      .addClass("icon-" + options.icon)
      .html(msg);

    $alertDialog.dialog({
      dialogClass: options.className,
      // title:  '<h4>Message</h4>',
      title:  '<h4>{0}</h4>'.format(model.message),
      modal: true,
      resizable: false,
      height: "auto",
      minHeight: 120,
      buttons: {
        "Close" :{
            // text: " Cancel ",
            text: model.closes,
            click: function() {$(this).dialog("destroy");callback && callback();},
            id: "btnClose"
        }
        // Close: function() {
        //   $(this).dialog("destroy");
        //   callback && callback();
        // }
      }
    });
  };

  dialog.message = EL.Message = function(msg, callback, options) {
    var model = MODEL.buttons;
    dialog.create();

    // options = $.extend({icon:"message", title:"Message"}, options);
    options = $.extend({icon:"message", title:model.message}, options);

    $("h3", $alertDialog)
      .removeAttr('class')
      .addClass("icon-" + options.icon)
      .html(msg);

    $alertDialog.dialog({
      title: '<h4>' + options.title + '</h4>',
      modal: true,
      resizable: false,
      height: "auto",
      minHeight: 120,
      buttons: {
        // Close: function() {
        //   $(this).dialog("destroy");
        //   callback && callback();
        // }
        Close: {
          text: model.closes,
          click: function() {$(this).dialog("destroy");callback && callback();},
          id: "btnClose"
        }
      }
    });
  };

  dialog.confirm = EL.Confirm = function(msg, callback, cancelCallback, options) {
    var model = MODEL.buttons;
    dialog.create();

    // options = $.extend({icon:"confirm", title:"Information"}, options);
    options = $.extend({icon:"confirm", title:model.info}, options);

    $("h3", $confirmDialog)
      .removeAttr('class')
      .addClass("icon-" + options.icon)
      .html(msg);

    $confirmDialog.dialog({
      title: '<h4>' + options.title + '</h4>',
      modal: true,
      resizable: false,
      height: "auto",
      minHeight: 120,
      buttons: {
        // Yes: function() {
        //   callback();
        //   $(this).dialog("destroy");
        // },
        // No: function() {
        //   cancelCallback && cancelCallback();
        //   $(this).dialog("destroy");
        // }
        "Yes" :{
            // text: " Cancel ",
            text: model.yes,
            click: function() {callback();$(this).dialog("destroy");},
            id: "btnClose"
        },
        "No" :{
            // text: " Cancel ",
            text: model.no,
            click: function() {cancelCallback && cancelCallback();$(this).dialog("destroy");},
            id: "btnClose"
        }
      }
    });
  };

}(document));

/* Update Status */
(function() {

  EL.UpdateStatus = function(data) {

    var statusCode = data["uptstatus"],
        msg = UPDATESTATUS[statusCode],
        callback;

    (statusCode == 2) && (callback = function() {
      window.location = "login.htm";
    });

    msg && EL.Dialog.alert(msg, callback);

    return statusCode == 1;
  };

}());

/* DataGrid Formatter that are reuseable */
(function() {
  EL.Formatter = {
    /* Return true false icons */
    bool : function(value) {
      return value ? '<span class="icon-apply"></span>' : '<span class="icon-cross"></span>';
    }
  };
})();

/*Ajax Error Handler*/
(function($, document) {

  var userAborted = function(xhr) {
    //console.log(xhr.getAllResponseHeaders());
    return !xhr.getAllResponseHeaders();
  };

  var loginAgain = function() {
    window.location = "login.htm"
  };


  EL.AjaxError = function() {
    $(document).ajaxError(function(e, req, settings) {

      if (userAborted(req)) return;

      var msg = AJAXSTATUS[req.status];

      if (req.status == 401) return loginAgain();

      msg && EL.Dialog.alert(msg, loginAgain, {className: "ajaxerrdlg"});

    });

  };

})(jQuery, document);
