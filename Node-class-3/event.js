const { log } = require('node:console');
const { EventEmitter, errorMonitor } = require('node:events');

// class MyEmitter extends EventEmitter {}

const myEmitter = new EventEmitter();
// myEmitter.on('event', () => {
// console.log('an event occurred!');
// });
// myEmitter.emit('event');

//Passing arguments and this to listeners

// myEmitter.on('event', (a, b) => {
//     console.log(a, b, this, this === myEmitter);
// })

// myEmitter.emit('event', "ami", "tumi");

//Asynchronous vs. synchronous
//event register asyncronusly
// console.log("Event Start now!");
// myEmitter.on('event', (a, b) => {
//     setImmediate(() => {
//         console.log(`${a} loves ${b}`);
//     })
// })
// // event listener
// myEmitter.emit('event', "yasin", "Megh")
// console.log('Event ended!');

//Handling events only once
// firsr see how emit on working
let n = 0;
// myEmitter.on("event", () => {
//     console.log(++n);
// })

// myEmitter.emit("event") // log 1
// myEmitter.emit("event") // log 2
// myEmitter.emit("event") // log 3
// myEmitter.emit("event") // log 4

// Butt when event register with once it will print first time, then it will bw ignored and ignored
// myEmitter.once("event", function () {
//     console.log(++n);
// })

// myEmitter.emit("event") // print : 1
// myEmitter.emit("event") // nothing will be printed
// myEmitter.emit("event") // print : nothing will be printed
// myEmitter.emit("event") // print : nothing will be printed

//Error events
// myEmitter.on('error', function (err) {
//     setImmediate(() => {
//         console.log(` woops! there was an error: ${err.message}`);
//     })
// })
// myEmitter.emit('error', new Error('whoops!'));

/**
 * It is possible to monitor 'error' events without consuming the emitted error by installing a
 *  listener using the symbol events.errorMonitor.
 */

// myEmitter.on(errorMonitor, (err) => {
//     console.log(err);
// });
// myEmitter.emit('error', new Error('Woops!'));

