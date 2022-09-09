const { readFile, writeFile, read } = require('fs');

console.log('Start the first task');
readFile('./contents/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile('./contents/second.txt', { encoding: 'utf-8' }, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      './contents/result-async.txt',
      `Async Write Result: ${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log('Done with the first task');
      }
    );
  });
});

console.log('Start the next task');
