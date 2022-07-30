const EventEmitter = require("events");

// Create class
class MyEmitter extends EventEmitter {}

// instantiate object
const emitter = new MyEmitter();

// Event listener
emitter.on("event", () => console.log("Event fired!"));

// Init event
emitter.emit("event");
