var arrayChunk = require('../array-chunk');
var expect = require('chai').expect;
describe('array-chunk',()=>{
    it('应该返回一个数组',()=>{
        expect(arrayChunk([1, 2, 3, 4, 5], 4)).to.be.an('array');
    })
    it('[[1, 2], [3, 4], [5]]',()=>{
        expect(arrayChunk([1, 2, 3, 4, 5], 2)).to.be.eql([[1, 2], [3, 4], [5]]);
    })
})