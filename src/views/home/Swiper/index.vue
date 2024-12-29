<template>
  <div class="swiper-container">
    <el-carousel :interval="5000" type="card" height="500px">
      <el-carousel-item v-for="item in carouselItems" :key="item.id">
        <div class="carousel-content" :style="{ backgroundImage: `url(${item.image})` }">
          <div class="carousel-text">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <el-button type="primary" size="large" @click="goToSubmit">立即咨询</el-button>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  data() {
    return {
      carouselItems: [
        {
          id: 1,
          title: '企业级应用开发',
          description: '专业的企业管理系统开发，助力企业数字化转型',
          image: require('@/assets/images/banner/enterprise.jpg')
        },
        {
          id: 2,
          title: '移动应用开发',
          description: 'iOS与Android双平台开发，打造完美用户体验',
          image: require('@/assets/images/banner/mobile.jpg')
        },
        {
          id: 3,
          title: '电商平台开发',
          description: '一站式电商解决方案，助力企业线上销售',
          image: require('@/assets/images/banner/ecommerce.jpg')
        },
        {
          id: 4,
          title: '定制化软件开发',
          description: '根据企业需求定制开发，提供个性化解决方案',
          image: require('@/assets/images/banner/custom.jpg')
        }
      ]
    }
  },
  methods: {
    goToSubmit() {
      this.$emit('show-contact')
    }
  }
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  background: #f5f7fa;
  padding: 20px 0;
}

.carousel-content {
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.carousel-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%);
}

.carousel-text {
  position: absolute;
  left: 50px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  max-width: 500px;
  text-align: left;
}

.carousel-text h2 {
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: 600;
}

.carousel-text p {
  font-size: 18px;
  margin-bottom: 30px;
  line-height: 1.6;
  opacity: 0.9;
}

/* Element UI Carousel 样式优化 */
:deep(.el-carousel__item) {
  border-radius: 12px;
}

:deep(.el-carousel__item--card) {
  border-radius: 12px;
}

:deep(.el-carousel__item--card.is-active) {
  transform: translateX(0) scale(1.1) !important;
}

/* 响应式调整 */
@media screen and (max-width: 768px) {
  .carousel-text {
    left: 30px;
    max-width: 300px;
  }

  .carousel-text h2 {
    font-size: 28px;
  }

  .carousel-text p {
    font-size: 16px;
  }
}
</style>
