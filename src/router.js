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
            component:Index,
            children:[{
                path:'/searchList',
                component:() => import('./page/search/searchMore/searchList.vue')
            },{
                path:'/searchDetail',
                component:() => import('./page/search/searchMore/searchDetail.vue')
            }

            ]
        },{
            path:'/test',
            component:() => import('./components/SearchInput.vue')
        },
        /**
         * 借阅管理**/
        {
            path:'/LendingRank',
            component:() => import('page/borrow/LendingRank.vue')
        },
        {
            path:'/NewBooksBulletins',
            component:() => import('page/borrow/NewBooksBulletins.vue')
        },
        /**
         * 读者中心**/
        {
            path:'/ReaderNavigation',
            component:() => import('./components/ReaderNavigation.vue'),
            children:[
                {
                    path:'/BasicInfo',
                    component:() => import('page/reader/BasicInfo.vue'),
                },
                {
                    path:'/DocumentProcessing',
                    component:() => import('page/reader/DocumentProcessing.vue'),
                },
                {
                    path:'/ChangePassword',
                    component:() => import('page/reader/ChangePassword.vue'),
                },
                {
                    path:'/ModifyLoginName',
                    component:() => import('page/reader/ModifyLoginName.vue'),
                }
            ]
        },
            component:() => import('./components/bookBlock.vue')
        }
    ]
})
