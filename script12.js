const fs = require("fs");

fs.rename("folderTo", "renamedFolder", function (err) {
  if (err) throw err;
});
