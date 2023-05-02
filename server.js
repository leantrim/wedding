const express = require('express');
const next = require('next');

const ip = '127.0.0.1';

const dev = process.env.NODE_ENV !== 'production';
const hostname = dev ? ip : 'sepidehandgeorge.com'
const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Bind to the correct IP address and port number
  const bindAddress = dev ? ip : 'sepidehandgeorge.com';
  const bindPort = port;
  server.listen(bindPort, bindAddress, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${bindAddress}:${bindPort}`);
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });
});


