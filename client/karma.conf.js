const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const {
  outputConfig,
  moduleConfig,
  resolveConfig,
} = require('./../config/webpack_shared')

module.exports = (config) => {
  config.set({
    autoWatch: true,
    basePath: '',
    browsers: ['ChromeHeadless'],
    client: {
      jasmine: {
        random: true,
        seed: '4321',
        stopOnFailure: true,
      },
    },
    colors: true,
    concurrency: Infinity,
    customLaunchers: {
      // ChromeWithoutSecurity: {
      //   base: 'Chrome',
      //   flags: ['--disable-web-security'],
      // },
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--no-sandbox',
          // See https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
          '--headless',
          '--disable-gpu',
          // Without a remote debugging port, Google Chrome exits immediately.
          ' --remote-debugging-port=9222',
          '--disable-web-security',
        ],
      },
    },
    exclude: [],
    files: [
      'test/**/*.js',
    ],
    frameworks: ['jasmine'],
    logLevel: config.LOG_INFO,
    plugins: [
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-jasmine',
    ],
    port: 9876,
    preprocessors: {
      'test/**/*.js': ['webpack'],
    },
    reporters: ['progress'],
    singleRun: false,
    webpack: {
      devtool: 'cheap-module-source-map',
      entry: {
        app: 'client/index',
      },
      module: moduleConfig,
      output: outputConfig,
      performance: {
        hints: false,
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            API_BASE: JSON.stringify('http://localhost:3000'),
            NODE_ENV: JSON.stringify('test'),
          },
        }),
        new ExtractTextPlugin('app.css'),
      ],
      resolve: resolveConfig,
      target: 'web',
    },
    webpackMiddleware: {
      stats: 'errors-only',
    },
  })
}
