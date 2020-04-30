# 互联网职业测试

## TODO

- [x] 问题组件 beta
- [x] 排版 WIP
- [x] 文字效果 beta
- [x] 问题页效果 beta
- [x] 结果页动态排版 1.0.1
- [x] 加载页俱乐部logo
- [x] 无关文件剔除
- [x] iPad设备适配优化 宽度大于560px取560px 再大的会有点影响体验
- [x] html2canvas跨域问题
- [ ] 清晰度问题

### Bug fix

页面清晰度问题现在的思路是->将background节点更换为img节点

### 页面运行逻辑

* 加载阶段

首页加载，吃豆豆，加载完成后缩小然后loadDone并commit('loaded')

* 首页阶段

loaded后播放首页展示动画，最终展示首页

* 问题页阶段

用户点击开始探索进入问题页，播放问题页展示动画，文字展示动画，展示问题

点击选项进入下一题，循环

共7题

* 结果页阶段

7题选择完毕后，展示结果页面


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
