const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    // 输出路径
    path: path.resolve(__dirname, 'dist'),
    // 文件名
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      // 这里一定要注意 style-loader 与 css-loader 的顺序
      use: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)/i,
      type: 'asset/resource'
    }
    ]
  },
  devServer: {
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
