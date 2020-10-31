//create http request
const http = require('http');

//specify variables
const hostname = '127.0.0.1';
const port = 3000;

//create http request
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

//print notice to the console
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});