const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {
  AntDesignVueResolver
} = require('unplugin-vue-components/resolvers')
const path = require('path')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const DllReferencePlugin = require('webpack').DllReferencePlugin
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
module.exports = {
  configureWebpack: {
    plugins: [
      new SpeedMeasurePlugin(),
      new BundleAnalyzerPlugin(),
      // DLL预打包
      new DllReferencePlugin({
        manifest: require(`./dll/manifest.json`)
      }),
      new AddAssetHtmlPlugin({
        // dll文件位置
        filepath: path.resolve(__dirname, './dll/antd.js'),
        // dll 引用路径，请使用 绝对路径！！！
        publicPath: '/dll',
        // dll最终输出的目录
        outputPath: './dll'
      }),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/, /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        resolvers: [AntDesignVueResolver()],
        imports: ['vue'],
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
      }),
      Components({
        extensions: ['vue'],
        resolvers: [AntDesignVueResolver()],
      }),
    ]
  },

  pluginOptions: {
    windicss: {}
  }
}