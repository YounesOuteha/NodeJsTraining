const events = require("events");
const EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [],
  chatlog = [];

//Subscribe first event
chat.on("message", function (message) {
  chatlog.push(message);
  console.log(message);
});

//Subscribe second Event
chat.on("join", function (nickname) {
  users.push(nickname);
  console.log(nickname);
});

//Raise your event
chat.emit("join", "Car");
chat.emit("message", "Hello");
