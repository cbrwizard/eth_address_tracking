const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const moduleConfig = {
  rules: [
    {
      exclude: /node_modules/,
      test: /\.(js|jsx)$/,
      use: [
        'babel-loader',
      ],
    },
    {
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            query: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      }),
      test: /\.css$/,
    },
    {
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: '[name]_[hash].[ext]',
      },
      test: /\.(png|woff|woff2|eot|ttf|svg|gif)?$/,
    },
    { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
    { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
    { test: /p2\.js/, use: ['expose-loader?p2'] },
  ],
}

const resolveConfig = {
  extensions: ['.js', '.css', '.jsx'],
  modules: [
    path.resolve('.'),
    'node_modules',
  ],
}

const outputConfig = {
  filename: '[name]_[hash].js',
  path: path.resolve(__dirname, './../dist'),
}

module.exports = {
  moduleConfig,
  outputConfig,
  resolveConfig,
}
