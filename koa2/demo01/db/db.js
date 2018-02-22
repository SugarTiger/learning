const mysql = require('mysql');
const config = require('./default');
const pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
});

function query(sql, values) {
    return new Promise((resolve, reject) => {
        try {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                } else {
                    connection.query(sql, values, (err, rows) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
                        connection.release()
                    })
                }

            })
        } catch (err) {
            reject(err)
        }
    })
}

// 建表
user =
    `create table if not exists users(
 id INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(100) NOT NULL,
 pass VARCHAR(40) NOT NULL,
 PRIMARY KEY ( id )
);`

let createTable = function (sql) {
    return query(sql, [])
}
createTable(user)

let insertData = function (value) {
    // let _sql = `insert into users(name,pass) values(?,?);`;
    let _sql = `insert into users set ?;`;
    return query(_sql, value);
}

// 通过文章的名字查找用户
let findDataByUser = function (  name ) {
    let _sql = `
      SELECT * from users
        where name="${name}"
        `
    return query( _sql)
}
// 显示所有用户
let showDataUser = function(){
    let _sql = `select name from users`;
    return query(_sql)
}
console.log('mysql js')
module.exports = {
    query,
    createTable,
    insertData,
    findDataByUser,
    showDataUser
}