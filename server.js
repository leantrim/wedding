const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = dev ? 'localhost' : 'sepidehandgeorge.com'
const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
  });
});


// const appApi = express();
// appApi.use(cors());

// appApi.use('/api', (req, res) => {
//   res.send('Hello World!');
// });

// appApi.listen(8000, () => console.log('Listening on port 8000...'));

