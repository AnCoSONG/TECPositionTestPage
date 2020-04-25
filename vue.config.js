module.exports = {
    chainWebpack: config => {
      config
      .plugin('html')
      .tap(args => {
        args[0].title = '川大腾讯|职位测评'
        return args
      })
    }
  }