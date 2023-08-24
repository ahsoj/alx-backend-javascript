const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber()', function () {
  it(`checking if numbers rounded`, function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it(`checking if numbers rounded`, function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it(`checking if numbers rounded`, function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it(`checking if numbers rounded`, function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it(`checking if numbers rounded`, function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
