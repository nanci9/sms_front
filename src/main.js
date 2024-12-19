import Vue from 'vue';
import App from './App.vue';
import router from './router'; // 确保引入了 router 配置
import 'element-ui/lib/theme-chalk/index.css';  // 引入 Element UI 的样式
import ElementUI from 'element-ui';

Vue.config.productionTip = false;
Vue.use(ElementUI);  // 全局注册 Element UI 组件库

new Vue({
  render: h => h(App),
  router // 确保把 router 注册到 Vue 实例中
}).$mount('#app');
