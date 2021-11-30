import chai from 'chai';
const expect = chai.expect;

import ceil from '../src/ceil.js'

describe('Test ceil', () => {
    it('Default precision, positive number', () => {
        expect(ceil(4.501)).to.equal(5);
    });
    it('Precision lower than amount of digits, positive', () => {
        expect(ceil(4.501, -1)).to.equal(10);
    });
    it('Precision lower than amount of digits, negative', () => {
        expect(ceil(-4.501, -1)).to.equal(0);
    });
    it('Round to one decimal', () => {
        expect(ceil(4.501, 1)).to.equal(4.6);
    });
    it('Default precision, negative number', () => {
        expect(ceil(-4.501)).to.equal(-4);
    });
    it('Not a number', () => {
        expect(ceil('four')).to.be.NaN;
    });
});
