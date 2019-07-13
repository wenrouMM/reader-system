<template>
    <div id="index">
        <section class="header">
            <div class="headImg"></div>
            <nav>
                <ul class="navCtx">
                    <li>首页</li>
                    <li>首页</li>
                    <li>首页</li>
                    <li>首页</li>
                    <li>首页</li>
                </ul>
            </nav>
        </section>
        <section class="content">
·            <div class="centerBox">
                <router-view></router-view>
            </div>
        </section>
        <div class="copyright">版权所有 copyright © www.kuiniu.com 智慧图书馆</div>
    </div>
    
</template>

<script>
export default {

    
    
}
</script>

<style lang="scss" scoped>
#index{
    position: relative;
    .header{
        .headImg{
            width: 100%;
            background-image: url('../common/img/head.jpg');
            height: 160px;
        }
        nav{
            width: 100%;
            height: 50px;
	        background-color: #12b494;
            .navCtx{
                width: 1200px;
                margin: 0 auto;
                display: flex;
                flex-direction: row;
                li{
                    width: 20%;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    color: #2a2a2a;
                }
            }
        }
    }
    .content{
        .centerBox{
            width: 1200px;
            margin: 0 auto;
            margin-bottom: 54px;
        }
    }
    .copyright {
    padding-bottom: 48px;
    text-align: center;
    color: #ffffff;
    font-size: 13px;
    color: #2c2c2c;
  }
}
</style>


