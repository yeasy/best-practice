var path = require('path');

const webpack = require('webpack');

module.exports = {
  entry: {
        app: path.resolve(__dirname, 'src/js/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css"},
      { test: /\.js$/, exclude: /node_modules/, loader: "babel" },
      { test: /\.jsx?$/, loader: "babel" },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  /*
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ]
  */
};
