'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  if (!file.match(/.+\.txt/g)) {
    cb('Invalid file, must be .txt file');
  } else {
    cb(undefined, new Buffer('File Read'));
  }
};

exports.writeFile = (file, content, cb) => {
  if (!file || !content) {
    cb('Missing parameters');
  } else {
    cb(undefined);
  }
};