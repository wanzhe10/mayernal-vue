<template>
  <div class="antenatalcareBox">
    <h2 class="antenatalcareBoxTittle">产检信息维护</h2>
    <!-- 基本信息块 -->
    <div class="antenatalcareTable">
      <ul class="tableHeader clearfix">
        <li style="width:140px; padding-left:12px;">产检次数</li>
        <li style="width:134px;">孕周</li>
        <li style="width:108px;">状态</li>
        <li style="width:214px;">产检须知</li>
        <li style="width:240px;">温馨提示</li>
        <li style="width:100px;">操作</li>
      </ul>
      <div class="hideBox">
        <ul class="tableContant">
          <li v-for="(item,index) in tableContantData" :key="index">
            <div class="positonBox active">
              <span style="width:132px; padding-left:12px;">{{item.num}}</span>
              <span style="width:134px;">{{item.gestationalWeeks}}</span>
              <span style="width:104px;">{{item.state}}</span>
              <span style="width:210px;">{{item.notice}}</span>
              <span style="width:210px;">{{item.hint}}</span>
              <span>
                <a href="javascript:;" @click="toggle1(index)">{{font}}</a>
                <a href="javascript:;"  @click="alterdialogVisible = true">操作</a>
              </span>
            </div>
            <el-collapse-transition>
              <div class="concealBox" v-show="isShow1 ===index">
                <p>
                  <span>{{item.num}}</span>|
                  <span>{{item.gestationalWeeks}}</span>|
                  <span>{{item.state}}</span>
                </p>
                <div class="concealBox_font">
                  <span class="top20">产检须知：</span>
                  <el-input type="textarea" :autosize="{ minRows: 6, maxRows: 10}" placeholder="请输入内容" v-model="item.theRequirements" class="theRequirements">
                  </el-input>
                  <span class="top70">温馨提示：</span>
                  <el-input type="textarea" :autosize="{ minRows: 6, maxRows: 10}" placeholder="请输入内容" v-model="item.warmPrompt" clear="warmPrompt">
                  </el-input>
                </div>
              </div>
            </el-collapse-transition>
          </li>
        </ul>
        <div class="newConstruction">
          <div class="addBox" @click="dialogVisible = true">
            <i class="addIcon"></i>
            <p class="newConstructionBtn">新增产检</p>
          </div>
        </div>
      </div>
      <img src="../../assets/noDataIcon.png" alt="暂无数据" class="noDataIcon">
    </div>

    <!-- 新增模板弹窗 -->
    <el-dialog title="新增模板" :visible.sync="dialogVisible" width="710px" :before-close="handleClose" class="newlyLayer">
      <div class="addTemplateLayer">
        <div class="addTemplateLayer_top">
          <div class="clearfix">
            <div class="fl modolNameBox">
              <p>产检名称</p>
              <el-input v-model="templateName" placeholder="请输入模板名称"></el-input>
            </div>
            <div class="fr activatedBox">
              <p>孕周范围</p>
              <el-select v-model="gestationalWeekStarModel" placeholder="请选择" size='100%'>
                <el-option v-for="item in gestationalWeekStar" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select> -
              <el-select v-model="gestationalWeekEndModel" placeholder="请选择" size='100%'>
                <el-option v-for="item in gestationalWeekEnd" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="mgt22">
            <p>激活状态</p>
            <el-select v-model="activatedStateModel" placeholder="请选择" size='100%'>
              <el-option v-for="item in activatedState" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="addTemplateLayer_bottom">
          <p class="clearfix">产检须知<span class="fr">{{remnantFont}}/2000</span></p>
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="输入模板自觉不适描述......." v-model="remnantFontContant" maxlength='2000' @input="descInput2">
          </el-input>
          <p class="clearfix">温馨提示<span class="fr">{{opinion}}/2000</span></p>
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="输入模板指导处理意见描述......." v-model="opinionModel" maxlength='2000' @input="descInput3">
          </el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
      <!-- 修改模板弹窗 -->
    <el-dialog title="编辑模板" :visible.sync="alterdialogVisible" width="710px" :before-close="handleClose" class="newlyLayer">
      <div class="addTemplateLayer">
        <div class="addTemplateLayer_top">
          <div class="clearfix">
            <div class="fl modolNameBox">
              <p>产检名称</p>
              <el-input v-model="altertemplateName" placeholder="请输入模板名称"></el-input>
            </div>
            <div class="fr activatedBox">
              <p>孕周范围</p>
              <el-select v-model="altergestationalWeekStarModel" placeholder="请选择" size='100%'>
                <el-option v-for="item in gestationalWeekStar" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select> -
              <el-select v-model="altergestationalWeekEndModel" placeholder="请选择" size='100%'>
                <el-option v-for="item in gestationalWeekEnd" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="mgt22">
            <p>激活状态</p>
            <el-select v-model="alteractivatedStateModel" placeholder="请选择" size='100%'>
              <el-option v-for="item in activatedState" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="addTemplateLayer_bottom">
          <p class="clearfix">产检须知<span class="fr">{{alterremnantFont}}/2000</span></p>
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="输入模板自觉不适描述......." v-model="alterremnantFontContant" maxlength='2000' @input="alterdescInput2">
          </el-input>
          <p class="clearfix">温馨提示<span class="fr">{{alteropinion}}/2000</span></p>
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="输入模板指导处理意见描述......." v-model="alteropinionModel" maxlength='2000' @input="alterdescInput3">
          </el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="alterdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="alterdialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      textarea2: "",
      textarea3: "",
      isShow1: -1,
      font: "查看",
      tableContantData: [
        {
          num: "第一次产检",
          gestationalWeeks: "孕6—13周",
          state: "已激活",
          notice: "建立妊娠保健手册是的...",
          hint: "之前没有做过婚检额度.....",
          theRequirements:
            "建立妊娠保健手册、确定孕周、推算预产期、评估妊娠高危因素，血压、体重指数、胎心率、血常规、血型（ABO和Rh）空腹血糖、刚功能和肾功能、乙型肝炎病毒表面抗原、梅毒螺旋体、HIV筛查、心电图",
          warmPrompt:
            "第3次产检，最重要的项目是B超胎儿畸形筛查，在孕期20周做超声波检查，主要是看胎儿外观发育上是否有较大问，医生会仔细量胎儿的头围、腹围、看大腿骨长度及检查脊柱是否有先天性异常。如果准妈妈照的是思维彩超，还可以看到宝宝的实时面部表情呢。照彩超之前，准妈妈要做的是保持平和的心态，如果过于紧张会影响胎儿的活动呢"
        },
        {
          num: "第二次产检",
          gestationalWeeks: "孕6—13周",
          state: "已激活",
          notice: "建立妊娠保健手册是的...",
          hint: "之前没有做过婚检额度.....",
          theRequirements:
            "建立妊娠保健手册、确定孕周、推算预产期、评估妊娠高危因素，血压、体重指数、胎心率、血常规、血型（ABO和Rh）空腹血糖、刚功能和肾功能、乙型肝炎病毒表面抗原、梅毒螺旋体、HIV筛查、心电图",
          warmPrompt:
            "第3次产检，最重要的项目是B超胎儿畸形筛查，在孕期20周做超声波检查，主要是看胎儿外观发育上是否有较大问，医生会仔细量胎儿的头围、腹围、看大腿骨长度及检查脊柱是否有先天性异常。如果准妈妈照的是思维彩超，还可以看到宝宝的实时面部表情呢。照彩超之前，准妈妈要做的是保持平和的心态，如果过于紧张会影响胎儿的活动呢"
        }
      ],
      activatedState: [
        {
          value: "0",
          label: "未激活"
        },
        {
          value: "1",
          label: "已激活"
        }
      ],
      // 孕周开始
      gestationalWeekStar: [
        {
          value: "13",
          label: "13"
        },
        {
          value: "14",
          label: "14"
        },
        {
          value: "15",
          label: "15"
        },
        {
          value: "16",
          label: "16"
        },
        {
          value: "17",
          label: "17"
        },
        {
          value: "18",
          label: "18"
        },
        {
          value: "19",
          label: "19"
        },
        {
          value: "20",
          label: "20"
        },
        {
          value: "21",
          label: "21"
        },
        {
          value: "22",
          label: "22"
        },
        {
          value: "23",
          label: "23"
        },
        {
          value: "24",
          label: "24"
        },
        {
          value: "25",
          label: "25"
        },
        {
          value: "26",
          label: "26"
        },
        {
          value: "27",
          label: "27"
        },
        {
          value: "28",
          label: "28"
        },
        {
          value: "29",
          label: "29"
        },
        {
          value: "30",
          label: "30"
        },
        {
          value: "31",
          label: "31"
        },
        {
          value: "32",
          label: "32"
        },
        {
          value: "33",
          label: "33"
        },
        {
          value: "34",
          label: "34"
        },
        {
          value: "35",
          label: "35"
        },
        {
          value: "36",
          label: "36"
        },
        {
          value: "37",
          label: "37"
        },
        {
          value: "38",
          label: "38"
        },
        {
          value: "39",
          label: "39"
        },
        {
          value: "40",
          label: "40"
        },
        {
          value: "41",
          label: "41"
        },
        {
          value: "42",
          label: "42"
        }
      ],
      gestationalWeekStarModel: "",
      altergestationalWeekStarModel: "",
      // 孕周结束
      gestationalWeekEnd: [
        {
          value: "13",
          label: "13"
        },
        {
          value: "14",
          label: "14"
        },
        {
          value: "15",
          label: "15"
        },
        {
          value: "16",
          label: "16"
        },
        {
          value: "17",
          label: "17"
        },
        {
          value: "18",
          label: "18"
        },
        {
          value: "19",
          label: "19"
        },
        {
          value: "20",
          label: "20"
        },
        {
          value: "21",
          label: "21"
        },
        {
          value: "22",
          label: "22"
        },
        {
          value: "23",
          label: "23"
        },
        {
          value: "24",
          label: "24"
        },
        {
          value: "25",
          label: "25"
        },
        {
          value: "26",
          label: "26"
        },
        {
          value: "27",
          label: "27"
        },
        {
          value: "28",
          label: "28"
        },
        {
          value: "29",
          label: "29"
        },
        {
          value: "30",
          label: "30"
        },
        {
          value: "31",
          label: "31"
        },
        {
          value: "32",
          label: "32"
        },
        {
          value: "33",
          label: "33"
        },
        {
          value: "34",
          label: "34"
        },
        {
          value: "35",
          label: "35"
        },
        {
          value: "36",
          label: "36"
        },
        {
          value: "37",
          label: "37"
        },
        {
          value: "38",
          label: "38"
        },
        {
          value: "39",
          label: "39"
        },
        {
          value: "40",
          label: "40"
        },
        {
          value: "41",
          label: "41"
        },
        {
          value: "42",
          label: "42"
        }
      ],
      gestationalWeekEndModel: "",
      alteractivatedStateModel: "",
      dialogVisible: false,
      contactsModel: "", //激活状态
      activatedStateModel: "", //弹框激活状态
      templateName: "", //弹框模板名称
      templateDscription: "", //模板描述
      remnantFontContant: "", //自觉不适
      opinionModel: "", //指导与处理意见
      currentPageOfice: 1,
      remnant: 100,
      remnantFont: 2000,
      opinion: 2000,

       altergestationalWeekEndModel: "",
     alterdialogVisible: false,
      altercontactsModel: "", //激活状态
      alteractivatedStateModel: "", //弹框激活状态
      altertemplateName: "", //弹框模板名称
      altertemplateDscription: "", //模板描述
      alterremnantFontContant: "", //自觉不适
      alteropinionModel: "", //指导与处理意见
      altercurrentPageOfice: 1,
      alterremnant: 100,
      alterremnantFont: 2000,
      alteropinion: 2000,
    };
  },
  methods: {
    // 基本情况点击显示隐藏
    toggle1: function(index) {
      this.isShow1 = this.isShow1 == index ? -1 : index;
      console.log(index);
      if (this.isShow1 == -1) {
        this.font = "查看";
      } else {
        this.font = "收起";
      }
    },
    descInput() {
      var txtVal = this.templateDscription.length;
      this.remnant = 100 - txtVal;
    },
    descInput2() {
      var remnantFontVal = this.remnantFontContant.length;
      this.remnantFont = 2000 - remnantFontVal;
    },
    descInput3() {
      var opinionVal = this.opinionModel.length;
      this.opinion = 2000 - opinionVal;
    },
    alterdescInput() {
      var edittxtVal = this.edittemplateDscription.length;
      this.editremnant = 100 - edittxtVal;
    },
    alterdescInput2() {
      var editremnantFontVal = this.editremnantFontContant.length;
      this.editremnantFont = 2000 - editremnantFontVal;
    },
    alterdescInput3() {
      var editopinionVal = this.editopinionModel.length;
      this.editopinion = 2000 - editopinionVal;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleClose2(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  props: ["item"]
};
</script>

<style lang="less" scoped>
.top20 {
  top: 20px;
}
.top70 {
  top: 70px;
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
.antenatalcareBox {
  width: 100%;
  min-height: 600px;
  background-color: #fff;
  .antenatalcareBoxTittle {
    display: block;
    width: 100%;
    background-color: #fbfbfb;
    padding: 24px 24px 24px 24px;
    font-size: 18px;
    color: #333333;
  }
  .antenatalcareTable {
    padding: 0px 20px;
    .tableHeader {
      border-bottom: 1px solid #999999;
      li {
        float: left;
        color: #333333;
        padding: 20px 0px;
      }
    }
    .hideBox {
      // display: none;
      .tableContant {
        li {
          .positonBox {
            margin-top: 5px;
            border-bottom: 1px solid #cccccc;
            span {
              display: inline-block;
              padding: 20px 0px;
              a {
                color: #68b7e7;
              }
              a:nth-child(1) {
                margin-right: 20px;
              }
            }
          }
          .active {
            box-shadow: 0px 2px 12px 5px #e1e1e1;
          }
        }
      }
      .concealBox {
        width: 100%;
        background-color: #f9f9f9;
        z-index: 2;
        padding: 0px 14px 30px 14px;
        margin-top: 8px;
        border-radius: 8px;
        p {
          border-bottom: 1px solid #ccc;
          color: #333333;
          padding: 20px 0;
          span {
            padding: 0px 14px;
          }
          span:nth-child(1) {
            padding-left: 0;
          }
        }
        .concealBox_font {
          position: relative;
          span {
            position: absolute;
            left: 0;
          }
        }
      }
    }
    .noDataIcon {
      width: 153px;
      height: 141px;
      position: absolute;
      top: 50%;
      left: 50%;
      display: none;
      transform: translate(-50%, -50%);
    }
  }
  .newConstruction {
    height: 60px;
    line-height: 60px;
    .addBox {
      position: relative;
      width: 92px;
      margin: auto;
      cursor: pointer;
      .newConstructionBtn {
        color: #68b7e7;
        font-size: 16px;
        margin-left: 8px;
      }
      .addIcon {
        background: url("../../assets/addIcon.png") no-repeat 0 0;
        width: 16px;
        height: 16px;
        position: absolute;
        left: -16px;
        top: 36%;
      }
    }
  }
  .addTemplateLayer {
    background-color: #fff;
    width: 710px;
    .addTemplateLayer_top {
      padding: 0px 24px 0 24px;
      p {
        margin-top: 16px;
        margin-bottom: 16px;
        font-size: 14px;
        color: #666666;
        span {
          font-size: 12px;
          color: #cccccc;
        }
      }
      .modolNameBox {
        width: 298px;
      }
    }
    .addTemplateLayer_bottom {
      padding: 0px 24px;
      p {
        margin-top: 16px;
        font-size: 14px;
        color: #666666;
        span {
          font-size: 12px;
          color: #cccccc;
        }
      }
    }
  }
}
</style>
<style lang="less">
.el-select-dropdown__item.selected {
  color: #68b6e7;
}
.antenatalcareBox {
  .el-input__inner {
    background-color: #f6f6f6;
  }
  .el-textarea {
    width: 90%;
    border: none;
    padding-top: 16px;
  }
  .el-textarea__inner {
    border: none;
    background-color: #f9f9f9;
    margin-left: 84px;
    min-height: 40px;
  }

  .modolNameBox {
    .el-input__inner {
      width: 314px;
      border-radius: 8px;
      border: 1px solid #ccc;
      background-color: #fff;
    }
    .el-textarea__inner:focus {
      border-color: #68b6e7;
    }
  }
  .activatedBox {
    .el-select {
      width: 140px;
    }
    .el-input--suffix .el-input__inner {
      border: 1px solid #ccc;
      border-radius: 8px;
    }
  }
  .mgt22 {
    .el-select {
      width: 314px;
    }
    .el-input--suffix .el-input__inner {
      border: 1px solid #ccc;
      border-radius: 8px;
    }
  }
  .addTemplateLayer_bottom {
    .el-textarea__inner {
      margin-left: 0px;
      background-color: #fff;
    }
    .el-textarea {
      width: 100%;
    }
  }
  .el-textarea__inner {
    border-radius: 8px;
    border: 1px solid #ccc;
  }
  .el-dialog__header {
    background-color: #ededed;
  }
  .el-dialog__body {
    padding: 0px;
  }
  .dialog-footer {
    overflow: hidden;
    .el-button--default {
      float: left;
      width: 122px;
      height: 40px;
      background-color: #cccccc;
      color: #999999;
    }
    .el-button--primary {
      width: 122px;
      height: 40px;
      background-color: #68b6e7;
      color: #fff;
    }
  }
  .el-dialog__footer {
    margin-top: 15px;
  }
}
</style>


