<template>
  <div id="searchList">
    <section class="searchBox">
      <search-input></search-input>
    </section>
    <section class="changeBox">
      <div class="leftBox">
        <div class="change">
          <div class="tab active">
            <i class></i>
            <span class="text">通借通还藏馆(93)</span>
          </div>
          <div class="tab bor">
            <i class></i>
            <span class="text">本馆图书馆藏（12）</span>
          </div>
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
        <launch></launch>
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
      <div class="aside-right">
        <!-- 分页器 -->
        <section class="pagation"></section>
        <section class="bookBox">
          <book-block></book-block>
          <!-- <div class="book-block">
            <div class="bookCtx">
              <div class="imgBox"></div>
              <div class="textBox">
                <p class="title">百年孤独</p>
                <p class="info">马尔克斯著 广西：漓江出版社，1990.10 I775.45/12</p>
                <p class="buy"></p>
                <div class="touchBox">
                  <span class="clickBox">馆藏信息</span>
                </div>
              </div>
            </div>
            <div class="bookself">
              <img src="../../../common/img/searchList/bookself.png" />
            </div>
            <div class="book-detail">
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
          </div>-->
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput";
import BookBlock from "@/components/bookBlock";
import launch from "@/components/launch"
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
      }
    };
  },
  components: {
    SearchInput,
    BookBlock,
    launch
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
    .aside-right {
      margin-left: 32px;
      position: relative;
      min-height: 143px;
      .pagation {
      }
      .bookBox {
        /* .book-block {
          position: relative;
          .bookCtx {
            padding-left: 38px;
            padding-top: 10px;
            display: flex;
            flex-direction: row;
            position: relative;
            z-index: 5;
            bottom: -10px;
            .imgBox {
              width: 110px;
              height: 130px;
              background-color: #2a2a2a;
              margin-right: 25px;
            }
            .textBox {
              padding-top: 13px;
              .title {
                margin-bottom: 16px;
                color: #2a2a2a;
                font-size: 14px;
                font-weight: bold;
              }
              .info {
                margin-bottom: 21px;
                color: #2a2a2a;
                font-size: 14px;
              }
              .buy {
                margin-bottom: 13px;
                height: 18px;
                background-color: #c69;
              }
              .touchBox {
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
                  &::before {
                    position: absolute;
                    content: "";
                    width: 0;
                    height: 0;
                  }
                }
                .active {
                  background-color: #6ac9b6;
                }
              }
            }
          }
          .bookself {
          }
        }
        .book-detail {
        } */
      }
    }
  }
}
.selectBox {
}
</style>

