const expect = require('chai').expect;
describe('异步 beforeEach 示例', () => {
    var foo = false;
    beforeEach(done=>{
        setTimeout(()=>{
            foo = true;
            done();
        },50)
    });
    it('全局变量异步修改应该成功',()=>{
        expect(foo).to.be.ok;
    })
})