const http = require('http');
const app = require('./app');

const PORT = process.env.PORT ?? 5000;
const HOST = process.env.HOST ?? 5000;

const httpServer = http.createServer(app);

httpServer.listen(PORT, () =>
  console.log(`Server is listening http//${HOST}:${PORT}`)
);
