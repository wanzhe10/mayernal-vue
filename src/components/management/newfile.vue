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
        <div
          class="pregnantNewsBox"
          :id="essentialid"
          :checkId='checkId'
        >
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
              v-model="essentialInformation.newAddressRemarks"
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
              v-model="spouseInformation.name"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr70">
            <h3>手机号</h3>
            <input
              type="number"
              class="spousePhone"
              placeholder="请输入手机号"
              v-model="spouseInformation.telephone"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr0">
            <h3>结婚年龄（岁）</h3>
            <input
              type="number"
              class="spouseMarriageAge"
              placeholder="请输入结婚年龄"
              v-model="spouseInformation.marryAge"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr70">
            <h3>证件类型</h3>
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

            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr70">
            <h3>身份证号</h3>
            <input
              type="tel"
              class="spouseIdCard"
              placeholder="请输入身份证号码"
              v-model="spouseInformation.idCard"
              @blur='spouseInformationIdCarda'
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr0 birthBox">
            <h3>配偶年龄</h3>
            <input
              type="number"
              class="spouseAge"
              v-model="spouseInformation.age"
            >
            <h5 class="birth">
              <span class="birth_sex">男</span>
            </h5>
          </div>
          <div class="wire"></div>

          <div class="mgr70">
            <h3>婚姻状况</h3>
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
          </div>

          <div class="mgr70">
            <h3>婚检</h3>
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
          </div>
          <div class="mgr0">
            <h3>健康状态</h3>
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
          </div>
          <div class="mgr70">
            <h3>文化程度</h3>
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
          </div>
          <div class="mgr70">
            <h3>职业</h3>
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
          </div>
          <div class="wire"></div>
          <!-- 配偶吸烟块 -->
          <div class="somkingBox clearfix">
            <div class="somkingBoxTop">
              <div class="somkingFont">吸烟</div>
              <div class="somkingSelect clearfix">
                <el-radio-group v-model="spouseInformation.smoke">
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </div>

            </div>
            <!-- 吸烟隐藏显示块 -->

            <div :class="['somkingCirculationBox',{displayNo : spouseInformation.smoke == 0}]">
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
                :class="{'active':tab === 1}"
                @click="addNameClick(1)"
              >偶尔</a>
              <a
                href="jsvascript:;"
                class="drinkOften"
                :class="{'active':tab === 2}"
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
                <el-radio-group v-model="familyHistory">
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
                  v-model="value9"
                  multiple
                  filterable
                  remote
                  reserve-keyword
                  placeholder="请输入关键词"
                  :remote-method="remoteMethod"
                  :loading="loading"
                >
                  <el-option
                    v-for="item in options4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </template>

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
              v-model="spouseInformation.newAddressRemarks"
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
        name="third">
        <div class="pregnancyNewsBox  clearfix">
          <div class="mgr76 fl">
            <h3>初诊日期</h3>
            <input
              type="text"
              class="mgl30 firstCheckDate"
              id="test2"
              readonly="readonly"
              v-model="maternalInformation.firstCheckDate"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr76 fl w260">
            <h3>末次月经</h3>
            <el-date-picker
              v-model="maternalInformation.lastMenstruation"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              @change="lastMenstrualPeriod"
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
              v-model="maternalInformation.dueDate"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr76 fl">
            <h3>孕周</h3>
            <div class="gestationalWeeksBox clearfix">
              <div class="newAgeOfMenarche"> <span v-show="maternalInformation.newAgeOfMenarche !==''">{{maternalInformation.newAgeOfMenarche}}</span><span v-show="maternalInformation.newAgeOfMenarche ==''">孕周</span></div>
              <div class="newAgeOfMenarcheDay"><span v-show="maternalInformation.newAgeOfMenarcheDay !==''">{{maternalInformation.newAgeOfMenarcheDay}}</span><span v-show="maternalInformation.newAgeOfMenarcheDay ==''">孕天</span></div>
            </div>
          </div>
          <div class="mgr76 fl">
            <h3>月经史-初潮（岁）</h3>
            <input
              type="number"
              class="menstrualHistoryAge"
              placeholder="初潮"
              v-model="maternalInformation.menstrualHistoryAge"
            >
          </div>
          <div class="mgr0 fl">
            <h3>月经史—周期（天）</h3>
            <input
              type="number"
              placeholder="周期"
              class="menstrualHistoryDay"
              v-model="maternalInformation.menstrualHistoryDay"
            >
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
            border
            style="width: 100%"
            class="dynamicTable"
          >
            <el-table-column
              prop="number"
              label="胎次"
              width="80"
              type="index"
            >
            </el-table-column>
            <el-table-column
              prop="ageOfMenarche"
              label="孕周"
              width="124"
            >
              <template slot-scope="scope">
                <div v-show="scope.row.ageOfMenarche == '0'">早产</div>
                <div v-show="scope.row.ageOfMenarche == '1'">足月妊娠</div>
                <div v-show="scope.row.ageOfMenarche == '2'">过期妊娠</div>
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
              width="80px"
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
            <h3>孕期用药</h3>
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
          </div>
          <div class="mgr76">
            <h3>尿酮体</h3>
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
          </div>
          <div class="mgr0">
            <h3>早孕反应程度</h3>
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
          </div>
          <div class="mgr76">
            <h3>宠物接触</h3>
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
          </div>
          <div class="mgr76">
            <h3>接触放射性</h3>
            <el-select
              v-model="maternalInformation.contactRadioactiveRays"
              placeholder="请选择"
              @change="radioactivity"
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
            <el-date-picker
              v-model="maternalInformation.contactRadioactiveRaysDate"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              :disabled="disabledInput"
            >
            </el-date-picker>
          </div>
          <div class="wire"></div>
          <!--孕产信息接触毒物 -->
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
              <input
                type="text"
                placeholder="请输入毒物名称"
                class="contactToxicName mgb12"
                v-model="maternalInformation.contactToxicName"
              >
              <!-- <input
                type="text"
                placeholder="请输入接触时间"
                class="contactToxicDate"
                 v-model="maternalInformation.contactToxicDate"
              > -->
              <el-date-picker
                v-model="maternalInformation.contactToxicDate"
                type="date"
                placeholder="选择日期"
                value-format="yyyy-MM-dd"
              >
              </el-date-picker>
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
                >{{item.value}}</li>
              </ul>
            </div>
          </div>
          <!-- 孕产信息家族史 -->
          <div class="somkingBox clearfix mgr0">
            <div class="somkingBoxTop">
              <div class="somkingFont">家族史</div>
              <div class="somkingSelect clearfix">
                <el-radio-group v-model="maternalInformation.familyHistory">
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </div>
            </div>
            <!-- 孕产信息家族史-隐藏显示块 -->
            <div
              style="margin-right:0px;"
              :class="['familyHistoryBox',{displayNo : maternalInformation.familyHistory == 0}]"
            >
              <template>
                <el-select
                  v-model="value9"
                  multiple
                  filterable
                  remote
                  reserve-keyword
                  placeholder="请输入关键词"
                  :remote-method="remoteMethod"
                  :loading="loading"
                >
                  <el-option
                    v-for="item in options4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </template>
            </div>

          </div>
          <!-- 孕产信息家族史 -->
          <div class="somkingBox clearfix mgr0">
            <div class="somkingBoxTop">
              <div class="somkingFont">现病史</div>
              <div class="somkingSelect clearfix">
                <el-radio-group v-model="maternalInformation.nowHistory">
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </div>
            </div>
            <!-- 孕产信息家族史-隐藏显示块 -->
            <div
              style="margin-right:0px;"
              :class="['familyHistoryBox',{displayNo : maternalInformation.nowHistory == 0}]"
            >
              <template>
                <el-select
                  v-model="value9"
                  multiple
                  filterable
                  remote
                  reserve-keyword
                  placeholder="请输入关键词"
                  :remote-method="remoteMethod"
                  :loading="loading"
                >
                  <el-option
                    v-for="item in options4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </template>
            </div>

          </div>
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
                  v-model="historyLayer.ageOfMenarche"
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
        name="fourth" >
        <div class="healthCheckupBox">
          <h2 class="healthCheckTittle">一般检查</h2>
          <div class="mgr76">
            <h3>血 压（mmHg）</h3>
            <div class="bloodBox">
              <input
                type="number"
                placeholder="低压"
                class="lowTension"
                v-model="healthCheckup.baseBloodPressureLow"
              >
              <input
                type="number"
                placeholder="高压"
                class="hyperpiesia"
                   v-model="healthCheckup.baseBloodPressureHigh"
              >
            </div>
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr76">
            <h3>身 高（cm）</h3>
            <input
              type="number"
              class="height"
              placeholder="请输入身高"
                 v-model="healthCheckup.baseHeight"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr0">
            <h3>体 重（kg）</h3>
            <input
              type="number"
              class="weight"
              placeholder="请输入体重"
                 v-model="healthCheckup.baseWeight"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
           
          <div class="healthCheckupBox_firstBox">
            <div class="mgr38">
              <h3>心 率</h3>
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
            </div>
            <div class="mgr77">
              <h3>肺</h3>
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
            </div>
            <div class="mgr38">
              <h3>肝</h3>
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
            </div>
            <div class="mgr77">
              <h3>脾</h3>
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
            </div>
            <div class="mgr38">
              <h3>脊 柱</h3>
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
            </div>
            <div class="mgr0">
              <h3>四肢水肿</h3>
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
            </div>
            <div class="mgr38">
              <h3>乳 房</h3>
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
            </div>
            <div class="mgr77">
              <h3>乳 头</h3>
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

            </div>
            <div class="mgr77">
              <h3>阴道</h3>
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
            </div>
            <div class="mgr38">
              <h3>宫颈</h3>
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
            </div>
            <div class="mgr77">
              <h3>宫体</h3>
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
            </div>
            <div class="mgr0  accessory">
              <h3>附件</h3>
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
              placeholder="请输入尿蛋白"
              v-model="healthCheckup.assayUrineProtein"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr76">
            <h3>血红蛋白</h3>
            <input
              type="number"
              class="assayHemoglobin"
              placeholder="请输入血红蛋白"
              v-model="healthCheckup.assayHemoglobin"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr0">
            <h3>血小板</h3>
            <input
              type="number"
              class="assayBloodPlatelet"
              placeholder="请输入血小板"
              v-model="healthCheckup.assayBloodPlatelet"
            >
          </div>
          <div class="mgr0">
            <h3>血型</h3>
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
              placeholder="请输入宫高"
              v-model="healthCheckup.obstetricsHeight"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr76">
            <h3>腹围</h3>
            <input
              type="number"
              class="obstetricsAbdominalGirth"
              placeholder="请输入腹围"
              v-model="healthCheckup.obstetricsAbdominalGirth"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr0">
            <h3>先露</h3>
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
          </div>
          <div class="mgr76">
            <h3>胎心率</h3>
            <input
              type="number"
              class="obstetricsFetalHeart"
              placeholder="请输入胎心率"
              v-model="healthCheckup.obstetricsFetalHeart"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr76">
            <h3>盆骨出口横径</h3>
            <input
              type="number"
              class="obstetricsTransversePelvicDiameter"
              placeholder="请输入盆骨出口横径"
              v-model="healthCheckup.obstetricsTransversePelvicDiameter"
            >
            <p class="redFont">此项为必填项！</p>
          </div>
          <div class="mgr0">
            <h3>胎方位</h3>
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
        name="fifth" >
        <!-- 高危评估模块 -->
        <div class="riskAssessmentBox ">
          <span>项目类型</span>
          <div class="mgl10">
            <el-select placeholder="请选择"  v-model="riskAssessment.projectType1">
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
            <el-select placeholder="请选择"   v-model="riskAssessment.obstetricsPlacental">
              <el-option
                v-for="item in obstetricsPlacental"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <span class="mgl174">历史评估记录</span>
          <div class="mgl10">
            <el-select placeholder="请选择"  v-model="riskAssessment.historyAssess">
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
    // return {

    // }
    return {
      activeName: "third",
      drinks: 0, //配偶一般信息饮酒显示隐藏
      tab: 1,
      familyHistory: 0, //配偶一般信息家族史
      editdialogVisible: false, //编辑信息弹框
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
      },
      essentialid: "", //patientCenterId
      checkId: "", //基本信息id

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
        smoke: 0, //	吸烟
        drink: "", //	饮酒 0 否-默认 1.偶尔 2.经常
        patientHistory: "", //	家族史
        newAddressProvince: "", //	现住址-省
        newAddressCity: "", //	现住址-市
        newAddressCounty: "", //	现住址-区
        newAddressRemarks: "" //	现住址-详情
      },
      options4: [],
      value9: [],
      list: [],
      loading: false,
      states: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ],
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
        pregnancyNumber: "", //	怀孕次数
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
      disabledInput: true, //技术放射性时间
      PregnancyInformation: [], //怀孕史数据
      // 孕产史数组列表
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
      riskAssessment:{

projectType1:'',
obstetricsPlacental:'',
historyAssess:'',
      } 
    };
  },
  mounted() {
    this.list = this.states.map(item => {
      return { value: item, label: item };
    });
    this.format();
  },
  methods: {
    // ------------------------孕妇基本信息------------------------------------
    // 孕妇基本信息-身份证号计算年龄、性别、出生年月
    pregnantIdCarda() {
      if (!RegExpObj.Reg_IDCardNo.test(this.essentialInformation.idCard)) {
        this.$message.error("证件格式错误");
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
    // 孕妇一般信息保存按钮
    basicBtn() {
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.essentialInformation.idCardAddressProvince = this.selectedOptions1[0];
      this.essentialInformation.idCardAddressCity = this.selectedOptions1[1];
      this.essentialInformation.idCardAddressCounty = this.selectedOptions1[2];
      this.essentialInformation.newAddressProvince = this.selectedOptions2[0];
      this.essentialInformation.newAddressCity = this.selectedOptions2[1];
      this.essentialInformation.newAddressCounty = this.selectedOptions2[2];
      this.essentialInformation.token = token1;
      console.log(this.essentialInformation);
      this.patientCheckInsertForFiling(this.essentialInformation);
    },

    physiqueBtn() {
      alert(4);
    },
    // 孕妇基本信息 --》户口所在地
    handleChange1(value) {
      console.log(value);
      this.xq1 =
        CodeToText[this.selectedOptions1[0]] +
        "" +
        CodeToText[this.selectedOptions1[1]] +
        "" +
        CodeToText[this.selectedOptions1[2]];

      console.log(this.xq1);
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
    },

    // 基本信息-新增接口
    patientCheckInsertForFiling(obj) {
      this.$api
        .patientCheckInsertForFiling(obj)
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.essentialid = res.id;
            this.checkId = res.checkId;
          } else {
            $message.error("新增失败，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("新增失败，请稍后重试");
        });
    },
    // ------------------------配偶一般信息------------------------------------
    // 配偶一般信息-身份证号计算年龄
    spouseInformationIdCarda() {
      if (!RegExpObj.Reg_IDCardNo.test(this.spouseInformation.idCard)) {
        this.$message.error("证件格式错误");
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
    },
    //配偶信息保存按钮
    mateBtn() {
      if (this.drinks == 0) {
        this.spouseInformation.drink = 0;
      } else if (this.drinks == 1) {
        if (this.tab == 1) {
          this.spouseInformation.drink = 1;
        } else if (this.tab == 2) {
          this.spouseInformation.drink = 2;
        }
      }
      this.spouseInformation.patientCenterId = this.essentialid;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.spouseInformation.newAddressProvince = this.selectedOptions3[0];
      this.spouseInformation.newAddressCity = this.selectedOptions3[1];
      this.spouseInformation.newAddressCounty = this.selectedOptions3[2];
      this.spouseInformation.token = token1;
      console.log(this.spouseInformation);
    },
    // 饮酒 偶尔经常切换
    addNameClick(index) {
      let tebIndex = index;
      this.tab = tebIndex;
    },
    // 配偶一般信息---家族史
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options4 = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options4 = [];
      }
    },
    // ------------------------孕产信息------------------------------------
    // 末次月经
    lastMenstrualPeriod(val) {
      this.lastMenstrual = val;
      console.log(this.lastMenstrual);
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
    // 预产期
    doubleZero(num) {
      return num < 10 ? "0" + num : num;
    },
    // 怀孕次数选择
    numberPregnancy() {
      let tempPregnancyNum = this.maternalInformation.pregnancyNumber;
      var _html = {};
      _html.number = "";
      _html.ageOfMenarche = "";
      _html.productionDate = "";
      _html.productionOfAge = "";
      _html.productionAbortion = "";
      _html.babySex = "";
      _html.babyHealthType = "";
      _html.remarks = "";
      var mycars = new Array();
      for (let i = 0; i < tempPregnancyNum; i++) {
        mycars.push(_html);
        this.PregnancyInformation = mycars;
      }
      console.log(this.PregnancyInformation);
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
      Vue.set(this.PregnancyInformation, this.historyLayerNum, historyLayer);
      //  console.log(this.PregnancyInformation)
      this.editdialogVisible = false;
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
    // 弹框右上角关闭按钮
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    //孕产信息保存按钮
    pregnancyBtn() {
      // console.log(this.PregnancyInformation);
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.maternalInformation.historyList = this.PregnancyInformation;
      this.maternalInformation.token = token1;
      // this.maternalInformation.familyHistory = token1; //家族史
      this.patientCenterId = this.essentialid;
      // this.maternalInformation.nowHistory = nowHistory; // 现病史
      // this.maternalInformation.virusInfectionOther = virusInfectionOther; // 病毒感染-其他
      console.log(this.maternalInformation);
    },

    // 禁止滑动
    banSliding() {
      document.documentElement.style.overflow = "hidden";
    },
    // 允许滑动
    allowSliding() {
      document.documentElement.style.overflow = "scroll";
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
  margin-right: 34px !important;
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
  padding: 14px 24px 120px 26px;
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
/* // 孕产信息组件样式修改 */
/*孕产信息修改孕产史弹框演示修改 */

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
.pregnancyNewsBox .el-dialog__footer .el-button--primary {
  width: 122px;
  height: 40px;
  background-color: #68b6e7;
  color: #fff;
  border: none;
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
</style>
