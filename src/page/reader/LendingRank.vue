<template>
    <div id="lendingRank">
        <div class="outerDiv flexLayoutColumn">
            <div class="flexLayoutRow">
                <div style="width: 18px;height: 18px;background-color: red"></div>
                <div style="color: #12B494;font-size:18px">借阅排行</div>
            </div>
            <el-form label-width="80px" :model="formLabelAlign">
                <el-form-item label="名称">
                    <el-input v-model="formLabelAlign.BranchScreening"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-input v-model="formLabelAlign.region"></el-input>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input v-model="formLabelAlign.type"></el-input>
                </el-form-item>
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

                },


            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    #lendingRank .outerDiv div:nth-child(1){
        width: 100px;
    }

</style>
