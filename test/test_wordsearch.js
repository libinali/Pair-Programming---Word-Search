const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'G', 'O', 'L', 'D', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'GOLD')

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'F', 'R', 'I', 'E', 'N', 'D', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRIENDS')

    assert.isTrue(result);
  });

  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'F', 'R', 'I', 'E', 'N', 'D', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'CIAO')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'J', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'U', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'S', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'T', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'I', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'N', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'F', 'R', 'I', 'E', 'N', 'D', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'JUSTIN')

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'J', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'U', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'S', 'J', 'T', 'E', 'V', 'R', 'I'],
      ['W', 'T', 'C', 'S', 'Y', 'E', 'R', 'B'],
      ['B', 'I', 'R', 'E', 'N', 'E', 'Y', 'I'],
      ['U', 'N', 'T', 'W', 'A', 'P', 'A', 'N'],
      ['O', 'F', 'R', 'I', 'E', 'N', 'D', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'LIBIN')

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'J', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'U', 'C', 'W', 'Q', 'U', 'A', 'L'],
      ['H', 'S', 'J', 'I', 'E', 'V', 'R', 'I'],
      ['W', 'T', 'C', 'N', 'Y', 'E', 'R', 'B'],
      ['B', 'I', 'R', 'T', 'N', 'E', 'Y', 'I'],
      ['U', 'N', 'T', 'E', 'A', 'P', 'A', 'N'],
      ['O', 'F', 'R', 'R', 'E', 'N', 'D', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'WINTER')

    assert.isTrue(result);
  });

  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'F', 'R', 'I', 'E', 'N', 'D', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'CODING')

    assert.isFalse(result);
  });

  it("should return null if the array is not present", function() {
    const result = wordSearch([]
    , '')
    assert.isNull(result);
  });
});
