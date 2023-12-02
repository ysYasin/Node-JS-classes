/// :::::??? Strimming :::::::??
const fs = require('fs');
const http = require('http');


/// :::::::::: Read Stream :::::::
//const ourDataStrem = fs.createReadStream(`${__dirname}/data.txt`);

// ourDataStrem.on('data', (cikcik) => {

//     console.log(cikcik);

// })

//::::::::::: create write stream :::::::::::

// const readStream = fs.createReadStream(`${__dirname}/data.txt`);
// const writeStream = fs.createWriteStream(`${__dirname}/write.txt`)

// readStream.on('data', (dutud) => {
//     writeStream.write(dutud)
// })

//:::::::::: Pipe :::::::::::::::::
// Pipe is not anything but it just a easier o for write stream

const server = http.createServer((req, res) => {
    const readDataStream = fs.createReadStream(`${__dirname}/Data.txt`, "utf8");
    readDataStream.pipe(res)
})

server.listen(3001)