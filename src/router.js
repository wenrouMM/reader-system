import Vue from 'vue'
import Router from 'vue-router'
import Index from 'page/index.vue'
import Search from 'page/search.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: Search
        },
        {
            path: '/indexTest',
            component: Index,

            children: [{
                    path: '/searchList',
                    component: () => import('./page/search/searchMore/searchList.vue')
                }, {
                    path: '/searchDetail',
                    component: () => import('./page/search/searchMore/searchDetail.vue')
                },
                //借阅管理
                {
                    path: '/LendingRank',
                    component: () => import('page/borrow/LendingRank.vue')
                },
                {
                    path: '/NewBooksBulletins',
                    component: () => import('page/borrow/NewBooksBulletins.vue')
                },
            ]
        },
        {
            path: '/test',
            component: () => import('./layout/share.vue')
        },

        //读者中心
        {
            path: '/ReaderNavigation',
            component: () => import('./components/ReaderNavigation.vue'),
            children: [{
                    path: '/BasicInfo',
                    title: '基本信息',
                    component: () => import('page/reader/BasicInfo.vue'),
                },
                {
                    path: '/DocumentProcessing',
                    title: '证件挂失/恢复',
                    component: () => import('page/reader/DocumentProcessing.vue'),
                },
                {
                    path: '/ChangePassword',
                    title: '修改密码',
                    component: () => import('page/reader/ChangePassword.vue'),
                },
                {
                    path: '/ModifyLoginName',
                    title: '修改登录名',
                    component: () => import('page/reader/ModifyLoginName.vue'),
                },
                {
                    path: '/BookRenewal',
                    title: '图书续借',
                    component: () => import('page/reader/BookRenewal.vue')
                },
                {
                    path: '/CurrentBorrowingQueries',
                    title: '当前借阅查询',
                    component: () => import('page/reader/CurrentBorrowingQueries.vue')
                },
                {
                    path: '/HistoryLoanEnquiry',
                    title: '当前借阅查询',
                    component: () => import('page/reader/HistoryLoanEnquiry.vue')
                },
                {
                    path: '/MyCollection',
                    title: '当前借阅查询',
                    component: () => import('page/reader/MyCollection.vue')
                }
            ]
        },

    ]
})
