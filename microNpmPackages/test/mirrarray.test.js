var mirrarray = require('../mirrarray');
var expect = require('chai').expect;
describe('mirrarray',()=>{
    // it('应该报错',()=>{
    //     expect(mirrarray(['true',true])).to.throw(Error);
    // })
    it('应该得到一个对象',()=>{
        expect(mirrarray(['this', 'that', 'another','true',null,undefined])).to.be.an('object');
    })
    // it('应该报错',()=>{
    //     expect(mirrarray([{a:1}])).to.throw(Error);
    // })
    it("应该得到{this: 'this',that: 'that',another: 'another'}",()=>{
        expect(mirrarray([true,'this', 'that', 'another'])).to.eql({this: 'this',that: 'that',another: 'another',true:true});
    })
});