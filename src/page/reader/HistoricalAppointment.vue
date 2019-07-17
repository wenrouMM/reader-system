<template>
    <div id="HistoryLoanEnquiry" class="ReaderCenter zyfPage haveTablePage">
        <div class="flexLayoutRow">
            <div class="title flexLayoutRow">
                <img :src="titleIcon" class="titleImg">
                <div class="titleFont">历史借阅查询</div>
            </div>
            <div></div>
        </div>

        <div class="flexLayoutRow">
            <el-form :model="ruleForm" status-icon  class="demo-ruleForm flexLayoutRow" style="height: 35px">
                <el-form-item label="登记日期：" label-width="110px" class="dateInput">
                    <el-date-picker type="date" v-model="ruleForm.startTime"></el-date-picker>
                </el-form-item>
                <el-form-item  label="取书日期：" label-width="110px" class="dateInput">
                    <el-date-picker type="date" v-model="ruleForm.endTime"></el-date-picker>
                </el-form-item>
                <span class="serchBtn">搜索</span>
            </el-form>
            <div class="flexLayoutRow pagingDiv pagingBut" style="margin-top: 10px">
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
                        prop="name"
                        label="书名">
                </el-table-column>
                <el-table-column
                        prop="author"
                        label="著作者">
                </el-table-column>
                <el-table-column
                        prop="publish"
                        label="取书馆">
                </el-table-column>
                <el-table-column
                        prop="startTime"
                        label="预约登记日期">
                </el-table-column>
                <el-table-column
                        prop="endTime"
                        label="最迟取书日期">
                </el-table-column>
                <el-table-column
                        label="状态"
                        prop="state">
                </el-table-column>
                <el-table-column
                        label="取书人"
                        prop="receptionist">
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
                    startTime:'',//登记日期
                    endTime:'',//取书日期
                },
                pageNum:'',//跳转的页数
                tableData:[
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'已取',receptionist:'张倩怡'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'已取',receptionist:'张倩怡'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'已取',receptionist:'张倩怡'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'已取',receptionist:'张倩怡'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'已取',receptionist:'张倩怡'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'已取',receptionist:'张倩怡'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'已取',receptionist:'张倩怡'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'已取',receptionist:'张倩怡'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'已取',receptionist:'张倩怡'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'已取',receptionist:'张倩怡'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'已取',receptionist:'张倩怡'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'已取',receptionist:'张倩怡'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'已取',receptionist:'张倩怡'},
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
