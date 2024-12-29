import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'
import router from './router'

Vue.use(ElementUI)

new Vue({
  router,
  created() {
    AOS.init({
      duration: 800,
      once: true
    })
  },
  render: h => h(App)
}).$mount('#app')
