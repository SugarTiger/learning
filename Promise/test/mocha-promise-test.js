const assert = require('assert');
describe('Promise Test',()=>{
    it('should return a promise object',()=>{
        return Promise.resolve(1).then(value=>assert(value===1))
    })
})