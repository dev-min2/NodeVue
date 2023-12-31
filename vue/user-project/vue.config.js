const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:4500'
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer : {
    port : 8080,
    proxy : {
      '^/api' : {
        target,
        changeOrigin : true,
        ws : false,
        pathRewrite : { // 경로를 다시씀. -> /api/~ -> / 
          '^/api' : '/'
        } 
      }
    }
  }
})
// 12-06
// npm run build
