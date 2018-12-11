<template>
  <div class="personalDetailsBox">
    <h2 class="personalDetailsBoxTittle">用户个人信息维护</h2>
    <!-- 基本信息块 -->
    <div class="personalDetailsBoxContant">
      <div class="lookAtallBtnBox">
        <h2>基本情况</h2>
        <div class="positionWire"></div>
      </div>
      <div class="newsBox">
        <span class="mgr50">登录名</span>
        <span>{{userNewsData.userName}}</span>
      </div>
      <div class="newsBox">
        <span class="mgr20">用户名</span>
        <span>{{userNewsData.name}}</span>
      </div>
      <div class="newsBox">
        <span class="mgr24">手&nbsp;机&nbsp;号</span>
        <input
          type="text"
          class='hospitalId'
          placeholder="请输入手机号"
          v-model="userNewsData.telephone"
         @keyup="getInputValue"
        >
      </div>
      <div
        class="newsBox"
        style="margin-bottom:18px;"
      >
        <span class="mgr50">邮箱</span>
        <input
          type="text"
          class='hospitalId'
          placeholder="请输入邮箱号"
          v-model="userNewsData.emails"
        @keyup="getInputValue"
        >
      </div>
      <span>备注</span><br />
      <input
        type="text"
        class='remark'
        placeholder="请输入你要备注的信息"
        v-model="userNewsData.remarks"
       @keyup="getInputValue"
      >
      <input
        type="button"
        value="保 存"
        class="personalDetailsBox_btn"
        @click="doctorUpdateSelf"
        :disabled = 'btnStatas'
        :class="{ 'active': select }"
      >

      <div class="lookAtallBtnBox mgt40">
        <h2>机构信息</h2>
        <div class="positionWire"></div>
      </div>
      <p class="agencyInformation">
        <span>创建时间：</span>
        <i style="margin-right:60px;">{{userNewsData.createDate}}</i>
        <span>所在机构：</span>
        <i style="margin-right:66px;">{{userNewsData.hospitalName}}</i>
        <span>所在科室</span>
        <i style="margin-right:88px;">{{userNewsData.deptSimpleName}}</i>
        <span>激活状态</span>
        <i v-show="userNewsData.types == 0">未激活</i>
        <i v-show="userNewsData.types == 1">已激活</i>
      </p>
    </div>
    <!-- 保存弹出层 -->
    <div class="personalDetailsLayer">

    </div>
  </div>

</template>
<script>
import { AreaCascader } from "vue-area-linkage";
import { pca, pcaa } from "area-data";
export default {
  data() {
    return {
      // 激活状态
      contacts: [
        {
          value: "0",
          label: "未激活"
        },
        {
          value: "1",
          label: "已激活"
        }
      ],
      // 机构等级
      classes: [
        {
          value: "0",
          label: "未激活"
        },
        {
          value: "1",
          label: "已激活"
        }
      ],

      contactsModel: "", //激活状态
      classModel: "", //机构等级
      userNewsData: {}, //用户个人信息维护数据
      pca: pca,
      pcaa: pcaa,
      telephone: "",
      emails: "",
      btnStatas: true, //按钮点击状态
      select: false,
    };
  },
  mounted() {
    // this.doctorFindSelf();
     let self = this;
      let token1 = window.localStorage.getItem("token");
      this.$api
        .doctorFindSelf({
          token: token1
        })
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.userNewsData = res;
            // this.telephone = res.telephone;
            // this.emails = res.emails;
          } else {
          }
        })
        .catch(error => {
          // this.$Message.info(error);
        });
  },
  methods: {
    //机构所在地
    registeredModelResidence() {
      console.log(this.registeredModel);
    },
    // doctorFindSelf() {
    //   let self = this;
    //   let token1 = window.localStorage.getItem("token");
    //   this.$api
    //     .doctorFindSelf({
    //       token: token1
    //     })
    //     .then(res => {
    //       console.log(res);
    //       if (res.status === "20200") {
    //         this.userNewsData = res;
    //         // this.telephone = res.telephone;
    //         // this.emails = res.emails;
    //       } else {
    //       }
    //     })
    //     .catch(error => {
    //       // this.$Message.info(error);
    //     });
    // },
    doctorUpdateSelf() {
      alert(1)
      let self = this;
      let token1 = window.localStorage.getItem("token");
      this.$api
        .doctorUpdateSelf({
          token: token1,
          telephone: this.userNewsData.telephone,
          email: this.userNewsData.emails,
          remarks: this.userNewsData.remarks
        })
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.doctorFindSelf();
          }
        })
        .catch(error => {
          // this.$Message.info(error);
        });
    },
    getInputValue(){
      console.log(111)
     return this.btnStatas = false;
      return  this.select = true;
    }
  },
  // watch: {
  //   "userNewsData.telephone": {
  //     handler(val,oldval) {
  //       if (oldval !=val) {
  //            console.log(111);
  //       this.btnStatas = true;
  //       this.select = true;
  //       }
       
  //     },
  //   }
  // }
};
</script>

<style lang="less" scoped>
.mgr20 {
  margin-right: 20px;
}
.mgr24 {
  margin-right: 24px;
}
.mgr30 {
  margin-right: 30px;
}
.mgr36 {
  margin-right: 36px;
}
.mgr46 {
  margin-right: 46px;
}
.mgr50 {
  margin-right: 50px;
}
.mgt40 {
  margin-top: 40px !important;
}
.personalDetailsBox {
  width: 100%;
  min-height: 600px;
  background-color: #fff;
  .personalDetailsBoxTittle {
    display: block;
    width: 100%;
    background-color: #fbfbfb;
    padding: 24px 24px 24px 24px;
    font-size: 18px;
    color: #333333;
  }
  .personalDetailsBoxContant {
    padding: 26px 24px 86px 24px;
    overflow: hidden;
    .lookAtallBtnBox {
      width: 100%;
      position: relative;
      margin-top: 16px;
      margin-bottom: 30px;
      h2 {
        font-size: 16px;
        display: inline-block;
        padding-right: 14px;
      }
      .positionWire {
        position: absolute;
        display: inline-block;
        top: 50%;
        right: 0px;
        width: 860px;
        height: 1px;
        background-color: black;
      }
      .positionWire2 {
        position: absolute;
        display: inline-block;
        top: 50%;
        right: 0px;
        width: 830px;
        height: 1px;
        background-color: black;
      }
    }
    .newsBox {
      height: 46px;
      width: 440px;
      display: inline-block;
      border-bottom: 1px solid #ccc;
      line-height: 46px;
      span {
        font-family: MicrosoftYaHei;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 22px;
        letter-spacing: 1px;
        color: #666666;
        input {
          font-size: 14px;
          color: #333333;
          border: none;
        }
        .borderNo {
          border: none;
        }
      }
    }
    .remark {
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #ccc;
    }

    .personalDetailsBox_btn {
      width: 239px;
      height: 42px;
      background-color: #68b6e7;
      border-radius: 6px;
      opacity: 0.6;
      margin: auto;
      margin-top: 38px;
      display: block;
      color: #fff;
      cursor: pointer;
    }
    .active {
      opacity: 1;
    }
  }
  //  基本信息
}
.locationOrganzation {
  display: inline-block;
}
.agencyInformation {
  padding-left: 10px;
  font-size: 14px;
  color: #333333;
  i {
    font-style: normal;
  }
}
</style>
<style>
.el-select-dropdown__item.selected {
  color: #68b6e7;
}
.personalDetailsBox .el-input--suffix .el-input__inner {
  border: none;
}
.personalDetailsBox .area-select.large {
  width: 160px;
  height: 40px;
  line-height: 40px;
  border: none;
}
.personalDetailsBox .area-select .area-selected-trigger {
  position: relative;
  display: block;
  font-size: 14px;
  cursor: pointer;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 100%;
  padding: 0px 20px 7px 12px;
}
.personalDetailsBox .cascader-menu-list .cascader-menu-option.selected {
  background-color: #f5f7fa;
  color: #68b6e7;
  font-weight: 700;
}
.personalDetailsBox .newsBox:nth-child(2n) {
  margin-right: 46px;
}
.personalDetailsBox .newsBox:nth-last-child(1) {
  margin-right: 0px;
}
</style>

