#!/usr/bin/env node

'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');

let server = http.createServer();

server.listen(80, 'localhost');

server.on('error', function(e) {
  if (e.code == 'EADDRINUSE') {
    server.listen(0, 'localhost');
  }
});

server.on('listening', function() {
  let port = server.address().port === 80 ? '': `:${server.address().port}`;

  console.log('Static Folder Server running at:');
  console.log(`http://localhost${port}`);
});

server.on('request', function(req, res) {
  let filePath = path.join(__dirname, req.url);

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end(`Couldn't find the file: ${filePath}`);
    return;
  }

  let stats = fs.lstatSync(filePath);

  if (stats.isDirectory()) {
    filePath = path.join(filePath, '/index.html');
  }

  let file = fs.readFileSync(filePath);
  res.writeHead(200);
  res.write(file);
  res.end();
});
