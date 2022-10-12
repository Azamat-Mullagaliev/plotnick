var fs = require("fs");
const inputfile = fs.readFileSync('./example.txt', 'utf8');

console.log(inputfile.split('\n')[4]);