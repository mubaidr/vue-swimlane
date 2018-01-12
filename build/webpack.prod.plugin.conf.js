var webpack = require('webpack')
var path = require('path')
var version = require('./../package.json').version
var banner =
  '/**\n' +
  ' * vue-swimlane v' +
  version +
  '\n' +
  ' * https://github.com/mubaidr/vue-swimlane/\n' +
  ' * Released under the Apache License.\n' +
  ' */\n'
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var StatsPlugin = require('stats-webpack-plugin')

var utils = require('./utils')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')

var cssFileName = 'vue-swimlane.css'
var jsFileName = 'vue-swimlane.js'

if (process.env.MINIFY && process.env.MINIFY === 'false') {
  jsFileName = 'vue-swimlane-full.js'
}
var minifyPlugins = [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    sourceMap: true,
    comments: false,
    beautify: false
  })
]

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: true, extract: true })
  },
  entry: path.join(__dirname, '..', 'src/index.js'),
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: jsFileName,
    library: 'Vuetable',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.BannerPlugin({
      banner: banner,
      raw: true
    }),
    new ExtractTextPlugin({ filename: cssFileName, allChunks: true }),
    new StatsPlugin('stats.json')
  ],
  resolve: {
    aliasFields: ['browser']
  }
})

if (process.env.MINIFY && process.env.MINIFY === 'true') {
  webpackConfig.plugins = webpackConfig.plugins.concat(minifyPlugins)
}
module.exports = webpackConfig
