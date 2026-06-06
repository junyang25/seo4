const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((request, response) => {
  let filePath = '.' + request.url;
  if (filePath === './') filePath = './index.html';
  filePath = filePath.split('?')[0];

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if(error.code === 'ENOENT') {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('404 Not Found', 'utf-8');
      } else {
        response.writeHead(500);
        response.end('Error: '+error.code+' ..\n');
      }
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    }
  });
});

server.listen(3000, () => console.log('Server running on port 3000'));
