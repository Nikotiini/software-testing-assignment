import chai from 'chai';
import reduce from '../src/reduce.js';
const expect = chai.expect;

describe('Test reduce', () => {
    it('Simple reduction test', () => {
        expect(reduce([1,2], (sum, n) => sum + n, 0)).to.equal(3);
    });
});
