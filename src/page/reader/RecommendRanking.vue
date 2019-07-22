<template>
    <div id="BookRenewal" class="zyfPage ReaderCenter haveTablePage">
        <div class="flexLayoutRow">
            <div class="title flexLayoutRow">
                <img :src="titleIcon" class="titleImg">
                <div class="titleFont">荐购排行</div>
            </div>
            <div></div>
        </div>

        <div class="flexLayoutRow">
            <el-form ref="form" :model="form" label-width="120px" class="flexLayoutRow">
                <el-form-item label="按时间筛选：">
                    <el-select v-model="form.time">
                        <el-option label="最近一周" value="最近一周"></el-option>
                        <el-option label="最近一个月" value="最近一个月"></el-option>
                        <el-option label="最近三个月" value="最近三个月"></el-option>
                        <el-option label="最近六个月" value="最近六个月"></el-option>
                    </el-select>
                </el-form-item>
                <span class="serchBtn">搜索</span>
            </el-form>
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
                        label="出版时间">
                </el-table-column>
                <el-table-column
                        prop="num"
                        label="荐购次数">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                dialogVisible:false,
                titleIcon:require('../../common/img/readerIcon/BasicInfo.png'),
                pageNum:'',//跳转的页数
                form:{
                    time:''//按时间筛选
                },
                tableData:[
                    {name:"红楼梦",author:"曹雪芹",isbn:'5465465656656',time:"2019-09-09",num:5},
                    {name:"红楼梦",author:"曹雪芹",isbn:'5465465656656',time:"2019-09-09",num:5},
                    {name:"红楼梦",author:"曹雪芹",isbn:'5465465656656',time:"2019-09-09",num:5},
                    {name:"红楼梦",author:"曹雪芹",isbn:'5465465656656',time:"2019-09-09",num:5},
                    {name:"红楼梦",author:"曹雪芹",isbn:'5465465656656',time:"2019-09-09",num:5},
                    {name:"红楼梦",author:"曹雪芹",isbn:'5465465656656',time:"2019-09-09",num:5},
                    {name:"红楼梦",author:"曹雪芹",isbn:'5465465656656',time:"2019-09-09",num:5},
                    {name:"红楼梦",author:"曹雪芹",isbn:'5465465656656',time:"2019-09-09",num:5},
                    {name:"红楼梦",author:"曹雪芹",isbn:'5465465656656',time:"2019-09-09",num:5},
                    {name:"红楼梦",author:"曹雪芹",isbn:'5465465656656',time:"2019-09-09",num:5},
                    {name:"红楼梦",author:"曹雪芹",isbn:'5465465656656',time:"2019-09-09",num:5},
                    {name:"红楼梦",author:"曹雪芹",isbn:'5465465656656',time:"2019-09-09",num:5},
                    {name:"红楼梦",author:"曹雪芹",isbn:'5465465656656',time:"2019-09-09",num:5},
                    {name:"红楼梦",author:"曹雪芹",isbn:'5465465656656',time:"2019-09-09",num:5},
                ]
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    .pagingDiv{
        margin-top: 15px;
    }
    span{
        color: #12B494;
    }
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
