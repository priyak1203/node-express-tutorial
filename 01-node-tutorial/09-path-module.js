const path = require('path');

// platform specific seperator
console.log(path.sep);

// returns normalized filepath
const filePath = path.join('/contents', 'subfolder', 'test.txt');
console.log(filePath);

// returns base name
const base = path.basename(filePath);
console.log(base);

// returns absolute path
const absolute = path.resolve(__dirname, 'contents', 'subfolder', 'test.txt');
console.log(absolute);
