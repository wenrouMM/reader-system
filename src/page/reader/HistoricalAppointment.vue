<template>
    <div id="HistoryLoanEnquiry" class="ReaderCenter zyfPage haveTablePage">
        <div class="flexLayoutRow">
            <div class="title flexLayoutRow">
                <img :src="titleIcon" class="titleImg">
                <div class="titleFont">历史借阅查询</div>
            </div>
            <div></div>
        </div>

        <div class="flexLayoutColumn">
            <div class="flexLayoutRow">
                <div></div>
                <el-form :model="ruleForm" status-icon  class="demo-ruleForm flexLayoutRow" style="height: 35px">
                    <el-form-item label="登记日期：" label-width="110px" class="dateInput">
                        <el-date-picker type="date" v-model="ruleForm.startTime"></el-date-picker>
                    </el-form-item>
                    <el-form-item  label="取书日期：" label-width="110px" class="dateInput">
                        <el-date-picker type="date" v-model="ruleForm.endTime"></el-date-picker>
                    </el-form-item>
                    <span class="serchBtn">搜索</span>
                </el-form>
            </div>
            <div class="flexLayoutRow">
                <div></div>
                <div class="flexLayoutRow pagingDiv pagingBut" style="margin-top: 15px">
                    <el-button plain @click="homePageBtn">首页</el-button>
                    <el-button plain @click="previousPageBtn">上一页</el-button>
                    <el-button plain @click="nextPageBtn">下一页</el-button>
                    <el-button plain @click="lastPageBtn">尾页</el-button>
                    <input type="text" class="pageInput" v-model="currentPage">
                    <el-button plain @click="jumpBtn">跳转</el-button>
                </div>
            </div>

        </div>
        <div style="margin-top: 5px" class="tableStyle">
            <el-table
                    :data="tableData"
                    style="width: 100%"
            >
                <el-table-column
                        prop="fkBookName"
                        :show-overflow-tooltip="true"
                        label="书名">
                </el-table-column>
                <el-table-column
                        prop="fkBookAuthor"
                        :show-overflow-tooltip="true"
                        label="著作者">
                </el-table-column>
                <el-table-column
                        prop="fkLibraryName"
                        :show-overflow-tooltip="true"
                        label="取书馆">
                </el-table-column>
                <el-table-column
                        prop="subscribeEfficientTime"
                        :show-overflow-tooltip="true"
                        label="预约生效时间">
                    <template slot-scope="scope">
                        <span>{{scope.row.subscribeEfficientTime == null || scope.row.subscribeEfficientTime=='' ?'---':scope.row.subscribeEfficientTime}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="subscribeEndTime"
                        :show-overflow-tooltip="true"
                        label="预约结束时间">
                </el-table-column>
                <el-table-column
                        label="状态"
                        prop="state">
                    <template slot-scope="scope">
                        <span>{{scope.row.state == 0?'成功':'失败'}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        label="读者名称"
                        :show-overflow-tooltip="true"
                        prop="fkReaderName">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import {hisSubscribeFun} from '@/request/api/readerCenter'
    export default {
        data(){
            return {
                titleIcon:require('../../common/img/borrowIcon/newBook.png'),
                ruleForm:{
                    startTime:'',//登记日期
                    endTime:'',//取书日期
                },
                currentPage:1,
                pageSize:13,
                Total:0,
                tableData:[]
            }
        },
        methods:{
            searchApi(){
                hisSubscribeFun(
                    this.pageSize,
                    this.currentPage
                ).then((res)=>{
                    console.log('查询历史预约记录返回的数据',res)
                    if(res.data.state==true){
                        this.tableData=res.data.row;
                        this.Total=res.data.total
                    }else{
                        this.$message.error(res.data.msg);
                    }
                })
            },
            //首页跳转按钮
            homePageBtn(){
                this.currentPage=1
                this.searchApi(this.currentPage)
            },
            //尾页跳转按钮
            lastPageBtn(){
                if(this.Total>13){
                    this.currentPage=Math.ceil(this.Total/13)
                }else{
                    this.currentPage=1
                }
                this.searchApi(this.currentPage)
            },
            //上一页跳转按钮
            previousPageBtn(){
                if(this.currentPage==1){
                    return
                }else{
                    this.currentPage--;
                    this.searchApi(this.currentPage)
                }
            },
            //下一页跳转按钮
            nextPageBtn(){
                console.log(this.currentPage)
                console.log(Math.ceil(this.Total/13))
                if(this.currentPage===Math.ceil(this.Total/13)){
                    console.log('页面不进行跳转')
                }else{
                    this.currentPage++;
                    this.searchApi(this.currentPage)
                }

            },
            //依据页码跳转的按钮
            jumpBtn(){
                this.searchApi(this.currentPage)
            },
        },
        created(){
            this.searchApi()
        }
    }
</script>

<style scoped>
    .serchBtn{
        height: 30px;
        width: 60px;
        line-height: 30px;
        background-color: #12B494;
        color: white;
        margin-top:5px;
        border-radius: 3px;
        margin-left: 5px;
        font-size: 15px;
        text-align: center;
    }
</style>
