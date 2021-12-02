import chai from 'chai';
import isEmpty from '../src/isEmpty.js';
const expect = chai.expect;

describe('Test isEmpty', () => {
    it('Test for null', () => {
        expect(isEmpty(null)).to.equal(true);
    });
});