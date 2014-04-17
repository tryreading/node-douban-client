var _ = require('underscore');
var basePath = '/book/';

module.exports = {
  getById: function (id, callback) {
    this.get({
      path: basePath + id
    },  callback);
  }
};
