var fs = require("fs");

console.log("Executed Before File Reading.");

/* var data = fs.writeFile(
  "./Files/file1",
  "Hello there, this is a first file created by writeFile method",
  "utf-8",
  function (error) {
    if (error) throw error;
    console.log("file written");
  }
);
console.log(data);
console.log("Executed for sure After File Reading."); */

var data = fs.writeFileSync(
  "./Files/file2",
  "Hello there! what is thais am I writting",
  "utf-8"
);
console.log("file written");
console.log("Executed for sure After File Reading.");
