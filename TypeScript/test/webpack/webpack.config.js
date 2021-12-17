//引入一个包
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//webpack中的所有配置都应该写在module.exports中
module.exports = {
  // development为开发者环境，production为生产环境变量 ，还有一个为none
  mode: "development",
  // 指定人口文件
  entry: "./src/index.ts",
  //指定打包文件的目录
  output: {
    //指定打包文件的目录
    path: path.resolve(__dirname, "dist"),
    //打包后的文件
    filename: "bundle.js"
  },
  //指定webpack打包时要使用模块
  module: {
    //指定加载的规则
    rules: [
      {
        //test指定的是规则生效的文件
        test: /\.ts$/,
        //要使用的loader
        use: "ts-loader",
        //要排除的文件
        exclude: /node-module/
      }
    ]
  },
  //配置webpack插件
  plugins: [new CleanWebpackPlugin(), new HTMLWebpackPlugin()],
  //用来设置引入模块
  resolve: {
    extensions: [".ts", ".js"]
  }
};
