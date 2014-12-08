var Assert            = require('assert');
var CacheAllTheThings = require('../');

describe('CacheAllTheThings', function() {

  it('When asked to boot a Redis instance, it should do so', function() {
    var inst = new CacheAllTheThings('redis');
    Assert(inst.name, 'RedisCache');
  });

});