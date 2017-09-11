const ExtractTextPlugin = require('extract-text-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main:'./src/main.js'
    },
    output: {
        path: __dirname+'/dist',
        filename:'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css'),
        new ExtractTextPlugin('css/[name].css'),
        new htmlWebpackPlugin({
            template:'./index.html',
            title:'首页',
            filename: 'index.html'
        })
    ]
}