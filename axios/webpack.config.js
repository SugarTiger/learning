var webpack = require('webpack')
module.exports = {
    entry:{
        lab01:'./src/lab01.js'
    },
    output:{
        filename:'[name].js',
        path:__dirname + '/build'
    },
    module:{
        rules:[
            {test:/\.js$/,exclude:/node_modules/,loader:"babel-loader"}
        ]
    }
}