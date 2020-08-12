const http = require("http");

http
  .createServer(function (response, request) {
    response.send("Hello there from HTTP NODE core Module");
  })
  .listen(8000);

console.log("Server is running...!");
