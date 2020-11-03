<template>
  <div class="login-model">
    <div class="login_screen login_logo">
      <div class="left">
        <router-link to="/">
          <span class="title">代理商家客户资源管理系统&nbsp;|&nbsp;CRM</span>
        </router-link>
      </div>
    </div>
    <div class="login-content">
      <div class="login-inner">
        <div class="login-left">
          <p>为您提供一站式商机</p>
          <span>For Your One-Steped Business Opportunity</span>
          <div class="left-pic"></div>
        </div>
        <div class="login-form">
          <div class="form-title">代理商登录</div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="userName">
              <el-input
                v-model="ruleForm.userName"
                placeholder="用户名"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
                placeholder="密码"
              ></el-input>
            </el-form-item>
            <el-form-item
              class="item-yzm"
              label="验证码"
              prop="verificationCode"
            >
              <el-input
                class="yzm identifyinput"
                v-model="ruleForm.verificationCode"
                placeholder="验证码"
              ></el-input>
            </el-form-item>
            <el-form-item
              class="identify"
              style="margin-top: -62px; margin-left: 82px"
            >
              <div
                class="identifybox"
                style="
                  width: 112px;
                  height: 40px;
                  display: flex;
                  justify-content: space-between;
                "
              >
                <div @click="refreshCode">
                  <s-identify :identifyCode="identifyCode"></s-identify>
                </div>
                <el-button @click="refreshCode" type="text" class="textbtn"
                  >换一张?</el-button
                >
              </div>
            </el-form-item>
            <el-checkbox v-model="checked">记住用户名</el-checkbox>
            <el-form-item>
              <el-button
                class="login-butt"
                type="warning"
                @click="submitForm('ruleForm')"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
          <div class="form-bottom">
            <el-dropdown @command="dropdownClick">
              <el-button type="default">
                切换登录方式<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="login">运营商登录</el-dropdown-item>
                <el-dropdown-item command="adlogin">广告商登录</el-dropdown-item>
                <el-dropdown-item command="adminlogin">管理员登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <router-link to="register">注册账号</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="login-foot">
      <p>版权所有 © 未来科技股份有限公司 2011-2020</p>
    </div>
  </div>
</template>

<script>
import md5 from "js-md5";
import SIdentify from "../../components/identify";
export default {
  name: "CertificateLogin",
  data() {
    // 验证码自定义验证规则
    const validateVerifycode = (rule, value, callback) => {
      let newVal = value.toLowerCase();
      let identifyStr = this.identifyCode.toLowerCase();
      if (newVal === "") {
        callback(new Error("请输入验证码"));
      } else if (newVal !== identifyStr) {
        console.log("validateVerifycode:", value);
        callback(new Error("验证码不正确!"));
      } else {
        callback();
      }
    };
    return {
      checked: false,
      url: "",
      identifyCodes: "1234567890ABCDEFGHIGKLMNoPQRSTUVWXYZ",
      identifyCode: "",
      ruleForm: {
        userName: "",
        pass: "",
        newPass: "",
        verificationCode: "",
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }],
        verificationCode: [
          { required: true, validator: validateVerifycode, trigger: "blur" },
        ],
      },
    };
  },
  components: { SIdentify },
  created() {
    this.url = this.$route.query;
    if (this.url.errInfo) {
      this.$message.error(this.url.errInfo);
    }
  },
  mounted() {
    // 验证码初始化
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
    // this.getCookie()
    if (localStorage.getItem("userName")) {
      this.ruleForm.userName = localStorage.getItem("userName");
    }
  },
  methods: {
      dropdownClick(command) {
      console.log(command)
      this.$router.push(command)
    },
    submitForm(formName) {
      if (this.ruleForm.pass) {
        this.ruleForm.newPass = md5(this.ruleForm.pass);
      }
      if (this.checked === true) {
        // this.setCookie(this.ruleForm.userName)
        // 传入账号名
        localStorage.setItem("userName", this.ruleForm.userName);
      }

      this.$refs[formName].validate((valid) => {
        if (valid) {
          // window.location.href = localStorage.getItem('baseUrl') + '/dy/login_login.do?loginname=' + this.ruleForm.userName + '&password=' + this.ruleForm.pass

          window.location.href =
            process.env.BASE_API +
            "/dy/login_login.do?loginname=" +
            this.ruleForm.userName +
            "&password=" +
            this.ruleForm.newPass + '&userType=2';
        } else {
          console.log("error submit!!");
          return false;
        }
      });

      // this.$axios.get('http:
      // 192.168.0.129:8080/dy/login_login.do?loginname=' + this.ruleForm.userName + '&password=' + this.ruleForm.pass
      // ).then(res => {
      // var result = res.data
      // if (result. === 0) {
      // window.location.href='http://192.168.0.129:8080/dy/login_login.do?loginname=' + this.ruleForm.userName + '&password=' + this.ruleForm.pass'
      // } else {
      //   alert('用户名或密码错误,请重新输入')
      //   this.ruleForm.userName = ''
      //   this.ruleForm.pass = ''
      // }
      // })
      // },
    },
    // 生成随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 切换验证码
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    // 生成四位随机验证码
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    },
  },
};
</script>
<style lang="scss" scoped>
.login-model {
  height: 100%;
  // background-color: #39d;

  /deep/ .el-form-item__label {
    text-align: left;
  }
  /deep/ .el-form-item__content {
    margin-left: 80px !important;
  }
  /deep/ .el-form-item__label {
    width: 80px !important;
  }
  /deep/ .el-checkbox {
    margin-left: 5px;
  }
  /deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #f4655b !important;
  }

  width: 100%;
  .login_screen {
    display: flex;
    justify-content: space-between;
    width: 60%;
    min-width: 1100px;
    height: 80px;
    margin: 0 auto;
    .left {
      display: flex;
      align-items: center;
      color: #b3b3b3;
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        .title {
          font-size: 24px;
          color: #01484e;
        }
      }
    }
  }
  .login-content {
    background-color: #00a5b5;
    height: 650px;
    flex-shrink: 0;
    width: 100%;

    .login-inner {
      display: flex;
      justify-content: space-between;
      width: 60%;
      min-width: 1100px;
      margin: 0 auto;
      height: 650px;
    }

    .login-left {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      p {
        color: #fff;
        font-size: 28px;
      }
      span {
        color: #fff;
        font-size: 24px;
      }
      .left-pic {
        margin-top: 40px;
        background: url(../../assets/1-2.png) no-repeat center;
        background-size: contain;
        width: 550px;
        height: 332px;
      }
    }

    .login-form {
      z-index: 4;
      width: 296px;
      background: #fff;
      padding: 18px 40px;
      overflow: visible;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      font-size: 12px;
      border: 1px solid #e6e6e6;
      border-radius: 4px;
      height: 380px;
      .form-title {
        margin-bottom: 24px;
        text-align: center;
        font-size: 24px;
        color: #666;
      }
      .item-yzm {
        /deep/ .el-input {
          width: 80px !important;
        }
        .yzm {
          /deep/ .el-input__inner {
            width: 80px;
          }
        }
        .img-yzm {
          position: absolute !important;
          margin-left: 4px;
        }
        span {
          margin-left: 67px;
        }
      }

      .login-butt {
        // background-color: #f4655b;
        color: #fff;
        width: 274px;
        margin-left: -74px;
        margin-top: 20px;
      }
    }
    .form-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        text-decoration: none;
        color: #60829f;
      }
      .el-dropdown {
        margin-left: 6px;
        .el-button {
          padding: 6px 20px;
        }
      }
    }
  }
  .login-foot {
    width: 60%;
    margin: 0 auto;
    // color: #BBBFC2;
    color: #666;
    margin-top: 100px;

    p {
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>
