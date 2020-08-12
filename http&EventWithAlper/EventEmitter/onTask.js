var fs = require("fs");
//!-Definition of requirement
var events = require("events");
var eventsEmitter = new events.EventEmitter();
//2-: Create your events with and bind with handle function (subscription)
//We have binded "read" event with "readFileContent" Event handler function using on() method emitter
eventsEmitter.on("read", readFileContent);
//We have binded "read" event with "displayFileContent" Event handler function using on() method emitter
eventsEmitter.on("display", displayFileContent);
//We have binded "read" event with "finished" Event handler function using on() method emitter
eventsEmitter.on("finished", finished);

//3: raise the event
//We have writen JS function, we use them as Event Handler functions

eventsEmitter.emit("read", "YounesBio.txt");
function readFileContent(fileName) {
  console.log("Reading " + fileName + " file started: ");
  fs.readFile(fileName, "utf-8", readFile);
}
function readFile(err, data, fileName) {
  console.log("Reading " + fileName + " file done successfull. ");
  eventsEmitter.emit("display", data);
}

function displayFileContent(data) {
  console.log("File DATA: ");
  console.log(data);
  eventsEmitter.emit("finished");
}

function finished() {
  console.log("Reading and printing File job is done successfully");
}
