<template>
    <div id="BasicInfo" class="zyfPage ReaderCenter">
        <div class="title flexLayoutRow">
            <img :src="titleIcon" class="titleImg" style="">
            <div class="titleFont">基本信息</div>
        </div>
        <div class="flexLayoutRow">
            <div class="headIcon"></div>
            <div>
                <p>读者卡号： <span>{{readerInfo.cardNum}}</span></p>
                <p>开户馆： <span>{{readerInfo.userLib}}</span> </p>
                <p>办卡日期： <span>{{readerInfo.createTime}}</span></p>
                <p>押金： <span>{{readerInfo.deposit}}</span></p>
            </div>
            <div>
                <p>姓名： <span>{{readerInfo.name}}</span></p>
                <p>证件类别： <span>{{readerInfo.idCardType}}</span></p>
                <p>有效日期： <span>{{readerInfo.effectiveDate}}</span></p>
                <p>逾期费用： <span>{{readerInfo.demurrageFee}}</span></p>
            </div>
            <div>
                <p>读者卡状态： <span>{{readerInfo.cardState}}</span></p>
                <p>证件号码： <span>{{readerInfo.idCard}}</span></p>
                <p>可借阅次数： <span>{{readerInfo.borrowNum}}</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                titleIcon:require('../../common/img/readerIcon/BasicInfo.png'),
                readerInfo:{
                    cardNum:"1221392390",
                    userLib:'夔牛图书馆',
                    createTime:'2019-4-4',
                    deposit:50,
                    name:'刘老三',
                    idCardType:'居民身份证',
                    effectiveDate:"2019-5-5",
                    demurrageFee:20,
                    cardState:"启用",
                    idCard:"343847389473893442",
                    borrowNum:10
                }
            }
        }
    }
</script>

<style scoped>
    .headIcon{
        width: 130px;
        height: 180px;
        background-color: #DADADA;
        margin-right: 30px;
    }
    p{
        color: #2a2a2a;
        height: 45px;
        line-height: 40px;
        font-size: 15px;
        width: 250px;
    }
    span{
        color: #12B494;
    }
</style>
