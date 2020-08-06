var events = require("events");
const { func } = require("prop-types");

var eventEmitter = new events.EventEmitter();

/* eventEmitter.on("myCustomEvent", function () {
  console.log("Event Fired");
});

setInterval(function () {
  eventEmitter.emit("myCustomEvent");
}, 2000); */

eventEmitter.on("myCustomEvent", function (arg1, arg2) {
  console.log(arg1 + arg2);
});

setTimeout(function () {
  eventEmitter.emit("myCustomEvent", "String1", " and String2");
}, 2000);
