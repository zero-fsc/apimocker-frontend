const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { AntDesignVueResolver, Vue } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
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
