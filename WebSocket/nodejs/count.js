(function(){
    let counter = 0;
    let echo = function (){
        if(counter === 10){
            return;
        }
        setTimeout(function(){
            counter++;
            echo();
            process.stdout.write('您已观看'+counter.toString() + "秒\n");
        },500);
    };

    echo();
})();
// websocketd --port=8080 node ./count.js