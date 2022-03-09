const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = false;
const isDevelopment = !isProduction;

module.exports = {
  mode: 'development',
  devtool: isDevelopment && "cheap-module-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/js/[name].[contenthash:8].js",
    publicPath: "/"
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            envName: isProduction ? "production" : "development"
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
}