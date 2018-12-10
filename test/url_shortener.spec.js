// for unit testing
let cachedDataStr = require('../cache/cache/short.json');
let expect = require('chai').expect;

// retrieves last cached item
let shortUrl = cachedDataStr.data[cachedDataStr.data.length - 1];

describe('Url Shortener function', () => {
    it('should return a shortened URL', () => {
        expect(shortUrl).to.equal(`http://tinyurl.com/y9uceg82`);
    })
})