# CacheAllTheThings

**A Q-based Node.js library to cache things, all of them spefically in Redis or Memcached.**

![](http://s2.quickmeme.com/img/d0/d053e99d38c58ae66c7cd0e61f2944605e1a4453514b0d676c90fd8067d4706d.jpg)

[Follow me on Twitter](http://twitter.com/andrewhathaway)

## Usage

```Javascript
var CacheAllTheThings = require('cacheallthethings');

var cache = new CacheAllTheThings('redis', {
  host : '127.0.0.1',
  port : '6379',
  auth : null,
  opts : {
    namespace : 'cachebabycache'
  }
});

var cache = new CacheAllTheThings('memcached', {
  host : '127.0.0.1',
  port : '11211',
  opts : {
    namespace : 'cachebabycache'
  }
});
```

## API


### Get

* `key`: Which item to retreive

```Javascript
cache
  .get('andrew')
  .then(
    function(val) {
      console.log('Andrew is ' + val + ' on Twitter')
    },
    function(err) {
      console.log(err);
    }
  );
```

### Set

* `key`: What to set the item in the cache under
* `object`: What to cache
* `expires` (optional): How long until the item expires out of the cache, in milliseconds

```Javascript
cache
  .set('andrew', { username : 'andrewhathaway' })
  .then(
    function() {
      console.log('Andrew has been put in the cache');
    },
    function(err) {
      console.log(err);
    }
  );
```

### Delete

* `key`: Which item to delete

```Javascript
cache
  .del('andrew')
  .then(
    function() {
      console.log('Andrew has been deleted from the cache');
    },
    function(err) {
      console.log(err);
    }
  );
```

## Contributing

Fork, test, commit, open a pull request! The Vagrant box runs Redis & Memcached for testing connections etc.

## License

MIT License (MIT)

Copyright (c) 2014 Andrew Hathaway

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
