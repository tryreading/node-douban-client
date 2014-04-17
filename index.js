"use strict";

var _ = require('underscore');
var request = require('request');
var apis = require('./lib');

var apiUrl = "https://api.douban.com/v2";

function Douban (opts) {
  if (opts.version && opts.version !== 'v2') {
    throw new Error('only v2 is supported');
  }
  this.opts = opts;
  return this;
}

Douban.prototype.get = function (opts, callback) {
  opts = _.defaults(opts, this.opts);
  
  // set request url
  var url = apiUrl + opts.path;

  // set default qs and copy over all of the query parameters
  var qs = {
    apikey: opts.apikey
  };
  _.extend(qs, opts.qs);
   
  // set up request
  request.get(
    {
      url: url,
      qs: qs,
      json: true
    },
    function (err, res) {
      if (err) {
        return callback(err);
      }
      return callback(null, res.body);
    }
  );
};

Douban.prototype.post = function (opts, callback) {
  opts = _.defaults(opts, this.opts);
  request.post(opts, callback);
};

_.each(apis, function(api, key) {
  api._client = {};
  _.extend(api._client, Douban.prototype);
  Douban.prototype[key] = api;
});


module.exports = Douban;
