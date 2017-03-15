// Karma configuration
// Generated on Wed Feb 15 2017 23:34:01 GMT+0800 (CST)
const path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'test/**/*.spec.js'
    ],
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // add webpack as preprocessor
      'test/**/*.spec.js': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /\/node_modules\//,
            loader: 'babel',
            query: {
              'presets': ['react', 'es2015', 'stage-0']
            }
          }
        ]
      },
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
      resolve: {
        root: [
          path.resolve(__dirname, './app'),
          path.resolve('./test'),
        ],
      }
    },
    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i.e.
      noInfo: true,
      // and use stats to turn off verbose output
      stats: {
        // options i.e.
        chunks: false
      }
    },

    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // Karma reporter, that prints each executed spec to commandline (similar to mocha's spec reporter).
    reporters: ['spec'],
    port: 9876,
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
    ],
  })
}
