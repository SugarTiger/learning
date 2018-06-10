const getURL = function(url){
    return new Promise((resolve,reject)=>{
        var req = new XMLHttpRequest();
        req.open('GET',url,true);
        req.onload = function(){
            if(req.status===200){
                resolve(req.responseText)
            }else{
                reject(new Error(req.statusText))
            }
        }
        req.onerror = function(){
            reject(new Error(req.statusText))
        }
        req.send();
    })
}
getURL('http://httpbin.org/get').then(data=>{
    console.log(data)
},err=>{
    console.error(err);
})