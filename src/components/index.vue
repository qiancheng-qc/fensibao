<template>
  <div class="main">
    <div id="introduce" class="banner">
      <div>
        <div class="banner-text">
          <p class="p1">提供全方位社交媒体投放服务</p>
          <p class="p2">AI驱动、数据赋能、让短视频营销更高效</p>
        </div>
      </div>

      <div class="banner-list">
        <ul>
          <li>
            <div class="icon-logo icon-left">
              <img src="../assets/zyys.png" width="58" height="58" alt="" />
            </div>
            <div class="icon-left icon-text">
              <h2>资源优势</h2>
              <p>资源总量丰富,分布广泛,品质高,市场需求量大</p>
            </div>
          </li>
          <li>
            <div class="icon-logo icon-left">
              <img src="../assets/sjys.png" width="58" height="58" alt="" />
            </div>
            <div class="icon-left icon-text">
              <h2>数据优势</h2>
              <p>
                强大的数据挖掘及分析处理技术，包括内容分析、运营数据、商业订单交易能力、输出数百+数据维度评估的独有账号
              </p>
            </div>
          </li>
          <li>
            <div class="icon-logo icon-left">
              <img src="../assets/fwys.png" width="58" height="58" alt="" />
            </div>
            <div class="icon-left icon-text">
              <h2>服务优势</h2>
              <p>
                专业营销服务，IT化投放系统，响应快人效高，品牌支付及执行风险低
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div id="resources" class="media">
      <div class="media-title">
        <div class="container">
          <h1>100万+优质海量资源</h1>
          <p>覆盖各个领域</p>
          <!-- <p class="zs">注：数据来源于"XXXXXXX"</p> -->
        </div>
      </div>
      <div class="media-content">
        <div class="container mediaBox">
          <div class="media-list">
            <ul class="list-ul swiper-wrapper" id="ul" ref="ul">
              <li
                class="swiper-slide"
                v-for="item in list"
                v-bind:key="item.id"
              >
                <div class="media-list-title">
                  <img
                    v-bind:src="item.imgU"
                    width="310"
                    height="60"
                    alt="1111"
                  />
                  <ul class="media-list-content">
                    <li v-for="items in item.lists" v-bind:key="items.id">
                      <div class="top">
                        <img width="48" height="48" v-bind:src="items.imgorder" />
                      </div>
                      <div v-show ="item.id==3?false:true" class="top-log" style="margin-top:10px">
                        <img
                          style="width: 48px;height: 48px;border-radius: 50%;"
                          v-bind:src="items.imgUrl"
                          alt=""
                        />
                      </div>
                      <div class="top-text">
                        <div>
                          <h4>{{ items.userName }}</h4>

                          <!-- <img
                            src="../assets/ce95885.png"
                            width="12px"
                            height="12px"
                            alt=""
                          /> -->
                        </div>
                        <div class="p">{{ items.accNum }}</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="more">
            <router-link to="register">查看更多 →</router-link>
          </div>
          <div
            class="btn-next el-icon-arrow-right swiper-slide swiper-slide-prev" style="color:#4f6dff;font-size:32px;"
            @click="right()"
          ></div>
          <div
            class="btn-noPrev el-icon-arrow-left swiper-slide swiper-slide-active" style="color:#4f6dff;font-size:32px;"
            @click="left()"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide, directive } from 'vue-awesome-swiper'
import $ from 'jquery'
var num1 = 0
// var num2 = 0
export default {
  // name: "index",
  components: { swiper, swiperSlide },
  directives: {
    swiper: directive
  },
  data () {
    return {
      flag: false,
      list: [
        { id: 1,
          imgU: require('../assets/859fa69.png'),
          lists: [
            {
              id: 1,
              imgorder: require('../assets/first.png'),
              imgUrl: require('../assets/one.jpeg'),
              userName: '大魔王呸',
              accNum: ' Hellokx521'
            },
            {
              id: 2,
              imgorder: require('../assets/second.png'),
              imgUrl: require('../assets/two.jpeg'),
              userName: '猴哥说车',
              accNum: '1636323608'
            },
            {
              id: 3,
              imgorder: require('../assets/third.png'),
              imgUrl: require('../assets/three.jpeg'),
              userName: '温精灵',
              accNum: '29934315'
            },
            {
              id: 4,
              imgorder: require('../assets/four.png'),
              imgUrl: require('../assets/four.jpeg'),
              userName: '若驰夫妇的日常',
              accNum: 'rose1551'
            },
            {
              id: 5,
              imgorder: require('../assets/five.png'),
              imgUrl: require('../assets/five.jpeg'),
              userName: '凉风Kaze',
              accNum: '13122313'
            }
          ] },
        { id: 2,
          imgU: require('../assets/ks.png'),
          lists: [
            {
              id: 1,
              imgorder: require('../assets/first.png'),
              imgUrl: require('../assets/yn.jpg'),
              userName: '云南达摩【大杀四方】',
              accNum: ' ZiTao-888'
            },
            {
              id: 2,
              imgorder: require('../assets/second.png'),
              imgUrl: require('../assets/gb.jpg'),
              userName: '国宝',
              accNum: 'suyu00088'
            },
            {
              id: 3,
              imgorder: require('../assets/third.png'),
              imgUrl: require('../assets/hyd.jpg'),
              userName: '郝一点（网瘾少女）',
              accNum: '3xeeb3h7m99ds8a'
            },
            {
              id: 4,
              imgorder: require('../assets/four.png'),
              imgUrl: require('../assets/sd.jpg'),
              userName: '少东🔆和平精英',
              accNum: 'SD666886'
            },
            {
              id: 5,
              imgorder: require('../assets/five.png'),
              imgUrl: require('../assets/qh.jpg'),
              userName: '清河李哥～情感连麦破...',
              accNum: 'LG1111LG'
            }
          ] },
        { id: 3,
          imgU: require('../assets/mp.png'),
          lists: [
            {
              id: 1,
              imgorder: require('../assets/first.png'),
              // imgUrl: require('../assets/one.jpeg'),
              userName: '吃饭啦😱光小强',
              accNum: ' 36088724'
            },
            {
              id: 2,
              imgorder: require('../assets/second.png'),
              // imgUrl: require('../assets/two.jpeg'),
              userName: '密子君',
              accNum: '35498115'
            },
            {
              id: 3,
              imgorder: require('../assets/third.png'),
              // imgUrl: require('../assets/three.jpeg'),
              userName: '周贝蕾Manon1994',
              accNum: '21792956'
            },
            {
              id: 4,
              imgorder: require('../assets/four.png'),
              // imgUrl: require('../assets/four.jpeg'),
              userName: '张芮妮💋',
              accNum: '15978725'
            },
            {
              id: 5,
              imgorder: require('../assets/five.png'),
              imgUrl: require('../assets/five.jpeg'),
              userName: 'Dalin不是Linda',
              accNum: '15771030'
            }
          ] },
        { id: 4,
          imgU: require('../assets/miaop.png'),
          lists: [
            {
              id: 1,
              imgorder: require('../assets/first.png'),
              imgUrl: require('../assets/my.jpg'),
              userName: '摸鱼事务所',
              accNum: 'ODUpjQbQlDi9CX235...'
            },
            {
              id: 2,
              imgorder: require('../assets/second.png'),
              imgUrl: require('../assets/sbr.jpg'),
              userName: 'S本人',
              accNum: '4mgBPPAvkN1lRTfnP0O18A__...'
            },
            {
              id: 3,
              imgorder: require('../assets/third.png'),
              imgUrl: require('../assets/ll.jpg'),
              userName: '你刘海戳到我了',
              accNum: 'cF6JYe5uQmMjFbin...'
            },
            {
              id: 4,
              imgorder: require('../assets/four.png'),
              imgUrl: require('../assets/yr.jpg'),
              userName: '依然Toujours',
              accNum: '6v~gEmBuBWMvAjz1'
            },
            {
              id: 5,
              imgorder: require('../assets/five.png'),
              imgUrl: require('../assets/ej.jpg'),
              userName: 'E姐小仙女',
              accNum: '2MsAhTO~rh~wDaU...'
            }
          ] }
      ]
    }
  },
  mounted () {
    console.log(123)
  },
  methods: {
    right () {
      num1++
      if (num1 > 1) {
        num1 = 1
      }
      console.log(num1)
      $('#ul').animate({ marginLeft: -num1 * 350 + 'px' })
      // console.log(this.$refs.ul)
    },
    left () {
      num1--
      if (num1 < 0) {
        num1 = 0
      }
      console.log('++++' + num1)
      $('#ul').animate({ marginLeft: -num1 * 350 + 'px' })
      // console.log(this.$refs.left)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  color: rgba(0, 0, 0, 0.65);
  min-width: 1200px;
  background-color: #fff;
  .banner {
    height: 630px;
    background-image: url(../assets/bgmain.png);
    background-repeat: no-repeat;
    background-position: 90%;
    background-position-y: 10px;
    //background-size: 1920px 538px;
    padding-top: 30px;
    .banner-text {
      width: 1200px;
      margin: 0 auto;
      text-align: left;
      overflow: hidden;
      p {
        padding: 0;
        margin: 0;
      }
      .p1 {
        font-size: 24px;
        font-weight: 700;
      }
      .p2 {
        padding-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
    .banner-list {
      width: 1200px;
      margin: 20px auto 0;
      text-align: left;
      ul {
        padding: 0;
        margin: 0;
        li {
          padding: 10px 0;
          margin: 0;
          list-style-type: none;
          .icon-logo {
            border-radius: 50%;
            float: left;
            overflow: hidden;
            //background-image: url();
            background-repeat: no-repeat;
            background-size: 58px 1306px;
            padding-top: 20px;
          }
          .icon-text {
            width: 550px;
            margin-left: 76px;
            box-sizing: border-box;
            h2 {
              color: rgba(0, 0, 0, 0.85);
              font-weight: 500;
            }
            p {
              padding: 0;
              margin: 0;
              color: rgba(0, 0, 0, 0.65);
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  .media {
    background: #fff;
    margin-bottom: 50px;
    .container {
      width: 1200px;
      margin: 0 auto;
      h1 {
        margin-bottom: 30px;
        text-align: center;
      }
      p {
        margin-bottom: 20px;
        text-align: center;
      }
      .zs {
        margin: 0 auto 20px;
        text-align: right;
        font-size: 12px;
        color: #999;
        padding-right: 95px;
      }
      .more {
        display: block;
        width: 160px;
        height: 40px;
        line-height: 40px;
        border-radius: 20px;
        background-color: #5370f6;
        margin: 25px auto 0;
        text-align: center;
        a {
          color: #fff;
          text-decoration: none;
        }
      }
      .btn-next {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: absolute;
        right: 27.5px;
        top: calc((100% - 70px) / 2);
        cursor: pointer;
      }
      .btn-noPrev {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: absolute;
        left: 27.5px;
        top: calc((100% - 80px) / 2);
        cursor: pointer;
      }
    }
    .media-content {
      display: block;
      .mediaBox {
        position: relative;
        margin: 0 auto;
        width: 1200px;
        .media-list {
          width: 1030px;
          margin: 0 auto;
          padding-right: 10px;
          overflow: hidden;
          .list-ul {
            margin-left: 0;
            margin-bottom: 15px;
            width: 2460px;
            overflow: hidden;
            transition: margin-left 0.5s;
            padding-left: 10px;
            li {
              width: 310px;
              height: 440px;
              float: left;
              margin-right: 40px;
              box-shadow: 2px 2px 5px 2px #dedede, -2px 2px 5px 2px #dedede;
              list-style-type: none;
              overflow: hidden;
              .media-list-title {
                height: 100%;
                .media-list-content {
                  margin: 0;
                  padding: 0;
                  height: 380px;
                  li {
                    list-style-type: none;
                    padding: 20px 20px 0;
                    overflow: hidden;
                    margin: 0;
                    padding: 0;
                    height: 68px;
                    box-shadow:none;
                    .top {
                      //background-image: url(../assets/first.png);
                      //background-size: 58px 1306px;
                      //background-position: -11px -995px;
                      // width: 32px;
                      // height: 34px;
                      overflow: hidden;

                      float: left;
                      position: relative;
                      margin-top: 10px;
                      div {
                        position: absolute;
                        font-size: 20px;
                        color: #fff;
                        top: 2px;
                        left: 8px;
                      }
                    }
                    .top-log {
                      width: 48px;
                      height: 48px;
                      float: left;
                      margin-left: 15px;
                    }
                    .top-text {
                      float: left;
                      margin-left: 10px;
                      overflow: hidden;
                      h4{
                      font-weight:500;
                      color: rgba(0,0,0,.85);
                      font-size: 14px;
                      }

                      div {
                        display: flex;
                        align-items: center;
                      }
                      .p {
                        max-width: 135px;
                        text-align: left;
                        margin-top: -20px;
                        color: #999;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        word-break: break-all;
                        font-size: 12px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
