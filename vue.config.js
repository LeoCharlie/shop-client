module.exports = {
    // lintOnSave: false, // 完全的关闭
    lintOnSave: 'warning', // 输出提示错误, 但项目继续运行
  
    devServer: {
      proxy: {
        '/api': { 
          target: 'http://182.92.128.115', 
          changeOrigin: true, // 支持跨域
          /* pathRewrite: { // 如果后台接口没有/api就需要写
            '^/api': ''
          } */
        }
      }
    },
  }