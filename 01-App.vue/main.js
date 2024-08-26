//导入Vue 核心包
import Vue from 'vue'
import App from './App.vue'

//提示当前处于什么环境
Vue.config.productionTip = false
// 入口文件
/**
 * 核心作用 导入App.vue 基于App.vue创建结构渲染
 * 
 */
//进行Vue的实例化,提供render方法 --> 基于App.vue创建结构渲染 index.html
new Vue({
  //el: '#app' 作用和$mount('选择器') 作用一致,用于指定Vue所管理的容器
  render: h => h(App),
  //效果和上面一致
  //render: (createElement) => {return createElement(App)}
}).$mount('#app')
