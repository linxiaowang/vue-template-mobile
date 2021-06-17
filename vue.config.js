
const path = require('path')// 引入path模块
function resolve(dir) {
  return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
}
module.exports = {
  outputDir: 'dist',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('assets', resolve('./src/assets'))
      .set('styles', resolve('./src/styles'))
      .set('router', resolve('./src/router'))
      .set('views', resolve('./src/views'))
      .set('plugins', resolve('./src/plugins'))
  },
  devServer: {
    https: false,
    // 自动启动浏览器
    open: false,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_BASE_URL, // 设置调用的接口域名和端口
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
