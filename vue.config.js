module.exports = {
  // 設定打包後的路徑
  publicPath: './',
  // 修改 webpack 設定，改 title
  chainWebpack (config) {
    config.plugin('html').tap(args => {
      args[0].title = '購物商城'
      return args
    })
  }
}
