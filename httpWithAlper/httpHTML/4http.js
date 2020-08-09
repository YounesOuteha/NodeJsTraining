var http = require("http");

var fs = require("fs");

var server = http.createServer(function (req, res) {
  fs.readFile("index.html", function (err, data) {
    //Server response:
    res.write(data);
    res.end("Server Message is finished here!!!");
  });
});

server.listen(3000, function () {
  console.log("My NodeJs web server at port 5000 us runnig...");
});
