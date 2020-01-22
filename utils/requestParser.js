const parseRequestWithCb = (req, cb) => {
  let body = '';
  req.on('data', (data) => {
    body += data;
  });
  req.on('end', () => {
    cb(body);
  });
};

const parseRequest = (req) => {
  return new Promise((resolve, reject) => {
    parseRequestWithCb(req, (body)=> {
      if (!body.length) {
        reject(new Error('Empty body'));
      }
      resolve(body);
    });
  });
};

module.exports = {
  parseRequest,
};
