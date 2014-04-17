var basePath = '/book/';

module.exports = {
  // get book by id
  getById: function (id, callback) {
    this._client.get({
      path: basePath + id
    },  callback);
  },

  getByIsbn: function (isbn, callback) {
    this._client.get({
      path: basePath + 'isbn/' + isbn
    },
    callback);
  },

  search: function (opts, callback) {
    this._client.get({
      path: basepath + 'search',
      qs: opts
    },
    callback);
  }
};
