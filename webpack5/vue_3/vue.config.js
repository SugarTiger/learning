const webpack = require("webpack");
module.exports = {
  chainWebpack: (config) => {
    config.plugin("provide").use(webpack.ProvidePlugin, [
      {
        jQuery: "jquery/dist/jquery.js",
      },
    ]);
  },
};
