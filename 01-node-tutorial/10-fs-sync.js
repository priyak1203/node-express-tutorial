const { readFileSync, writeFileSync } = require('fs');

console.log('Start the first task');
const first = readFileSync('./contents/first.txt', 'utf-8');
const second = readFileSync('./contents/second.txt', 'utf-8');
console.log({ first, second });

writeFileSync(
  './contents/result-sync.txt',
  `Here is the result : ${first} ${second} `,
  { flag: 'a' }
);

console.log('Done with the first task');
console.log('Starting the next one');
