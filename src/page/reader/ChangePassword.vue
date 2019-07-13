<template>
    <div id="changePassword" class="zyfPage ReaderCenter">
        <div class="title flexLayoutRow" style="width: 85px">
            <img :src="titleIcon" class="titleImg">
            <div class="titleFont">修改密码</div>
        </div>
        <div class="formStyle">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                <el-form-item label="原密码：" prop="passWord">
                    <el-input v-model="ruleForm.passWord"></el-input>
                </el-form-item>
                <el-form-item label="新密码：" prop="newPassWord">
                    <el-input v-model="ruleForm.newPassWord"></el-input>
                </el-form-item>
                <el-form-item label="新密码确认：" prop="confirmPassWord">
                    <el-input v-model="ruleForm.confirmPassWord"></el-input>
                </el-form-item>
                <el-form-item label-width="390px">
                    <el-button type="primary" @click="submitForm('ruleForm')">确 &nbsp; 认</el-button>
                    <el-button type="info" @click="resetForm('ruleForm')">重 &nbsp; 置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="placeHolderFont">* 温馨提示：建议密码设置为纯数字，已兼容短信服务﹑电话续借和自动借还终端密码输入</div>
        <el-dialog
                :visible.sync="dialogVisible"
                width="10%"
                :before-close="handleClose">
            <span>密码修改成功！</span>
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
                    passWord:"",//原密码
                    newPassWord:'',//新密码
                    confirmPassWord:''//新密码确认
                },
                rules: {
                    passWord: [
                        { required: true, message: '原密码不能为空', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    newPassWord: [
                        { required: true, message: '新密码不能为空', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    confirmPassWord: [
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
    .placeHolderFont{
        color: red;
        width: 640px;
        margin-left: 200px;
    }
</style>
