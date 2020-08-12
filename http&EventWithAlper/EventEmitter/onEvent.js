//First step: Define your Module
//1 way
const events = require("events");
const eventEmitter = new events.EventEmitter();

//2 Way
//var emitter = require('events').EventEmitter;
//var e = new emitter();

//Second step: Take action handle function
function LoopProcessor1(num) {
  setTimeout(function () {
    for (var i = 1; i <= num; i++) {
      //first we create an object of eventEmitter class and then, use it to emit "BeforeProcess" and "afterProcess" event
      eventEmitter.emit("BeforeProcess", i); //1st message line

      console.log("Processing number " + i); //2nd message line

      eventEmitter.emit("AfterProcess", i);
    }
  }, 2000);
  //We need to return an Object of eventEmitter from the function
  return eventEmitter;
}

//Third Step : Create your events
//We use the return value of LoopProcessor function to bind these events using on() / addLister() method
var loop1 = LoopProcessor1(3);
loop1.on("BeforeProcess", function (data) {
  console.log("The process is started for " + data);
});
loop1.on("AfterProcess", function (data) {
  console.log("Completed processing " + data);
});
