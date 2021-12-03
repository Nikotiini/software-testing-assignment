import chai from 'chai';
import upperFirst from '../src/upperFirst.js';
const expect = chai.expect;

describe('Test upperFirst', () => {
    it('Simple capitalisation test', () => {
        expect(upperFirst('fred')).to.equal('Fred');
    });
    it('Should not do anything to already capitalized string', () => {
        expect(upperFirst('FRED')).to.equal('FRED');
    });
});
