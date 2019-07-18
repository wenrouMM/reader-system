<template>
    <div id="MyCollection" class="ReaderCenter zyfPage haveTablePage">
        <div class="flexLayoutRow">
            <div class="title flexLayoutRow">
                <img :src="titleIcon" class="titleImg">
                <div class="titleFont">我的收藏</div>
            </div>
            <div></div>
        </div>

        <el-form label-width="80px" :model="formLabelAlign" class="flexLayoutRow" >
            <el-form-item label="书名：">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="作者：">
                <el-input v-model="formLabelAlign.author"></el-input>
            </el-form-item>
            <el-form-item label="ISBN：">
                <el-input v-model="formLabelAlign.isbn"></el-input>
            </el-form-item>
            <span class="serchBtn">搜索</span>
        </el-form>
        <div class="flexLayoutRow">
            <div></div>
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
                        prop="isbn"
                        label="ISBN">
                </el-table-column>
                <el-table-column
                        label="操作">
                    <template slot-scope="scope">
                        <el-button @click="deleteCollection(scope.row)" type="text" size="small">删除收藏</el-button>
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
                formLabelAlign:{
                    name:'',//书名
                    author:'',//作者
                    isbn:''//Isbn
                },
                pageNum:'',//跳转的页数
                tableData:[
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',isbn:"456456345345"},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',isbn:"456456345345"},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',isbn:"456456345345"},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',isbn:"456456345345"},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',isbn:"456456345345"},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',isbn:"456456345345"},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',isbn:"456456345345"},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',isbn:"456456345345"},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',isbn:"456456345345"},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',isbn:"456456345345"},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',isbn:"456456345345"},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',isbn:"456456345345"},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',isbn:"456456345345"},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',isbn:"456456345345"},
                ]
            }
        },
        methods:{
            deleteCollection(){
                //删除收藏
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
