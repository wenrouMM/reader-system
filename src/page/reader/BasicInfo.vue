<template>
    <div class="ReaderCenter flexLayoutColumn">
        <div class="title flexLayoutRow">
            <img :src="titleIcon" class="titleImg">
            <div class="titleFont">基本信息</div>
        </div>
        <div class="flexLayoutRow" style="padding:0px 0px 330px">
            <div class="headIcon"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                titleIcon:require('../../common/img/readerIcon/BasicInfo.png')
            }
        }
    }
</script>

<style scoped>
    .headIcon{
        width: 130px;
        height: 180px;
        background-color: #DADADA;
    }
</style>
