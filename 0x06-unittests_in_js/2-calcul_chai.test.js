const expect = require('chai').expect;
const { it, describe } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber()', () => {
  describe('SUM', () => {
    it(`checking if numbers rounded`, () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', () => {
    it(`checking if numbers rounded`, () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE', () => {
    it(`checking if numbers rounded`, () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it(`checking if numbers rounded`, () => {
      expect(calculateNumber('DIVIDE', 1.5, 0)).to.equal('Error');
    });
  });
});
