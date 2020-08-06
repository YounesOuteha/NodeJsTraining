const fs = require("fs");

fs.appendFile(
  "./Files/file1",
  "This text was appended by append method",
  (err) => {
    if (err) throw err;
    console.log("Appending completed successfully!");
  }
);
