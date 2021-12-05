import chai from 'chai';
import map from '../src/map.js';
const expect = chai.expect;

const square = n => n * n;

describe('Test map', () => {
    it('Simple mapping example', () => {
        expect(map([4,8], square)).to.deep.equal([16,64]);
    });
    it('Map over empty array', () => {
        expect(map([], square)).to.deep.equal([]);
    });
    it('Should return a copy of the original array', () => {
        expect(map([1,2,3,4,5], elem => elem)).to.deep.equal([1,2,3,4,5]);
    });
    it('Should return a 2D array', () => {
        expect(map([1,2,3], elem => [elem, elem+1])).to.deep.equal([[1,2], [2,3], [3,4]]);
    });
});
