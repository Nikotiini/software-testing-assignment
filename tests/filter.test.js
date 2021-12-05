import chai from 'chai';
import filter from '../src/filter.js';
const expect = chai.expect;

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false }
];

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

describe('Test filter', () => {
    it('Simple filtering example', () => {
        expect(filter(users, ({ active }) => active)).to.deep.equal([users[0]]);
    });
    it('Should return empty array', () => {
        expect(filter(users, ({ user }) => user === 'chris')).to.equal([]);
    });
    it('Should return all the original elements', () => {
        expect(filter(users, (input) => true)).to.deep.equal(users);
    })
    it('Should match multiple elements', () => {
        expect(filter(numbers, n => n < 10)).to.deep.equal([1,2,3,4,5,6,7,8,9]);
    });
    it('Should match every other element', () => {
        expect(filter(numbers, n => n % 2 === 1)).to.deep.equal([1,3,5,7,9,11,13,15,17,19]);
        expect(filter(numbers, n => n % 2 === 0)).to.deep.equal([2,4,6,8,10,12,14,16,18,20]);
    });
});