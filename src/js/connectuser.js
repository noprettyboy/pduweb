/*Connect User*/
(function() {

  var self = EL.ConnectUser = function() {
    var model = MODEL.conuser;

    var curruseripaddr, usertype;

    //Disconnect button function in datagrid
    var connectFormat = function (value, rows) {
      return '<a class="btn" onclick="EL.ConnectUser.disconnect(\''
        + rows["ipaddress"]
        + '\' , \''
        + rows["username"]
        + '\' , '
        + rows["clienttype"]
        + ')">'
        // + '&nbsp;&nbsp;Disconnect&nbsp;&nbsp;'
        + '&nbsp;&nbsp;{0}&nbsp;&nbsp;'.format(model.disconn)
        + '</a>';
    };

    var setConnectUser = function(rows) {
      var cols = [[
        // { title: 'User Name', field: 'username', width:100, sortable:true },
        // { title: 'IP Address', field: 'ipaddress', width:110, sortable:true },
        // { title: 'Client Type', field: 'clienttype', width:120, formatter: function(value) {
        //   return CLIENTTYPE[value]
        // }, sortable:true},
        // { title: 'Idle Time', field: 'idletime', width:90 , sortable:true},
        // { title: 'Action', field: 'id', width: 120, align:"center", formatter: connectFormat}
        { title: model.usernm, field: 'username', width:100, sortable:true },
        { title: model.ipaddr, field: 'ipaddress', width:110, sortable:true },
        { title: model.clienttype, field: 'clienttype', width:120, formatter: function(value) {
          return CLIENTTYPE[value]
        }, sortable:true},
        { title: model.idletime, field: 'idletime', width:90 , sortable:true},
        { title: model.action, field: 'id', width: 120, align:"center", formatter: connectFormat}
      ]];

      $("#gdConnectedUser").datagrid({
        columns: cols,
        height: 360,
        singleSelect: true,
        remoteSort: false
      });

      $("#gdConnectedUser").datagrid("loadData", {rows: rows});

      EL.Privilege.setButton([$("#ConnectedUsers a.btn")], 0x00200000);
    };

    self.getConnectUser = function() {
      $.ajax({
        url: "xhrconusersgetgrid.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: setConnectUser
      });
    };

    self.getConnectUser();
  };

  /*
  disconnect user 
  */
  self.disconnect = function(ipaddress, username, clienttype) {
    var model = MODEL.conuser;
    var tocken = $.extend({"ipaddress" : ipaddress, "username" : username, "clienttype": clienttype}, EL.Auth.getJSON()),
        isSelf = (username == EL.Privilege.username && clienttype == 1);

    // var msg = "Do you really want to disconnect user ‘{0}’?".format(username);
    var msg = model.dodisconnuser.format(username);

    isSelf && ( msg
      // = "You are attempting to terminate your connection to ‘{0} ({1})’ <br/> Do you really want to disconnect yourself?"
      //   .format(EL.Privilege.pdu, location.host)
       = model.dodisconnself.format(EL.Privilege.pdu, location.host)
    );

    EL.Confirm(msg, function() {
      $.ajax({
        url: "xhrconusersdel.jsp",
        type: "post", data: JSON.stringify(tocken),
        dataType: "json",
        success: function(data) {
          EL.UpdateStatus(data);
          isSelf ? (window.location = "login.htm") : self.getConnectUser();
        }
      });
    // }, null , {icon:"alert", title:"Disconnect User"});
  }, null , {icon:"alert", title:model.disconnuser});

  };

})();
