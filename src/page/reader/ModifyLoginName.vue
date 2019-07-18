<template>
    <div id="changePassword" class="zyfPage ReaderCenter">
        <div class="flexLayoutRow">
            <div class="title flexLayoutRow">
                <img :src="titleIcon" class="titleImg">
                <div class="titleFont">修改登录名</div>
            </div>
            <div></div>
        </div>

        <div class="formStyle">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
                <el-form-item label="当前登录名：" prop="name">
                    <span>{{ruleForm.name}}</span>
                </el-form-item>
                <el-form-item label="新的登录名：" prop="newName">
                    <el-input v-model="ruleForm.newName"></el-input>
                </el-form-item>
                <el-form-item label="新登录名确认：" prop="confirmName">
                    <el-input v-model="ruleForm.confirmName"></el-input>
                </el-form-item>
                <el-form-item label-width="390px">
                    <el-button type="primary" @click="submitForm('ruleForm')">确 &nbsp; 认</el-button>
                    <el-button type="info" @click="resetForm('ruleForm')">重 &nbsp; 置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="placeholderFont">* 温馨提示：登录名是6-18个字符，可使用字母﹑数字﹑下划线，需已字母开头</div>
        <el-dialog
                :visible.sync="dialogVisible"
                width="10%"
                :before-close="handleClose">
            <span>登录名修改成功！</span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                dialogVisible:false,
                titleIcon:require('../../common/img/readerIcon/BasicInfo.png'),
                ruleForm:{
                    name:"张三",//当前登录名
                    newName:'',//新的登录名
                    confirmName:''//新登录名确认
                },
                rules: {
                    name: [
                        { required: true, message: '原密码不能为空', trigger: 'blur' },
                    ],
                    newName: [
                        { required: true, message: '新密码不能为空', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    confirmName: [
                        { required: true, message: '确认密码不能为空', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                },
            }
        },
        methods:{
            handleClose(done) {
                this.dialogVisible=false
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.dialogVisible=true
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                for(const i in this.ruleForm){
                    this.ruleForm[i]=""
                }
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .formStyle{
        width: 700px;
        margin: 40px auto 30px;
    }
    span{
        color: #12B494;
    }
    .placeholderFont{
        color: #FF3B31;
        width: 630px;
        margin-left: 270px;
    }
</style>
