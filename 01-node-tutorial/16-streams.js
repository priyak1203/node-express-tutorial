const { createReadStream } = require('fs');

// reads data in chunks
// default 64kb
// last buffer - remainder
// highWaterMark - controls chunk size/ buffer size
// const stream = createReadStream('./contents/bigFile.txt', {highWaterMark: 90000}) // changes the size of chunk
// const stream = createReadStream('./contents/bigFile.txt', {encoding: 'utf-8'}); // encoding
const stream = createReadStream('./contents/bigFile.txt');

stream.on('data', (result) => {
  console.log(result);
});

stream.on('error', (error) => console.log(error));
