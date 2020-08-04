var server = require("http");

server.createServer(engine).listen(1337); //leets

function engine(request, response) {
  response.writeHead(200, { "Content-Type": "Text/plain" });
  response.end("Hey there, from the server :D");
}
