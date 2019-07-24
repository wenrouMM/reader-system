import axios from 'axios'

var url = window.url

const readerInfo = {
    select: `${url}serviceforreadermodule/readerInfo/select`, // 用户信息》基本信息
    cardReport: `${url}serviceforreadermodule/readerInfo/cardReport`,//用户信息》挂失
    cardReportCancel: `${url}serviceforreadermodule/readerInfo/cardReportCancel`,//用户信息》取挂
    changePassWord: `${url}serviceforreadermodule/readerInfo/editPassword`,//用户信息》修改密码
    Finance: `${url}serviceforreadermodule/readerInfo/selectFinance`,//财经管理》财经查询
    renewTable: `${url}serviceforreadermodule/reader/renew/getReaderLog`,//我的借阅》续借
    renewBook:`${url}serviceforreadermodule/reader/renew/renewBooks`,//我的借阅》图书续借》续借书籍
    nowRenew:`${url}serviceforreadermodule/reader/myborrow/log/log/getReaderLog`,//我的借阅》当前借阅查询＃＃＃＃＃＃＃＃＃＃＃＃＃＃
    nowSubscribe:`${url}serviceforreadermodule/bookTbSubscribeLog/select`,//我的预约》当前预约
    cencalSubscribe:`${url}serviceforreadermodule/bookTbSubscribeLog/recall`,//我的预约》当前预约》取消预约
    hisSubscribe:`${url}serviceforreadermodule/bookTbSubscribeHistoryLog/select`,//我的预约》历史预约查询
}
/******用户信息》基本信息 *****/
export function readerInfoFun (){
    return axios.get(readerInfo.select)
}
/******用户信息》挂失 *****/
export function cardReportFun (){
    return axios.put(readerInfo.cardReport)
}
/******用户信息》取挂 *****/
export function cardReportCancelFun (){
    return axios.put(readerInfo.cardReportCancel)
}
/******用户信息》修改密码 *****/
export function changePassWordFun (pastPwd,newPwd){
    return axios.put(readerInfo.changePassWord,{
        password:pastPwd,
        newPassword:newPwd
    })
}
/******财经管理》财经查询 *****/
export function FinanceFun (sT,eT,pS,cP) {
    return axios.get(readerInfo.Finance,{params:{
            beginTime:sT,
            endTime:eT,
            pageSize:pS,
            currentPage:cP
        }})
}
/******我的借阅》图书续借 *****/
export function renewTableFun (pS,cP) {
    return axios.get(readerInfo.renewTable,{params:{
            pageSize:pS,
            currentPage:cP
        }})
}
/******我的借阅》图书续借》续借书籍 *****/
export function renewBookFun (bookId){
    return axios.post(readerInfo.renewBook,{logids:bookId})
}
/******我的借阅》当前借阅查询 ＃＃＃＃＃＃＃＃＃＃＃＃＃＃*****/
export function nowRenewFun (nM,bT,eT,pS,cP){
    return axios.get(readerInfo.nowRenew,{
        params:{
            name:nM,
            beginTime:bT,
            endTime:eT,
            pageSize:pS,
            currentPage:cP
        }
    })
}
/******我的预约》当前预约 *****/
export function nowSubscribeFun (pS,cP){
    return axios.get(readerInfo.nowSubscribe,{
        params:{
            pageSize:pS,
            currentPage:cP
        }
    })
}
/******我的预约》当前预约》取消预约 *****/
export function cencalSubscribeFun(bookId){
    return axios.post(readerInfo.cencalSubscribe,{
        id:bookId
    })
}
/******我的预约》历史预约记录 *****/
export function hisSubscribeFun(pS,cP){
    return axios.get(readerInfo.hisSubscribe,{
        params:{
            pageSize:pS,
            currentPage:cP
        }
    })
}
