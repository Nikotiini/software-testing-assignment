import chai from 'chai';
import add from '../src/add.js';
const expect = chai.expect;

describe('Test Add', () => {
    it('Sum positive numbers', () => {
        expect(add(4,6)).to.equal(10);
    });
    it('Sum negative numbers', () => {
        expect(add(-5,-1)).to.equal(-6);
    });
    it('Sum positive with zero', () => {
        expect(add(0,1)).to.equal(1);
        expect(add(1,0)).to.equal(1);
    });
    it('Sum negative with zero', () => {
        expect(add(0,-1)).to.equal(-1);
        expect(add(-1,0)).to.equal(-1);
    });
    it('Undefined input', () => {
        expect(add(undefined,undefined)).to.equal(0);
    });
    it('Input as strings', () => {
        expect(add("5", "5")).to.equal(0);
    });
    it('Integer overflow', () => {
        expect(add(Number.MAX_VALUE, 1)).to.throw(Error);
    });
});