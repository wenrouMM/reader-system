<template>
    <div id="HistoryLoanEnquiry" class="ReaderCenter zyfPage haveTablePage">
        <div class="flexLayoutRow">
            <div class="title flexLayoutRow">
                <img :src="titleIcon" class="titleImg">
                <div class="titleFont">财务查询</div>
            </div>
            <div></div>
        </div>

        <div class="flexLayoutRow">
            <el-form :model="ruleForm" status-icon  class="demo-ruleForm flexLayoutRow" style="height: 35px">
                <el-form-item label="起始时间：" label-width="110px" class="dateInput">
                    <el-date-picker type="date" placeholder="开始时间" v-model="ruleForm.startTime"></el-date-picker>
                    <span style="padding:0px 5px 0px 2px">-</span>
                    <el-date-picker type="date" placeholder="结束时间" v-model="ruleForm.endTime"></el-date-picker>
                </el-form-item>
                <span class="serchBtn">搜索</span>
            </el-form>
            <div class="flexLayoutRow pagingDiv pagingBut" style="margin-top: 15px">
                <el-button plain>首页</el-button>
                <el-button plain>上一页</el-button>
                <el-button plain>下一页</el-button>
                <el-button plain>尾页</el-button>
                <input type="text" class="pageInput" v-model="pageNum">
                <el-button plain>跳转</el-button>
            </div>
        </div>
        <div style="margin-top: 5px" class="tableStyle">
            <el-table
                    :data="tableData"
                    style="width: 100%"
            >
                <el-table-column
                        prop="time"
                        label="时间">
                </el-table-column>
                <el-table-column
                        prop="consCategory"
                        label="消费类别">
                </el-table-column>
                <el-table-column
                        prop="transactions"
                        label="交易方式">
                </el-table-column>
                <el-table-column
                        prop="affMuseum"
                        label="经费所属馆">
                </el-table-column>
                <el-table-column
                        label="金额"
                        prop="money">
                    <template slot-scope="scope">
                        <span>{{scope.row.money}}元</span>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                titleIcon:require('../../common/img/borrowIcon/newBook.png'),
                ruleForm:{
                    startTime:'',//开始时间
                    endTime:'',//结束时间
                },
                pageNum:'',//跳转的页数
                tableData:[
                    {time:"2019-09-09",consCategory:"购买书籍",transactions:"微信支付",affMuseum:'夔牛图书馆',money:56},
                    {time:"2019-09-09",consCategory:"购买书籍",transactions:"微信支付",affMuseum:'夔牛图书馆',money:56},
                    {time:"2019-09-09",consCategory:"购买书籍",transactions:"微信支付",affMuseum:'夔牛图书馆',money:56},
                    {time:"2019-09-09",consCategory:"购买书籍",transactions:"微信支付",affMuseum:'夔牛图书馆',money:56},
                    {time:"2019-09-09",consCategory:"购买书籍",transactions:"微信支付",affMuseum:'夔牛图书馆',money:56},
                    {time:"2019-09-09",consCategory:"购买书籍",transactions:"微信支付",affMuseum:'夔牛图书馆',money:56},
                    {time:"2019-09-09",consCategory:"购买书籍",transactions:"微信支付",affMuseum:'夔牛图书馆',money:56},
                    {time:"2019-09-09",consCategory:"购买书籍",transactions:"微信支付",affMuseum:'夔牛图书馆',money:56},
                    {time:"2019-09-09",consCategory:"购买书籍",transactions:"微信支付",affMuseum:'夔牛图书馆',money:56},
                    {time:"2019-09-09",consCategory:"购买书籍",transactions:"微信支付",affMuseum:'夔牛图书馆',money:56},
                    {time:"2019-09-09",consCategory:"购买书籍",transactions:"微信支付",affMuseum:'夔牛图书馆',money:56},
                    {time:"2019-09-09",consCategory:"购买书籍",transactions:"微信支付",affMuseum:'夔牛图书馆',money:56},
                    {time:"2019-09-09",consCategory:"购买书籍",transactions:"微信支付",affMuseum:'夔牛图书馆',money:56},
                ]
            }
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
