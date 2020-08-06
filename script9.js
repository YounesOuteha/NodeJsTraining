const fs = require("fs");

fs.unlink("./Files/file2", function (err) {
  if (err) throw err;
  console.log("The file was deleted successfully");
});
