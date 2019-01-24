<template>
  <div class="personalCenterSpouseNewsBox">
    <el-tabs v-model="activeName">
      <el-tab-pane
        label="高危评估"
        name="fifth"
      >
        <!-- 高危评估模块 -->
        <div class="riskAssessmentBox">
          <div class="riskAssessmentBoxTop">
            <span>项目类型</span>
            <div class="mgl10">
              <el-select
                v-model="projectTypeModel1"
                placeholder="请选择"
                @change="projectTypeModel1Select"
                clearable
              >
                <el-option
                  v-for="item in projectType1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <!-- <div class="mgl24">
              <el-select
                v-model="projectTypeModel2"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in projectType2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div> -->
            <!-- <span class="mgl174">历史评估记录</span>
            <div class="mgl10">
              <el-select
                v-model="historyAssessModel"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in historyAssess"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <input
              type="button"
              value="套用"
              class="useBtn mgl16"
            > -->
          </div>

          <div class="wire"></div>
          <!-- 基本情况 -->
          <div v-for="(item,index) in highRiskGradeCatalogueBeanList">
            <div class="lookAtallBtnBox">
              <h2>{{item.details}}</h2>
              <div class="positionWire"></div>
              <div
                class="basicLookAtallBtn"
                @click="toggle1(index)"
                :key="index"
              >

                <span>查看全部</span>
                <i
                  class="el-icon-arrow-down"
                  v-show="downIcon"
                ></i>
                <i
                  class="el-icon-arrow-up"
                  v-show="!downIcon"
                ></i>
              </div>
            </div>
            <!-- 基本信息隐藏藏快 -->

            <el-collapse-transition>
              <div
                class="basicInformationBox"
                :id="'template'+index"
              >
                <div>
                  <ul
                    class="pregnancySelectBox"
                    v-show="item.number ==2"
                  >
                    <li
                      class="selectAllBtn"
                      v-for="(item3,index) in assessArr"
                      @click="selectAllBtnClick(item3,index)"
                      :class="{active:index ==isActive}"
                    >{{item3.details}}</li>
                  </ul>
                </div>
                <div
                  class="partBox mgr34"
                  v-show='item.number != 4'
                >
                  <div class="partBox_top">
                    <i>5</i>
                    <span class="fen">分</span>
                    <span class="mgl28">黄色（一般风险）</span>
                  </div>
                  <div class="fivepartBox topicBox">
                    <a
                      href="javascript:;"
                      v-for="(items,index) in item.highRiskGradeTemplateDetailBeanList"
                      @click="assessDataBtn(items,index)"
                      :class="{'active':items.active}"
                      :cellgrades='items.cellGrades'
                      class="topicItem"
                      v-show='items.cellGrades ==5'
                    >{{items.cellDetails}}</a>
                    <a
                      href="javascript:;"
                      v-for="(item4,index) in topicArr.highRiskGradeTemplateDetailBeanList"
                      @click="assessDataBtn(item4,index)"
                      :class="{'active':item4.active}"
                      :cellgrades='item4.cellGrades'
                      class="topicItem"
                      v-show='item4.cellGrades ==5 && item.number == 2'
                    >{{item4.cellDetails}}</a>
                  </div>
                </div>
                <div class="partBox mgr34">
                  <div
                    class="partBox_top"
                    v-show='item.number != 4'
                  >
                    <i>10</i>
                    <span class="fen">分</span>
                    <span class="mgl28">橙色（较高风险）</span>
                  </div>
                  <div class="tenpartBox topicBox">
                    <a
                      href="javascript:;"
                      v-for="(items,index) in item.highRiskGradeTemplateDetailBeanList"
                      @click="assessDataBtn(items,index)"
                      :class="{'active':items.active}"
                      class="topicItem"
                      :cellgrades='items.cellGrades'
                      v-show='items.cellGrades ==10'
                    >{{items.cellDetails}}</a>
                    <a
                      href="javascript:;"
                      v-for="(item4,index) in topicArr.highRiskGradeTemplateDetailBeanList"
                      @click="assessDataBtn(item4,index)"
                      :class="{'active':item4.active}"
                      class="topicItem"
                      :cellgrades='item4.cellGrades'
                      v-show='item4.cellGrades ==10 && item.number == 2'
                    >{{item4.cellDetails}}</a>
                  </div>
                </div>
                <div
                  class="partBox"
                  v-show='item.number != 4'
                >
                  <div class="partBox_top">
                    <i>20</i>
                    <span class="fen">分</span>
                    <span class="mgl28">红色（高风险）</span>
                  </div>
                  <div class="twentypartBox topicBox">
                    <a
                      href="javascript:;"
                      v-for="(items,index) in item.highRiskGradeTemplateDetailBeanList"
                      @click="assessDataBtn(items,index)"
                      :class="{'active':items.active}"
                      class="topicItem"
                      :cellgrades='items.cellGrades'
                      v-show='items.cellGrades ==20'
                    >{{items.cellDetails}}</a>
                    <a
                      href="javascript:;"
                      v-for="(item4,index) in topicArr.highRiskGradeTemplateDetailBeanList"
                      @click="assessDataBtn(item4,index)"
                      :class="{'active':item4.active}"
                      class="topicItem"
                      :cellgrades='item4.cellGrades'
                      v-show='item4.cellGrades ==20 && item.number == 2'
                    >{{item4.cellDetails}}</a>
                  </div>
                </div>
                <div
                  v-show='item.number == 4'
                  class="topicBoxBox"
                >

                  <div class="topicBox">
                    <a
                      href="javascript:;"
                      v-for="(items,index) in item.highRiskGradeTemplateDetailBeanList"
                      @click="assessDataBtn(items,index)"
                      :class="[{'active':items.active},{'purpleItem':item.number == 4}]"
                    >{{items.cellDetails}}</a>
                  </div>
                </div>
              </div>
            </el-collapse-transition>
          </div>

          <div class="flaxBox">
            <div class="flaxBoxPart">
              <span class="totalPoints">{{signatureConfirmationForFiling.totalPoints}}分</span>
              <span>绿色（<i>0</i>）项</span>
              <span>黄色（<i class="fiveLength">0</i>）项</span>
              <span>橙色（<i class="tenLength">0</i>）项</span>
              <span>红色（<i class="twentyLength">0</i>）项</span>
              <span>紫色（<i class="purpleLength">0</i>）项</span>
              <input
                type="button"
                value="完  成"
                class="finishBtn"
                @click="finishBtn"
              >
            </div>
          </div>
        </div>

      </el-tab-pane>
      <el-tab-pane
        label="检查确认"
        name="sixth"
      >
        <div class="checkAffirmBox">
          <div class="checkAffirmBox_top clearfix">
            <div class="fl assessmentInformation">
              <p>评估信息</p>
              <span class="greenStrip">绿色（<i>0</i>）项</span>
              <span class="yellowStrip">黄色（<i class="fiveLength">0</i>）项</span>
              <span class="orangeStrip">橙色（<i class="tenLength">0</i>）项</span>
              <span class="redStrip">红色（<i class="twentyLength">0</i>）项</span>
              <span class="proponStrip">紫色（<i class="purpleLength">0</i>）项</span>
            </div>
            <div class="fr gradeInformation">
              <h2><span class="grade totalPoints">{{signatureConfirmationForFiling.totalPoints}}分</span></h2>
              <p>初次筛查与评分</p>
            </div>
          </div>
          <div class="wire4"></div>
          <div class="affirmBox2">
            <h3>评估详情</h3>
            <span class="greenStrip">绿色(低风险)</span>
            <div class="greenDiv">
            </div>
            <span class="yellowStrip">黄色(一般风险)</span>
            <div class="yellowDiv"></div>
            <span class="orangeStrip">橙色(较高风险)</span>
            <div class="orangeDiv"></div>
            <span class="redStrip">红色(高风险)</span>
            <div class="redDiv"></div>
            <span class="proponStrip">紫色(传染病)</span>
            <div class="purpleDiv"></div>
          </div>
          <h1 class="operator">操作人：<span>{{doctorName}}</span></h1>
          <div class="flaxBox">
            <div class="flaxBoxPart">
              <el-button
                type="primary"
                @click="examineAffirm"
              >完 成</el-button>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import $ from "jquery";
export default {
  data() {
    return {
      activeName: "fifth",
      highRiskGradeCatalogueBeanList: [], //高危所有数组
      isActive: 0, //孕产期合并症 选项切换
      baseHeartRateModel: "",
      baseLungModel: "",
      baseAbdomenLiverModel: "",
      baseAbdomenSpleenModel: "",
      baseSpinalLimbsDeformityModel: "",
      baseSpinalLimbsEdemaModel: "",
      baseBreastsModel: "",
      baseNippleModel: "",
      obstetricsVulvaModel: "",
      obstetricsVaginaModel: "",
      obstetricsCervixModel: "",
      obstetricsCorpusModel: "",
      obstetricsPairsAttachmentModel: "",
      assayBloodTypeModel: "",
      obstetricsFirstDewModel: "",
      obstetricsPlacentalModel: "",
      projectTypeModel1: "",
      projectTypeModel2: "",
      historyAssessModel: "",
      // 检查确认
      signatureConfirmationForFiling: {
        token: "", //
        patientCenterId: "", //
        patientName: "", //	患者姓名
        highRiskGradeTemplateId: "", //	高危模板
        totalNum: "", //	评项细则	展开
        totalPoints: "", //	评分
        details: "", //	高危详情	展开
        gradeType: "", //	高危等级
        newAgeOfMenarche: "", //	现孕周
        newAgeOfMenarcheDay: "", // 复制
        checkNumber: "" //次数
      },
      isShow1: true,
      isShow2: true,
      isShow3: true,
      downIcon: true,
      downIcon2: true,
      downIcon3: true,
      // 项目类型
      projectType1: [
        {
          value: "1",
          label: "基本情况"
        },
        {
          value: "2",
          label: "孕产期合并症"
        },
        {
          value: "3",
          label: "孕期并发症"
        },
        {
          value: "4",
          label: "紫色"
        }
      ],
      doctorName: "", //操作人
      tableDataParticulars: {},
      checkNumber: ""
    };
  },
  
  activated() {
    this.projectTypeModel1 = "";
    let checkNumber = this.$route.query.checkNumber;
    this.checkNumber = checkNumber;
    console.log(this.checkNumber);
    var tableDataParticulars = eval(
      "(" + localStorage.getItem("tableDataParticulars") + ")"
    );
    this.tableDataParticulars = tableDataParticulars;
    console.log(this.tableDataParticulars);
    let doctorName = localStorage.getItem("mayernal-web-userName");
    this.doctorName = doctorName;
    this.highRiskGradeTemplateDetailFindTreeList();
  },
  //  数据清除
 deactivated () { //清除keep-alive的缓存
    this.$destroy(true)
  },
  methods: {
    //   ------------------------高危评估star------------------------------------
    // 基本情况点击显示隐藏
    toggle1: function(index) {
      var tempIndex = "#" + "template" + index;
      $(tempIndex).toggle(300);
      this.downIcon = !this.downIcon;
    },
    // 多选
    assessDataBtn(item, index) {
      if (item.active) {
        Vue.set(item, "active", false); //为item添加不存在的属性，需要使用vue提供的Vue.set( object, key, value )方法。
      } else {
        Vue.set(item, "active", true);
      }
    },
    // 数据统计
    dataStatistics() {
      // 数组去重
      function uniq(array) {
        let temp = []; //一个新的临时数组
        for (let i = 0; i < array.length; i++) {
          if (temp.indexOf(array[i]) == -1) {
            temp.push(array[i]);
          }
        }
        return temp;
      }
      let objArr = $(".topicItem.active");
      let fiveArr = [];
      let tenArr = [];
      let twentyArr = [];
      let purpleArr = []; // 紫色数组
      for (let i = 0; i < objArr.length; i++) {
        if (objArr.eq(i).attr("cellgrades") == 5) {
          fiveArr.push(objArr.eq(i).html());
        } else if (objArr.eq(i).attr("cellgrades") == 10) {
          tenArr.push(objArr.eq(i).html());
        } else if (objArr.eq(i).attr("cellgrades") == 20) {
          twentyArr.push(objArr.eq(i).html());
        }
      }
      let purpleObjArr = $(".purpleItem.active");
      console.log(purpleObjArr);
      for (let i = 0; i < purpleObjArr.length; i++) {
        purpleArr.push(purpleObjArr.eq(i).html());
      }
      console.log(uniq(purpleArr));
      $(".fiveLength").html(uniq(fiveArr).length);
      $(".tenLength").html(uniq(tenArr).length);
      $(".twentyLength").html(uniq(twentyArr).length);
      $(".purpleLength").html(uniq(purpleArr).length);
      let _newsJson = {
        green: 0,
        yellow: $(".fiveLength").html(),
        orange: $(".tenLength").html(),
        red: $(".twentyLength").html(),
        purple: $(".purpleLength").html()
      };
      this.signatureConfirmationForFiling.totalNum = JSON.stringify(_newsJson);
      var _detailsJson = {
        green: [],
        yellow: uniq(fiveArr),
        orange: uniq(tenArr),
        red: uniq(twentyArr),
        purple: uniq(purpleArr)
      };
      this.signatureConfirmationForFiling.details = JSON.stringify(
        _detailsJson
      );
      let gradeType = 0;
      if (uniq(purpleArr).length > 0) {
        gradeType = 4;
      } else if (uniq(twentyArr).length > 0) {
        gradeType = 3;
      } else if (uniq(tenArr).length > 0) {
        gradeType = 2;
      } else if (uniq(fiveArr).length > 0) {
        gradeType = 1;
      } else {
        gradeType = 0;
      }
      this.signatureConfirmationForFiling.gradeType = gradeType;

      for (let i = 0; i < uniq(fiveArr).length; i++) {
        $(".yellowDiv").append("<p>" + fiveArr[i] + "</p>");
      }
      for (let i = 0; i < uniq(tenArr).length; i++) {
        $(".orangeDiv").append("<p>" + uniq(tenArr)[i] + "</p>");
      }
      for (let i = 0; i < uniq(twentyArr).length; i++) {
        $(".redDiv").append("<p>" + uniq(twentyArr)[i] + "</p>");
      }
      for (let i = 0; i < uniq(purpleArr).length; i++) {
        $(".purpleDiv").html("<p>" + uniq(purpleArr)[i] + "</p>");
      }
      this.signatureConfirmationForFiling.totalPoints =
        uniq(fiveArr).length * 5 +
        uniq(tenArr).length * 10 +
        uniq(twentyArr).length * 20;
    },
    finishBtn() {
      this.dataStatistics();
      this.activeName = "sixth";
    },

    // 孕产期合并症选项切换
    selectAllBtnClick(item, index) {
      this.isActive = index;
      console.log(index);
      this.topicArr = item;
      console.log(this.topicArr);
    },

    //高危评估查询
    highRiskGradeTemplateDetailFindTreeList() {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      let templateIdTalbe = window.localStorage.getItem(
        "mayernal-web-highRiskGradesTable"
      );
      this.$api
        .highRiskGradeTemplateDetailFindTreeList({
          token: token1,
          templateId: templateIdTalbe
        })
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            window.localStorage.setItem(
              "highRiskGradeCatalogueBeanList",
              JSON.stringify(res.highRiskGradeCatalogueBeanList)
            );
            this.highRiskGradeCatalogueBeanList =
              res.highRiskGradeCatalogueBeanList;
            let tempArr = this.highRiskGradeCatalogueBeanList;
            for (let i = 0; i < tempArr.length; i++) {
              if (tempArr[i].sonList.length !== 0) {
                this.assessArr = tempArr[i].sonList;
                this.topicArr = this.assessArr[0];
              }
            }
          } else if (res.status === "20209") {
          }
        })
        .catch(error => {
          this.$message.error("高危评估查询错误，请稍后重试");
        });
    },
    projectTypeModel1Select() {
      var lcalJson = window.localStorage.getItem(
        "highRiskGradeCatalogueBeanList"
      );
      var jsonObj = JSON.parse(lcalJson);
      this.highRiskGradeCatalogueBeanList = jsonObj;
      let projectTypeModel1 = this.projectTypeModel1;
      if (projectTypeModel1 == 1) {
        jsonObj.splice(1, 3);
        this.highRiskGradeCatalogueBeanList = jsonObj;
      } else if (projectTypeModel1 == 2) {
        jsonObj.splice(2, 3);
        jsonObj.shift();
        this.highRiskGradeCatalogueBeanList = jsonObj;
      } else if (projectTypeModel1 == 3) {
        jsonObj.splice(0, 2);
        jsonObj.pop();
        this.highRiskGradeCatalogueBeanList = jsonObj;
      } else if (projectTypeModel1 == 4) {
        jsonObj.splice(0, 3);
        this.highRiskGradeCatalogueBeanList = jsonObj;
      }
    },
    /* ****************************检查确认star******************************** */

    patientHighRiskGradeInsert(obj) {
      let self = this;
      this.$api
        .patientHighRiskGradeInsert(obj)
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
              // this.$destroy(true)
            self.$router.push({ path: "/personalCenter" });
          }
        })
        .catch(error => {
          this.$message.error("新增错误，请稍后重试");
        });
    },
    examineAffirm() {
      // 检查确认按钮
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.signatureConfirmationForFiling.token = token1;
      this.signatureConfirmationForFiling.patientCenterId = this.tableDataParticulars.id;
      this.signatureConfirmationForFiling.patientName = this.tableDataParticulars.checkName;
      let highRiskGradeTemplateId = window.localStorage.getItem(
        "mayernal-web-highRiskGradesTable"
      );
      this.signatureConfirmationForFiling.highRiskGradeTemplateId = highRiskGradeTemplateId;
      this.signatureConfirmationForFiling.newAgeOfMenarche = this.tableDataParticulars.newAgeOfMenarche;
      this.signatureConfirmationForFiling.newAgeOfMenarcheDay = this.tableDataParticulars.newAgeOfMenarcheDay;
      this.signatureConfirmationForFiling.checkNumber =
        Number(this.checkNumber) + 1;
      console.log(this.signatureConfirmationForFiling);
      this.patientHighRiskGradeInsert(this.signatureConfirmationForFiling);
    }
    /* ****************************检查确认end******************************** */
  }
};
</script>

<style lang="less" scoped>
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
  margin-right: 24px !important;
}
.mgr38 {
  margin-right: 40px !important;
}
.mgr70 {
  margin-right: 70px !important;
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
.w260 {
  width: 260px;
}
.el-select {
  input {
    background-color: #f6f6f6;
    color: #333333;
  }
}
// 高危评估模块
.riskAssessmentBox {
  padding: 14px 24px 84px 26px;
  .riskAssessmentBoxTop {
    div {
      display: inline-block;
      h3 {
        font-size: 14px;
        color: #666666;
        margin: 10px 0;
      }
      input {
        width: 154px;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding-left: 16px;
      }
      .redFont {
        color: #fd4242;
        display: none;
      }
      .layui-unselect,
      .layui-form-select {
        input {
          background-color: #f6f6f6;
        }
      }
    }
  }

  .wire {
    width: 100%;
    height: 2px;
    background-color: #e8e8e8;
    margin-top: 24px;
  }
  .useBtn {
    width: 60px;
    height: 30px;
    background-color: #68b6e7;
    text-align: center;
    line-height: 30px;
    color: #fff;
    border-radius: 4px;
  } // 基本情况块
  //  查看全部块
  .lookAtallBtnBox {
    width: 100%;
    position: relative;
    margin-top: 16px;
    display: block;
    height: 60px;
    line-height: 60px;
    h2 {
      font-size: 16px;
      display: inline-block;
      padding-right: 14px;
      display: block;
      position: absolute;
      top: -10px;
      background: #fff;
      z-index: 2;
      color: #333333;
    }
    .positionWire {
      position: absolute;
      display: inline-block;
      top: 34%;
      right: 0px;
      width: 100%;
      height: 1px;
      background-color: black;
    }
    .basicLookAtallBtn,
    .pregnancyAllBtn {
      padding: 0px 5px;
      position: absolute;
      right: 28px;
      top: -10px;
      background-color: #fff;
      cursor: pointer;
      i {
        color: #68b6e7;
      }
      span {
        color: #999999;
      }
    }
  }
  .basicInformationBox {
    div {
      display: inline-block;
    }
    .partBox,
    .partBox2 {
      width: 284px;
      .partBox_top {
        padding-bottom: 10px;
        width: 284px;
        border-bottom: 1px solid #999999;
        i {
          font-style: normal;
          font-size: 19px;
        }
        span {
          font-size: 14px;
        }
        .fen {
          position: relative;
          &:before {
            content: " ";
            position: absolute;
            top: 2px;
            left: 30px;
            width: 1px;
            height: 16px;
            background: #cccccc;
          }
        }
      }
      .topicBox {
        margin-top: 16px;
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        > a {
          width: 286px;
          font-size: 16px;
          color: #666666;
          line-height: 30px;
          padding-left: 26px;
          background: url("../../../assets/radio_false.png") no-repeat left
            center;
          background-size: 16px 16px;
          &.active {
            background: url("../../../assets/radio_true.png") no-repeat left
              center;
            background-size: 16px 16px;
            color: #68b6e7;
          }
        }
      }
    }
    .partBox2 {
      width: 100%;
    }
  } // 孕期合并发症选择块
  .pregnancySelectBox {
    li {
      font-size: 14px;
      color: #666666;
      padding: 8px 15px;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-right: 14px;
      margin-bottom: 14px;
    }
    li:hover {
      cursor: pointer;
    }
    .selectAllBtn {
      line-height: 32px;
      border-radius: 10px;
      text-align: center;
      margin-right: 14px;
      padding: 4px 10px;
    }
    .active {
      background-color: #68b6e7;
      color: #fff;
      border: none;
    }
  } // 添加内容块
  .contentBox {
    .partBox,
    .partBox2 {
      width: 284px;
      .topicBox {
        margin-top: 16px;
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        > a {
          font-size: 16px;
          color: #666666;
          line-height: 30px;
          padding-left: 26px;
          background: url("../../../assets/radio_false.png") no-repeat left
            center;
          background-size: 16px 16px;
          &.active {
            background: url("../../../assets/radio_true.png") no-repeat left
              center;
            background-size: 16px 16px;
            color: #68b6e7;
          }
        }
      }
    }
    .partBox2 {
      width: 100%;
    }
  }
  .violetBtn {
    padding: 0px 5px;
    position: absolute;
    right: 28px;
    top: 0px;
    background-color: #fff;
    i {
      color: #68b6e7;
    }
    span {
      color: #999999;
    }
  }
  .positionWire3 {
    position: absolute;
    display: inline-block;
    top: 50%;
    right: 0px;
    width: 890px;
    height: 1px;
    background-color: #999;
  }
  .topicBoxBox {
    margin-top: 10px;
    .topicBox {
      > a {
        font-size: 16px;
        color: #666666;
        line-height: 30px;
        padding-left: 26px;
        background: url("../../../assets/radio_false.png") no-repeat left center;
        background-size: 16px 16px;
        &.active {
          background: url("../../../assets/radio_true.png") no-repeat left
            center;
          background-size: 16px 16px;
        }
      }
    }
  }
  .flaxBox {
    z-index: 10000;
    height: 88px;
    width: 100%;
    position: fixed; // background-color: #fff;
    opacity: 0.8;
    bottom: 0px;
    left: 0;
    text-align: center;
    background-color: #f6f6f6;
    .flaxBoxPart {
      width: 1200px;
      background-color: #86c5ec;
      display: inline-block;
      .totalPoints {
        position: relative;
        font-size: 24px;
        color: #ffffff;
        line-height: 88px;
        margin-right: 74px;
        &:before {
          content: " ";
          position: absolute;
          top: 2px;
          right: -28px;
          width: 1px;
          height: 30px;
          background: #fff;
        }
      }
      span {
        font-size: 16px;
        color: #fff;
        margin-right: 26px;
        i {
          font-style: normal;
        }
      }
      .finishBtn {
        background-color: #f3f9fd;
        width: 160px;
        text-align: center;
        padding: 0px;
        border: none;
        margin-left: 60px;
        height: 40px;
        color: black;
        cursor: pointer;
      }
    }
  }
}
// 检查确认模块
.checkAffirmBox {
  padding: 14px 24px 24px 26px;
  min-height: 680px;
  .flaxBox {
    height: 88px;
    width: 100%;
    position: fixed; // background-color: #fff;
    opacity: 0.8;
    bottom: 0px;
    left: 0;
    z-index: 10000;
    background-color: #f6f6f6;
    .flaxBoxPart {
      height: 88px;
      line-height: 88px;
      width: 1200px;
      background-color: #86c5ec;
      text-align: right;
      margin: auto;
    }
  }
  .checkAffirmBox_top {
    .assessmentInformation {
      p {
        font-size: 16px;
        color: #333333;
        margin-bottom: 20px;
      }
      span {
        position: relative;
        margin-right: 20px;
        padding-left: 16px;
        i {
          font-style: normal;
        }
      }
      .greenStrip {
        &:after {
          content: " ";
          position: absolute;
          top: 4px;
          left: 0;
          width: 10px;
          height: 10px;
          background-color: green;
          border-radius: 50%;
        }
        &:before {
          content: " ";
          position: absolute;
          top: 5px;
          right: -14px;
          width: 1px;
          height: 10px;
          background-color: #ccc;
        }
      }
      .yellowStrip {
        &:after {
          content: " ";
          position: absolute;
          top: 4px;
          left: 0;
          width: 10px;
          height: 10px;
          background-color: yellow;
          border-radius: 50%;
        }
        &:before {
          content: " ";
          position: absolute;
          top: 5px;
          right: -14px;
          width: 1px;
          height: 10px;
          background-color: #ccc;
        }
      }
      .orangeStrip {
        &:after {
          content: " ";
          position: absolute;
          top: 4px;
          left: 0;
          width: 10px;
          height: 10px;
          background-color: orange;
          border-radius: 50%;
        }
        &:before {
          content: " ";
          position: absolute;
          top: 5px;
          right: -14px;
          width: 1px;
          height: 10px;
          background-color: #ccc;
        }
      }
      .proponStrip {
        &:after {
          content: " ";
          position: absolute;
          top: 4px;
          left: 0;
          width: 10px;
          height: 10px;
          background-color: purple;
          border-radius: 50%;
        }
      }
      .redStrip {
        &:after {
          content: " ";
          position: absolute;
          top: 4px;
          left: 0;
          width: 10px;
          height: 10px;
          background-color: red;
          border-radius: 50%;
        }
        &:before {
          content: " ";
          position: absolute;
          top: 5px;
          right: -14px;
          width: 1px;
          height: 10px;
          background-color: #ccc;
        }
      }
    }
  }

  .gradeInformation {
    height: 62px;
    border-left: 1px solid #ccc; // padding-left: 60px;
    width: 210px;
    text-align: center;
    h2 {
      margin-bottom: 4px;
      .grade {
        font-size: 24px;
        color: #68b6e7;
      }
      i {
        font-size: 14px;
        font-style: normal;
        color: #68b6e7;
      }
    }
    p {
      color: #666666;
      font-size: 12px;
    }
  }
  .wire4 {
    left: 0;
    width: 994px;
    height: 12px;
    background-color: #f6f6f6;
    position: absolute;
    margin-top: 20px;
  }
  .affirmBox2 {
    margin-top: 46px;
    h3 {
      display: block;
      color: #333333;
    }
    span {
      color: #666666;
      margin-top: 16px;
      margin-bottom: 16px;
      position: relative;
      padding-left: 18px;
      display: inline-block;
    }
    div {
      flex: 1;
      border-bottom: 1px solid black;
      p {
        margin: 6px;
      }
    }
    .greenStrip {
      &:after {
        content: " ";
        position: absolute;
        top: 3px;
        left: 0;
        width: 14px;
        height: 14px;
        background-color: green;
        border-radius: 50%;
      }
    }
    .yellowStrip {
      &:after {
        content: " ";
        position: absolute;
        top: 3px;
        left: 0;
        width: 14px;
        height: 14px;
        background-color: yellow;
        border-radius: 50%;
      }
    }
    .orangeStrip {
      &:after {
        content: " ";
        position: absolute;
        top: 3px;
        left: 0;
        width: 14px;
        height: 14px;
        background-color: orange;
        border-radius: 50%;
      }
    }
    .proponStrip {
      &:after {
        content: " ";
        position: absolute;
        top: 3px;
        left: 0;
        width: 14px;
        height: 14px;
        background-color: purple;
        border-radius: 50%;
      }
    }
    .redStrip {
      &:after {
        content: " ";
        position: absolute;
        top: 3px;
        left: 0;
        width: 14px;
        height: 14px;
        background-color: red;
        border-radius: 50%;
      }
    }
  }
  .operator {
    text-align: right;
    font-size: 14px;
    color: #333333;
    margin-top: 30px;
  }
}
</style>
<style lang='less'>
.el-select-dropdown__item.selected {
  color: #68b6e7;
}
/* // 高危评估组件样式修改 */
.riskAssessmentBox .el-input__inner {
  width: 152px;
  height: 30px;
  border-radius: 8px;
  border-color: #ccc;
  background-color: #f6f6f6;
}
.riskAssessmentBox .el-input__icon {
  line-height: 30px;
}

.personalCenterSpouseNewsBox .el-tabs__nav-scroll {
  height: 64px;
  line-height: 64px;
  background-color: #fff;
  color: #333333;
}
.personalCenterSpouseNewsBox .el-tabs__item.is-active {
  color: #68b6e7;
}
.personalCenterSpouseNewsBox .el-tabs__item:hover {
  color: #68b6e7;
  cursor: pointer;
}
.personalCenterSpouseNewsBox .el-tabs__active-bar {
  background-color: #68b6e7;
}
.personalCenterSpouseNewsBox .el-tabs__nav {
  margin-left: 26px;
}
.personalCenterSpouseNewsBox .el-tabs__content {
  background-color: #fff;
}

.pregnantNewsBox .area-select.large,
.personalCenterSpouseNewsBox .area-select.large {
  width: 260px;
  height: 40px;
  border-radius: 8px;
  background-color: #f6f6f6;
  color: #606266;
}
.pregnantNewsBox
  .cascader-menu-list
  .cascader-menu-option.selected
  ，
  .personalCenterSpouseNewsBox
  .cascader-menu-list
  .cascader-menu-option.selected {
  background-color: #f5f7fa;
  color: #68b6e7;
  font-weight: 700;
}
.personalCenterSpouseNewsBox .el-checkbox {
  width: 160px;
  margin: 5px 0;
  display: block;
  margin-left: 0px;
}
.personalCenterSpouseNewsBox
  .el-checkbox__input.is-checked
  + .el-checkbox__label {
  color: #68b6e7;
}
.personalCenterSpouseNewsBox .el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #68b6e7;
  border-color: #68b6e7;
}
.el-checkbox,
.el-checkbox__input {
  white-space: normal;
  word-break: break-all;
}
.personalCenterSpouseNewsBox .el-button--primary {
  background-color: #f3f9fd;
  width: 160px;
  height: 40px;
  padding: 0px;
  border: none;
  margin-right: 126px;
  color: black;
}
</style>
