require("dotenv").config();

const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const isProduction = false;
const isDevelopment = !isProduction;

module.exports = {
  mode: "development",
  devtool: isDevelopment && "cheap-module-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/js/[name].[contenthash:8].js",
    publicPath: "/",
  },
  devServer: { port: 3000, historyApiFallback: true },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          { loader: "file-loader" },
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            envName: isProduction ? "production" : "development",
          },
        },
      },
    ],
  },
  resolve: { extensions: [".js", ".jsx"] },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new webpack.EnvironmentPlugin([
      "NODE_ENV",
      "CLIENT_ID",
      "CLIENT_SECRET",
      "SPOTIFY_CALLBACK_URI",
    ]),
  ],
};
