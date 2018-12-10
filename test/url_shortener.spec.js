// for unit testing
let cachedDataStr = require('../cache/cache/short.json');
let expect = require('chai').expect;

// retrieves shortened URL from object
let shortUrl = cachedDataStr.data[0].storage[0];

let shortUrlLength = cachedDataStr.data[0].storage[0].length;
let longUrlLength = cachedDataStr.data[0].storage[1].length;

// if you place this URL into the program -  http://www.irwinlitvak.com this test passes,
// but there must only be one url in the cache.

describe('Url Shortener function', () => {
    it('should return a shortened URL', () => {
        // change the 'to.equal' parameter for testing what is cached
        expect(shortUrl).to.equal(`http://tinyurl.com/y9uceg82`);
    })
})

// comment out above test to try test below.

// Original Url -  https://www.salesforce.com/dreamforce/why-attend/
// Shortened Url - http://tinyurl.com/y74epgdc
describe("Url that was entered, it's length should be greater than shortened length", () => {
    it('should return a length smaller than that of the original URL', () => {
        expect(shortUrlLength < longUrlLength).to.equal(true);
    })
});