<template>
  <div id="launch">
    <div class="content">
      <div class="aside-block">
        <div class="asideTitle">
          <i></i>
          <p>所属馆</p>
        </div>

        <div class="aside-content">
          <p class="text">南岸区图书馆 （22）</p>
          <p class="text">南岸区图书馆 （22）</p>
          <p class="text">南岸区图书馆 （22）</p>
          <el-collapse-transition>
            <div v-show="launch">
              <p class="text">南岸区图书馆 （22）</p>
              <p class="text">南岸区图书馆 （22）</p>
              <p class="text">南岸区图书馆 （22）</p>
            </div>
            
          </el-collapse-transition>
          <p class="more" @click="launch=!launch">{{launch?'点击收起':'点击展开'}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      launch: false
    };
  }
};
</script>

<style lang="scss" scoped>
#launch {
  .content {
    .aside-block {
      border: solid 1px #12b494;
      margin-bottom: 1px;
      .asideTitle {
        background-color: #12b494;
        height: 66px;
        box-sizing: border-box;
        line-height: 66px;
        color: #fff;
        font-size: 18px;
        padding-left: 24px;
      }
      .aside-content {
        background-color: #e7fffa;
        padding-top: 17px;
        padding-bottom: 7px;
        box-sizing: border-box;
        padding-left: 78px;
        .text {
          color: #12b494;
          font-size: 16px;

          margin-bottom: 18px;
          &:last-child {
            margin-bottom: 24px;
          }
        }
        .more {
          color: #686868;
          font-size: 16px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

