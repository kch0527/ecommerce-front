const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

/*
const target = 'http://localhost:8000'
module.exports - {
  devServer: {
    port: 8000,
    proxy: {
      '/catalog-service/catalogs': {
        target,
        changeOrigin: true
      }
    }
  }
}
  */