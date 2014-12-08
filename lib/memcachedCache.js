var _         = require('lodash');
var Q         = require('q');
var Memcached = require('memcached');

/*
 * MemcachedCache Constructor
 */
function MemcachedCache(config) {
  this.name = 'MemcachedCache';

  /* Setup the config by merging
   * with the defaults
   */
  this.config = _.merge({
    port : 11211,
    host : '127.0.0.1',
    auth : null,
    opts : {
      poolSize  : 35,
      namespace : ''
    }
  }, config);

  /* Create a memcached connection
   * with the config passed
   */
  this.instance = new Memcached(
    this.config.host + ':' + this.config.port,
    this.config.opts
  );

  this.cache = this.instance;
};

/**
 * Set
 * @param String  key     Key to store item as
 * @param Any     value   Value to store
 * @param Integer expires How long until it expires?
 * @return Promise
 */
MemcachedCache.prototype.set = function(key, value, expires) {
  var deferred = Q.defer();

  /* If the user hasn't passed an expires time,
   * then we set to the max it can be which
   * is 30 days from now.
   *
   * If they have, we take it from milliseconds to seconds
   */
  var expiry = (((60 * 60) * 24) * 30) / 1000;
  if (expires) {
    expiry = expires / 1000;
  }

  /* Set the value, under the key, with the
   * expiry we worked out above
   */
  this.cache.set(key, value, expiry, function(err) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(err);
    }
  });

  return deferred.promise;
};

/**
 * Get
 * @param  String key Key of item to retrieve
 * @return Promise
 */
MemcachedCache.prototype.get = function(key) {
 var deferred = Q.defer();

 this.cache.get(key, function(err, value) {
  if (err) {
    deferred.reject(err);
  } else {
    deferred.resolve(value);
  }
 });

 return deferred.promise;
};

/**
 * Delete
 * @param  String key Key of item to rdelete
 * @return Promise
 */
MemcachedCache.prototype.del = function(key) {
  var deferred = Q.defer();

  this.cache.del(key, function(err) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve();
    }
  });

  return deferred.promise;
};

module.exports = MemcachedCache;