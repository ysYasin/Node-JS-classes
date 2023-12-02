// NODE : Fs | Os | Path | Events , ...HTTP Modules ...

//////////// : PATH :: ///////////////////
// first require the path module
const path = require('path/win32');
// now console.log(); the PaymentMethodChangeEvent, lets see what resul it gives
// console.log(path);
// it gives the result
// resolve: [Function: resolve],
// normalize: [Function: normalize],
// isAbsolute: [Function: isAbsolute],
// join: [Function: join],
// relative: [Function: relative],
// toNamespacedPath: [Function: toNamespacedPath],
// dirname: [Function: dirname],
// basename: [Function: basename],
// extname: [Function: extname],
// format: [Function: bound _format],
// parse: [Function: parse],
// sep: '//',
// delimiter: ';',
// win32: [Circular *1],
// posix: <ref *2> {
// resolve: [Function: resolve],
// normalize: [Function: normalize],
// isAbsolute: [Function: isAbsolute],
// join: [Function: join],
// relative: [Function: relative],
// toNamespacedPath: [Function: toNamespacedPath],
// dirname: [Function: dirname],
// basename: [Function: basename],
// extname: [Function: extname],
// format: [Function: bound _format],
// parse: [Function: parse],
// sep: '/',
// delimiter: ':',
// win32: [Circular *1],
// posix: [Circular *2],
// \_makeLong: [Function: toNamespacedPath]
// },
// \_makeLong: [Function: toNamespacedPath]
// }

const parse = path.parse('C:/yasin/Node-js-Class/class-2/index.js', '.js')
// console.log(parse);
// this is re turn a object, with key's || dir, base,root, ext and name
{
    // root: 'C:/',
    // dir: 'C:/yasin/Node-js-Class/class-2',
    // base: 'index.js',
    // ext: '.js',
    // name: 'index'
}

// console.log(path.isAbsolute('C:/yasin/Node-js-Class/class-2/index.js'));
//path.isAbsolute is defined thai is path is write or wrong,
//this console will return ture;

// PATHT : path.join its join the paths, and path should be <String>
// console.log(path.join(qrst, "path", "somethis else"));
// it will return an error that, qrst is not defiend
// console.log(path.join("qrst", "path", "somethis-else"));
// But this will return ::// qrst/path/somethis-else

// PATH normalized :
// console.log(path.normalize("path///////////...///dirname////patn.ext"));
// it will retuen a normal path Like :: path/.../dirname/patn.ext

// console.log(path.win32);

///////////////:::: PATH :::: //////////
// const os = require('os');
// // console.log(os.machine());

// const fs = require('fs');
// const { error } = require('console');

// fs.writeFile("index2.css", ".csss{color: red}", (err, data) => {
// if (err) throw error;
// })

// fs.appendFile("index2.css", ".arr{color: blue}", (err, data) => {
// if (err) throw error;
// })
// fs.access("C:/yasin/Node-js-Class/class-2/index2.css", fs.constants.F_OK, (err, data) => {
// if (err) {
// console.log("file does't exist");
// }
// console.log("The file is exist");
// })

// fs.readFile("C:/yasin/Node-js-Class/class-2/index2.css", (err, data) => {
// if (err) {
// console.log("error reading file");
// }
// console.log(data.toString());
// })
// fs.unlink("index2.css", (err, data) => {
// if (err) {
// console.log("can't remove file")
// }
// console.log("file successfully deleted");
// })

//////::: EVENT ::????////////////////
// first we need to require the events , it will give us an Class , lets require
const EventEmiter = require('events');
// as we say! events gives us a Class , and usualy in NOde we write class names in Capitalize case, thats why we said EventEmiter
// Now lets make a Emiter;
const emitter = new EventEmiter()
// for calling an event with emitter we need first to make sure we have ragistered events
// to register an event er need to tank in mind, it will get to paramerers, first one is event name second one is a call back fuction
// emitter.on("event", function(){})
emitter.on("RingBell", () => {
    // console.log("Bell is fired, Lets go!");
})
//lets make na emmit with the emitter : in () bracket we will say which emmit we want to call

//emitter.emit("RingBell")// here we will an immidiet ans
// but this is just like an event coller/ when will you call, in that time event will run which event is registerd in the same name

// lets have an example,
setTimeout(() => {
    emitter.emit("RingBell")
}, 2000) // now RingBell" event will run after 2 seconds

// ?????-Calling event / emitter with paramiter-?????\\

// we can send multiple paramiter whern we calling emmiter, lets have an example
//vent register '>
emitter.on("GoThere", function ({ couse, event }) {
    // console.log(`you should go ther right now ${couse} ${event}`);
})

// call emmiter with paramiters
// emitter.emit("GoThere", "becous teacher is calling you") // but this is not best practice tray to just call the event

// but if you need to call send paramiter, then send an object Like::
// setTimeout(() => {
// emitter.emit("GoThere", {
// couse: "becouse",
// event: "teacher is calling you",
// })
// }, 2000)

/// we can register and rise an event/ emiiter from deffarent file's , her is an example
// we will use ther another file "index2.js"
// we wrote on that file => "index2.js =>
//''''''''''
//const EventEmitter = require('events')

// class readingTime extends EventEmitter {
// startReading() {
// console.log('Hey you! START reading !');

// setTimeout(() => {
// this.emit(`goBed`, {
// couse: "becouse",
// text: "Reading time is end"
// });
// }, 2000);
// }
// }

// module.exports = readingTime;'''''/////
// const ReadingTinme = require('./index2');

// const rt = new ReadingTinme();
// rt.on("goBed", ({ couse, text }) => {
// console.log(`Go to bed ${couse} ${text}`);
// })
// rt.startReading()

////// ???????:::::::::: HTTP module :::??? ???
// const http = require('http');

// const server = http.createServer((req, res) => {
// if (req.url === '/') {
// res.write("Hello babara !")
// }
// if (req.url === "/contacts") {
// res.write('my email is {mail : yasin arafat}')
// }
// else {
// res.write("Fokka")
// }
// res.end()
// });

// server.listen(3000)
