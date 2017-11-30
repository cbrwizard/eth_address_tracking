const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const Dotenv = require('dotenv-webpack')
const webpack = require('webpack')
const WriteFilePlugin = require('write-file-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const { outputConfig, moduleConfig, resolveConfig } = require('./config/webpack_shared')
const isProduction = require('./shared/lib/isProduction')

const dotEnvFilePath = isProduction ? './config/.env' : './config/.env.development'
const performanceHints = isProduction ? 'warning' : false

const plugins = [
  new FaviconsWebpackPlugin({
    logo: 'media/logo_256.png',
    prefix: 'icons/',
    title: 'ShouldIBuyBitcoin.today',
  }),
  new HtmlWebpackPlugin({
    cache: false,
    template: 'client/templates/index.ejs',
    title: 'ShouldIBuyBitcoin.today',
  }),
  new Dotenv({
    path: dotEnvFilePath,
  }),
  new ExtractTextPlugin('app_[contenthash].css'),
  new CleanWebpackPlugin('dist/*.*'),
  new webpack.ProvidePlugin({
    IntlMessageFormat: ['intl-messageformat', 'default'],
  }),
]

if (!isProduction) {
  plugins.push(new WriteFilePlugin())
}

/*
* TODO: Somehow properly enable hot module replacement.
*/
module.exports = {
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    stats: {
      // Add asset Information
      assets: true,
      // Add information about cached (not built) modules
      cached: false,
      // Add children information
      children: false,
      // Add built modules information to chunk information
      chunkModules: false,
      // Add the origins of chunks and chunk merging info
      chunkOrigins: false,
      // Add chunk information (setting this to `false` allows for a less verbose output)
      chunks: false,
      // Add details to errors (like resolving log)
      errorDetails: false,
      // Add errors
      errors: true,
      // Add the hash of the compilation
      hash: false,
      // Add built modules information
      modules: false,
      // Add public path information
      publicPath: false,
      // Add information about the reasons why modules are included
      reasons: false,
      // Add the source code of modules
      source: false,
      // Add timing information
      timings: true,
      // Add webpack version information
      version: false,
      // Add warnings
      warnings: true,
    },
  },
  devtool: 'cheap-module-source-map',
  entry: {
    app: './client/index',
  },
  module: moduleConfig,
  output: outputConfig,
  performance: {
    hints: performanceHints,
  },
  plugins,
  resolve: resolveConfig,
  target: 'web',
}
