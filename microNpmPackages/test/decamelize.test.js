var {decamelize,decamelizeAtCode} = require('../String/decamelize');
var expect =require('chai').expect;
describe('decamelize',()=>{
    it('应该得到一个字符串',()=>{
        expect(decamelize('unicornRainbowRow')).to.be.a('string');
        expect(decamelizeAtCode('unicornRainbowRow')).to.be.a('string');
    });
    it('unicornRainbowRow => unicorn_rainbow_row',()=>{
        expect(decamelize('unicornRainbowRow')).to.equal('unicorn_rainbow_row');
        expect(decamelizeAtCode('unicornRainbowRow')).to.equal('unicorn_rainbow_row');
    });
    it('unicornRainbowRow => unicorn-rainbow-row',()=>{
        expect(decamelize('unicornRainbowRow','-')).to.equal('unicorn-rainbow-row');
        expect(decamelizeAtCode('unicornRainbowRow','-')).to.equal('unicorn-rainbow-row');
    });
})