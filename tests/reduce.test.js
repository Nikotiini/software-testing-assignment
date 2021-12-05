import chai from 'chai';
import reduce from '../src/reduce.js';
const expect = chai.expect;

describe('Test reduce', () => {
    it('Simple reduction test', () => {
        expect(reduce([1,2], (sum, n) => sum + n, 0)).to.equal(3);
    });
    it('Should count the elements of the array', () => {
        expect(reduce([1,2,3,4,5,6], (count, n) => count + 1, 0)).to.equal(6);
    });
    it('Should return keys associated with the values', () => {
        expect(reduce({ 'a':1, 'b':2, 'c':1 }, (result, value, key) => {
            (result[value] || (result[value] = [])).push(key);
            return result;
        }, {})).to.deep.equal({ 1: ['a','c'], 2: ['b'] });
    });
    it('Should return a constant value', () => {
        expect(reduce([1,2,3,4], (accum, val) => 0)).to.equal(0);
    });
    it('Should return a copy of the original array', () => {
        expect(reduce([1,2,3,4], function(accum, val) {return accum.concat(val);}, [])).to.deep.equal([1,2,3,4]);
    });
});
