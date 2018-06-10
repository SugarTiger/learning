const getAjax = function(url){
    console.log('getAjax');
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({url})
        }, 2000);
    });
}
getAjax('1111').then(data=>{
    console.log('then');
    return getAjax(JSON.stringify(data));
}).then(data=>{
    console.log(data)
})