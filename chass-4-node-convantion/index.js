//depandencies
const fs = require('fs');
const math = require('./math');

// app object -> scafolding
const app = {}
app.config = {
    timeOutSchadule: 1000
}
// getting all of the qoutes
const qoutes = fs.readFileSync(`${__dirname}/qout.txt`, 'utf-8');
// making qoutes by qouts an array
const qout = qoutes.split(/\r?\n/)

// functon that retuens a random qoute
app.randomQoutes = () => {
    // making random qoutee number
    const randomNum = Math.round(math.giveRandomNumber(1, qout.length));
    // take a qoute instead of a random number
    const randomQoute = qout[randomNum - 1];
    // log the qoute
    console.log(randomQoute);

}
setInterval(() => {
    app.randomQoutes()
}, app.config.timeOutSchadule)