const baseConfig = require('./webpack.config.base');

baseConfig.entry = {
  server: './entry-server.js',
};

baseConfig.module.rules.push(
  {test: /\.css$/, use: [{loader: 'css-loader'}]}
);

module.exports = baseConfig;
