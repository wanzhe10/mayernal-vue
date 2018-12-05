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
            @click="getAjax()"
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
import axios from 'axios';
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
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
        username: "15012345678",
        password: "123456"
      },
      rules2: {
        username: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    getAjax: function() {
      let self = this;
      this.$api.login({'username':'15012345678','password':'123456'}).then(res => {
          console.log(res);
     if (res.status ==="20200" ) {
        localStorage.setItem('token',res.token)
        localStorage.setItem('userName',res.name)
         self.$router.push({name: 'management'})
        console.log(1)
      //  $router.push('/management')
          // this.pageList = res.data.item
      } else {
        // this.$Message.info(res.desc);
      }
     })
     .catch(error => {
        // this.$Message.info(error);
      })


      // let self = this;
      // this.$http.post("http://www.wcqxzs.com/pregnant/v1/web/pad/login", {
      //     username: "15093357355",
      //     password: "123456789"
      //   })
      //   .then(function(response) {
      //     console.log(response);
      //     if(response.status == 200){
      //        self.$router.push({name: 'management'})

      //     }
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
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
        border-radius: 10px 10px 10px 10px;
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
        border-radius: 10px;
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
        border-radius: 10px;
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
    border-radius: 10px;
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
