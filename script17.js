const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use("/assets", express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, "files") });
});

app.get(/^(.+)$/, function (req, res) {
  console.log(req.params);
  try {
    if (
      fs
        .statSync(path.join(__dirname, "./files/", req.params[0] + ".html"))
        .isFile()
    ) {
      res.sendFile(req.params[0] + ".html", {
        root: path.join(__dirname, "./files"),
      });
    }
  } catch (err) {
    console.log(err);
    res.sendFile("404.html", { root: path.join(__dirname, "./files") });
  }
});

app.listen(3000, function () {
  console.log("Listenning to port 3000");
});
