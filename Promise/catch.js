const promise = new Promise(function (resolve, reject) {
    resolve('ok');
    throw new Error('test');
});
promise
    .then(function (value) {
        console.log(value)
    })
    .catch(function (error) {
        console.log(error)
    });