<template>
  <div class="model-reg">
    <div class="login_screen login_logo">
      <div class="left">
        <!-- <router-link class="link-to" to="/"
            ><img width="120" height="60" src="../../assets/log.png" alt="" /></router-link
          >
        <i></i>
        <span>广告主推广平台</span> -->
        <router-link to="/">
          <span class="title"
            >商家客户资源管理系统&nbsp;|&nbsp;CRM</span
          ></router-link
        >
      </div>
      <div class="right">
        <p>
          您如果已经注册账号,请
          <el-dropdown @command="dropdownClick">
            <span class="el-dropdown-link">直接登陆</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="login">运营商登录</el-dropdown-item>
              <el-dropdown-item command="adlogin">广告商登录</el-dropdown-item>
              <el-dropdown-item command="agencylogin"
                >代理商登录</el-dropdown-item
              >
              <el-dropdown-item command="adminlogin"
                >管理员登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
          <!-- <router-link class="link-to" to="login">直接登录</router-link> -->
        </p>
      </div>
    </div>
    <div class="reg-content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="loginname">
          <el-input
            v-model="ruleForm.loginname"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="surfacePassword">
          <el-input
            type="password"
            v-model="ruleForm.surfacePassword"
            autocomplete="off"
            placeholder="请设置密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="surfaceCheckPass">
          <el-input
            type="password"
            v-model="ruleForm.surfaceCheckPass"
            autocomplete="off"
            placeholder="请确认密码"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="手机号" prop="phone">
          <el-input v-model.number="ruleForm.phone"></el-input>
        </el-form-item> -->
        <el-form-item label="邀请码" prop="referralCode">
          <el-input
            v-model="ruleForm.referralCode"
            autocomplete="off"
            placeholder="可输入邀请码"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码" class="item-yzm" prop="verificationCode">
          <el-input
            class="yzm identifyinput"
            v-model="ruleForm.verificationCode"
            placeholder="请输入验证码"
          >
          </el-input>

          <!-- <img class="img-yzm" width="80" height="38"  v-bind:src="this.url" alt="" /> -->
          <!-- <span @click="getCheckCode()">换一张?</span> -->
        </el-form-item>
        <el-form-item class="identify">
          <div class="identifybox">
            <div @click="refreshCode">
              <s-identify :identifyCode="identifyCode"></s-identify>
            </div>
            <el-button @click="refreshCode" type="text" class="textbtn"
              >看不清,换一张</el-button
            >
          </div>
        </el-form-item>
        <!-- <el-form-item label="短信验证码" class="mess-code" prop="messageCode">
          <el-input v-model.number="ruleForm.messageCode"></el-input>
          <span @click="getCode()">免费获取验证码</span>
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="foot">
      <div class="content">
        <div class="foot-top">
          <span>关于我们</span>
          <i></i>
          <span>联系我们</span>
          <i></i>
          <span>服务条款</span>
          <i></i>
          <span>免责声明</span>
          <i></i>
          <span>版权所有 © 未来科技股份有限公司 2011-2020</span>
        </div>
        <!-- <div class="foot-bottom">
          <span>关于我们</span>
          <i></i>
          <span>联系我们</span>
          <i></i>
          <span>服务条款</span>
          <i></i>
          <span>免责声明</span>
          <i></i>
          <span>版权所有 © XX科技股份有限公司 2011-2020</span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
import md5 from "js-md5";
import SIdentify from "../../components/identify";
export default {
  name: "CertificateLogin",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.surfaceCheckPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    // 验证密码
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.surfacePassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
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
      url: "",
      identifyCodes: "1234567890ABCDEFGHIGKLMNoPQRSTUVWXYZ",
      identifyCode: "",
      ruleForm: {
        loginname: "",
        surfacePassword: "",
        surfaceCheckPass: "",
        password: "",
        checkPass: "",
        referralCode: "",
        verificationCode: "",
      },
      rules: {
        loginname: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        surfacePassword: [
          { required: true, validator: validatePass, trigger: "blur" },
        ],
        surfaceCheckPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
        referralCode: [
          { required: true, message: "请输入邀请码", trigger: "blur" },
        ],
        verificationCode: [
          { required: true, validator: validateVerifycode, trigger: "blur" },
        ],
      },
    };
  },
  components: { SIdentify },
  // 页面加载调用获取验证码
  mounted() {
    // this.getCheckCode()
    // 验证码初始化
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    dropdownClick(command) {
      this.$router.push(command)
    },
    // 提交
    submitForm(formName) {
      if (this.ruleForm.surfacePassword && this.ruleForm.surfaceCheckPass) {
        this.ruleForm.password = md5(this.ruleForm.surfacePassword);
        this.ruleForm.checkPass = md5(this.ruleForm.surfaceCheckPass);
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post(
              process.env.BASE_API + "/dy/register_register_hy.do",
              this.ruleForm,
              { emumateJSON: true }
            )
            .then((res) => {
              var result = res.data;
              if (result.state === 0) {
                // this.$message({
                //   message: '注册成功',
                //   type: 'success'
                // })
                this.$notify({
                  title: "成功",
                  message: "注册成功",
                  type: "success",
                });
                this.$router.push({ path: "/login" });
              } else {
                this.$message({
                  message: result.message,
                  type: "error",
                });
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 输入信息重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 获取验证码
    getCheckCode() {
      // this.$axios.post('http://192.168.0.128:8080/dy/getVerificationcode.do', {
      //   params: {}
      // }).then(res => {
      //   console.log(res.data.message)
      //   if (res.data.state === 0) {
      //     console.log(res.data.pathUrl)
      //     this.url = res.data.data.pathUrl
      //   }
      // })
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
.model-reg {
  width: 100%;
  overflow-x: hidden;

  .reg-content {
    border: 1px solid #ddd;
    width: 60%;
    margin: 0 auto;
    .mess-code {
      /deep/ .el-input {
        width: 100px !important;
      }
      /deep/ .el-form-item__content {
        text-align: left;
      }
      .yzm {
        /deep/ .el-input__inner {
          width: 100px;
        }
      }
      span {
        color: #60829f;
        cursor: pointer;
      }
    }
    .item-yzm {
      /deep/ .el-input {
        width: 100px !important;
      }
      /deep/ .el-form-item__content {
        text-align: left;
      }
      .yzm {
        /deep/ .el-input__inner {
          width: 100px;
        }
      }
      .img-yzm {
        position: absolute !important;
        margin-left: 4px;
        padding-top: 2px;
      }
      span {
        margin-left: 96px;
        color: #60829f;
        cursor: pointer;
      }
    }
  }
  /deep/ .el-form-item__content {
    text-align: center;
  }
  /deep/ .el-form {
    padding-top: 30px;
    width: 60%;
    margin: 0 auto;
  }
  .login_screen {
    display: flex;
    justify-content: space-between;
    width: 60%;
    height: 100px;
    margin: 0 auto;
    .left {
      display: flex;
      align-items: center;
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        .title {
          font-size: 24px;
          color: #179;
        }
      }
      // i {
      //   display: inline-block;
      //   height: 12px;
      //   margin: 0 3px;
      //   width: 1px;
      //   border-right: 1px solid #b3b3b3;
      //   vertical-align: middle;
      //   margin-top: 16px;
      // }
      // span {
      //   color: #b3b3b3;
      //   font-size: 12px;
      //   padding-left: 10px;
      //   padding-top: 16px;
      // }
    }
    .right {
      color: #333;
      font-size: 14px;
      p {
        padding-top: 36px;
      }
      .link-to {
        text-decoration: none;
        color: #60829f;
      }
      .el-dropdown {
        .el-dropdown-link {
          color: #60829f;
          cursor: pointer;
        }
      }
    }
  }
  .foot {
    position: absolute;
    bottom: 0;
    height: 50px;
    padding: 11px 0;
    background-color: #363636;
    color: #fff;
    text-align: center;
    width: 100%;
    //overflow-x: hidden;
    z-index: 1;
    font-size: 14px;
    .foot-top {
      line-height: 25px;
    }
    .content {
      width: 1200px;
      margin: 0 auto;
    }
    i {
      display: inline-block;
      height: 12px;
      margin: 0 3px;
      width: 1px;
      border-right: 1px solid #fff;
      vertical-align: middle;
    }
  }
  .identify {
    /deep/ .el-form-item__content {
      margin-left: 202px !important;
      margin-top: -69px;
    }
    .identifybox {
      display: flex;
      //justify-content: space-between;
      margin-top: 7px;
    }
    .iconstyle {
      color: #409eff;
    }
    .el-button {
      margin-top: -16px;
    }
  }
}
</style>
