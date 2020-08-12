const http = require("http");
const { func } = require("prop-types");

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    //writeHEad: Writes the HTTP header with sub methods like statuscode, setHeader
    res.writeHead(200, { "Content-Type": "text/html" });
    //Set response content:
    res.write("<html><body><p>this is my home page!</P></body></html>");
    //end writes the body and closes the response!
    res.end();
  } else if (req.url == "/news") {
    //writeHead: writes the HTTP header with sub methods like statusCode, setHeader
    res.writeHead(200, { "Content-Type": "text/html" });
    //Set response content: Write a response content to the client
    res.write("<html><body><p>this is my News page!</P></body></html>");
    //end writes the body and closes the response!
    res.end();
  } else if (req.url == "/movies/scary") {
    //writeHead: writes the HTTP header with sub methods like statusCode, setHeader
    res.writeHead(200, { "Content-Type": "text/html" });
    //Set response content: Write a response content to the client
    res.write("<html><body><p>this is my Movies page!</P></body></html>");
    //end writes the body and closes the response!
    res.end();
  } else res.end("Invalid request!");
});

server.listen(3000, function () {
  console.log("Web server is running");
});

/* 
Example: You can define multiple time for response, but you only time for res.end

response.write('<html>');
response.write('<body'>);
response.write('<p>This is my home page!</p>');
response.write('</body>');
response.write('</html>');
*/
