var path = require('path');

const config = {
  entry: './src/resources/index.js',
  output: {
    path: path.resolve(__dirname, 'web/lib/js/dist'),
    filename: 'webpack.bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader", options : {
        presets : ["env","es2015","react"]
      }}
    ]
  },
};

module.exports = config;
