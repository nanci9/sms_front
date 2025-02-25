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
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

#app {
  height: 100%;
  overflow: hidden;
}

#app {
  html,
  body,
  #app{
    background-color: rgb(247, 248, 249);
  }
}

</style>
