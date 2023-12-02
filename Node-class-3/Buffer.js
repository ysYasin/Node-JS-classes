const { Buffer } = require('node:buffer');


const myLove = ["meghla", "Fatema", "Kaniz", "Meghu", "Janvi"]
const buffer = Buffer.from('tést', 'latin1');
// console.log(buffer);
// const bufferFromText = Buffer.from('Hello, Node.js!', 'utf-8');
const bufferAlloc = Buffer.alloc(10);
console.log(buffer);