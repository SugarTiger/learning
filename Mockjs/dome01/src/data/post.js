import Mock from 'mockjs'
Mock.mock('http://test.com','post',function (options){
    console.log(options)
    return Mock.mock({
        "user|1-6":[{
            'name':'@cname',
            'id|+1':0
        }]
    })
})