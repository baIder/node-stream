const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', (request, response) => {
  const stream = fs.createReadStream('./big_file.txt');
  stream.pipe(response);
});

server.listen(8888);
console.log('8888');