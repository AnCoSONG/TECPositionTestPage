module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "SCUTEC|互联网职业性格测试";
      return args;
    });
  }
};
