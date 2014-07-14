/*
master functionalities.
*/
(function(window, document) {

  var master = EL.Master = function(model) {

    var $menus = $(".menu li a"),
        $tree = $("#tree"),
        $tabs = $("#tabs"),
        $loader = $(".center .loader"),
        $logout = $("#aLogout");

    master.init = function() {

      if ($menus.size() && $tree.size() && $tabs.size()) {
        master.oldInit();
        master.setMenu();
        master.setTabs();
        master.setResize();
        master.setEnvir();

        //Global ajax error handler
        EL.AjaxError();

        $(window).trigger("resize");
      }
    };

    /*
    remove dialog divs
    */
    master.removeDialog = function() {
      $("#mydialog").dialog("close");
      $("#mydialog").html('');
      //Sub Dialog, in order to remove the cache of jQuery.dialog
      $("#privirole").remove();
      $("#editrole").remove();
      $("#tabCreateNewUser").remove();
      $("#createNewServer").remove();
    };

    master.mask = function(mask) {
      var $mask = $("#maskingDiv");
      mask ? $mask.show() : $mask.hide();
    };

    /*
    Old functionality from India's team;
    */
    master.oldInit = function() {
      // Creating Menu
      ddsmoothmenu.init({
        mainmenuid: "smoothmenu1", //menu DIV id
        orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
        classname: 'ddsmoothmenu', //class added to menu's outer DIV
        //customtheme: ["#1c5a80", "#18374a"],
        contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]          
      });
      //help menu
      cssdropdown.startchrome("chromemenu");

      //remove mask
      master.mask(false);
      $("#authCookieId").val($.cookie("authCookieId"));

      //Menu event handler
      $('li:not(:has(>ul))', '.menu').live('click', function () {

        //reset dialog first
        master.removeDialog();

        var ids = $(this).parents('li').attr('id');
        var id = $(this).attr('id');

        if (
          EL.Privilege.hasPriviElem($(this)) &&
          id &&
          id != 'downloadDiagnosticInformation' &&
          id != 'userguide'
          ) {

          var filename = id;
          var mWidth = $(this).attr('width');
          var mHeight = $(this).attr('height');
          var mTitle = $(this).attr('title');
          var imageSource = '<div class="icon-{0}">{1}</div>'.format(id, mTitle);

          master.removeDialog();

          var modelDialog = $('#mydialog');
          var arguments = [];
          arguments[0] = filename;
          arguments[1] = mWidth;
          arguments[2] = mHeight;
          arguments[3] = "";
          arguments[4] = imageSource;
          arguments[5] = modelDialog;
          arguments[6] = $(this).data("dlgclass") || "simple";
          creatDialogMain(arguments);
        }
      });
    };

    master.setMenu = function() {
      $logout.click(function(e) {
        e.preventDefault();

        // EL.Dialog.confirm("Do you really want to logout?", function() {
        EL.Dialog.confirm(model.doreallylogout, function() {

          EL.DashBoard.stop && EL.DashBoard.stop();

          $.ajax({
            url: "xhrlogout.jsp",
            type: "post", data: EL.Auth.getTocken(),
            success: function() {
              window.setTimeout(function() {
                var username = $.cookie("authCookieId");
                $.cookie("authCookieId", null);
                $.cookie(username, null);            
                window.location = "login.htm";
              }, 300);
            }
          });
        });
      });
    };

    /*
    set tree on the left panel
    */
    master.setTree = function() {

      var tree = [ EL.TreeRoot ];

      //click the tree handler
      var clickTree = function(node) {

        var id = node.id,
            attr = node.attributes,
            container = "#tab" + id,
            title = '<span class="icon-' + id + '">' + node.text + '</span>';

        //Existing, select it, or add a new one
        if ($(container).size() < 1) {
          $tabs.tabs("add", container, title);
        } else {
          //Update UI title
          $(".ui-tabs-nav a[href=" + container + "]").html(title);

          //make it selected
          $tabs.tabs('select', container);

          if (id == "dashboard") {
            EL.DashBoard.stop();
          }
        }
        
        //make it selected
        $tabs.tabs('select', container);

        $(container).html('');

        //show the loader
        $loader.show();

        //cache the parameters
        $(container).data("opts", attr);

        $.ajax({
          url: "xhr" + id + ".jsp", contentHeader: "application/json",
          type: "post", data: EL.Auth.getTocken(),
          dataType: "html",
          success: function(html) {
            $(container).append(html);
            $(window).resize();
          }
        });
      };

      var refreshTimer = null;

      var onClickTree = function(node){
        window.clearTimeout(refreshTimer);
        refreshTimer = window.setTimeout(function() {
          clickTree(node);
        }, 500);
      };

      var parseTree = function(data) {
        var i = 0, len = data.length;
        EL.Master.pducount = len;
        for(; i < len; i++) {
          var obj = data[i],
              pdu = {
                "id": "pdus",
                "text": obj.name,
                "children":[],
                attributes: {
                  pduid: i + 1
                }
              };

          obj["ess"] = 1;

          for(var key in EL.TreeMap) {

            var val = parseInt(obj[key]);

            if (i == 0) {
              //Set the pdu name in the Privilge;
              EL.Privilege.pdu = obj.name;
              //reset number of the outlets
              (key == "outs") && EL.Privilege.setOutCount(val);
            }

            if (val) {
              var node = {
                id: EL.TreeMap[key]["id"],
                text: EL.TreeMap[key]["text"],
                iconCls: EL.TreeMap[key]["icon"],
                attributes: { pduid: i + 1 }
              };
              if (key == "outs") {
                node.state = "closed";
                node.children = [];

                var outletload = parseInt(obj.outletload);

                for(var o = 1, oLen = val; o <= oLen; o++) {

                  var icon_outletload = "";
                  outletload
                    && (outletload & (1 << (o - 1)))
                    && (icon_outletload = " icon-ol-load" );

                  node.children.push({
                    //id:"outlet " + o ,
                    id:"outlet",
                    // text: OUTLETS[1 << (o - 1)],
                    text: OUTLETS[(1 << (o - 1)) < 0 ? -(1 << (o - 1)) : (1 << (o - 1))],
                    iconCls:"icon-ol" + icon_outletload,
                    attributes: {
                      pduid: i + 1,
                      outid: o
                    }
                  });
                }
              }
              pdu.children.push(node);
            }
          }
          tree.push(pdu);
        }

        //Create treeview
        $tree.tree({      
          checkbox: false,
          data: tree,
          onClick: onClickTree
        });

        $("#tree div[node-id=dashboard]").click();
      };

      $.ajax({contentType: "application/json",
        url:"xhrpdutree.jsp",
        type:"post", data: EL.Auth.getTocken(),
        dataType:"json",
        success: parseTree,
        error:function() {
          console.log(arguments);
        }
      });
    };

    master.setTabs = function() {
      //create tabs
      $tabs.tabs({
        tabTemplate: "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close'>Remove Tab</span></li>"
      });

      $tabs.on("click", "span.ui-icon-close", function(e) {
        var index = $( "li", $tabs ).index( $( this ).parent() );
        $tabs.tabs( "remove", index );
      });
    };

    master.setResize = function() {
      /*
      Resize the layout
      */
      var resize =  function() {
        var height = $(window).height(),
            offset = 153,
            header = 26,
            scrollbody = 46;

        $(".lay .center").height(height - offset + header);
        $(".lay .center .ui-tabs-panel").height(height - offset + header - scrollbody);
        $(".lay #tree").height(height - offset + 0);
      };

      $(window).resize(resize);
    };

    /*
    Set environments
    */
    master.logintime = new Date();
    master.curtime = new Date();
    master.ip = "127.0.0.1";

    master.setEnvir = function(data) {

      var //$downloadDiagnostics = $("#downloadDiagnostics"),
          $loginuser = $("#loginuser"),
          $ipaddress = $("#logintime"),
          $currenttime = $("#currenttime"),
          formatTime = function(time) {
            var strTime = (time || master.curtime).toString(),
                idxGMT = strTime.indexOf("GMT");

            (idxGMT < 0) && (idxGMT = strTime.indexOf("UTC"));

            return strTime.substr(0, idxGMT);
          };

      var environmentHandler = function(data) {
        //datatime
        master.ip = data.ip;
        master.curtime = new Date(data.curtime);
        master.logintime = new Date(parseInt(localStorage["logintime"]) || +new Date());
        master.pducount  = data.pducount;
        master.pduphase  = data.pduphase;
        master.pdumode   = data.pdumode;

        var updateCurrentTime = function() {
          $currenttime.html(formatTime());
          master.curtime = new Date(1000 + +master.curtime);
        };

        window.setInterval(updateCurrentTime, 1000);

        updateCurrentTime();

        //power tip commited.
        $loginuser
          .html( data.name + " ( " + data.role + " ) " )
          .attr("title", model.login.format(data.role))
          .powerTip({placement: 'n'});

        $ipaddress
          .attr("title", model.ip.format(master.ip))
          .powerTip({placement: 'n'});

        $currenttime
          .attr("title", model.time.format(formatTime(master.logintime)))
          .powerTip({placement: 'nw'});

        //privilege
        EL.Privilege.set(data);

        //force change password
        if (EL.Privilege.changepsw) {
          $("#changepw")
            .data("dlgclass", "forcedlg")
            .click()
            .data("dlgclass", "");
        }

        //set tree
        master.setTree();
        //init force https
        EL.ForceHttps();
        //init set alarm dialog
        EL.SetAlarm().init();
      };

      //update download url
      $.ajax({
        url: "xhrmasterpgget.jsp", contentType: "application/json",
        type: "post", dataType: "json",
        data: EL.Auth.getTocken(),
        success: environmentHandler
      });

    };


    return master;
  };

  /*
  public method, need not initialization
  */
  master.getTabOpts = function($el) {
    var $container = $el.closest(".ui-tabs-panel");

    return $container.data("opts") || {};
  };

  //pdu count
  master.pducount = 0;

})(window, document);