const fileHandler = require('../handlers/file');

const routes = {
  '/file': {
    GET: fileHandler.read,
    POST: fileHandler.write,
  },
};

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
