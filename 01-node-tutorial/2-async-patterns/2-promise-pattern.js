const { readFile } = require('fs');

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getText('../contents/first.txt')
  .then((result) => {
    const first = result;
    getText('../contents/second.txt')
      .then((result) => {
        console.log(`The result is -  ${first} ${result}`);
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
