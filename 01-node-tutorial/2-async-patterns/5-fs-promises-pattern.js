const { readFile, writeFile } = require('fs').promises;

const start = async () => {
  try {
    const first = await readFile('../contents/first.txt', 'utf-8');
    const second = await readFile('../contents/second.txt', 'utf-8');
    await writeFile(
      '../contents/result-fs-promises.text',
      `The result is ${first} ${second}`,
      { flag: 'a' }
    );
  } catch (error) {
    console.log(error);
  }
};

start();
