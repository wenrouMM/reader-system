<template>
  <div id="easySearch">
    <div class="borderBox">
      <div class="searchBox">
        <search-input @emit-search="_searchto"></search-input>
      </div>
      <div class="searchTips">
        <p class="title">查 询 说 明</p>
        <p class="br"></p>
        <div class="content">
          <p>
            <span class="circle"></span>按题名查询 如：“百年孤独”
          </p>
          <p>
            <span class="circle"></span>按作者查询  如：“加西亚·马尔克斯”
          </p>
          <p>
            <span class="circle"></span>可以查找到作家“加西亚·马尔克斯”编著的《百年孤独》这本书
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput";
export default {
  data() {
    return {};
  },
  components: {
    SearchInput
  },
  methods:{
     _searchto(val){
      console.log('?',val)
      
      this.$router.push({path:'searchList',query:val})
      console.log('跳转？',val)
    }
  }
};
</script>

<style lang="scss" scoped>
#easySearch {
  
  .borderBox {
    padding-top: 40px;
    width: 1000px;
    margin: 0 auto;
    height: 560px;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 8px;
    border: solid 1px #12b494;
    .searchBox {
      width: 840px;
      height: 90px;
      margin: 0 auto;
      margin-bottom: 20px;
    }
    .searchTips {
      width: 840px;
      margin: 0 auto;
      .title {
        color: #12b494;
        font-size: 16px;
        line-height: 30px;
        font-weight: bold;
      }
      .br {
        height: 1px;
        background-color: #bcbcbc;
        width: 100%;
        margin-bottom: 30px;
      }
      .content {
        p {
          margin-bottom: 25px;
          .circle {
            width: 10px;
            height: 10px;
            background-color: #12b494;
            border-radius: 50%;
            display: inline-block;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>

