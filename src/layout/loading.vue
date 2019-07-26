<template>
  <div v-if="loading" id="loading">
    <div class="con-wrap">
      <!-- 外圈旋转圆 -->
      <div class="out-round"></div>
      <P class="text">加载中...</P>
      <!-- 内圆 -->

      <!-- <div class="inner">
        <div class="spiner"></div>
        <div class="filler"></div>
        <div class="masker"></div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
    props:{
        loading:{
            type:Boolean,
            default:false
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../common/scss/variables.scss";
#loading {
    width: 100px;
    height: 100px;
  .con-wrap {
    position: relative;
    width: 100px;
    height: 100px;
  }
  .text{
      width: 100%;
      transform: translate(-50%,-50%);
      position: absolute;
      left: 50%;
      top: 50%;
      text-align: center;
  }
  .out-round {
    width: 90%;
    height: 90%;
    border-radius: 50%;
    position: absolute;
    border: 3px solid $green;
    border-left: 3px solid transparent;
    animation: outRound 1s linear infinite running;
  }
  .inner,
  .inner2 {
    position: absolute;
    width: 70px;
    height: 70px;
    border-radius: 50px;
    overflow: hidden;
    left: 35px;
    top: 35px;
  }
  .inner {
    opacity: 1;
    background-color: #89abdd;
  }
  .spiner{

  }
}
@keyframes outRound {
  0% {
    transform: rotate(120deg);
  }
  100% {
    transform: rotate(-240deg);
  }
}
@keyframes spin {
  0%   { transform: rotate(360deg); }
  100% { transform: rotate(0deg); }
}
@keyframes second-half-hide {
  0%        { opacity: 1; }
  50%, 100% { opacity: 0; }
}
@keyframes second-half-show {
  0%        { opacity: 0; }
  50%, 100% { opacity: 1; }
}
</style>


