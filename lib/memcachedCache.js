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
      namespace : '',
      poolSize  : 35
    }
  }, config);

  /* Create a memcached connection
   * with the config passed
   */
  this.instance = new Memcached(
    this.config.host + ':' + this.config.port,
    this.config.opts
  );
};

/**
 * Set
 * @param String  key     Key to store item as
 * @param Any     value   Value to store
 * @param Integer expires How long until it expires?
 * @return Promise
 */
MemcachedCache.prototype.set = function(key, value, expires) {

};

/**
 * Get
 * @param  String key Key of item to retrieve
 * @return Promise
 */
MemcachedCache.prototype.get = function(key) {

};

/**
 * Delete
 * @param  String key Key of item to rdelete
 * @return Promise
 */
MemcachedCache.prototype.del = function(key) {

};

module.exports = MemcachedCache;