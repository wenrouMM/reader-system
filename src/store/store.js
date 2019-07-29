import Vuex from 'vuex'
import Vue from 'vue'
import createLogger from 'vuex/dist/logger'
import { getToken, setToken, removeToken } from '../common/js/util'
import {getInfo} from '../request/api/user'
import {
    Message
  } from 'element-ui'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
const state= {
    token:getToken(),
    name:'',
}

const mutations= {
    SET_TOKEN:(state, token) =>{
        state.token = token
    },
    SET_NAME: (state,name) =>{
        state.name = name
    }
}
// 请求都未做出错处理
const actions= {
    /* login({commit},userForm){
        return new Promise((resolve,reject) => {
            loginInt(userForm.name,userForm.password).then((res) =>{
                if(res.data.state == true){
                    const data = res.data.row
                    commit('SET_TOKEN',data.authorization)
                    setToken(data.authorization)
                    resolve()
                } else {
                    Message.error(response.data.msg)  
                }
            }).catch(error => {
                reject(error)
            })
        })
    }, */
    login({commit},res){
        return new Promise((resolve,reject) => {
            const data = res.data.row
            commit('SET_TOKEN',data.authorization)
            commit('SET_NAME',data.name)
            setToken(data.authorization)
            resolve()
        })
        
    },
    
    getInfo({commit}) {
        return new Promise((resolve,reject) => {
            getInfo().then(res => {
                if(res.data.state == true) {
                    const name = res.data.row.readerName
                    commit('SET_NAME',name)
                    resolve()
                } else {
                    Message.error(res.data.msg)
                    resolve()
                }
                
                // 非空判断？ 不是这样的
            }).catch(error =>{
                console.log('你执行了吗')
                console.log(error)
                reject(error)
            })
        })
    },

    // 退出登录
    logout({commit}){
        return new Promise((resolve,reject) => {
            commit('SET_TOKEN', '')
            commit('SET_NAME','')
            removeToken()
            resolve()
        }).catch( error => {
            reject(error)
        })
    },

    resetToken({commit}) {
        return new  Promise((resolve) => {
            commit('SET_TOKEN','')
            commit('SET_NAME','')
            removeToken()
            resolve()
        })
    }
}




export default new Vuex.Store({
    state,
    mutations,
    actions,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})