var fs = require("fs");

fs.watch('../src/js/MakeFile.list', function (event, filename) {
  console.log('event is: ' + event);
  if (filename) {
    console.log('filename provided: ' + filename);
  } else {
    console.log('filename not provided');
  }
});

fs.watch('../src/js', { persistent: false }, function (event, filename) {
  console.log('dictionary event is: ' + event);
  console.log(arguments);
});


fs.watchFile('../src/js/usb.js', function (event, filename) {
  console.log("usb.js");
  console.log(arguments);
});