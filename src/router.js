import Vue from 'vue'
import Router from 'vue-router'
import Index from 'page/index.vue'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            component:Index
        }
    ]
})