<template>
    <div id="shareBtn">
        <span @click="QQzone"><i></i></span>
    </div>
</template>

<script>
import {share} from './share'
export default {
    data(){
        return{
           obj:null 
        }
    },
    methods:{
        QQzone(){
            this.obj.shareQQZone()
        },
        Sina(){
            this.obj.shareSina()
        },
        Douban(){
            this.obj.shareDouban()
        },
        QQ(){
            this.obj.shareQQ()
        }
    },
    mounted(){
        this.obj = new share('标题','www.baidu.com','')
        
    }
}
</script>

<style lang="scss" scoped>

</style>


