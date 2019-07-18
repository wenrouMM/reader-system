import axios from 'axios'

var url = window.url

const searchUrl = {
    collet:`${url}serviceforreadermodule/query/selectAllBookType`, // 中途分类法
    allSearch:`${url}serviceforreadermodule/query/baseSelect`
}
export const searchInt = {
    collectInt: collect,
    allSearchInt:allSearch,
}


function collect (){
    return axios.get(searchUrl.collet).then((res) => {
        return Promise.resolve(res)
    })
}

function allSearch(obj) {
    return axios.get(searchUrl.allSearch,{
        params:obj
    }).then((res) => {
        return Promise.resolve(res)
    })
}