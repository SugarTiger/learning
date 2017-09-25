var Nightmare = require('nightmare')
var nightmare = Nightmare({
    show: true
})
nightmare
    .goto('https://www.taobao.com')
    .type('#q', '电视机')
    .click('form[action*="/search"] [type=submit]')
    .wait('#spulist-grid')
    .evaluate(() => document.querySelector('#spulist-grid .grid-item .info-cont').textContent.trim()).end()
    .then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.error('Search failed: ',error)
    })