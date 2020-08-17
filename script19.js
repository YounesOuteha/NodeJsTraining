const express = require("express");
const app = express();
const path = require("path");

var bodyParser = require("body-parser");
app.use(bodyParser());

app.use("/assets", express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, "./files") });
});

app.post("/", function (req, res) {
  res.end(JSON.stringify(req.body));
});

app.listen(3000, function () {
  console.log("Listenning to port 3000");
});
