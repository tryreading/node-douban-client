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
  },

  getTagsById: function (id, callback) {
    this._client.get({
      path: basepath + id + '/tags'
    },
    callback);
  },

  getUserCollectionsById: function (id, callback) {
    this._client.get({
      path: basepath + 'user/' + id + '/collections'
    },
    callback);
  },

  getUserCollectionsByName: function (name, callback) {
    this._client.get({
      path: basepath + 'user/' + name + '/collections'
    },
    callback);
  },

  getCollectionById: function (id, callback) {
    this._client.get({
      path: basepath + id + '/collections'
    },
    callback);
  },

  getUserAnnotationsByName: function (name, callback) {
    this._client.get({
      path: basepath + 'user/' + name + '/annotations'
    },
    callback);
  },

  getAnnotationsById: function (id, callback) {
    this._client.get({
      path: basepath + id + '/annotations'
    },
    callback);
  },

  getAnnotation: function (id, callback) {
    this._client.get({
      path: basepath + 'annotation/' + id
    },
    callback);
  }
};
