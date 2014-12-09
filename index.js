
/**
 * Cache All The Things
 */
module.exports = function(service, config) {
  if (service == 'redis') {
    var RedisCache = require('./lib/redisCache');
    return new RedisCache(config);
  }

  if (service == 'memcached') {
    var MemcachedCache = require('./lib/memcachedCache');
    return new MemcachedCache(config);
  }

  throw new Error('Service does not exist in CacheAllTheThings');
};