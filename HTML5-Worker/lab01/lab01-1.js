var i = 0;
function timedCount(){
    i = i+1;
    if(i===5){
        postMessage(i);
        console.log(self)
        console.log(location)
        return;
    }
    var time = setTimeout(timedCount,1000);
}
timedCount();