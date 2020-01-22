const {readFile, writeFile} = require('../utils/file');
const {parseRequest} = require('../utils/requestParser');

const read = async (_req, res) => {
  const content = await readFile('./resources/file.txt');
  res.write(content);
  res.end();
};

const write = async (req, res) => {
  const body = await parseRequest(req);
  const jsonBody = JSON.parse(body);
  await writeFile('./resources/file.txt', jsonBody.text);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end();
};

module.exports = {
  read,
  write,
};
