/**
 * Titllr : Basic node app example
 * a simple node app , who will give us a random qoute
 * author : Yasin Arafat
 * date : 12/02/2023
*/

// math object -> module scafolding
const math = {};

math.giveRandomNumber = (min, max) => {
    let minimun = min;
    let maximum = max;

    minimun = typeof minimun === 'number' ? minimun : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;

    return Math.random() * (max - min + 1) + min;
}

module.exports = math;