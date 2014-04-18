var Douban = require('..');
var test = require('tape');

module.exports.run = function () {
  var douban = new Douban({
  });
  var id = 1220562;
  var isbn = '7543632608';

  test('should return book by id', function (t) {
    t.plan(1);
    douban.book.getById(id, function (err, res) {
      t.equal(parseInt(res.id, 10), id);
    });
  });

  test('shold return book by isbn', function (t) {
    t.plan(1);
    douban.book.getByIsbn(isbn, function (err, res) {
      t.equal(res.isbn10, isbn);
    });
  });
};
