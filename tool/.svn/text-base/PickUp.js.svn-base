/*
* Description: PickUp all the static images to another place.
* Author: Kris Zhang
* Blog: http://c52u.com
* Required: Node.js: http://www.nodejs.org
* Date: 2012-8 Draft
*/
var PickUp = (function(){

  var fs = require("./lib/fs.js"),
      path = require("path"),
      pickUp = {
        sour: "../",
        desc: "../images/",
        list: "list.txt"
      };

  pickUp.init = function(){
    pickUp.copyFiles(pickUp.list);
  };

  //get files from cfgFile, return absolute file path
  pickUp.copyFiles = function(cfgPath){
    var contents = fs.readFileSync(cfgPath, 'utf-8'),
        files = [];

    //read a file line-by-line
    contents.match(/[^\r\n]+/g).forEach(function(line){
      //ignore comments that begin with '#'
      if(line[0] != '#'){
        var srcFile = path.join(pickUp.sour, line),
            destFile = path.join(pickUp.desc, line);

        //create dest directory
        var lastIdx = destFile.lastIndexOf('\\'),
            destDir = destFile.substring(0, lastIdx > -1 ? lastIdx : destFile.lastIndexOf('/') );

        fs.mkdirSync(destDir, 0777, true);

        //copy file
        pickUp.copyFile(srcFile, destFile);

        files.push(srcFile);
      }
    });

    return files;
  };

  pickUp.copyFile = function(srcFile, destFile){
    try{
      var BUF_LENGTH = 64*1024,
          buff = new Buffer(BUF_LENGTH),
          fdr = fs.openSync(srcFile, 'r'),
          fdw = fs.openSync(destFile, 'w'),
          bytesRead = 1, pos = 0;

      while(bytesRead > 0){
        bytesRead = fs.readSync(fdr, buff, 0, BUF_LENGTH, pos);
        fs.writeSync(fdw, buff, 0, bytesRead);
        pos += bytesRead;
      }

      fs.closeSync(fdr);
      fs.closeSync(fdw);

      console.log("Moved:", destFile);

    }catch(err){

      console.log("Failed:", srcFile, err);

    }
  };


  return pickUp;

})();

var pickUp = Object.create(PickUp);
pickUp.init();