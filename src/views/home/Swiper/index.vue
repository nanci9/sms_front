<template>
  <div class="swiperDiv">
    <el-carousel>
      <el-carousel-item>
        <img src="" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Swiper'
}
</script>

<style>
@media screen and (max-width: 1000px) {
  .swiperDiv .el-carousel__container {
    height: 180px;
  }

  .swiperDiv img {
    width: 100%;
    height: 180px;
  }
}

@media screen and (min-width: 1000px) {
  .swiperDiv .el-carousel__container {
    height: 450px;
  }

  .swiperDiv img {
    width: 100%;
    height: 100%;
  }
}
</style>
