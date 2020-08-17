const express = require("express");
const app = express();
const path = require("path");

app.use("/assets", express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  /* res.end(JSON.stringify(req.query)); */
  let response = "Hello! " + req.query.firstName; //If we wrote in the qeury name and we give it a value
  res.end(response);
});

app.listen(3000, function () {
  console.log("Listenning to port 3000");
});
