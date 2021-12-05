import chai from 'chai';
import isEmpty from '../src/isEmpty.js';
const expect = chai.expect;

describe('Test isEmpty', () => {
    it('Test for null', () => {
        expect(isEmpty(null)).to.equal(true);
    });
    it('Test for boolean', () => {
        expect(isEmpty(true)).to.equal(true);
    });
    it('Test for character', () => {
        expect(isEmpty('a')).to.equal(false);
    });
    it('Test for empty string', () => {
        expect(isEmpty('')).to.equal(true);
    });
    it('Test for int', () => {
        expect(isEmpty(3)).to.equal(true);
    });
    it('Test for array', () => {
        expect(isEmpty(['a','b','c'])).to.equal(false);
    });
    it('Test for object', () => {
        expect(isEmpty({ 'field':'value' })).to.equal(false);
    });
    it('Test for map', () => {
        expect(isEmpty(new Map())).to.equal(true);
    });
    it('Test for set', () => {
        expect(isEmpty(new Set())).to.equal(true);
    });
});