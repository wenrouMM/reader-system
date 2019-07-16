<template>
  <div id="detail">
    <section class="titleBox">
      <div class="titleCtx">
        <p class="title fl">百年孤独</p>
        <p class="back fr">返回</p>
      </div>
    </section>
    <section class="bookBox">
      <div class="bookCtx">
        <div class="imgBox"></div>
        <div class="info">
          <p class="stage">
            <span class="distance">作者：</span>123
          </p>
          <p class="stage">
            <span class="distance">出版社：</span>
          </p>
          <p class="stage">
            <span class="distance">译者：</span>
          </p>
          <p class="stage">
            <span class="distance">出版日期：</span>
          </p>
          <p class="stage">
            <span class="distance">分类号：</span>
          </p>
          <p class="stage">
            <span class="distance">ISBN：</span>
          </p>
          <p class="stage">
            <span class="distance">索书号：</span>
          </p>
          <p class="stage">
            <span class="distance">价格：</span>
          </p>
        </div>
        <div class="context">
          <p class="stage">
            <span class="distance">相关资源</span>
          </p>
          <p>内容简介</p>
          <p class="content">
            《百年孤独》内容复杂，人物众多，情节离奇，手法新颖。
            马尔克斯在书中溶汇了南美洲特有的五彩缤纷的文化。他通
            过描写小镇马孔多的产生、兴盛到衰落、消亡，表现了拉丁
            美洲令人惊异的疯狂历史。小说以“汇集了不可思议的奇迹
            和最纯粹的现实生活”荣获1982年诺贝尔文学奖。
          </p>
        </div>
        <!-- 侧边组件警告 -->
        <div class="operateBox">
          <div class="iconBox">
            <div  class="share">
              <div class="shareIcon">
                <p class="size">
                  <i class="size el-icon-share"></i>
                </p>
                <p>
                  <span>分享</span>
                </p>
              </div>
              <div class="select"></div>
            </div>
            <div class="collect" @click="isCollect=!isCollect">
              <p class="size">
                <i :style="{color:isCollect?'#f15a4a':'#757575'}" class="el-icon-star-on"></i>
              </p>
              <p>
                <span :style="{color:isCollect?'#f15a4a':'#757575'}">收藏</span>
              </p>
            </div>
          </div>
          <div class="order">书籍预约</div>
        </div>
      </div>
    </section>
    <!-- 馆藏信息 -->
    <section class="book-detail">
      <div  class="touchBox">
        <span @click="toggleShow" class="clickBox">馆藏信息</span>
        <span class="tranle"></span>
      </div>
      <div v-if="toggleValue" class="book-detail">
        <div class="selectBox">
          <el-form :model="selectForm" :inline="true">
            <el-form-item label="分中心:">
              <el-select style="width:160px;" v-model="selectForm.region" placeholder="请选择">
                <el-option label="在馆" value="1"></el-option>
                <el-option label="借出" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div class="tableBox">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="条码号"></el-table-column>
            <el-table-column prop="name" label="索书号"></el-table-column>
            <el-table-column prop="address" label="所属分馆"></el-table-column>
            <el-table-column prop="date" label="馆藏所在地"></el-table-column>
            <el-table-column prop="name" label="馆藏状态"></el-table-column>
            <el-table-column prop="address" label="应还时间"></el-table-column>
            <el-table-column prop="address" label="备注"></el-table-column>
          </el-table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      selectForm: {
        region: "1"
      },
      
      isCollect:false, // 控制收藏点击事件
      shareShow:false, // 控制分享框的显隐
      toggleValue: false
    };
  },
  methods: {
    
    toggleShow() {
      this.toggleValue = !this.toggleValue;
    },
    
  }
};
</script>

<style lang="scss" scoped>
#detail {
  .titleBox {
    .titleCtx {
      min-height: 40px;

      .title {
        color: #2a2a2a;
        font-size: 24px;
        font-weight: bold;
      }
      .back {
        font-size: 13px;
        color: #040404;
      }
    }
  }
  .bookBox {
    .bookCtx {
      min-height: 220px;
      position: relative;
      display: flex;
      flex-direction: row;
      .imgBox {
        width: 170px;
        height: 221px;
        background-color: aquamarine;
      }
      .info {
        width: 410px;
        margin-left: 30px;
        .stage {
          font-size: 14px;
          color: #2a2a2a;
          margin-bottom: 16px;
          .distance {
            display: inline-block;
            width: 70px;
          }
        }
      }
      .context {
        .stage {
          font-size: 14px;
          color: #2a2a2a;
          margin-bottom: 16px;
          .distance {
            display: inline-block;
            width: 70px;
          }
        }
        .content {
          width: 315px;
        }
      }
      .operateBox {
        .iconBox {
          position: absolute;
          right: 0;
          bottom: 0;
          .share {
            margin-bottom: 17px;
            width: 64px;
            height: 64px;
            position: relative;
            &:hover{
              .select{
                width: 140px;
                opacity: 1;
              }
            }
            .shareIcon {
              width: 64px;
              height: 64px;
              background-color: #ffffff;
              border-radius: 10px;
              border: solid 1px #12b494;
              position: absolute;
              color: #12b494;
              z-index: 3;
              cursor: pointer;
              text-align: center;

              .size {
                font-size: 40px;
              }
            }
            .select {
              position: absolute;
              background-color: rgba(0, 0, 0, 0.2);
              width: 0px;
              opacity: 0;
              overflow: hidden;
              height: 64px;
              z-index: 1;
              right: 56px;
              transition: all 1s cubic-bezier(0.77, 0, 0.175, 1)
            }
          }
          .collect {
            width: 64px;
            height: 64px;
            background-color: #ffffff;
            border-radius: 10px;
            border: solid 1px #f15a4a;
            color: #f15a4a;
            text-align: center;
            cursor: pointer;
            .size {
              font-size: 40px;
            }
            
          }
        }
        .order {
          position: absolute;
          right: 97px;
          bottom: 0;
          font-size: 16px;
          color: #ffffff;
          background-color: #fca377;
          padding: 0 18px;
          height: 28px;
          line-height: 28px;
          cursor: pointer;
        }
      }
    }
  }
  .book-detail {
    padding-top: 20px;
    height: 300px;
    transition: height 3s;
    .touchBox {
      position: relative;
      .clickBox {
        display: inline-block;
        color: #fff;
        font-size: 14px;
        line-height: 25px;
        width: 100px;
        height: 25px;
        background-color: #12b494;
        text-align: center;
        cursor: pointer;
        position: relative;
        z-index: 3;
      }
      .tranle {
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 10px solid #24a25c;
        top: 10px;
        left: 95px;
      }
      .active {
        background-color: #6ac9b6;
      }
    }
    .book-detail {
    }
    .tableBox {
    }
  }
}
</style>


