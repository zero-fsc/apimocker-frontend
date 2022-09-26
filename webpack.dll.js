const {
  resolve
} = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    vendor: ['ant-design-vue']
    // 将数组中的一些包打包为一个chunk，包名字就和键一样
    // vue: ['vue','vuex','vue-router']
  },
  output: {
    // [name] = entry的键名
    filename: '[name].js',
    path: resolve(__dirname, 'dll'),
    library: '[name]_[fullhash]', //打包的dll文件作为新的包，暴露出去的变量名
  },
  plugins: [
    //生成一个目录，告诉webpack不要打包这些文件了
    new webpack.DllPlugin({
      name: '[name]_[fullhash]', //映射库的名称
      path: resolve(__dirname, 'dll/manifest.json') //生成一个库名和真正库的映射文件
    })
  ],
  mode: 'production'
}