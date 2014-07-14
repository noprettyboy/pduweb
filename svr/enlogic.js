//import namespace
var WebSvr = require("websvr");

//Start the WebSVr, runnting at parent folder, default port is 8054, directory browser enabled;
//try at: http://localhost:8054
var webSvr = new WebSvr({
    root:"./../"
  , port:         8080
  , listDir:      false
  , defaultPage:  "login.htm"

  , httpsPort : 8043
  , httpsKey  : require("fs").readFileSync("cert/privatekey.pem")
  , httpsCert : require("fs").readFileSync("cert/certificate.pem")
  //cache: false,
  , debug: true
}).start();

/*
Add sessin required;
try it at: http://localhost:8054/*.jsp
If it's not the login page?
*/
webSvr
  .filter(/[\w]+\.jsp/, function(req, res) {
    var session = req.session,
        body = req.body;

    if(req.url.indexOf("xhrlogin.jsp") < 0) {
      console.log(".jsp filter username, ", session.get("username"));
      session.get("username", function(val) {
        !val && res.end("You must login, first!");
      });
    }

    req.filter.next();
  }, {parse: true, session: true})
  .filter("web/css/prod.css", function(req, res) {
    res.setHeader("Content-Encoding", "gzip");
    req.filter.next();
  })
  .filter("web/js/prod.js", function(req, res) {
    res.setHeader("Content-Encoding", "gzip");
    req.filter.next();
  });

/* Login */
/*
TODO: /xhrlogin.jsp/g this expression will lead to match failed at the second time, why??
mapper.regExp && mapper.regExp.test(req.url)
*/
webSvr.session(/xhrlogin.jsp/, function(req, res){

  var data = req.body;

  var loginTocken = JSON.parse(data);

  console.log("session here", data, loginTocken);

  if(
    (loginTocken.username == "admin" && loginTocken.password == "12345678") ||
    (loginTocken.username == "user" && loginTocken.password == "12345678") || 
    (loginTocken.username == "kris" && loginTocken.password == "12345678")
  ){

    req.session.set("username", loginTocken.username, function(session){
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.end('{"cookie":123456789}');
    });

  }else{
    res.writeHead(401, {"Content-Type": "text/plain"});
    res.end('{"cookie":0}');
  }

});
//TODO: Cause error, connection will not be closed;
//}, {parse: true}); 

/* Update file receiver*/
webSvr.file(/xhrfwfilepost.jsp/, function(req, res){
  console.log("receive fields / files: ", req.body, req.files);

  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(JSON.stringify(req.files));
});

webSvr.file(/xhrfwconfigpost.jsp/, function(req, res){
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(JSON.stringify(req.files));
});
/******************************Custom Handler Begin*************************/

webSvr.url(/xhrdashboard.jsp/, ["src/dashboar.htm"]);

/* not endwith "set/post", so... */
//TODO: Add "/" before "/src", so ...
webSvr.url(/xhr[\w]+del.jsp/, ["src/test/uptstatus.jsp"]);
webSvr.url(/xhr[\w]+clear.jsp/, ["src/test/uptstatus.jsp"]);
webSvr.url(/xhr[\w]+cancel.jsp/, ["src/test/uptstatus.jsp"]);

webSvr.url(/datalog.txt/, ["src/test/data.log"]);
webSvr.url(/eventlog.txt/, ["src/test/data.log"]);
webSvr.url(/xhrlogout.jsp/, ["src/test/uptstatus.jsp"]);

/*Delay 10 secons to send the email*/
webSvr.url(/xhrsmtpsendmailpost.jsp/, function(req, res){
  setTimeout(function(){
    res.writeFile("src/test/uptstatus.jsp");
  }, 10000);
});

/*Delay 10 secons to send the email*/
webSvr.url(/xhrcookietest.jsp/, function(req, res){
  res.writeHead(200, {
    "Content-Type": "text/html",
    "Set-Cookie": "elid=XYZ0123456789"
  });

  res.end("hello cookie");
});

var progress = 0;
webSvr.url(/xhrprogress.jsp/, function(req, res) {
  progress += 10;
  res.writeHead(200);
  res.end(progress.toString());

  (progress >= 100) && (progress = 0);
});

/* Roles */
/*
webSvr.post("xhreditrolesget.jsp", function(req, res) {
  var data = req.body;

  var reqJSON = JSON.parse(data);

  res.writeHead(200, {"Content-Type": "text/html"});
  if(reqJSON.rolename == 'admin'){
    res.write('{"switchoutlet1":3, "switchoutlet2":1 ,"privileges":131212,"rolename":"admin","description":"admin opr"}');
  }else{
    res.write('{"switchoutlet1":128, "switchoutlet2":255 ,"privileges":256,"rolename":"user","description":"user opr"}');
  }
  res.end();
});
*/

webSvr.post(/xhrrolesdel.jsp/, function(req, res){
  var reqJSON = JSON.parse(req.data);

  res.writeHead(200, {"Content-Type": "text/html"});
  if(reqJSON.rolename == 'admin'){
    res.write( '{ "uptstatus": 0}' );
  }else{
    res.write( '{ "uptstatus": 1}' );
  }
  res.end();
});

//input phrase
/*
webSvr.url("xhripscurrentgetgrid.jsp", ["src/test/xhripsgeneralgetgrid.jsp"]);
webSvr.url("xhripsvoltagegetgrid.jsp", ["src/test/xhripsgeneralgetgrid.jsp"]);
webSvr.url("xhripsalarmgetgrid.jsp", ["src/test/xhripsgeneralgetgrid.jsp"]);
*/
/******************************Custom Handler End*************************/

/*
Debug error status i.e: $.ajax({url:"statuscode/401"})
*/
webSvr.url(/statuscode\//, function(req, res){
  var url = req.url;
  url = url.substr(url.indexOf("statuscode/") + 11);
  url = parseInt(url);

  console.log("status code: ", url);

  res.writeHead(url);
  res.end("All the statusCode will be written to " + url);
});


//General request handler;
webSvr.url(/.jsp/, function(req, res){

  var path = require("path"),
      fs = require("fs"),
      url = req.url;

  //i.e: xhrindex.jsp => index.htm
  var getPageUrl = function(url){
    return url.replace("xhr", "").replace(".jsp", ".htm");
  };

  //i.e: /src/index.jsp => /src/test/index.jsp
  var getTestUrl = function(url){
    var params = url.split('/');
    return "./../src/test/" + params[params.length - 1];

    params.splice(2, 0, "test");
    //i.e: /web/test/index.jsp => /src/test/index.jsp  
    params[1] = "src";
    return params.join('/');
  };

  //i.e: 
  var getSetUrl = function(url){
    var testUrl = getTestUrl(url);
    return testUrl.replace("post.jsp", "get.jsp").replace("set.jsp", "get.jsp");
  };

  //i.e: /src/xhripsvoltagealarmget.jsp
  var handleSet = function(exist){
    //Is a set/post request?
    if(url.indexOf("post.jsp") > 0 || url.indexOf("set.jsp") > 0) {
      //Doesn't exist? send a generous uptstatus;
      if(!exist){
        //options 2:
        //webSvr.writeFile(res, "/src/test/uptstatus.jsp");
        res.sendFile("./../src/test/uptstatus.jsp");
      }

      //var setUrl = webSvr.getFullPath(getSetUrl(url));
      var setUrl = getSetUrl(url);

      var json = JSON.parse(req.body);

      delete json.cookie;

      fs.exists(setUrl, function(exist){
        console.log("*** Rewrite Test Data: EXISTING ***", setUrl, exist);
        fs.writeFile(setUrl, JSON.stringify(json));
      });
    }
  };

  var output = function() {
    //Is a page?
    res.writeFile(getPageUrl(url), function(exist){

      //Is a testing request?
      !exist && res.sendFile(getTestUrl(url), handleSet);
    });
  };

  //There is a delay on outlet power control
  if (url.indexOf("xhroutpow") > 0) {
    setTimeout(output, 5000);
  } else {
    output();
  }


});



/*For enlogic mobile*/
var mobSvr = new WebSvr({
    root: "./../../"
  , port: 8054
  , listDir: true
  , https: false
  , debug: true
  //, sessionDir: "../tmp/session"
  //, uploadDir:  "../tmp/upload"
}).start();

mobSvr.filters  = webSvr.filters;
mobSvr.handlers = webSvr.handlers;