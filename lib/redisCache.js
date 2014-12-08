var _     = require('lodash');
var Q     = require('q');
var Redis = require('redback');

/**
 * RedisCache Constructor
 */
function RedisCache(config) {
  this.name = 'RedisCache';

  /* Setup the config by merging
   * with the defaults
   */
  this.config = _.merge({
    port : 6379,
    host : '127.0.0.1',
    opts : {
      namespace : ''
    }
  }, config);

  /* Create an redis connection
   * with the config passed
   */
  this.instance = new Redis.createClient(
    this.config.port,
    this.config.host,
    this.config.opts
  );

  /* Create a new Cache instance
   * with the namespace given
   */
  this.cache = this.instance.createCache(
    this.config.opts.namespace
  );
};

/**
 * Stet
 * @param {[type]} key     [description]
 * @param {[type]} value   [description]
 * @param {[type]} expires [description]
 */
RedisCache.prototype.set = function(key, value, expires) {
  var deferred = Q.defer();

  /* If we're passing an object, then
   * make it in to JSON. Otherwise it
   * won't go in Redis
   */
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }

  /* If we haven't been passed an expire amount, then
   * pass the callback as the function.
   */
  if (!expires) {
    this.cache.set(key, value, callback);
  } else {
    this.cache.set(key, value, expires, callback);
  }

  /* Callback
   */
  function callback(e) {
    if (!e) {
      deferred.resolve();
    } else {
      deferred.reject(e);
    }
  }

  return deferred.promise;
};

RedisCache.prototype.get = function(key) {
  var deferred = Q.defer();

  this.cache.get(key, function(err, value) {
    if (err) {
      deferred.reject(err);
    } else {

      try {
        value = JSON.parse(value);
      } catch (e) {
      } finally {
        deferred.resolve(value);
      }
    }
  });

  return deferred.promise;
};



module.exports = RedisCache;