function heavyCompu(num, callback) {
    var count = 0,
        i, j;
    for (i = num; i > 0; i--) {
        for (j = num; j > 0; j--) {
            count++;
        }
    }
    callback(count);
}
heavyCompu(1,function(count){
    console.log(count)
})
console.log('hello');