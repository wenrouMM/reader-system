// 收藏 预约接口
import axios from 'axios'
var url = window.url
const collectUrl = {
    collectSe:`${url}serviceforreadermodule/SfrTbCollect/getSfrTbCollects`, // 收藏查询
    collectAdd:`${url}serviceforreadermodule/SfrTbCollect/addSfrTbCollect`, // 收藏
    collectDel:`${url}serviceforreadermodule/SfrTbCollect/deleteSfrTbCollect` // 取消收藏
}

const orderUrl = {
    order:`${url}serviceforreadermodule/bookTbSubscribeLog/subscribe` // 预约
}

export const collectInt ={

}

export function orderInt(obj) {
    return axios.post(orderInt,{
        data:obj
    }).then((res) => {
        return Promise.resolve(res)
    })
}

function search() {
    
}