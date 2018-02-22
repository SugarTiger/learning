const db = require('../db/db')
const md5 = require('md5')
class UserController{
    static async register(ctx){
        console.log('提交了')
        let postData = ctx.request.body;
        let userList = await db.findDataByUser(postData.username)
        if(!!userList.length){
            ctx.body = {
                status:'fail',
                msg:"此用户名已存在"
            }
            return;
        }
        let rows = await db.insertData({name:postData.username,pass:md5(postData.paw)})
        // let rows = await db.insertData([postData.username,md5(postData.paw)])
        if(rows.err){
            ctx.body = {
                status:'fail',
                msg:"注册失败",
                error:rows
            }
        }else{
            let data = await db.showDataUser()
            ctx.body = {
                status:'success',
                msg:"注册成功",
                data:data
            }
        }
    }
}

module.exports=UserController