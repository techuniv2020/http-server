const fs = require('fs');

const readFile = (path) => {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const writeFile = (path, data) => {
  return new Promise(function(resolve, reject) {
    fs.writeFile(path, data, (err) => {
      if (err) {
        reject(err);
      }
      resolve(true);
    });
  });
};

module.exports = {
  readFile,
  writeFile,
};
