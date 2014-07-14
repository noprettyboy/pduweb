#!/usr/bin/env node

var child_process = require("child_process"),
    fs            = require("fs");

var versionCMD  = "svn info",           //"svn info |grep Revision: | cut -c11-",
    versionFile = "src/devinfo.htm",
    versionTag  = "web/.ver",           //version tag in the web folder.
    versionReg  = /id="webVer">[\d\.]+<\/div>/,   //version regular express
    versionHtml = 'id="webVer">{0}</div>';        //version replace


child_process.exec(versionCMD, function (err, stdout, stderr) {
  if (err || stderr) {
    return console.log(err, stderr);
  }

  var version = stdout.match(/Revision: [\d]+/g);

  if (version.length < 1) return;

  //Revision: 565 => 565
  //Based on 635
  version     = 631 + parseInt(version[0].substr(10));

  //565 => 5.65
  version     = (version / 100).toFixed(2) + '.7';

  //5.65 => HTML 
  versionHtml = versionHtml.replace('{0}', version);

  fs.readFile(versionFile, function(err, chrunk) {
    var contents = chrunk.toString();

    fs.writeFile(versionFile, contents.replace(versionReg, versionHtml), function(err) {
      err && console.log("version error", err);
    });
  });

  fs.writeFile(versionTag, version, function (err) {
    if (err) {
      console.log("version tag error", err);
    }
  });

});