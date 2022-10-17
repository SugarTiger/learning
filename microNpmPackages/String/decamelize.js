function decamelize(souStr,separator='_'){ //超长字符串性能更佳
    return souStr.replace(/([A-Z]{1})/g,separator+'$1').toLowerCase();
}
function decamelizeAtCode(souStr,separator='_'){
    let len = souStr.length,tmp='';
    for(let i=0;i<len;i++){
        let code = souStr.charCodeAt(i),item = souStr[i];
        if(code<85&&code>64){
            item = separator+souStr[i]
        }
        tmp += item
    }
    return tmp.toLowerCase();
}
function decamelizeFromGitHub(text, separator='_'){
    if(typeof text!=='string'){
        throw new Error('Expected a string');
    }
    const regex1 = /([\\p{Ll}\\d])(\\p{Lu})/g;
    const regex2 = /(\\p{Lu}+)(\\p{Lu}[\\p{Ll}\\d]+)/g;
    return text.replace(regex1,`$1${separator}$2`).replace(regex2,`$1${separator}$2`).toLowerCase();
}
module.exports = {decamelize,decamelizeAtCode};