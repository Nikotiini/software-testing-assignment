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
    it('Should return empty string', () => {
        expect(upperFirst('')).to.equal('');
    });
    it('Should ignore non-characters', () => {
        expect(upperFirst('12ab')).to.deep.equal('12ab');
    });
    it('Should ignore control characters', () => {
        expect(upperFirst('\nab')).to.deep.equal('\nab');
    });
});
