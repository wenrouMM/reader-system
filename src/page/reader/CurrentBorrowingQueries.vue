<template>
    <div id="CurrentBorrowing" class="ReaderCenter zyfPage haveTablePage">
        <div class="title flexLayoutRow" style="width: 115px">
            <img :src="titleIcon" class="titleImg">
            <div class="titleFont">当前借阅查询</div>
        </div>
        <div class="flexLayoutRow">
            <el-form :model="ruleForm" status-icon  class="demo-ruleForm flexLayoutRow" style="height: 35px">
                <el-form-item label="活动时间：" label-width="85px" class="dateInput">
                    <el-date-picker type="date" placeholder="开始时间" v-model="ruleForm.startTime"></el-date-picker>
                    <span style="padding:0px 5px 0px 2px">-</span>
                    <el-date-picker type="date" placeholder="结束时间" v-model="ruleForm.endTime"></el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="ruleForm.bookName" placeholder="请输入书名" class="textInput"></el-input>
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
                        label="出版社">
                </el-table-column>
                <el-table-column
                        prop="startTime"
                        label="借阅开始时间">
                </el-table-column>
                <el-table-column
                        prop="endTime"
                        label="借阅归还时间">
                </el-table-column>
                <el-table-column
                        label="状态"
                        prop="state">
                    <template slot-scope="scope">
                        <span v-if="scope.row.state=='续借成功'" style="color: #12B457">续借成功</span>
                        <span v-if="scope.row.state=='续借失败'" style="color: #FF3B31">续借失败</span>
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
                    bookName:''//书名
                },
                tableData:[
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'续借成功'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'续借失败'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'续借成功'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'续借失败'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'续借成功'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'续借失败'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'续借成功'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'续借成功'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'续借失败'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'续借成功'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'续借失败'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'续借成功'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'续借失败'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12',state:'续借成功'},
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
