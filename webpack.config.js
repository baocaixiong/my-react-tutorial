var webpack = require('webpack')
var path = require('path')
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var HtmlwebpackPlugin = require('html-webpack-plugin')

var ROOT_PATH = path.resolve(__dirname)
var BUILD_PATH = path.resolve(ROOT_PATH, 'build')
var SOURCES_PATH = path.resolve(ROOT_PATH, 'sources')

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl']
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.styl$/, exclude: /node_modules/, loaders: ['style', 'css', 'stylus'], include: SOURCES_PATH },
      { test: /\.(woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&minetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'baocaixiong',
      template: 'index.html'
    }),
    new CommonsChunkPlugin('init.js')
  // new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  }
}
