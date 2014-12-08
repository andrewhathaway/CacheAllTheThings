var Assert            = require('assert');
var CacheAllTheThings = require('../');

describe('CacheAllTheThings', function() {

  /*
   * Generic Tests
   */
  it('When asked to boot a Redis instance, it should do so', function() {
    var inst = new CacheAllTheThings('redis');
    Assert(inst.name, 'RedisCache');
  });

  it('When asked to boot a Memcached instance, it should do so', function() {
    var inst = new CacheAllTheThings('memcached');
    Assert(inst.name, 'MemcachedCache');
  });

  /*
   * Redis Tests
   */
  describe('Redis', function() {

    it('Should set a key', function(done) {
      var redisInst = new CacheAllTheThings('redis');

      redisInst
        .set('lol', 'hai')
        .then(function(e) {
          Assert.equal(e, null);
          done();
        });
    });

    it('Should get a key that exists', function(done) {
      var redisInst = new CacheAllTheThings('redis');

      redisInst
        .get('lol')
        .then(function(val) {
          Assert(val, 'hai');
          done();
        }, function(e) {
          Assert.notEqual(e, null);
          done();
        });
    });

    it('Should get a key that does not exist', function(done) {
      var redisInst = new CacheAllTheThings('redis');

      redisInst
        .get('lols')
        .then(function(val) {
          Assert(true);
          done();
        }, function(e) {
          Assert.notEqual(e, null);
          done();
        });
    });

    it('Should set an object, and get back an object', function(done) {
      var redisInst = new CacheAllTheThings('redis');

      redisInst
        .set('obj', {
          testing : true
        })
        .then(function() {

          redisInst
            .get('obj')
            .then(function(val) {
              Assert(val, {
                testing : true
              });
              done();
            }, function(e) {
              done();
            });

        });
    });

    it('Should be able to delete a key', function(done) {
      var redisInst = new CacheAllTheThings('redis');

      redisInst
        .del('lol')
        .then(function() {

          redisInst
            .get('lol')
            .then(function(val) {
              Assert.equal(val, null);
              done();
            });

        });
    });

  });

  /*
   * Memcached Tests
   */
  describe('Memcached', function() {

    it('Should set a key', function(done) {
      var redisInst = new CacheAllTheThings('memcached');

      redisInst
        .set('lol', 'hai')
        .then(function(e) {
          Assert.equal(e, null);
          done();
        });
    });

    it('Should get a key that exists', function(done) {
      var redisInst = new CacheAllTheThings('memcached');

      redisInst
        .get('lol')
        .then(function(val) {
          Assert(val, 'hai');
          done();
        }, function(e) {
          Assert.notEqual(e, null);
          done();
        });
    });

    it('Should get a key that does not exist', function(done) {
      var redisInst = new CacheAllTheThings('memcached');

      redisInst
        .get('lols')
        .then(function(val) {
          Assert(true);
          done();
        }, function(e) {
          Assert.notEqual(e, null);
          done();
        });
    });

    it('Should set an object, and get back an object', function(done) {
      var redisInst = new CacheAllTheThings('memcached');

      redisInst
        .set('obj', {
          testing : true
        })
        .then(function() {

          redisInst
            .get('obj')
            .then(function(val) {
              Assert(val, {
                testing : true
              });
              done();
            }, function(e) {
              done();
            });

        });
    });

    it('Should be able to delete a key', function(done) {
      var redisInst = new CacheAllTheThings('memcached');

      redisInst
        .del('lol')
        .then(function() {

          redisInst
            .get('lol')
            .then(function(val) {
              Assert.equal(val, null);
              done();
            });

        });
    });

  });

});