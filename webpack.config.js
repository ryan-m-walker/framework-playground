const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
  entry: {
    uni: './src/index.js',
    test: './scripts/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.ts', '.css', '.scss']
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: 'ts-loader'
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new ExtractTextPlugin("uni.css"),
  ]
};