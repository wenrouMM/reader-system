<template>
    <div id="lendingRank">
        <div class="outerDiv flexLayoutColumn">
            <div class="flexLayoutRow title">
                <div style="width: 18px;height: 18px;background-color: red"></div>
                <div style="color: #12B494;font-size:18px">借阅排行</div>
            </div>
            <el-form label-width="80px" :model="formLabelAlign" class="flexLayoutRow" style="width:930px">
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

        </div>
    </div>
</template>

<script>
    export default {
        name: "LendingRank",
        data(){
            return{
                formLabelAlign:{
                    BranchScreening:'',//分馆筛选
                    CategoriesDocuments:'',//文献类别
                    TimeFrame:''//时间范围
                },


            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    .title{
        width:100px;
        margin-bottom: 20px;
    }
    .serchBtn{
        height: 35px;
        width: 60px;
        line-height: 35px;
        background-color: #12B494;
        color: white;
        margin-top: 3px;
        border-radius: 3px;
        margin-left: 10px;
        font-size: 15px;
    }
</style>
