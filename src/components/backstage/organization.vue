<template>
  <div class="organizationBox">
    <h2 class="organizationBoxTittle">机构信息维护</h2>

    <div class="organizationBoxContant">
      <!-- 基本信息块 -->
      <div class="informationBox">
        <div class="lookAtallBtnBox">
          <h2>基本情况</h2>
          <div class="positionWire"></div>
          <div class="InformationBtn" @click='edit()'>
            <i class="modificationIcon"></i>
            <span>修改</span>
          </div>
        </div>
        <div class="newsBox">
          <span class="mgr50">医院ID</span>
          <span class='hospitalId'>234234234234</span>
        </div>
        <div class="newsBox">
          <span class="mgr20">注册时间</span>
          <span class='registrationDate'>2018-11-11</span>
        </div>
        <div class="newsBox">
          <span class="mgr20">机构联系人</span>
          <input type="text" class='linkman' placeholder='请输入联系人名称' v-model="arr.linkman" readonly='readonly'>
        </div>
        <div class="newsBox">
          <span class="mgr24">手&nbsp;机&nbsp;号</span>
          <input type="text" class='pgoneNum' placeholder="请输入手机号" v-model="arr.phone" readonly='readonly'>
        </div>
        <div class="newsBox">
          <span class="mgr36">激活状态</span>
          <el-select v-model="contactsModel" placeholder="请选择" v-bind:disabled="disabledInput">
            <el-option v-for="item in contacts" :key="item.value" :label="item.label" :value="item.value" popper-class="borderNo">
            </el-option>
          </el-select>
        </div>
        <div class="newsBox">
          <span class="mgr50">邮箱</span>
          <input type="text" class='emilNum' placeholder="请输入邮箱号" v-model="arr.mailbox" readonly='readonly'>
        </div>
      </div>
       <!-- 机构信息模块 -->
      <div class="agencyInformationBox">
        <div class="lookAtallBtnBox mgt40">
          <h2>机构信息</h2>
          <div class="positionWire"></div>
          <div class="InformationBtn" @click='edit2()'>
            <i class="modificationIcon"></i>
            <span>修改</span>
          </div>
        </div>
        <div class="InformationBox mgr46">
          <span class="mgr36">机构名称</span>
          <input type="text" class='organizationName' placeholder="请输入机构名称" v-model="arr.organizationName">
        </div>
        <div class="InformationBox">
          <span class="mgr36">机构等级</span>
          <el-select v-model="classModel" placeholder="请选择" v-bind:disabled="disabledInput2">
            <el-option v-for="item in classes" :key="item.value" :label="item.label" :value="item.value" popper-class="borderNo">
            </el-option>
          </el-select>
        </div>
        <div class="InformationBoxS">
          <span class="mgr36">所在地区</span>
          <area-cascader type='text' v-model="locationOrganzation" :level='1' :data="pcaa" @change="registeredModelResidence()" class="locationOrganzation"></area-cascader>
          <input type="text" class='detailedAddress' placeholder="请输入详细地址" v-model="arr.detailedAddress">
        </div>
        <div class="InformationBoxS ">
          <span class="mgr36 fl">机构简介</span>
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="输入机构简介" v-model="arr.remnantFontContant"> </el-input>
        </div>
      </div>

      <input type="button" value="保 存" class="organizationBox_btn">
    </div>
    <!-- 保存弹出层 -->
    <div class="organizationLayer">

    </div>
  </div>

</template>
<script>
import $ from "jquery";
import { AreaCascader } from "vue-area-linkage";
import { pca, pcaa } from "area-data";
export default {
  data() {
    return {
      disabledInput: true,
      disabledInput2: true,
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
      locationOrganzation: [], // 孕妇基本信息现户口所在地数组
      pca: pca,
      pcaa: pcaa,
      arr: {
        linkman: "", // 机构联系人
        phone: "", // 手机号
        mailbox: "", //邮箱
        organizationName: "", //机构名称
        detailedAddress: "", //详细地址
        remnantFontContant: `此处的是样式：林业总医院是祖国最北端的国家三级甲等综合医院，坐落在呼伦贝尔草原与大兴安岭林海交汇处的牙克石市它由
20世纪初俄国人创办的七十公里医院演变而来，伴随着内蒙古大兴安岭林区的开发建设而发展壮大。属事业单位。2002年经自治区人民政府列为内蒙古民族大学第二附属医院，2012年成为内蒙古民族大学第二临，束带哈速度还速度带回的大厦大会安穗还大厦大会uassaudh 回答是杀手 
床医学院.` //机构简介
      }
    };
  },
  methods: {
    //机构所在地
    registeredModelResidence() {
      console.log(this.registeredModel);
    },
    // 基本情情况修改
    edit() {
      this.disabledInput = false;
      $(".linkman").focus();
      $('.informationBox').find("input").removeAttr("readonly");

    },
    // 机构信息修改
    edit2() {
      $('.agencyInformationBox').children("input").removeAttr("readonly");
      this.disabledInput2 = false;
      $(".organizationName").focus();
    }
  },
  watch: {
    arr: {
      handler: function(obj) {
        // 数据发生变化的时候的操作 未完成
      },
      deep: true
    }
  }
};
</script>

<style lang="less" scoped>
.fl {
  float: left;
}
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
.mgb60 {
  padding-bottom: 60px;
}
.organizationBox {
  width: 100%;
  min-height: 600px;
  background-color: #fff;
  .organizationBoxTittle {
    display: block;
    width: 100%;
    background-color: #fbfbfb;
    padding: 24px 24px 24px 24px;
    font-size: 18px;
    color: #333333;
  }
  .organizationBoxContant {
    padding: 26px 24px 86px 24px;
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
      .InformationBtn,
      .mechanismBtn {
        padding: 0px 5px;
        position: absolute;
        right: 28px;
        top: 0px;
        background-color: #fff;
        cursor: pointer;
        i {
          background: url("../../assets/modification.png") no-repeat 0 0;
          width: 14px;
          height: 14px;
          background-size: 14px;
          position: absolute;
          top: 4px;
        }
        span {
          color: #68b6e7;
          padding-left: 20px;
        }
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
    .newsBox:nth-child(2n) {
      margin-right: 46px;
    }
    .InformationBox {
      height: 46px;
      width: 440px;
      display: inline-block;
      border-bottom: 1px solid #ccc;
      line-height: 46px;
    }
    .InformationBoxS {
      position: relative;
      margin-top: 16px;
      width: 100%;
      border-bottom: 1px solid #ccc;
      line-height: 46px;
      .detailedAddress {
        position: relative;
        width: 660px;
        height: 18px;
        line-height: 18px;
        padding-left: 20px;
        border-left: 1px solid #ccc;
        margin-left: 10px;
      }
      textarea {
        width: 833px;
        text-align: left;
      }
    }
    .organizationBox_btn {
      width: 239px;
      height: 42px;
      background-color: #68b6e7;
      border-radius: 6px;
      opacity: 0.6;
      margin: auto;
      margin-top: 38px;
      display: block;
      color: #fff;
    }
  }
  //  基本信息
}
.locationOrganzation {
  display: inline-block;
}
</style>
<style>
.el-select-dropdown__item.selected {
  color: #68b6e7;
}
.organizationBox .el-input--suffix .el-input__inner {
  border: none;
}
.organizationBox .area-select.large {
  width: 160px;
  height: 40px;
  line-height: 40px;
  border: none;
}
.organizationBox .area-select .area-selected-trigger {
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
.organizationBox .cascader-menu-list .cascader-menu-option.selected {
  background-color: #f5f7fa;
  color: #68b6e7;
  font-weight: 700;
}
.organizationBox .el-textarea {
  width: 90%;
}
.organizationBox .el-textarea__inner {
  border: none;
}
.el-input--suffix .el-input__inner {
  height: 40px !important;
}
</style>

