var assert = require('assert');
let vowels = require('../12_vowels')
describe('vowels', function() {
    it('Should return the vowels from a string', function() {
        assert.deepEqual(vowels("The quick brown fox"), ["e","u","i","o","o"]);
        assert.deepEqual(vowels("Hello World"), ["e","o","o"]);
    })
    it('Test vowels casing', function() {
        assert.deepEqual(vowels("cAse tEst"), ["A","e","E"])
    })
})