#!/usr/bin/env node
var fs 	= require("fs");

var langs = [
        "../src/locale/cn/configuration.js"   //chinese version: Chinese
      , "../src/js/configuration.js"          //compare version: English
      , "../src/locale/de/configuration.js"   //compare version: German
    ],
    contents = [],
    count = 0;


var TableFactory = function() {

  var self = this;

  var html = "";

  function htmlEncode(str) {
    return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
  }

  var addRow = function() {
    html += "<tr>";
    for(var i = 0, l = arguments.length; i < l; i++) {
      html += "<td>" + htmlEncode(arguments[i]) + "</td>";
    }
    html += "</tr>";

    return self;
  };

  var toString = function() {
    return "<table>" + html + "</table>";
  };


  self.addRow   = addRow;
  self.toString = toString;

  return self;
};



//remove the space/tab/comments
var readLines = function(trunk) {
  var lines = [];

  //format the EOL, keep the same with (win & linux)
  var body = trunk.toString().replace('\r', '');

  //remove comments: /* comthing */
  //body = body.replace(/\/\*.*\*\//g, '');
  body.split('\n').forEach(function(line) {
    lines.push(line.trim());
  });

  return lines;
};

var pickChinese = function() {

  var attrReg = /['"][^"]+['"]/g,
      cnReg   = /[\u4E00-\u9FFF]+/g;

  var tableFactory = new TableFactory();

  contents[0].forEach(function(line, idx) {
    //console.log(line);
    if (line.match(cnReg)) {

      console.log(line);

      //pickup values in attribute
      var cnMatch = line.match(attrReg)
          , enMatch = contents[1][idx].match(attrReg)
          , deMatch = contents[2][idx].match(attrReg);

      //which contains the Chinese characters? the attribute or value?
      cnMatch && cnMatch.forEach(function(cn, attrIdx) {
        if (cn.match(cnReg)) {
          var cn = cnMatch[attrIdx],
              en = enMatch[attrIdx],
              de = deMatch[attrIdx];

          //remove the quotation marks
          cn = cn && cn.replace(/["']/g, '');
          en = en && en.replace(/["']/g, '');
          de = de && de.replace(/["']/g, '');

          tableFactory.addRow(idx + 1, en, de);
        }
      });

    }
  });

  fs.writeFileSync("language.html", tableFactory.toString());
};

langs.forEach(function(lang, idx) {

  fs.readFile(lang, function(err, trunk) {
    if (err) throw err;
    count ++;

    contents[idx] = readLines(trunk);

    (count == langs.length) && pickChinese();
  });

});