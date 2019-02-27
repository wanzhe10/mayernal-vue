<template>
  <div class="newfileBox">
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="孕妇基本信息"
        name="first"
      >
        <!-- 孕妇基本信息 -->
        <div
          class="pregnantNewsBox"
          :id="patientCenterId"
          :checkId='checkId'
        >
          <el-form
            :model="essentialInformation"
            :rules="rules2"
            ref="essentialInformation"
            label-position='top'
            label-width="100px"
            :hide-required-asterisk='true'
          >
            <div class="mgr70">
              <el-form-item
                label="孕妇姓名"
                prop="name"
                autocomplete="off"
              >
                <el-input
                  type="text"
                  class="pregnantName"
                  placeholder="请输入姓名"
                  v-model="essentialInformation.name"
                > </el-input>
              </el-form-item>
            </div>

            <div class="mgr70 bindingBox">
              <el-form-item
                label="就诊卡号（必填）"
                prop="number"
              >
                <el-input
                  type="text"
                  class="pregnantFN"
                  placeholder="请输入就诊卡号"
                  v-model="essentialInformation.number"
                ></el-input>
              </el-form-item>
              <div class="bindingBtn">卡号绑定</div>
            </div>
            <div class="mgr0">
              <el-form-item
                label="手机号"
                prop="telephone"
              >
                <el-input
                  type="text"
                  class="pregnantPhone"
                  placeholder="请输入手机号"
                  v-model="essentialInformation.telephone"
                >
                </el-input>
              </el-form-item>
            </div>

            <div class="mgr70">
              <el-form-item
                label="证件类型（必填）"
                prop="idCardType"
              >
                <el-select
                  v-model="essentialInformation.idCardType"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in idCardSelect"
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
                label="身份证号（必填）"
                prop="idCard"
              >
                <el-input
                  type="tel"
                  class="pregnantIdCard"
                  placeholder="请输入身份证号码"
                  v-model="essentialInformation.idCard"
                  @blur='pregnantIdCarda'
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="mgr0 birthBox">
              <el-form-item label="出生年月（自动获取）">
                <el-input
                  type="text"
                  class="layui-input pregnantDateBirth"
                  id="test1"
                  readonly="readonly"
                  v-model="essentialInformation.birthdayDate"
                >
                </el-input>
              </el-form-item>
              <h5 class="birth">
                <span
                  class="birth_sex"
                  v-model="essentialInformation.sex"
                >{{essentialInformation.sex}}</span>
                <span
                  class="birth_age"
                  v-model="essentialInformation.age"
                >{{essentialInformation.age}}岁</span>
              </h5>
            </div>
            <div class="mgr70">
              <el-form-item
                label="结婚年龄（岁）"
                prop="marryAge"
              >
                <el-input
                  type="marryAge"
                  class="pregnantMarriageAge"
                  placeholder="请输入结婚年龄"
                  v-model.number="essentialInformation.marryAge"
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="mgr70">
              <el-form-item
                label="孕前体重（kg）"
                prop="lastWeight"
              >
                <el-input
                  type="lastWeight"
                  class="lastWeight"
                  placeholder="请输入体重"
                  v-model.number="essentialInformation.lastWeight"
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="wire"></div>
            <div class="mgr70">
              <el-form-item
                label="婚姻状况"
                prop="marryType"
              >
                <el-select
                  v-model="essentialInformation.marryType"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in marryType"
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
                label="婚检"
                prop="marryCheck"
              >
                <el-select
                  v-model="essentialInformation.marryCheck"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in marryCheck"
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
                label="近半年避孕方法"
                prop="contraception"
              >
                <el-select
                  v-model="essentialInformation.contraception"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in contraception"
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
                label="文化程度"
                prop="education"
              >
                <el-select
                  v-model="essentialInformation.education"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in education"
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
                label="民族"
                prop="nation"
              >
                <el-select
                  v-model="essentialInformation.nation"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in nation"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            <br />
            <div class="mgr70">
              <el-form-item
                label="职业"
                prop="job"
              >
                <el-select
                  v-model="essentialInformation.job"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in job"
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
                label="工作单位"
                prop="jobCompanyName"
              >
                <el-input
                  type="text"
                  class="work"
                  placeholder="请输入工作单位"
                  v-model="essentialInformation.jobCompanyName"
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="wire"></div>

            <div class="mgr70">
              <el-form-item
                label="户口所在地"
                prop="idCardAddressProvince"
              >
                <el-cascader
                  :options="options"
                  v-model="selectedOptions1"
                  @change="handleChange1"
                ></el-cascader>
              </el-form-item>

            </div><br>

            <div class="mgr70">
              <el-form-item
                label="现住地址"
                prop="newAddressProvince"
              >
                <el-cascader
                  :options="options"
                  v-model="selectedOptions2"
                  @change="handleChange2"
                ></el-cascader>
              </el-form-item>
              <el-form-item prop="newAddressRemarks">
                <el-input
                  type="text"
                  placeholder="请输入详细地址"
                  class="presentAddress"
                  v-model="essentialInformation.newAddressRemarks"
                > </el-input>
              </el-form-item>
            </div>
            <div class="flaxBox">
              <div class="flaxBoxPart">
                <el-form-item>
                  <el-button
                    type="primary"
                    v-show="buttonShow"
                    @click="basicBtn('essentialInformation')"
                  >保 存</el-button>
                  <el-button
                    type="primary"
                    v-show="buttonHide"
                    @click="basicBtn('essentialInformation')"
                  >修 改</el-button>
                </el-form-item>
              </div>
            </div>
          </el-form>
        </div>
      </el-tab-pane>
      <!-- 配偶一般信息 -->
      <el-tab-pane
        label="配偶一般信息"
        name="second"
      >
        <div
          class=" spouseNewsBox  clearfix"
          :id='superId'
        >
          <el-form
            :model="spouseInformation"
            :rules="rules"
            ref="spouseInformation"
            label-position='top'
            label-width="100px"
            :hide-required-asterisk='true'
          >
            <div class="mgr70">
              <el-form-item
                label="配偶姓名"
                prop="name"
                autocomplete="off"
              >
                <el-input
                  type="text"
                  class="spouseName"
                  placeholder="请输入姓名"
                  v-model="spouseInformation.name"
                ></el-input>
              </el-form-item>
            </div>
            <div class="mgr70">
              <el-form-item
                label="手机号"
                prop="telephone"
                autocomplete="off"
              >
                <el-input
                  type="text"
                  class="spousePhone"
                  placeholder="请输入手机号"
                  v-model="spouseInformation.telephone"
                ></el-input>
              </el-form-item>
            </div>
            <div class="mgr0">
              <el-form-item
                label="结婚年龄（岁）"
                prop="marryAge"
              >
                <el-input
                  type="marryAge"
                  class="pregnantMarriageAge"
                  placeholder="请输入结婚年龄"
                  v-model.number="spouseInformation.marryAge"
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="mgr70">
              <el-form-item
                label="证件类型"
                prop="idCardType"
              >
                <el-select
                  v-model="spouseInformation.idCardType"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in idCardSelect"
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
                label="身份证号"
                prop="idCard"
              >
                <el-input
                  type="tel"
                  class="spouseIdCard"
                  placeholder="请输入身份证号码"
                  v-model="spouseInformation.idCard"
                  @blur='spouseInformationIdCarda'
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="mgr0 birthBox">
              <el-form-item label="配偶年龄">
                <el-input
                  type="text"
                  class="spouseAge"
                  readonly="readonly"
                  v-model.number="spouseInformation.age"
                >
                </el-input>
              </el-form-item>
              <h5 class="birth">
                <span class="birth_sex">男</span>
              </h5>
            </div>
            <div class="wire"></div>
            <div class="mgr70">
              <el-form-item
                label="婚姻状况"
                prop="marryType"
              >
                <el-select
                  v-model="spouseInformation.marryType"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in marryType"
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
                label="婚检"
                prop="marryCheck"
              >
                <el-select
                  v-model="spouseInformation.marryCheck"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in marryCheck"
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
                label="健康状态"
                prop="healthType"
              >
                <el-select
                  v-model="spouseInformation.healthType"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in healthType"
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
                label="文化程度"
                prop="education"
              >
                <el-select
                  v-model="spouseInformation.education"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in education"
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
                label="职业"
                prop="job"
              >
                <el-select
                  v-model="spouseInformation.job"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in job"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="wire"></div>

            <!-- 配偶吸烟块 -->
            <div class="somkingBox clearfix">
              <div class="somkingBoxTop">
                <div class="somkingFont">吸烟</div>
                <div class="somkingSelect clearfix">
                  <el-radio-group v-model="spouseSmoke">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="0">否</el-radio>
                  </el-radio-group>
                </div>
              </div>
              <!-- 吸烟隐藏显示块 -->
              <div :class="['somkingCirculationBox',{displayNo : spouseSmoke == 0}]">
                <p>请您输入每天的支数</p>
                <input
                  type="text"
                  placeholder="请输入"
                  class="cigaretteNUm"
                  v-model="spouseInformation.smoke"
                >
                <h5 class="birth">
                  <span class="bar_day">支/日</span>
                </h5>
              </div>
            </div>

            <!-- 配偶饮酒块 -->
            <div class="somkingBox clearfix">
              <div class="somkingBoxTop">
                <div class="somkingFont">饮酒</div>
                <div class="somkingSelect clearfix">
                  <el-radio-group v-model=" drinks">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="0">否</el-radio>
                  </el-radio-group>
                </div>
              </div>
              <!-- 饮酒隐藏块 -->
              <div :class="['drinkCirculationBox',{displayNo : drinks == 0}]">
                <p>请选择饮酒习惯</p>
                <a
                  href="jsvascript:;"
                  class="drinkOccasionally"
                  :class="{'active':tab == 1}"
                  @click="addNameClick(1)"
                >偶尔</a>
                <a
                  href="jsvascript:;"
                  class="drinkOften"
                  :class="{'active':tab == 2}"
                  @click="addNameClick(2)"
                >经常</a>
              </div>
            </div>
            <!-- 配偶家族史 -->
            <div
              class="somkingBox clearfix"
              style="margin-right:0px;"
            >
              <div class="somkingBoxTop">
                <div class="somkingFont">家族史</div>
                <div class="somkingSelect clearfix">
                  <el-radio-group
                    v-model="familyHistory"
                    @change="familyHistoryRedioSelect"
                  >
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="0">否</el-radio>
                  </el-radio-group>
                </div>
              </div>
              <!-- 配偶家族史隐藏快 -->
              <div
                style="margin-right:0px;"
                :class="['history1CirculationBox',{displayNo : familyHistory == 0}]"
              >
                <template>
                  <el-select
                    v-model="matePatientHistory"
                    multiple
                    filterable
                    remote
                    placeholder="请输入关键词"
                    :remote-method="remoteMethod"
                    :loading="loading"
                    @change="matePatientHistorySelect"
                  >
                    <el-option
                      v-for="item in options4"
                      :key="item.label"
                      :label="item.label"
                      :value="item.label"
                    >
                    </el-option>
                  </el-select>
                </template>

              </div>
            </div>
            <div class="wire"></div>
            <div class="mgr76 spouseSiteBox">
              <el-form-item
                label="现住地址"
                prop="newAddressProvince"
              >
                <el-cascader
                  :options="options"
                  v-model="selectedOptions3"
                  @change="handleChange3"
                ></el-cascader>
              </el-form-item>
              <el-form-item prop="newAddressRemarks">
                <el-input
                  type="text"
                  placeholder="请输入详细地址"
                  class="spouseResidenceAddress"
                  v-model="spouseInformation.newAddressRemarks"
                > </el-input>
              </el-form-item>
            </div>
            <div class="flaxBox">
              <div class="flaxBoxPart">
                <el-form-item>
                  <el-button
                    type="primary"
                    v-show="buttonShow1"
                    @click="basicBtn('spouseInformation')"
                  >保 存</el-button>
                  <el-button
                    type="primary"
                    v-show="buttonHide1"
                    @click="basicBtn('spouseInformation')"
                  >修 改</el-button>
                </el-form-item>
              </div>
            </div>
          </el-form>
        </div>
      </el-tab-pane>
      <!--孕产信息 -->

      <el-tab-pane
        label="孕产信息"
        name="third"
      >
        <div class="pregnancyNewsBox  clearfix">

          <el-form
            :model="maternalInformation"
            :rules="rules"
            ref="maternalInformation"
            label-position='top'
            label-width="100px"
            :hide-required-asterisk='true'
          >

            <div class="mgr76 fl">
              <el-form-item
                label="初诊日期"
                prop="firstCheckDate"
                autocomplete="off"
              >
                <el-input
                  type="text"
                  class="firstCheckDate"
                  id="test2"
                  readonly="readonly"
                  placeholder="请输入姓名"
                  v-model="maternalInformation.firstCheckDate"
                > </el-input>
              </el-form-item>
            </div>
            <div class="mgr76 fl w260">
              <el-form-item
                label="末次月经"
                prop="lastMenstruation"
              >
                <el-date-picker
                  v-model="maternalInformation.lastMenstruation"
                  type="date"
                  placeholder="选择日期"
                  @change="lastMenstrualPeriod"
                  :picker-options="pickerOptions"
                  value-format="yyyy-MM-dd"
                >
                </el-date-picker>
              </el-form-item>
            </div>
            <div class="mgr0 fl">
              <h3>预产期</h3>
              <input
                type="text"
                class="mgl30 dueDate"
                placeholder="自动计算"
                readonly='readonly'
                v-model="maternalInformation.dueDate"
              >
              <p class="redFont">此项为必填项！</p>
            </div>
            <div class="mgr76 fl">
              <h3>孕周</h3>
              <div class="gestationalWeeksBox clearfix">
                <div class="newAgeOfMenarche"> <span v-show="maternalInformation.newAgeOfMenarche !==''">{{maternalInformation.newAgeOfMenarche}}</span><span v-show="maternalInformation.newAgeOfMenarche ===''">孕周</span></div>
                <div class="newAgeOfMenarcheDay"><span v-show="maternalInformation.newAgeOfMenarcheDay !==''">{{maternalInformation.newAgeOfMenarcheDay}}</span><span v-show="maternalInformation.newAgeOfMenarcheDay ===''">孕天</span></div>
              </div>
            </div>
            <div class="mgr76 fl">
              <el-form-item
                label="月经史-初潮（岁）"
                prop="menstrualHistoryAge"
              >
                <el-input
                  type="menstrualHistoryAge"
                  class="menstrualHistoryAge"
                  placeholder="请输入初潮年龄"
                  v-model.number="maternalInformation.menstrualHistoryAge"
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="mgr0 fl">
              <el-form-item
                label="月经史—周期（天）"
                prop="menstrualHistoryDay"
              >
                <el-input
                  type="menstrualHistoryDay"
                  class="menstrualHistoryDay"
                  placeholder="请输入月经史周期"
                  v-model.number="maternalInformation.menstrualHistoryDay"
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="wire"></div>
            <div class="mgr76 mgb12">
              <h3>怀孕次数</h3>
              <el-select
                v-model="maternalInformation.pregnancyNumber"
                placeholder="请选择"
                @change="numberPregnancy"
              >
                <el-option
                  v-for="item in pregnancies"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <el-table
              :data="PregnancyInformation"
              style="width: 100%"
              class="dynamicTable"
              border
              :header-cell-style="{fontSize: '14px',color:'#333',textAlign:'center', backgroundColor:'#f6f6f6'}"
              :row-class-name="tableRowClassName"
            >
              <el-table-column
                prop="number"
                label="胎次"
                width="80"
                type="index"
              >
              </el-table-column>
              <el-table-column
                prop="pregnantType"
                label="孕周"
                width="124"
              >
                <template slot-scope="scope">
                  <div v-show="scope.row.pregnantType == '0'">早产</div>
                  <div v-show="scope.row.pregnantType == '1'">足月妊娠</div>
                  <div v-show="scope.row.pregnantType == '2'">过期妊娠</div>
                </template>
              </el-table-column>
              <el-table-column
                prop="productionDate"
                label="年月日"
                width="150"
              >
              </el-table-column>
              <el-table-column
                prop="productionOfAge"
                label="年龄"
                width="90"
              >
              </el-table-column>
              <el-table-column
                prop="productionAbortion"
                label="分娩方式"
                width="120"
              >
                <template slot-scope="scope">
                  <div v-show="scope.row.productionAbortion == '0'">自然</div>
                  <div v-show="scope.row.productionAbortion == '1'">剖宫产</div>
                </template>
              </el-table-column>
              <el-table-column
                prop="babySex"
                label="性别"
                width="84"
              >
                <template slot-scope="scope">
                  <div v-show="scope.row.babySex == '0'">男</div>
                  <div v-show="scope.row.babySex == '1'">女</div>
                </template>
              </el-table-column>
              <el-table-column
                prop="babyHealthType"
                label="健否"
                width="84"
              >
                <template slot-scope="scope">
                  <div v-show="scope.row.babyHealthType == '0'">健康</div>
                  <div v-show="scope.row.babyHealthType == '1'">死亡</div>
                </template>
              </el-table-column>
              <el-table-column
                prop="remarks"
                label="备注"
                width="114"
              >
                <template slot-scope="scope">
                  <div v-show="scope.row.remarks == ''"></div>
                  <div v-show="scope.row.remarks !== ''">{{scope.row.remarks}}</div>
                </template>
              </el-table-column>
              <el-table-column
                prop="modifyButton"
                label="操作"
                width="82px"
              >
                <template slot-scope="scope">
                  <el-button
                    @click="modifyButton(scope.$index, scope.row)"
                    type="text"
                    size="small"
                  >修改</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="wire"></div>
            <div class="mgr76">
              <el-form-item
                label="孕期用药"
                prop="parturitionFrontPharmacy"
              >
                <el-select
                  v-model="maternalInformation.parturitionFrontPharmacy"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in parturitionFrontPharmacy"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="mgr76">
              <el-form-item
                label="尿酮体"
                prop="ketosis"
              >
                <el-select
                  v-model="maternalInformation.ketosis"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in ketosis"
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
                label="早孕反应程度"
                prop="morningSickness"
              >
                <el-select
                  v-model="maternalInformation.morningSickness"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in morningSickness"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="mgr76">
              <el-form-item
                label="宠物接触"
                prop="animalContact"
              >
                <el-select
                  v-model="maternalInformation.animalContact"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in animalContact"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="mgr76">
              <el-form-item
                label="接触放射性"
                prop="contactRadioactiveRays"
              >
                <el-select
                  v-model="maternalInformation.contactRadioactiveRays"
                  placeholder="请选择"
                  @change="radioactivity"
                  default-value
                >
                  <el-option
                    v-for="item in contactRadioactiveRays"
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
                label="接触放射性时间"
                prop="contactRadioactiveRaysDate"
              >
                <el-date-picker
                  v-model="maternalInformation.contactRadioactiveRaysDate"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd"
                  :disabled="disabledInput"
                  :picker-options="pickerOptions"
                >
                </el-date-picker>
              </el-form-item>
            </div>
            <div class="wire"></div>
            <!--孕产信息接触毒物 -->

            <div class='bottomDiv'>
              <div class="somkingBox clearfix">
                <div class="somkingBoxTop">
                  <div class="somkingFont">接触毒物</div>
                  <div class="somkingSelect clearfix">
                    <el-radio-group v-model="maternalInformation.contactToxic">
                      <el-radio :label="1">是</el-radio>
                      <el-radio :label="0">否</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <!-- 孕产信息接触毒物-隐藏显示块 -->
                <div :class="['contactPoisonBox',{displayNo :maternalInformation.contactToxic == 0}]">
                  <el-form-item prop="contactToxicName">
                    <el-input
                      type="text"
                      placeholder="请输入毒物名称"
                      class="contactToxicName"
                      v-model="maternalInformation.contactToxicName"
                    ></el-input>
                  </el-form-item>
                  <el-form-item prop="contactToxicDate">
                    <el-date-picker
                      v-model="maternalInformation.contactToxicDate"
                      type="date"
                      placeholder="选择日期"
                      value-format="yyyy-MM-dd"
                      :picker-options="pickerOptions"
                    >
                    </el-date-picker>
                  </el-form-item>
                </div>
              </div>

              <!-- 孕产信息病毒感染 -->
              <div class="somkingBox clearfix">
                <div class="somkingBoxTop">
                  <div class="somkingFont">病毒感染</div>
                  <div class="somkingSelect clearfix">
                    <el-radio-group v-model="maternalInformation.virusInfection">
                      <el-radio :label="1">是</el-radio>
                      <el-radio :label="0">否</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <!-- 孕产信息病毒感染-隐藏显示块 -->
                <div :class="['virusInfectionBox',{displayNo :maternalInformation.virusInfection == 0}]">
                  <p>请选择感染类型</p>
                  <ul class="clearfix">
                    <li
                      v-for="(item,index) in infectionType"
                      :class="{'active':item.active}"
                      @click="changeClass(item,index)"
                      class="chunks"
                    >{{item.value}}</li>
                  </ul>
                </div>
              </div>
              <!-- 孕产信息家族史 -->
              <div class="somkingBox clearfix mgr0">
                <div class="somkingBoxTop">
                  <div class="somkingFont">家族史</div>
                  <div class="somkingSelect clearfix">
                    <el-radio-group
                      v-model="familyHistory2"
                      @change="familyHistoryRedioSelect2"
                    >
                      <el-radio :label="1">是</el-radio>
                      <el-radio :label="0">否</el-radio>
                    </el-radio-group>
                  </div>
                </div>
                <!-- 孕产信息家族史-隐藏显示块 -->
                <div
                  style="margin-right:0px;"
                  :class="['familyHistoryBox',{displayNo : familyHistory2 == 0}]"
                >
                  <template>
                    <el-select
                      v-model="pregnancyPatientHistory"
                      multiple
                      filterable
                      remote
                      placeholder="请输入关键词"
                      :remote-method="remoteMethod"
                      :loading="loading"
                      @change="pregnancyPatientHistorySelect"
                    >
                      <el-option
                        v-for="item in options4"
                        :key="item.value"
                        :label="item.label"
                        :value="item.label"
                      >
                      </el-option>
                    </el-select>
                  </template>
                </div>

              </div>

            </div>
            <!-- 孕产信息家族史 -->
            <div class="somkingBox clearfix mgr0">
              <div class="somkingBoxTop">
                <div class="somkingFont">现病史</div>
                <div class="somkingSelect clearfix">
                  <el-radio-group
                    v-model="familyHistory3"
                    @change="familyHistoryRedioSelect3"
                  >
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="0">否</el-radio>
                  </el-radio-group>
                </div>
              </div>
              <!-- 孕产信息家族史-隐藏显示块 -->
              <div
                style="margin-right:0px;"
                :class="['familyHistoryBox',{displayNo : familyHistory3 == 0}]"
              >
                <template>
                  <el-select
                    v-model="pregnancyNewHistory"
                    multiple
                    filterable
                    remote
                    placeholder="请输入关键词"
                    :remote-method="remoteMethod"
                    :loading="loading"
                    @change="pregnancyNewHistorySelect"
                  >
                    <el-option
                      v-for="item in options4"
                      :key="item.value"
                      :label="item.label"
                      :value="item.label"
                    >
                    </el-option>
                  </el-select>
                </template>
              </div>
            </div>
            <div class="flaxBox">
              <div class="flaxBoxPart">
                <el-form-item>
                  <el-button
                    type="primary"
                    v-show="buttonShow2"
                    @click="basicBtn('maternalInformation')"
                  >保 存</el-button>
                  <el-button
                    type="primary"
                    v-show="buttonHide2"
                    @click="basicBtn('maternalInformation')"
                  >修 改</el-button>
                </el-form-item>
              </div>
            </div>
          </el-form>
          <!-- 孕产史修改弹框 -->
          <el-dialog
            title="胎次一"
            :visible.sync="editdialogVisible"
            width="590px"
            :before-close="handleClose"
            class="newlyLayer"
            @opened='banSliding'
            @closed='allowSliding'
          >

            <div class="addTemplateLayer_bottom clearfix">
              <div class="fl mgr36">
                <p>孕周</p>
                <el-select
                  v-model="historyLayer.pregnantType"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in ageOfMenarche"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <p>分娩方式</p>
                <el-select
                  v-model="historyLayer.productionAbortion"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in productionAbortion"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
              <div class="fl mgr36">
                <p>年月日</p>
                <el-date-picker
                  v-model="historyLayer.productionDate"
                  type="date"
                  :clearable="false"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd"
                >
                </el-date-picker>
                <p>性别</p>
                <el-select
                  v-model="historyLayer.babySex"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in babySex"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
              <div class="fl">
                <p>年龄</p>
                <el-input
                  placeholder="年龄"
                  v-model="historyLayer.productionOfAge"
                  type="number"
                  min='18'
                  max='50'
                ></el-input>
                <p>健否</p>
                <el-select
                  v-model="historyLayer.babyHealthType"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in babyHealthType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
              <p style="display:inline-block;">备注（可不填）</p>
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 10}"
                placeholder="请输入备注......."
                maxlength='100'
                v-model="historyLayer.remarks"
              >
              </el-input>
            </div>
            <span
              slot="footer"
              class="dialog-footer"
            >
              <el-button @click="editdialogVisible = false">取 消</el-button>
              <el-button
                type="primary"
                @click="patientCenterUpdateBtn(historyLayer)"
              >保 存</el-button>
            </span>
          </el-dialog>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="体格检查"
        name="fourth"
      >
        <div class="healthCheckupBox">
          <h2 class="healthCheckTittle">一般检查</h2>
          <el-form
            :model="healthCheckup"
            :rules="rules"
            ref="healthCheckup"
            label-position='top'
            label-width="100px"
            :hide-required-asterisk='true'
          >
            <div class="flaotLeftBox clearfix">
              <div class="mgr74">
                <p
                  slot="label"
                  style="height:40px;line-height:40px; color: #666666;"
                >血 压（mmHg）</p>
                <div class="bloodBox">
                  <div class="lowTension">
                    <el-form-item prop="baseBloodPressureLow">
                      <el-input
                        type="baseBloodPressureLow"
                        placeholder="低压"
                        v-model.number="healthCheckup.baseBloodPressureLow"
                      ></el-input>
                    </el-form-item>
                  </div>
                  <div class="hyperpiesia">
                    <el-form-item prop="baseBloodPressureHigh">
                      <el-input
                        type="baseBloodPressureHigh"
                        placeholder="高压"
                        v-model.number="healthCheckup.baseBloodPressureHigh"
                      ></el-input>
                    </el-form-item>
                  </div>
                </div>
              </div>

              <div class="mgr74">
                <el-form-item
                  label="身 高（cm）"
                  prop="baseHeight"
                >
                  <el-input
                    type="baseHeight"
                    class="pregnantWeight"
                    placeholder="请输入身高"
                    v-model.number="healthCheckup.baseHeight"
                  >
                  </el-input>
                </el-form-item>
              </div>
              <div class="mgr0">
                <el-form-item
                  label="体 重（kg）"
                  prop="baseWeight"
                >
                  <el-input
                    type="baseWeight"
                    class="pregnantWeight"
                    placeholder="请输入体重"
                    v-model.number="healthCheckup.baseWeight"
                  >
                  </el-input>
                </el-form-item>
              </div>
            </div>

            <div class="healthCheckupBox_firstBox">
              <div class="mgr38">
                <el-form-item
                  label="心 率"
                  prop="baseHeartRate"
                >
                  <el-select
                    v-model="healthCheckup.baseHeartRate"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in baseHeartRate"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="mgr77">
                <el-form-item
                  label="肺"
                  prop="baseLung"
                >
                  <el-select
                    v-model="healthCheckup.baseLung"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in baseLung"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="mgr38">
                <el-form-item
                  label="肝"
                  prop="baseAbdomenLiver"
                >
                  <el-select
                    v-model="healthCheckup.baseAbdomenLiver"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in baseAbdomenLiver"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="mgr77">
                <el-form-item
                  label="脾"
                  prop="baseAbdomenSpleen"
                >
                  <el-select
                    v-model="healthCheckup.baseAbdomenSpleen"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in baseAbdomenSpleen"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="mgr38">
                <el-form-item
                  label="脊 柱"
                  prop="baseSpinalLimbsDeformity"
                >
                  <el-select
                    v-model="healthCheckup.baseSpinalLimbsDeformity"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in baseSpinalLimbsDeformity"
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
                  label="四肢水肿"
                  prop="baseSpinalLimbsEdema"
                >
                  <el-select
                    v-model="healthCheckup.baseSpinalLimbsEdema"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in baseSpinalLimbsEdema"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="mgr38">
                <el-form-item
                  label="乳 房"
                  prop="baseBreasts"
                >
                  <el-select
                    v-model="healthCheckup.baseBreasts"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in baseBreasts"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="mgr77">
                <el-form-item
                  label="乳 头"
                  prop="baseNipple"
                >
                  <el-select
                    v-model="healthCheckup.baseNipple"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in baseNipple"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
            <div
              class="wire"
              style="margin-bottom: 16px;"
            ></div>
            <h2 class="healthCheckTittle">妇科检查</h2>

            <div class="healthCheckupBox_firstBox">
              <div class="mgr38">
                <el-form-item
                  label="外阴"
                  prop="obstetricsVulva"
                >
                  <el-select
                    v-model="healthCheckup.obstetricsVulva"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in obstetricsVulva"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="mgr77">
                <el-form-item
                  label="阴道"
                  prop="obstetricsVagina"
                >
                  <el-select
                    v-model="healthCheckup.obstetricsVagina"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in obstetricsVagina"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>

              </div>
              <div class="mgr38">
                <el-form-item
                  label="宫颈"
                  prop="obstetricsCervix"
                >
                  <el-select
                    v-model="healthCheckup.obstetricsCervix"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in obstetricsCervix"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="mgr77">
                <el-form-item
                  label="宫体"
                  prop="obstetricsCorpus"
                >
                  <el-select
                    v-model="healthCheckup.obstetricsCorpus"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in obstetricsCorpus"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="mgr0  accessory">
                <el-form-item
                  label="附件"
                  prop="obstetricsPairsAttachment"
                >
                  <el-select
                    v-model="healthCheckup.obstetricsPairsAttachment"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in obstetricsPairsAttachment"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>

            <div
              class="wire"
              style="margin-bottom: 16px;"
            ></div>
            <h2 class="healthCheckTittle">化验检查</h2>
            <div class="mgr76">
              <el-form-item
                label="尿蛋白"
                prop="assayUrineProtein"
              >
                <el-input
                  type="assayUrineProtein"
                  class="pregnantWeight"
                  placeholder="请输入尿蛋白"
                  v-model="healthCheckup.assayUrineProtein"
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="mgr76">
              <el-form-item
                label="血红蛋白"
                prop="assayHemoglobin"
              >
                <el-input
                  type="assayHemoglobin"
                  class="pregnantWeight"
                  placeholder="请输入血红蛋白"
                  v-model="healthCheckup.assayHemoglobin"
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="mgr0">
              <el-form-item
                label="血小板"
                prop="assayBloodPlatelet"
              >
                <el-input
                  type="assayBloodPlatelet"
                  class="pregnantWeight"
                  placeholder="请输入血小板"
                  v-model="healthCheckup.assayBloodPlatelet"
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="mgr0">
              <el-form-item
                label="血型"
                prop="assayBloodType"
              >
                <el-select
                  v-model="healthCheckup.assayBloodType"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in assayBloodType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            <div
              class="wire"
              style="margin-bottom: 16px;"
            ></div>
            <h2 class="healthCheckTittle mgt140">产科检查</h2>
            <div class="mgr76">
              <el-form-item
                label="宫高"
                prop="obstetricsHeight"
              >
                <el-input
                  type="obstetricsHeight"
                  class="pregnantWeight"
                  placeholder="请输入宫高"
                  v-model.number="healthCheckup.obstetricsHeight"
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="mgr76">
              <el-form-item
                label="腹围"
                prop="obstetricsAbdominalGirth"
              >
                <el-input
                  type="obstetricsAbdominalGirth"
                  class="pregnantWeight"
                  placeholder="请输入腹围"
                  v-model.number="healthCheckup.obstetricsAbdominalGirth"
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="mgr0">
              <el-form-item
                label="先露"
                prop="obstetricsFirstDew"
              >
                <el-select
                  v-model="healthCheckup.obstetricsFirstDew"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in obstetricsFirstDew"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>

            </div>
            <div class="mgr76">
              <el-form-item
                label="胎心率"
                prop="obstetricsFetalHeart"
              >
                <el-input
                  type="obstetricsFetalHeart"
                  class="pregnantWeight"
                  placeholder="请输入胎心率"
                  v-model.number="healthCheckup.obstetricsFetalHeart"
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="mgr76">
              <el-form-item
                label="盆骨出口横径"
                prop="obstetricsTransversePelvicDiameter"
              >
                <el-input
                  type="obstetricsTransversePelvicDiameter"
                  class="pregnantWeight"
                  placeholder="请输入盆骨出口横径"
                  v-model.number="healthCheckup.obstetricsTransversePelvicDiameter"
                >
                </el-input>
              </el-form-item>
            </div>
            <div class="mgr0">
              <el-form-item
                label="胎方位"
                prop="obstetricsPlacental"
              >
                <el-select
                  v-model="healthCheckup.obstetricsPlacental"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in obstetricsPlacental"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            <div
              class="wire"
              style="margin-bottom: 16px;"
            ></div>

            <h2 class="healthCheckTittle modelBox">
              <span class="diagnoseTittle">诊断</span>
              <div
                class="primaryDiagnosisBtn"
                @click="primaryDiagnosisLayer"
                style=" float: none;"
              >
                <i class="fileIcon"></i>
                <span class="templateTittle ">导入模板</span>
              </div>
            </h2>
            <el-form-item prop="primaryDiagnosis">
              <el-input
                type="textarea"
                autosize
                v-model="healthCheckup.primaryDiagnosis"
                style='width:930px; border:none;'
              ></el-input>
            </el-form-item>

            <h2
              class="healthCheckTittle modelBox"
              style="margin-top: 16px;"
            >
              <span class="diagnoseTittle">处置</span>
              <div
                class="disposalBtn"
                 @click="disposalBtnLayer"
                style=" float: none;"
              >
                <i class="fileIcon"></i>
                <span class="templateTittle">导入模板</span>
              </div>
            </h2>
            <el-form-item prop="disposal">
              <el-input
                type="textarea"
                autosize
                v-model="healthCheckup.disposal"
                style='width:930px; border:none;'
              ></el-input>
            </el-form-item>
            <div class="flaxBox">
              <div class="flaxBoxPart">
                <el-form-item>
                  <el-button
                    type="primary"
                    v-show="buttonShow3"
                    @click="basicBtn('healthCheckup')"
                  >保 存</el-button>
                  <el-button
                    type="primary"
                    v-show="buttonHide3"
                    @click="basicBtn('healthCheckup')"
                  >修 改</el-button>
                </el-form-item>
              </div>
            </div>
          </el-form>
          <!-- 诊断模板弹框 -->
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

        </div>
      </el-tab-pane>
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
                class="basicInformationBox clearfix"
                :id="'template'+index"
              >
                <div>
                  <ul
                    class="pregnancySelectBox fl"
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
                  class="partBox mgr34 fl"
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
                <div class="partBox mgr34 fl">
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
              <span style="margin-right:227px;">紫色（<i class="purpleLength">0</i>）项</span>
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
            <div class="greenDiv"></div>
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
import { regionData, CodeToText, TextToCode } from "element-china-area-data";
import { RegExpObj, analyzeIDCard } from "../../../static/root";
export default {
  data() {
    // 校验Verify
    // 手机号校验
    let telephoneVerify = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else if (!RegExpObj.Reg_TelNo.test(value)) {
        callback(new Error("手机号格式错误"));
      } else {
        callback();
      }
    };
    //孕妇结婚年龄
    let marryAgeVerify = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      } else if (!Number.isInteger(Number(value))) {
        callback(new Error("请输入数字值"));
      } else if (value >= this.essentialInformation.age) {
        console.log(this.essentialInformation.age);
        return callback(new Error("结婚年龄不能大于实际年龄"));
      } else {
        callback();
      }
    };
    //配偶结婚年龄
    let marryAgeVerify2 = (rule, value, callback) => {
      console.log(value);
      if (!value) {
        return callback(new Error("年龄不能为空"));
      } else if (!Number.isInteger(Number(value))) {
        callback(new Error("请输入数字值"));
      } else if (this.spouseInformation.age !== "") {
        let age = Number(this.spouseInformation.age);
        if (value >= age) {
          return callback(new Error("结婚年龄不能大于实际年龄"));
        } else {
          callback();
        }
      } else {
        callback();
      }
    };
    // 初潮年龄 月经史
    let menstrualHistoryAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("初潮年龄不能为空"));
      } else if (!Number.isInteger(Number(value))) {
        callback(new Error("请输入数字值"));
      } else {
        callback();
      }
    };
    let menstrualHistoryDay = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("周期不能为空"));
      } else if (!Number.isInteger(Number(value))) {
        callback(new Error("请输入数字值"));
      } else {
        callback();
      }
    };

    // 身份证号
    let idCardVerify = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("证件号不能为空"));
      } else if (!RegExpObj.Reg_IDCardNo.test(value)) {
        callback(new Error("证件号格式错误"));
      } else {
        callback();
      }
    };
    // 接触放射性时间接触毒物
    let contactRadioactiveRaysDateVerify = (rule, value, callback) => {
      if (this.maternalInformation.contactRadioactiveRays == 0) {
        callback();
      } else {
        if (!value) {
          return callback(new Error("接触放射性时间不能为空"));
        } else {
          callback();
        }
      }
    };
    // 接触毒物名称
    let contactToxicNameVerify = (rule, value, callback) => {
      if (this.maternalInformation.contactToxic == 0) {
        callback();
      } else {
        if (!value) {
          return callback(new Error("接触毒物名称不能为空"));
        } else {
          callback();
        }
      }
    };
    // 接触毒物时间
    let contactToxicDateVerify = (rule, value, callback) => {
      if (this.maternalInformation.contactToxic == 0) {
        callback();
      } else {
        if (!value) {
          return callback(new Error("接触毒物名称时间不能为空"));
        } else {
          callback();
        }
      }
    };
    // 血压
    var baseBloodVerify = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("血压不能为空"));
      } else if (!RegExpObj.Reg_figure.test(Number(value))) {
        callback(new Error("请输入数字值"));
      } else if (value < 0 || value > 300) {
        callback(new Error("血压取值范围 0 ~ 300"));
      } else {
        callback();
      }
    };
    //  体重
    var baseWeightVerify = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("体重不能为空"));
      } else if (!RegExpObj.Reg_figure.test(Number(value))) {
        callback(new Error("格式错误"));
      } else if (value < 30 || value > 200) {
        callback(new Error("体重取值范围 30 ~ 200"));
      } else {
        callback();
      }
    };
    // 身高
    var baseHeightVerify = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("身高不能为空"));
      } else if (!RegExpObj.Reg_figure.test(Number(value))) {
        callback(new Error("请输入数字值"));
      } else if (value < 100 || value > 200) {
        callback(new Error("身高取值范围 100 ~ 200"));
      } else {
        callback();
      }
    };
    //尿蛋白
    var assayUrineProteinVerify = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("尿蛋白不能为空"));
      } else {
        callback();
      }
    };
    // 血红蛋白
    var assayHemoglobinVerify = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("血红蛋白不能为空"));
      } else if (value < 80 || value > 200) {
        callback(new Error("血红蛋白取值范围 80 ~ 200"));
      } else {
        callback();
      }
    };
    // 血小板
    var assayBloodPlateletVerify = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("血小板不能为空"));
      } else {
        callback();
      }
    };
    // 宫高
    var obstetricsHeightVerify = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("宫高不能为空"));
      } else if (!RegExpObj.Reg_figure.test(Number(value))) {
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
        return callback(new Error("腹围不能为空"));
      } else if (!RegExpObj.Reg_figure.test(Number(value))) {
        callback(new Error("请输入数字值"));
      } else if (value < 50 || value > 100) {
        callback(new Error("腹围取值范围 50 ~ 100"));
      } else {
        callback();
      }
    };
    // 胎心率
    var obstetricsFetalHeartVerify = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("胎心率不能为空"));
      } else if (!Number.isInteger(Number(value))) {
        callback(new Error("请输入数字值"));
      } else if (value < 90 || value > 200) {
        callback(new Error("胎心率取值范围 90 ~ 200"));
      } else {
        callback();
      }
    };
    // 盆骨出口横径
    var obstetricsTransversePelvicDiameterVerify = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("盆骨出口横径不能为空"));
      } else {
        callback();
      }
    };

    return {
      show3: true,
      topicArr: [], // 孕产期合并症x选项数组
      isActive: 0, //孕产期合并症 选项切换
      highRiskGradeCatalogueBeanList: [], //高危所有数组
      assessArr: [], //  孕产期合并症数组
      activeName: "first", // first、second、third、fourth、fifth、sixth
      drinks: 0, //配偶一般信息饮酒显示隐藏
      tab: 1,
      spouseSmoke: 0, //配偶-吸烟数量
      familyHistory: 0, //配偶一般信息家族史
      familyHistory2: 0, //孕产一般信息家族史
      familyHistory3: 0, //孕产一般信息现病史
      editdialogVisible: false, //编辑信息弹框
      /* ------导入模板弹框star------- */
      templateDialogVisible: false, //诊断导入模板
      templateDialogVisible2: false, //处置导入模板
      officeTableData:[], // 模板数据
        showActive: -1,
        showActiveOpinion: -1,
malaiseLayer:'', //模板弹框自觉不适
disposeLayer:'',//模板弹框处理意见
 /* ------导入模板弹框end------- */
      contact: "0",
      virus: "0",
      history2: "0",
      patientCenterId: "", //patientCenterId
      checkId: "", //基本信息id
      superId: "", //配偶id
      parturitionDetailId: "", //孕检信息id
      healthCheckId: "", //体格检查id
      buttonShow: true, //基本信息按钮
      buttonHide: false, //基本信息按钮
      buttonShow1: true, //配偶信息按钮
      buttonHide1: false, //配偶信息按钮
      buttonShow2: true, //产检信息按钮
      buttonHide2: false, //产检信息按钮
      buttonShow3: true, //体格检查按钮
      buttonHide3: false, //体格检查按钮
      // 孕妇基本信息证件类型
      idCardSelect: [
        {
          value: "0",
          label: "居民身份证"
        },
        {
          value: "1",
          label: "护照"
        }
      ],
      // 近半年避孕方法
      contraception: [
        {
          value: "0",
          label: "未避孕"
        },
        {
          value: "1",
          label: "口服避孕药"
        },
        {
          value: "2",
          label: "避孕套"
        },
        {
          value: "3",
          label: "避孕膜"
        },
        {
          value: "4",
          label: "其他"
        }
      ],
      // 孕妇婚检
      marryCheck: [
        {
          value: "0",
          label: "没有"
        },
        {
          value: "1",
          label: "有"
        }
      ],
      // 孕妇文化程度
      education: [
        {
          value: "0",
          label: "硕士以上"
        },
        {
          value: "1",
          label: "本科"
        },
        {
          value: "2",
          label: "大专"
        },
        {
          value: "3",
          label: "中专及高中"
        },
        {
          value: "4",
          label: "初中"
        },
        {
          value: "5",
          label: "文盲"
        }
      ],
      // 孕妇职业
      job: [
        {
          value: "0",
          label: "无"
        },
        {
          value: "1",
          label: "农、牧、渔"
        },
        {
          value: "2",
          label: "干部、职员"
        },
        {
          value: "3",
          label: "医院、科技"
        },
        {
          value: "4",
          label: "工人"
        },
        {
          value: "5",
          label: "个体"
        },
        {
          value: "6",
          label: "家务"
        }
      ],
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
      // 配偶健康状态
      healthType: [
        {
          value: "0",
          label: "健康"
        },
        {
          value: "1",
          label: "一般"
        },
        {
          value: "2",
          label: "较弱"
        }
      ],
      // 孕产信息怀孕次数
      pregnancies: [
        {
          value: "0",
          label: "0"
        },
        {
          value: "1",
          label: "1"
        },
        {
          value: "2",
          label: "2"
        },
        {
          value: "3",
          label: "3"
        },
        {
          value: "4",
          label: "4"
        },
        {
          value: "5",
          label: "5"
        }
      ],
      // 民族
      nation: [
        { value: "汉族", label: "汉族" },
        { value: "蒙古族", label: "蒙古族" },
        { value: "回族", label: "回族" },
        { value: "藏族", label: "藏族" },
        { value: "维吾尔族", label: "维吾尔族" },
        { value: "苗族", label: "苗族" },
        { value: "彝族", label: "彝族" },
        { value: "壮族", label: "壮族" },
        { value: "布依族", label: "布依族" },
        { value: "朝鲜族", label: "朝鲜族" },
        { value: "满族", label: "满族" },
        { value: "侗族", label: "侗族" },
        { value: "瑶族", label: "瑶族" },
        { value: "白族", label: "白族" },
        { value: "土家族", label: "土家族" },
        { value: "哈尼族", label: "哈尼族" },
        { value: "哈萨克族", label: "哈萨克族" },
        { value: "傣族", label: "傣族" },
        { value: "黎族", label: "黎族" },
        { value: "傈僳族", label: "傈僳族" },
        { value: "佤族", label: "佤族" },
        { value: "畲族", label: "畲族" },
        { value: "高山族", label: "高山族" },
        { value: "拉祜族", label: "拉祜族" },
        { value: "水族", label: "水族" },
        { value: "东乡族", label: "东乡族" },
        { value: "纳西族", label: "纳西族" },
        { value: "景颇族", label: "景颇族" },
        { value: "柯尔克孜族", label: "柯尔克孜族" },
        { value: "土族", label: "土族" },
        { value: "达斡尔族", label: "达斡尔族" },
        { value: "仫佬族", label: "仫佬族" },
        { value: "羌族", label: "羌族" },
        { value: "布朗族", label: "布朗族" },
        { value: "撒拉族", label: "撒拉族" },
        { value: "毛南族", label: "毛南族" },
        { value: "仡佬族", label: "仡佬族" },
        { value: "锡伯族", label: "锡伯族" },
        { value: "阿昌族", label: "阿昌族" },
        { value: "普米族", label: "普米族" },
        { value: "塔吉克族", label: "塔吉克族" },
        { value: "怒族", label: "怒族" },
        { value: "乌孜别克族", label: "乌孜别克族" },
        { value: "俄罗斯族", label: "俄罗斯族" },
        { value: "鄂温克族", label: "鄂温克族" },
        { value: "德昂族", label: "德昂族" },
        { value: "保安族", label: "保安族" },
        { value: "裕固族", label: "裕固族" },
        { value: "京族", label: "京族" },
        { value: "塔塔尔族", label: "塔塔尔族" },
        { value: "独龙族", label: "独龙族" },
        { value: "鄂伦春族", label: "鄂伦春族" },
        { value: "赫哲族", label: "赫哲族" },
        { value: "门巴族", label: "门巴族" },
        { value: "珞巴族", label: "珞巴族" },
        { value: "基诺族", label: "基诺族" }
      ],
      // 孕产史-健否
      babyHealthType: [
        {
          value: "0",
          label: "健康"
        },
        {
          value: "1",
          label: "死亡"
        }
      ],
      // 孕产史-分娩方式
      productionAbortion: [
        {
          value: "0",
          label: "自然"
        },
        {
          value: "1",
          label: "剖宫产"
        }
      ],
      // 孕产史-孕周
      ageOfMenarche: [
        {
          value: "0",
          label: "早产"
        },
        {
          value: "1",
          label: "足月妊娠"
        },
        {
          value: "2",
          label: "过期妊娠"
        }
      ],
      // 孕产史-性别
      babySex: [
        {
          value: "0",
          label: "男"
        },
        {
          value: "1",
          label: "女"
        }
      ],
      // 孕期用药
      parturitionFrontPharmacy: [
        {
          value: "0",
          label: "否"
        },
        {
          value: "1",
          label: "有"
        }
      ],
      // 尿酮体
      ketosis: [
        {
          value: "0",
          label: "否"
        },
        {
          value: "1",
          label: "有"
        }
      ],
      //早孕反应程度
      morningSickness: [
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
      //宠物接触
      animalContact: [
        {
          value: "0",
          label: "否"
        },
        {
          value: "1",
          label: "有"
        }
      ],
      //接触放射性
      contactRadioactiveRays: [
        {
          value: "0",
          label: "否"
        },
        {
          value: "1",
          label: "有"
        }
      ],
      //心率
      baseHeartRate: [
        {
          value: "0",
          label: "正常"
        },
        {
          value: "1",
          label: "异常"
        }
      ],
      //肺
      baseLung: [
        {
          value: "0",
          label: "正常"
        },
        {
          value: "1",
          label: "异常"
        }
      ],
      //肝
      baseAbdomenLiver: [
        {
          value: "0",
          label: "正常"
        },
        {
          value: "1",
          label: "异常"
        }
      ],
      //脾
      baseAbdomenSpleen: [
        {
          value: "0",
          label: "正常"
        },
        {
          value: "1",
          label: "异常"
        }
      ],
      //脊 柱
      baseSpinalLimbsDeformity: [
        {
          value: "0",
          label: "正常"
        },
        {
          value: "1",
          label: "畸形"
        }
      ],
      //四肢水肿
      baseSpinalLimbsEdema: [
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
      //乳 房
      baseBreasts: [
        {
          value: "0",
          label: "正常"
        },
        {
          value: "1",
          label: "畸形"
        }
      ],
      //乳 头
      baseNipple: [
        {
          value: "0",
          label: "凸"
        },
        {
          value: "1",
          label: "凹"
        }
      ],
      //外阴
      obstetricsVulva: [
        {
          value: "0",
          label: "正常"
        },
        {
          value: "1",
          label: "异常"
        }
      ],
      //阴道
      obstetricsVagina: [
        {
          value: "0",
          label: "通畅"
        }
      ],
      //
      infectionType: [
        {
          value: "流感",
          label: "流感"
        },
        {
          value: "风疹",
          label: "风疹"
        },
        {
          value: "疱疹",
          label: "疱疹"
        },
        {
          value: "肝炎",
          label: "肝炎"
        },
        {
          value: "腮腺炎",
          label: "腮腺炎"
        },
        {
          value: "其他",
          label: "其他"
        }
      ],
      //宫颈
      obstetricsCervix: [
        {
          value: "0",
          label: "正常"
        }
      ],
      //宫体
      obstetricsCorpus: [
        {
          value: "0",
          label: "正常"
        }
      ],
      //附件
      obstetricsPairsAttachment: [
        {
          value: "0",
          label: "正常"
        }
      ],
      // 血型
      assayBloodType: [
        {
          value: "0",
          label: "O"
        },
        {
          value: "1",
          label: "A"
        },
        {
          value: "2",
          label: "B"
        },
        {
          value: "3",
          label: "AB"
        },
        {
          value: "4",
          label: "RH"
        }
      ],
      // 先露
      obstetricsFirstDew: [
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
      // 胎方位
      obstetricsPlacental: [
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
      //项目类型2
      projectType2: [
        {
          value: "1",
          label: "1"
        },
        {
          value: "2",
          label: "2"
        },
        {
          value: "3",
          label: "3"
        },
        {
          value: "4",
          label: "4"
        },
        {
          value: "5",
          label: "5"
        }
      ],
      historyAssess: [
        {
          value: "1",
          label: "1"
        },
        {
          value: "2",
          label: "2"
        },
        {
          value: "3",
          label: "3"
        },
        {
          value: "4",
          label: "4"
        },
        {
          value: "5",
          label: "5"
        }
      ],
      isShow: false,
      options: regionData, //省市区联动
      // selectedOptions1: ['110000',"110100","110101"], //基本信息-户口所在地
      selectedOptions1: [], //基本信息-户口所在地
      selectedOptions2: [], //基本信息-现住地址
      selectedOptions3: [], //配偶信息-现住地址
      xq1: [],
      xq2: [],
      xq3: [],
      //孕妇基本信息数据
      essentialInformation: {
        name: "", //		姓名
        number: "", //		就诊号
        idCardType: "", //		身份类型
        idCard: "", //		证件号码
        telephone: "", //		电话
        birthdayDate: "", //		出生日期
        age: "", //		年龄
        sex: "", //		性别
        education: "", //		教育程度
        marryAge: "", //		结婚年龄
        nation: "", //		民族
        lastWeight: "", //		孕前体重
        contraception: "", //		孕检
        job: "", //		工作
        marryType: "", //		婚姻状况
        marryCheck: "", //		婚检
        jobCompanyName: "", //		工作单位
        idCardAddressProvince: "", //		身份证所在地-省
        idCardAddressCity: "", //		身份证所在地-市
        idCardAddressCounty: "", //		身份证所在地-县
        idCardAddressRemarks: "", //		身份证所在地-其他
        newAddressProvince: "", //		现住址-省
        newAddressCity: "", //		现住址-市
        newAddressCounty: "", //		现住址-县
        newAddressRemarks: "" //		现住址-其他
      },
      //配偶一般信息
      spouseInformation: {
        patientCenterId: "", //	patientCenterId
        name: "", //	名称
        idCardType: "", //	证件类型 0身份证-默认 1护照
        idCard: "", //	证件号
        age: "", //	年龄
        telephone: "", //	电话
        healthType: "", //	健康状况 0 健康-默认 1 一般 2 软弱
        education: "", //	教育程度 0 硕士以上 1本科-默认 2大专 3中专及高中 4初中 5文盲
        job: "", //	工作 0 无-默认 1.农、牧、渔 2.干部、职员 3.医院、科技 4.工人 5.个体 6.家务
        marryAge: "", //	结婚年龄
        marryType: "", //	婚姻状况 0 初婚-默认 1再婚 2其他
        marryCheck: "", //	婚检 0 没有-默认 1.有
        smoke: "", //	吸烟
        drink: "", //	饮酒 0 否-默认 1.偶尔 2.经常
        patientHistory: "", //	家族史
        newAddressProvince: "", //	现住址-省
        newAddressCity: "", //	现住址-市
        newAddressCounty: "", //	现住址-区
        newAddressRemarks: "" //	现住址-详情
      },
      options4: [], //家族史 现病史 加载的数组
      list: [],
      loading: false,
      states: [],
      // 配偶家族史数组
      matePatientHistory: [],
      // 孕产信息
      maternalInformation: {
        patientCenterId: "", //	centerId
        firstCheckDate: "", //	初诊日期	展开
        lastMenstruation: "", //	末次月经	展开
        dueDate: "", //	预产期	展开
        newAgeOfMenarche: "", //	现孕周
        newAgeOfMenarcheDay: "", //	现孕周-天
        menstrualHistoryAge: "", //	初潮-岁
        menstrualHistoryDay: "", //	月经史-周次
        pregnancyNumber: "0", //	怀孕次数
        morningSickness: "", //	早孕反应程度
        ketosis: "", //	酮症
        parturitionFrontPharmacy: "", //	孕前是否用药
        animalContact: "", //	宠物接触
        contactRadioactiveRays: "0", //	接触放射线
        contactRadioactiveRaysDate: "", //	接触放射线-时间	展开
        contactToxic: 0, //	接触毒物
        contactToxicName: "", //	接触毒物-名称
        contactToxicDate: "", //	接触毒物-时间	展开
        virusInfection: 0, //	病毒感染
        virusInfectionOther: "", //	病毒感染-其他
        familyHistory: 0, //	家族史
        nowHistory: 0, //	现病史
        historyList: ""
      },
      pregnancyPatientHistory: [], //孕产信息家族史数组
      pregnancyNewHistory: [], //孕产信息现病史数组

      disabledInput: true, //技术放射性时间
      PregnancyInformation: [], //怀孕史数据
      // 孕产史数组列表 ->原始数据
      historyListArr: [],
      // 孕产史对象
      historyLayer: {},
      historyLayerNum: 0, //孕产史下标
      deleteHistory: [],
      isChoose: false,
      //  体格检查
      healthCheckup: {
        patientCenterId: "", //	centerId
        baseBloodPressureHigh: "", //	收缩压
        baseBloodPressureLow: "", //	舒张压
        baseHeight: "", //	身高
        baseWeight: "", //	体重
        baseSpinalLimbsDeformity: "", //	脊柱四肢-畸形 0正常-默认 1畸形
        baseSpinalLimbsEdema: "", //	脊柱四肢-水肿 0无-默认 1轻 2中 3重
        baseHeartRate: "", //	心率 0.未填写
        baseLung: "", //	肺部 0.未见异常-默认
        baseAbdomenLiver: "", //	腹部-肝 0.未见异常-默认
        baseAbdomenSpleen: "", //	腹部-脾 0.未见异常-默认
        baseBreasts: "", //	乳房 0.丰满-默认 1.扁平
        baseNipple: "", //	乳头 0.凸-默认 1.凹
        obstetricsVulva: "", //	妇科检查-外阴 0.正常-默认 1.异常
        obstetricsVagina: "", //	妇科检查-阴道 0.通畅-默认
        obstetricsCervix: "", //	妇科检查-宫颈 0.光滑-默认
        obstetricsCorpus: "", //	妇科检查-宫体 0.未见异常-默认
        obstetricsPairsAttachment: "", //	妇科检查-双附件 0.未见异常-默认
        assayUrineProtein: "", //	化验检查-尿蛋白 未填写-默认
        assayHemoglobin: "", //	化验检查-血红蛋白 未填写-默认
        assayBloodPlatelet: "", //	化验检查-血小板 未填写-默认
        assayBloodType: "", //	化验检查-血型 0.O型-默认 1.A型 2.B型 3.AB型 4.RH型
        obstetricsHeight: "", //	产科检查-宫底高度
        obstetricsAbdominalGirth: "", //	产科检查-腹围
        obstetricsFirstDew: "", //	产科检查-先露 0.未填-默认 1.先头露 2.臀先露
        obstetricsPlacental: "", //	产科检查-胎位 0.未填-默认 1.枕左前位 2.枕右横位 3.枕右前位
        obstetricsFetalHeart: "", //	产科检查-胎心（次/分）
        obstetricsTransversePelvicDiameter: "", //	产科检查-骨盆口横径
        primaryDiagnosis: "", //	初步诊断
        disposal: "", //	处置
        token: "" //
      },
      // 高危评估
      riskAssessment: {
        projectType1: "",
        obstetricsPlacental: "",
        historyAssess: "",
        fiveArr: [],
        tenArr: [],
        twentyArr: []
      },
      // 时间范围限制，不可选择今天以后
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },

      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        number: [
          { required: true, message: "请输入就诊卡号", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        telephone: [{ trigger: "blur", validator: telephoneVerify }],
        marryAge: [{ trigger: "blur", validator: marryAgeVerify2 }],
        menstrualHistoryAge: [
          { trigger: "blur", validator: menstrualHistoryAge }
        ],
        menstrualHistoryDay: [
          { trigger: "blur", validator: menstrualHistoryDay }
        ],
        // 证件类型
        idCardType: [
          { required: true, message: "请选择证件类型", trigger: "change" }
        ],
        idCard: [{ trigger: "blur", validator: idCardVerify }],
        marryType: [
          { required: true, message: "请选择婚姻状况", trigger: "change" }
        ],
        marryCheck: [
          { required: true, message: "请选择婚检", trigger: "change" }
        ],
        contraception: [
          { required: true, message: "请选择近半年避孕方法", trigger: "change" }
        ],
        education: [
          { required: true, message: "请选择文化程度", trigger: "change" }
        ],
        nation: [{ required: true, message: "请选择民族", trigger: "change" }],
        job: [{ required: true, message: "请选择职业", trigger: "change" }],
        jobCompanyName: [
          { required: true, message: "请输入工作单位", trigger: "blur" }
        ],
        idCardAddressProvince: [
          { required: true, message: "请选择户口所在地", trigger: "change" }
        ],
        newAddressProvince: [
          { required: true, message: "请选择现住地址", trigger: "change" }
        ],
        newAddressRemarks: [
          { required: true, message: "请输入详细地址", trigger: "blur" }
        ],
        healthType: [
          { required: true, message: "请选择健康状态", trigger: "change" }
        ],
        lastMenstruation: [
          {
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        parturitionFrontPharmacy: [
          { required: true, message: "请选择孕期用药", trigger: "change" }
        ],
        ketosis: [
          { required: true, message: "请选择尿酮体", trigger: "change" }
        ],
        morningSickness: [
          { required: true, message: "请选择早孕反应程度", trigger: "change" }
        ],
        animalContact: [
          { required: true, message: "请选择宠物接触", trigger: "change" }
        ],
        contactRadioactiveRays: [
          { required: true, message: "请选择接触放射性", trigger: "change" }
        ],
        contactRadioactiveRaysDate: [
          {
            type: "date",
            trigger: "change",
            validator: contactRadioactiveRaysDateVerify
          }
        ],
        contactToxicName: [
          { type: "date", trigger: "change", validator: contactToxicNameVerify }
        ],
        contactToxicDate: [
          { type: "date", trigger: "change", validator: contactToxicDateVerify }
        ],
        baseHeartRate: [
          { required: true, message: "请选择心率", trigger: "change" }
        ],
        baseLung: [{ required: true, message: "请选择肺", trigger: "change" }],
        baseAbdomenLiver: [
          { required: true, message: "请选择肝", trigger: "change" }
        ],
        baseAbdomenSpleen: [
          { required: true, message: "请选择脾", trigger: "change" }
        ],
        baseSpinalLimbsDeformity: [
          { required: true, message: "请选择脊柱", trigger: "change" }
        ],
        baseSpinalLimbsEdema: [
          { required: true, message: "请选择四肢水肿", trigger: "change" }
        ],
        baseBreasts: [
          { required: true, message: "请选择乳房", trigger: "change" }
        ],
        baseNipple: [
          { required: true, message: "请选择乳头", trigger: "change" }
        ],
        obstetricsVulva: [
          { required: true, message: "请选择外阴", trigger: "change" }
        ],
        obstetricsVagina: [
          { required: true, message: "请选择阴道", trigger: "change" }
        ],
        obstetricsCervix: [
          { required: true, message: "请选择宫颈", trigger: "change" }
        ],
        obstetricsCorpus: [
          { required: true, message: "请选择宫体", trigger: "change" }
        ],
        obstetricsPairsAttachment: [
          { required: true, message: "请选择附件", trigger: "change" }
        ],
        assayBloodType: [
          { required: true, message: "请选择血型", trigger: "change" }
        ],
        obstetricsFirstDew: [
          { required: true, message: "请选择先露", trigger: "change" }
        ],
        obstetricsPlacental: [
          { required: true, message: "请选择胎方位", trigger: "change" }
        ],
        primaryDiagnosis: [
          { required: true, message: "请输入诊断", trigger: "blur" }
        ],
        disposal: [{ required: true, message: "请输入处置", trigger: "blur" }],
        // 数字类型的校验
        baseBloodPressureLow: [{ trigger: "blur", validator: baseBloodVerify }],
        baseBloodPressureHigh: [
          { trigger: "blur", validator: baseBloodVerify }
        ],
        lastWeight: [{ trigger: "blur", validator: baseHeightVerify }],
        baseWeight: [{ trigger: "blur", validator: baseWeightVerify }],
        baseHeight: [{ trigger: "blur", validator: baseHeightVerify }],
        assayUrineProtein: [
          { trigger: "blur", validator: assayUrineProteinVerify }
        ],
        assayHemoglobin: [
          { trigger: "blur", validator: assayHemoglobinVerify }
        ],
        assayBloodPlatelet: [
          { trigger: "blur", validator: assayBloodPlateletVerify }
        ],
        obstetricsHeight: [
          { trigger: "blur", validator: obstetricsHeightVerify }
        ],
        obstetricsAbdominalGirth: [
          { trigger: "blur", validator: obstetricsAbdominalGirthVerify }
        ],
        obstetricsFetalHeart: [
          { trigger: "blur", validator: obstetricsFetalHeartVerify }
        ],
        obstetricsTransversePelvicDiameter: [
          {
            trigger: "blur",
            validator: obstetricsTransversePelvicDiameterVerify
          }
        ]
      },
      rules2: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        number: [
          { required: true, message: "请输入就诊卡号", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        telephone: [{ trigger: "blur", validator: telephoneVerify }],
        marryAge: [{ trigger: "blur", validator: marryAgeVerify }],
        // 证件类型
        idCardType: [
          { required: true, message: "请选择证件类型", trigger: "change" }
        ],
        idCard: [{ trigger: "blur", validator: idCardVerify }],
        marryType: [
          { required: true, message: "请选择婚姻状况", trigger: "change" }
        ],
        marryCheck: [
          { required: true, message: "请选择婚检", trigger: "change" }
        ],
        contraception: [
          { required: true, message: "请选择近半年避孕方法", trigger: "change" }
        ],
        education: [
          { required: true, message: "请选择文化程度", trigger: "change" }
        ],
        nation: [{ required: true, message: "请选择民族", trigger: "change" }],
        job: [{ required: true, message: "请选择职业", trigger: "change" }],
        jobCompanyName: [
          { required: true, message: "请输入工作单位", trigger: "blur" }
        ],
        idCardAddressProvince: [
          { required: true, message: "请选择户口所在地", trigger: "change" }
        ],
        newAddressProvince: [
          { required: true, message: "请选择现住地址", trigger: "change" }
        ],
        newAddressRemarks: [
          { required: true, message: "请输入详细地址", trigger: "blur" }
        ],
        lastWeight: [{ trigger: "blur", validator: baseWeightVerify }]
      },
      isShow1: true,
      isShow2: true,
      isShow3: true,
      downIcon: true,
      downIcon2: true,
      downIcon3: true,
      historyAssessModel: "",
      projectTypeModel1: "",
      projectTypeModel2: "",
      historyAssessModel: "",
      assessmentData: [], //高危评估数据收集
      doctorName: "", //操作人
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
        high: "", //	身高
        weight: "", //	体重
        newAgeOfMenarche: "", //	现孕周
        newAgeOfMenarcheDay: "" // 复制
      }
    };
  },
  activated() {
    //模板查询
     this.templateFindList();
    // 高危评估查询
    this.highRiskGradeTemplateDetailFindTreeList();
    // //家族史疾病
    // this.list = this.states.map(item => {
    //   return { value: item, label: item };
    // });
    this.format();
    var tableDataParticulars = eval(
      "(" + localStorage.getItem("tableDataParticulars") + ")"
    );
    if (tableDataParticulars == null || tableDataParticulars == "") {
      return false;
    } else {
      this.buttonHide = true;
      this.buttonShow = false;
      this.patientCenterId = tableDataParticulars.id;
      this.checkId = tableDataParticulars.checkId; //基本信息ID
      this.superId = tableDataParticulars.husbandsId; //配偶id
      console.log(this.superId);
      this.parturitionDetailId = tableDataParticulars.parturitionDetailId; //孕产
      this.healthCheckId = tableDataParticulars.healthCheckId; //体格检查
      this.signatureConfirmationForFiling.newAgeOfMenarche =
        tableDataParticulars.newAgeOfMenarche;
      this.signatureConfirmationForFiling.newAgeOfMenarcheDay =
        tableDataParticulars.newAgeOfMenarcheDay;

      this.essentialInquire();
      this.patientHusbandsFindForFiling();
      this.patientParturitionDetailFindForFiling();
      this.patientHealthCheckFindById();
    }
  },
  mounted() {
    let doctorName = localStorage.getItem("mayernal-web-userName");
    this.doctorName = doctorName;
    this.anamnesisIllnessFindListForSpellName();
  },
  //  数据清除
  deactivated() {
    //清除keep-alive的缓存
    this.$destroy(true);
  },

  methods: {
    // 家族史疾病查询
    anamnesisIllnessFindListForSpellName() {
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .anamnesisIllnessFindListForSpellName({
          token: token1,
          spellName: ""
        })
        .then(res => {
          // console.log(res);
          if (res.status === "20200") {
            let pcAnamnesisIllnessBeanList = res.pcAnamnesisIllnessBeanList;
            // console.log(pcAnamnesisIllnessBeanList)
            for (let i = 0; i < pcAnamnesisIllnessBeanList.length; i++) {
              let obj = {};
              obj.label = pcAnamnesisIllnessBeanList[i].anamnesisIllnessName;
              obj.value = pcAnamnesisIllnessBeanList[i].spellName;
              this.states.push(obj);
            }
            this.list = this.states;
            // console.log(this.list);
          } else {
            $message.error("查询失败，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("查询失败，请稍后重试");
        });
    },
    // 保存按钮
    // 保存按钮
    basicBtn(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let token1 = window.localStorage.getItem("mayernal-web-token");
          if (this.activeName == "first") {
            this.essentialInformation.idCardAddressProvince = this.selectedOptions1[0];
            this.essentialInformation.idCardAddressCity = this.selectedOptions1[1];
            this.essentialInformation.idCardAddressCounty = this.selectedOptions1[2];
            this.essentialInformation.newAddressProvince = this.selectedOptions2[0];
            this.essentialInformation.newAddressCity = this.selectedOptions2[1];
            this.essentialInformation.newAddressCounty = this.selectedOptions2[2];
            this.essentialInformation.token = token1;
            console.log(this.essentialInformation);
            if (this.buttonHide == false) {
              this.patientCheckInsertForFiling(this.essentialInformation);
            } else {
              this.essentialInformation.patientCenterId = this.patientCenterId;
              this.essentialInformation.id = this.checkId;
              console.log(this.essentialInformation);
              this.patientCheckUpdateForFiling(this.essentialInformation);
            }
          } else if (this.activeName == "second") {
            if (this.checkId == "" || this.checkId == undefined) {
              this.$message.error("请先保存孕妇基本信息");
            } else {
              this.spouseInformation.patientCenterId = this.patientCenterId;
              this.spouseInformation.newAddressProvince = this.selectedOptions3[0];
              this.spouseInformation.newAddressCity = this.selectedOptions3[1];
              this.spouseInformation.newAddressCounty = this.selectedOptions3[2];
              this.spouseInformation.token = token1;
              if (this.spouseSmoke == 0) {
                this.spouseInformation.smoke = 0;
              }
              if (this.drinks == 0) {
                this.spouseInformation.drink = 0;
              } else if (this.drinks == 1) {
                this.spouseInformation.drink = this.tab;
              }
              if (this.familyHistory == 0) {
                this.spouseInformation.patientHistory = "";
              }
              console.log(this.spouseInformation);
              if (this.buttonHide1 == false) {
                this.patientHusbandsInsertForFiling(this.spouseInformation);
              } else {
                this.spouseInformation.patientCenterId = this.patientCenterId;
                this.spouseInformation.id = this.superId;
                console.log(this.essentialInformation);
                this.patientHusbandsUpdateForFiling(this.spouseInformation);
              }
            }
          } else if (this.activeName == "third") {
            if (this.checkId == "" || this.checkId == undefined) {
              this.$message.error("请先保存孕妇基本信息");
            } else if (this.superId == "" || this.superId == undefined) {
              this.$message.error("请先保存配偶一般信息");
            } else {
              if (this.maternalInformation.contactToxic == 0) {
                this.maternalInformation.contactToxicName = "";
                this.maternalInformation.contactToxicDate = "";
              }
              if (this.maternalInformation.virusInfection == 0) {
                this.maternalInformation.virusInfectionOther = "";
              } else if (this.maternalInformation.virusInfection == 1) {
                for (var i = 0; i < $(".chunks.active").length; i++) {
                  this.maternalInformation.virusInfectionOther +=
                    $(".chunks.active")
                      .eq(i)
                      .text() + "、";
                }
                console.log(this.maternalInformation.virusInfectionOther);
              }
              if (this.familyHistory2 == 0) {
                this.maternalInformation.familyHistory = "";
              }
              if (this.familyHistory3 == 0) {
                this.maternalInformation.nowHistory = "";
              }
              if (this.maternalInformation.pregnancyNumber == "0") {
                this.maternalInformation.historyList = "";
              } else {
                this.maternalInformation.historyList = JSON.stringify(
                  this.PregnancyInformation
                );
              }

              this.maternalInformation.patientCenterId = this.patientCenterId;
              this.maternalInformation.token = token1;
              // console.log(this.maternalInformation);
              if (this.buttonHide2 == false) {
                this.patientParturitionDetailInsertForFiling(
                  this.maternalInformation
                );
              } else {
                this.maternalInformation.patientCenterId = this.patientCenterId;
                this.maternalInformation.id = this.parturitionDetailId;
                this.maternalInformation.deleteList = JSON.stringify(
                  this.deleteHistory
                );
                delete this.maternalInformation
                  .patientParturitionDetailHistoryBeanList;
                delete this.maternalInformation.status;
                delete this.maternalInformation.message;
                delete this.maternalInformation.pregnancyParturitionCount;
                delete this.maternalInformation.pregnancyParturitionCountOther;
                console.log(this.maternalInformation.historyList);
                console.log(this.maternalInformation.deleteList);
                console.log(this.maternalInformation);
                // return;
                this.patientParturitionDetailUpdateForFiling(
                  this.maternalInformation
                );
              }
            }
          } else if (this.activeName == "fourth") {
            if (this.checkId == "" || this.checkId == undefined) {
              this.$message.error("请先保存孕妇基本信息");
            } else if (this.superId == "" || this.superId == undefined) {
              this.$message.error("请先保存配偶一般信息");
            } else if (
              this.parturitionDetailId == "" ||
              this.parturitionDetailId == undefined
            ) {
              this.$message.error("请先保存孕检信息");
            } else {
              // 体格检查保存按钮
              this.healthCheckup.patientCenterId = this.patientCenterId;
              this.healthCheckup.token = token1;
              console.log(this.healthCheckup);
              if (this.buttonHide3 == false) {
                this.patientHealthCheckInsertForFiling(this.healthCheckup);
              } else {
                this.healthCheckup.id = this.healthCheckId;
                this.patientHealthCheckUpdateForFiling(this.healthCheckup);
              }
            }
          }
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // ------------------------孕妇基本信息star------------------------------------
    // 孕妇基本信息-身份证号计算年龄、性别、出生年月

    pregnantIdCarda() {
      if (!RegExpObj.Reg_IDCardNo.test(this.essentialInformation.idCard)) {
        this.essentialInformation.age = "";
        this.essentialInformation.sex = "";
        this.essentialInformation.birthdayDate = "";
        return;
      } else {
        let self = this;
        analyzeIDCard(this.essentialInformation.idCard, function requestData(
          isNull,
          sex,
          age,
          birth
        ) {
          self.essentialInformation.birthdayDate = birth;
          self.essentialInformation.age = age;
          self.essentialInformation.sex = sex;
          if (isNull == false) {
            return;
          } else {
            self.essentialInformation.age = age;
            self.essentialInformation.sex = sex;
          }
        });
      }
    },
    // 孕妇基本信息 --》户口所在地
    handleChange1(value) {
      console.log(this.selectedOptions1);
      this.essentialInformation.idCardAddressProvince = this.selectedOptions1[0];
      this.essentialInformation.idCardAddressCity = this.selectedOptions1[1];
      this.essentialInformation.idCardAddressCounty = this.selectedOptions1[2];
    },
    // 孕妇基本信息 --》现住地址
    handleChange2(value) {
      console.log(value);
      this.xq2 =
        CodeToText[this.selectedOptions2[0]] +
        "" +
        CodeToText[this.selectedOptions2[1]] +
        "" +
        CodeToText[this.selectedOptions2[2]];
      this.essentialInformation.newAddressProvince = this.selectedOptions2[0];
      this.essentialInformation.newAddressCity = this.selectedOptions2[1];
      this.essentialInformation.newAddressCounty = this.selectedOptions2[2];
    },
    // 基本信息查询
    essentialInquire() {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .patientCheckControllerFindForFiling({
          token: token1,
          id: this.checkId
        })
        .then(res => {
          // console.log(res);
          if (res.status === "20200") {
            this.essentialInformation = res;
            let selectedOptions1 = [];
            selectedOptions1.push(
              res.idCardAddressProvince,
              res.idCardAddressCity,
              res.idCardAddressCounty
            );
            this.selectedOptions1 = selectedOptions1;
            let selectedOptions2 = [];
            selectedOptions2.push(
              res.newAddressProvince,
              res.newAddressCity,
              res.newAddressCounty
            );
            this.selectedOptions2 = selectedOptions2;
            console.log(this.selectedOptions1);
          }
        })
        .catch(error => {
          this.$message.error("基本信息查询错误，请稍后重试");
        });
    },
    // 基本信息-新增接口
    patientCheckInsertForFiling(obj) {
      this.$api
        .patientCheckInsertForFiling(obj)
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.patientCenterId = res.id; //patientCenterId
            this.checkId = res.checkId; //基本信息id
            this.activeName = "second";
            this.buttonHide = true;
            this.buttonShow = false;
            // this.essentialInquire(); //新建成功后查询
          } else {
            $message.error("新增失败，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("新增失败，请稍后重试");
        });
    },
    // 基本信息-修改
    patientCheckUpdateForFiling(obj) {
      this.$api
        .patientCheckUpdateForFiling(obj)
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.activeName = "second";
          } else {
            $message.error("修改失败，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("修改失败，请稍后重试");
        });
    },

    // ------------------------孕妇基本信息end------------------------------------
    // ------------------------配偶一般信息star------------------------------------
    // 配偶一般信息-身份证号计算年龄
    spouseInformationIdCarda() {
      if (!RegExpObj.Reg_IDCardNo.test(this.spouseInformation.idCard)) {
        // this.$message.error("证件格式错误");
        this.spouseInformation.age = "";
        return;
      } else {
        let self = this;
        analyzeIDCard(this.spouseInformation.idCard, function requestData(
          isNull,
          sex,
          age,
          birth
        ) {
          self.spouseInformation.age = age;
          if (isNull == false) {
            return;
          } else {
            self.spouseInformation.age = age;
          }
        });
      }
    },
    // 配偶一般信息 --》现住地址
    handleChange3(value) {
      console.log(value);
      this.xq3 =
        CodeToText[this.selectedOptions3[0]] +
        "" +
        CodeToText[this.selectedOptions3[1]] +
        "" +
        CodeToText[this.selectedOptions3[2]];
      this.spouseInformation.newAddressProvince = this.selectedOptions3[0];
      this.spouseInformation.newAddressCity = this.selectedOptions3[1];
      this.spouseInformation.newAddressCounty = this.selectedOptions3[2];
    },
    // 饮酒 偶尔经常切换
    addNameClick(index) {
      let tebIndex = index;
      this.tab = tebIndex;
    },
    // 配偶吸烟

    // 配偶一般信息---家族史
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options4 = this.list.filter(item => {
            return (
              item.value.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
              item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
            );
          });
        }, 200);
      } else {
        this.options4 = [];
      }
    },

    // 家族史选择事件
    familyHistoryRedioSelect() {
      if (this.familyHistory == 0) {
        this.matePatientHistory = "";
      }
    },
    matePatientHistorySelect() {
      let patientHistory1 = this.matePatientHistory;
      console.log(this.matePatientHistory);
      let characterPatientHistory1 = patientHistory1.join("、");
      this.spouseInformation.patientHistory = characterPatientHistory1;
    },
    // 配偶信息查询
    patientHusbandsFindForFiling() {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .patientHusbandsFindForFiling({
          token: token1,
          id: this.superId
        })
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.spouseInformation = res;
            let selectedOptions3 = [];
            selectedOptions3.push(
              res.newAddressProvince,
              res.newAddressCity,
              res.newAddressCounty
            );
            this.selectedOptions3 = selectedOptions3;
            if (res.smoke > 0) {
              this.spouseSmoke = 1;
            }
            if (res.drink == 0) {
              this.drinks = 0;
            } else {
              this.drinks = 1;
              let tab = res.drink;
              this.tab = tab;
              console.log(this.tab);
            }
            if (res.patientHistory == "") {
              this.familyHistory = 0;
            } else {
              this.familyHistory = 1;
              let patientHistory = res.patientHistory;
              let matePatientHistory = patientHistory.split("、");
              this.matePatientHistory = matePatientHistory;
            }
          } else if (res.status === "20209") {
          }
        })
        .catch(error => {
          this.$message.error("配偶信息查询错误，请稍后重试");
        });
    },
    // 配偶信息新增
    patientHusbandsInsertForFiling(obj) {
      this.$api
        .patientHusbandsInsertForFiling(obj)
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.superId = res.id; ///配偶id
            this.activeName = "third";
            this.buttonHide1 = true;
            this.buttonShow1 = false;
          } else {
            $message.error("新增失败，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("新增失败，请稍后重试");
        });
    },
    // 配偶信息修改
    patientHusbandsUpdateForFiling(obj) {
      this.$api
        .patientHusbandsUpdateForFiling(obj)
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.activeName = "third";
          } else {
            $message.error("新增失败，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("新增失败，请稍后重试");
        });
    },
    //  -----------------------配偶基本信息end------------------------------------
    // ------------------------孕产信息star------------------------------------
    // 孕产史表格
    tableRowClassName({ row, rowIndex }) {
      var isEven = rowIndex => rowIndex % 2 === 0;
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "warning-row";
      }
      return "";
    },

    // 末次月经
    lastMenstrualPeriod(val) {
      this.lastMenstrual = val;
      if (this.lastMenstrual == null) {
        this.maternalInformation.newAgeOfMenarche = "";
        this.maternalInformation.newAgeOfMenarcheDay = "";
        this.maternalInformation.dueDate = "";
      } else {
        var newDate = new Date().getTime();
        var oldDate = new Date(this.lastMenstrual).getTime();
        var countDay = parseInt((newDate - oldDate) / 1000 / 3600 / 24);
        var weeks = parseInt(countDay / 7); // 孕周
        var day = countDay % 7; // 孕天
        var expectedDate = new Date(oldDate + 3600 * 24 * 1000 * 280);
        var expectedText =
          expectedDate.getFullYear() +
          "-" +
          this.doubleZero(expectedDate.getMonth() + 1) +
          "-" +
          this.doubleZero(expectedDate.getDate());
        this.maternalInformation.newAgeOfMenarche = weeks;
        this.maternalInformation.newAgeOfMenarcheDay = day;
        this.maternalInformation.dueDate = expectedText;
      }
    },
    // 孕产信息--初诊日期
    format() {
      let day2 = new Date();
      day2.setTime(day2.getTime());
      let s2 =
        day2.getFullYear() +
        "-" +
        this.doubleZero(day2.getMonth() + 1) +
        "-" +
        this.doubleZero(day2.getDate());
      this.maternalInformation.firstCheckDate = s2;
    },
    // 预产期 补0
    doubleZero(num) {
      return num < 10 ? "0" + num : num;
    },
    // 怀孕次数选择
    numberPregnancy() {
      let vaule = this.maternalInformation.pregnancyNumber;
      this.historyLayer = {};
      let tempNum = vaule - this.PregnancyInformation.length;
      if (tempNum > 0) {
        // 添加
        for (let i = 0; i < tempNum; i++) {
          this.PregnancyInformation.push(this.historyLayer);
        }
      } else {
        // 删除
        let tempNum1 = tempNum * -1;
        let tempEntity;
        for (let i = tempNum1; i > 0; i--) {
          // 1.取出对象
          tempEntity = this.PregnancyInformation[
            this.PregnancyInformation.length - 1
          ];
          console.log(tempEntity);
          // 2.判断对象有没有id
          if (tempEntity.hasOwnProperty("id")) {
            console.log(tempEntity.id);
            //   // 3.添加到删除json中
            this.deleteHistory.push(tempEntity.id);
          }
          this.PregnancyInformation.pop();
        }
      }
    },
    // 点击孕产史编辑
    modifyButton(index, row) {
      this.historyLayerNum = index;
      this.historyLayer = Object.assign({}, row);
      this.historyLayer.number = index + 1;
      // console.log(this.historyLayer)
      this.editdialogVisible = true;
    },
    // 孕产史弹框保存按钮
    patientCenterUpdateBtn(historyLayer) {
      if (this.historyLayer.pregnantType == undefined) {
        this.$message.error("请选择孕周");
        //    this.$notify.error({
        //   title: '错误',
        //   message: '请选择孕周'
        // });
      } else if (this.historyLayer.productionDate == undefined) {
        this.$message.error("请选择年月日");
      } else if (this.historyLayer.productionOfAge == undefined) {
        this.$message.error("请填写年龄");
      } else if (this.historyLayer.productionAbortion == undefined) {
        this.$message.error("请选择分娩方式");
      } else if (this.historyLayer.babySex == undefined) {
        this.$message.error("请选择性别");
      } else if (this.historyLayer.babyHealthType == undefined) {
        this.$message.error("请选择健否");
      } else {
        Vue.set(this.PregnancyInformation, this.historyLayerNum, historyLayer);
        this.editdialogVisible = false;
      }
    },
    // 接触放射性
    radioactivity() {
      if (this.maternalInformation.contactRadioactiveRays == 0) {
        this.disabledInput = true;
        this.maternalInformation.contactRadioactiveRaysDate = "";
      } else {
        this.disabledInput = false;
      }
    },
    changeClass(item, index) {
      if (item.active) {
        Vue.set(item, "active", false); //为item添加不存在的属性，需要使用vue提供的Vue.set( object, key, value )方法。
      } else {
        Vue.set(item, "active", true);
      }
    },
    // 孕产信息家族史选择
    familyHistoryRedioSelect2() {
      if (this.familyHistory2 == 0) {
        this.pregnancyPatientHistory = "";
      }
    },
    pregnancyPatientHistorySelect() {
      let patientHistory1 = this.pregnancyPatientHistory;
      let characterPatientHistory1 = patientHistory1.join("、");
      this.maternalInformation.familyHistory = characterPatientHistory1;
      console.log(this.maternalInformation.familyHistory);
    },
    // 孕产信息现病史选择
    familyHistoryRedioSelect3() {
      if (this.familyHistory3 == 0) {
        this.pregnancyNewHistory = "";
      }
    },
    pregnancyNewHistorySelect() {
      let patientHistory1 = this.pregnancyNewHistory;
      let characterPatientHistory1 = patientHistory1.join("、");
      this.maternalInformation.nowHistory = characterPatientHistory1;
      console.log(this.maternalInformation.nowHistory);
    },

    // 孕产信息查询
    patientParturitionDetailFindForFiling() {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .patientParturitionDetailFindForFiling({
          token: token1,
          id: this.parturitionDetailId,
          patientCenterId: this.patientCenterId
        })
        .then(res => {
          console.log("孕产信息查询:" + res);
          console.log(res);
          if (res.status === "20200") {
            this.maternalInformation = res;
            this.maternalInformation.contactToxic = Number(res.contactToxic);
            this.maternalInformation.virusInfection = Number(
              res.virusInfection
            );
            this.PregnancyInformation =
              res.patientParturitionDetailHistoryBeanList;
            this.PregnancyNum =
              res.patientParturitionDetailHistoryBeanList.length;
            if (res.familyHistory == "") {
              this.familyHistory2 = 0;
            } else {
              this.familyHistory2 = 1;
              let patientHistory = res.familyHistory;
              let pregnancyPatientHistory = patientHistory.split("、");
              this.pregnancyPatientHistory = pregnancyPatientHistory;
            }
            if (res.nowHistory == "") {
              this.familyHistory3 = 0;
            } else {
              this.familyHistory3 = 1;
              let patientHistory = res.nowHistory;
              let pregnancyNewHistory = patientHistory.split("、");
              this.pregnancyNewHistory = pregnancyNewHistory;
            }
            if (res.contactRadioactiveRaysDate !== "") {
              this.disabledInput = false;
            } else {
              this.disabledInput = true;
            }
          } else if (res.status === "20209") {
          }
        })
        .catch(error => {
          this.$message.error("孕产信息查询错误，请稍后重试");
        });
    },
    //孕产信息新增
    patientParturitionDetailInsertForFiling(obj) {
      this.$api
        .patientParturitionDetailInsertForFiling(obj)
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.parturitionDetailId = res.id; //孕检信息id
            this.activeName = "fourth";
            this.buttonHide2 = true;
            this.buttonShow2 = false;
          } else {
            $message.error("新增失败，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("新增失败，请稍后重试");
        });
    },
    //孕产信息修改
    patientParturitionDetailUpdateForFiling(obj) {
      this.$api
        .patientParturitionDetailUpdateForFiling(obj)
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.activeName = "fourth";
          } else {
            $message.error("修改失败，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("修改失败，请稍后重试");
        });
    },

    // ------------------------孕产信息end------------------------------------
    //   ------------------------体格检查star------------------------------------
    // 体格检查查询
    patientHealthCheckFindById() {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .patientHealthCheckFindById({
          token: token1,
          id: this.healthCheckId
        })
        .then(res => {
          // console.log(res);
          if (res.status === "20200") {
            this.pregnancyNewsInformation = res;
            this.healthCheckup = res;
          } else if (res.status === "20209") {
          }
        })
        .catch(error => {
          this.$message.error("体格检查查询错误，请稍后重试");
        });
    },
    //体格检查新增
    patientHealthCheckInsertForFiling(obj) {
      this.$api
        .patientHealthCheckInsertForFiling(obj)
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.healthCheckId = res.id; //孕检信息id
            this.activeName = "fifth";
            this.buttonHide3 = true;
            this.buttonShow3 = false;
          } else {
            $message.error("新增失败，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("新增失败，请稍后重试");
        });
    },
    //体格检查修改
    patientHealthCheckUpdateForFiling(obj) {
      this.$api
        .patientHealthCheckUpdateForFiling(obj)
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.activeName = "fifth";
          } else {
            $message.error("修改失败，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("修改失败，请稍后重试");
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
 this.healthCheckup.primaryDiagnosis = this.healthCheckup.primaryDiagnosis+ this.malaiseLayer;
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
 this.healthCheckup.disposal = this.healthCheckup.disposal+ this.disposeLayer;
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
    //   ------------------------体格检查end------------------------------------
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
      $(".yellowDiv").html("");
      $(".orangeDiv").html("");
      $(".redDiv").html("");
      $(".purpleDiv").html("");
      for (let i = 0; i < uniq(fiveArr).length; i++) {
        $(".yellowDiv").append(
          "<span style='margin: 6px;color: #666;'>" + fiveArr[i] + "</span>"
        );
      }
      for (let i = 0; i < uniq(tenArr).length; i++) {
        $(".orangeDiv").append(
          "<span style='margin: 6px;color: #666;'>" +
            uniq(tenArr)[i] +
            "</span>" +
            "/"
        );
      }
      for (let i = 0; i < uniq(twentyArr).length; i++) {
        $(".redDiv").append(
          "<span style='margin: 6px;color: #666;'>" +
            uniq(twentyArr)[i] +
            "</span>"
        );
      }
      for (let i = 0; i < uniq(purpleArr).length; i++) {
        $(".purpleDiv").html(
          "<span style='margin: 6px;color: #666;'>" +
            uniq(purpleArr)[i] +
            "</span>"
        );
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
      // console.log(this.topicArr);
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
    //   ------------------------高危评估end------------------------------------
    /* ****************************检查确认star******************************** */

    signatureConfirmationForFilingPort(obj) {
      let self = this;
      this.$api
        .signatureConfirmationForFiling(obj)
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            self.$router.push({ path: "/management" });
          }
        })
        .catch(error => {
          this.$message.error("新增错误，请稍后重试");
        });
    },
    examineAffirm() {
      if (this.checkId == "" || this.checkId == undefined) {
        this.$message.error("请先保存孕妇基本信息");
      } else if (this.superId == "" || this.superId == undefined) {
        this.$message.error("请先保存配偶一般信息");
      } else if (
        this.parturitionDetailId == "" ||
        this.parturitionDetailId == undefined
      ) {
        this.$message.error("请先保存孕检信息");
      } else if (this.healthCheckId == "" || this.healthCheckId == undefined) {
        this.$message.error("请先保存体格检查");
      } else {
        // 检查确认按钮
        let token1 = window.localStorage.getItem("mayernal-web-token");
        this.signatureConfirmationForFiling.token = token1;
        this.signatureConfirmationForFiling.patientCenterId = this.patientCenterId;
        this.signatureConfirmationForFiling.patientName = this.essentialInformation.name;
        let highRiskGradeTemplateId = window.localStorage.getItem(
          "mayernal-web-highRiskGradesTable"
        );
        this.signatureConfirmationForFiling.highRiskGradeTemplateId = highRiskGradeTemplateId;
        this.signatureConfirmationForFiling.high = this.healthCheckup.baseHeight;
        this.signatureConfirmationForFiling.weight = this.healthCheckup.baseWeight;
        this.signatureConfirmationForFiling.newAgeOfMenarche = this.maternalInformation.newAgeOfMenarche;
        this.signatureConfirmationForFiling.newAgeOfMenarcheDay = this.maternalInformation.newAgeOfMenarcheDay;
        this.signatureConfirmationForFilingPort(
          this.signatureConfirmationForFiling
        );
      }
    },

    /* ****************************检查确认end******************************** */
    // ------------------------公共js-----------------------------------

    // 弹框右上角关闭按钮
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
          this.allowSliding();
        })
        .catch(_ => {});
    },
    // 禁止滑动
    banSliding() {
      document.documentElement.style.overflow = "hidden";
    },
    // 允许滑动
    allowSliding() {
      document.documentElement.style.overflowY = "scroll";
      document.documentElement.style.overflowX = "hidden";
    },
    handleClick(tab, event) {
      if (tab.name == "second") {
        if (this.superId !== "") {
          this.patientHusbandsFindForFiling();
          this.buttonHide1 = true;
          this.buttonShow1 = false;
        } else {
          this.buttonHide1 = false;
          this.buttonShow1 = true;
        }
      } else if (tab.name == "third") {
        if (this.parturitionDetailId !== "") {
          this.patientParturitionDetailFindForFiling();
          this.buttonHide2 = true;
          this.buttonShow2 = false;
        } else {
          this.buttonHide2 = false;
          this.buttonShow2 = true;
        }
      } else if (tab.name == "fourth") {
        if (this.healthCheckId !== "") {
          this.patientHealthCheckFindById();
          this.buttonHide3 = true;
          this.buttonShow3 = false;
        } else {
          this.buttonHide3 = false;
          this.buttonShow3 = true;
        }
      }
    }
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
.mgr32 {
  margin-right: 32px !important;
}
.mgr34 {
  margin-right: 24px !important;
}
.mgr36 {
  margin-right: 38px !important;
}
.mgr38 {
  margin-right: 40px !important;
}
.mgr70 {
  margin-right: 70px !important;
}
.mgr76 {
  margin-right: 70px;
}
.mgr74 {
  margin-right: 74px;
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
// 孕妇基本信息
.pregnantNewsBox {
  padding: 14px 24px 40px 26px;

  .flaxBox {
    height: 88px;
    width: 100%;
    position: fixed; // background-color: #fff;
    opacity: 0.8;
    bottom: 0px;
    left: 0;
    z-index: 2000;
    text-align: center;
    background-color: #f6f6f6;
    .flaxBoxPart {
      height: 88px;
      line-height: 88px;
      width: 1200px;
      background-color: #86c5ec;
      text-align: right;
    }
  }
  .wire {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ccc;
    margin-top: 24px;
  }
  // 孕妇基本信息块
  div {
    // margin-right: 70px;
    display: inline-block;
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
    .layui-unselect,
    .layui-form-select {
      width: 260px;
      height: 40px; // margin: 10px 0px;
      input {
        background-color: #f6f6f6;
      }
    }
  }
  div:nth-child(3n) {
    margin-right: 0px;
  }
  // 绑定卡号
  .bindingBox {
    position: relative;
    .bindingBtn {
      position: absolute;
      top: 41px;
      right: 0;
      width: 72px;
      height: 40px;
      background-color: #68b6e7;
      color: #fff;
      font-size: 14px;
      line-height: 40px;
      text-align: center;
      border-radius: 2px;
    }
  } // 出生年月
  .birthBox {
    position: relative;
    .birth {
      position: absolute;
      top: 52px;
      right: 10px;
      display: inline;
      color: #666666;
      .birth_age {
        position: relative;
        &:before {
          content: " ";
          position: absolute;
          top: -8px;
          right: 34px;
          width: 1px;
          height: 38px;
          background: #cccccc;
        }
      }
      .birth_sex {
        margin-right: 16px;
        &:before {
          content: " ";
          position: absolute;
          top: -8px;
          right: 66px;
          width: 1px;
          height: 38px;
          background: #cccccc;
        }
      }
    }
  }
}
.el-select {
  input {
    background-color: #f6f6f6;
    color: #333333;
  }
}

// 配偶一般信息模块
.spouseNewsBox {
  padding: 14px 24px 60px 26px;
  .flaxBox {
    height: 88px;
    width: 100%;
    position: fixed; // background-color: #fff;
    opacity: 0.8;
    bottom: 0px;
    left: 0;
    z-index: 2000;
    text-align: center;
    background-color: #f6f6f6;
    .flaxBoxPart {
      height: 88px;
      line-height: 88px;
      width: 1200px;
      background-color: #86c5ec;
      text-align: right;
    }
  }
  div {
    display: inline-block;
    .displayNo {
      display: none;
    }
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
  .wire {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ccc;
    margin-top: 24px;
  }
  // 出生年月
  .birthBox {
    position: relative;
    .birth {
      position: absolute;
      top: 50px;
      right: 10px;
      display: inline;
      color: #666666;
      .birth_age {
        position: relative;
        margin-right: 10px;
      }
      .birth_sex {
        margin-right: 8px;
        &:before {
          content: " ";
          position: absolute;
          top: -8px;
          right: 36px;
          width: 1px;
          height: 38px;
          background: #cccccc;
        }
      }
    }
  }
  //吸烟等三个模块
  .somkingBox {
    margin-top: 24px;
    margin-right: 70px;
    float: left;
    .somkingBoxTop {
      display: block;
      width: 260px;
      height: 52px;
      line-height: 52px;
      box-shadow: 0px 0px 6px 4px rgba(51, 51, 51, 0.08);
      .somkingFont {
        width: 75px;
        height: 52px;
        background-color: #f6f6f6;
        text-align: center;
        line-height: 52px;
        float: left;
      }
      .somkingSelect {
        padding-left: 26px;
        width: 185px;
        float: left;
        .smkingYes {
          width: 50%;
          float: left;
          position: relative;
          &:before {
            content: " ";
            position: absolute;
            top: 15px;
            right: 18px;
            width: 1px;
            height: 20px;
            background: #cccccc;
          }
        }
        .smokingNo {
          float: left;
          width: 50%;
        }
        .layui-form-radio {
          line-height: 52px;
          margin: 0px;
          font-size: 0;
        }
      }
    }
  } // 吸烟显示隐藏等三个模块
  .somkingCirculationBox,
  .drinkCirculationBox,
  .history1CirculationBox {
    margin-top: 12px;
    width: 260px;
    position: relative;
    box-shadow: 0px 0px 6px 4px rgba(51, 51, 51, 0.08);
    background-color: #fff;
    p {
      font-size: 12px;
      color: #666666;
      margin-bottom: 12px;
    }
  } // 配偶吸烟显示隐藏快
  .somkingCirculationBox {
    // text-align: center;
    padding: 14px 18px 14px 18px;
    input {
      width: 224px;
      height: 32px;
    }
    .birth {
      position: absolute;
      top: 50px;
      right: 20px;
      display: inline;
      color: #666666;
      .bar_day {
        margin-right: 8px;
        &:before {
          content: " ";
          position: absolute;
          top: -7px;
          right: 52px;
          width: 1px;
          height: 30px;
          background: #cccccc;
        }
      }
    }
  } // 配偶饮酒显示隐藏块
  .drinkCirculationBox {
    padding: 13px 20px 13px 20px;
    .drinkOccasionally,
    .drinkOften {
      width: 80px;
      height: 32px;
      font-size: 14px;
      text-align: center;
      line-height: 32px;
      border: 1px solid #ccc;
      display: inline-block;
      border-radius: 4px;
    }
    .drinkOccasionally {
      margin-right: 50px;
    }
    .active {
      background-color: #68b6e7;
      color: #fff;
      border: none;
    }
  } // 配偶显示隐藏家族史块
  .history1CirculationBox {
    //  padding-top:24px;
    // padding: 10px 14px 5px 14px;
    // position: relative;
    // input {
    //   width: 226px;
    //   height: 32px;
    // }
    // p {
    //   margin-top: 12px;
    // }
    .seekIcon {
      background: url("/maternal-web/images/seek.png") no-repeat 0 0;
      width: 14px;
      height: 14px;
      background-size: 14px 14px;
      position: absolute;
      top: 20px;
      right: 30px;
    }
    .hideBox {
      li {
        float: left;
        width: 65px;
        height: 30px;
        background-color: #68b6e7;
        color: #fff;
        text-align: center;
        line-height: 30px;
        border-radius: 4px;
        margin-right: 12px;
        margin-bottom: 8px;
      }
    }
    .history1Select {
      // display: none;
      width: 226px;
      height: 200px;
      position: relative;
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
          margin: 0;
          padding: 10px;
          border-bottom: 1px;
          border-bottom-style: solid;
          border-bottom-color: #999;
        }
        li:hover {
          background-color: #d4e8f5;
        }
      }
    }
  } // 配偶现住地址块
  .spouseSiteBox {
    p {
      margin-top: 24px;
      font-size: 14px;
      color: #666666;
      margin-bottom: 16px;
    }
  }
}
.el-radio__input.is-checked .el-radio__inner {
  border-color: #68b6e7;
  background: #68b6e7;
}
.el-radio__input.is-checked + .el-radio__label {
  color: #68b6e7;
}

// 孕产信息模块
.pregnancyNewsBox {
  padding: 14px 24px 120px 26px;
  .flaxBox {
    height: 88px;
    width: 100%;
    position: fixed; // background-color: #fff;
    opacity: 0.8;
    bottom: 0px;
    left: 0;
    z-index: 2000;
    text-align: center;
    background-color: #f6f6f6;
    .flaxBoxPart {
      height: 88px;
      line-height: 88px;
      width: 1200px;
      background-color: #86c5ec;
      text-align: right;
      .pregnancyBtn {
        background-color: #f3f9fd;
        width: 160px;
        padding: 0px;
        border: none;
        margin-right: 126px;
      }
    }
  }
  .dynamicTable {
    th {
      text-align: center;
    }
    td {
      text-align: center;
    }
  }
  div {
    display: inline-block;
    .displayNo {
      display: none;
    }
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
    .redFont {
      color: #fd4242;
      display: none;
    }
  }
  .wire {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ccc;
    margin-top: 24px;
  }
  .gestationalWeeksBox {
    margin-right: 0;
    width: 260px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    div {
      display: inline-block;
      width: 125px; //    float: left;
      text-align: center;
      line-height: 38px;
      margin-right: 0px !important;
    }
    .newAgeOfMenarche {
      border-right: 1px solid #ccc;
    }
  }
  .layui-table {
    margin: 0px;
    th {
      height: 46px;
      font-size: 14px;
      color: #333333;
      text-align: center;
      background-color: #f6f6f6;
    }
    tr {
      text-align: center;
      font-size: 14px;
      color: #666;
    }
    tr:nth-child(2n) {
      input {
        background-color: #f6f6f6 !important;
      }
    }
    td {
      height: 46px;
      a {
        color: #68b6e7;
      }
    }
  }
  .layui-table tbody tr:nth-child(2n-1):hover {
    background: none !important;
  }
  .layui-table[lay-even] tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  .somkingBox {
    float: left;
    margin-top: 24px;
    margin-right: 70px;
    .somkingBoxTop {
      display: block;
      width: 260px;
      height: 52px;
      line-height: 52px;
      box-shadow: 0px 0px 6px 4px rgba(51, 51, 51, 0.08);
      .somkingFont {
        width: 75px;
        height: 52px;
        background-color: #f6f6f6;
        text-align: center;
        line-height: 52px;
        float: left;
      }
      .somkingSelect {
        padding-left: 26px;
        width: 185px;
        float: left;
        .smkingYes {
          width: 50%;
          float: left;
          position: relative;
          &:before {
            content: " ";
            position: absolute;
            top: 15px;
            right: 18px;
            width: 1px;
            height: 20px;
            background: #cccccc;
          }
        }
        .smokingNo {
          float: left;
          width: 50%;
        }
        .layui-form-radio {
          line-height: 52px;
          margin: 0px;
          font-size: 0;
        }
      }
    }
    // 孕产信息隐藏快
    .contactPoisonBox,
    .virusInfectionBox,
    .familyHistoryBox {
      margin-top: 24px;
      width: 260px;
      position: relative;
      padding: 14px 16px;
      box-shadow: 0px 0px 6px 4px rgba(51, 51, 51, 0.08);

      p {
        font-size: 12px;
        color: #666666;
        margin-bottom: 12px;
      }
    }
    .contactPoisonBox {
      input {
        width: 224px;
        height: 32px;
      }
    }
    .virusInfectionBox {
      ul {
        li {
          float: left;
          width: 64px;
          height: 30px;
          line-height: 30px;
          background-color: #ededed;
          text-align: center;
          font-size: 12px;
          color: #999999;
          margin-right: 12px;
          margin-bottom: 10px;
          cursor: pointer;
        }
        .active {
          border: none;
          background-color: #68b6e7;
          color: #fff;
        }
      }
    }
    .familyHistoryBox {
      // padding: 10px 14px 5px 14px;
      padding: 0px;
      .familyHistorySelect {
        // display: none;
        width: 226px;
        height: 200px;
        position: relative;
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
            margin: 0;
            padding: 10px;
            border-bottom: 1px;
            border-bottom-style: solid;
            border-bottom-color: #999;
          }
          li:hover {
            background-color: #d4e8f5;
          }
        }
      }
    }
  }
  // 修改怀孕次数弹框
  .addTemplateLayer_bottom {
    .el-input__inner {
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #f6f6f6;
    }
    p {
      margin-bottom: 14px;
      margin-top: 22px;
    }
  }
}
// 体格检查模块
.healthCheckupBox {
  padding: 14px 24px 60px 26px;
  .flaxBox {
    height: 88px;
    width: 100%;
    position: fixed; // background-color: #fff;
    opacity: 0.8;
    bottom: 0px;
    left: 0;
    z-index: 2000;
    text-align: center;
    background-color: #f6f6f6;
    .flaxBoxPart {
      height: 88px;
      line-height: 88px;
      width: 1200px;
      background-color: #86c5ec;
      text-align: right;
      .physiqueBtn {
        background-color: #f3f9fd;
        width: 160px;
        padding: 0px;
        border: none;
        margin-right: 126px;
      }
    }
  }
  .healthCheckTittle {
    font-size: 16px;
    color: #333333;
    font-weight: 600;
  }
  div {
    display: inline-block;
    // float: left;
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
  .flaotLeftBox {
    div {
      float: left;
    }
  }
  .wire {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ccc;
    margin-top: 24px;
  }
  .bloodBox {
    // width: 260px;
    // height: 40px;
    // line-height: 40px;
    // border: 1px solid #ccc;
    // border-radius: 4px;
    .lowTension,
    .hyperpiesia {
      float: left;
    }
  }
  .healthCheckupBox_firstBox {
    input {
      width: 108px;
    }
    .accessory {
      input {
        width: 258px;
      }
    }
  }
  .modelBox {
    .diagnoseTittle {
      font-size: 16px;
      color: #333333;
      position: relative;
      &:after {
        content: " ";
        position: absolute;
        top: 24%;
        right: -14px;
        width: 1px;
        height: 12px;
        background-color: #ccc;
      }
    }
  }
  .primaryDiagnosisBtn,
  .disposalBtn {
    // margin-left: 48px;
    position: relative;
    .fileIcon {
      background: url("../../assets/file.png") no-repeat 0 0;
      width: 12px;
      height: 14px;
      background-size: 12px 14px;
      position: absolute;
      bottom: 3px;
      left: 24px;
    }
    .templateTittle {
      margin-left: 48px;
      font-size: 14px;
      color: #999999;
    }
  }
  .primaryDiagnosisBtn:hover,
  .disposalBtn {
    cursor: pointer;
  }
  .primaryDiagnosis,
  .disposal {
    width: 100%;
    padding-left: 16px;
    border-bottom: 1px solid #ccc;
    height: 20px;
    margin-top: 10px;
    line-height: 16px;
    color: #666666;
    font-size: 14px;
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
      font-weight: 600;
    }
    .positionWire {
      position: absolute;
      display: inline-block;
      top: 34%;
      right: 0px;
      width: 100%;
      height: 1px;
      background-color: #999;
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
          background: url("../../assets/radio_false.png") no-repeat left center;
          background-size: 16px 16px;
          &.active {
            background: url("../../assets/radio_true.png") no-repeat left center;
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
          background: url("../../assets/radio_false.png") no-repeat left center;
          background-size: 16px 16px;
          &.active {
            background: url("../../assets/radio_true.png") no-repeat left center;
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
        background: url("../../assets/radio_false.png") no-repeat left center;
        background-size: 16px 16px;
        &.active {
          background: url("../../assets/radio_true.png") no-repeat left center;
          background-size: 16px 16px;
        }
      }
    }
  }
  .flaxBox {
    z-index: 10000;
    height: 88px;
    line-height: 88px;
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
      height: 88px;
      line-height: 88px;
      position: relative;
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
        height: 40px;
        padding: 0px;
        border: none;
        margin-right: 66px;
        color: black;
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        -webkit-transition: 0.1s;
        text-align: center;
        box-sizing: border-box;
        outline: 0;
        margin: 0;
        transition: 0.1s;
        font-weight: 500;
        font-size: 14px;
        border-radius: 4px;
        position: absolute;
        right: 66px;
        top: 24px;
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
    z-index: 2000;
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
        font-weight: 600;
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
          top: 3px;
          left: -2px;
          width: 14px;
          height: 14px;
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
          top: 3px;
          left: -2px;
          width: 14px;
          height: 14px;
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
          top: 3px;
          left: -2px;
          width: 14px;
          height: 14px;
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
          top: 3px;
          left: -2px;
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
          left: -2px;
          width: 14px;
          height: 14px;
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
      font-weight: 600;
    }
    span {
      color: #333333;
      margin-top: 16px;
      margin-bottom: 16px;
      position: relative;
      padding-left: 18px;
      display: inline-block;
    }
    div {
      flex: 1;
      border-bottom: 1px solid #ccc;
      p {
        margin: 6px;
        color: #666;
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
<style>
.el-select-dropdown__item.selected {
  color: #68b6e7;
}
.newfileBox .el-input__inner {
  width: 260px;
  border-radius: 2px;
  border-color: #ccc;
  background-color: #fff;
}
.newfileBox .el-cascader .el-input__inner {
  width: 260px;
  border-radius: 4px;
  border-color: #ccc;
  background-color: #f6f6f6;
}
.newfileBox .el-select .el-input__inner {
  width: 260px;
  border-radius: 4px;
  border-color: #ccc;
  background-color: #f6f6f6;
}
.newfileBox .history1CirculationBox .el-select .el-input__inner {
  width: 260px;
  border-radius: 4px;
  border-color: #ccc;
  background-color: #fff;
}
.newfileBox .familyHistoryBox .el-select .el-input__inner {
  width: 260px;
  border-radius: 4px;
  border-color: #ccc;
  background-color: #fff;
}
.newfileBox .riskAssessmentBox .el-select .el-input__inner {
  width: 154px;
  border-radius: 4px;
  background-color: #f6f6f6;
}
.pregnancyNewsBox .addTemplateLayer_bottom .el-input__inner {
  width: 156px;
  border-radius: 4px;
  border-color: #ccc;
  background-color: #fff;
}
.pregnancyNewsBox .addTemplateLayer_bottom .el-select .el-input__inner {
  width: 156px;
  border-radius: 4px;
  border-color: #ccc;
  background-color: #f6f6f6;
}
.pregnancyNewsBox .el-dialog__header {
  background-color: #ededed;
}
.pregnancyNewsBox .addTemplateLayer_bottom .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 122px;
}
.pregnancyNewsBox .el-dialog__body {
  padding: 0 22px 0px 22px;
}
.contactPoisonBox .el-input__inner {
  width: 224px;
  height: 32px;
}
.contactPoisonBox .el-input__icon {
  line-height: 32px;
  cursor: pointer;
}
.pregnancyNewsBox .el-dialog__footer {
  padding: 15px 22px;
  overflow: hidden;
}

.pregnancyNewsBox .el-dialog__footer .el-button--default {
  float: left;
  width: 122px;
  height: 40px;
  background-color: #cccccc;
  color: #999999;
}
.newfileBox .el-button--primary {
  background-color: #f3f9fd;
  width: 160px;
  height: 40px;
  padding: 0px;
  border: none;
  margin-right: 66px;
  color: black;
}
/* // 体格检查组件样式修改 */
.healthCheckupBox .bloodBox .el-input__inner {
  width: 130px;
  border-radius: 4px;
}
.healthCheckupBox .bloodBox .el-input__inner {
  border-radius: 0px;
}
.healthCheckupBox .bloodBox .hyperpiesia .el-input__inner {
  border-left: none;
  border-radius: 0px 4px 4px 0px;
}
.healthCheckupBox .bloodBox .lowTension .el-input__inner {
  border-radius: 4px 0px 0px 4px;
}
/* // 高危评估组件样式修改 */
.riskAssessmentBox .el-input__inner {
  width: 152px;
  height: 30px;
  border-radius: 4px;
  border-color: #ccc;
  background-color: #f6f6f6;
}
.riskAssessmentBox .el-input__icon {
  line-height: 30px;
}

.newfileBox .el-tabs__nav-scroll {
  height: 64px;
  line-height: 64px;
  background-color: #fff;
  color: #333333;
}
.newfileBox .el-tabs__item.is-active {
  color: #68b6e7;
  font-size: 16px;
  font-weight: 600;
}
.newfileBox .el-tabs__item:hover {
  color: #68b6e7;
  cursor: pointer;
}
.newfileBox .el-tabs__active-bar {
  background-color: #68b6e7;
}
.newfileBox .el-tabs__nav {
  margin-left: 26px;
}
.newfileBox .el-form-item {
  margin-bottom: 12px;
}
.newfileBox .contactPoisonBox .el-form-item {
  margin-bottom: 22px;
}
.newfileBox .el-form--label-top .el-form-item__label {
  padding: 0px;
}
.newfileBox .el-tabs__content {
  background-color: #fff;
}

.pregnantNewsBox .area-select.large,
.spouseNewsBox .area-select.large {
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
  .spouseNewsBox
  .cascader-menu-list
  .cascader-menu-option.selected {
  background-color: #f5f7fa;
  color: #68b6e7;
  font-weight: 700;
}

.spouseNewsBox .el-radio__input.is-checked + .el-radio__label,
.pregnancyNewsBox .el-radio__input.is-checked + .el-radio__label {
  color: #68b6e7;
}
.spouseNewsBox .el-radio__input.is-checked .el-radio__inner,
.pregnancyNewsBox .el-radio__input.is-checked .el-radio__inner {
  border-color: #68b6e7;
  background: #68b6e7;
}
.pregnancyNewsBox .el-button--text {
  color: #68b6e7;
}
.el-select .el-input.is-focus .el-input__inner {
  border-color: #68b6e7;
}
.newfileBox .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 260px;
}
.newfileBox .contactPoisonBox .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 224px;
}
.newfileBox .el-dialog .el-button--primary {
  float: right;
  width: 122px;
  height: 40px;
  background-color: #68b6e7;
  color: #fff;
  margin-right: 0px;
}
.newfileBox .healthCheckupBox_firstBox .el-select .el-input__inner {
  width: 108px;
}
.newfileBox .healthCheckupBox_firstBox .accessory .el-select .el-input__inner {
  width: 260px;
}
.healthCheckupBox .el-textarea__inner {
  border: none;
  border-bottom: 1px solid #ccc;
}
.riskAssessmentBox .el-checkbox {
  margin-left: 0px;
  padding: 6px 0px;
}
.newfileBox .el-form-item.is-success .el-input__inner,
.el-form-item.is-success .el-input__inner:focus,
.el-form-item.is-success .el-textarea__inner,
.el-form-item.is-success .el-textarea__inner:focus {
  border-color: #ccc;
}
.presentAddress .el-input__inner,
.spouseResidenceAddress .el-input__inner {
  width: 320px;
}
.newfileBox .el-table tr {
  background-color: #fff;
  color: #666666;
}
.newfileBox .el-table tr div {
  text-align: center;
}
.newfileBox .el-table .warning-row {
  background-color: #f6f6f6;
}
.newfileBox .el-table td,
.newfileBox .el-table th.is-leaf {
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.newfileBox .el-table--border,
.newfileBox .el-table--group {
  border: 1px solid #ccc;
}
.newfileBox .el-textarea__inner {
  padding: 5px 15px 5px 0px;
  border-radius: 0;
}
.newfileBox .healthCheckupBox .el-dialog__header {
  display: none;
}
.newfileBox .healthCheckupBox .el-dialog__body {
  background: #f6f6f6;
}
.newfileBox .healthCheckupBox .el-dialog__footer {
  background: #f6f6f6;
}
.newfileBox .healthCheckupBox .el-dialog .el-button--primary {
  margin-right: 290px;
}
.newfileBox .healthCheckupBox .el-dialog .el-button--default {
  margin-right: 64px;
  width: 122px;
  height: 40px;
  background-color: #d3d3d3;
  color: #666666;
}
 .v-modal{
  z-index: 10001;
}
</style>
