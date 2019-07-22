<template>
    <div id="BookRenewal" class="zyfPage ReaderCenter haveTablePage">
        <div class="flexLayoutRow">
            <div class="title flexLayoutRow">
                <img :src="titleIcon" class="titleImg">
                <div class="titleFont">修改密码</div>
            </div>
            <div></div>
        </div>
        <div class="flexLayoutRow">
            <div></div>
            <div class="flexLayoutRow pagingDiv pagingBut">
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
                        label="操作">
                    <template slot-scope="scope">
                        <el-button @click="renewalBtn(scope.row)" type="text" size="small">续借</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog
                :visible.sync="dialogVisible"
                width="10%"
                :before-close="handleClose">
            <span>图书续借成功！</span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                dialogVisible:false,
                titleIcon:require('../../common/img/readerIcon/BasicInfo.png'),
                pageNum:'',//跳转的页数
                tableData:[
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',startTime:"2019-09-09",endTime:'2019-12-12'},
                ]
            }
        },
        methods:{
            //续借按钮
            renewalBtn(){
                this.dialogVisible=true
            },
            handleClose(){
                this.dialogVisible=false
            }
        }
    }
</script>

<style scoped>
    .pagingDiv{

    }
    span{
        color: #12B494;
    }
</style>
