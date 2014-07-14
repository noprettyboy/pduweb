(function(window, document) {

  /****************************** Data Grid Begin ************************************/
  var self = EL.EditGrid = function() {

    var $grid, cols, rows, url, saveData, colsType, permission;

    //on save handler
    self.onSave = null;

    self.init = function(_$grid, _cols, _rows, _url, _data, _permission) {
      $grid = _$grid;
      cols = _cols;
      rows = _rows;
      url = _url;
      saveData = _data;
      //does user has the permission to edit?
      permission = _permission;

      self.setGrid();
    };

    self.updateActions = function(index) {
      var rowcount = $grid.datagrid('getRows').length;
      $grid.datagrid("updateRow", {index:index, row:{action:''} });
      /*
      // too slow for IE
      for(var i=0; i<rowcount; i++) {
        $grid.datagrid('updateRow',{
          index:i,
          row:{action:''}
        });
      }
      */
    };

    self.editrow = function(idx) {
      $grid.datagrid('beginEdit', idx);
    };

    /*
    return matched data in row.
    */
    self.getSaveData = function(row) {
      var obj = {};
      for(k in saveData) {
        obj[k] = row[k] || saveData[k];
        
        //custom field fix, that combox
        //To do, add an number attribute on cols
        switch(k) {
          case "aisle":
          case "powstat":
          case "delayon":
          case "delayoff":
          case "rebotdur":
            obj[k] = parseInt(obj[k]);
        }
      }

      return obj;
    };

    self.saverow = function(index) {
      //get old and new value
      var oldRow = $.extend({}, rows[index]);
      $grid.datagrid('endEdit', index);
      var row = rows[index];

      //if on save is not null, do the custom save, passing the reference of the row, and copy of old row.
      if (self.onSave) {
        self.onSave(index, row, oldRow);
        return;
      } 

      //if save failed, roll back the row to old value;
      var failedHandler = function() {
        //roll back the row to the old value
        $.extend(row, oldRow, {editing : false});
        $grid.datagrid('updateRow',{ index: index, row: row});

        EL.Dialog.alert("Save failed!");
      };

      //send the request.
      var data = self.getSaveData(row);
      $.ajax({contentType: "application/json",
        url: url,
        type: "post", data: JSON.stringify(data),
        dataType : "JSON",
        success: function(json) {
          (json.uptstatus != "1") && failedHandler();
        },
        error: function() {
          console.log(arguments);
          failedHandler();
        }
      });

    };

    self.cancelrow = function(index) {
      $grid.datagrid('cancelEdit', index);
    };

    self.setGrid = function() {
      var model = MODEL.buttons;
      cols[0].push(
        // {field:'action',title:'Action', width:100,
        {field:'action',title:'{0}'.format(model.action), width: 160,
          formatter:function(value,row,index) {
            if (permission) {
              if (row.editing) {
                // var s = '<a href="#" onclick="EL.EditGrid.saverow(' + index + ')">Save</a> ';
                // var c = '<a href="#" onclick="EL.EditGrid.cancelrow(' + index + ')">Cancel</a>';
                var s = '<a href="#" onclick="EL.EditGrid.saverow(' + index + ')">{0}</a> '.format(model.save);
                var c = '<a href="#" onclick="EL.EditGrid.cancelrow(' + index + ')">{0}</a>'.format(model.cancels);
                return s + c;
              } else {
                // return '<a href="#" onclick="EL.EditGrid.editrow(' + index  + ')">Edit</a> ';
                return '<a href="#" onclick="EL.EditGrid.editrow(' + index  + ')">{0}</a> '.format(model.edit);
              }
            } else {
              return "No Permission";
            }
          }
        }
      );

      $grid.datagrid({
        columns: cols,
        onBeforeEdit:function(index,row) {
          row.editing = true;
          self.updateActions(index);
        },
        onAfterEdit:function(index,row) {
          row.editing = false;
          self.updateActions(index);
        },
        onCancelEdit:function(index,row) {
          row.editing = false;
          self.updateActions(index);
        }
      });

      $grid.datagrid("loadData", {rows: rows});

    };

    return self;
  };
  /****************************** Data Grid End  ************************************/

  /****************************** Property Grid Begin ************************************/
  //get length of bytes
  var hasChinese = function(strTemp) {
    for (var i = strTemp.length ; i-- ; ) {
      if (strTemp.charCodeAt(i) > 255) {
        return true;
      }
    }
    return false;
  };

  /*
  Valid data field row in propertygrid.
  Only valid it when the row has max & min attributes.
  */
  self.validField = function(row, value) {
    var min = row["min"],
        max = row["max"],
        minlength = row["minlength"],
        maxlength = row["maxlength"];

    if (min || max) {
      value = Number(value);
      if ((!value && value !=0) || value < min || value > max) {
        return false;
      }
    }

    //fields should not have chinese
    if (hasChinese(value)) return false;

    if (maxlength || minlength) {
      if (value.length > maxlength) return false;
      if (value.length < minlength) return false;
    }

    return true;
  };

  /*
  Fix Propertygrid: 
  1) submit on user press Enter
  2) submit on user select a item on drop down item.
  */
  self.bindPropertyGrid = function() {
    $(document).on("keydown", ".propertygrid input", function(e) {
      var $container = $(".propertygrid:visible"),
          $property = $("table.easyui-propertygrid", $container);

      if ($property.size() < 1) return;

      //user press enter submit
      if (e.keyCode == 13) {
        var row = $property.propertygrid("getSelected"),
            idx = $property.propertygrid("getRowIndex", row),
            val = $(e.target).val();

        if (idx > -1) {
          if (!self.validField(row, val)) {
            $property.propertygrid("cancelEdit", idx);
          } else {
            $property.propertygrid("endEdit", idx);
          }
        }
      }
    });

    $(document).on("mouseup", ".combobox-item", function(e) {
      var $container = $(".propertygrid:visible"),
          $property = $("table.easyui-propertygrid", $container);

      if ($property.size() < 1) return;

      var row = $property.propertygrid("getSelected"),
          idx = $property.propertygrid("getRowIndex", row);

      if (idx > -1) {
        window.setTimeout(function() {
          $property.propertygrid("endEdit", idx);
        }, 100);
      }
    });
  };

  //fix it at once.
  self.bindPropertyGrid();
  /****************************** Property Grid End ************************************/


  /*
  DataGrid: clear columns, remove the cols that field is not existing in the return data;
  */
  self.clearCols = function(cols, rows) {
    var newCols = [[]];

    for(var c = 0, cLen = cols[0].length; c < cLen; c++) {
      var field = cols[0][c]["field"];

      if (!field || typeof rows[0][field] != "undefined") {
        newCols[0].push(cols[0][c]);
      }
    }

    return newCols;
  };

  /*
  PropertyGrid: some return back fields that maybe defined in rows, remove these fields;
  */
  self.clearRows = function(rows, row) {
    var newRows = [];
    for(var i = 0, len = rows.length; i < len; i++) {
      var key = rows[i]["key"];
      if (!key || typeof row[key] != "undefined") {
        newRows.push(rows[i]);
      }
    }

    return newRows;
  };

}(window, document));