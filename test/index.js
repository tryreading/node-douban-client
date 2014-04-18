["book"].forEach(function (api) {
  var test = require('./' + api);
  test.run();
});
