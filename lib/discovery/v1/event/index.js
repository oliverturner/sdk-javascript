var all = require('./all');
var find = require('./find');

module.exports = function(apiKey, accessToken) {
  return {
    all: all(apiKey, accessToken),
    find: find(apiKey, accessToken)
  };
};

module.exports.all = all;
module.exports.find = find;
