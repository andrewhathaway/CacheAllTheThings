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

module.exports = RedisCache;

/**
 * Get
 * @param  String key String to get
 * @return Promise    Promise
 */
RedisCache.prototype.get = function(key) {

};

RedisCache.prototype.get = function(key, value) {

};