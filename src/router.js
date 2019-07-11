import Vue from 'vue'
import Router from 'vue-router'
import Index from 'page/index.vue'
import Search from 'page/search.vue'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            component:Search
        },
        {
            path:'/index',
            component:Index
        },
        {
            path: '/LendingRank',
            title:'借阅排行',
            component: resolve => require(['./page/borrow/LendingRank.vue'], resolve)
        },
    ]
})
