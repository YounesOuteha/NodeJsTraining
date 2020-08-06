const fs = require("fs");

fs.rmdir("folderToDelete", () => {
  console.log("Folder was deleted successfully");
});
