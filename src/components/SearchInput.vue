<template>
  <div id="searchInput">
    
    
    
    <!-- 搜索框 -->
    
      <el-input @blur="blurVali" placeholder="请输入搜索内容" v-model="search" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option v-for="(item,index) of optionsArr" :key="index" :label="item.label" :value="item.value"></el-option>
          
        </el-select>
        <el-button @click="searchBtn" slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <p v-if="isPlay" class="tips">
        {{tips}}
      </p>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      select:"",
      tips:'搜索条件不得为空',
      isPlay:false,
      optionsArr:[{
        label:'任意词',
        value:'1'
      },{
        label:'ISBN',
        value:'2'
      },{
        label:'控制号',
        value:'3'
      },{
        label:'题号',
        value:'4'
      },{
        label:'作者',
        value:'5'
      },{
        label:'主题',
        value:'6'
      },{
        label:'分类号',
        value:'7'
      },{
        label:'索取号',
        value:'8'
      },{
        label:'出版社',
        value:'9'
      },{
        label:'出版年',
        value:'10'
      },]
    };
  },
  computed: {
    searchTimeForm(){

    }
  },
  methods:{
    blurVali(){
      let value = this.search
      if(value){
        this.isPlay = false
      } else{
        this.isPlay = true
        console.log('请输入搜索条件')
      }
    },
    searchBtn(){
      let value = this.search
      if(value){
        this.isPlay = false
      } else{
        this.isPlay = true
        console.log('请输入搜索条件')
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#searchInput {
  
    .tips{
      padding-left:140px;
      font-size: 16px;
      line-height: 48px;
      color: #ffffff; 
    }
  
}
</style>
<style>
#searchInput .el-select .el-input {
    width: 130px;
}
#searchInput .input-with-select .el-input-group__prepend {
    background-color: #fff;
}
</style>


