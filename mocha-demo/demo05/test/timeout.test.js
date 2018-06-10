const expect = require('chai').expect;
describe('加法函数的测试', () => {
    it('测试应该5000毫秒后结束',function(done){
        var x = true;
        var f = function(){
            x = false;
            expect(x).to.be.not.ok;
            done();
        };
        setTimeout(f,4000);
    })
})