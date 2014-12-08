var RedisCache     = require('./lib/redisCache');
var MemcachedCache = require('./lib/memcachedCache');

/**
 * Cache All The Things
 * @todo: Custom cache handlers
 */
module.exports = function(service, config) {
  if (service == 'redis') {
    return new RedisCache(config);
  }

  if (service == 'memcached') {
    return new MemcachedCache(config);
  }

  return {};
};