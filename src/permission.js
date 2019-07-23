import router from './router'
import store from '../src/store/store'
import {
    Message
} from 'element-ui'
import {
    getToken
} from '@/common/js/util'

router.beforeEach((to, from, next) => {
    const hasToken = getToken()
    
    if(hasToken){
        console.log(hasToken)
        if(to.path === '/login'){
            
            next(from.path)
        } else{
            const hasName = store.state.name
            if(hasName){
                next()
            } else { 
                    store.dispatch('getInfo').then(()=>{
                        console.log('???')
                    })
                    next()
            }
            
        }
    }else{
        next()
    }
  })