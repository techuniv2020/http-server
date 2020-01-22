const http = require('http');
const router = require('./router');

const server = http.createServer((req, res) => {
  router.route(req, res);
});

module.exports = server;
