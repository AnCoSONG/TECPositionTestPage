module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "SCUTEC|互联网职业性格测试";
      return args;
    });
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://scutongxin.club:8088/', //对应自己的接口
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/record/newRecord'
        }
      }
    }
  }
};
