const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    // const text = fs.readFileSync('./contents/biggerFile.txt', 'utf-8');
    // res.end(text);

    const fileStream = fs.createReadStream(
      './contents/biggerFile.txt',
      'utf-8'
    );

    fileStream.on('open', () => {
      fileStream.pipe(res);
    });

    fileStream.on('error', (err) => res.end(err));
  })
  .listen(5000, () => console.log('Server listening on Port : 5000'));
