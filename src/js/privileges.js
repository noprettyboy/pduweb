/*
Privileges functionalities
*/
var ArrayRemove = function(arr, val) {
  var idx = -1;

  for (var i = 0, l = arr.length; i < l; i++) {
    if (arr[i] == val) {
      idx = i;
      break;
    }
  }

  if (idx > -1) {
    arr.splice(idx, 1);
  }

  return arr;
};

(function(window, document) {

  var self = EL.Privilege = {
  	username: "",
    rolename: "",
    pdu: "",
    temperature: 0,     //temperature type: C or F
    privilege: 0,
    https: 0,           //force https check
    changepsw: 0,       //change password
  	outlets: 0,         //outlets priviliege
    outletopr: 1,       //outlet power control flag, default is enabled
    outcount: 0         //how many outlet does it has
  };

  /*
  Set Privileges
  */
  self.set = function(obj) {
    //enable all the privilege
    //self.privilege = 0xffffff;
    //Default balue is 0
    obj["privilege"] && (self.privilege = obj["privilege"]);
    obj["outlets"] && (self.outlets = obj["outlets"]);
    obj["name"] && (self.username = obj["name"]);
    obj["role"] && (self.rolename = obj["role"]);
    obj["temperature"] && (self.temperature = obj["temperature"]);
    obj["frpasschk"] && (self.changepsw = obj["frpasschk"]);
    obj["forcehttpschk"] && (self.https = obj["forcehttpschk"]);

    //Default value is not 0
    if (typeof obj["outletopr"] != "undefined") {
      self.outletopr = obj["outletopr"];
      !self.outletopr && self.delPrivilege(0x00004000);
    }
  };

  self.setOutCount = function(count) {
    self.outcount = count;
    //for M/M+ Remove change Outlet settings
    /*
    0x00004000: "Switch Outlet",
    0x02000000: "Change Outlet Setting",
    */
    if (count < 1) {
      self.delPrivilege(0x00004000, 0x02000000)
    }
  };

  self.delPrivilege = function() {
    for (var i = 0, l = arguments.length; i < l; i++) {
      var privilegeid = arguments[i];

      delete PRIVILEGES[privilegeid];
      ArrayRemove(PRIVILEGES_Arr, privilegeid);
    }
  };

  self.hasPrivilege = function(privilegeid) {
  	return self.privilege & privilegeid;
  };

  /*
   If a elemnt has: data-privi
   <a data-privi="0x00020000">Actions</a>
   */
  self.hasPriviElem = function(element) {
    var privi = parseInt($(element).data("privi")),
        hasPrivi = true;

    //doesn't has privi elment? ignore it and return true
    if (privi) {
      var hasPrivi = self.hasPrivilege(privi);
      !hasPrivi && EL.Dialog.alert("You do not have the permission for: <br/>" + PRIVILEGES[privi]);
    }

    return hasPrivi;
  };

  self.hasOutlets = function(outletid) {
  	return self.outlets & outletid;
  };

  /*Current user is super user?*/
  self.isSuperUser = function() {
    var flag = false;

    (self.username == "admin") && (flag = true);
    (self.rolename == "admin") && (flag = true);

    return flag;
  };

  self.isCurrentUser = function(username) {
    return username == self.username;
  };

  /*
  Set status on buttons
  */
  self.setButton = function(btnArr, privilegeid, msg) {
    privilegeid = parseInt(privilegeid);

    var hasPrivilege = self.hasPrivilege(privilegeid);

    $.each(btnArr, function(idx, $btn) {
      if (hasPrivilege) {
        $btn.removeClass("locked");
      } else {
        //remove all event listener
        $btn
          .addClass("locked")
          .attr("disabled", true)
          .removeAttr("onclick")
          .off()
          .attr("title", msg || ("No Permission: " + (PRIVILEGES[privilegeid] || " Permission required!")));
      }
    });

  };

  self.setNotSupport = function(btnArr) {
    self.setButton(btnArr, 0, "Not Supported");
  };

  /*
  Set status on PropertyGrid
  */
  self.setProperty = function(rows, privilegeid) {
    if (!self.hasPrivilege(privilegeid)) {
      for(var i = 0, len = rows.length; i < len; i++) {
        delete(rows[i]["editor"]);
      }
    }
  };


  /*
  Get Privilege Description Text;
  */
  self.getText = function(key) {
    return "<span title='" + PRIVILEGES[key] + "'>"
      + PRIVILEGES[key]
      + "</span>";    
  };


})(window, document);