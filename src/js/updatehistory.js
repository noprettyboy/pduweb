/*
UpdateHistory functionalities
*/

(function(window, document) {

  var self = EL.UpdateHistory = {
    gdfmupdatehistory: null
  };

  self.init = function() {
    var model = MODEL.frupdth;
    self.gdfmupdatehistory = $("#gdfmupdatehistory");

    var setUpdateHistory = function(rows) {
      var cols = [[
        // { title: 'Timestamp', field: 'timestamp', width:120},
        // { title: 'Previous Version', field: 'previousversion', width:120},
        // { title: 'Update Version', field: 'updateversion', width:120},
        // { title: 'Status', field: 'status', width: 120} 
        { title: model.timestamp, field: 'timestamp', width:120},
        { title: model.preversion, field: 'previousversion', width:120},
        { title: model.updversion, field: 'updateversion', width:120},
        { title: model.status, field: 'status', width: 120} 
      ]];

      self.gdfmupdatehistory.datagrid({
        columns: cols,
        singleSelect: true,
        height: 310
      });
      self.gdfmupdatehistory.datagrid("loadData", rows);
    };

    var getUpdateHistory = function() {
      $.ajax({
        url: "xhrfmwareuphistgetgrid.jsp",
        type: "post", data: EL.Auth.getTocken(),
        dataType: "json",
        success: setUpdateHistory
      });
    };

    getUpdateHistory();

  };

})(window, document);