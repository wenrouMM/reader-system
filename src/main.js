import Vue from 'vue'
import App from './App.vue'
import '../src/common/css/reset.css'
import router from './router'
Vue.config.productionTip = false
//css

import './common/css/zyf.css'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
