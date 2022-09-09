const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our homepage.');
  } else if (req.url === '/about') {
    res.end('This page has details about us.');
  } else {
    res.end(
      `<h1>Opps!</h1>
      <p>We cant seem to find the page you are looking for</p>
      <a href='/'>Back Home</a>`
    );
  }
});

server.listen(5000);
