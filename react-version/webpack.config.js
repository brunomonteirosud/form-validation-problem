"use strict";

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, '/dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};