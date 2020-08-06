var express = require("express");

var app = express();

app.get("/", function (request, response) {
  response.send("Helo there, from Express");
});

app.listen(3030, function () {
  console.log("Listening at port 3030");
});
