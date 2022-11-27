// GLOBALS - No Window object available

// __dirname  - path to current directory
// __filename - file name
// require    - function to user modules (CommonJS)
// module     - info about current module(file)
// process    - info about env where the program is being executed

console.log(`The path is ---- ${__dirname}`);
console.log(`The file name is : ${__filename}`);

setInterval(() => {
  console.log('Hello World');
}, 2000);
