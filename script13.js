const fs = require("fs");

fs.readdir("Files", (err, files) => {
  if (err) throw err;
  for (var file of files) {
    console.log(file);
  }
});
