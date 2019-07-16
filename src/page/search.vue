<template>
  <div id="search">
    <!-- 导航 -->
    <section class="header">
      <nav class="nav">
        <ul class="navCtx">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/searchEasy">书籍检索</router-link>
          </li>
          <li>
            <span>借阅管理</span>
          </li>
          <li>
            <span>读者中心</span>
          </li>
          <li>
            <span>读者登录</span>
          </li>
        </ul>
      </nav>
    </section>
    <!-- logo图片 -->
    <section class="imgLogoBox">
      <img src="@/common/img/libLogo.png" />
    </section>
    <!-- 搜索框 -->
    <section class="searchBox">
      <search-input></search-input>
      <!-- <el-input @blur="blurVali" placeholder="请输入搜索内容" v-model="search" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option
            v-for="(item,index) of optionsArr"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-button @click="searchBtn" slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <p v-if="isPlay" class="tips">{{tips}}</p> -->
    </section>
    <div class="mask">

    </div>
    <div class="copyright">版权所有 copyright © www.kuiniu.com 智慧图书馆</div>
  </div>
</template>
<script>
import SearchInput from "../components/SearchInput";
export default {
  data() {
    return {
      search: "",
      select: "",
      tips: "搜索条件不得为空",
      isPlay: false,
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
  computed: {
    searchTimeForm() {}
  },
  components: {
    SearchInput
  },
  methods: {
    blurVali() {
      let value = this.search;
      if (value) {
        this.isPlay = false;
      } else {
        this.isPlay = true;
        console.log("请输入搜索条件");
      }
    },
    searchBtn() {
      let value = this.search;
      if (value) {
        this.isPlay = false;
        this.$router.push({ path: "/index" });
      } else {
        this.isPlay = true;
        console.log("请输入搜索条件");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#search {
  background-image: url("../common/img/bg.jpg");
  
  background-size: cover;
  height: 100vh;
  background-position: center;
  .header {
    .nav {
      width: 1200px;
      margin: 0 auto;
      
      .navCtx {
        display: flex;
        flex-direction: row;
        color: #ffffff;

        li {
          line-height: 60px;
          width: 140px;
          span {
            cursor: pointer;
          }
        }
      }
    }
  }
  .imgLogoBox {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 225px;
    z-index: 2;
  }
  .searchBox {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 352px;
    z-index: 2;
    width: 1200px;
    .tips {
      padding-left: 140px;
      font-size: 16px;
      line-height: 48px;
      color: #ffffff;
    }
  }
  .copyright {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    color: #ffffff;
    font-size: 13px;
  }
  /* .mask{
    height: 100%;
    width: 100%;
    background-color: rgba($color: #000000, $alpha: 0.7);
    position: absolute;
    z-index: 1;
  } */
}
</style>
<style>
#search .el-select .el-input {
  width: 130px;
}
#search .input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>


