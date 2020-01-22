const routes = require('./routes');

const route = (req, res) => {
  const {url, method} = req;
  const handler = routes[url][method];
  if (!handler) {
    res.writeHead(404);
    return;
  }
  handler(req, res);
};

module.exports = {
  route,
};
