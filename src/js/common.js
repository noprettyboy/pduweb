/*
Old common.js from India team
*/
var dialogNames = {
  'users': '',
  'role': '',
  'devinfo': '',
  'ssl': '',
  'serreach': '',
  'conuser':'',
  'eventlog':'',
  'vwdtlog':'',
  'updtfw':'',
  'frupdth':'',
  'blkconf':'',
  'lTCPCon':'',
  'diagnostic': ''
};

// Creat Dialog Main function
function creatDialogMain(arguments) {
  var model = MODEL.buttons;
  var dialogName = arguments[0];
  var submitBtnName, cancelBtnName;

  if (dialogName in dialogNames) {
    createCloseDialog(arguments);
  } else {
    // cancelBtnName = 'Cancel';
    cancelBtnName = model.cancels;
    if (dialogName == 'pingHist') {
      // submitBtnName = 'Run Ping';
      submitBtnName = model.runping;
    }else if(dialogName == 'evtRule'){
      // submitBtnName = 'Save';
      // cancelBtnName = 'Close';
      submitBtnName = model.save;
      cancelBtnName = model.closes;
    }else if(dialogName == 'resetDev'){
      // submitBtnName = 'Yes';
      // cancelBtnName = 'No';
      submitBtnName = model.yes;
      cancelBtnName = model.no;
    }else if(dialogName == 't_route'){
      // submitBtnName = ' Run ';
      // cancelBtnName = ' Close ';
      submitBtnName = model.run;
      cancelBtnName = model.closes;
    }else{
      // submitBtnName = 'OK';
      submitBtnName = model.oks;
    }

    getIndexpage(arguments);

    var modelDialog = arguments[5];

    modelDialog
      .dialog({
        title: arguments[4] + "  " + arguments[3],
        minHeight: arguments[2],
        width: arguments[1],
        modal: true,
        resizable: false,
        dialogClass: arguments[6],
        closeOnEscape: dialogName != "changepw",
        buttons: {
          "Submit":{
            text: submitBtnName,
            id: "btnMainSubmit",
            click: function(){
              if (dialogName != "smtp" && dialogName != "datetime" && dialogName != "resetdev") {
                //$('#fr' + dialogName).submit();
                $("#mydialog form").submit();
              }
            }
          },
          "Cancel" :{
            text: cancelBtnName,
            click: function() {
              modelDialog.html('');
              modelDialog.dialog("destroy");
            },
            id: "btnCancel"
          }
        },
        close: function () {
          modelDialog.dialog('destroy');
          modelDialog.html('');        
        }
      })
      .dialog('open');
  }
}

// Function to create Users Popup
function createCloseDialog(arguments) {
  getIndexpage(arguments);
  var model = MODEL.buttons;
  var modelDialog = arguments[5];

  modelDialog
    .html('')
    .dialog({
      title: arguments[4] + "  " + arguments[3],
      minHeight: arguments[2],
      width: arguments[1],
      modal: true,
      resizable: false,
      dialogClass: arguments[6],
      buttons: {
        "Close":{
          // text: "Close",
          text: MODEL.buttons.closes,
          id: "btnClose",
          click: function() {
            modelDialog.html('');
            modelDialog.dialog("destroy");
          }
        }
      },
      close: function () {
        modelDialog.dialog("destroy");
        modelDialog.html('');
      }
    })
    .dialog('open'); 
}

function getIndexpage(arguments) {
  var name = arguments[0],
      $element = arguments[5];

  $.ajax({
    url: "xhr{0}.jsp".format(name),
    type: "post", data: EL.Auth.getTocken(),
    dataType: "html",
    success: function(html) {
      var model   = MODEL[name],
          pagefn  = doT.template(html);
      $element.html(pagefn(model));
    }
  });
}

function generateTooltips() {
  $("img[id*='error']").powerTip({ placement: 'e'});
  $("img[src*='images/tick.gif']").powerTip({ placement: 'e'});

  $(".formvalo .error")
    .each(function(){
      var $label = $(this);
      $label.data("powertip", $label.html());
    })
    .powerTip({ placement: 'e'});
}

function getAuthCookie(authCookieId) {
  var cookiekey = $('#'+authCookieId).val();
  return $.cookie(cookiekey);
}

// XMLHTTPOBJECT Creation
function getXMLObject() {
  var xmlHttp;
  try {
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP")  // For Microsoft IE 6.0+
  } catch (e) {
    xmlHttp = new XMLHttpRequest();                   // For Mozilla, Opera Browsers
  }
  return xmlHttp;  // Mandatory Statement returning the ajax object created
}