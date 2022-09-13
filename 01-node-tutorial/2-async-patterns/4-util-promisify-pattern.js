const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise('../contents/first.txt', 'utf-8');
    const second = await readFilePromise('../contents/second.txt', 'utf-8');
    await writeFilePromise(
      '../contents/result-promisify.txt',
      `This is AWESOME: ${first} ${second}`
    );
  } catch (error) {
    console.log(error);
  }
};

start();
