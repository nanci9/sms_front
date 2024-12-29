<template>
  <div class="home">
    <!-- 背景层 -->
    <div class="background-layer">
      <div class="gradient-overlay"></div>
    </div>

    <!-- 内容区域 -->
    <div class="content-wrapper">
      <!-- 添加标题区域 -->
      <div class="hero-section" data-aos="fade-down">
        <h1 class="main-title">Wind's Lab</h1>
        <p class="subtitle">探索技术的无限可能</p>
      </div>

      <!-- 个人介绍区域 -->
      <div class="profile-section">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="8" :lg="8">
            <div class="profile-card" data-aos="fade-right">
              <el-avatar :size="150" :src="require('@/assets/images/avator.jpg')" class="profile-avatar"/>
              <h2>Wind</h2>
              <p class="title">Java开发工程师</p>
              <div class="social-links">
                <el-button circle icon="el-icon-chat-dot-round" @click="copyWechat"></el-button>
                <el-button circle icon="el-icon-link" @click="showGithub"></el-button>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="16" :lg="16">
            <div class="intro-card" data-aos="fade-left">
              <h2 class="intro-title">关于我</h2>
              <p class="intro-text">
                专注于Java后端开发，提供软件定制开发服务。
                承接各类毕业设计和个人项目开发。
              </p>
              <div class="intro-button">
                <el-button type="primary" @click="goToSubmit">联系我</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <!-- 服务介绍区域 -->
      <div class="services-section">
        <h2 class="section-title">我的服务</h2>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="8" :lg="8" v-for="service in services" :key="service.id">
            <div class="service-card" data-aos="fade-up">
              <i :class="service.icon"></i>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </el-col>
        </el-row>
      </div>

      <!-- 新增功能展示区域 -->
      <div class="features-section">
        <h2 class="section-title">实验室</h2>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="8" :lg="8" v-for="feature in features" :key="feature.id">
            <div class="feature-card" data-aos="fade-up" @click="showFeatureStatus(feature)">
              <i :class="feature.icon"></i>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
              <el-tag size="small" :type="feature.status === '开发中' ? 'warning' : 'success'">
                {{ feature.status }}
              </el-tag>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 二维码弹窗 -->
    <el-dialog
      title="扫码联系我"
      :visible.sync="dialogVisible"
      width="350px"
      :show-close="true"
      center
      custom-class="qrcode-dialog"
    >
      <div class="qrcode-container" data-aos="zoom-in">
        <img :src="require('@/assets/images/wxcode.jpg')" alt="微信二维码" class="qrcode-img">
        <p class="qrcode-tip">扫一扫，立即联系我</p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      services: [
        {
          id: 1,
          icon: 'el-icon-s-platform',
          title: '毕业设计',
          description: '提供各类毕业设计开发服务，包括系统设计、代码实现和文档编写'
        },
        {
          id: 2,
          icon: 'el-icon-s-cooperation',
          title: '软件定制',
          description: '个性化软件定制开发，满足您的特定需求，各种秒杀软件亦可定制'
        },
        {
          id: 3,
          icon: 'el-icon-s-management',
          title: '项目开发',
          description: '各类中小型项目开发，提供完整的技术解决方案'
        }
      ],
      dialogVisible: false,
      features: [
        {
          id: 1,
          icon: 'el-icon-message',
          title: '短信测压',
          description: '短信压力测试工具',
          status: '开发中'
        },
        {
          id: 2,
          icon: 'el-icon-data-analysis',
          title: '莆田信息采集',
          description: '数据采集分析工具',
          status: '开发中'
        },
        {
          id: 3,
          icon: 'el-icon-more',
          title: '更多功能',
          description: '更多实用功能即将到来',
          status: '规划中'
        }
      ]
    }
  },
  methods: {
    copyWechat() {
      const wechatId = 'Wwind1923'
      const input = document.createElement('input')
      input.value = wechatId
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      this.$message({
        message: '微信号已复制：' + wechatId,
        type: 'success',
        duration: 2000
      })
    },
    showGithub() {
      window.open('https://github.com/nanci9', '_blank')
    },
    goToSubmit() {
      this.dialogVisible = true
    },
    showFeatureStatus(feature) {
      this.$message({
        message: `${feature.title}${feature.status === '开发中' ? '正在开发中，敬请期待！' : '正在规划中，敬请期待！'}`,
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* 背景层样式 */
.background-layer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('@/assets/images/bg.png') center/cover no-repeat;
  filter: blur(10px);
  transform: scale(1.1);
  z-index: -2;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: -1;
}

/* 内容区域样式 */
.content-wrapper {
  position: relative;
  z-index: 1;
  padding: 2rem;
}

.profile-card, .intro-card, .service-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.profile-card {
  padding: 2rem;
  border-radius: 20px;
  color: white;
}

.intro-card {
  padding: 2rem;
  border-radius: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
}

.service-card {
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  transition: transform 0.3s ease;
  margin-bottom: 1rem;
  color: white;
}

.service-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.section-title {
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.intro-title {
  color: white;
  font-size: 24px;
  margin-bottom: 1.5rem;
}

.intro-text {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.title {
  color: rgba(255, 255, 255, 0.9);
  margin: 1rem 0;
}

.service-card i {
  font-size: 40px;
  color: #409EFF;
  margin-bottom: 1rem;
}

.service-card h3 {
  color: white;
  margin-bottom: 1rem;
}

.service-card p {
  color: rgba(255, 255, 255, 0.9);
}

/* 保持其他样式不变 */
.profile-section, .services-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.profile-avatar {
  border: 4px solid rgba(255, 255, 255, 0.2);
}

/* 二维码弹窗样式优化 */
.qrcode-container {
  text-align: center;
  padding: 20px;
}

.qrcode-img {
  width: 250px;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  object-fit: cover;
}

.qrcode-tip {
  margin-top: 12px;
  color: #606266;
  font-size: 14px;
}

:deep(.qrcode-dialog) {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
}

:deep(.qrcode-dialog .el-dialog__header) {
  padding: 15px 15px 5px;
  text-align: center;
}

:deep(.qrcode-dialog .el-dialog__body) {
  padding: 10px;
}

/* 标题区域样式 */
.hero-section {
  text-align: center;
  padding: 4rem 0;
  margin-bottom: 2rem;
}

.main-title {
  font-size: 3.5rem;
  color: white;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  letter-spacing: 1px;
}

/* 功能卡片样式 */
.features-section {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 2rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.feature-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.feature-card i {
  font-size: 40px;
  color: #409EFF;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.feature-card p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.feature-card .el-tag {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

/* 确保所有区域间距合适 */
.profile-section, .services-section, .features-section {
  margin-top: 4rem;
}

/* 响应式样式调整 */
@media screen and (max-width: 768px) {
  .content-wrapper {
    padding: 1rem;
  }

  .hero-section {
    padding: 2rem 0;
  }

  .main-title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .profile-section, 
  .services-section, 
  .features-section {
    margin-top: 2rem;
    padding: 1rem;
  }

  .profile-card,
  .intro-card,
  .service-card,
  .feature-card {
    margin-bottom: 1rem;
  }

  .profile-card {
    margin-bottom: 1.5rem;
  }

  .intro-card {
    height: auto;
  }

  .service-card,
  .feature-card {
    padding: 1.5rem;
  }

  .section-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .intro-title {
    font-size: 1.3rem;
  }

  .intro-text {
    font-size: 0.9rem;
  }
}

/* 小屏幕设备优化 */
@media screen and (max-width: 480px) {
  .main-title {
    font-size: 2rem;
  }

  .profile-avatar {
    width: 120px !important;
    height: 120px !important;
  }

  .social-links .el-button {
    padding: 8px;
  }

  .service-card i,
  .feature-card i {
    font-size: 32px;
  }

  .qrcode-dialog {
    width: 90% !important;
    margin: 0 auto;
  }
}

/* 确保弹窗在移动端也能正常显示 */
:deep(.el-dialog) {
  @media screen and (max-width: 768px) {
    width: 90% !important;
    margin: 0 auto;
  }
}

/* 优化移动端的卡片间距 */
.el-row {
  @media screen and (max-width: 768px) {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}

.el-col {
  @media screen and (max-width: 768px) {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}

/* 优化移动端的触摸体验 */
@media (hover: none) {
  .service-card:hover,
  .feature-card:hover {
    transform: none;
  }
}
</style>
