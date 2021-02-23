const path = require('path')
module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-gantt-chart/'
    : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'examples')
      }
    }
  },
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js', // 把src 修改为examples
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html'
    }
  }
}
