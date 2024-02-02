const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let n = Number(input[0]);
    let i = 1;
    
    while (i <= n) {
        console.log('*'.repeat(i));
        i++;
    }
});