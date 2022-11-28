const { readFileSync } = require('fs');
const http = require('http');

const homePage = readFileSync('./home.html', 'utf-8');

const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method);
  const url = req.url;

  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homePage);
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>About Page</h1>');
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>Page not found</h1>');
  }

  res.end();
});

server.listen(5000, () => console.log(`Server listening on PORT: 5000`));
