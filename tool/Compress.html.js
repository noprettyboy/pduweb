/*
* Description: Combine the files into one, support directory and config files.
* Author: Kris Zhang
* Blog: http://c52u.com
*/

(function(){

  var fs = require("fs"),
      src = "src/",
      des = "web/",
      batStr = "",
      batName = "tool/Compress.html.list.cmd";


  var files = fs.readdirSync(src, files);

  files.sort().forEach(function(file){
    if(file.indexOf(".htm") > 0){
      batStr = batStr + "\njava -jar tool/lib/htmlcompressor-1.5.3.jar " + src + file + " > " + des + file;
    }
  });

  fs.writeFileSync(batName, batStr);

})();
