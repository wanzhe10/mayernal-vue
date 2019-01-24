<template>
    <div class="recordNewsBox clearfix">
         <el-form
        :model="fortyTwoDay"
        :rules="rules"
        ref="fortyTwoDay"
        label-position='top'
        label-width="100px"
        :hide-required-asterisk='true'
      >
        <div id="recordNewsBox_top">
            <div class="recordNewsBox_tittle clearfix">
                <h2>新增产后42天检查记录</h2>
                <p class="fl fortyTwoTittle_left">
                    <span class="fake">检查日期：<i>2018-11-11</i></span>
                </p>
                <p class="fr"><span>操作医生：<i class="doctorName">周晓晓</i></span></p>
            </div>
          
         <div class="pregnantNewsBox clearfix">
                <div class="subheadingBox">
                    <h5>一般检查</h5>
                    <div class="positionWire2"></div>
                </div>
                        <div class="mgr70">
            <p
              slot="label"
              style="height:34px;line-height:34px; color: #666666; display:block;"
            >血 压（mmHg）</p>
            <div class="bloodBox">
              <div class="lowTension">
                <el-form-item prop="baseBloodPressureLow">
                  <el-input
                    type="baseBloodPressureLow"
                    placeholder="低压"
                    v-model.number="fortyTwoDay.baseBloodPressureLow"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="hyperpiesia">
                <el-form-item prop="baseBloodPressureHigh">
                  <el-input
                    type="baseBloodPressureHigh"
                    placeholder="高压"
                      v-model.number="fortyTwoDay.baseBloodPressureHigh"
                  ></el-input>
                </el-form-item>
              </div>
            </div>
          </div>
               <div class="mgr70">
          <el-form-item
              label="当前体重（kg）"
              prop="baseWeight"
            >
              <el-input
                type="baseWeight"
                class="pregnantPhone"
                placeholder="请输入当前体重"
              v-model.number="fortyTwoDay.baseWeight"
              >
              </el-input>
            </el-form-item>
                </div>
                 <div class="mgr0">
          <el-form-item
              label="产后天数（天）"
              prop="checkDay"
            >
              <el-input
                type="checkDay"
                class="pregnantPhone"
                placeholder="请输入产后天数"
                 v-model.number="fortyTwoDay.checkDay"
              >
              </el-input>
            </el-form-item>
                </div>
                <div class="mgr70">
                    <el-form-item
              label="乳汁"
              prop="baseLatex"
            >
              <el-select
                placeholder="请选择"
                  v-model="fortyTwoDay.baseLatex"
              >
                <el-option
                  v-for="item in milk"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
                </div>
                <div class="mgr70">
                    <el-form-item
              label="乳房"
              prop="baseBreast"
            >
              <el-select
                placeholder="请选择"
                  v-model="fortyTwoDay.baseBreast"
              >
                <el-option
                  v-for="item in milk"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
                </div>
                <div class="mgr0">
                    <el-form-item
              label="乳头"
              prop="baseNipple"
            >
              <el-select
                placeholder="请选择"
                  v-model="fortyTwoDay.baseNipple"
              >
                <el-option
                  v-for="item in milk"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
                </div>
                <div class="subheadingBox">
                    <h5>妇科检查</h5>
                    <div class="positionWire2"></div>
                </div>
                <div class="mgr70">
                   <el-form-item
              label="外阴"
              prop="gynecologyVulva"
            >
              <el-select
                placeholder="请选择"
                  v-model="fortyTwoDay.gynecologyVulva"
              >
                <el-option
                  v-for="item in milk"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
                </div>
                <div class="mgr70">
                        <el-form-item
              label="阴道"
              prop="gynecologyVagina"
            >
              <el-select
                placeholder="请选择"
                  v-model="fortyTwoDay.gynecologyVagina"
              >
                <el-option
                  v-for="item in milk"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
                </div>
                <div class="mgr0">
                          <el-form-item
              label="宫颈"
              prop="gynecologyCervical"
            >
              <el-select
                placeholder="请选择"
                  v-model="fortyTwoDay.gynecologyCervical"
              >
                <el-option
                  v-for="item in milk"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
                </div>
                <div class="mgr70">
                          <el-form-item
              label="子宫"
              prop="gynecologyUterus"
            >
              <el-select
                placeholder="请选择"
                  v-model="fortyTwoDay.gynecologyUterus"
              >
                <el-option
                  v-for="item in milk"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
                </div>
                <div class="mgr70">
                         <el-form-item
              label="恶露"
              prop="gynecologyLochia"
            >
              <el-select
                placeholder="请选择"
                  v-model="fortyTwoDay.gynecologyLochia"
              >
                <el-option
                  v-for="item in milk"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
                </div>
                <div class="mgr0">
                      <el-form-item
              label="双侧附件"
              prop="gynecologyAttachmentOnBothSides"
            >
              <el-select
                placeholder="请选择"
                  v-model="fortyTwoDay.gynecologyAttachmentOnBothSides"
              >
                <el-option
                  v-for="item in milk"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
                </div>
                <div class="subheadingBox">
                    <h5>婴儿情况</h5>
                    <div class="positionWire2"></div>
                </div>
                <div class="mgr70">
                     <el-form-item
              label="婴儿当前体重（kg）"
              prop="babyWeight"
            >
              <el-input
                type="babyWeight"
                class="pregnantPhone"
                placeholder="请输入婴儿当前体重"
              v-model.number="fortyTwoDay.babyWeight"
              >
              </el-input>
            </el-form-item>
                </div>
                     <div class="mgr70">
                     <el-form-item
              label="婴儿身长（cm）"
              prop="babyHigh"
            >
              <el-input
                type="babyHigh"
                class="pregnantPhone"
                placeholder="请输入婴儿身长"
              v-model.number="fortyTwoDay.babyHigh"
              >
              </el-input>
            </el-form-item>
                </div>
                <div class="mgr70">
                   <el-form-item
              label="胸部"
              prop="babyChest"
            >
              <el-select
                placeholder="请选择"
                  v-model="fortyTwoDay.babyChest"
              >
                <el-option
                  v-for="item in milk"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
                </div>
                <div class="mgr70">
                     <el-form-item
              label="心"
              prop="babyHeart"
            >
              <el-select
                placeholder="请选择"
                  v-model="fortyTwoDay.babyHeart"
              >
                <el-option
                  v-for="item in milk"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
                </div>
                <div class="mgr0">
                   <el-form-item
              label="肺"
              prop="babyLungs"
            >
              <el-select
                placeholder="请选择"
                  v-model="fortyTwoDay.babyLungs"
              >
                <el-option
                  v-for="item in milk"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
                </div>
                <div class="subheadingBox mgb14">
                    <h5>婴儿情况</h5>
                    <div class="positionWire2"></div>
                </div>
                <el-radio-group v-model="fortyTwoDay.feedingType" @change = 'theBaby'>
                    <el-radio-button label="1">母乳</el-radio-button>
                    <el-radio-button label="2">混合</el-radio-button>
                    <el-radio-button label="3">人工喂养</el-radio-button>
                </el-radio-group>
            </div>
            <div class="wire"></div>

              <div class="malaiseBox">
          <div class="importDatabase1">
            <span>新生儿评估</span>
            <i class="joinIco"></i>
            <span>导入模板</span>
          </div>
          <el-form-item prop="malaise">
            <el-input
              type="textarea"
              autosize
              v-model="fortyTwoDay.malaise"
              style='width:930px; border-bottom:1px solid #a7a7a7; height: 34px;line-height:34px;'
            ></el-input>
          </el-form-item>
        </div>
         <div>
          <div class="importDatabase1">
            <span>指导与处理</span>
            <i class="joinIco2"></i>
            <span>导入模板</span>
          </div>
          <el-form-item prop="guideTheProcessing">
            <el-input
              type="textarea"
              autosize
              v-model="fortyTwoDay.guideTheProcessing"
              style='width:930px; border-bottom:1px solid #a7a7a7; height: 34px;line-height:34px;'
            ></el-input>
          </el-form-item>
        </div>
        </div>
         <div class="BtnBox clearfix">
              <el-form-item>
                   <el-button
            class="fl"
             @click="abandonBtn"
            >放弃本次编辑</el-button>
            <el-button
              type="primary"
              @click="submitForm('fortyTwoDay')"
              class="fr"
            >完 成</el-button>
          </el-form-item>
        </div>
        </el-form>

    </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
      //  体重
    var baseWeightVerify = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入体重"));
      } else if (!Number.isInteger(value)) {
        callback(new Error("请输入数字值"));
      } else if (value < 30 || value > 200) {
        callback(new Error("体重取值范围 30 ~ 200"));
      } else {
        callback();
      }
    };
    // 婴儿体重
      var babyWeightVerify = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入婴儿体重"));
      } else if (!Number.isInteger(value)) {
        callback(new Error("请输入数字值"));
      } else if (value < 0 || value >100) {
        callback(new Error("体重取值范围 0 ~ 100"));
      } else {
        callback();
      }
    };
      // 婴儿身长
      var babyHighVerify = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入婴儿身长"));
      } else if (!Number.isInteger(value)) {
        callback(new Error("请输入数字值"));
      } else if (value < 0 || value >100) {
        callback(new Error("身长取值范围 0 ~ 100"));
      } else {
        callback();
      }
    };
        // 血压
    var baseBloodVerify = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("血压不能为空"));
      } else if (!Number.isInteger(value)) {
        callback(new Error("请输入数字值"));
      } else if (value < 0 || value > 300) {
        callback(new Error("血压取值范围 0 ~ 300"));
      } else {
        callback();
      }
    };
    
    return {
      //   异常和未见异常
      milk: [
        {
          value: "0",
          label: "未见异常"
        },
        {
          value: "1",
          label: "异常"
        }
      ],
      fortyTwoDay:{
patientCenterId:"",//		
checkDay:"",//	天数	
baseBloodPressureHigh:"",//	血压高	
baseBloodPressureLow:"",//	血压低	
baseWeight:"",//	体重	
baseLatex:"0",//	乳汁	展开
baseBreast:"0",//	乳房	展开
baseNipple:"0",//	乳头	展开
gynecologyVulva:"0",//	妇科检查-外阴	展开
gynecologyVagina:"0",//	妇科检查-阴道	展开
gynecologyCervical:"0",//	妇科检查-宫颈	展开
gynecologyUterus:"0",//	妇科检查-子宫	展开
gynecologyLochia:"0",//	妇科检查-恶露	展开
gynecologyAttachmentOnBothSides:"0",//	妇科检查-双侧附件	展开
babyWeight:"",//	婴儿情况-体重 kg	
babyHigh:"",//	婴儿情况-身长 cm	
babyChest:"0",//	婴儿情况-胸部	展开
babyHeart:"0",//	婴儿情况-心	展开
babyLungs:"0",//	婴儿情况-肺	展开
feedingType:1,//	喂养方式-喂养方式	展开
malaise:"",//	新生儿评估	
guideTheProcessing:"",//	指导处理意见	
doctorImage:"",//	[file]	医生签名	
patientName:"",//	患者姓名	
token:'' // 复制
      },
            rules: {
        checkDay: [
          { required: true, message: "产后天数", trigger: "blur" }
        ],
        baseWeight: [{ trigger: "blur", validator: baseWeightVerify }],
        babyWeight: [{ trigger: "blur", validator: babyWeightVerify }],
        babyHigh: [{ trigger: "blur", validator: babyHighVerify }],
        malaise: [
          { required: true, message: "请输入新生儿评估", trigger: "blur" }
        ],
        guideTheProcessing: [
          { required: true, message: "请输入指导处理意见", trigger: "blur" }
        ],
           baseBloodPressureLow: [{ trigger: "blur", validator: baseBloodVerify }],
        baseBloodPressureHigh: [{ trigger: "blur", validator: baseBloodVerify }]
      },
     
    };
  },
      //  数据清除
 deactivated () { //清除keep-alive的缓存
    this.$destroy(true)
  },
  methods: {
    // 完成按钮
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          this.patientFourtyTwoInsert();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // 放弃编辑按钮
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
          this.allowSliding();

        })
        .catch(_ => {});
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 婴儿情况
    theBaby(){
        console.log(this.radio3)
    },
      //放弃编辑按钮
    abandonBtn(){
   this.$confirm('此操作将放弃本次编辑, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push({path:'/personalCenter'})
        })
    },
      // // 产后42天新增
      patientFourtyTwoInsert() {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.fortyTwoDay.token =token1;
         var tableDataParticulars = eval(
      "(" + localStorage.getItem("tableDataParticulars") + ")"
    );
     this.fortyTwoDay.patientName = tableDataParticulars.checkName;
     this.fortyTwoDay.patientCenterId = tableDataParticulars.id;
      console.log(this.fortyTwoDay)
      this.$api
        .patientFourtyTwoInsert(this.fortyTwoDay)
        .then(res => {
          console.log(res)
          if (res.status === "20200") {
            self.$router.push({path:'/personalCenter'})
          } else {
            $message.error("新增失败，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("新增错误，请稍后重试");
        });
    },
  }
};
</script>
<style lang="less" scoped>
.fl {
  float: left;
}
.fr {
  float: right;
}
.mgl10 {
  margin-left: 10px;
}
.mgl24 {
  margin-left: 24px;
}
.mgl174 {
  margin-left: 174px;
}
.mgl16 {
  margin-left: 16px;
}
.mgl28 {
  margin-left: 28px;
}
.mgr0 {
  margin-right: 0px !important;
}

.mgr34 {
  margin-right: 34px !important;
}
.mgr38 {
  margin-right: 40px !important;
}
.mgr70 {
  margin-right: 68px !important;
}
.mgr76 {
  margin-right: 70px;
  display: inline-block;
}
.mgr77 {
  margin-right: 70px;
}
.mgr110 {
  margin-right: 110px;
}
.mgb12 {
  margin-bottom: 12px;
}
.mgb14{
  margin-bottom: 14px;
}
.w260 {
  width: 260px;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.recordNewsBox {
  width: 100%;
  // min-height: 600px;
  background-color: #fff;
  box-shadow: 0px 0px 12px 4px rgba(51, 51, 51, 0.08);
  position: relative;
  #recordNewsBox_top {
    padding: 20px 26px 50px 26px;
    i {
      font-style: normal;
    }
    .wire {
      width: 100%;
      height: 1px;
      border-bottom: 1px dashed #ccc;
      margin-top: 24px;
    }
    .recordNewsBox_tittle {
      border-bottom: 1px solid black;
      padding-bottom: 22px;
      h2 {
        font-size: 18px;
        color: #333333;
        margin-bottom: 18px;
      }
    }
    .fake {
      position: relative;
      margin-right: 28px;
    }
    .pregnantNewsBox {
      .subheadingBox {
        width: 100%;
        position: relative;
        height: 26px;
        margin-top: 24px;
        h5 {
          background-color: #fff;
          display: block;
          z-index: 101;
          position: absolute;
          top: 0px;
          left: 0px;
          font-size: 16px;
          padding-right: 10px;
          font-weight: 500;
        }
        .positionWire2 {
          position: absolute;
          top: 10px;
          right: 0px;
          width: 100%;
          border-bottom: 1px dashed #ccc;
        }
      }
      // 孕妇基本信息块
      div {
        // display: inline-block;
        float: left;
        h3 {
          font-size: 14px;
          color: #666666;
          margin: 10px 0;
        }
        input {
          width: 260px;
          height: 40px;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding-left: 16px;
        }
        p {
          color: #fd4242;
          display: none;
        }
      }
      // .separateBox {
      //   width: 260px;
      //   height: 40px;
      //   border: 1px solid #ccc;
      //   border-radius: 4px;
      //   line-height: 40px;
      //   padding: 0 5px;
      //   input {
      //     width: 46%;
      //     height: 30px;
      //     display: inline-block;
      //     border: none;
      //     border-radius: 0px;
      //   }
      //   input:nth-child(1) {
      //     border-right: 1px solid #ccc;
      //   }
      // }
      .bloodBox {
  width: 260px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  .lowTension,
  .hyperpiesia {
    float: left;
  }
  .lowTension {
    border-right: 1px solid #ccc;
  }
}
      // 绑定卡号
      .bindingBox {
        width: 252px;
        line-height: 40px;
        border: 1px solid #ccc;
        border-radius: 4px;
        input {
          width: 154px;
          border: none;
        }
        .bindingBtn {
          cursor: pointer;
          height: 40px;
          width: 92px;
          background-color: #f6f6f6;
          color: #333333;
          font-size: 14px;
          line-height: 36px;
          text-align: center;
          border-radius: 4px;
        }
      }
      .feed {
        width: 84px;
        height: 36px;
        border: 1px solid #999999;
        background: #fff;
        color: #999999;
        border-radius: 4px;
        line-height: 36px;
        text-align: center;
        margin-right: 20px;
        cursor: pointer;
        margin-top: 16px;
      }
      .active {
        background-color: #68b6e7;
        border: none;
        color: #fff;
      }
    }
    .recordNewsFont {
        line-height: 40px;
      margin-left: 6px;
      i {
        margin: 0 10px;
      }
    }
    .importDatabase1 {
      margin-top: 24px;
      position: relative;
      span:nth-child(1) {
        font-size: 16px;
        color: #333333;
        margin-right: 40px;
        position: relative;
        &:after {
          content: " ";
          position: absolute;
          top: 4px;
          right: -16px;
          width: 2px;
          height: 14px;
          background-color: #ccc;
        }
      }
      span:nth-child(3) {
        font-size: 14px;
        color: #999999;
      }
      i {
        position: absolute;
        top: 4px;
        left: 104px;
        font-style: normal;
        background: url("../../../assets/file.png") no-repeat 0 0;
        width: 12px;
        height: 14px;
      }
      // .joinIco2 {
      //   left: 120px;
      // }
    }
    .malaise,
    .guideTheProcessing {
      width: 100%;
      margin-top: 20px;
      border-bottom: 1px solid #a7a7a7;
    }
  }
  .BtnBox {
    // height: 78px;
    margin-top: 20px;
    box-shadow: 0px -4px 8px 0px rgba(51, 51, 51, 0.08);
    .finishBtn,
    .abandonBtn {
      margin-top: 18px;
      width: 187px;
      height: 42px;
      border-radius: 4px;
      font-size: 14px;
      cursor: pointer;
    }
    .finishBtn {
      background-color: #68b6e7;
      color: #ffffff;
      float: right;
      margin-right: 30px;
    }
    .abandonBtn {
      background-color: #e0e0e0;
      color: #878787;
      float: left;
      margin-left: 80px;
    }
  }
}
</style>
<style lang="less">
.el-select-dropdown__item.selected {
  color: #68b6e7;
}
/* // 孕妇基本信息组件样式修改 */
.recordNewsBox .el-input__inner {
  width: 260px;
  border-radius: 8px;
  border-color: #ccc;
  background-color: #fff;
}
.recordNewsBox .el-select .el-input__inner{
  background-color: #f6f6f6;
}
.recordNewsBox {
  #recordNewsBox_top {
    .el-tabs__nav-scroll {
      height: 47px;
      line-height: 47px;
      background-color: #fff;
      color: #333333;
    }
    .el-tabs__item.is-active {
      color: #68b6e7;
    }
    .el-tabs__item:hover {
      color: #68b6e7;
      cursor: pointer;
    }
    .el-tabs__active-bar {
      background-color: #68b6e7;
    }
    .el-tabs__nav {
      margin-left: 26px;
    }
    .el-tabs__content {
      background-color: #fff;
    }

    .area-select.large,
    .spouseNewsBox .area-select.large {
      width: 260px;
      height: 40px;
      border-radius: 4px;
      background-color: #f6f6f6;
      color: #606266;
    }
    .el-carousel__arrow {
      cursor: pointer;
      -webkit-transition: 0.3s;
      transition: 0.3s;
      position: absolute;
      top: 36%;
      z-index: 10;
      color: #68b6e7;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      text-align: center;
      font-size: 36px;
      background: none;
    }
    .el-carousel__arrow--left {
      left: -4px;
    }
    .el-carousel__arrow--right {
      right: -4px;
    }
    .el-textarea {
      width: 500px;
      float: left;
    }
    .el-textarea__inner {
      display: block;
      resize: vertical;
      padding: 0px 15px;
      line-height: 1.5;
      color: #333;
      border: none;
    }
  }
  .el-radio-button,
  .el-radio-button__inner {
    margin-right: 20px;
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
  }
  .el-radio-button:first-child .el-radio-button__inner {
    border-radius: 4px;
    border: 1px solid #999999;
    color: #999999;
  }
  .el-radio-button__inner {
    border-radius: 4px;
    border: 1px solid #999999;
    color: #999999;
  }
  .el-radio-button:last-child .el-radio-button__inner {
    border-radius: 4px;
    border: 1px solid #999999;
    color: #999999;
  }
  .el-radio-button__orig-radio:checked + .el-radio-button__inner {
    background-color: #68b6e7;
    color: #fff;
    border: 1px solid #68b6e7;
  }
   .malaiseBox .el-textarea__inner {
      height: 32px;
      line-height: 32px;
    }
      .el-form--label-top .el-form-item__label {
    height: 40px;
    line-height: 40px;
    padding:0px;
  }
    .el-form-item {
        margin-bottom: 10px;
      }
     .BtnBox {
       .el-form-item__content{
        height: 78px;
        line-height:78px;
      }
        .el-button{
          width: 222px;
          height: 40px;
          border:none;
    border-radius: 4px;
    margin-top:24px;

        }
        .el-button--default{
          background-color: #e0e0e0;
          color:#878787;
          margin-left:84px;
        }
        .el-button--primary{
             background-color: #68b6e7;
          margin-right:84px;
          color:#fff;
        }
     } 
      .bloodBox {
      .el-input__inner {
        width: 128px;
        border-radius: 4px;
        border: none;
        height: 34px;
      }
      .el-form-item {
        margin-bottom: 0px;
      }
    }
}
 
</style>


