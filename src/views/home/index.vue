<template>
  <div class="home">
    <Swiper></Swiper>
    <el-container>
      <el-main>
        <h2>欢迎访问短信系统</h2>
        <el-button type="primary" @click="goToSubmit">提交手机号</el-button>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue';  // 引入 Header 组件
import Swiper from '@/views/home/Swiper/index.vue'

export default {
  name: 'Home',
  components: {
    Header, // 注册 Header 组件
    Swiper
  },
  methods: {
    goToSubmit () {
      this.$router.push('/submit');
    },
  },
};
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
