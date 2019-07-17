<template>
    <div id="ReaderRecommendation" class="zyfPage ReaderCenter">
        <div class="flexLayoutRow" style="margin-bottom: 10px">
            <div class="title flexLayoutRow">
                <img :src="titleIcon" class="titleImg">
                <div class="titleFont">读者自荐</div>
            </div>
            <div></div>
        </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <div class="flexLayoutRow">
                <div class="flexLayoutColumn">
                    <el-form-item label="书名：" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="作者：" prop="author">
                        <el-input v-model="ruleForm.author"></el-input>
                    </el-form-item>
                    <el-form-item label="出版社：">
                        <el-input v-model="ruleForm.publish"></el-input>
                    </el-form-item>
                    <el-form-item label="分类号：">
                        <el-input v-model="ruleForm.classifyNum"></el-input>
                    </el-form-item>
                </div>
                <div class="flexLayoutColumn">
                    <el-form-item label="文献类型：">
                        <el-input v-model="ruleForm.type"></el-input>
                    </el-form-item>
                    <el-form-item label="ISBN：" prop="isbn">
                        <el-input v-model="ruleForm.isbn"></el-input>
                    </el-form-item>
                    <el-form-item label="出版时间：" prop="time">
                        <el-input v-model="ruleForm.time"></el-input>
                    </el-form-item>
                    <el-form-item label="价格：">
                        <el-input v-model="ruleForm.price"></el-input>
                    </el-form-item>
                </div>
            </div>
            <div class="reasonInput">
                <el-form-item label="荐购理由：">
                    <el-input type="textarea" :rows="8" resize="none" v-model="ruleForm.reason"></el-input>
                </el-form-item>
            </div>

            <el-form-item label-width="695px">
                    <el-button type="primary" @click="submitForm('ruleForm')">确 &nbsp; 认</el-button>
                    <el-button type="info" @click="resetForm('ruleForm')">重 &nbsp; 置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                titleIcon:require('../../common/img/readerIcon/BasicInfo.png'),
                ruleForm:{
                    name:'',//书名
                    author:'',//作者
                    publish:'',//出版社
                    classifyNum:'',//分类号
                    type:'',//文献类别
                    isbn:'',//isbn
                    time:'',//出版时间
                    price:'',//价格
                    reason:''//荐构理由
                },
                rules: {
                    name: [{ required: true, message: '请输入书名', trigger: 'blur' }],
                    author:[{required:true,message:'请输入作者名',trigger:'blur'}],
                    isbn:[{required:true,message:'请输入ISBN',trigger:'blur'}],
                    time:[{required:true,message:'请输入出版时间',trigger:'blue'}],
                }
            }
        },
        methods:{
            //表单确认按钮
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            //表单重置按钮
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .headIcon{
        width: 130px;
        height: 180px;
        background-color: #DADADA;
        margin-right: 70px;
    }
    p{
        color: #2a2a2a;
        height: 45px;
        line-height: 40px;
        font-size: 15px;
        width: 300px;
    }
    span{
        color: #12B494;
    }
</style>
