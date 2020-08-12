const http = require("http");
const event = require("events");
const myEmitter = new event.EventEmitter();

//Declare server variable
const hostname = "127.0.0.1";
const port = 3000;

//Subscribe for ping event
myEmitter.on("ping", function (data) {
  console.log("First event: " + data);
});

//Rising ping event
myEmitter.emit("ping", "My first NodeJs event has been trigged");

/* 1 way: To creaate server
    const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, this is Younes\n')
})
 */

var server = http.createServer();
server.on("request", function (request, response) {
  response.writeHead(200);
  response.write("Hello, this is me Younes");
  response.end();
});

//Listening Twice:
server.on("request", function (req, res) {
  console.log("New user request Detected");
});

//Listning for close:
server.on("close", function () {
  console.log("Closing the server");
});
server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
