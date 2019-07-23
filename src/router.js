import Vue from 'vue'
import Router from 'vue-router'
import Index from 'page/index.vue'
import Search from 'page/search.vue'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/search'
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/indexTest',
            component: Index,
            redirect:'/search',
            children: [
                // 搜索列表
                {
                    path: '/searchList',
                    component: () => import('./page/search/searchMore/searchList.vue')
                },
                // 搜索详情
                {
                    path: '/searchDetail/:id',
                    name: 'detail',
                    component: () => import('./page/search/searchMore/searchDetail.vue')
                },
                // 简单检索
                {
                    path: '/esaySearch',
                    component: () => import('./page/search/searchMore/searchEasy.vue')
                },
                // 复杂检索
                {
                    path: '/hardSearch',
                    component: () => import('./page/search/searchMore/searchHard.vue')
                },
                // 分类导航
                {
                    path: '/classify',
                    component: () => import('./page/classify/classify.vue')
                },
                // 借阅管理
                {
                    path: '/LendingRank',
                    component: () => import('page/borrow/LendingRank.vue')
                },
                {
                    path: '/NewBooksBulletins',
                    component: () => import('page/borrow/NewBooksBulletins.vue')
                },
                //读者中心
                {
                    path: '/ReaderNavigation',
                    redirect:"/BasicInfo",
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
                            title: '历史借阅查询',
                            component: () => import('page/reader/HistoryLoanEnquiry.vue')
                        },
                        {
                            path: '/MyCollection',
                            title: '历史借阅查询',
                            component: () => import('page/reader/MyCollection.vue')
                        },
                        {
                            path: '/CurrentAppointment',
                            title: '当前预约',
                            component: () => import('page/reader/CurrentAppointment.vue')
                        },
                        {
                            path: '/HistoricalAppointment',
                            title: '历史预约查询',
                            component: () => import('page/reader/HistoricalAppointment.vue')
                        },
                        {
                            path: '/ReaderRecommendation',
                            title: '读者自荐',
                            component: () => import('page/reader/ReaderRecommendation.vue')
                        },
                        {
                            path: '/Order',
                            title: '征订荐购',
                            component: () => import('page/reader/Order.vue')
                        },
                        {
                            path: '/HisRecommendation',
                            title: '历史荐购',
                            component: () => import('page/reader/HisRecommendation.vue')
                        },
                        {
                            path: '/RecommendRanking',
                            title: '荐购排行',
                            component: () => import('page/reader/RecommendRanking.vue')
                        },
                        {
                            path: '/FinancialManagement',
                            title: '财务管理',
                            component: () => import('page/reader/FinancialManagement.vue')
                        },
                    ]
                },
                {
                    path: '/login',
                    component: () => import('page/login/login.vue')
                },
            ]
        },
        {
            path: '/test',
            component: () => import('./layout/share.vue')
        },


        {
            path: '/test',
            component: () => import('./components/SearchInput.vue')
        },




    ]
})