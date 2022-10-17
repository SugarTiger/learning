var decamelize = require('../../String/decamelize');
var expect =require('chai').expect;
describe('decamelize',()=>{
    it('应该得到一个字符串',()=>{
        expect(decamelize('unicornRainbow')).to.be.a('string');
    });
    it('unicornRainbow => unicorn_rainbow',()=>{
        expect(decamelize('unicornRainbow')).to.equal('unicorn_rainbow');
    });
    it('unicornRainbow => unicorn_rainbow',()=>{
        expect(decamelize('unicornRainbow','_')).to.equal('unicorn-rainbow');
    });
})