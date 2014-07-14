var filename = process.argv[2];

console.log(filename);

var fs = require("fs");

fs.stat(filename, function(err, stats){
  if (err) {
    console.log(err);
    retrun;
  }

  var offset = 1024 - stats.size % 1024;

  var buffer = new Buffer(offset);

  fs.appendFile(filename, buffer, function (err) {
    if (err) {
      console.log(err);
      retrun;
    }
  });

})
