import chai from 'chai';
const expect = chai.expect;

import defaultToAny from '../src/defaultToAny.js';

describe('Test defaultToAny', () => {
    it('Value is defined', () => {
        expect(defaultToAny(1, null, NaN)).to.equal(1);
    });
    it('Value and default value defined', () => {
        expect(defaultToAny(1, 5)).to.equal(1);
    });
    it('Default value is number', () => {
        expect(defaultToAny(undefined, 1, NaN)).to.equal(1);
    });
    it('Default value is NaN', () => {
        expect(defaultToAny(undefined, NaN)).to.be.NaN;
    });
    it('NaN before valid default value', () => {
        expect(defaultToAny(undefined, NaN, 5)).to.equal(5);
    });
    it('No default values', () => {
        expect(defaultToAny(undefined)).to.be.undefined;
    });
    it('Multiple valid default values', () => {
        expect(defaultToAny(undefined, 5, 10)).to.equal(5);
    });   
});
