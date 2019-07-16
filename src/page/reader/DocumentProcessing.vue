<template>
    <div id="documentProcessing" class="zyfPage ReaderCenter">
        <div class="title flexLayoutRow" style="width: 120px">
            <img :src="titleIcon" class="titleImg">
            <div class="titleFont">证件挂失/恢复</div>
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
                <p>有效日期： <span>{{readerInfo.effectiveDate}}</span></p>
            </div>
        </div>
        <div class="processing flexLayoutColumn">
            <el-button type="primary" @click="dialogVisible = true">挂 &nbsp; &nbsp; 失</el-button>
            <p style="width: 500px">* 读者卡遗失时,可在此办理挂失,以确保您的合法权益不受侵害</p>
        </div>
        <!--弹窗-->
        <el-dialog
                :visible.sync="dialogVisible"
                width="10%"
                :before-close="handleClose">
            <span>挂失成功！</span>
        </el-dialog>
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
                    effectiveDate:"2019-5-5",
                },
                dialogVisible: false
            }
        },
        methods:{
            handleClose(done) {
                this.dialogVisible=false
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
    .processing p{
        color: red;
        margin-top: 10px;
    }
</style>
