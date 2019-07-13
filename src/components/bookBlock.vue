<template>
  <div id="bookBlock">
    <div class="book-block">
      <div class="bookCtx">
        <div class="imgBox"></div>
        <div class="textBox">
          <p @click="toDetail" class="title">百年孤独</p>
          <p class="info">马尔克斯著 广西：漓江出版社，1990.10 I775.45/12</p>
          <p class="buy"></p>
          <div @click="toggleShow" class="touchBox">
            <span class="clickBox">馆藏信息</span>
            <span class="tranle"></span>
          </div>
        </div>
        <div class="number">
            <p><img src="@/common/img/searchList/07.png"></p>
            <p>馆藏总数：2本</p>
        </div>
      </div>
      <div class="bookself">
        <img :src="selfImg" />
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selfImg:require('@/common/img/searchList/bookself.png'),
      sortValue: "",
      sortOptions: [
        {
          label: "匹配度升序",
          value: "1"
        }
      ],
      tableData: [],
      selectForm: {
        region: "1"
      },
      toggleValue:false,
    };
  },
  methods:{
      toggleShow(){
          this.toggleValue = !this.toggleValue
      },
      toDetail(){
          this.$router.push({path})
      }
  }
};
</script>

<style lang="scss" scoped>
#bookBlock {
    .book-block {
      position: relative;
      .bookCtx {
        padding-left: 38px;
        padding-top: 10px;
        display: flex;
        flex-direction: row;
        position: relative;
        z-index: 5;
        bottom: -12px;
        .imgBox {
          width: 100px;
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
            .tranle{
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
        }
        .number{
            position:absolute;
            right: 0;
        }
      }
      .bookself {
      }
      .book-detail {
      }
    }
}
</style>

