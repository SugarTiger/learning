var SwapArray  = require('../swap-array');
var expect = require('chai').expect;

var SomeArray = ['thats','cool','dude'];
describe('swap-array',()=>{
    it("应该得到一个数组",()=>{
        expect(SwapArray(SomeArray, 0, 2)).to.be.an('array');
    });
    it("应该得到 ['dude','thats','cool']",()=>{
        expect(SwapArray(SomeArray, 0, 2)).to.have.deep.equal(['dude','cool','thats']);
    });
});