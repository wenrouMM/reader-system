import axios from 'axios'

var url = window.url

const readerInfo = {
    select: `${url}serviceforreadermodule/readerInfo/select`, // 用户信息》基本信息
    cardReport: `${url}serviceforreadermodule/readerInfo/cardReport`,//用户信息》挂失
    cardReportCancel: `${url}serviceforreadermodule/readerInfo/cardReportCancel`,//用户信息》取挂
    changePassWord: `${url}serviceforreadermodule/readerInfo/editPassword`,//用户信息》修改密码
}
//用户信息》基本信息
export function readerInfoFun (){
    return axios.get(readerInfo.select).then((res) => {
        return Promise.resolve(res)
    })
}
//用户信息》挂失
export function cardReportFun (){
    return axios.put(readerInfo.cardReport).then((res) => {
        return Promise.resolve((res))
    })
}

//用户信息》取挂
export function cardReportCancelFun (){
    return axios.put(readerInfo.cardReportCancel).then((res) => {
        return Promise.resolve((res))
    })
}

//用户信息》修改密码
export function changePassWordFun (pastPwd,newPwd){
    return axios.put(readerInfo.changePassWord,{
        password:pastPwd,
        newPassword:newPwd
    }).then((res) =>{
        return Promise.resolve((res))
    })
}

