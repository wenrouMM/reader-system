<template>
  <div id="searchList">
    <section class="searchBox">
      <search-input></search-input>
    </section>
    <section class="changeBox">
      <div class="leftBox">
        <div class="change">
          <div class="tab bor">
            <i class></i>
            <span class="text">通借通还藏馆({{total}})</span>
          </div>
          <!-- <div class="tab ">
            <i class></i>
            <span class="text">本馆图书馆藏（12）</span>
          </div> -->
          <p class="searchData">
            共有
            <span style="color:#ff4a4a;">12</span>条记录，检索时间：
            <span style="color:#ff4a4a">0.010秒</span>
          </p>
        </div>
      </div>
      <div class="rightBox">
        <p class="rightText">
          <i></i>
          <span>排序方式</span>
        </p>
        <div class="selectBox">
          <el-select v-model="sortValue" placeholder="请选择排序方式">
            <el-option
              v-for="item in sortOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
    </section>
    <!-- 列表页 -->
    <section class="listPage">
      <div class="aside-left">
        <launch @son-click="searchPlace" :key="1" :dataArr="placeArr" :init="initArr[0]"></launch>
        <launch @son-click="searchIndex" :key="2" :dataArr="indexArr" :init="initArr[1]"></launch>
        <launch @son-click="searchauthor" :key="3" :dataArr="authorArr" :init="initArr[2]"></launch>
        <launch @son-click="searchpublicTime" :key="4" :dataArr="publicTimeArr" :init="initArr[3]"></launch>
        <launch @son-click="searchtype" :key="5" :dataArr="typeArr" :init="initArr[4]"></launch>
      </div>
      <div class="aside-right">
        <!-- 分页器 -->
        <section class="pagation"></section>
        <section class="bookBox">
          <div class="protect" v-for="(item,index) of collectionList" :key="index">
            <book-block :data="item" ></book-block>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
const init = [
        {
          title:'所属馆',
          icon:''
        },
        {
          title:'文献类型',
          icon:''
        },
        {
          title:'著作者',
          icon:''
        },
        {
          title:'出版日期',
          icon:''
        },
        {
          title:'分类',
          icon:''
        },
        ]
import SearchInput from "@/components/SearchInput";
import BookBlock from "@/components/bookBlock";
import launch from "@/components/launch"
import {searchInt} from '@/request/api/search'
export default {
  data() {
    return {
      launch: false,
      sortValue: "",
      tableData: [],
      sortOptions: [
        {
          label: "匹配度升序",
          value: "1"
        }
      ],

      selectForm: {
        region: "1"
      },
      // 
      total:0,
      // 组件传递数据 馆藏列表
      collectionList:[],
      placeArr:[], // 馆藏地
      indexArr:[], // 索引类型
      authorArr:[], // 作者
      publicTimeArr:[], // 出版时间
      typeArr:[], // 出版时间
      initArr:[],
      condition:null // 搜索条件缓存
      //
    };
  },
  methods:{
    // 附加馆藏地搜索
    searchPlace(val){
      let obj = {}
      obj.libData = val
      this.condition = Object.assign(this.condition,obj)
      this._allSearch(this.condition)
      console.log('合并之后的数据',this.condition,this.$route.query)
    },
    // 索引类型搜索
    searchIndex(val){
      let obj = {}
      obj.documentTypeData = val
      this.condition = Object.assign(this.condition,obj)
      this._allSearch(this.condition)
      console.log('合并之后的数据',this.condition,this.$route.query)
    },
    // 著作者搜索
    searchauthor(){
      let obj = {}
      obj.authorData = val
      this.condition = Object.assign(this.condition,obj)
      this._allSearch(this.condition)
      console.log('合并之后的数据',this.condition,this.$route.query)
    },
    // 发布日期搜索
    searchpublicTime(){
      let obj = {}
      obj.publicationTimeData = val
      this.condition = Object.assign(this.condition,obj)
      this._allSearch(this.condition)
      console.log('合并之后的数据',this.condition,this.$route.query)
    },
    // 类型搜索
    searchtype(){
      let obj = {}
      obj.typeData = val
      this.condition = Object.assign(this.condition,obj)
      this._allSearch(this.condition)
      console.log('合并之后的数据',this.condition,this.$route.query)
    },
    _allSearch(data){
      let obj =data
      searchInt.allSearchInt(data).then((res)=>{
        let data = res.data.row
        this.collectionList = data.dataList
        this.placeArr = data.libNum
        this.indexArr = data.documentTypeNum
        this.authorArr = data.authorNum
        this.publicTimeArr = data.publicationTimeNum
        this.typeArr = data.typeNum
        this.total = res.data.total
        console.log(res)
      })
    }
  },
  components: {
    SearchInput,
    BookBlock,
    launch
  },
  created(){
    
    this.condition = this.$route.query
    console.log('起始数据',this.condition)
    this._allSearch(this.condition)
    this.initArr = init
  }
};
</script>

<style lang="scss" scoped>
#searchList {
  .searchBox {
    width: 1200px;
    margin-bottom: 30px;
  }
  .changeBox {
    border-bottom: 2px solid #12b494;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .leftBox {
      .change {
        display: flex;
        flex-direction: row;

        .tab {
          border: solid 2px #12b494;
          border-right: none;
          border-bottom: none;
          color: #2a2a2a;
          font-size: 20px;
          font-weight: bold;
          padding: 18px 24px 12px 24px;
          cursor: pointer;
          width: 260px;
          box-sizing: border-box;
        }
        .active {
          color: #129f83;
        }
        .bor {
          border-right: solid 2px #12b494;
        }
        .searchData {
          padding: 28px 0px 12px 14px;
          color: #898989;
          font-size: 14px;
        }
      }
    }
    .rightBox {
      display: flex;
      flex-direction: row;
      .rightText {
        color: #2a2a2a;
        font-size: 16px;
        padding-top: 21px;
        padding-right: 10px;
      }
      .selectBox {
        padding-top: 8px;
        width: 170px;
      }
    }
  }
  .listPage {
    padding-top: 5px;
    display: flex;
    flex-direction: row;
    .aside-left {
      width: 247px;
      
    }
    .aside-right {
      margin-left: 32px;
      position: relative;
      min-height: 143px;
      .pagation {
      }
      .bookBox {
        
      }
    }
  }
}
.selectBox {
}
</style>

