<template>
    <div class="zyfPage outerDiv flexLayoutColumn haveTablePage">
        <div class="flexLayoutRow title">
            <img :src="titleIcon" class="titleImg">
            <div  class="titleFont">新书通报</div>
        </div>
        <el-form label-width="80px" :model="formLabelAlign" class="flexLayoutRow" style="width:870px">
            <el-form-item label="分馆筛选 :">
                <el-select v-model="formLabelAlign.BranchScreening" placeholder="请选择活动区域">
                    <el-option label="夔牛图书馆" value="夔牛图书馆"></el-option>
                    <el-option label="重庆图书馆" value="重庆图书馆"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="文献类别 :">
                <el-select v-model="formLabelAlign.CategoriesDocuments" placeholder="请选择活动区域">
                    <el-option label="图书" value="图书"></el-option>
                    <el-option label="期刊" value="期刊"></el-option>
                    <el-option label="古籍" value="古籍"></el-option>
                    <el-option label="音像" value="音像"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="时间范围 :">
                <el-select v-model="formLabelAlign.TimeFrame" placeholder="请选择活动区域">
                    <el-option label="最近一周" value="最近一周"></el-option>
                    <el-option label="最近一个月" value="最近一个月"></el-option>
                    <el-option label="最近三个月" value="最近三个月"></el-option>
                    <el-option label="最近六个月" value="最近六个月"></el-option>
                </el-select>
            </el-form-item>
            <span class="serchBtn">搜索</span>
        </el-form>
        <el-table
                :data="tableData"
                style="width: 100%"
                height="250">
            <el-table-column
                    prop="name"
                    label="书名">
            </el-table-column>
            <el-table-column
                    prop="author"
                    label="作者">
            </el-table-column>
            <el-table-column
                    prop="publish"
                    label="出版社">
            </el-table-column>
            <el-table-column
                    prop="pageNum"
                    label="页码">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="价格">
            </el-table-column>
            <el-table-column
                    prop="indexNum"
                    label="索取号">
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                formLabelAlign:{
                    BranchScreening:'',//分馆筛选
                    CategoriesDocuments:'',//文献类别
                    TimeFrame:''//时间范围
                },
                titleIcon:require('../../common/img/borrowIcon/newBook.png'),
                tableData:[
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',pageNum:250,price:50,indexNum:'1111pppaaaa'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',pageNum:250,price:50,indexNum:'1111pppaaaa'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',pageNum:250,price:50,indexNum:'1111pppaaaa'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',pageNum:250,price:50,indexNum:'1111pppaaaa'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',pageNum:250,price:50,indexNum:'1111pppaaaa'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',pageNum:250,price:50,indexNum:'1111pppaaaa'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',pageNum:250,price:50,indexNum:'1111pppaaaa'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',pageNum:250,price:50,indexNum:'1111pppaaaa'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',pageNum:250,price:50,indexNum:'1111pppaaaa'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',pageNum:250,price:50,indexNum:'1111pppaaaa'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',pageNum:250,price:50,indexNum:'1111pppaaaa'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',pageNum:250,price:50,indexNum:'1111pppaaaa'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',pageNum:250,price:50,indexNum:'1111pppaaaa'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',pageNum:250,price:50,indexNum:'1111pppaaaa'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',pageNum:250,price:50,indexNum:'1111pppaaaa'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',pageNum:250,price:50,indexNum:'1111pppaaaa'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',pageNum:250,price:50,indexNum:'1111pppaaaa'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',pageNum:250,price:50,indexNum:'1111pppaaaa'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',pageNum:250,price:50,indexNum:'1111pppaaaa'},
                    {name:"红楼梦",author:"曹雪芹",publish:'重庆夔牛出版社',pageNum:250,price:50,indexNum:'1111pppaaaa'},
                ]

            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    .title{
        width:85px;
        margin-bottom: 20px;
    }
    .titleImg{
        width: 16px;
        height: 16px;
    }
    .titleFont{
        color: #12B494;
        font-size:16px
    }
    .serchBtn{
        height: 30px;
        width: 60px;
        line-height: 30px;
        background-color: #12B494;
        color: white;
        margin-top:5px;
        border-radius: 3px;
        margin-left: 10px;
        font-size: 15px;
        text-align: center;
    }
</style>

