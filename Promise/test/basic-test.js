var assert = require('assert')
describe('Basic Test',()=>{
    context('When Callback(high-order function)',()=>{
        it('should use `done` for test',(done)=>{
            setTimeout(() => {
                assert(true);
                done();
            }, 0);
        })
    });
    context('When promise object',()=>{
        it('should use `done` for test',(done)=>{
            const promise = Promise.resolve(1);
            promise.then((value)=>{
                assert(value === 1)
            }).then(done,done)
        })
    });

})