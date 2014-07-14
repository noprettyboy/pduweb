var net = require('net');

var cmds = [
    "NOOP"
  , "HELO Enlogic"
  , "MAIL FROM:<kris.zhang@enlogic.com>"
  , "RCPT TO:<kris.zhang@enlogic.com>"
  , "RCPT TO:<justin.luo@enlogic.com>"
  , "DATA"
  , "DATE:2006-6-1 22:11:01"
  , "FROM:kris.zhang@enlogic.com"
  , "TO:kris.zhang@enlogic.com, justin.luo@enlogic.com"
  , "SUBJECT:Test"
  , "REPLY-TO:kris.zhang@sina.com"
  , ""
  , "This is a test mail send by SMTP"
  , "\r\n."
  , "QUIT"
];

var client = net.connect({host:"192.168.1.4", port:25}, function() {
  for (var i = 0, l = cmds.length; i < l; i++) {
    (function(i){
      setTimeout(function() {
        console.log(cmds[i]);
        client.write(cmds[i] + "\r\n");
      }, i * 6000);
    })(i);
  }
});

client.on('data', function(data) { console.log(data.toString()); });
client.on('end', function() { console.log('client disconnected'); });