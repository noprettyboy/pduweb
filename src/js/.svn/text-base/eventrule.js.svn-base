
(function(window) {

  EL.EventRule = function() {

    var $tree = $(".evttree"),
        $grid = $(".evtgrid"),
        $save = $("#btnMainSubmit"),
        //user container
        $usercb = $(".usercb"),
        actions,
        users;

    //current operation SMTP node
    var curNode;

    //tree event sub nodes
    var getEvents = function(val) {
      var nodes = [];
      for(var n in EVENTTYPE) {
        if (val & parseInt(n)) {
          nodes.push({
            id     : n,
            text   : EVENTTYPE[n],
            checked: false 
          });
        }
      }
      return nodes;
    };

    //tree structures
    var getNodes = function(rules) {

      var nodes = [];

      for(var key in rules) {

        var name = EVENTNAME[key],
            val = rules[key];

        var node = {
            id : key,
            text : name || key
          };

        if (!name) {
          node.children = getNodes(val);
        } else {
          node.children = getEvents(val);
        }

        nodes.push(node);
      }

      return nodes;
    };

    /*
    Get event rule tree (full tree without select nodes)
    */
    var initCtrls = function() {
      var model = MODEL.evtrule;

      //initial tree
      var trees = getNodes(EVENTRULE);

      $tree.tree({
        checkbox : true
      });

      $tree.tree("loadData", trees);

      //initial datagrid
      var cols = [[
        // { field:"name", title:"Event Name", width:230, formatter: function(value) {
        { field:"name", title:model.eventname, width:230, formatter: function(value) {
          return EVENTNAME[value];
        }},
        // { field:"rule", title:"Actions", width:340, formatter:function(value) {
        { field:"rule", title:model.action, width:340, formatter:function(value) {
          var rule = [];
          for(var item in EVENTTYPE) {
            (parseInt(item) & value) && rule.push(EVENTTYPE[item]);
          }
          return rule.join(', ');
        }}
      ]];

      $grid.datagrid({
        columns: cols,
        singleSelect: true,
        onSelect: selectGridHandler,
        height: 344
      });

      //save button
      $usercb.on("click", "input", function() {
        if (!curNode) return;

        var $selUsers = $(".usercb input"),
            value = 0;

        $selUsers.each(function() {
          var $input = $(this);
          $input.is(":checked") && ( value = value | parseInt($input.val()) );
        });

        $(curNode.target).data({ users: value });
      });

      $save.click(function() {
        var saveTocken = getSaveTocken();

        $.ajax({
          url: "xhrevtruleset.jsp",
          type: "post", data: JSON.stringify( $.extend(saveTocken, EL.Auth.getJSON()) ),
          dataType : "json",
          success: function(data) {
            if (EL.UpdateStatus(data)) {
              $("#mydialog").dialog("close");
              $("#mydialog").html('');
            }
          }
        });
      });
    };

    var selTree = function(data) {

      //select nodes
      for(var key in data) {
        var node = $tree.tree("find", key),
            val = parseInt(data[key]);

        if (node && node.target) {
          var nodes = $tree.tree("getChildren", node.target);

          for(var i = 0, len = nodes.length; i < len ; i++) {
            var nodesub = nodes[i],
                nodeval = parseInt(nodesub.id),
                target = nodesub.target;

            (val & nodeval) && $tree.tree("check", target);

            //if it's send SMTP type keep the lower 16 bits (users)
            (val & 0x00010000) && $(target).data({ users: val & 0xffff });
          }
        }
      }

      //bind select events
      $tree.tree({
        onCheck: checkTreeHandler,
        onSelect: selectTreeHandler
      });
          
    };

    /*
    Get save data tocken from tree;
    */
    var getSaveTocken = function() {

      var saveTocken = {};
      for(var key in window.EVENTNAME) saveTocken[key] = 0;

      var nodes = $tree.tree("getChecked");

      for(var i = 0, len = nodes.length; i < len; i++) {

        var node = nodes[i],
            nodeval = parseInt(node.id);

        //Merge subval to parent value;
        if (nodeval) {

          var target = node.target,
              parent = $tree.tree("getParent", target),
              value = $(target).data("users") || 0;

          //IF it's not SMTP, remove the lower bits of value;
          (nodeval != 0x00010000) && (value = 0);
          //If beacon flash is not connected, ignore the selected beacon node;
          if ((nodeval == 0x00040000) && ((actions & 0x00040000) == 0)) continue;

          saveTocken[parent.id] = saveTocken[parent.id] | nodeval | value;

          //console.log(parent, target, nodeval, value);
        }
      }

      return saveTocken;
    };

    var selectUsers = function(value) {
      var $selUsers = $(".usercb input");

      $selUsers.each(function() {
        var $input = $(this);

        if (value & parseInt($input.val())) {
          $input.attr("checked", true);
        } else {
          $input.removeAttr("checked", true);
        }
      });
    };

    var checkTreeHandler = function(node, selected) {
      //update user infor if necessary
      selectTreeHandler(node);

      //refresh data in datagrid
      var saveTocken = getSaveTocken(),
          rows = [];

      for(var key in saveTocken) {
        var val = saveTocken[key];
        //need to remove the empty rules
        val && rows.push({ name: key, rule: saveTocken[key] });
      }

      $grid.datagrid("loadData", {rows: rows});
    };

    //show or hide users options?
    var selectTreeHandler = function(node) {
      if (node && node.id == 0x00010000 && node.checked) {
        $usercb.show();
        curNode = node;

        //select
        var users = $(node.target).data("users") || 0;
        selectUsers(users);

      } else {
        $usercb.hide();
        curNode = null;
      }
    };

    //Select SMTP nodes, under certain node name
    var selectSMTP = function(row) {
      var node = $tree.tree("find", row["name"]);

      if (node && node.target) {
        var nodes = $tree.tree("getChildren", node.target);

        for(var i = 0, len = nodes.length; i < len ; i++) {
          var nodesub = nodes[i],
              nodeval = parseInt(nodesub.id),
              target = nodesub.target;

          if (nodeval == 0x00010000) {
            $(target).click();
            return;
          }
        }
      }
    };

    //select the row, if contains SMTP message select users;
    var selectGridHandler = function(idx, row) {
      var rule = row["rule"];
      if (rule & 0x00010000) {
        selectSMTP(row);

        $usercb.show();
        //selectUsers( rule & 0xffff );
      } else {
        $usercb.hide();
      }
    };

    //
    var getRules = function() {
      $.ajax({
        url: "xhrevtruleget.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType : "json",
        success: function(data) {
          selTree(data);
          checkTreeHandler();
        }
      });
    };

    //Users
    var getUsers = function() {
      $.ajax({
        url: "xhrusersgetgrid.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: function(data) {
          users = data;
          var $container = $(".evtrule .usercb");

          for(var i = 0, len = users.length; i < len; i++) {
            var row = data[i];

            $container.append(
              '<input type="checkbox" name="user" value="' + (1 << parseInt(row["id"])) + '" /> '
              + row["username"]
              + "&nbsp;"
            );
          }
        }
      });
    };

    //Actions
    var getActions = function() {
      $.ajax({
        url: "xhrevtactionget.jsp",
        type: "post", data: EL.Auth.getTocken(),
        success: function(action) {
          actions = parseInt(action);
          ((actions & 0x00040000) == 0) && $(".evttree  *[node-id=262144] .tree-checkbox").addClass("disabled");

          //After loading the action getRules
          getRules();
        }
      });
    };


    initCtrls();
    window.setTimeout(getActions, 300);
    //window.setTimeout(getRules,   600);
    window.setTimeout(getUsers,   600);

    EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000008);

  };

})(window);