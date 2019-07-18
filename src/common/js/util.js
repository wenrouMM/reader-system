// 通用方法
// 得到一个26个大写字母的数组
export function getBigLetter () {
    var str = [];
    for(var i=65;i<91;i++){
        str.push(String.fromCharCode(i)); // 将unicode转码为一个字母
    }
    return str;
}


