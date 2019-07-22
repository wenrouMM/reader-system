import Vue from 'vue'
import App from './App.vue'
import '../src/common/css/reset.css'
import '../src/common/css/common.css'
import '../src/common/scss/index.scss'
import router from './router'
import axios from 'axios'
axios.interceptors.request.use(function (config) {
    let token = localStorage.getItem('authorization');
    if (token) {
        config.headers['Authorization'] = token;
    }
    return config;
})

//css
import ElementUI from 'element-ui'
Vue.use(ElementUI) // 注册插件
import 'element-ui/lib/theme-chalk/index.css'

import './common/css/zyf.css'


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
