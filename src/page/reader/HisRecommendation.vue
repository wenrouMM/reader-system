<template>
    <div id="BookRenewal" class="zyfPage ReaderCenter haveTablePage">
        <div class="flexLayoutRow">
            <div class="title flexLayoutRow">
                <img :src="titleIcon" class="titleImg">
                <div class="titleFont">历史荐购</div>
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
                        prop="isbn"
                        label="ISBN">
                </el-table-column>
                <el-table-column
                        prop="time"
                        label="荐购时间">
                </el-table-column>
                <el-table-column
                        prop="account"
                        label="荐购理由">
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
                    {name:"红楼梦",author:"曹雪芹",isbn:'4134321231352',time:"2019-09-09",account:'具有时代代表性'},
                    {name:"红楼梦",author:"曹雪芹",isbn:'4134321231352',time:"2019-09-09",account:'具有时代代表性'},
                    {name:"红楼梦",author:"曹雪芹",isbn:'4134321231352',time:"2019-09-09",account:'具有时代代表性'},
                    {name:"红楼梦",author:"曹雪芹",isbn:'4134321231352',time:"2019-09-09",account:'具有时代代表性'},
                    {name:"红楼梦",author:"曹雪芹",isbn:'4134321231352',time:"2019-09-09",account:'具有时代代表性'},
                    {name:"红楼梦",author:"曹雪芹",isbn:'4134321231352',time:"2019-09-09",account:'具有时代代表性'},
                    {name:"红楼梦",author:"曹雪芹",isbn:'4134321231352',time:"2019-09-09",account:'具有时代代表性'},
                    {name:"红楼梦",author:"曹雪芹",isbn:'4134321231352',time:"2019-09-09",account:'具有时代代表性'},
                    {name:"红楼梦",author:"曹雪芹",isbn:'4134321231352',time:"2019-09-09",account:'具有时代代表性'},
                    {name:"红楼梦",author:"曹雪芹",isbn:'4134321231352',time:"2019-09-09",account:'具有时代代表性'},
                    {name:"红楼梦",author:"曹雪芹",isbn:'4134321231352',time:"2019-09-09",account:'具有时代代表性'},
                    {name:"红楼梦",author:"曹雪芹",isbn:'4134321231352',time:"2019-09-09",account:'具有时代代表性'},
                    {name:"红楼梦",author:"曹雪芹",isbn:'4134321231352',time:"2019-09-09",account:'具有时代代表性'},
                    {name:"红楼梦",author:"曹雪芹",isbn:'4134321231352',time:"2019-09-09",account:'具有时代代表性'},
                ]
            }
        },
        methods:{
            //续借按钮
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
