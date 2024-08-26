<template>
  <div class="app">
    <div class="box" @click="fn"></div>
  </div>
</template>

<script>
// 导出当前组件的配置项
//里面可以提供 data(特殊) methods computed watch 生命周期的八大钩子函数
export default {
  created(){
    console.log('当前组件的配置项:你好啊');
  },
  methods: {
    fn(){
      alert('你好');
    }
  }
}

</script>

<style lang="less">
/* 
  让style支持less
  1.给style加上 lang = 'less'
  2.安装less-loader
  yarn add less-loader -D(开发依赖包)
  3.在vue.config.js中配置less-loader
*/
  .app{
    width: 400px;
    height: 400px;
    background-color: pink;
    .box{
    width: 100px;
    height: 100px;background-color: skyblue;
  }
  }
</style>