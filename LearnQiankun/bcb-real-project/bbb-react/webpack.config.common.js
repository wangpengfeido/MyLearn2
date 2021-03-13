const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.jsx",
  },
  output: {
    libraryTarget: "umd",
    library: "app",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.j?sx?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
