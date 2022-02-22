const { resolve } = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssPlugin = require('mini-css-extract-plugin')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: './js/index.js',
  mode: 'development',
  output: {
    filename: 'main.bundel.js',
    // path: resolve(__dirname, 'build')
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(png|jpeg|gif|mp3)$/i,
  //       loader: 'file-loader',
  //       options: {
  //         name: '[path][name].[ext]'
  //       }
  //     },
  //     {
  //       test: /\.css$/i,
  //       use: ['style-loader', 'css-loader']
  //     },
  //     {
  //       test: /\.s[ac]ss$/i,
  //       use: [MiniCssPlugin.loader, 'css-loader', 'sass-loader']
  //     }
  //   ]
  // },
  // plugins: [
  //   new MiniCssPlugin({
  //     filename: '[name].[contenthash].css'
  //   }),
  //   new HtmlPlugin({
  //     template: resolve(__dirname, 'index.html')
  //   }),
  //   new BundleAnalyzer()
  // ],
  // devServer: {
  //   port: 5000
  // }
}
