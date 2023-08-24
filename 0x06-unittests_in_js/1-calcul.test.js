const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber()', function () {
  it(`checking if numbers rounded`, function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it(`checking if numbers rounded`, function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it(`checking if numbers rounded`, function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it(`checking if numbers rounded`, function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0), 'Error');
  });
});
