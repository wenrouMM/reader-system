<template>
  <div id="classify">
    <div class="classifyBox">
      <aside class="leftBox">
        <div class="title">
          <i class="icon">图标</i>
          <span class="text">分类导航</span>
        </div>
        <div class="selectBox">
          <div class="select">
            <el-form :model="selectForm" label-width="85px" class="demo-ruleForm">
              <el-form-item label="所属馆：">
                <div class="size">
                  <el-select v-model="selectForm.embassyValue" placeholder="请选择">
                    <el-option
                      v-for="item in embassy"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-form-item>
              <el-form-item label="文献类型：">
                <div class="size">
                  <el-select v-model="selectForm.indexValue" placeholder="请选择">
                    <el-option
                      v-for="item in indexOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </div>
              </el-form-item>
            </el-form>
          </div>
          <P class="data">
            数据总数：
            <span class="red">10000种</span>
          </P>
        </div>
        <div class="searchEnd">
          <el-scrollbar style="height:100%">
              <div class="treeBox" v-if="treeArr.length">
                  <div  class="tree-block" v-for="(item,index) of treeArr" :key="index">
                      <p><i>图标</i><span>{{item.letter}}-</span>{{item.children[0]}}<span class="red">(7515)</span></p>
                     <!-- <div class="hideSon">
                         <p v-for="(son,num) of item.children" :key="num">
                             {{son.code}}
                         </p>
                     </div> -->
                  </div>
              </div>
          </el-scrollbar>
        </div>
      </aside>
      <!-- 右边的盒子 -->
      <section class="rightBox">
        <div class="pagation">

        </div>
        <div class="detailBox"></div>
      </section>
    </div>
  </div>
</template>

<script>
import { searchInt } from "@/request/api/search";
import {getBigLetter} from '@/common/js/util'
const classArr = ['']
export default {
  data() {
    return {
      selectForm: {
        embassyValue: "",
        indexValue: ""
      },
      treeArr:[],
      embassy: [],
      indexOptions: []
    };
  },
  methods: {
    /*------ api ------*/
    // 中图分类法
    _collect() {
      searchInt.collectInt().then(res => {
        console.log("中图分类法", res.data.row);
        this.treeArr = this._Fcollect(res.data.row)
      });
    },
    _Fcollect(arr){
        let contrast = this.initArr()
        let twoC = contrast.length
        let oneC = arr.length
        for(let i=0; i<oneC;i++){
            for(let j=0; j<twoC;j++){
                let str = arr[i].code
                let conStr = contrast[j].letter
                if(str.indexOf(conStr)!=-1){
                  
                    contrast[j].children.push(arr[i])
                }
            }
        }
        console.log('过滤后',contrast)
        return contrast
    },
    initArr(){
        let arr = []

        let letter = getBigLetter()
        for (let i=0; i<letter.length;i++){
            let obj = {}
            obj.letter = letter[i]
            obj.children = []
            arr.push(obj)
            
        }
        
        return arr
        
    }
  },
  created() {
    this._collect()
    
  }
};
</script>

<style lang="scss" scoped>
@import "@/common/scss/variables.scss";
#classify {
  .classifyBox {
    display: flex;
    flex-direction: row;
    .leftBox {
      width: 246px;
      border: solid 1px $green;
      .title {
        background-color: $green;
        height: 66px;
        text-align: center;
        line-height: 66px;
        color: #ffffff;
        .text {
          font-size: 18px;
        }
        .icon {
        }
      }
      .selectBox {
        padding-top: 26px;
        padding-bottom: 24px;
        background-color: $lowGreen;
        border-bottom: 1px solid $green;
        .data {
          color: $green;
          font-size: 14px;
          padding-left: 16px;
          .red {
            color: $red;
          }
        }
      }
      .searchEnd {
        height: 500px;
      }
    }
  }
}
</style>
<style lang="scss">
@import "@/common/scss/variables.scss";
#classify {
  .el-select .el-input {
    width: 130px;
  }
  .el-form-item {
    margin-bottom: 10px;
    .el-form-item__label {
      color: $green;
      padding: 0;
    }
  }

  .el-input__inner {
    height: 30px;
    border-color: $green;
  }
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
</style>




