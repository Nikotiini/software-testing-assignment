import chai from 'chai';
const expect = chai.expect;

import endsWith from '../src/endsWith.js'

describe('Test endsWith', () => {
    it('Check full string', () => {
        expect(endsWith('abc', 'c')).to.be.true;
    });
    it('Check partial string', () => {
        expect(endsWith('abc', 'b', 2)).to.be.true;
    });
    it('Check beginning', () => {
        expect(endsWith('abc', '', 0)).to.be.true;
    });
    it('Check nonexisting char', () => {
        expect(endsWith('abc', 'f')).to.be.false;
    });
    it('Position further than the end of string', () => {
        expect(endsWith('abc', 'c', 5)).to.be.true;
    });
    it('Empty string', () => {
        expect(endsWith('', '')).to.be.true;
    });
    it('Negative position', () => {
        expect(endsWith('abc', '', -1)).to.be.true;
    });
    it('Match entire string', () => {
        expect(endsWith('abc', 'abc')).to.be.true;
        expect(endsWith('abc', 'ab')).to.be.false;
    });
});
