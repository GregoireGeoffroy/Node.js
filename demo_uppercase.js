var http = require('http');

http.createServer(async function (req, res) {
  const uc = await import('upper-case'); // Dynamic import
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080);
