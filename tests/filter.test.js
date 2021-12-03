import chai from 'chai';
import filter from '../src/filter.js';
const expect = chai.expect;

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false }
];

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
});