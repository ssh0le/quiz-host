const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    open: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    static: {
      directory: path.join(__dirname, '../public'),
    },
    compress: true,
    allowedHosts: 'all',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('AADASD'),
    }),
  ],
};
