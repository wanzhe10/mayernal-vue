<template>
  <div class="loginBox">
    <header>
      <img
        src="../../assets/login.png"
        alt="孕产妇高危妊娠风险评估"
      >
    </header>
    <div class="contant">
      <div class="main_header">
        <h1>登录</h1>
        <div class="wire"></div>
      </div>
      <div class="main-contant">
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item
            label="用户名"
            prop="username"
          >
            <el-input
              type="text"
              v-model="ruleForm2.username"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item
            label="密码"
            prop="password"
          >
            <el-input
              type="password"
              v-model="ruleForm2.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-button
            type="primary"
            @click="getAjax('ruleForm2')"
            @keyup.enter="submit"
          >登 录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <footer>
      Copyright © 2018 医来医往(北京)科技有限公司
    </footer>
  </div>
</template>
<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
import axios from "axios";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6) {
        callback(new Error("密码不能小于6位"));
      } else {
        callback();
      }
    };
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        username: "13511111111",
        password: "a123456789"
      },
      rules2: {
        username: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  created() {
    var lett = this;
    document.onkeydown = function(e) {
      let event = e || window.event
      var key =event.keyCode;
      if (key == 13) {
        lett.submit();
      }
    };
  },
  methods: {
    submit() {
      this.getAjax();
    },
    getAjax(formName) {
      let self = this;
      this.$api
        .login(this.ruleForm2)
        .then(res => {
          console.log(res)
          if (res.status === "20200") {
            localStorage.setItem("mayernal-web-token", res.token);
            localStorage.setItem("mayernal-web-highRiskGradesTable", res.highRiskGradesTable);
            localStorage.setItem("mayernal-web-userName", res.name);
            localStorage.setItem("mayernal-web-loginName", res.userName);
            self.$router.push({ name: "management" });
          } else if (res.status === "20207") {
            this.$message.error("用户名或密码错误");
          } else {
            this.$message.error("登录错误，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("登录错误，请稍后重试");
        });
    }
  }
};
</script>
 <style lang="less" scoped>
.loginBox {
  header {
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 12px 4px rgba(51, 51, 51, 0.08);
  }
  .contant {
    width: 488px;
    height: 360px;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 150px;
    margin-bottom: 150px;
    .main_header {
      width: 100%;
      height: 83px;
      line-height: 83px;
      border-bottom: 1px solid #f6f6f6;
      position: relative;
      h1 {
        font-size: 28px;
        color: #000000;
        display: inline-block;
        margin-left: 58px;
      }
      .wire {
        width: 80px;
        height: 7px;
           border-radius: 4px;
        background-color: #68b6e7;
        display: inline-block;
        position: absolute;
        bottom: -4px;
        left: 48px;
      }
    }
    .main-contant {
      margin-top: 50px;
      margin-left: 30px;
      .main_child_login,
      .main_child_password {
        font-size: 14px;
        position: relative;
      }
      .active {
        border: 1px solid red;
      }
      .main_child_login span,
      .main_child_password span {
        color: #e43d2a;
        margin-left: 17px;
      }
      #an,
      #pw {
        position: absolute;
        top: 42px;
        left: 0;
        margin-left: 74px;
        color: #e43d2a;
        display: none;
      }
      .main_child_login input,
      .main_child_password input {
        width: 258px;
        height: 40px;
        background-color: #f6f6f6;
        margin-left: 14px;
        border-radius: 4px;
        padding-left: 14px;
      }
      .main_child_password {
        margin-top: 24px;
      }
      .main_child_button {
        display: block;
      }
      .loginBtn {
        width: 258px;
        height: 40px;
        background-color: #68b6e7;
        border-radius: 4px;
        color: #fff;
        font-size: 14px;
        line-height: 40px;
        text-align: center;
        margin-top: 35px;
        margin-left: 68px;
        cursor: pointer;
      }
    }
  }
  footer {
    color: #999999;
    text-align: center;
    padding-bottom: 20px;
  }
}
</style>
<style lang="less">
.loginBox {
  .el-input__inner {
    height: 34px;
    line-height: 34px;
    width: 258px;
    background-color: #f6f6f6;
  }
  .el-select-dropdown__item.selected {
    color: #68b6e7;
  }
  .el-input.is-active .el-input__inner,
  .el-input__inner:focus {
    border-color: #68b6e7;
  }
  .el-input--suffix .el-input__inner {
    padding-right: 30px;
    border-radius: 4px;
  }
  .area-select.large {
    width: 128px;
    height: 34px;
    line-height: 34px;
    border: none;
  }
  .el-button--primary {
    margin-left: 100px;
    width: 258px !important;
    background-color: #68b6e7;
    border-color: #68b6e7;
  }
  .el-input {
    width: 234px;
  }
  .el-form-item__error {
    color: #f56c6c;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 31%;
    left: 260px;
  }
  .el-input__suffix {
    right: -20px;
  }
}
</style>
