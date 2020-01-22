const http = require('http');
const router = require('./router/routes');

const server = http.createServer((req, res) => {
  router.route(req, res);
});

module.exports = server;
