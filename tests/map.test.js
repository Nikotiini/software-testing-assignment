import chai from 'chai';
import map from '../src/map.js';
const expect = chai.expect;

const square = n => n * n;

describe('Test map', () => {
    it('Simple mapping example', () => {
        expect(map([4,8], square)).to.equal([16,64]);
    });
});