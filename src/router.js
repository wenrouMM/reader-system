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
            path:'/indexTest',
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
            component:() => import('./layout/share.vue')
        }
    ]
})
