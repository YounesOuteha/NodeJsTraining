var fs = require("fs");

console.log("Executed Before File Reading.");

fs.readFile("./Files/file", "utf-8", function (error, data) {
  console.log(data);
});

console.log("Executed After File Reading, propably.");

/*var data = fs.readFileSync("./Files/file", "utf-8");
console.log(data);
console.log("Executed for sure After File Reading."); */
