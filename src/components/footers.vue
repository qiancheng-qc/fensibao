<template>
  <div class="footer-model">
    <div class="partners">
      <h2>开始合作</h2>
      <p>立即注册，查看更多抖音信息，开启您的专属社交营销</p>
      <div class="to-regist">
        <router-link to="register">立即注册</router-link>
      </div>
    </div>
    <div class="content container">
        <div class="logo">
            <img src="../assets/log.png" width="100%" alt="">
        </div>
        <div class="footer-links footer-links-list">
            <div>首页</div>
            <div>抖音无敌</div>
            <div>抖音变现</div>
            <div>商业榜价值</div>
            <div>关于我们</div>
            <div>免责声明</div>
        </div>
        <div class="contact">
            <ul>
                <li class="el-icon-phone">&nbsp;:&nbsp;123456789</li>
                <li class="el-icon-message" style="padding-top:8px">&nbsp;:&nbsp;123@asdfg.com</li>
            </ul>
        </div>
        <!-- <div class="code-img">
            <img   src="../assets/ad221c4.png" alt="">
            <img   src="../assets/ad221c4.png" alt="">
        </div> -->
    </div>
    <div class="footer-middle-line"></div>
    <div class="copyright">
      <div class="copyright-left">
          <p>版权所有 © 未来科技股份有限公司 2011-2020.</p>
          <!-- <p>京ICP证000000号 京ICP备0000000号 京公网安备12345678900号  商标注册证：12345678号. 12345678号</p> -->
      </div>
      <div class="copyright-right">
          <img src="../assets/ee184b1.jpg" height="30" alt="">
          <img src="../assets/04ee5af.png" height="30" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.footer-model {
  width: 100%;
  height: 100%;
  min-width: 1200px;
  color: #fff;
  font-size: 12px;
  height: 436px;
  margin-top: 100px;
  position: relative;
  background-image: url(../assets/footbg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% bottom;
  .partners{
    position: absolute;
    width: 680px;
    height: 210px;
    background: url(../assets/f09bcbe.png) no-repeat 100% 100%;
    background-size: 100%;
    top: -80px;
    left: calc((100% - 680px) / 2);
    margin-top: 20px;
    h2{
    color: #24243d;
    margin-top: 40px;
    text-align: center;
    }
    p{
    color: #999;
    text-align: center;
    }
    .to-regist {
      display: block;
      width: 160px;
      height: 40px;
      line-height: 40px;
      border-radius: 20px;
      text-align: center;
      background-color: #5370f6;
      margin: 25px auto 0;
      a{
        color:#fff;
        text-decoration: none;
      }
    }
  }
  .container{
    width: 1200px;
    padding-top: 215px!important;
    margin: 0 auto;
    zoom: 1;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
    width: 100px;
    height: 44px;
    }
    .footer-links{
    padding-left: 100px;
    width: 18%;
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    div{
    padding: 5px 4px;
    margin-right: 5px;
    }
    }
    .contact{
        ul{
            li{
                display: block;
            }
        }
    }
    .code-img{
        img{width: 80px;}
    }
  }
  .footer-middle-line{
    height: 1px;
    width: 100%;
    background: hsla(0,0%,100%,.15);
  }
  .copyright{
    display: flex;
    justify-content: space-between;
    zoom: 1;
    //padding: 20px 0;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .copyright-left{
        text-align: left;

    }
    .copyright-right{
        padding-top: 12px;
    }
  }
}
</style>
