<template>
  <div class="App">
    <!-- 头部组件 -->
    <HmHeader></HmHeader>
    <!-- 主体组件 -->
     <HmMain></HmMain>
    <!-- 尾部组件 -->
    <HmFooter></HmFooter>
  </div>
</template>

<script>
import HmHeader from './components/HmHeader.vue'
import HmMain from './components/HmMain.vue'
import HmFooter from './components/HmFooter.vue'
export default {
  components:{
    // '组件名' : 组件对象
    HmHeader : HmHeader,
    HmMain : HmMain,
    HmFooter : HmFooter
  }
}
</script>

<style>
 .App{
  width: 600px;
  height: 700px;
  background-color: #87ceeb;
  margin: 75px auto;
  padding: 20px;
 } 
</style>