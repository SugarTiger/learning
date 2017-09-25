var Nightmare = require('nightmare');
var expect = require('chai').expect;
var fork = require('child_process').fork;

describe('测试 index.html', function () {
    var child;

    before(function (done) {
        child = fork('./server.js');
        child.on('message', function (msg) {
            if (msg === 'listening') {
                done();
            }
        });
    });

    after(function () {
        child.kill();
    });

    it('点击后标题改变', function (done) {
        var nightmare = Nightmare({
            show: true
        });
        nightmare
            .goto('http://localhost:8080//index.html')
            .click('h1')
            .wait(1000)
            .evaluate(function () {
                return document.querySelector('h1').textContent;
            })
            .end()
            .then(function (text) {
                expect(text).to.equal('Hello Clicked');
                done();
            })
            .catch((err) => {
                console.log('测试失败', err)
            })
    });

});