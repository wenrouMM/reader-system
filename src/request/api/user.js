import axios from 'axios'

var url = window.url

const login = `${url}serviceforreadermodule/index/login`; // 用户信息》基本信息
const user = `${url}serviceforreadermodule/readerInfo/select`


export function loginInt (nameVal,passwordVal){
    return axios.post(login,{
        account:nameVal,
        password:passwordVal,
    }).then((res) => {
        return Promise.resolve(res)
    })
}

export function getInfo() {
    return axios.get(user).then((res) => {
        return Promise.resolve(res)
    })
}
