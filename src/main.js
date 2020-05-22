import Vue from 'vue'
import App from './App.vue'
import api from './api';

Vue.config.productionTip = false

// 后台api接口 全局注册
Vue.use(api)
new Vue({
  render: h => h(App),
}).$mount('#app')