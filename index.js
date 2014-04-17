"use strict";

var _ = require('underscore');
var request = require('request');
var apis = require('./lib');
var apiUrl = "https://api.douban.com/v2";

function Douban (opts) {
  this.opts = opts;
  return this;
}

Douban.prototype.get = function (opts, callback) {
  opts = _.defaults(opts, this.opts);
  var url = apiUrl + opts.path;
  request.get(url, callback);
};

Douban.prototype.post = function (opts, callback) {
  opts = _.defaults(opts, this.opts);
  request.post(opts, callback);
};

_.each(apis, function(api, key) {
  _.extend(api, Douban.prototype);
  Douban.prototype[key] = api;
});


module.exports = Douban;
