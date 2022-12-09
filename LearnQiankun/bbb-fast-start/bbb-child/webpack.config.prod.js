const path = require("path");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const commonWebpackConfig = require("./webpack.config.common");

module.exports = merge(commonWebpackConfig, {
  mode: "production",
  devtool: false,
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[chunkhash:8].js",
    publicPath: "/",
  },
  plugins: [new CleanWebpackPlugin()],
});
