const pathLib = require("path");
module.exports = {
  entry: pathLib.resolve(__dirname, "../src/main.js"),
  mode: "development",
  output: {
    filename: "bundle.js"
  },
  devtool: "source-map"
};
