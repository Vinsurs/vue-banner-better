const pathLib = require("path");
module.exports = {
  entry: pathLib.resolve(__dirname, "../src/index.js"),
  mode: "production",
  output: {
    path: pathLib.resolve(__dirname, "../dist"),
    filename: "Swiper.js",
    libraryTarget: "umd"
  },
  externals: {
    vue: "vue"
  },
  devtool: "source-map"
};
