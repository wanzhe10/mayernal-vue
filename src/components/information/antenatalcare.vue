<template>
  <div class="antenatalcareBox" >
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
      <div
        class="hideBox"
        v-show='tableShow'>
        <ul class="tableContant">
          <li
            v-for="(item,index) in tableContantData"
            :key="index"
            :id='item.id'
            :number='item.number'
          >
            <div
              class="positonBox  clearfix"
              :class="{active:index==isActive}"
            >
              <span
                style="width:140px; padding-left:12px;"
                v-html='item.name'
              ></span>
              <span
                style="width:134px;"
                v-html='"孕"+item.gestationalWeekStart+"-"+item.gestationalWeekEnd +"周"'
              ></span>
              <span
                style="width:108px;"
                v-html="ishtml(item.types)"
              ></span>
              <span style="width:214px;"><i
                  style="width:150px; display: inline-block; overflow: hidden; white-space: nowrap;text-overflow: ellipsis;font-style: normal;"
                  v-html='item.remarks'
                >{{item.remarks}}</i></span>
              <span style="width:240px;  overflow: hidden; white-space: nowrap;text-overflow: ellipsis;"><i style="width:150px; display: inline-block; overflow: hidden; white-space: nowrap;text-overflow: ellipsis;font-style: normal;">{{item.checkDetail}}</i></span>
              <span>
                <a
                  href="javascript:;"
                  @click="toggle1(index)"
                  v-text='btnText'
                >查看</a>
                <!-- <a
                  href="javascript:;"
                  @click="toggle1(index)"
                 v-text='btnText'
                >收起</a> -->
                <a
                  href="javascript:;"
                  @click="handleEdit(index)"
                >操作</a>
              </span>
            </div>
            <el-collapse-transition>
              <div
                class="concealBox"
                v-show="isShow1 ===index"
              >
                <p>
                  <span v-html='item.name'></span>|
                  <span v-html='"孕"+item.gestationalWeekStart+"-"+item.gestationalWeekEnd +"周"'></span>|
                  <span v-html="ishtml(item.types)"></span>
                </p>
                <div class="concealBox_font">
                  <span class="top20">产检须知：</span>
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 4, maxRows: 10}"
                    placeholder="请输入内容"
                    v-model="item.remarks "
                    class="theRequirements"
                    readonly="readonly"
                    :value='item.remarks'
                  >
                  </el-input>
                  <span class="top70">温馨提示：</span>
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 4, maxRows: 10}"
                    placeholder="请输入内容"
                    v-model="item.checkDetail"
                    clear="warmPrompt"
                    readonly="readonly"
                    :value='item.checkDetail'
                  >
                  </el-input>
                </div>
              </div>
            </el-collapse-transition>
          </li>
        </ul>
        <div class="newConstruction">
          <div
            class="addBox"
            @click="dialogVisible = true"
          >
            <i class="addIcon"></i>
            <p class="newConstructionBtn">新增产检</p>
          </div>
        </div>
      </div>
      <img
        src="../../assets/noDataIcon.png"
        alt="暂无数据"
        class="noDataIcon"
        v-show='imgShow'
      >
    </div>
    <!-- 新增模板弹窗 -->
    <el-dialog
      title="新增模板"
      :visible.sync="dialogVisible"
      width="710px"
      :before-close="handleClose"
      class="newlyLayer"
           @opened = 'banSliding'
        @closed = 'allowSliding'
    >
      <div class="addTemplateLayer">
        <div class="addTemplateLayer_top">
          <div class="clearfix">
            <div class="fl modolNameBox">
              <p>产检名称</p>
              <el-input
                v-model="templateName"
                placeholder="请输入模板名称"
              ></el-input>
            </div>
            <div class="fr activatedBox">
              <p>孕周范围</p>
              <el-select
                v-model="gestationalWeekStarModel"
                placeholder="请选择"
                size='100%'
                @change="gestationalScope"
              >
                <el-option
                  v-for="item in gestationalWeekStar"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select> -
              <el-select
                v-model="gestationalWeekEndModel"
                placeholder="请选择"
                size='100%'
                @change="gestationalScope"
              >
                <el-option
                  v-for="item in gestationalWeekEnd"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="mgt22">
            <p>激活状态</p>
            <el-select
              v-model="activatedStateModel"
              placeholder="请选择"
              size='100%'
            >
              <el-option
                v-for="item in activatedState"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="addTemplateLayer_bottom">
          <p class="clearfix">产检须知<span class="fr">{{remnantFont}}/2000</span></p>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 10}"
            placeholder="输入模板自觉不适描述......."
            v-model="remnantFontContant"
            maxlength='2000'
            @input="descInput2"
          >
          </el-input>
          <p class="clearfix">温馨提示<span class="fr">{{opinion}}/2000</span></p>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 10}"
            placeholder="输入模板指导处理意见描述......."
            v-model="opinionModel"
            maxlength='2000'
            @input="descInput3"
          >
          </el-input>
        </div>
      </div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="radioEvent()"
        >确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改模板弹窗 -->
    <el-dialog
      title="编辑模板"
      :visible.sync="alterdialogVisible"
      width="710px"
      :before-close="handleClose"
      class="newlyLayer"
           @opened = 'banSliding'
        @closed = 'allowSliding'
    >
      <div class="addTemplateLayer">
        <div class="addTemplateLayer_top">
          <div class="clearfix">
            <div class="fl modolNameBox">
              <p :v-model="altertemplateNameId">产检名称</p>
              <el-input
                v-model="altertemplateName"
                placeholder="请输入模板名称"
              ></el-input>
            </div>
            <div class="fr activatedBox">
              <p>孕周范围</p>
              <el-select
                v-model="altergestationalWeekStarModel"
                placeholder="请选择"
                size='100%'
                   @change="gestationalScopes"
              >
                <el-option
                  v-for="item in gestationalWeekStar"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select> -
              <el-select
                v-model="altergestationalWeekEndModel"
                placeholder="请选择"
                size='100%'
                   @change="gestationalScopes"
              >
                <el-option
                  v-for="item in gestationalWeekEnd"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="mgt22">
            <p>激活状态</p>
            <el-select
              v-model="alteractivatedStateModel"
              placeholder="请选择"
              size='100%'
            >
              <el-option
                v-for="item in activatedState"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="addTemplateLayer_bottom">
          <p class="clearfix">产检须知<span class="fr">{{alterremnantFont}}/2000</span></p>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 10}"
            placeholder="输入产检须知"
            v-model="alterremnantFontContant"
            maxlength='2000'
            @input="alterdescInput2"
          >
          </el-input>
          <p class="clearfix">温馨提示<span class="fr">{{alteropinion}}/2000</span></p>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 10}"
            placeholder="输入温馨提示"
            v-model="alteropinionModel"
            maxlength='2000'
            @input="alterdescInput3"
          >
          </el-input>
        </div>
      </div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="alterdialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="editRadioBtn()"
        >确 定</el-button>
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
          name: "",
          gestationalWeekStart: "",
          gestationalWeekEnd: "",
          gestationalWeeks: "",
          types: "",
          remarks: "",
          checkDetail: "",
          theRequirements: "",
          warmPrompt: ""
        }
      ],
      activatedState: [
        {
          value: "0",
          label: "已激活"
        },
        {
          value: "1",
          label: "未激活"
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
      // 新建
      gestationalWeekEndModel: "",
      alteractivatedStateModel: "",
      dialogVisible: false,
      isActive: -1, // 点击查看给祖父li添加类名
      activatedStateModel: "", //弹框激活状态
      templateName: "", //弹框模板名称
      remnantFontContant: "", //新增产检
      opinionModel: "", //新增温馨提示
      remnant: 100,
      remnantFont: 2000, //新增产检须的字数
      opinion: 2000, //温馨提示的字数
      // 编辑
      altergestationalWeekEndModel: "",
      alterdialogVisible: false,
      alteractivatedStateModel: "", //弹框激活状态
      altertemplateName: "", //弹框模板名称
      alterremnantFontContant: "", //修改
      alteropinionModel: "", //指导与处理意见
      alterremnant: 100,
      alterremnantFont: "",
      alteropinion: "",
      altertemplateNameId: "", //id
      altertemplateNameNumber: "", //number
      btnText: "查看",
      tableShow: false,
      imgShow: false
    };
  },
  mounted() {
    let token1 = window.localStorage.getItem("mayernal-web-token");
    this.getUser(token1);
  },
  methods: {
    // 基本情况点击显示隐藏
    toggle1: function(index) {
      this.isShow1 = this.isShow1 == index ? -1 : index;
      this.isActive = this.isActive == index ? -1 : index;
      if (this.isShow1 == index) {
        event.target.innerHTML = "收起";
      } else {
        event.target.innerHTML = "查看";
      }
    },
    gestationalScope() {
      if (this.gestationalWeekStarModel >= this.gestationalWeekEndModel&& this.gestationalWeekEndModel != "") {
        this.$message({
          showClose: true,
          message: "孕周开始不能大于孕周结束",
          type: "warning"
        });
      }
    },
       gestationalScopes() {
      if (this.altergestationalWeekStarModel >= this.altergestationalWeekEndModel&& this.altergestationalWeekEndModel != "") {
        this.$message({
          showClose: true,
          message: "孕周开始不能大于孕周结束",
          type: "warning"
        });
      }
    },
    descInput2() {
      var remnantFontVal = this.remnantFontContant.length;
      this.remnantFont = 2000 - remnantFontVal;
    },
    descInput3() {
      var opinionVal = this.opinionModel.length;
      this.opinion = 2000 - opinionVal;
    },
    alterdescInput2() {
      var editremnantFontVal = this.alterremnantFontContant.length;
      this.alterremnantFont = 2000 - editremnantFontVal;
    },
    alterdescInput3() {
      var editopinionVal = this.alteropinionModel.length;
      this.alteropinion = 2000 - editopinionVal;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
          this.allowSliding();

        })
        .catch(_ => {});
    },
    handleClose2(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
          this.allowSliding();

        })
        .catch(_ => {});
    },
    // 查询
    getUser(token) {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .checkForWeekFindList({
          token: token1
        })
        .then(res => {
          if (res.status === "20200") {
            this.tableContantData = res.pcCheckForWeekBeanList;
            self.imgShow = false;
            self.tableShow = true;
          } else if (res.status === "20209") {
            self.tableShow = false;
            self.imgShow = true;
          }
        })
        .catch(error => {
          this.$message.error("查询错误，请稍后重试");
        });
    },
    // 新建
    radioEvent() {
      if (this.templateName == "") {
        this.$message({
          showClose: true,
          message: "产品名称不能为空",
          type: "warning"
        });
      } else if (this.activatedStateModel == "") {
        this.$message({
          showClose: true,
          message: "请选择激活状态",
          type: "warning"
        });
      } else if (this.remnantFontContant == "") {
        this.$message({
          showClose: true,
          message: "产检须知不能为空",
          type: "warning"
        });
      } else if (this.opinionModel == "") {
        this.$message({
          showClose: true,
          message: "温馨提示不能为空",
          type: "warning"
        });
      } else {
        let self = this;
        let token = localStorage.getItem("mayernal-web-token");
        let number = this.tableContantData.length + 1;
        console.log(number);
        this.$api
          .checkForWeekInsert({
            token: token,
            number: number,
            name: self.templateName,
            gestationalWeekStart: self.gestationalWeekStarModel,
            gestationalWeekEnd: self.gestationalWeekEndModel,
            checkDetail: self.opinionModel,
            isAbnormal: 0,
            remarks: self.remnantFontContant,
            types: self.activatedStateModel
          })
          .then(res => {
            console.log(res);
            if (res.status === "20200") {
                this.$message.success("新增成功");
              let token1 = window.localStorage.getItem("mayernal-web-token");
              this.getUser(token1);
              this.templateName = "";
              this.gestationalWeekStarModel = "";
              this.gestationalWeekEndModel = "";
              this.activatedStateModel = "";
              this.remnantFontContant = "";
              this.opinionModel = "";
              this.dialogVisible = false;
            } else if (res.status === "20210") {
              this.$message.error("信息重复，请勿重复添加");
            }
          })
          .catch(error => {
            this.$message.error("新建错误，请稍后重试");
          });
      }
    },
    //修改
    // 编辑
    handleEdit(i) {
      this.alterdialogVisible = true;
      console.log(this.tableContantData[i].id);
      this.altertemplateName = this.tableContantData[i].name;
      this.altergestationalWeekStarModel = this.tableContantData[
        i
      ].gestationalWeekStart;
      this.altergestationalWeekEndModel = this.tableContantData[
        i
      ].gestationalWeekEnd;
      this.alteractivatedStateModel = this.tableContantData[i].types;
      this.alterremnantFontContant = this.tableContantData[i].remarks;
      this.alteropinionModel = this.tableContantData[i].checkDetail;
      this.altertemplateNameId = this.tableContantData[i].id;
      this.altertemplateNameNumber = this.tableContantData[i].number;
      this.alterremnantFont = 2000 - this.alterremnantFontContant.length;
      this.alteropinion = 2000 - this.alterremnantFontContant.length;
    },
    // 编辑确认按钮
    editRadioBtn() {
      if (this.altertemplateName == "") {
        this.$message({
          showClose: true,
          message: "产品名称不能为空",
          type: "warning"
        });
      } else if (this.alteractivatedStateModel == "") {
        this.$message({
          showClose: true,
          message: "请选择激活状态",
          type: "warning"
        });
      } else if (this.alterremnantFontContant == "") {
        this.$message({
          showClose: true,
          message: "产检须知不能为空",
          type: "warning"
        });
      } else if (this.alteropinionModel == "") {
        this.$message({
          showClose: true,
          message: "温馨提示不能为空",
          type: "warning"
        });
      } else {
        var token = localStorage.getItem("mayernal-web-token");
        this.$api
          .checkForWeekUpdate({
            id: this.altertemplateNameId,
            token: token,
            number: this.altertemplateNameNumber,
            name: this.altertemplateName,
            gestationalWeekStart: this.altergestationalWeekEndModel,
            gestationalWeekEnd: this.altergestationalWeekStarModel,
            checkDetail: this.alteropinionModel,
            isAbnormal: 0,
            remarks: this.alterremnantFontContant,
            types: this.alteractivatedStateModel
          })
          .then(res => {
            // 调查询接口
            let self = this;
            let token1 = window.localStorage.getItem("mayernal-web-token");
            this.$api
              .checkForWeekFindList({
                token: token1
              })
              .then(res => {
                if (res.status === "20200") {
                    this.$message.success("编辑成功");
                  this.tableContantData = res.pcCheckForWeekBeanList;
                  this.alterdialogVisible = false;
                } else {
                  this.$message.error("编辑错误，请稍后重试");
                }
              })
              .catch(error => {
                this.$message.error("编辑错误，请稍后重试");
              });
          });
      }
    },
            // 禁止滑动
    banSliding(){
    document.documentElement.style.overflow='hidden';
    },
    // 允许滑动
    allowSliding(){
       document.documentElement.style.overflow='scroll';
    },

    // 判断是激活还是未激活
    ishtml(val) {
      if (val == 0) {
        return "已激活";
      } else {
        return "未激活";
      }
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
  top: 140px;
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
      .tableContant {
        li {
          .positonBox {
            margin-top: 5px;
            border-bottom: 1px solid #cccccc;
            span {
              display: inline-block;
              padding: 20px 0px;
              float: left;
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
            color:#68b7e7;
            border:none;
          }
        }
      }
      .concealBox {
        width: 100%;
        background-color: #f9f9f9;
        z-index: 2;
        padding: 0px 14px 0px 14px;
        margin-top: 8px;
        border-radius: 4px;
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
      border-radius: 4px;
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
      border-radius: 4px;
    }
  }
  .mgt22 {
    .el-select {
      width: 314px;
    }
    .el-input--suffix .el-input__inner {
      border: 1px solid #ccc;
      border-radius: 4px;
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
    border-radius: 4px;
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
.concealBox_font{
  textarea{
    border:none !important;
  }
}
</style>


