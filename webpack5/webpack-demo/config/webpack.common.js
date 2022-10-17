const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack")

module.exports = {
  // 入口
  entry: {
    index: "./src/index.js",
  },
  plugins: [
    // 生成html，自动引入所有bundle
    new HtmlWebpackPlugin({
      title: "release_v0",
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
  resolve: {
    fallback: {
      // process: require.resolve('process/browser'),
      stream: require.resolve('stream-browserify'),
      Buffer: require.resolve('buffer'),
      buffer: require.resolve('buffer'),
    }
  }
};
