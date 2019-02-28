<template>
  <div class="recordNewsBox clearfix">
    <el-form
      :model="reviewOfNew"
      :rules="rules"
      ref="reviewOfNew"
      label-position='top'
      label-width="100px"
      :hide-required-asterisk='true'
    >
      <div id="recordNewsBox_top">
        <div class="recordNewsBox_tittle clearfix">
          <h2>新增复检记录</h2>
          <p class="fl fortyTwoTittle_left">
            <span class="fake">检查日期：<i v-model="reviewOfNew.checkDate">{{reviewOfNew.checkDate}}</i></span>
            <span>复检次数：<i>{{examineNum}}次</i></span>
          </p>
          <p class="fr"><span>操作医生：<i class="doctorName">{{doctorName}}</i></span></p>
        </div>

        <div class="pregnantNewsBox clearfix">

          <div class="mgr70">
            <el-form-item
              label="孕周（必填）"
              prop="gestationalWeek"
              autocomplete="off"
            >
              <el-input
                min='18'
                max='50'
                class="gestationalWeek"
                placeholder="请输入孕周"
                v-model="reviewOfNew.gestationalWeek"
              > </el-input>
            </el-form-item>
          </div>
          <div class="mgr70">
            <el-form-item
              label="当前体重（kg）"
              prop="bodyWeight"
            >
              <el-input
                type="bodyWeight"
                class="pregnantPhone"
                placeholder="请输入当前体重"
                v-model.number="reviewOfNew.bodyWeight"
              >
              </el-input>
            </el-form-item>
          </div>
          <div class="mgr74">
            <p
              slot="label"
              style="height:34px;line-height:34px; color: #666666; display:block;"
            >血 压（mmHg）</p>
            <div class="bloodBox">
              <div class="lowTension">
                <el-form-item prop="bloodPressureLow">
                  <el-input
                    type="bloodPressureLow"
                    placeholder="低压"
                    v-model.number="reviewOfNew.bloodPressureLow"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="hyperpiesia">
                <el-form-item prop="bloodPressureHigh">
                  <el-input
                    type="bloodPressureHigh"
                    placeholder="高压"
                    v-model.number="reviewOfNew.bloodPressureHigh"
                  ></el-input>
                </el-form-item>
              </div>
            </div>
          </div>
          <div class="mgr70">
            <el-form-item
              label="宫高"
              prop="highPalace"
            >
              <el-input
                type="highPalace"
                class="pregnantWeight"
                placeholder="请输入宫高"
                v-model.number="reviewOfNew.highPalace"
              >
              </el-input>
            </el-form-item>
          </div>
          <div class="mgr70">
            <el-form-item
              label="腹围"
              prop="abdominalGirth"
            >
              <el-input
                type="abdominalGirth"
                class="pregnantWeight"
                placeholder="请输入腹围"
                v-model.number="reviewOfNew.abdominalGirth"
              >
              </el-input>
            </el-form-item>
          </div>
          <div class="wire"></div>
          <div class="mgr70">
            <el-form-item
              label="胎方位"
              prop="position"
            >
              <el-select
                v-model="reviewOfNew.position"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in position"
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
              label="先露"
              prop="presentation"
            >
              <el-select
                v-model="reviewOfNew.presentation"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in presentation"
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
              label="胎心率"
              prop="cardiac"
            >
              <el-select
                v-model="reviewOfNew.cardiac"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in cardiac"
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
              label="衔接"
              prop="cohesion"
            >
              <el-select
                v-model="reviewOfNew.cohesion"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in cohesion"
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
              label="尿蛋白"
              prop="urineProtein"
            >
              <el-select
                v-model="reviewOfNew.urineProtein"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in urineProtein"
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
              label="浮肿"
              prop="edema"
            >
              <el-select
                v-model="reviewOfNew.edema"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in edema"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <el-form-item>
            <!-- <el-button
              type="primary"
              @click="submitForm('reviewOfNew')"
            >立即创建</el-button> -->
          </el-form-item>
          <div class="wire"></div>
          <div
            class="clearfix"
            style="height:120px; "
          >
            <p style="margin-top:24px;margin-bottom:12px; display:block; color:#666666;"><i style='color:red;margin-right:5px;'>*</i>预约下次日期</p>
            <el-form-item prop="makeAppointmentTime">
              <div
                class="bindingBox"
                @click="bindingBtn"
              >
                <div
                  class="bindingBoxTime"
                  v-model="reviewOfNew.makeAppointmentTime"
                >{{reviewOfNew.makeAppointmentTime}}</div>
                <div class="bindingBtn">预约记录</div>
              </div>
            </el-form-item>
            <span class="recordNewsFont"  v-show="pcCheckCellsBean.gestationalWeekStart"><i>{{pcCheckCellsBean.name}}</i>|<i>孕{{pcCheckCellsBean.gestationalWeekStart}}-{{pcCheckCellsBean.gestationalWeekEnd}}周</i></span>
          </div>
        </div>
        <div class="wire" style="margin-top:0px;"></div>
        <div class="malaiseBox">
          <div class="importDatabase1"
               @click="primaryDiagnosisLayer"
          >
            <span>自觉不适</span>
            <i class="joinIco"></i>
            <span>导入模板</span>
          </div>
          <el-form-item prop="malaise">
            <el-input
              type="textarea"
              autosize
              v-model="reviewOfNew.malaise"
              style='width:930px; border-bottom:1px solid #a7a7a7; padding-top:10px;'
            ></el-input>
          </el-form-item>
        </div>
        <div>
          <div class="importDatabase1"
             @click="disposalBtnLayer"
          >
            <span>指导处理意见</span>
            <i class="joinIco2"></i>
            <span>导入模板</span>
          </div>
          <el-form-item prop="guideTheProcessing">
            <el-input
              type="textarea"
              autosize
              v-model="reviewOfNew.guideTheProcessing"
              style='width:930px; border-bottom:1px solid #a7a7a7; padding-top:10px;'
            ></el-input>
          </el-form-item>
        </div>
        <!-- 自觉不适模板弹框 -->
          <el-dialog
            :visible.sync="templateDialogVisible"
            width="890px"
            :before-close="handleClose"
            :show-close='false'
               @opened='banSliding'
            @closed='allowSliding'
          >
            <div class="templateDialog">
              <div class="fl templateDialogLeft">
                <div class="tettleDiv">模板标题</div>
                <div class="Contant_left_overflow">
                  <ul class="leftList">
                    <li   
                    v-for="(item,index) in officeTableData"
                     v-html="item.name"
                      :key="index"
              :id="item.id"
                        @click="antenatalCareNum(index)"
                        :class="{active:index==showActive}"
                    ></li>
                  </ul>
                </div>
              </div>
              <div class="fr templateDialogRight">
                <div class="tettleDiv">模板内容</div>
                <h2>自觉不适</h2>
                <div class="malaise" v-html="malaiseLayer">
                </div>
              </div>
            </div>
            <span
              slot="footer"
              class="dialog-footer"
            >
              <el-button @click="primaryDiagnosisLayerNo">取 消</el-button>
              <el-button
                type="primary"
                @click="primaryDiagnosisLayerYes"
              >导入模板</el-button>
            </span>
          </el-dialog>
 <!-- 处置模板弹框 -->
          <el-dialog
            :visible.sync="templateDialogVisible2"
            width="890px"
            :before-close="handleClose"
            :show-close='false'
               @opened='banSliding'
            @closed='allowSliding'
          >
            <div class="templateDialog">
              <div class="fl templateDialogLeft">
                <div class="tettleDiv">模板标题</div>
                <div class="Contant_left_overflow">
                  <ul class="leftList">
                    <li   
                    v-for="(item,index) in officeTableData"
                     v-html="item.name"
                      :key="index"
                      :id="item.id"
                        @click="antenatalCareNumOpinion(index)"
                        :class="{active:index==showActiveOpinion}"
                    >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="fr templateDialogRight">
                <div class="tettleDiv">模板内容</div>
                <h2>处理意见</h2>
                <div class="handlingSuggestion " v-html="disposeLayer">
                </div>
              </div>
            </div>
            <span
              slot="footer"
              class="dialog-footer"
            >
              <el-button @click="antenatalCareNumOpinionNo">取 消</el-button>
              <el-button
                type="primary"
                @click="antenatalCareNumOpinionYes"
              >导入模板</el-button>
            </span>
          </el-dialog>


        <!-- 图片上传 -->
        <div class="imageUploadBox">
          <span>检查结果</span>
          <i>注：请您不要上传模糊图，影响检查结果，最多上传不得超过20张</i>
          <div class="imageBox">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :multiple='true'
              :auto-upload='false'
              :limit='20'
              :on-change='changeUpload'
              :http-request='imgFinshBtn'
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>

          <el-dialog
            :visible.sync="dialogVisibleImg"
            :show-close='false'
          >
            <img
              width="100%"
              :src="dialogImageUrl"
              alt=""
            >
          </el-dialog>
        </div>
      </div>
      <div class="BtnBox clearfix">
        <el-form-item>
          <!-- @click="resetForm('fortyTwoDay')" -->
          <el-button
            class="fl"
            @click="abandonBtn"
          >放弃本次编辑</el-button>
          <el-button
            type="primary"
            @click="submitForm('reviewOfNew')"
            class="fr"
          >完 成</el-button>
        </el-form-item>
      </div>
    </el-form>

    <!-- // 预约下次时间弹框 -->
    <el-dialog
      :visible.sync="dialogVisible"
      width="1010px"
      :before-close="handleClose"
      custom-class='dialogVisibleClass'
      @opened='banSliding'
      @closed='allowSliding'
      :show-close='false'
    >
      <div class="appointmentLayer clearfix">
        <div class="fl appointmentLayer_left">
          <p style="margin-bottom: 20px;">选择下次预约时间</p>
          <Calendar
            v-on:choseDay="clickDay"
            v-on:changeMonth="changeDate"
          ></Calendar>

        </div>
        <div class="fr  appointmentLayer_rigth">
          <el-tabs
            v-model="activeName"
            @tab-click="handleClick"
          >
            <el-tab-pane
              label="正常复检"
              name="normal"
            >
              <div class="reviewNumBox">
                <ul class="clearfix reviewNum">
                  <li
                    v-for="(item,index) in pcCheckForWeekBeanList"
                    @click="toggleClass(index)"
                    :class="{active:index==clickActive} "
                  >
                    <p>{{item.name}}</p>
                    <span>孕{{item.gestationalWeekStart}}-{{item.gestationalWeekEnd}}周</span>
                  </li>
                </ul>
              </div>
              <div class="wier">
              </div>
              <div class="normalRecheckCtant">
                <h3>产检项目</h3>
                <textarea>{{pcCheckCellsBean.checkDetail}}</textarea>
              </div>
              <div class="dotted"></div>
              <div class="normalRecheckCtant">
                <h3>温馨提示</h3>
                <textarea
                  name=""
                  id=""
                  style="height:74px;"
                >{{pcCheckCellsBean.remarks}}</textarea>
              </div>
            </el-tab-pane>
            <el-tab-pane
              label="异常复检"
              name="abnormal"
              class="abnormalRecheckBox clearfix"
            >
              <span>异常名称：</span>
              <input
                type="text"
                placeholder="请输入异常复检名称"
              >
              <div class="dotted"></div>
              <span class="fl">异常备注：</span>
              <el-input
                type="textarea"
                autosize
                placeholder="请输入内容"
                v-model="textarea2"
                clear="abnormalNote"
              >
              </el-input>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisibleCancel">取 消</el-button>
        <el-button
          type="primary"
          @click="finishiBtn"
        >确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
import Calendar from "vue-calendar-component";
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
    // 宫高
    var obstetricsHeightVerify = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入宫高"));
      } else if (!Number.isInteger(value)) {
        callback(new Error("请输入数字值"));
      } else if (value < 16 || value > 40) {
        callback(new Error("宫高取值范围 16 ~ 40"));
      } else {
        callback();
      }
    };
    // 腹围
    var obstetricsAbdominalGirthVerify = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入腹围"));
      } else if (!Number.isInteger(value)) {
        callback(new Error("请输入数字值"));
      } else if (value < 50 || value > 100) {
        callback(new Error("腹围取值范围 50 ~ 100"));
      } else {
        callback();
      }
    };
    // 预约下次日期
    //   let contactRadioactiveRaysDateVerify = (rule, value, callback) => {
    //     if (this.reviewOfNew.makeAppointmentTime == '') {
    //        return callback(new Error("请填写预约下次日期"));
    //     }else{
    // callback();
    //     }
    //     // if (!value) {

    //     // } else {

    //     // }
    //   };
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
       /* ------导入模板弹框star------- */
      templateDialogVisible: false, //诊断导入模板
      templateDialogVisible2: false, //处置导入模板
      officeTableData:[], // 模板数据
        showActive: -1,
        showActiveOpinion: -1,
malaiseLayer:'', //模板弹框自觉不适
disposeLayer:'',//模板弹框处理意见
 /* ------导入模板弹框end------- */
      // 孕妇婚姻状况
      marryType: [
        {
          value: "0",
          label: "初婚"
        },
        {
          value: "1",
          label: "再婚"
        },
        {
          value: "2",
          label: "其他"
        }
      ],
      // 胎方位
      position: [
        {
          value: "0",
          label: "未填写"
        },
        {
          value: "1",
          label: "枕左前位"
        },
        {
          value: "2",
          label: "枕右横位"
        },
        {
          value: "3",
          label: "枕右前位"
        }
      ],
      // 先露
      presentation: [
        {
          value: "0",
          label: "未填写"
        },
        {
          value: "1",
          label: "先头露"
        },
        {
          value: "2",
          label: "臀先露"
        }
      ],
      // 胎心率
      cardiac: [
        {
          value: "0",
          label: "未填写"
        },
        {
          value: "1",
          label: "正常"
        },
        {
          value: "2",
          label: "异常"
        }
      ],
      // 衔接
      cohesion: [
        {
          value: "2",
          label: "未填写"
        },
        {
          value: "0",
          label: "未衔接"
        },
        {
          value: "1",
          label: "已衔接"
        }
      ],
      // 尿蛋白
      urineProtein: [
        {
          value: "0",
          label: "正常"
        },
        {
          value: "1",
          label: "+1"
        },
        {
          value: "2",
          label: "+2"
        },
        {
          value: "3",
          label: "+3"
        }
      ],
      // 浮肿
      edema: [
        {
          value: "0",
          label: "无"
        },
        {
          value: "1",
          label: "轻"
        },
        {
          value: "2",
          label: "中"
        },
        {
          value: "3",
          label: "重"
        }
      ],
      marryTypeeModel: "",
      dialogVisible: false,
      activeName: "normal", //正常复检异常复检
      textarea2: "",
      // 复检新增数据
      reviewOfNew: {
        patientCenterId: "", //	centerId
        healthCheckId: "", //	体格检查-id 档案列表可获取
        checkDate: "", //	检查日期	展开
        gestationalWeek: "", //	孕周-周
        bloodPressureHigh: "", //	血压-高
        bloodPressureLow: "", //	血压-低
        bodyWeight: "", //	体重
        highPalace: "", //	宫高
        abdominalGirth: "", //	腹围
        position: "", //	胎位	展开
        presentation: "", //	先露	展开
        cardiac: "", //	胎心	展开
        cohesion: "", //	衔接	展开
        edema: "", //	浮肿	展开
        urineProtein: "", //	尿蛋白	展开
        malaise: "", //	自觉不适
        makeAppointmentTime: "", //	预约时间	展开
        guideTheProcessing: "", //	指导处理
        patientName: "", //	患者名称
        name: "", //	产检须知-名称
        number: "", //	产检须知-编号
        checkDetail: "", //	产检须知-产检提醒
        gestationalWeekStart: "", //	产检须知-孕周-start
        gestationalWeekEnd: "", //	产检须知-孕周-end
        remarks: "", //	产检须知-产检须知
        weekId: "", //	产检须知-产检须知id
        newAgeOfMenarche: "", //	现孕周
        newAgeOfMenarcheDay: "" //	现孕周-天
      },
      rules: {
        gestationalWeek: [
          { required: true, message: "请输入孕周", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        bodyWeight: [{ trigger: "blur", validator: baseWeightVerify }],
        highPalace: [{ trigger: "blur", validator: obstetricsHeightVerify }],
        abdominalGirth: [
          { trigger: "blur", validator: obstetricsAbdominalGirthVerify }
        ],
        position: [
          { required: true, message: "请选择胎方位", trigger: "change" }
        ],
        presentation: [
          { required: true, message: "请选择先露", trigger: "change" }
        ],
        cardiac: [
          { required: true, message: "请选择胎心率", trigger: "change" }
        ],
        cohesion: [
          { required: true, message: "请选择衔接", trigger: "change" }
        ],
        urineProtein: [
          { required: true, message: "请选择尿蛋白", trigger: "change" }
        ],
        edema: [{ required: true, message: "请选择浮肿", trigger: "change" }],
        // makeAppointmentTime: [
        //   {trigger: "click",validator: contactRadioactiveRaysDateVerify }
        // ],
        malaise: [
          { required: true, message: "请输入自觉不适", trigger: "blur" }
        ],
        guideTheProcessing: [
          { required: true, message: "请输入指导处理意见", trigger: "blur" }
        ],
        bloodPressureLow: [{ trigger: "blur", validator: baseBloodVerify }],
        bloodPressureHigh: [{ trigger: "blur", validator: baseBloodVerify }]
      },
      dialogImageUrl: "",
      imageUrl: "",
      dialogVisibleImg: false,
      myDate: "",
      pcCheckForWeekBeanList: [], //孕检信息
      pcCheckCellsBean: {},
      clickActive: 0,
      examineNum: "", //复检次数
      doctorName: "" //操作医生
    };
  },
  components: {
    Calendar
  },
  activated() {
    // this.getUser();
    // 模板查询
    this.templateFindList();
    this.format();
    this.examineNum =
      Number(window.localStorage.getItem("mayernal-web-recordNum")) + 1;
    var tableDataParticulars = eval(
      "(" + localStorage.getItem("tableDataParticulars") + ")"
    );
    this.tableDataParticulars = tableDataParticulars;
    console.log(this.tableDataParticulars);
    let doctorName = localStorage.getItem("mayernal-web-userName");
    this.doctorName = doctorName;
  },
  //  数据清除
  deactivated() {
    //清除keep-alive的缓存
    this.$destroy(true);
  },
  methods: {
    // 禁止滑动
    banSliding() {
      document.documentElement.style.overflow = "hidden";
    },
    // 允许滑动
    allowSliding() {
       document.documentElement.style.overflowY = "scroll";
      document.documentElement.style.overflowX = "hidden";
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
          // this.allowSliding();
        })
        .catch(_ => {});
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 完成按钮
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.reviewOfNew.makeAppointmentTime == "") {
            this.$message.error("请预约下次日期");
          } else {
            this.patientSecondCheckInsert();
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //放弃编辑按钮
    abandonBtn() {
      this.$confirm("此操作将放弃本次编辑, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$router.push({ path: "/personalCenter" });
      });
    },
    // 图片上传
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file, fileList) {
      this.dialogImageUrl = file.url;
      this.dialogVisibleImg = true;
    },
    imgFinshBtn(file, fileList) {
      console.log(file, fileList);
    },
    // 选择图片
    changeUpload(file, fileList) {
      console.log(fileList);
    },
    // 保存按钮
    finishBtn() {
      this.imgFinshBtn();
    },
    clickDay(data) {
      var reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
      let year = data.match(reg)[1];
      let mouth = data.match(reg)[2];
      let day = data.match(reg)[3];
      if (mouth < 10) {
        mouth = "0" + mouth;
      }
      if (day < 10) {
        day = "0" + day;
      }
      console.log(year + "-" + mouth + "-" + day);
      this.reviewOfNew.makeAppointmentTime = year + "-" + mouth + "-" + day;
    },
    format() {
      let day2 = new Date();
      day2.setTime(day2.getTime());
      let s2 =
        day2.getFullYear() +
        "-" +
        this.doubleZero(day2.getMonth() + 1) +
        "-" +
        this.doubleZero(day2.getDate());
      this.reviewOfNew.checkDate = s2;
    },
    // 预产期 补0
    doubleZero(num) {
      return num < 10 ? "0" + num : num;
    },
    clickToday(data) {
      console.log("跳到了本月今天", data); //跳到了本月
    },
    changeDate(data) {
      console.log("左右点击切换月份", data); //左右点击切换月份
    },
    // 正常复检产检切换
    toggleClass(index) {
      this.clickActive = index;
      this.pcCheckCellsBean = this.pcCheckForWeekBeanList[index];
      console.log(this.pcCheckCellsBean);
    },
    // 孕产信息查询
    getUser(token) {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .checkForWeekFindList({
          token: token1
        })
        .then(res => {
          if (res.status === "20200") {
            this.pcCheckForWeekBeanList = res.pcCheckForWeekBeanList;
            this.pcCheckCellsBean = this.pcCheckForWeekBeanList[0];
          }
        })
        .catch(error => {
          this.$message.error("查询错误，请稍后重试");
        });
    },
    bindingBtn(){
      this.dialogVisible = true;
      this.getUser();
    },
    dialogVisibleCancel(){
 this.dialogVisible = false;
//  if (this.reviewOfNew.makeAppointmentTime = '') {
 this.reviewOfNew.makeAppointmentTime = '';
    this.pcCheckCellsBean.name = '';
 this.pcCheckCellsBean.gestationalWeekStart = '';
 this.pcCheckCellsBean.gestationalWeekEnd = '';
//  }
    },
    finishiBtn() {
      if (this.reviewOfNew.makeAppointmentTime == "") {
        this.$message({
          showClose: true,
          message: "请选择下次预约时间",
          type: "error"
        });
      } else {
        this.reviewOfNew.name = this.pcCheckCellsBean.name;
        this.reviewOfNew.number = this.pcCheckCellsBean.number;
        this.reviewOfNew.checkDetail = this.pcCheckCellsBean.checkDetail;
        this.reviewOfNew.gestationalWeekStart = this.pcCheckCellsBean.gestationalWeekStart;
        this.reviewOfNew.gestationalWeekEnd = this.pcCheckCellsBean.gestationalWeekEnd;
        this.reviewOfNew.remarks = this.pcCheckCellsBean.remarks;
        this.reviewOfNew.weekId = this.pcCheckCellsBean.id;
        this.dialogVisible = false;
        var tableDataParticulars = eval(
          "(" + localStorage.getItem("tableDataParticulars") + ")"
        );
        this.reviewOfNew.patientName = tableDataParticulars.checkName;
        this.reviewOfNew.patientCenterId = tableDataParticulars.id;
        this.reviewOfNew.healthCheckId = tableDataParticulars.healthCheckId;
        this.reviewOfNew.newAgeOfMenarche =
          tableDataParticulars.newAgeOfMenarche;
        this.reviewOfNew.newAgeOfMenarcheDay =
          tableDataParticulars.newAgeOfMenarcheDay;
      }
    },
    // // 复检记录新增
    patientSecondCheckInsert() {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.reviewOfNew.makeAppointmentTime =
        this.reviewOfNew.makeAppointmentTime + " 10:00";
      this.reviewOfNew.token = token1;
      console.log(this.reviewOfNew);
      this.$api
        .patientSecondCheckInsert(this.reviewOfNew)
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            self.$router.push({ path: "/personalCenter" });
          } else {
            this.$message.error("新增失败，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("新增错误，请稍后重试");
        });
    },
  // 诊断导入模板
    primaryDiagnosisLayer(){
      this.templateDialogVisible = true;
    },
    // 导入模板取消按钮
    primaryDiagnosisLayerNo(){
       this.templateDialogVisible = false;
       this.malaiseLayer = '';
       this.showActive =-1;
    },
    // 导入模板按钮
    primaryDiagnosisLayerYes(){
 this.reviewOfNew.malaise = this.reviewOfNew.malaise + this.malaiseLayer;
 this.templateDialogVisible = false;
    },
    // 处置导入模板
disposalBtnLayer(){
this.templateDialogVisible2 = true;
},
 // 处置取消按钮
    // 导入模板取消按钮
    antenatalCareNumOpinionNo(){
       this.templateDialogVisible2 = false;
       this.disposeLayer = '';
       this.showActiveOpinion =-1;
    },
      // 导入模板按钮
    antenatalCareNumOpinionYes(){
 this.reviewOfNew.guideTheProcessing = this.reviewOfNew.guideTheProcessing+ this.disposeLayer;
 this.templateDialogVisible2 = false;
    },





  // 切换产检次数列表
    antenatalCareNum(index) {
      this.showActive = index;
    this.malaiseLayer =this.officeTableData[index].malaise;
      // this.checkForWeekAndCellFindList(token, this.antenatalCareNums[index].id);
    },

     antenatalCareNumOpinion(index) {
      this.showActiveOpinion = index;
    this.disposeLayer =this.officeTableData[index].dispose;
      // this.checkForWeekAndCellFindList(token, this.antenatalCareNums[index].id);
    },
   // 查询
    templateFindList() {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .templateFindList({
          token: token1,
          pageNum: 0,
          pageSize:100,
          isProhibit: 1
        })
        .then(res => {
          if (res.status === "20200") {
            self.officeTableData = res.pcTemplateBeanList;
          } else if (res.status === "20209") {
             self.officeTableData =[];
              this.$message.error("模板为空");
          } else {
            this.$message.error("查询失败，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("查询失败，请稍后重试");
        });
    },

  }
};
</script>
<style lang="less" scoped>
// 预约下次日期弹框
.appointmentLayer {
  width: 980px;
  height: 500px;
  // padding: 16px;
  .appointmentLayer_left {
    width: 330px;
    padding: 16px;
    background: #fff;
    height: 100%;
    background-color: #fff;

    p {
      color: #333333;
      font-size: 14px;
    }
  }
  .appointmentLayer_rigth {
    width: 627px;
    padding: 0 16px;
    background-color: #fff;
    height: 100%;
    .reviewNumBox {
      width: 580px;
      position: relative;
      overflow: hidden;
      height: 174px;
      border: 1px solid #ccc;
      margin-left: 10px;
      margin-bottom: 15px;
      .reviewNum {
        margin: auto;
        position: absolute;
        left: 0;
        top: 0;
        right: -17px;
        bottom: 0;
        overflow-x: hidden;
        overflow-y: scroll;
        padding: 6px;
        li {
          cursor: pointer;
          float: left;
          margin: 6px;
          width: 100px;
          height: 56px;
          line-height: 26px;
          text-align: center;
          background-color: #f9f9f9;
          border-radius: 4px;
          p {
            font-size: 14px;
          }
          span {
            font-size: 12px;
          }
        }
        .active {
          background-color: #68b6e7;
          color: #fff;
        }
        li:nth-child(5n) {
          margin-right: 0px;
        }
      }
    }
    .wier {
      width: 100%;
      height: 1px;
      background-color: #ccc;
      position: relative;
      img {
        position: absolute;
        top: -5px;
        width: 10px;
        height: 10px;
        left: 50%;
      }
    }
    .normalRecheckCtant {
      padding: 0 20px;
      h3 {
        margin-top: 20px;
        font-size: 14px;
        color: #666666;
        margin-bottom: 10px;
      }
      textarea {
        height: 54px;
        width: 100%;
        font-size: 12px;
        color: #333333;
      }
    }
    .dotted {
      border-bottom: 1px dashed #ccc;
      margin: 12px 0;
    }
    .abnormalRecheckBox {
      padding: 0 20px;
      .abnormalNote {
        display: inline-block;
        width: 500px;
        border: none;
        font-size: 14px;
        color: #333;
        textarea {
          border: none;
        }
      }
    }
  }
}

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
  min-height: 600px;
  background-color: #fff;
  box-shadow: 0px 0px 12px 4px rgba(51, 51, 51, 0.08);
  position: relative;
  #recordNewsBox_top {
    padding: 20px 26px;
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
      border-bottom: 1px solid #999;
      padding-bottom: 22px;
      margin-bottom: 10px;
      h2 {
        font-size: 18px;
        color: #333333;
        margin-bottom: 18px;
        font-weight: 600;
      }
    }
    .fortyTwoTittle_left{
      span{
         color:#666666;
         i{
           color:#333333;
         }
      }
    }
    .fake {
      position: relative;
      margin-right: 28px;
     
      &:after {
        content: " ";
        position: absolute;
        top: 2px;
        right: -14px;
        width: 2px;
        height: 14px;
        background-color: #ccc;
      }
    }
    .pregnantNewsBox {
      // 孕妇基本信息块
      div {
        // margin-right: 70px;
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
          border-radius: 4px; // margin: 10px 0px;
          padding-left: 16px;
        }
        p {
          color: #fd4242;
          display: none;
        }
      }
      .separateBox {
        width: 260px;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 4px;
        line-height: 40px;
        padding: 0 5px;
        input {
          width: 46%;
          height: 30px;
          display: inline-block;
          border: none;
          border-radius: 0px;
        }
        input:nth-child(1) {
          border-right: 1px solid #ccc;
        }
      }
      // 绑定卡号
      .bindingBox {
        // width: 252px;
        line-height: 40px;
        border: 1px solid #ccc;
        border-radius: 4px;
        .bindingBoxTime {
          width: 154px;
          height: 40px;
          padding-left: 30px;
          cursor: pointer;
        }
        .bindingBtn {
          cursor: pointer;
          height: 40px;
          width: 90px;
          background-color: #f6f6f6;
          color: #333333;
          font-size: 14px;
          line-height: 36px;
          text-align: center;
          border-radius: 4px;
        }
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
      cursor: pointer;
      span:nth-child(1) {
        font-size: 16px;
        color: #333333;
        margin-right: 40px;
        position: relative;
        &:after {
          content: " ";
          position: absolute;
          top: 2px;
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
        left: 90px;
        font-style: normal;
        background: url("../../../assets/file.png") no-repeat 0 0;
        width: 12px;
        height: 14px;
      }
      .joinIco2 {
        left: 120px;
      }
    }
    .malaise,
    .guideTheProcessing {
      width: 100%;
      margin-top: 20px;
      border-bottom: 1px solid #a7a7a7;
    }

    // 图片上传模块
    .imageUploadBox {
      margin-top: 20px;
      span {
        font-size: 16px;
        color: #333333;
      }
      i {
        font-size: 12px;
        color: #999999;
        font-style: normal;
        margin-left: 12px;
      }
      .imageBox {
        width: 100%;
        margin-top: 22px;
      }
    }
  }
  .BtnBox {
    margin-top: 20px;
    // height: 78px;
    // margin-top: 20px;
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
.bloodBox {
  width: 260px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  .lowTension,
  .hyperpiesia {
    float: left;
    height: 38px;
  }
  .lowTension {
    border-right: 1px solid #ccc;
  }
}
 // 导入模板弹框
  .templateDialog {
    width: 860px;
    height: 450px;
    .templateDialogLeft {
      width: 340px;
      background: #fff;
      .tettleDiv {
        font-size: 16px;
        color: #010101;
        border-bottom: 1px solid #ccc;
        width: 100%;
        padding: 20px 0px 22px 14px;
      }
      .Contant_left_overflow {
        height: 386px;
        position: relative;
        display: block;
        overflow: hidden;
        ul {
          position: absolute;
          left: 0;
          top: 0;
          right: -17px;
          bottom: 0;
          overflow-x: hidden;
          overflow-y: scroll;
          li {
            font-size: 14px;
            color: #333333;
            height: 42px;
            line-height: 42px;
            width: 100%;
            padding-left: 30px;
            cursor: pointer;
            -moz-user-select: none; /*火狐*/
            -webkit-user-select: none; /*webkit浏览器*/
            -ms-user-select: none; /*IE10*/
            -khtml-user-select: none; /*早期浏览器*/
            user-select: none;
          }
          .active {
            background-color: #68b6e7;
            color: #fff;
          }
        }
      }
    }
    .templateDialogRight {
      width: 505px;
      background: #fff;
      height: 450px;
      .tettleDiv {
        font-size: 16px;
        color: #010101;
        border-bottom: 1px solid #ccc;
        width: 100%;
        padding: 20px 0px 22px 14px;
      }
      h2 {
        font-size: 14px;
        color: #68b6e7;
        margin-top: 20px;
        margin: 20px 0px 20px 10px;
      }
      .malaise {
        // border-bottom: 1px solid #ccc;
      }
      .malaise,
      .handlingSuggestion {
        font-size: 14px;
        color: #666666;
        padding: 0px 0px 20px 10px;
         width: 100%;
        // height: 160px;
      }
    }
  }
</style>
<style lang="less">
.dialogVisibleClass {
  background-color: #f9f9f9;
}
.el-select-dropdown__item.selected {
  color: #68b6e7;
}
/* // 孕妇基本信息组件样式修改 */
.recordNewsBox .el-input__inner {
  width: 260px;
  border-radius: 4px;
  border-color: #ccc;
}
.recordNewsBox {
  .el-dialog__header {
    padding: 0px;
  }
  .el-dialog__body {
    padding: 15px;
  }
  .el-select {
    .el-input__inner {
      background-color: #f6f6f6;
    }
  }
  #recordNewsBox_top {
    .el-tabs__nav-scroll {
      height: 47px;
      line-height: 47px;
      background-color: #fff;
      color: #333333;
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
      padding: 0px 0px;
      line-height: 1.5;
      color: #666;
      border: none;
    }
    .el-dialog {
      position: relative;
      margin: 0 auto 50px;
      border-radius: 2px;
      -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 50%;
      background: #f9f9f9;
    }
    .dialog-footer {
      overflow: hidden;
      .el-button--default {
        float: left;
        width: 216px;
        height: 44px;
        background-color: #cccccc;
        color: #999999;
      }
      .el-button--primary {
        width: 216px;
        height: 44px;
        background-color: #68b6e7;
        color: #fff;
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

    .bindingBox {
      .el-date-editor.el-input,
      .el-date-editor.el-input__inner {
        width: 154px;
      }
      .el-form-item {
        margin-bottom: 0px;
      }
      .el-input__inner {
        width: 154px;
        border: none;
      }
    }
    .malaiseBox .el-textarea__inner {
      min-height: 32px;
      // line-height: 32px;
    }
  }
  .el-tabs__item.is-active {
    color: #68b6e7;
  }
  .el-button--primary {
    background-color: #68b6e7;
    border: none;
  }
  .el-tabs__active-bar {
    background-color: #68b6e7;
  }
  .el-form--label-top .el-form-item__label {
    height: 34px;
    line-height: 34px;
  }
  .BtnBox {
    .el-form-item__content {
      height: 78px;
      line-height: 78px;
    }
    .el-button {
      width: 222px;
      height: 40px;
      border: none;
      border-radius: 4px;
      margin-top: 24px;
    }
    .el-button--default {
      background-color: #e0e0e0;
      color: #878787;
      margin-left: 84px;
    }
    .el-button--primary {
      background-color: #68b6e7;
      margin-right: 84px;
      color: #fff;
    }
  }

  .el-form-item.is-success .el-input__inner,
  .el-form-item.is-success .el-input__inner:focus,
  .el-form-item.is-success .el-textarea__inner,
  .el-form-item.is-success .el-textarea__inner:focus {
    border-color: #ccc;
  }
    .abnormalRecheckBox {
    
      .el-textarea__inner{
        border:none;
        border-bottom:1px solid #ccc;
      }
    }
     .healthCheckupBox .el-dialog__header {
  display: none;
}
 .healthCheckupBox .el-dialog__body {
  background: #f6f6f6;
}
 .healthCheckupBox .el-dialog__footer {
  background: #f6f6f6;
}
 .healthCheckupBox .el-dialog .el-button--primary {
  margin-right: 290px;
}
 .healthCheckupBox .el-dialog .el-button--default {
  margin-right: 64px;
  width: 122px;
  height: 40px;
  background-color: #d3d3d3;
  color: #666666;
}
 .v-modal{
  z-index: 10001;
}
}
</style>


