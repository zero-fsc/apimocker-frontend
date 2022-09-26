const {
  defineConfig
} = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {
  AntDesignVueResolver,
  Vue
} = require('unplugin-vue-components/resolvers')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const DllReferencePlugin = require('webpack').DllReferencePlugin
const path = require('path')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      new SpeedMeasurePlugin(),
      new BundleAnalyzerPlugin(),
      // DLL预打包
      new DllReferencePlugin({
        context: process.cwd(),
        manifest: require(`./public/vendor/vue-manifest.json`)
      }),
      new DllReferencePlugin({
        context: process.cwd(),
        manifest: require(`./public/vendor/antd-manifest.json`)
      }),
      new AddAssetHtmlPlugin({
        // dll文件位置
        filepath: path.resolve(__dirname, './public/vendor/antd.dll.js'),
        // dll 引用路径，请使用 绝对路径！！！
        publicPath: '/vendor',
        // dll最终输出的目录
        outputPath: './vendor'
      }),
      new AddAssetHtmlPlugin({
        // dll文件位置
        filepath: path.resolve(__dirname, './public/vendor/vue.dll.js'),
        // dll 引用路径，请使用 绝对路径！！！
        publicPath: '/vendor',
        // dll最终输出的目录
        outputPath: './vendor'
      }),
      AutoImport({
        resolvers: [AntDesignVueResolver()],
        imports: ['vue'],
      }),
      Components({
        extensions: ['vue'],
        resolvers: [AntDesignVueResolver()],
        dts: true,
        deep: true
      })
    ]
  }
})