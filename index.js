var RedisCache     = require('./lib/redisCache');
var MemcachedCache = require('./lib/memcachedCache');

/**
 * Cache All The Things
 */
module.exports = function(service, config) {
  if (service == 'redis') {
    return new RedisCache(config);
  }

  if (service == 'memcached') {
    return new MemcachedCache(config);
  }

  throw new Error('Service does not exist in CacheAllTheThings');
};