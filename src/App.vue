<template>
  <div id="app">
  <!-- <Header></Header> -->
    <router-view />  <!-- 用于渲染当前匹配的组件 -->
  </div>
</template>


<script>
import Header from '@/components/layout/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<style>
#app {
  html,
  body,
  #app{
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: rgb(247, 248, 249);
  }
}

</style>
