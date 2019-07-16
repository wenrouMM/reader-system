<template>
  <div id="hardSearch">
    <div class="borderBox">
      <section class="search">
        <div class="inputBox">
          <el-input placeholder="请输入搜索内容" v-model="searchForm.one" class="input-with-select">
            <el-select v-model="select2" slot="prepend" placeholder="请选择">
              <el-option
                v-for="(item,index) of optionsArr"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button @click="searchBtn" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="inputBox">
          <el-input placeholder="请输入搜索内容" v-model="searchForm.two" class="input-with-select">
            <el-select v-model="select3" slot="prepend" placeholder="请选择">
              <el-option
                v-for="(item,index) of optionsArr"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-input>
        </div>
        <div class="inputBox">
          <el-input placeholder="请输入搜索内容" v-model="searchForm.three" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option
                v-for="(item,index) of optionsArr"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-input>
        </div>
      </section>
      <section class="basicReason">
        <p class="title">基本条件</p>
        <div class="selectBox">
          <span class="text">语言种类：</span>
          <el-radio-group v-model="language">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
          </el-radio-group>
        </div>
        <div class="selectBox">
          <span class="text">文献类型：</span>
          <el-radio-group v-model="documentType">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
          </el-radio-group>
        </div>
        <div class="selectBox">
          <span class="text">出版年份：</span>
        </div>
        <div class="selectBox">
          <span class="text">每页显示行数：</span>
        </div>
      </section>
      <section class="house">
        <p class="title">基本条件</p>
        <div class="checkBox">
          <div class="check">
            <span class="valideate">检索所属馆列表：</span>
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="handleCheckAllChange"
            >全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="eachChange">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 多连搜索框
      searchForm:{
          one:'',
          two:'',
          three:''
      },
      select: "1",
      select2:"2",
      select3:"3",
      // 二层选择框
      language: "", // 语言
      documentType: "", // 文献类型
      checkAll: false,
      checkedCities: [],
      isIndeterminate: false,
      cities: ["上海", "北京", "广州", "深圳"],
      optionsArr: [
        {
          label: "任意词",
          value: "1"
        },
        {
          label: "ISBN",
          value: "2"
        },
        {
          label: "控制号",
          value: "3"
        },
        {
          label: "题号",
          value: "4"
        },
        {
          label: "作者",
          value: "5"
        },
        {
          label: "主题",
          value: "6"
        },
        {
          label: "分类号",
          value: "7"
        },
        {
          label: "索取号",
          value: "8"
        },
        {
          label: "出版社",
          value: "9"
        },
        {
          label: "出版年",
          value: "10"
        }
      ]
    };
  },
  methods: {
    searchBtn() {
        let arr = Object.values(this.searchForm)
        let juge = arr.findIndex(function(value, index, arr){
            return value != ""
        })
        console.log(juge)
        if( juge != -1){
            console.log('索引',this.searchForm)
        } else {
            this.$message.error('请至少输入一个搜索条件')
        }
    },
    // 全选按钮
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.cities : [];
      this.isIndeterminate = false;
    },
    eachChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>

<style lang="scss" scoped>
#hardSearch {
  padding-top: 50px;
  .borderBox {
    width: 1000px;
    padding-bottom: 45px;
    margin: 0 auto;
    border-radius: 8px;
    border: solid 1px #12b494;
    padding-top: 40px;
    .search {
      width: 840px;
      margin: 0 auto;
      
      .inputBox{
          margin-bottom: 20px;
      }
    }
    .basicReason {
      width: 840px;
      margin: 0 auto;
      margin-bottom: 20px;
      border: solid 1px #12b494;
      .title {
        font-size: 16px;
        height: 30px;
        color: #ffffff;
        line-height: 30px;
        padding-left: 25px;
        background-color: #12b494;
        margin-bottom: 20px;
      }
      .selectBox {
        padding-left: 25px;
        margin-bottom: 30px;
        .text {
          font-size: 14px;
          color: #2a2a2a;
          display: inline-block;
          width: 120px;
        }
      }
    }
    .house {
      width: 840px;
      margin: 0 auto;
      border: solid 1px #12b494;
      height: 220px;
      .title {
        font-size: 16px;
        height: 30px;
        color: #ffffff;
        line-height: 30px;
        padding-left: 25px;
        background-color: #12b494;
        margin-bottom: 20px;
      }
      .checkBox {
        padding-left: 25px;
      }
    }
  }
}
</style>

<style>
#hardSearch .el-select .el-input {
  width: 130px;
}
#hardSearch .input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
