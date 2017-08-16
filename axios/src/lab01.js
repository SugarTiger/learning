import axios from 'axios'
// function getUserAccount(){
//     return axios.get('./text/lab01.txt')
// }

// function getUserPermissions(){
//     return axios.get('./text/lab02.txt')
// }

// axios.all([getUserAccount(),getUserPermissions()])
// .then(axios.spread((acct,perms)=>{
//     console.log(acct)
//     console.log(perms)
// }))

// axios(config)
// axios({
//     method:'get',
//     url:'./text/lab02.txt',
// }).then((response)=>{
//     console.log(response.data)
//     console.log(response.status)
//     console.log(response.statusText)
//     console.log(response.headers)
//     console.log(response.config)
// })

// axios.create（[config]）
// const instance = axios.create({
//     baseURL:'https://some-domain.com/api/',
//     timeout:1000,
//     headers: {'X-Custom-Header': 'foobar'}
// })

// CancelToken.source
const CancelToken = axios.CancelToken;
let source = CancelToken.source();
axios.get('./text/lab02.txt', {
    cancelToken: source.token
}).catch(thrown => {
    if (axios.isCancel(thrown)) {
        console.log('Requset canceled', thrown.message)
    } else {
        console.log('错误处理')
    }
});
source.cancel('搓作被用户取消')