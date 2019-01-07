const baseConfig = require('./webpack.config.base');

baseConfig.entry = {
  client: './entry-client.js',
};

baseConfig.module.rules.push(
  {test: /\.css$/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}]}
);

module.exports = baseConfig;


