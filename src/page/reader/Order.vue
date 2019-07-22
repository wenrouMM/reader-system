<template>
    <div id="OrderPage" class="ReaderCenter zyfPage haveTablePage">
        <div class="flexLayoutRow">
            <div class="title flexLayoutRow">
                <img :src="titleIcon" class="titleImg">
                <div class="titleFont">征订荐购</div>
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
                        prop="isbn"
                        label="ISBN">
                </el-table-column>
                <el-table-column
                        prop="orderNum"
                        label="荐购次数">
                </el-table-column>
                <el-table-column
                        label="操作">
                    <template slot-scope="scope">
                        <el-button @click="orderBtn(scope.row)" type="text" size="small">荐购</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog
                :visible.sync="dialogVisible"
                width="27%"
                title="荐购理由"
                :before-close="handleClose">
            <div class="">
                <el-input
                        type="textarea"
                        :rows="8"
                        resize="none"
                        v-model="orderAccount">
                </el-input>
                <div class="flexLayoutRow messageBtn">
                    <span style="background-color: #12B494">确 &nbsp; 定</span>
                    <span style="background-color: #b7b7b7">取 &nbsp; 消</span>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                orderAccount:'',//荐购理由
                dialogVisible:false,
                titleIcon:require('../../common/img/borrowIcon/newBook.png'),
                formLabelAlign:{
                    name:'',//书名
                    author:'',//作者
                    isbn:''//Isbn
                },
                pageNum:'',//跳转的页数
                tableData:[
                    {name:"红楼梦",author:"曹雪芹",isbn:"456456345345",orderNum:4},
                    {name:"红楼梦",author:"曹雪芹",isbn:"456456345345",orderNum:4},
                    {name:"红楼梦",author:"曹雪芹",isbn:"456456345345",orderNum:4},
                    {name:"红楼梦",author:"曹雪芹",isbn:"456456345345",orderNum:4},
                    {name:"红楼梦",author:"曹雪芹",isbn:"456456345345",orderNum:4},
                    {name:"红楼梦",author:"曹雪芹",isbn:"456456345345",orderNum:4},
                    {name:"红楼梦",author:"曹雪芹",isbn:"456456345345",orderNum:4},
                    {name:"红楼梦",author:"曹雪芹",isbn:"456456345345",orderNum:4},
                    {name:"红楼梦",author:"曹雪芹",isbn:"456456345345",orderNum:4},
                    {name:"红楼梦",author:"曹雪芹",isbn:"456456345345",orderNum:4},
                    {name:"红楼梦",author:"曹雪芹",isbn:"456456345345",orderNum:4},
                    {name:"红楼梦",author:"曹雪芹",isbn:"456456345345",orderNum:4},
                    {name:"红楼梦",author:"曹雪芹",isbn:"456456345345",orderNum:4},
                    {name:"红楼梦",author:"曹雪芹",isbn:"456456345345",orderNum:4},
                ]
            }
        },
        methods:{
            handleClose(){
                this.dialogVisible=false
            },
            orderBtn(){
                //荐购操作
                this.dialogVisible=true
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
    .messageBtn{
        width: 310px;
        margin: 30px auto 10px;
    }
    .messageBtn span{
        width: 130px;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        color: white;
        font-size: 15px;
        cursor: default;
    }
</style>
