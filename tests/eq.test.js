import chai from 'chai';
const expect = chai.expect;

import eq from '../src/eq.js'

describe('Test eq', () => {
    it('Different objects with identical content', () => {
        const object = { 'a': 1 };
        const other = { 'a': 1 };
        expect(eq(object, other)).to.be.false;
    });
    it('Copy of same object', () => {
        const object = { 'a': 1 };
        expect(eq(object, object)).to.be.true;
    });
    it('Same numbers', () => {
        expect(eq(5,5)).to.be.true;
    });
    it('Different numbers', () => {
        expect(eq(5,-5)).to.be.false;
    });
    it('Different strings', () => {
        expect(eq("test","str")).to.be.false;
    });
    it('Same strings', () => {
        expect(eq("test","test")).to.be.true;
    });
    it('Same bool', () => {
        expect(eq(true,true)).to.be.true;
    });
    it('Different bool', () => {
        expect(eq(true,false)).to.be.false;
    });
    it('Integer and double', () => {
        expect(eq(5,5.0)).to.be.true;
    });
    it('Null and Undefined', () => {
        expect(eq(null,undefined)).to.be.true;
    });
    it('NaN and NaN', () => {
        expect(eq(NaN,NaN)).to.be.true;
    });
    it('String and number', () => {
        expect(eq('17',17)).to.be.false;
    });
});
