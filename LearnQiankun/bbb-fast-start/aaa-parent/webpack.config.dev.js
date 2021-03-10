const path = require("path");
const { merge } = require("webpack-merge");
const commonWebpackConfig = require("./webpack.config.common");

module.exports = merge(commonWebpackConfig, {
  mode: "development",
  devtool: "source-map",
  entry: {
    app: ["./src/index.js"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/",
  },
  devServer: {
    open: true,
  },
});
