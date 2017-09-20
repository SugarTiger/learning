var myWorker = new Worker("lab01-1.js");
myWorker.onmessage = function(e){
    console.log(e.data)
}