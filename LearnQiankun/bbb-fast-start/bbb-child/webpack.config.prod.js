const path = require("path");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const commonWebpackConfig = require("./webpack.config.common");

module.exports = merge(commonWebpackConfig, {
  mode: "production",
  devtool: false,
  entry: {
    app: ["./src/index.js"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[chunkhash:8].js",
    publicPath: "/",
  },
  devServer: {
    open: true,
  },
  plugins: [new CleanWebpackPlugin()],
});
