const path = require('path')
const webpack = require('webpack')

// dll文件存放的目录
const dllPath = 'public/vendor'


module.exports = {
  mode: 'development',
  // 需要提取的库文件
  entry: {
    vue: ["vue", "vue-router", 'axios'],
    antd: ["ant-design-vue"],
  },
  output: {
    path: path.join(__dirname, dllPath),
    filename: '[name].dll.js',
    // vendor.dll.js中暴露出的全局变量名
    // 保持与 webpack.DllPlugin 中名称一致
    library: '[name]_[hash]'
  },
  plugins: [
    // 定义插件
    new webpack.DllPlugin({
      path: path.join(__dirname, dllPath, '[name]-manifest.json'),
      // 保持与 output.library 中名称一致
      name: '[name]_[hash]',
      context: process.cwd()
    })
  ]
}