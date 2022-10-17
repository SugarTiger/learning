const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");

const resolve = (src) => {
  return path.resolve(__dirname, src);
};

module.exports = {
  chainWebpack: (config) => {
    // SVG 处理
    config.module
      .rule("svg")
      .exclude.add(resolve("src/components/CgIcon"))
      .end();

    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/components/CgIcon"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();

    if (process.env.NODE_ENV !== "development") {
      config.plugin("compression-webpack-plugin").use(
        new CompressionPlugin({
          test: /\.js$|\.html$|\.css$/,
          threshold: 10240,
          deleteOriginalAssets: false,
        })
      );
    }
  },
};
