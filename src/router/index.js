import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index.vue'
import Submit from '@/views/submit/index.vue'
import Success from '@/views/success/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',  // 使用 history 模式避免 URL 中带有 #，如果需要
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/submit',
      name: 'Submit',
      component: Submit
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    }
  ]
})
