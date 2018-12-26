<template>
	<div class="chagePasswordBox">
		<h2 class="chagePasswordBoxTittle">修改密码</h2>
		<div class="chagePasswordContant">
			<p>修改密码 /<span>Change Password</span></p>
			<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="70px" class="demo-ruleForm" label-position='left'>
				<el-form-item label="登录名">
					<el-input v-model="ruleForm2.name" class="user" readonly='readonly'></el-input>
				</el-form-item>
				<el-form-item label="原始密码" prop="oldpassword">
					<el-input type="password" v-model="ruleForm2.oldpassword" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="新密码" prop="newpassword">
					<el-input type="password" v-model="ruleForm2.newpassword" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="确认密码" prop="affirmword">
					<el-input type="password" v-model="ruleForm2.affirmword" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm2')">保 存</el-button>
				</el-form-item>
			</el-form>
		</div>


	</div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      var Reg_PassWord =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      //  else if(!Reg_PassWord.test(value)){
      //   callback(new Error("8-16位含数字/字母2种组合"));
      // }
      else{
          callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.newpassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        name: "",
        oldpassword: "",
        newpassword: "",
        affirmword: ""
      },
      rules2: {
        oldpassword: [{ validator: validatePass, trigger: "blur" }],
        newpassword: [{ validator: validatePass, trigger: "blur" }],
        affirmword: [{ validator: validatePass2, trigger: "blur" }]
      },
       flag:true,
    };
  },
  mounted(){
    let loginName =localStorage.getItem('mayernal-web-loginName');
    this.ruleForm2.name = loginName;
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.changrPassWold();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    changrPassWold(){
        let self = this;
      let token = localStorage.getItem('mayernal-web-token');
         this.$api
        .patientCenterUpdateSelfPass({
          token:token,
          newPassword:this.ruleForm2.newpassword,
          oldPassword:this.ruleForm2.oldpassword
        })
        .then(res => {
          console.log(res)
          if (res.status === "20200") {
              localStorage.clear();
             self.$router.push({ name: "login" });
          } else if (res.status === "20252") {
                 this.$message.error("原始密码错误");
          }
        })
        .catch(error => {
           this.$message.error("请求失败，请稍后重试");
        });
    }
  }
};
</script>
<style lang="less" scoped>
.mgr18 {
  margin-right: 18px;
}
.chagePasswordBox {
  position: relative;
  width: 100%;
  // min-height: 600px;
  background-color: #fff;
  .chagePasswordBoxTittle {
    display: block;
    width: 100%;
    background-color: #fbfbfb;
    padding: 24px 24px 24px 24px;
    font-size: 18px;
    color: #333333;
  }
  .chagePasswordContant {
    padding: 92px 250px 60px 290px;
    p {
      font-size: 16px;
      margin-bottom: 20px;
      span {
        color: #ccc;
      }
    }
    .user {
      width: 234px;
      height: 34px;
    }
  }
}
</style>
<style lang='less'>
.chagePasswordBox {
  .el-input__inner {
    height: 34px;
    line-height: 34px;
    width: 234px;
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
    width: 234px !important;
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
    left: 246px;
  }
}
</style>


