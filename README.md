# 互联网职业测试

## TODO

- [ ] 问题组件 WIP
- [x] 排版 WIP
- [x] 文字效果 WIP

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
