const http = require('http');
const { readFileSync } = require('fs');

const homePage = readFileSync('./navbar-app/index.html', 'utf-8');
const homeLogo = readFileSync('./navbar-app/logo.svg', 'utf-8');
const homeStyles = readFileSync('./navbar-app/styles.css', 'utf-8');
const homeLogic = readFileSync('./navbar-app/browser-app.js', 'utf-8');

const server = http.createServer((req, res) => {
  const url = req.url;
  //   console.log(url);

  // homepage
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homePage);
  }

  // logo
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    res.write(homeLogo);
  }

  // styles
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(homeStyles);
  }

  // logic browser-app.js - script file
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(homeLogic);
  }

  // about page
  else if (url === '/about.html') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>About Page</h1>');
  }

  // 404 page
  else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>Page Not Found</h1>');
  }

  res.end();
});

server.listen(5000, () => console.log('Server listening on PORT: 5000'));
