const {
  defineConfig
} = require('@vue/cli-service')
const config =

  module.exports = defineConfig({
    transpileDependencies: [
      'vuetify'
    ],
    pluginOptions: {
      electronBuilder: {
        nodeIntegration: true
      }
    }    
  })