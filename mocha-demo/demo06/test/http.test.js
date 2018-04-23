const expect = require('chai').expect;
const axios = require('axios');
describe('http请求测试', () => {
    it('http请求应该返回一个对象', function (done) {
        axios.get('https://api.github.com').then(res => {
            expect(res).to.be.an('object');
            done();
        });
    })
    it('http请求应该返回一个对象 async', (done) => {
        (async function () {
            let res = await axios.get('https://api.github.com');
            expect(res).to.be.an('object');
            done();
        })();
    })
    it('异步请求应该返回一个对象', () => {
        return axios.get('https://api.github.com').then(res => {
            expect(res).to.be.an('object');
        });
    })
})