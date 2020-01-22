const {readFile, writeFile} = require('../utils/file');
const {parseRequest} = require('../utils/requestParser');

const read = (_req, res) => {
  readFile('./resources/file.txt')
      .then((content) => {
        res.write(content);
        res.end();
      })
      .catch((_err) => {
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end();
      });
};

const write = (req, res) => {
  parseRequest(req)
      .then((data) => {
        const jsonBody = JSON.parse(data);
        return writeFile('./resources/file.txt', jsonBody.text);
      })
      .then(() => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end();
      })
      .catch((_err)=>{
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end();
      });
};

module.exports = {
  read,
  write,
};
