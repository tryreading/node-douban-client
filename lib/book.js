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
      path: basePath + 'search',
      qs: opts
    },
    callback);
  },

  getTagsById: function (id, callback) {
    this._client.get({
      path: basePath + id + '/tags'
    },
    callback);
  },

  getUserCollectionsById: function (id, callback) {
    this._client.get({
      path: basePath + 'user/' + id + '/collections'
    },
    callback);
  },

  getUserCollectionsByName: function (name, callback) {
    this._client.get({
      path: basePath + 'user/' + name + '/collections'
    },
    callback);
  },

  getCollectionById: function (id, callback) {
    this._client.get({
      path: basePath + id + '/collections'
    },
    callback);
  },

  getUserAnnotationsByName: function (name, callback) {
    this._client.get({
      path: basePath + 'user/' + name + '/annotations'
    },
    callback);
  },

  getAnnotationsById: function (id, callback) {
    this._client.get({
      path: basePath + id + '/annotations'
    },
    callback);
  },

  getAnnotation: function (id, callback) {
    this._client.get({
      path: basePath + 'annotation/' + id
    },
    callback);
  }
};
