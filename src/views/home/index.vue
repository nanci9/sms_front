<template>
  <div class="home">
    <div class="background-layer">
      <div class="gradient-overlay"></div>
      <!-- 动态粒子背景 -->
      <div class="particles">
        <span v-for="n in 50" :key="n"
              class="particle"
              :style="getRandomStyle()">
        </span>
      </div>
    </div>

    <!-- 左侧边栏 -->
    <div class="sidebar">
      <div class="profile-section">
        <el-avatar :size="isMobile ? 80 : 120" :src="require('@/assets/images/avator.jpg')" class="profile-avatar"/>
        <h2>Wind</h2>
        <p class="title">Java开发工程师</p>

        <!-- 数字时钟 -->
        <div class="clock">
          <div class="time">{{ currentTime }}</div>
          <div class="date">{{ currentDate }}</div>
        </div>

        <!-- 在线状态 -->
        <div class="status">
          <span class="pulse"></span>
          <span>在线时长: {{ onlineTime }}</span>
        </div>

        <div class="social-links">
          <el-button circle icon="el-icon-chat-dot-round" @click="copyWechat"></el-button>
          <el-button circle icon="el-icon-link" @click="showGithub"></el-button>
        </div>
      </div>

      <!-- 导航菜单 -->
      <div class="nav-menu">
        <div
          v-for="(item, index) in menuItems"
          :key="item.path"
          class="nav-item"
          :class="{ active: $route.path === item.path }"
          @click="handleNavClick(item)"
        >
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
          <div class="nav-line"></div>
        </div>
      </div>
    </div>

    <!-- 右侧内容区 -->
    <div class="main-content">
      <div class="welcome-section">
        <h1 class="dynamic-text">{{ welcomeText }}</h1>
        <div class="typing-effect">{{ typingText }}</div>
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
    const now = new Date()
    return {
      currentTime: now.toLocaleTimeString(),
      currentDate: now.toLocaleDateString(),
      onlineTime: '0:00',
      startTime: now,
      temperature: '25',
      visitCount: 88,
      typingText: '',
      fullText: '欢迎访问我的个人网站',
      menuItems: [
        { name: '首页', path: '/', icon: 'el-icon-user' },
        { name: '主营业务', path: '/business', icon: 'el-icon-s-cooperation' },
        { name: '福利专区', path: '/welfare', icon: 'el-icon-present' }
      ],
      welcomeText: '你好，访客',
      businesses: [
        {
          id: 1,
          icon: 'el-icon-s-platform',
          title: '软件定制开发',
          description: '提供各类管理系统、小程序、网站等软件定制开发服务',
          price: '价格面议'
        },
        {
          id: 2,
          icon: 'el-icon-notebook-2',
          title: '毕业设计',
          description: '计算机相关专业毕业设计，包含程序开发、论文、PPT等',
          price: '定金100起'
        },
        {
          id: 3,
          icon: 'el-icon-edit-outline',
          title: '大学生作业',
          description: '各类程序设计作业、课程设计、实验报告等',
          price: '50起'
        }
      ],
      welfares: [
        {
          id: 1,
          icon: 'el-icon-mobile',
          title: '免费流量卡',
          description: '0月租手机卡，每月赠送流量，长期有效',
          detail: '免费办理，顺丰到付'
        },
        {
          id: 2,
          icon: 'el-icon-food',
          title: '5元吃外卖',
          description: '美团饿了么红包，最高减30元',
          detail: '联系客服免费领取'
        }
      ],
      dialogVisible: false,
      isMobile: false
    }
  },
  created() {
    this.startClock()
    this.startTyping()
    this.updateWelcomeText()
    this.updateOnlineTime()
    this.checkDevice()
    window.addEventListener('resize', this.checkDevice)
  },
  destroyed() {
    window.removeEventListener('resize', this.checkDevice)
  },
  methods: {
    checkDevice() {
      this.isMobile = window.innerWidth <= 768
    },
    startClock() {
      setInterval(() => {
        const now = new Date()
        this.currentTime = now.toLocaleTimeString()
        this.currentDate = now.toLocaleDateString()
      }, 1000)
    },
    updateOnlineTime() {
      setInterval(() => {
        const now = new Date()
        const diff = Math.floor((now - this.startTime) / 1000)
        const minutes = Math.floor(diff / 60)
        const seconds = diff % 60
        this.onlineTime = `${minutes}:${seconds.toString().padStart(2, '0')}`
      }, 1000)
    },
    formatVisit(percentage) {
      return `${percentage * 10}`
    },
    startTyping() {
      let i = 0
      const typing = setInterval(() => {
        if (i <= this.fullText.length) {
          this.typingText = this.fullText.slice(0, i)
          i++
        } else {
          clearInterval(typing)
        }
      }, 100)
    },
    updateWelcomeText() {
      const hour = new Date().getHours()
      if (hour < 6) {
        this.welcomeText = '夜深了，注意休息'
      } else if (hour < 12) {
        this.welcomeText = '早上好'
      } else if (hour < 14) {
        this.welcomeText = '中午好'
      } else if (hour < 18) {
        this.welcomeText = '下午好'
      } else {
        this.welcomeText = '晚上好'
      }
    },
    getRandomStyle() {
      return {
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        animationDelay: Math.random() * 2 + 's',
        animationDuration: Math.random() * 3 + 2 + 's'
      }
    },
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
    showWelfareDetail(welfare) {
      this.$message({
        message: welfare.detail,
        type: 'success',
        duration: 3000
      })
    },
    handleNavClick(item) {
      if (item.path === '/') {
        if (this.$route.path !== '/') {
          this.$router.push(item.path).catch(err => {
            if (err.name !== 'NavigationDuplicated') {
              throw err
            }
          })
        }
      } else {
        const url = `${window.location.origin}${item.path}`
        window.open(url, '_blank')
      }
    }
  }
}
</script>

<style scoped>
.home {
  height: 100vh;
  display: flex;
  overflow: hidden;
}

.sidebar {
  width: 280px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  z-index: 1;
  overflow-y: auto;
}

.profile-section {
  text-align: center;
  margin-bottom: 2rem;
}

.profile-avatar {
  border: 4px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 1rem;
}

.title {
  color: rgba(255, 255, 255, 0.9);
  margin: 0.5rem 0 1rem;
}

.nav-menu {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  min-height: 0; /* 允许菜单压缩 */
}

.nav-item {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 10px;
  margin-bottom: 0.5rem;
}

.nav-item i {
  margin-right: 1rem;
  font-size: 1.2rem;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.nav-item.active {
  background: rgba(64, 158, 255, 0.2);
  color: #409EFF;
}

.nav-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #409EFF;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.nav-item:hover .nav-line,
.nav-item.active .nav-line {
  transform: translateX(0);
}

.main-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.main-content::-webkit-scrollbar {
  display: none;
}

.intro-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  border-radius: 20px;
  color: white;
}

/* 响应式设计 */
@media screen and (max-width: 768px) {
  .home {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    height: auto;
    padding: 1rem;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .profile-section {
    margin-bottom: 1rem;
  }

  .nav-menu {
    display: flex;
    justify-content: space-around;
  }

  .nav-item {
    flex-direction: column;
    text-align: center;
    padding: 0.5rem;
  }

  .nav-item i {
    margin: 0 0 0.5rem 0;
  }

  .main-content {
    padding: 1rem;
  }
}

/* 背景层样式 */
.background-layer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('@/assets/images/bggg.jpg') center/cover no-repeat;
  filter: blur(10px);
  transform: scale(1.1);
  z-index: -2;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0.5),  /* 降低透明度从 0.7 到 0.5 */
    rgba(0, 0, 0, 0.2)   /* 降低透明度从 0.3 到 0.2 */
  );
  z-index: -1;
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
.business-section, .welfare-section {
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
  .business-section,
  .welfare-section {
    margin-top: 2rem;
    padding: 1rem;
  }

  .profile-card,
  .intro-card,
  .business-card,
  .welfare-card {
    margin-bottom: 1rem;
  }

  .profile-card {
    margin-bottom: 1.5rem;
  }

  .intro-card {
    height: auto;
  }

  .business-card,
  .welfare-card {
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

  .business-card i,
  .welfare-card i {
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
  .business-card:hover,
  .welfare-card:hover {
    transform: none;
  }
}

/* 主营业务卡片样式 */
.business-card {
  position: relative;
  overflow: hidden;
}

.price-tag {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #f56c6c;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
}

/* 福利卡片样式 */
.welfare-card {
  cursor: pointer;
  transition: all 0.3s ease;
}

.welfare-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.welfare-content {
  display: flex;
  align-items: center;
}

.welfare-icon {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
}

.welfare-icon i {
  font-size: 30px;
  color: #409EFF;
}

.welfare-info {
  flex-grow: 1;
}

.welfare-info h3 {
  color: white;
  margin-bottom: 0.5rem;
}

.welfare-info p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

/* 响应式调整 */
@media screen and (max-width: 768px) {
  .welfare-content {
    flex-direction: column;
    text-align: center;
  }

  .welfare-icon {
    margin: 0 auto 1rem;
  }
}

.nav-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
  cursor: pointer;
}

.nav-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.nav-card i {
  font-size: 40px;
  color: #409EFF;
  margin-bottom: 1rem;
}

.nav-card h3 {
  color: white;
  margin-bottom: 1rem;
}

.nav-card p {
  color: rgba(255, 255, 255, 0.9);
}

/* 新增样式 */
.clock {
  margin: 1rem 0;
  color: white;
}

.time {
  font-size: 1.8rem;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.date {
  font-size: 1rem;
  opacity: 0.8;
}

.status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: white;
  margin: 0.5rem 0;
}

.pulse {
  width: 8px;
  height: 8px;
  background: #67c23a;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(103, 194, 58, 0.7);
  }
  70% {
    transform: scale(1.2);
    box-shadow: 0 0 0 10px rgba(103, 194, 58, 0);
  }
  100% {
    transform: scale(1);
  }
}

.welcome-section {
  text-align: center;
  margin-top: 20%;
}

.dynamic-text {
  font-size: 3rem;
  color: white;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.typing-effect {
  font-size: 1.5rem;
  color: white;
  opacity: 0.8;
  height: 2rem;
  position: relative;
}

.typing-effect::after {
  content: '|';
  position: absolute;
  animation: blink 1s infinite;
}

.nav-indicator {
  position: absolute;
  right: 1rem;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #409EFF;
  opacity: 0;
  transition: all 0.3s ease;
}

.nav-item.active .nav-indicator {
  opacity: 1;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* 响应式调整 */
@media screen and (max-width: 768px) {
  .welcome-section {
    margin-top: 10%;
  }

  .dynamic-text {
    font-size: 2rem;
  }

  .typing-effect {
    font-size: 1.2rem;
  }
}

.particles {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: float infinite linear;
}

@keyframes float {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-100vh) scale(0);
    opacity: 0;
  }
}

.system-status {
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: auto; /* 将状态推到底部 */
}

.status-item {
  color: white;
  margin-bottom: 0.5rem;
}

.status-item span {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

/* 自定义进度条样式 */
:deep(.el-progress-bar__outer) {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

:deep(.el-progress-bar__inner) {
  background-color: #409EFF !important;
}

:deep(.el-progress__text) {
  color: white !important;
}
</style>
