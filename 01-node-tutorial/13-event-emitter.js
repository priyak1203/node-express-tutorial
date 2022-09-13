// get back the class
// if want something custom then extend from class
// otherwise just for emitting and handling events create an instance of the class

const EventEmitter = require('events');

// instance of the class returns an object
const customEmitter = new EventEmitter();

customEmitter.on('response', () => {
  console.log(`Data Receieved`);
});

customEmitter.emit('response');
