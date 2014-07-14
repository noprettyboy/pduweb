/*
Enum all the files in local, and minified and moved them to web folder
*/
var fs      = require("fs"),
    path    = require("path"),
    src     = "src/locale/",
    des     = "web/locale/",
    batStr  = "",
    batName = "tool/Compress.locale.list.cmd";

var files = fs.readdirSync(src, files);

files.sort().forEach(function(file){

  var filePath = src + file,
      descPath = des + file;

  var stats = fs.statSync(filePath);

  if (stats.isFile()) {
    batStr += "\njava -jar tool/lib/yuicompressor-2.4.7.jar " + filePath + " -o " + descPath;
  }

});

fs.writeFileSync(batName, batStr);