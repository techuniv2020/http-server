const fileHandler = require('../handlers/file');

const routes = {
  '/file': {
    GET: fileHandler.read,
    POST: fileHandler.write,
  },
};

module.exports = routes;
