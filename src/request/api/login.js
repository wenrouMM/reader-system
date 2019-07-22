import axios from 'axios'

var url = window.url

const login = `${url}serviceforreadermodule/index/login`; // 用户信息》基本信息
export const loginInt = {
    loginFun: _login,
}

function _login (nameVal,passwordVal){
    return axios.post(login,{
        account:nameVal,
        password:passwordVal,

    }).then((res) => {
        return Promise.resolve(res)
    })
}

