var htmlWebpaclPlugin = require('html-webpack-plugin');

module.exports = {
    entry : {
        main: './src/js/main.js',
        calc: './src/js/calc.js'
    },
    output: {
        //__dirname，就是当前webpack.config.js文件所在的绝对路径
        path:__dirname + '/dist',
        filename: 'js/[name]-[hash].bundle.js'
    },
    plugins: [new htmlWebpaclPlugin({
        template: './index.html'
    })]
}