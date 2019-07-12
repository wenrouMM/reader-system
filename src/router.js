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
        /**
         * 借阅管理模块
         */
        {
            path: '/LendingRank',
            title:'借阅排行',
            component: resolve => require(['./page/borrow/LendingRank.vue'], resolve)
        },
        {
            path: '/NewBookBulletins',
            title:'新书通报',
            component: resolve => require(['./page/borrow/NewBooksBulletins.vue'], resolve)
        },
        /**
         * 读者中心模块
         */
        {
            path: '/ReaderNavigation',
            title:'读者中心导航',
            component: resolve => require(['./page/reader/ReaderNavigation.vue'], resolve),
            children:[

                {
                    path: '/BasicInfo',
                    title:'基本信息',
                    component: resolve => require(['./page/reader/BasicInfo.vue'], resolve)
                },
            ]
        },

    ]
})
