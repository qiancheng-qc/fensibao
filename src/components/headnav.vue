<template>
  <div id="head" class="header-box">
    <div class="header-fixed">
      <div class="container">
        <a href="#" class="logo">
          <!-- <img src="../assets/log.png" alt="" /> -->
          <span class="title">商家客户资源管理系统&nbsp;|&nbsp;CRM</span>
        </a>
        <div class="nav-container">
          <!-- <ul>
            <li class="link-item link-item-active">
              <a href="#introduce">平台介绍</a>
            </li>
            <li class="link-item">
              <a href="#resources">海量资源</a>
            </li>
            <li class="link-item">
              <a href="#resources">海量资源</a>
            </li>
          </ul> -->
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="平台介绍" name="first">平台介绍</el-tab-pane>
            <el-tab-pane label="海量资源" name="second">海量资源</el-tab-pane>
          </el-tabs>
        </div>
        <div class="login-wrapper">
          <div class="login-btns">
            <!-- <button class="button">
              <router-link to="register">立即注册</router-link>
            </button> -->
            <el-button type="primary" round>
              <router-link to="register">立即注册</router-link>
            </el-button>
            <el-dropdown @command="dropdownClick">
              <el-button type="primary" round>
                登录<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="login">运营商登录</el-dropdown-item>
                <el-dropdown-item command="adlogin">广告商登录</el-dropdown-item>
                <el-dropdown-item command="agencylogin">代理商登录</el-dropdown-item>
                <el-dropdown-item command="adminlogin">管理员登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <!-- <el-button type="primary" round>
              <router-link to="login">登录</router-link>
            </el-button> -->

            <!-- <button class="button" @click="toURL">
              立即注册
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    dropdownClick(command) {
      this.$router.push(command)
    },
    handleClick(tab, event) {
      if (this.activeName === "second") {
        $(window).scrollTop(660);
      } else {
        $(window).scrollTop(0);
      }
    },
    toURL() {
      this.$router.push({ path: "../register.vue" });
    },
  },
};
</script>
<style lang="scss" scoped>
.header-box {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 70px;
  .header-fixed {
    position: fixed;
    transform: translateZ(0);
    width: 100%;
    min-width: 1200px;
    height: 70px;
    top: 0;
    z-index: 20;
    //background-color: #36286a;
    background-image: linear-gradient(45deg, #7a88ff, #7affaf);
    box-shadow: 0 4px 12px 0 rgba(52, 63, 75, 0.06);
    .container {
      display: flex;
      width: 1200px;
      margin: 0 auto;
      height: 70px;
      .logo {
        width: 320px;
        padding: 10px;
        display: flex;
        align-items: center;
        text-decoration: none;
        .title {
          font-size: 24px;
          color: #fff;
        }
        // img {
        //   width: 120px;
        //   height: 60px;
        // }
      }

      .nav-container {
        margin: 0 auto;
        /deep/ .el-tabs__item {
          color: #fff;
        }
        /deep/ .el-tabs__content {
          display: none;
        }
        /deep/ .el-tabs__nav-wrap::after {
          display: none;
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background-color: #e4e7ed;
          z-index: 1;
        }
        /deep/ .el-tabs {
          padding: 10px;
        }
        ul {
          display: flex;
          margin: 0;
          padding: 0;
          li {
            a {
              text-decoration: none;
              color: #ffffff;
              font-size: 14px;
              line-height: 70px;
              padding: 18px;
              text-decoration: none;
              background-color: transparent;
              outline: none;
              cursor: pointer;
            }
            list-style: none;
          }
          .link-item:after {
            background: linear-gradient(90deg, #0e8cff 1%, #5794fb 95%);
            height: 4px;
            width: 36px;
            border-radius: 3px;
            position: absolute;
            display: block;
            content: "";
            bottom: 0;
            left: 50%;
            margin-left: -15px;
          }
          .link-item-active:after {
            display: block;
          }
        }
      }
      .login-wrapper {
        display: flex;
        align-items: center;
        .el-button {
          a {
            text-decoration: none;
            color: #fff;
          }
        }
        // width: 150px;
        // .login-btns {
        // margin-top: 18px;
        // .button {
        //   position: relative;
        //   outline: 0;
        //   display: inline-block;
        //   white-space: nowrap;
        //   text-align: center;
        //   background-image: none;
        //   border: 1px solid #4f6dff;
        //   box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
        //   transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        //   -webkit-user-select: none;
        //   -moz-user-select: none;
        //   -ms-user-select: none;
        //   user-select: none;
        //   touch-action: manipulation;
        //   height: 34px;
        //   padding: 0 27px;
        //   font-size: 14px;
        //   border-radius: 21px;
        //   color: #fff;
        //   background-color: #4f6dff;
        //   text-transform: none;
        //   a {
        //     color: #fff;
        //     text-decoration: none;
        //     background-color: transparent;
        //     outline: none;
        //     cursor: pointer;
        //   }
        // }
        // }
      }
    }
  }
}
</style>
