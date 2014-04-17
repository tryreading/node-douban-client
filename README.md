node-douban-client
==================

Douban API client in nodejs

## Usage

```
var Douban = require('node-douban-client');

var douban = new Douban({
  verson: 'v2',
  apikey: '12345'
});

douban.book.getById(123, function (err, res) {
  // do stuff
});
```
