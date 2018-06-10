var arrayDiffer  = require('../arr-diff');
var expect = require('chai').expect;

describe('arr-diff',()=>{
    it("应该得到一个数组",()=>{
        expect(arrayDiffer([2, 3, 4], [3, 50],[3, 50])).to.be.an('array');
    });
    it("应该得到 [2,3]",()=>{
        expect(arrayDiffer([2, 3, 4], [3, 50],[3, 50])).to.have.deep.equal([2,4]);
    });
});
