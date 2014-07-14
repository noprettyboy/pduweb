/*
Localizaton
*/
(function(window) {

  var self = EL.Locale = {};

  var localeCookie = "locale";

  self.bind = function() {
    var $sellocal = $("#sellocal"),
        local = $.cookie(localeCookie) || "en";

    $sellocal[0].value = local;

    $sellocal.change(function() {
      EL.Master.mask(true);

      $.cookie(localeCookie, $sellocal.val(), {
        path:"/",
        expires: 730
      });

      $.post(
        "xhrlocalepost.jsp"
        , JSON.stringify($.extend(EL.Auth.getJSON(), { locale: $sellocal.val() }))
        , function() {
          location.reload();
        }
      );

    });
  };

  //render the templates
  self.render = function() {
    //It's login page
    var $login = $("#login");
    if ($login.size()) {
      var model = MODEL.login;
      var pagefn = doT.template($login.html());
      $login.html(pagefn(model));

      EL.Login(model);

      document.title = model.title;
    }

    //It's master page
    var $wrapper = $("#wrapper.master");
    if ($wrapper.size()) {
      var model = MODEL.master;
      var pagefn = doT.template($wrapper.html());
      $wrapper.html(pagefn(model));

      EL.Master(model).init();

      self.bind();
    }
  };

  self.init = function() {
    var locale = $.cookie(localeCookie) || "en";

    //load language package: Model
    (locale == "en")
      ? self.render()
      : $LAB.script("locale/{0}.js".format(locale)).wait(self.render);
  };

  self.init();

})(window);