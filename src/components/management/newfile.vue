<template>
  <div class="newfileBox">
    <el-tabs
      v-model="activeName"
      class="aaaa"
    >
      <el-tab-pane
        label="孕妇基本信息"
        name="first"
      >

        <!-- 孕妇基本信息 -->
        <div class="pregnantNewsBox">
          <div class="mgr70">
            <h3>孕妇姓名（必填）</h3>
            <input
              type="text"
              class="pregnantName"
              placeholder="请输入姓名"
              v-model="essentialInformation.name"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr70 bindingBox">
            <h3>就诊卡号（必填）</h3>
            <input
              type="text"
              class="pregnantFN"
              placeholder="请输入就诊卡号"
              v-model="essentialInformation.number"
            >
            <p class="redFont">此项为必填项！</p>
            <div class="bindingBtn">卡号绑定</div>
          </div>
          <div class="mgr0">
            <h3>手机号</h3>
            <input
              type="text"
              class="pregnantPhone"
              placeholder="请输入手机号"
              v-model="essentialInformation.telephone"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr70">
            <h3>证件类型（必填）</h3>
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

            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr70">
            <h3>身份证号（必填）</h3>
            <input
              type="tel"
              class="pregnantIdCard"
              placeholder="请输入身份证号码"
              v-model="essentialInformation.idCard"
              @blur='pregnantIdCarda'
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr0 birthBox">
            <h3>出生年月（自动获取）</h3>
            <input
              type="text"
              class="layui-input pregnantDateBirth"
              placeholder=""
              id="test1"
              readonly="readonly"
              v-model="essentialInformation.birthdayDate"
            >
            <!-- <h5 class="birth">
              <span class="birth_sex" v-model="essentialInformation.sex">女</span>
            </h5> -->
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
            <h3>结婚年龄（岁）</h3>
            <input
              type="text"
              class="pregnantMarriageAge"
              placeholder="请输入结婚年龄"
              v-model="essentialInformation.marryAge"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr70">
            <h3>孕前体重（kg）</h3>
            <input
              type="text"
              class="pregnantWeight"
              placeholder="请输入年龄"
              v-model="essentialInformation.lastWeight"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="wire"></div>
          <div class="mgr70">
            <h3>婚姻状况</h3>
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
          </div>
          <div class="mgr70">
            <h3>婚检</h3>
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
          </div>
          <div class="mgr0">
            <h3>近半年避孕方法</h3>
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
          </div>
          <div class="mgr70">
            <h3>文化程度</h3>
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
          </div>
          <div class="mgr70">
            <h3>民族</h3>
            <el-select
              v-model="essentialInformation.nation"
              placeholder="请选择"
              @change="aaa"
            >
              <el-option value="汉族">汉族</el-option>
              <el-option value="蒙古族">蒙古族</el-option>
              <el-option value="回族">回族</el-option>
              <el-option value="藏族">藏族</el-option>
              <el-option value="维吾尔族">维吾尔族</el-option>
              <el-option value="苗族">苗族</el-option>
              <el-option value="彝族">彝族</el-option>
              <el-option value="壮族">壮族</el-option>
              <el-option value="布依族">布依族</el-option>
              <el-option value="朝鲜族">朝鲜族</el-option>
              <el-option value="满族">满族</el-option>
              <el-option value="侗族">侗族</el-option>
              <el-option value="瑶族">瑶族</el-option>
              <el-option value="白族">白族</el-option>
              <el-option value="土家族">土家族</el-option>
              <el-option value="哈尼族">哈尼族</el-option>
              <el-option value="哈萨克族">哈萨克族</el-option>
              <el-option value="傣族">傣族</el-option>
              <el-option value="黎族">黎族</el-option>
              <el-option value="傈僳族">傈僳族</el-option>
              <el-option value="佤族">佤族</el-option>
              <el-option value="畲族">畲族</el-option>
              <el-option value="高山族">高山族</el-option>
              <el-option value="拉祜族">拉祜族</el-option>
              <el-option value="水族">水族</el-option>
              <el-option value="东乡族">东乡族</el-option>
              <el-option value="纳西族">纳西族</el-option>
              <el-option value="景颇族">景颇族</el-option>
              <el-option value="柯尔克孜族">柯尔克孜族</el-option>
              <el-option value="土族">土族</el-option>
              <el-option value="达斡尔族">达斡尔族</el-option>
              <el-option value="仫佬族">仫佬族</el-option>
              <el-option value="羌族">羌族</el-option>
              <el-option value="布朗族">布朗族</el-option>
              <el-option value="撒拉族">撒拉族</el-option>
              <el-option value="毛南族">毛南族</el-option>
              <el-option value="仡佬族">仡佬族</el-option>
              <el-option value="锡伯族">锡伯族</el-option>
              <el-option value="阿昌族">阿昌族</el-option>
              <el-option value="普米族">普米族</el-option>
              <el-option value="塔吉克族">塔吉克族</el-option>
              <el-option value="怒族">怒族</el-option>
              <el-option value="乌孜别克族">乌孜别克族</el-option>
              <el-option value="俄罗斯族">俄罗斯族</el-option>
              <el-option value="鄂温克族">鄂温克族</el-option>
              <el-option value="德昂族">德昂族</el-option>
              <el-option value="保安族">保安族</el-option>
              <el-option value="裕固族">裕固族</el-option>
              <el-option value="京族">京族</el-option>
              <el-option value="塔塔尔族">塔塔尔族</el-option>
              <el-option value="独龙族">独龙族</el-option>
              <el-option value="鄂伦春族">鄂伦春族</el-option>
              <el-option value="赫哲族">赫哲族</el-option>
              <el-option value="门巴族">门巴族</el-option>
              <el-option value="珞巴族">珞巴族</el-option>
              <el-option value="基诺族">基诺族</el-option>
            </el-select>
          </div>
          <br />
          <div class="mgr70">
            <h3>职业</h3>
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
          </div>
          <div class="mgr70">
            <h3>工作单位</h3>
            <input
              type="text"
              class="work"
              placeholder="请输入工作单位"
              v-model="essentialInformation.jobCompanyName"
            >
          </div>
          <div class="wire"></div>
          <div class="mgr70">
            <h3>户口所在地</h3>
            <el-cascader
              :options="options"
              v-model="selectedOptions1"
              @change="handleChange1"
            ></el-cascader>
          </div><br>
          <div class="mgr70">
            <h3>现住地址</h3>
            <el-cascader
              :options="options"
              v-model="selectedOptions2"
              @change="handleChange2"
            ></el-cascader>
            <input
              type="text"
              placeholder="请输入详细地址"
              class="presentAddress mgl16"
            >
          </div>
          <div class="flaxBox">
            <div class="flaxBoxPart">
              <input
                type="button"
                @click="basicBtn"
                value="保 存"
                class="basicBtn"
              >
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="配偶一般信息"
        name="second"
      >
        <!-- 配偶一般信息 -->
        <div class=" spouseNewsBox  clearfix">
          <div class="mgr70">
            <h3>配偶姓名</h3>
            <input
              type="text"
              class="spouseName"
              placeholder="请输入姓名"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr70">
            <h3>手机号</h3>
            <input
              type="number"
              class="spousePhone"
              placeholder="请输入手机号"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr0">
            <h3>结婚年龄（岁）</h3>
            <input
              type="number"
              class="spouseMarriageAge"
              placeholder="请输入结婚年龄"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr70">
            <h3>证件类型</h3>
            <el-select
              v-model="spouseIdCardTypeModel"
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

            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr70">
            <h3>身份证号</h3>
            <input
              type="tel"
              class="spouseIdCard"
              placeholder="请输入身份证号码"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr0 birthBox">
            <h3>配偶年龄</h3>
            <input
              type="number"
              class="spouseAge"
            >
            <h5 class="birth">
              <span class="birth_sex">男</span>
            </h5>
          </div>
          <div class="wire"></div>

          <div class="mgr70">
            <h3>婚姻状况</h3>
            <el-select
              v-model="spouseMarryTypeModel"
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
          </div>

          <div class="mgr70">
            <h3>婚检</h3>
            <el-select
              v-model="spouseMarryCheckModel"
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
          </div>
          <div class="mgr0">
            <h3>健康状态</h3>
            <el-select
              v-model="healthTypeModel"
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
          </div>
          <div class="mgr70">
            <h3>文化程度</h3>
            <el-select
              v-model="spouseEducationModel"
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
          </div>
          <div class="mgr70">
            <h3>职业</h3>
            <el-select
              v-model="spouseJobModel"
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
          </div>
          <div class="wire"></div>
          <!-- 配偶吸烟块 -->
          <div class="somkingBox clearfix">
            <div class="somkingBoxTop">
              <div class="somkingFont">吸烟</div>
              <div class="somkingSelect clearfix">
                <!-- <el-radio v-model="smoking" label="1">是</el-radio>
                <el-radio v-model="smoking" label="0" @change='handleCheckAllChange'>否</el-radio> -->
                <el-radio-group
                  v-model="smoking"
                  @change='handleCheckAllChange'
                >
                  <el-radio :label="3">是</el-radio>
                  <el-radio :label="6">否</el-radio>
                </el-radio-group>
              </div>

            </div>
            <!-- 吸烟隐藏显示块 -->
            <div :class="['somkingCirculationBox',{displayNo : smoking == 6}]">
              <p>请您输入每天的支数</p>
              <input
                type="text"
                placeholder="请输入"
                class="cigaretteNUm"
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
                <el-radio
                  v-model="drink"
                  label="1"
                >是</el-radio>
                <el-radio
                  v-model="drink"
                  label="0"
                >否</el-radio>
              </div>
            </div>
            <!-- 饮酒隐藏块 -->
            <div class="drinkCirculationBox">
              <p>请选择饮酒习惯</p>
              <a
                href="jsvascript:;"
                class="drinkOccasionally"
              >偶尔</a>
              <a
                href="jsvascript:;"
                class="drinkOften"
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
                <el-radio
                  v-model="history1"
                  label="1"
                >是</el-radio>
                <el-radio
                  v-model="history1"
                  label="0"
                >否</el-radio>
              </div>
            </div>
            <!-- 配偶家族史隐藏快 -->
            <div
              class="history1CirculationBox"
              style="margin-right:0px;"
            >
              <input
                type="email"
                class="inquire"
                placeholder="请输入拼音首字母"
                onKeyUp="value=value.replace(/[\W]/g,'')"
              >
              <i class="seekIcon"></i>
              <p>已选择</p>
              <ul class="hideBox clearfix">
                <li>糖尿病1</li>
                <li>糖尿病2</li>
                <li>糖尿病3</li>
                <li>糖尿病4</li>
                <li>糖尿病5</li>
                <li>糖尿病6</li>
              </ul>
              <div class="history1Select">
                <ul>
                  <li>选择1</li>
                  <li>选择2</li>
                  <li>选择3</li>
                  <li>选择4</li>
                  <li>选择5</li>
                  <li>选择6</li>
                  <li>选择7</li>
                  <li>选择8</li>
                  <li>选择9</li>
                  <li>选择10</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="wire"></div>
          <div class="mgr76 spouseSiteBox">
            <p>现住地址</p>
            <el-cascader
              :options="options"
              v-model="selectedOptions3"
              @change="handleChange3"
            ></el-cascader>
            <input
              type="text"
              placeholder="请输入详细地址"
              class="mgl16 spouseResidenceAddress"
            >
          </div>
          <div class="flaxBox">
            <div class="flaxBoxPart">
              <input
                type="button"
                @click="mateBtn"
                value="保 存"
                class="mateBtn"
              >
            </div>
          </div>
        </div>
      </el-tab-pane>
      <!--孕产信息 -->
      <el-tab-pane
        label="孕产信息"
        name="third"
      >
        <div class="pregnancyNewsBox  clearfix">
          <div class="mgr76 fl">
            <h3>初诊日期</h3>
            <input
              type="text"
              class="mgl30 firstCheckDate"
              placeholder=""
              id="test2"
              readonly="readonly"
              disabled="disabled"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr76 fl w260">
            <h3>末次月经</h3>
            <el-date-picker
              v-model="lastMenstrual"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr0 fl">
            <h3>预产期</h3>
            <input
              type="text"
              class="mgl30 dueDate"
              placeholder="自动计算"
              readonly='readonly'
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr76 fl">
            <h3>孕周</h3>
            <div class="gestationalWeeksBox clearfix">
              <div class="newAgeOfMenarche">孕周</div>
              <div class="newAgeOfMenarcheDay">孕天</div>
            </div>
          </div>
          <div class="mgr76 fl">
            <h3>月经史-初潮（岁）</h3>
            <input
              type="text"
              class="menstrualHistoryAge"
              placeholder="初潮"
            >
          </div>
          <div class="mgr0 fl">
            <h3>月经史—周期（天）</h3>
            <input
              type="text"
              placeholder="周期"
              class="menstrualHistoryDay"
            >
          </div>
          <div class="wire"></div>
          <div class="mgr76 mgb12">
            <h3>怀孕次数</h3>
            <el-select
              v-model="pregnanciesModel"
              placeholder="请选择"
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
            border
            style="width: 100%"
            class="dynamicTable"
          >
            <el-table-column
              prop="number"
              label="胎次"
              width="80"
            >
            </el-table-column>
            <el-table-column
              prop="ageOfMenarche"
              label="孕周"
              width="124"
            >
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
            </el-table-column>
            <el-table-column
              prop="babySex"
              label="性别"
              width="84"
            >
            </el-table-column>
            <el-table-column
              prop="babyHealthType"
              label="健否"
              width="84"
            >
            </el-table-column>
            <el-table-column
              prop="remarks"
              label="备注"
              width="114"
            >
            </el-table-column>
            <el-table-column
              prop="modifyButton"
              label="操作"
              width="80px"
            >
              <template slot-scope="scope">
                <el-button
                  @click="modifyButton()"
                  type="text"
                  size="small"
                >修改</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="wire"></div>
          <div class="mgr76">
            <h3>孕期用药</h3>
            <el-select
              v-model="parturitionFrontPharmacyModel"
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
          </div>
          <div class="mgr76">
            <h3>尿酮体</h3>
            <el-select
              v-model="ketosisModel"
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
          </div>
          <div class="mgr0">
            <h3>早孕反应程度</h3>
            <el-select
              v-model="morningSicknessModel"
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
          </div>
          <div class="mgr76">
            <h3>宠物接触</h3>
            <el-select
              v-model="animalContactModel"
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
          </div>
          <div class="mgr76">
            <h3>接触放射性</h3>
            <el-select
              v-model="contactRadioactiveRaysModel"
              placeholder="请选择"
            >
              <el-option
                v-for="item in contactRadioactiveRays"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="mgr0">
            <h3>接触放射性时间</h3>
            <input
              type="text"
              class="mgl30 contactRadioactiveRaysDate"
              placeholder="请输入时间"
              id="test4"
              disabled="disabled"
              readonly="readonly"
              onfocus="this.blur();"
            >
          </div>
          <div class="wire"></div>
          <!--孕产信息接触毒物 -->
          <div class="somkingBox clearfix">
            <div class="somkingBoxTop">
              <div class="somkingFont">接触毒物</div>
              <div class="somkingSelect clearfix">
                <el-radio
                  v-model="contact"
                  label="1"
                >是</el-radio>
                <el-radio
                  v-model="contact"
                  label="0"
                >否</el-radio>
              </div>
            </div>
            <!-- 孕产信息接触毒物-隐藏显示块 -->
            <div class="contactPoisonBox">
              <p>请您输入每天的支数</p>
              <input
                type="text"
                placeholder="请输入毒物名称"
                class="contactToxicName mgb12"
              >
              <input
                type="text"
                placeholder="请输入接触时间"
                class="contactToxicDate"
              >
            </div>
          </div>
          <!-- 孕产信息病毒感染 -->
          <div class="somkingBox clearfix">
            <div class="somkingBoxTop">
              <div class="somkingFont">病毒感染</div>
              <div class="somkingSelect clearfix">
                <el-radio
                  v-model="virus"
                  label="1"
                >是</el-radio>
                <el-radio
                  v-model="virus"
                  label="0"
                >否</el-radio>
              </div>
            </div>
            <!-- 孕产信息病毒感染-隐藏显示块 -->
            <div class="virusInfectionBox">
              <p>请选择感染类型</p>
              <ul class="clearfix">
                <li>流感</li>
                <li>风疹</li>
                <li>疱疹</li>
                <li class="mgb0">肝炎</li>
                <li class="mgb0">腮腺炎</li>
                <li class="mgb0">其他</li>
              </ul>
            </div>
          </div>
          <!-- 孕产信息家族史 -->
          <div class="somkingBox clearfix mgr0">
            <div class="somkingBoxTop">
              <div class="somkingFont">家族史</div>
              <div class="somkingSelect clearfix">
                <el-radio
                  v-model="history2"
                  label="1"
                >是</el-radio>
                <el-radio
                  v-model="history2"
                  label="0"
                >否</el-radio>
              </div>
            </div>
            <!-- 孕产信息家族史-隐藏显示块 -->
            <div
              class="familyHistoryBox"
              style="margin-right:0px;"
            >
              <input
                type="email"
                class="inquire"
                placeholder="请输入拼音首字母"
                onKeyUp="value=value.replace(/[\W]/g,'')"
              >
              <i class="seekIcon"></i>
              <p>已选择</p>
              <ul class="hideBox clearfix">
                <li>糖尿病1</li>
                <li>糖尿病2</li>
                <li>糖尿病3</li>
                <li>糖尿病4</li>
                <li>糖尿病5</li>
                <li>糖尿病6</li>

              </ul>
              <div class="familyHistorySelect">
                <ul>
                  <li>选择1</li>
                  <li>选择2</li>
                  <li>选择3</li>
                  <li>选择4</li>
                  <li>选择5</li>
                  <li>选择6</li>
                  <li>选择7</li>
                  <li>选择8</li>
                  <li>选择9</li>
                  <li>选择10</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- 孕产史修改弹框 -->
          <div class="modificationLayer">
            <div class="modificationLayerNav">
              <span class="parity">胎次一</span>
            </div>
            <div class="modificationLayerMain clearfix">
              <div class="mgr30 fl">
                <h3>孕周</h3>
                <input
                  type="text"
                  class="layui-input mgl30 layerWeeks"
                  placeholder=""
                  id="test2"
                  readonly="readonly"
                  disabled="disabled"
                >
              </div>
              <div class="mgr30 fl">
                <h3>年月日</h3>
                <input
                  type="text"
                  class="layui-input mgl30 layerDate"
                  placeholder=""
                  id="test2"
                  readonly="readonly"
                  disabled="disabled"
                >
              </div>
              <div class="mgr0 fl">
                <h3>年龄</h3>
                <input
                  type="text"
                  class="layui-input mgl30 layerAge"
                  placeholder=""
                  id="test2"
                  readonly="readonly"
                  disabled="disabled"
                >
              </div>
              <div class="mgr30">
                <h3>分娩方式</h3>
                <select class="layerDelivery">
                  <option value="0">自然分娩</option>
                  <option value="1">剖宫产</option>
                </select>
              </div>
              <div class="mgr30">
                <h3>性别</h3>
                <select class="layerSex">
                  <option value="0">男</option>
                  <option value="1">女</option>
                </select>
              </div>
              <div class="mgr0">
                <h3>健否</h3>
                <select class="layerSpleen">
                  <option value="0">健康</option>
                  <option value="1">死亡</option>
                </select>
              </div>
              <h3>备注</h3>
              <textarea class="layerRemark"></textarea>
              <input
                type="button"
                value="取消"
                class="cancelBtn"
              >
              <input
                type="button"
                value="保存"
                class="saveBtn"
              >
            </div>
          </div>
          <div class="flaxBox">
            <div class="flaxBoxPart">
              <input
                type="button"
                @click="pregnancyBtn"
                value="保 存"
                class="pregnancyBtn"
              >
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="体格检查"
        name="fourth"
      >
        <div class="healthCheckupBox">
          <h2 class="healthCheckTittle">一般检查</h2>
          <div class="mgr76">
            <h3>血 压（mmHg）</h3>
            <div class="bloodBox">
              <input
                type="number"
                placeholder="低压"
                class="lowTension"
              >
              <input
                type="number"
                placeholder="高压"
                class="hyperpiesia"
              >
            </div>
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr76">
            <h3>身 高（cm）</h3>
            <input
              type="number"
              class="height"
              placeholder="请输入姓名"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr0">
            <h3>体 重（kg）</h3>
            <input
              type="number"
              class="weight"
              placeholder="请输入姓名"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="healthCheckupBox_firstBox">
            <div class="mgr38">
              <h3>心 率</h3>
              <el-select
                v-model="baseHeartRateModel"
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
            </div>
            <div class="mgr77">
              <h3>肺</h3>
              <el-select
                v-model="baseLungModel"
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
            </div>
            <div class="mgr38">
              <h3>肝</h3>
              <el-select
                v-model="baseAbdomenLiverModel"
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
            </div>
            <div class="mgr77">
              <h3>脾</h3>
              <el-select
                v-model="baseAbdomenSpleenModel"
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
            </div>
            <div class="mgr38">
              <h3>脊 柱</h3>
              <el-select
                v-model="baseSpinalLimbsDeformityModel"
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
            </div>
            <div class="mgr0">
              <h3>四肢水肿</h3>
              <el-select
                v-model="baseSpinalLimbsEdemaModel"
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
            </div>
            <div class="mgr38">
              <h3>乳 房</h3>
              <el-select
                v-model="baseBreastsModel"
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
            </div>
            <div class="mgr77">
              <h3>乳 头</h3>
              <el-select
                v-model="baseNippleModel"
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
            </div>
          </div>
          <div
            class="wire"
            style="margin-bottom: 16px;"
          ></div>
          <h2 class="healthCheckTittle">妇科检查</h2>
          <div class="healthCheckupBox_firstBox">
            <div class="mgr38">
              <h3>外阴</h3>
              <el-select
                v-model="obstetricsVulvaModel"
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

            </div>
            <div class="mgr77">
              <h3>阴道</h3>
              <el-select
                v-model="obstetricsVaginaModel"
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
            </div>
            <div class="mgr38">
              <h3>宫颈</h3>
              <el-select
                v-model="obstetricsCervixModel"
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
            </div>
            <div class="mgr77">
              <h3>宫体</h3>
              <el-select
                v-model="obstetricsCorpusModel"
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
            </div>
            <div class="mgr0  accessory">
              <h3>附件</h3>
              <el-select
                v-model="obstetricsPairsAttachmentModel"
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
            </div>
          </div>
          <div
            class="wire"
            style="margin-bottom: 16px;"
          ></div>
          <h2 class="healthCheckTittle">化验检查</h2>
          <div class="mgr76">
            <h3>尿蛋白</h3>
            <input
              type="number"
              class="assayUrineProtein"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr76">
            <h3>血红蛋白</h3>
            <input
              type="number"
              class="assayHemoglobin"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr0">
            <h3>血小板</h3>
            <input
              type="number"
              class="assayBloodPlatelet"
            >
          </div>
          <div class="mgr0">
            <h3>血型</h3>
            <el-select
              v-model="assayBloodTypeModel"
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
          </div>
          <div
            class="wire"
            style="margin-bottom: 16px;"
          ></div>
          <h2 class="healthCheckTittle mgt140">产科检查</h2>
          <div class="mgr76">
            <h3>宫高</h3>
            <input
              type="number"
              class="obstetricsHeight"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr76">
            <h3>腹围</h3>
            <input
              type="number"
              class="obstetricsAbdominalGirth"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr0">
            <h3>先露</h3>
            <el-select
              v-model="obstetricsFirstDewModel"
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
          </div>
          <div class="mgr76">
            <h3>胎心率</h3>
            <input
              type="number"
              class="obstetricsFetalHeart"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr76">
            <h3>盆骨出口横径</h3>
            <input
              type="number"
              class="mgl10 obstetricsTransversePelvicDiameter"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr0">
            <h3>胎方位</h3>
            <el-select
              v-model="obstetricsPlacentalModel"
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
          </div>
          <div
            class="wire"
            style="margin-bottom: 16px;"
          ></div>
          <h2 class="healthCheckTittle modelBox">
            <span class="diagnoseTittle">诊断</span>
            <div
              class="primaryDiagnosisBtn"
              style=" float: none;"
            >
              <i class="fileIcon"></i>
              <span class="templateTittle ">导入模板</span>
            </div>
          </h2>
          <textarea class="primaryDiagnosis"></textarea>

          <h2
            class="healthCheckTittle modelBox"
            style="margin-top: 16px;"
          >
            <span class="diagnoseTittle">处置</span>
            <div
              class="disposalBtn"
              style=" float: none;"
            >
              <i class="fileIcon"></i>
              <span class="templateTittle ">导入模板</span>
            </div>
          </h2>
          <textarea class="disposal"></textarea>
          <div class="flaxBox">
            <div class="flaxBoxPart">
              <input
                type="button"
                @click="physiqueBtn"
                value="保 存"
                class="physiqueBtn"
              >
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="高危评估"
        name="fifth"
      >
        <!-- 高危评估模块 -->
        <div class="riskAssessmentBox ">
          <span>项目类型</span>
          <div class="mgl10">
            <el-select
              v-model="projectTypeModel1"
              placeholder="请选择"
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
          <div class="mgl24">
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
          </div>
          <span class="mgl174">历史评估记录</span>
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
          >
          <div class="wire"></div>
          <!-- 查看全部块 -->
          <div class="lookAtallBtnBox">
            <h2>基本情况</h2>
            <div class="positionWire"></div>
            <div class="basicLookAtallBtn">
              <span>查看全部</span>
              <i class="el-icon-arrow-down"></i>
            </div>
          </div>
          <div class="basicInformationBox">
            <div class="partBox mgr34">
              <div class="partBox_top">
                <i>5</i>
                <span class="fen">分</span>
                <span class="mgl28">黄色（一般风险）</span>
              </div>
              <div class="fivepartBox topicBox">
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
              </div>
            </div>
            <div class="partBox mgr34">
              <div class="partBox_top">
                <i>10</i>
                <span class="fen">分</span>
                <span class="mgl28">橙色（较高风险）</span>
              </div>
              <div class="tenpartBox topicBox">
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
              </div>
            </div>
            <div class="partBox">
              <div class="partBox_top">
                <i>20</i>
                <span class="fen">分</span>
                <span class="mgl28">红色（高风险）</span>
              </div>
              <div class="twentypartBox topicBox">
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
              </div>
            </div>
          </div>
          <!-- 孕期合并发症块 -->
          <div class="lookAtallBtnBox">
            <h2>孕期合并发症</h2>
            <div class="positionWire2"></div>
            <div class="pregnancyAllBtn">
              <span>查看全部</span>
              <i class="el-icon-arrow-down"></i>
            </div>
          </div>
          <ul class="pregnancySelectBox">
            <li class="selectAllBtn">全部</li>
            <li>心血管系统疾病</li>
            <li>呼吸系统疾病</li>
            <li>消化系统疾病</li>
            <li>泌尿系统疾病</li>
            <li>内分泌系统疾病</li>
            <li>精神神经系统疾病</li>
            <li>血液系统疾病</li>
            <li>性传播疾病</li>
            <li>免疫系统疾病</li>
            <li>肿瘤</li>
            <li>吸毒史</li>
            <li>其他</li>
          </ul>

          <div class="basicInformationBox">
            <div class="partBox mgr34">
              <div class="partBox_top">
                <i>5</i>
                <span class="fen">分</span>
                <span class="mgl28">黄色（一般风险）</span>
              </div>
              <div class="fivepartBox topicBox">
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
              </div>
            </div>
            <div class="partBox mgr34">
              <div class="partBox_top">
                <i>10</i>
                <span class="fen">分</span>
                <span class="mgl28">橙色（较高风险）</span>
              </div>
              <div class="tenpartBox topicBox">
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
              </div>
            </div>
            <div class="partBox">
              <div class="partBox_top">
                <i>20</i>
                <span class="fen">分</span>
                <span class="mgl28">红色（高风险）</span>
              </div>
              <div class="twentypartBox topicBox">
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
              </div>
            </div>
          </div>

          <div class="contentBox">
            <div class="lookAtallBtnBox">
              <h2>呼吸系统疾病</h2>
              <div class="positionWire2"></div>
            </div>
            <div class="partBox mgr34">
              <div class="fivepartBox topicBox">
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
              </div>
            </div>
            <div class="partBox mgr34">
              <div class="tenpartBox topicBox">
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
              </div>
            </div>
            <div class="partBox">
              <div class="twentypartBox topicBox">
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
                <a
                  class="topicItem"
                  href="javascript:;"
                >年龄≤35岁或≥18</a>
              </div>
            </div>
          </div>
          <!-- 紫色块 -->
          <div class="lookAtallBtnBox">
            <h2>紫色</h2>
            <div class="positionWire3"></div>
            <div class="violetBtn">
              <span>查看全部</span>
              <i class="el-icon-arrow-down"></i>
            </div>
          </div>
          <div class="violetConcealBox topicBox">
            <a
              class="topicItem"
              href="javascript:;"
            >所有妊娠合传染性疾病--如毒性肝炎、霉素、HIV感染及艾滋病、结核病、重症感染性肺炎、特殊病毒感染（H1N7/塞卡等）</a>
          </div>
          <div class="flaxBox">
            <div class="flaxBoxPart">
              <span class="totalPoints">65分</span>
              <span>绿色（<i>0</i>）项</span>
              <span>黄色（<i class="fiveLength">0</i>）项</span>
              <span>橙色（<i class="tenLength">0</i>）项</span>
              <span>红色（<i class="twentyLength">0</i>）项</span>
              <span>紫色（<i class="purpleLength">0</i>）项</span>
              <input
                type="button"
                value="完  成"
                class="finishBtn"
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
              <span class="greenStrip">绿色（12）项</span>
              <span class="yellowStrip">黄色（12）项</span>
              <span class="orangeStrip">橙色（12）项</span>
              <span class="redStrip">红色（12）项</span>
              <span class="proponStrip">紫色（12）项</span>
            </div>
            <div class="fr gradeInformation">
              <h2><span class="grade">56</span><i>分</i></h2>
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
          <h1 class="operator">操作人：<span>周晓晓</span></h1>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { regionData, CodeToText, TextToCode } from "element-china-area-data";
export default {
  data() {
    // return {

    // }
    return {
      activeName: "first",
      smoking: 6,
      drink: "0",
      history1: "0",
      contact: "0",
      virus: "0",
      history2: "0",
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
      // 户口所在地
      registered: [
        {
          value: "0",
          label: "北京"
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
      // 怀孕次数信息
      PregnancyInformation: [
        {
          number: "1",
          ageOfMenarche: "28",
          productionDate: "2016-05-02",
          productionOfAge: "30",
          productionAbortion: "自然分娩",
          babySex: "男",
          babyHealthType: "健康",
          remarks: "备注信息"
        },
        {
          number: "2",
          ageOfMenarche: "28",
          productionDate: "2016-05-02",
          productionOfAge: "30",
          productionAbortion: "自然分娩",
          babySex: "女",
          babyHealthType: "健康",
          remarks: "备注信息"
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
      presentAddressModel: [], // 孕妇基本信息现住地址数组
      spouseIdCardTypeModel: "", //配偶基本信息-证件类型
      spouseMarryTypeModel: "", //配偶基本信息-婚姻状况
      spouseMarryCheckModel: "", //配偶基本信息-婚检
      healthTypeModel: "", //配偶基本信息-健康状态
      spouseEducationModel: "", //配偶基本信息-文化程度
      spouseJobModel: "", //配偶基本信息-职业
      spousePresentAddressModel: [], // 配偶现住地址数组
      pregnanciesModel: "", //孕产信息-怀孕次数
      lastMenstrual: "", //孕产信息-末次月经
      parturitionFrontPharmacyModel: "", //孕产信息-孕期用药
      ketosisModel: "", //孕产信息-尿酮体
      morningSicknessModel: "", //孕产信息-早孕反应程度
      animalContactModel: "", //孕产信息-宠物接触
      contactRadioactiveRaysModel: "", //孕产信息-接触放射性
      baseHeartRateModel: "", //孕产信息-心 率
      baseLungModel: "", //孕产信息-末次月经
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
      registeredModel: [], // 孕妇基本信息现户口所在地数组
      //selected[0]省。selected[1]市。selected[2]区。
      //  isshow:false,// 配偶一般信息 吸烟
      isShow: false,
      options: regionData, //省市区联动
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
      }
    };
  },
  methods: {
    // 测试年龄
    analyzeIDCard(IDCard,requestData) {
      // var sexAndAge = {};
    let  self = this;
      var babySex = ''
      //获取用户身份证号码
      var userCard = IDCard;
      
      //如果身份证号码为undefind则返回空
      if (!userCard) {
        return requestData(false,null,null);
      }else if (reg.test(userCard) === false) {
       
         return requestData(false,null,null);
      }
      //获取性别
      if (parseInt(userCard.substr(16, 1)) % 2 == 1) {
       babySex = "男";
      } else {
       babySex= "女";
      }
      //获取出生年月日
      //userCard.substring(6,10) + "-" + userCard.substring(10,12) + "-" + userCard.substring(12,14);
      var yearBirth = userCard.substring(6, 10);
      var monthBirth = userCard.substring(10, 12);
      var dayBirth = userCard.substring(12, 14);
      //获取当前年月日并计算年龄
      var myDate = new Date();
      var monthNow = myDate.getMonth() + 1;
      var dayNow = myDate.getDay();
      var age = myDate.getFullYear() - yearBirth;
      if (
        monthNow < monthBirth ||
        (monthNow == monthBirth && dayNow < dayBirth)
      ) {
        age--;
      }
      //得到年龄
      return requestData(true,babySex,age);
    },
    pregnantIdCarda(){
          var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
         let self = this;
      this.analyzeIDCard(this.essentialInformation.idCard, function requestData(isNull,sex,age) {
           if (reg.test(self.essentialInformation.idCard) === false) {
            
          }
        self.essentialInformation.age = age;
        self.essentialInformation.sex = sex;
      if (isNull == false) {
          return
      }else{
          self.essentialInformation.age = age;
        self.essentialInformation.sex = sex;
      }
      });
    
    },
    // 孕妇一般信息保存按钮
    basicBtn() {
      alert(1);
    },
    //配偶信息保存按钮
    mateBtn() {
      alert(2);
    },
    //孕产信息保存按钮
    pregnancyBtn() {
      alert(3);
    },
    physiqueBtn() {
      alert(4);
    },
    handleChange1(value) {
      console.log(value);
      this.xq1 =
        CodeToText[this.selectedOptions1[0]] +
        "" +
        CodeToText[this.selectedOptions1[1]] +
        "" +
        CodeToText[this.selectedOptions1[2]];
    },
    handleChange2(value) {
      console.log(value);
      this.xq2 =
        CodeToText[this.selectedOptions2[0]] +
        "" +
        CodeToText[this.selectedOptions2[1]] +
        "" +
        CodeToText[this.selectedOptions2[2]];
    },
    handleChange3(value) {
      console.log(value);
      this.xq3 =
        CodeToText[this.selectedOptions3[0]] +
        "" +
        CodeToText[this.selectedOptions3[1]] +
        "" +
        CodeToText[this.selectedOptions3[2]];
    },
    aaa() {
      console.log(this.nationModel);
    },
    modifyButton: function() {},
    // 配偶一般信息吸烟
    handleCheckAllChange() {
      //  this.isshow= false;
      console.log(this.smoking);
    }
    // //孕妇基本信息户口所在地
    // registeredModelResidence() {
    //   console.log(this.registeredModel);
    // },
    // //孕妇基本信息现住地址
    // registeredModelPresentAddressModel() {
    //   console.log(this.presentAddressModel);
    // },
    // //匹配欧一般信息现住地址
    // spousePresentAddressModelAddressModel() {
    //   console.log(this.spousePresentAddressModel);
    // }
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
  margin-right: 34px !important;
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
.newfileBox {
  // padding-bottom:30px;
}
// 孕妇基本信息
.pregnantNewsBox {
  padding: 14px 24px 60px 26px;
  .flaxBox {
    height: 88px;
    width: 100%;
    position: fixed; // background-color: #fff;
    opacity: 1;
    bottom: 0px;
    left: 0;
    text-align: center;
    background-color: #f6f6f6;
    .flaxBoxPart {
      height: 88px;
      line-height: 88px;
      width: 1200px;
      background-color: #86c5ec;
      text-align: right;
      .basicBtn {
        background-color: #f3f9fd;
        width: 160px;
        padding: 0px;
        border: none;
        margin-right: 126px;
      }
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
      top: 38px;
      right: 0;
      width: 72px;
      height: 40px;
      background-color: #68b6e7;
      color: #fff;
      font-size: 14px;
      line-height: 40px;
      text-align: center;
      border-radius: 4px;
    }
  } // 出生年月
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
        &:before {
          content: " ";
          position: absolute;
          top: -10px;
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
          top: -10px;
          right: 66px;
          width: 1px;
          height: 38px;
          background: #cccccc;
        }
      }
    }
  }
  .presentAddress {
    // position: absolute;
    bottom: 25px;
    left: 300px;
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
    opacity: 1;
    bottom: 0px;
    left: 0;
    text-align: center;
    background-color: #f6f6f6;
    .flaxBoxPart {
      height: 88px;
      line-height: 88px;
      width: 1200px;
      background-color: #86c5ec;
      text-align: right;
      .mateBtn {
        background-color: #f3f9fd;
        width: 160px;
        padding: 0px;
        border: none;
        margin-right: 126px;
      }
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
  } // 绑定卡号
  // .bindingBox {
  //   position: relative;
  //   .bindingBtn {
  //     position: absolute;
  //     top: 38px;
  //     right: -76px;
  //     width: 72px;
  //     height: 40px;
  //     background-color: #68b6e7;
  //     color: #fff;
  //     font-size: 14px;
  //     line-height: 40px;
  //     text-align: center;
  //     border-radius: 4px;
  //   }
  // }
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
          top: -10px;
          right: 36px;
          width: 1px;
          height: 40px;
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
    margin-top: 24px;
    width: 260px;
    position: relative;
    box-shadow: 0px 0px 12px 4px rgba(51, 51, 51, 0.08);
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
    padding: 10px 14px 5px 14px;
    position: relative;
    input {
      width: 226px;
      height: 32px;
    }
    p {
      margin-top: 12px;
    }
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
  .spouseResidenceAddress {
    bottom: 25px;
    left: 300px;
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
  padding: 14px 24px 60px 26px;
  .flaxBox {
    height: 88px;
    width: 100%;
    position: fixed; // background-color: #fff;
    opacity: 1;
    bottom: 0px;
    left: 0;
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
      line-height: 40px;
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
      box-shadow: 0px 0px 12px 4px rgba(51, 51, 51, 0.08);

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
        }
      }
    }
    .familyHistoryBox {
      padding: 10px 14px 5px 14px;
      position: relative;
      input {
        width: 226px;
        height: 32px;
      }
      p {
        margin-top: 12px;
      }
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
  .modificationLayer {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 590px;
    background-color: #fff;
    display: none;
    .modificationLayerNav {
      height: 50px;
      width: 100%;
      background-color: #f6f6f6;
      padding-top: 16px;
      padding-left: 24px;
      .parity {
        font-size: 16px;
        color: #333333;
      }
    }
    .modificationLayerMain {
      padding: 20px 24px;
      input {
        width: 156px;
      }
      .layerRemark {
        height: 108px;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding-left: 30px;
      }
      .cancelBtn,
      .saveBtn {
        width: 160px;
        height: 40px;
        font-size: 14px;
        line-height: 40px;
        text-align: center;
        margin-top: 30px;
        padding: 0px !important;
      }
      .cancelBtn {
        float: left;
        background-color: #cccccc;
        color: #666666;
      }
      .saveBtn {
        float: right;
        background-color: #68b6e7;
        color: #fff;
      }
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
    opacity: 1;
    bottom: 0px;
    left: 0;
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
  .wire {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ccc;
    margin-top: 24px;
  }
  .bloodBox {
    width: 260px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    input {
      width: 48%;
      display: inline-block;
      height: 34px;
      border-radius: 4px;
      padding-left: 16px;
      border: none;
    }
    .lowTension {
      position: relative;
      border-radius: 8px 0 0px 8px;
      border-right: 1px solid #ccc;
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
}
// 高危评估模块
.riskAssessmentBox {
  padding: 14px 24px 24px 26px;
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
    .basicLookAtallBtn,
    .pregnancyAllBtn {
      padding: 0px 5px;
      position: absolute;
      right: 28px;
      top: 0px;
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
    .partBox {
      margin-top: 26px;
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
  } // 孕期合并发症选择块
  .pregnancySelectBox {
    margin-top: 20px;
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
      width: 64px;
      height: 32px;
      line-height: 32px;
      border-radius: 50px;
      text-align: center;
      margin-right: 14px;
      padding: 0px;
    }
  } // 添加内容块
  .contentBox {
    .lookAtallBtnBox {
      width: 100%;
      position: relative;
      margin-top: 16px;
      h2 {
        font-size: 14px;
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
        background-color: #cccccc;
      }
    }
    .partBox {
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
          background: url("/maternal-web/images/radio_false.png") no-repeat left
            center;
          background-size: 16px 16px;
          &.active {
            background: url("/maternal-web/images/radio_true.png") no-repeat
              left center;
            background-size: 16px 16px;
          }
        }
      }
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
  .violetConcealBox {
    margin-top: 10px;
    > a {
      font-size: 16px;
      color: #666666;
      line-height: 30px;
      padding-left: 26px;
      background: url("/maternal-web/images/radio_false.png") no-repeat left
        center;
      background-size: 16px 16px;
      &.active {
        background: url("/maternal-web/images/radio_true.png") no-repeat left
          center;
        background-size: 16px 16px;
      }
    }
  }
  .flaxBox {
    height: 88px;
    width: 100%;
    position: fixed; // background-color: #fff;
    opacity: 1;
    bottom: 0px;
    left: 0;
    text-align: center;
    background-color: #f6f6f6;
    .flaxBoxPart {
      width: 1200px;
      background-color: #86c5ec;
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
      }
    }
  }
}
// 检查确认模块
.checkAffirmBox {
  padding: 14px 24px 24px 26px;
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
      margin-bottom: 40px;
      position: relative;
      padding-left: 18px;
      display: inline-block;
    }
    div {
      flex: 1;
      border-bottom: 1px solid black;
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
/* // 孕妇基本信息组件样式修改 */
.pregnantNewsBox .el-input__inner {
  width: 260px;
  border-radius: 4px;
  border-color: #ccc;
  background-color: #f6f6f6;
}
/* // 配偶一般信息组件样式修改 */
.spouseNewsBox .el-input__inner {
  width: 260px;
  border-radius: 4px;
  border-color: #ccc;
  background-color: #f6f6f6;
}
/* // 孕产信息组件样式修改 */
.pregnancyNewsBox .el-input__inner {
  width: 260px;
  border-radius: 4px;
  border-color: #ccc;
  background-color: #f6f6f6;
}
/* // 体格检查组件样式修改 */
.healthCheckupBox .el-input__inner {
  width: 108px;
  border-radius: 4px;
  border-color: #ccc;
  background-color: #f6f6f6;
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
</style>
