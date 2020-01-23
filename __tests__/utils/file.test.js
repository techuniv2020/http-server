const fs = require('fs');
const sinon = require('sinon');
const {readFile} = require('../../utils/file');

describe('read file promise', () => {
  it('should resolve with contents of file on successful file read', (done) => {
    const readMock = jest.spyOn(fs, 'readFile');
    readMock.mockImplementation((file, opts, cb) => cb(null, 'mock'));
    readFile('abc')
        .then((data) => {
          expect(data).toEqual('mock');
          readMock.mockRestore();
          done();
        });
  });
  it('should reject with error on unsuccessful file read', (done) => {
    const readMock = jest.spyOn(fs, 'readFile');
    const error = new Error('error');
    readMock.mockImplementation((file, opts, cb) => cb(error, null));
    readFile('abc')
        .catch((err) => {
          expect(err.message).toEqual('error');
          readMock.mockRestore();
          done();
        });
  });
});
