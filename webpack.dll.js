const {
  resolve
} = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    vendor: ['ant-design-vue']
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dll'),
    library: '[name]_[fullhash]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[fullhash]',
      path: resolve(__dirname, 'dll/manifest.json') // 映射名称
    })
  ],
  mode: 'production'
}