// console.log("start");
// setTimeout(() => {
//     console.log("Timeout");
// }, 2000);

// setImmediate(() => {
//     console.log("setImmediate");
// });

// process.nextTick(() => {
//     console.log("nextTick");
// });

// console.log("end");

const fs = require('fs');
fs.writeFile('example.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    }
    else{
    console.log('File has been written!');
}
}); 

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File contents:', data);
    }
});
fs.appendFile('example.txt', '\nAppended text.', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Text has been appended to the file!');
    }
});