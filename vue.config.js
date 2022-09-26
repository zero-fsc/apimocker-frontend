const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { AntDesignVueResolver, Vue } = require('unplugin-vue-components/resolvers')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const DllRefrencePlugin = require('webpack').DllReferencePlugin
const { resolve } = require('path')
module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      new SpeedMeasurePlugin(),
      new BundleAnalyzerPlugin(),
      // DLL预打包
      new DllRefrencePlugin({
        manifest: resolve(__dirname, 'dll/manifest.json')
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
