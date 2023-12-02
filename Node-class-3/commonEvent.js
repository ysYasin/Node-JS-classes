const { EventEmitter } = require('node:events');
const fs = require('fs');

const myEmitter = new EventEmitter();

// "data" event emitter Used with readable streams to handle chunks of data being read.

const readableStream = fs.createReadStream(`${__dirname}/data.txt`)
readableStream.on("data", (chuck) => {
    // console.log(chuck);
})

//:: end :: Signifies the end of a readable stream. It is emitted when no more data will be provided

readableStream.on("end", () => {
    // console.log(`ended data reading ${__dirname}/data.txt`);
})

//:: error :: 
myEmitter.on('error', (err) => {
    // console.log("Hey, its an arror");
})
myEmitter.on("goBed", (error) => {
    // console.log(`go to bed`);
})
myEmitter.emit(`error`, new Error("woops!"))

// :: close ::
// Fired when a resource, like a file descriptor or network socket, is closed.
// server.on('close', () => {
// Server closed
// });

//:: request :: //Emitted by an HTTP server when a new request is received.
// httpServer.on('request', (request, response) => {
// Handle HTTP request
// });

// :: response :: //Emitted by an HTTP server when response received
// httpClient.on('response', (response) => {
// Handle HTTP response
// });

//:: finish :: //Emitted when Indicates the completion of writing to a writable stream
// writableStream.on('finish', () => {
// Writing to stream is finished
// });

// :: timeout ::// Fired on a net.Server when a socket times out.
// server.on('timeout', () => {
// Socket timed out
// });

// :: connect :: // Emitted by a TCP client when a connection is successfully established.
// tcpClient.on('connect', () => {
// Connection successful
// });
//:: open :: //Emitted when a file or resource is opened.
// fileStream.on('open', () => {
//     // File is opened
// });

// :: drain :: //Emitted when
// Signifies that it's appropriate to resume writing to a stream after a 'data' event previously caused a write buffer to be fully drained.
// writableStream.on('drain', () => {
// Resume writing to the stream
// });

//::: message:: // Emitted in a child process when a message is received from the parent process
// childProcess.on('message', (message) => {
// Handle message from parent process
// });

//:: unhandledRejection :: // Emitted when a Promise is rejected, and no error handler is attached.
// process.on('unhandledRejection', (reason, promise) => {
// Handle unhandled promise rejection
// console.error('Unhandled Rejection at:', promise, 'reason:', reason);
// });

//:: uncaughtException ::// ->Emitted when an unhandled exception occurs. It's typically used for logging and preventing the process from exiting immediately.
// process.on('uncaughtException', (err) => {
// Handle uncaught exception
// console.error(err);
// });

//:: SIGINT ::/Emitted when the process receives a signal to interrupt from the terminal
// process.on('SIGINT', () => {
// Handle interruption (e.g., graceful shutdown)
// });

