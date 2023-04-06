const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = dev ? '192.168.1.52' : 'sepidehandgeorge.com'
const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Bind to the correct IP address and port number
  const bindAddress = dev ? '192.168.1.52' : 'sepidehandgeorge.com';
  const bindPort = port;
  server.listen(bindPort, bindAddress, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${bindAddress}:${bindPort}`);
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });
});


// const appApi = express();
// appApi.use(cors());

// appApi.use('/api', (req, res) => {
//   res.send('Hello World!');
// });

// appApi.listen(8000, () => console.log('Listening on port 8000...'));

