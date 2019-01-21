<template>
  <!-- 个人信息模块 -->
  <div id="personalCenter">
    <div class="informationBox clearfix">
      <div class="informationBox_left clearfix">
        <div class="headIcon">
          <router-link :to="{path:'preview'}">
            <div class="preview">预&nbsp;览</div>
          </router-link>
        </div>
        <p>
          <span
            class="name"
            v-html="tableDataParticulars.checkName"
          ></span>
          <span
            class="age"
            v-html="tableDataParticulars.checkAge +'岁'"
          ></span>
        </p>
        <div
          class="BMLValue"
          @click="BMLValueBtn"
        >BMI值</div>
        <i class="crossIcon"></i>
      </div>
      <div class="informationBox_right">
        <div class="newsBoxTop">
          <p><span>就诊卡号：</span><span v-html="tableDataParticulars.checkNumber"></span></p>
          <p><span>建档时间：</span><span v-html="tableDataParticulars.filingDate"></span></p>
          <p><span>联系方式：</span><span v-html="tableDataParticulars.checkTelephone"></span></p>
          <p><span>身份证号：</span><span v-html="tableDataParticulars.checkIdCard"></span></p>
          <p><span>出生年月：</span><span v-html="tableDataParticulars.checkBirthdayDate"></span></p>
          <p><span class="mgl24">血 型：</span>
            <!-- <span> -->
            <template>
              <span v-show="tableDataParticulars.healthAssayBloodType ==0">O型</span>
              <span v-show="tableDataParticulars.healthAssayBloodType ==1">A型</span>
              <span v-show="tableDataParticulars.healthAssayBloodType ==2">B型</span>
              <span v-show="tableDataParticulars.healthAssayBloodType ==3">AB型</span>
              <span v-show="tableDataParticulars.healthAssayBloodType ==4">RH型</span>
            </template>
            <!-- </span> -->
          </p>
          <p><span>孕前体重：</span><span v-html="tableDataParticulars.checkLastWeight +'kg'"></span></p>
          <p><span class="mgl12">孕产史：</span><span v-html="tableDataParticulars.parturitionDetailHistory"></span></p>
        </div>
        <div class="newsBoxBottom">
          <p class="newsBoxBottomFamily"><span>家族史：</span><span>高血压、冠心病、阑尾炎、精神病</span></p>
          <div class="assessmentInformation">
            <span class="pdl0 mgr0">高危因素：</span>
            <span class="greenStrip">绿色（{{highRiskFactor.green}}）项</span>
            <span class="yellowStrip">黄色（{{highRiskFactor.yellow}}）项</span>
            <span class="orangeStrip">橙色（{{highRiskFactor.orange}}）项</span>
            <span class="redStrip">红色（{{highRiskFactor.red}}）项</span>
            <span class="proponStrip">紫色（{{highRiskFactor.purple}}）项</span>
          </div>
        </div>
      </div>
    </div>
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="复检记录"
        name="recheck"
      >
        <div class="recordNumsBox">
          <div
            class="imgSkow"
            v-show="imgShowHide"
          >
            <div class="noDataImg"></div>
            <p>暂无记录...</p>
          </div>
          <div
            class="recordNumsBoxData"
            v-show="recordNumsDataShow"
          >
            <div class="Contant_left_overflow">
              <h2>产检记录（<i
                  class="recordNum"
                  v-html="examineNum"
                ></i>）<i class="crossIcon"></i></h2>
              <ul>
                <li
                  class=""
                  v-for="(item,index) in recheckRecord"
                  :key='index'
                  :date="item"
                  @click="antenatalCareNum(index)"
                  :class="{active:index == showActive}"
                >
                  <p v-html="'第'+item.ordinalNumber +'次产检'"></p>
                  <span v-html="item.checkDate"></span>
                  <div class="triangleIocn"></div>
                </li>
              </ul>
            </div>

            <!-- 复检右边详细信息块 -->
            <div class="recheckDetailedInformation">
              <p class="tableHeader"><span
                  class="recheckDegree"
                  v-html="'第'+recheckRightData.ordinalNumber +'次产检'"
                ></span><span
                  class="recheckWeek"
                  v-html="recheckRightData.gestationalWeek +'+'+recheckRightData.gestationalDay+'周'"
                >5+3周</span></p>
              <p><span class="cl666">检查日期：</span><span
                  class="examination"
                  v-html="recheckRightData.checkDate"
                ></span><span class="cl666">预约下次日期：</span><span v-html="recheckRightData.makeAppointmentTime"></span></p>
              <div class="wire"></div>
              <div class="recheckTable clearfix">
                <div>
                  <i class="triangleIocn1"></i>
                  <p>血压：<span v-html="recheckRightData.bloodPressureHigh+'/'+recheckRightData.bloodPressureLow"></span><i>mmHg</i></p>
                  <p>体重：<span v-html="recheckRightData.bodyWeight"></span><i>kg</i></p>
                  <p>宫高：<span v-html="recheckRightData.highPalace"></span><i>cm</i></p>
                  <p>腹围：<span v-html="recheckRightData.abdominalGirth"></span><i>cm</i></p>
                </div>
                <div>
                  <i class="triangleIocn2"></i>
                  <p>胎方位：
                    <span v-show="recheckRightData.position==0 || recheckRightData.position=='' ">未填写</span>
                    <span v-show="recheckRightData.position==1">枕左前位</span>
                    <span v-show="recheckRightData.position==2">枕右横位</span>
                    <span v-show="recheckRightData.position==3">枕右前位</span>
                  </p>
                  <p>先&nbsp;&nbsp;&nbsp;露：
                    <span v-show="recheckRightData.presentation==0 || recheckRightData.presentation=='' ">未填写</span>
                    <span v-show="recheckRightData.presentation==1">头先露</span>
                    <span v-show="recheckRightData.presentation==2">臀先露</span>
                  </p>
                  <p>衔&nbsp;&nbsp;&nbsp;接：
                    <span v-show="recheckRightData.cohesion==0">未衔接</span>
                    <span v-show="recheckRightData.cohesion==1">已衔接</span>
                    <span v-show="recheckRightData.cohesion==2">未填写</span>
                  </p>
                </div>
                <div>
                  <p>胎心率：
                    <span v-show="recheckRightData.cardiac==0 ">未填写</span>
                    <span v-show="recheckRightData.cardiac==1">正常</span>
                    <span v-show="recheckRightData.cardiac==2">异常</span>
                  </p>
                  <p>浮&nbsp;&nbsp;&nbsp;肿：
                    <span v-show="recheckRightData.edema==0">无</span>
                    <span v-show="recheckRightData.edema==1">轻</span>
                    <span v-show="recheckRightData.edema==2">中</span>
                    <span v-show="recheckRightData.edema==3">重</span>
                  </p>
                  </p>
                  <p>尿蛋白：
                    <span v-show="recheckRightData.urineProtein==0">正常</span>
                    <span v-show="recheckRightData.urineProtein==1">+1</span>
                    <span v-show="recheckRightData.urineProtein==2">+2</span>
                    <span v-show="recheckRightData.urineProtein==3">+3</span>
                  </p>
                </div>
              </div>
              <!-- 自觉不适查看全部 -->
              <div class="lookAtallBtnBox">
                <h2>自觉不适</h2>
                <div class="positionWire"></div>
                <div
                  class="basicLookAtallBtn conscientiousAll"
                  @click="toggle1()"
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
              <!-- 自觉不适内容 -->
              <el-collapse-transition>
                <p
                  class="malaise"
                  v-show="isShow1"
                  v-html="recheckRightData.malaise"
                ></p>
              </el-collapse-transition>
              <!-- 指导处理意见查看全部 -->
              <div
                class="lookAtallBtnBox"
                @click="toggle2()"
              >
                <h2>指导处理意见</h2>
                <div class="positionWire2"></div>
                <div class="guidanceBtn">
                  <span>查看全部</span>
                  <i
                    class="el-icon-arrow-down"
                    v-show="downIcon2"
                  ></i>
                  <i
                    class="el-icon-arrow-up"
                    v-show="!downIcon2"
                  ></i>
                </div>
              </div>
              <!-- 指导处理意见内容 -->
              <el-collapse-transition>
                <p
                  class="handlingSuggestion"
                  v-show="isShow2"
                  v-html="recheckRightData.guideTheProcessing"
                ></p>
              </el-collapse-transition>
              <!-- 检查结果查看全部 -->
              <div class="lookAtallBtnBox">
                <h2>检查结果</h2>
                <div class="positionWire"></div>
                <div
                  class="inspectionResult"
                  @click="toggle3()"
                >
                  <span>查看全部</span>
                  <i
                    class="el-icon-arrow-down"
                    v-show="downIcon3"
                  ></i>
                  <i
                    class="el-icon-arrow-up"
                    v-show="!downIcon3"
                  ></i>
                </div>
              </div>

              <!-- 检查结果内容 -->
              <el-collapse-transition>
                <div
                  class="consequenceBox"
                  v-show="isShow3"
                >
                  <ul class="clearfix">
                    <li v-for="(item,index) in imageList">
                      <div>
                        <img
                          :src="'http://www.wcqxzs.com/pregnant/'+item.minImageURL"
                          alt=""
                          :bigSrc='item.minImageURL'
                        >
                      </div>
                    </li>

                  </ul>
                </div>
              </el-collapse-transition>
            </div>
          </div>

        </div>
        <!-- 新增复检记录按钮 -->
        <div class="recordNewsNav">
          <router-link :to="{path:'recordNews'}">
            <input
              type="button"
              value="新增复检记录"
              class="recordNewsBtn"
              @click="recordNewsBtn()"
            >
          </router-link>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="高危评估记录"
        name="evaluate"
      >

        <!-- 高危评估块 -->
        <div class="spouseNewsBox  clearfix">
          <div class="spouseNumsBox">
            <h2>评估记录（<i
                class="spouseNum"
                v-html="spouseNewsNum"
              ></i>）<i class="crossIcon"></i></h2>
            <ul>
              <li
                v-for="(item,index) in spouseNewsData"
                :key='index'
                :date="item"
                @click="spouseNewsCareNum(index)"
                :class="{active:index == spouseNewshowActive}"
              >
                <i
                  class="colorLump level0"
                  v-show="item.gradeType == 0"
                ></i>
                <i
                  class="colorLump level1"
                  v-show="item.gradeType == 1"
                ></i>
                <i
                  class="colorLump level2"
                  v-show="item.gradeType == 2"
                ></i>
                <i
                  class="colorLump level3"
                  v-show="item.gradeType == 3"
                ></i>
                <i
                  class="colorLump level4"
                  v-show="item.gradeType == 4"
                ></i>
                <p v-html="'第'+item.checkNumber +'次评估'"></p>
                <span v-html="item.createDate"></span>
                <div class="triangleIocn"></div>
              </li>

            </ul>
          </div>
          <div class="assessDetailedInformation">
            <p class="tableHeader"><span class="assessDegree">{{'第'+spouseNewsRrightData.checkNumber +'次产检'}}</span><span class="assessexamination">{{spouseNewsRrightData.createDate}}</span><span class="assessWeek">{{spouseNewsRrightData.newAgeOfMenarche+'+'+spouseNewsRrightData.newAgeOfMenarcheDay+'周'}}</span></p>
            <div class="wire"></div>

            <!-- 自觉不适查看全部 -->
            <div class="lookAtallBtnBox">
              <h2>评估信息</h2>
              <div class="positionWire"></div>
              <div
                class="assessInformationBtn"
                @click="toggle4()"
              >
                <span>查看全部</span>
                <i
                  class="el-icon-arrow-down"
                  v-show="downIcon4"
                ></i>
                <i
                  class="el-icon-arrow-up"
                  v-show="!downIcon4"
                ></i>
              </div>
            </div>
            <!-- 自觉不适内容 -->
            <el-collapse-transition>
              <div
                class="assessInformationBox"
                v-show="isShow4"
              >
                <p
                  class="mgb16"
                  v-if="spouseNewsRrightData.green !=undefined"
                ><i class="level0"></i> <span class="colour">绿色（低风险）</span><span class="greenNum">{{spouseNewsRrightData.green.length+'项'}}</span></p>
                <div class="colorTxt greenText">
                  <p v-for="(item,index) in spouseNewsRrightData.green">{{item}}</p>
                </div>
                <p
                  class="mgb16"
                  v-if="spouseNewsRrightData.red !=undefined"
                ><i class="level3"></i> <span class="colour">红色（高风险）</span><span class="redNum">{{spouseNewsRrightData.red.length+'项'}}</span></p>
                <div class="colorTxt redText">
                  <p v-for="item in spouseNewsRrightData.red">{{item}}</p>
                </div>
                <p
                  class="mgb16"
                  v-if="spouseNewsRrightData.yellow !=undefined"
                ><i class="level1"></i> <span class="colour">黄色（一般风险）</span><span class="yellowNum">{{spouseNewsRrightData.yellow.length+'项'}}</span></p>
                <div class="colorTxt yellowText">
                  <p v-for="item in spouseNewsRrightData.yellow">{{item}}</p>
                </div>
                <p
                  class="mgb16"
                  v-if="spouseNewsRrightData.orange !=undefined"
                ><i class="level2"></i> <span class="colour">橙色（较高风险）</span><span class="orangeNum">{{spouseNewsRrightData.orange.length+'项'}}</span></p>
                <div class="colorTxt orangeText">
                  <p v-for="item in spouseNewsRrightData.orange">{{item}}</p>
                </div>
                <p
                  class="mgb16"
                  v-if="spouseNewsRrightData.purple !=undefined"
                ><i class="level4"></i> <span class="colour">紫色（传染性疾病）</span><span class="purpleNum">{{spouseNewsRrightData.purple.length+'项'}}</span></p>
                <div class="colorTxt purpleText">
                  <p v-for="item in spouseNewsRrightData.purple">{{item}}</p>
                </div>
              </div>
            </el-collapse-transition>
            <div class="lookAtallBtnBox">
              <h2>备注信息</h2>
              <div class="positionWire2"></div>
              <div
                class="postscriptBtn"
                @click="toggle5()"
              >
                <span>查看全部</span>
                <i
                  class="el-icon-arrow-down"
                  v-show="downIcon5"
                ></i>
                <i
                  class="el-icon-arrow-up"
                  v-show="!downIcon5"
                ></i>
              </div>
            </div>
            <el-collapse-transition>
              <p
                class="postscriptContent"
                v-show="isShow5"
              >
                <span v-show="spouseNewsRrightData.remarks == ''">无</span>
                <span v-show="spouseNewsRrightData.remarks !== ''">{{spouseNewsRrightData.remarks}}</span>
              </p>
            </el-collapse-transition>
          </div>
        </div>
        <!-- 新增高危评估按钮 -->
        <div
          class="spouseNewsnav"
          style="display:flax;"
        >
          <router-link :to="{path: '/spouseNews', query:{checkNumber: spouseNewsNum}}">
            <input
              type="button"
              value="新增高危评估"
              class="spouseNewsBtn"
              @click="spouseNewsBtn()"
            >
          </router-link>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="产后42天检查记录"
        name="record"
        class="fortyTwoBox"
      >
        <div
          class="fortyTwoImgShow"
          v-show="fortyTwoImgHide"
        >
          <div class="noDataImg"></div>
          <p>暂无记录...</p>
        </div>
        <div
          class="fortyTwoShooBox"
          v-show="fortyTwoDataHide"
        >
          <div class="fortyTwoTittle clearfix">
            <p class="fl fortyTwoTittle_left">
              <span>{{patientFourtyTwoData.checkDate}}</span>
              <span>产后{{patientFourtyTwoData.checkDay}}天</span>
              <span v-show="patientFourtyTwoData.feedingType ==1">母乳喂养</span>
              <span v-show="patientFourtyTwoData.feedingType ==2">混合</span>
              <span v-show="patientFourtyTwoData.feedingType ==3">人工喂养</span>
            </p>
            <!-- <p class="fr"><i>操作人：</i><span class="doctorName">周晓晓</span></p> -->
          </div>
          <div class="fortyTwoTable">
            <div>
              <img
                src="../../../assets/cross.png"
                alt=""
              >
              <h4>一般检查</h4>
              <h2>
                <p><i>血压：</i><span>{{patientFourtyTwoData.baseBloodPressureHigh}}/{{patientFourtyTwoData.baseBloodPressureLow}}</span><i class="unit">mmHg</i></p>
                <p><i>体重：</i><span>{{patientFourtyTwoData.baseWeight}}</span><i class="unit">kg</i></p>
                <p><i>乳房：</i><span v-show="patientFourtyTwoData.baseBreast ==0">未出现异常</span><span v-show="patientFourtyTwoData.baseBreast ==1">异常</span></p>
                <p><i>乳头：</i><span v-show="patientFourtyTwoData.baseNipple ==0">未出现异常</span><span v-show="patientFourtyTwoData.baseNipple ==1">异常</span></p>
                <p><i>乳汁：</i><span v-show="patientFourtyTwoData.baseLatex ==0">未出现异常</span><span v-show="patientFourtyTwoData.baseLatex ==1">异常</span></p>
              </h2>
            </div>
            <div>
              <img
                src="../../../assets/cross.png"
                alt=""
              >
              <h4>妇科检查</h4>
              <h2>
                <p><i>外阴：</i><span v-show="patientFourtyTwoData.gynecologyVulva ==0">未出现异常</span><span v-show="patientFourtyTwoData.gynecologyVulva ==1">异常</span></p>
                <p><i>阴道：</i><span v-show="patientFourtyTwoData.gynecologyVagina ==0">未出现异常</span><span v-show="patientFourtyTwoData.gynecologyVagina ==1">异常</span></p>
                <p><i>宫颈：</i><span v-show="patientFourtyTwoData.gynecologyCervical ==0">未出现异常</span><span v-show="patientFourtyTwoData.gynecologyCervical ==1">异常</span></p>
                <p><i>子宫：</i><span v-show="patientFourtyTwoData.gynecologyUterus ==0">未出现异常</span><span v-show="patientFourtyTwoData.gynecologyUterus ==1">异常</span></p>
                <p class="mgr70"><i>双侧附件：</i><span v-show="patientFourtyTwoData.gynecologyAttachmentOnBothSides ==0">未出现异常</span><span v-show="patientFourtyTwoData.gynecologyAttachmentOnBothSides ==1">异常</span></p>
                <p><i>恶露：</i><span v-show="patientFourtyTwoData.gynecologyLochia ==0">未出现异常</span><span v-show="patientFourtyTwoData.gynecologyLochia ==1">异常</span></p>
              </h2>
            </div>
            <div>
              <h4>婴儿情况</h4>
              <h2>

                <p><i>体重：</i><span>{{patientFourtyTwoData.babyWeight}}</span><i class="unit">kg</i></p>
                <p><i>身长：</i><span>{{patientFourtyTwoData.babyHigh}}</span><i class="unit">cm</i></p>
                <p><i>胸部：</i><span v-show="patientFourtyTwoData.babyChest ==0">未出现异常</span><span v-show="patientFourtyTwoData.babyChest ==1">异常</span></p>
                <p><i>心：</i><span v-show="patientFourtyTwoData.babyHeart ==0">未出现异常</span><span v-show="patientFourtyTwoData.babyHeart ==1">异常</span></p>
                <p><i>肺：</i><span v-show="patientFourtyTwoData.babyLungs ==0">未出现异常</span><span v-show="patientFourtyTwoData.babyLungs ==1">异常</span></p>
              </h2>
            </div>
          </div>
          <!--新生儿评估查看全部 -->
          <div class="lookAtallBtnBox">
            <h2>新生儿评估</h2>
            <div class="positionWire"></div>
            <div
              class="fortyTwoAtallBtn"
              @click="toggle6()"
            >
              <span>查看全部</span>
              <i
                class="el-icon-arrow-down"
                v-show="downIcon6"
              ></i>
              <i
                class="el-icon-arrow-up"
                v-show="!downIcon6"
              ></i>
            </div>
          </div>

          <!-- 42天新生儿评估内容 -->
          <el-collapse-transition>
            <p
              class="newbornContent"
              v-show="isShow6"
            >{{patientFourtyTwoData.malaise}}</p>
          </el-collapse-transition>

          <!-- 42天指导与处理查看全部 -->
          <div class="lookAtallBtnBox">
            <h2>指导与处理</h2>
            <div class="positionWire2"></div>
            <div
              class="fortyTwoGuidanceBtn"
              @click="toggle7()"
            >
              <span>查看全部</span>
              <i
                class="el-icon-arrow-down"
                v-show="downIcon7"
              ></i>
              <i
                class="el-icon-arrow-up"
                v-show="!downIcon7"
              ></i>
            </div>
          </div>
          <!-- 42天指导与处理内容 -->
          <el-collapse-transition>
            <p
              class="guidanceCantent"
              v-show="isShow7"
            >
              {{patientFourtyTwoData.guideTheProcessing}}
            </p>
          </el-collapse-transition>
        </div>

        <!-- 新增42天按钮 -->
        <!-- <div class="recordNewsNav">
          <router-link :to="{path:'fortyTwoDay'}">
            <input
              type="button"
              value="新增产后42天记录"
              class="fortyTwoDayBtn"
              @click="fortyTwoDayBtn()"
            >
          </router-link>
        </div> -->
      </el-tab-pane>
    </el-tabs>

    <!-- BMI值弹框 -->
    <el-dialog
      title="BMI值"
      :visible.sync="BMLValue"
      width="800px"
      :before-close="handleClose"
      class="newlyLayer"
    >
      <div class="newlyLayerTop">
        <h2>BMI孕期体重管理曲线图</h2>
        <p>孕前BMI：<span>18.5-24.9</span>kg/m</p>
        <p>体重正常，建议孕期体重增长目标：<span>11.5~16</span>kg</p>
      </div>
      <div class="newlyLayerBottom clearfix">
        <p class="lengthways">体重增长（kg）</p>
        <div
          id="myChart"
          :style="{width: '94%', height: '280px',left:'0px',top:'-30px',float: 'left'}"
        ></div>
        <p class="lengtweeks">孕周（周）</p>
      </div>
    </el-dialog>

  </div>

</template>
<script>
import $ from "jquery";
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  data() {
    return {
      tableDataParticulars: {}, // 头部详情
      activeName: "recheck", // recheck 复检记录，evaluate高危评估记录，record产后42天记录
      isShow1: true,
      isShow2: true,
      isShow3: true,
      isShow4: true,
      isShow5: true,
      isShow6: true,
      isShow7: true,
      downIcon: true,
      downIcon2: true,
      downIcon3: true,
      downIcon4: true,
      downIcon5: true,
      downIcon6: true,
      downIcon7: true,
      showActive: 0, //附件记录添加类名的下标
      spouseNewshowActive: 0, //高危评估记录添加类名的下标
      patientCenterId: "",
      recheckRecord: [], //复检记录数据
      examineNum: "", //检查记录条数
      recheckRightData: {}, //复检记录右边数据
      highRiskFactor: [], //高危因素数组
      imageList: [], //复检记录-图片数组
      imgShowHide: false, //复检暂无数据
      recordNumsDataShow: false, //复检数据显示隐藏
      spouseNewsData: [], //高危评估数据
      spouseNewsNum: "", //高危评估数据条数
      spouseNewsRrightData: {}, //高危评估右边数据
      patientFourtyTwoData: {}, //产后42天数据
      fortyTwoImgHide: false, //产后42天暂无数据图片
      fortyTwoDataHide: false, //产后42天数据显示
      BMLValue: false
    };
  },
    beforeRouteLeave(to, from, next) {
         // 设置下一个路由的 meta
        to.meta.keepAlive = true;  // 让 A 缓存，即不刷新
        next();
    },
  activated() {
    var tableDataParticulars = eval(
      "(" + localStorage.getItem("tableDataParticulars") + ")"
    );
    this.tableDataParticulars = tableDataParticulars;
    this.patientCenterId = this.tableDataParticulars.id;
    let highRiskFactor = this.tableDataParticulars.highRiskTotalNum;
    this.highRiskFactor = eval("(" + highRiskFactor + ")");
    this.indexInquire();
    this.assessInquire();
    this.patientFourtyTwo();
    // this.drawLine();
  
  },
  methods: {
    // 弹框关闭按钮
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    spouseNewsBtn() {
      console.log("新增高危记录");
    },
    recordNewsBtn() {
      window.localStorage.setItem('mayernal-web-recordNum',this.examineNum);
    },
    fortyTwoDayBtn() {
      console.log("新增产后42天");
    },
    //复检记录- 自觉不适点击显示隐藏
    toggle1: function() {
      this.isShow1 = !this.isShow1;
      this.downIcon = !this.downIcon;
    },
    //复检记录- 指导处理意见点击显示隐藏
    toggle2: function() {
      this.isShow2 = !this.isShow2;
      this.downIcon2 = !this.downIcon2;
    },
    // 复检记录- 检查结果点击显示隐藏
    toggle3: function() {
      this.isShow3 = !this.isShow3;
      this.downIcon3 = !this.downIcon3;
    },
    // 高危评估-评估信息点击显示隐藏
    toggle4: function() {
      this.isShow4 = !this.isShow4;
      this.downIcon4 = !this.downIcon4;
    },
    //  高危评估-备注信息点击显示隐藏
    toggle5: function() {
      this.isShow5 = !this.isShow5;
      this.downIcon5 = !this.downIcon5;
    },

    //产后42天检查记录-新生儿评估点击显示隐藏
    toggle6: function() {
      this.isShow6 = !this.isShow6;
      this.downIcon6 = !this.downIcon6;
    },
    // /产后42天检查记录-指导与处理点击显示隐藏
    toggle7: function() {
      this.isShow7 = !this.isShow7;
      this.downIcon7 = !this.downIcon7;
    },
    // 产检次数添加类名
    antenatalCareNum(index) {
      this.showActive = index;
      // console.log(this.recheckRecord[index]);
      this.recheckRightData = this.recheckRecord[index];
      if (
        this.recheckRecord[index].imageList == null ||
        this.recheckRecord[index].imageList == ""
      ) {
        return;
        this.imageList = [];
      } else {
        this.imageList = eval("(" + this.recheckRecord[index].imageList + ")");
      }
      // console.log(this.imageList);
    },
    // 高危次数添加类名
    spouseNewsCareNum(index) {
      this.spouseNewshowActive = index;
      this.spouseNewsRrightData = this.spouseNewsData[index];
    },
    // 复检记录查询
    indexInquire() {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .patientSecondCheckFindListByCenterId({
          token: token1,
          patientCenterId: this.patientCenterId
        })
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
             let recheckRecordData = res.pcPatientSecondCheckBeanList.reverse();
            this.recheckRecord = recheckRecordData;
            console.log(this.recheckRecord);
            this.recheckRightData = res.pcPatientSecondCheckBeanList[0];
            if (this.recheckRecord[0].imageList !== "") {
              this.imageList = eval(
                "(" + this.recheckRecord[0].imageList + ")"
              );
            }
            this.examineNum = res.pcPatientSecondCheckBeanList.length;
            this.recordNumsDataShow = true;
            this.imgShowHide = false;
          } else if (res.status === "20209") {
                this.recheckRecord = [];
             this.imgShowHide = true;
             this.recordNumsDataShow = false;
          }
        })
        .catch(error => {
          // this.$Message.info(error);
        });
    },
    // 高危评估查询
    assessInquire() {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .patientHighRiskGradeFindList({
          token: token1,
          patientCenterId: this.patientCenterId
        })
        .then(res => {
          // console.log(res);
          if (res.status === "20200") {
            let spouseNews = res.pcPatientHighRiskGradeBeanList.reverse();
            this.spouseNewsRrightData = res.pcPatientHighRiskGradeBeanList[0];
            this.spouseNewsNum = res.pcPatientHighRiskGradeBeanList.length;
            var aaa = res.pcPatientHighRiskGradeBeanList;
            for (let i = 0; i < aaa.length; i++) {
              const HighRiskGradeBeanList = aaa[i];
              var HighRiskparticulars = JSON.parse(
                HighRiskGradeBeanList.details
              );
              HighRiskGradeBeanList.green = HighRiskparticulars.green;
              HighRiskGradeBeanList.orange = HighRiskparticulars.orange;
              HighRiskGradeBeanList.purple = HighRiskparticulars.purple;
              HighRiskGradeBeanList.red = HighRiskparticulars.red;
              HighRiskGradeBeanList.yellow = HighRiskparticulars.yellow;
            }
            this.spouseNewsData = spouseNews;
          } else if (res.status === "20209") {
            this.recheckRecord = [];
          }
        })
        .catch(error => {});
    },

    // 产后42天查询
    patientFourtyTwo() {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .patientFourtyTwoFindByCenterId({
          token: token1,
          patientCenterId: this.patientCenterId
        })
        .then(res => {
          // console.log(res);
          if (res.status === "20200") {
            this.patientFourtyTwoData = res;
            this.fortyTwoImgHide = false;
            this.fortyTwoDataHide = true;
          } else if (res.status === "20209") {
            this.fortyTwoImgHide = true;
            this.fortyTwoDataHide = false;
          }
        })
        .catch(error => {
          // this.$Message.info(error);
        });
    },
    BMLValueBtn() {
      this.BMLValue = true;
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .patientBMI({
          token: token1,
          patientCenterId: this.patientCenterId
        })
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById("myChart"));
            var tempData = [];
            var patientBMIBeanList = res.pcPatientBMIBeanList;
            var a;
            for (let i = 0; i < patientBMIBeanList.length; i++) {
              var tempArr = [];
              a = JSON.parse(patientBMIBeanList[i].newAgeOfMenarche);
              // a = a*1-13;
              tempArr.push(a);
              tempArr.push(patientBMIBeanList[i].details);
              tempData.push(tempArr);
              // tempData.splice(a, 1, patientBMIBeanList[i].details);
            }
            console.log(tempData);

            var xTempData = [];
            for (let index = 13; index <= 43; index++) {
              xTempData.push(index);
            }
            // 绘制图表
            myChart.setOption({
              // title: { text: "ECharts 入门示例" },
              tooltip: {
                trigger: "axis",
                axisPointer: {
                  type: "cross",
                  label: {
                    backgroundColor: "#6a7985"
                  }
                }
              },
              grid: {
                left: "2%",
                right: "4%",
                bottom: "3%",
                containLabel: true
              },
              xAxis: {
                // data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                data: xTempData
              },
              yAxis: {
                type: "value",
                nameLocation: "center",
                // ,
                min: 10,
                max: 50,
                splitNumber: 8
              },
              series: [
                {
                  name: "kg",
                  type: "line",
                  data: tempData
                }
              ]
            });
          } else if (res.status === "20209") {
            xTempData = [];
            tempData = [];

          }
        })
        .catch(error => {
          // this.$Message.info(error);
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

.w78 {
  width: 78px;
}

.w80 {
  width: 80px;
}

.w84 {
  width: 84px;
}

.w86 {
  width: 86px;
}

.w112 {
  width: 112px;
}

.w122 {
  width: 122px;
}

.w124 {
  width: 124px;
}

.w150 {
  width: 150px;
}

.mgl10 {
  margin-left: 10px;
}

.mgl12 {
  margin-left: 12px;
}

.mgl16 {
  margin-left: 16px;
}

.mgl24 {
  margin-left: 24px;
}

.mgl28 {
  margin-left: 28px;
}

.mgl174 {
  margin-left: 174px;
}

.mgr0 {
  margin-right: 0px !important;
  display: inline-block;
}

.mgr30 {
  margin-right: 30px !important;
}

.mgr34 {
  margin-right: 34px !important;
}

.mgr38 {
  margin-right: 44px !important;
}

.mgr76 {
  margin-right: 76px;
  display: inline-block;
}

.mgr77 {
  margin-right: 78px;
}

.mgb0 {
  margin-bottom: 0px !important;
}

.mgt140 {
  margin-top: 140px !important;
}

.mgb12 {
  margin-bottom: 12px;
}
.mgb16 {
  margin-bottom: 16px;
}

.mgb20 {
  margin-bottom: 20px;
}

.pdl0 {
  padding-left: 0px !important;
  color: #666;
}

.fl {
  float: left;
}

.fr {
  float: right;
}
.cl666 {
  color: #666666;
}

#personalCenter {
  .informationBox {
    width: 978px;
    background-color: #fff;
    .informationBox_left {
      float: left;
      padding-top: 20px;
      position: relative;
      width: 164px;
      &:before {
        content: " ";
        position: absolute;
        top: 16px;
        right: 0px;
        width: 1px;
        height: 155px;
        background: #ccc;
      }
      .headIcon {
        overflow: hidden;
        width: 74px;
        height: 74px; // .height(173);
        border-radius: 50%;
        background-color: #ededed;
        border-width: 1px;
        border-style: solid;
        position: relative;
        border-color: #7dc1ea; // .margin(0, 0, 20, 152);
        background-image: url("../../../assets/woman.png");
        background-repeat: none;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        margin: 0 auto;
        a {
          position: absolute;
          top: 50px;
          left: 0;
          .preview {
            text-align: center;
            background-color: black;
            opacity: 0.5;
            height: 25px;
            line-height: 25px;
            width: 70px;
            font-size: 12px;
            color: #fff;
          }
        }
      }
      p {
        text-align: center;
        margin-top: 14px;
      }
      .name {
        font-size: 14px;
        color: #333333;
      }
      .age {
        display: inline-block;
        width: 36px;
        height: 18px;
        background-color: #95ccee;
        text-align: center;
        line-height: 18px;
        border-radius: 25%;
        color: #666666;
        font-size: 12px;
      }
      .BMLValue {
        width: 100px;
        height: 38px;
        background-color: #77bee9;
        color: #fff;
        text-align: center;
        line-height: 38px;
        font-size: 12px;
        border-radius: 50px 50px 50px 50px;
        margin: 14px auto;
        cursor: pointer;
      }

      .crossIcon {
        background: url("../../../assets/cross.png") no-repeat 0 0;
        width: 8px;
        height: 8px;
        position: absolute;
        top: 88px;
        right: -3px;
        background-color: #fff;
      }
    }
    .informationBox_right {
      float: left;
      width: 814px;
      .newsBoxTop {
        padding: 6px 0 14px 0px;
        border-bottom: 1px solid #ccc;
        margin-left: 26px;
        p {
          width: 32%;
          margin-top: 16px;
          display: inline-block;
          span:nth-child(2n-1) {
            color: #666666;
            margin-right: 14px;
            text-align: right;
          }
        }
      }
      .newsBoxBottom {
        margin-left: 26px;
        padding: 6px 0 0px 0px;
        .newsBoxBottomFamily {
          margin-bottom: 14px;
          span:nth-child(2n-1) {
            color: #666666;
            margin-right: 14px;
            text-align: right;
          }
        }
        .assessmentInformation {
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
              top: 2px;
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
              top: 2px;
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
              top: 2px;
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
              top: 2px;
              right: -14px;
              width: 1px;
              height: 10px;
              background-color: #ccc;
            }
          }
        }
      }
    }
  }
  .recordNumsBox {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    min-height: 600px;
    position: relative;
    .imgSkow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .noDataImg {
        margin: 0px auto;
        background: url("../../../assets/fujianNoData.png") no-repeat -1px -22px;
        width: 180px;
        height: 98px;
      }
      p {
        font-size: 16px;
        color: #010101;
        text-align: center;
      }
    }
    .recordNumsBoxData {
      // display: none;
      .Contant_left_overflow {
        height: 500px;
        width: 168px;
        background-color: #fff;
        border: 1px solid #ccc;
        float: left;
        overflow: hidden;

        h2 {
          display: inline-block;
          height: 52px;
          width: 168px;
          text-align: center;
          line-height: 52px;
          font-size: 14px;
          color: #333333;
          border-bottom: 1px solid #ccc;
          position: relative;
          .crossIcon {
            background: url("../../../assets/cross.png") no-repeat 0 0;
            width: 8px;
            height: 8px;
            position: absolute;
            top: 48px;
            right: 84px;
            background-color: #fff;
          }
          i {
            font-style: normal;
          }
        }
        ul {
          height: 420px;
          position: absolute;
          left: 0;
          top: 0;
          right: -17px;
          bottom: 0;
          overflow-x: hidden;
          overflow-y: scroll;
          margin-top: 62px;
          > li {
            width: 168px;
            position: relative;
            padding: 8px 0px;
            padding-left: 20px;
            cursor: pointer;
            -moz-user-select: none; /*火狐*/
            -webkit-user-select: none; /*webkit浏览器*/
            -ms-user-select: none; /*IE10*/
            -khtml-user-select: none; /*早期浏览器*/
            user-select: none;

            p {
              font-size: 14px;
              color: #333333;
            }
            span {
              font-size: 12px;
              color: #666666;
            }
            .triangleIocn {
              width: 20px;
              height: 20px;
              border-width: 10px;
              border-style: solid;
              border-color: transparent;
              border-left-color: #68b6e7;
              display: none;
              position: absolute;
              top: 15px;
              right: -20px;
              // transition: 0.5s all;
            }
          }
          .active {
            background-color: #68b6e7;
            color: #fff !important;
            p {
              color: #fff;
            }
            span {
              color: #fff;
            }
            .triangleIocn {
              //   border-left-color: #68b6e7;
              display: block;
            }
          }
        }
      }
      .recheckDetailedInformation {
        float: left;
        padding: 15px 0px 30px 30px;
        width: 800px;
        .tableHeader {
          font-size: 16px;
          color: #68b7e7;
          margin-bottom: 14px;
          .recheckDegree {
            position: relative;
            margin-right: 30px;
            &:after {
              content: " ";
              position: absolute;
              top: 2px;
              right: -15px;
              width: 2px;
              height: 14px;
              background-color: #68b7e7;
            }
          }
        }
        .examination {
          position: relative;
          margin-right: 30px;
          &:after {
            content: " ";
            position: absolute;
            top: 2px;
            right: -15px;
            width: 1px;
            height: 14px;
            background-color: #ccc;
          }
        }
        .wire {
          width: 100%;
          height: 1px;
          background-color: #ccc;
          margin: 20px 0px;
        }
        .recheckTable {
          width: 752px;
          border: 1px solid #ccc;
          div {
            float: left;
            width: 28%;
            height: 120px;
            margin: 14px 0px 16px 34px;
            border-right: 1px solid #ccc;

            p {
              color: #666666;
              span {
                color: #333333;
              }
              margin-bottom: 16px;
              i {
                color: #999999;
                font-style: normal;
                margin-left: 8px;
              }
            }
            p:last-child {
              margin-bottom: 0px;
            }
          }
          div:last-child {
            border-right: none;
          }
          div:nth-child(1) {
            position: relative;
            .triangleIocn1 {
              background: url("../../../assets/cross.png") no-repeat 0 0;
              width: 8px;
              height: 8px;
              position: absolute;
              top: 48px;
              right: -4px;
              background-color: #fff;
            }
          }
          div:nth-child(2) {
            position: relative;
            .triangleIocn2 {
              background: url("../../../assets/cross.png") no-repeat 0 0;
              width: 8px;
              height: 8px;
              position: absolute;
              top: 48px;
              right: -4px;
              background-color: #fff;
            }
          }
        }
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
            top: 50%;
            right: 0px;
            width: 90%;
            height: 1px;
            background-color: #ccc;
          }
          .positionWire2 {
            width: 86%;
            position: absolute;
            top: 50%;
            right: 0px;
            height: 1px;
            background-color: #ccc;
          }
          .basicLookAtallBtn,
          .guidanceBtn,
          .inspectionResult {
            padding: 0px 5px;
            position: absolute;
            right: 28px;
            top: 0px;
            background-color: #fff;
            cursor: pointer;
            -moz-user-select: none; /*火狐*/
            -webkit-user-select: none; /*webkit浏览器*/
            -ms-user-select: none; /*IE10*/
            -khtml-user-select: none; /*早期浏览器*/
            user-select: none;
            i {
              color: #68b6e7;
            }
            span {
              color: #999999;
            }
          }
        }
        .malaise,
        .handlingSuggestion {
          margin-top: 16px;
          padding-bottom: 14px;
        }

        .consequenceBox {
          ul {
            margin-top: 24px;
            li {
              float: left;
              margin-right: 34px;
              margin-bottom: 20px;

              div {
                width: 96px;
                height: 96px;
                border: 1px solid #ccc;
                border-radius: 4px;
                img {
                  width: 96px;
                  height: 96px;
                  cursor: pointer;
                  border-radius: 4px;
                }
              }
            }
            li:nth-child(6n) {
              margin-right: 0px;
            }
          }
        }
      }
    }
  }

  // 高危评估模块
  .spouseNewsBox {
    padding-bottom: 30px;
    min-height: 600px;
    .spouseNumsBox {
      // display: inline-block;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      width: 168px;
      height: 500px;
      background-color: #fff;
      border: 1px solid #ccc;
      float: left;
      h2 {
        display: inline-block;
        height: 52px;
        width: 100%;
        text-align: center;
        line-height: 52px;
        font-size: 14px;
        color: #333333;
        border-bottom: 1px solid #ccc;
        position: relative;
        .crossIcon {
          background: url("../../../assets/cross.png") no-repeat 0 0;
          width: 8px;
          height: 8px;
          position: absolute;
          top: 48px;
          right: 84px;
          background-color: #fff;
        }
        i {
          font-style: normal;
        }
      }
      ul {
        height: 420px;
        position: absolute;
        left: 0;
        top: 0;
        right: -17px;
        bottom: 0;
        overflow-x: hidden;
        overflow-y: scroll;
        margin-top: 62px;
        > li {
          position: relative;
          width: 168px;
          padding: 8px 0px;
          padding-left: 40px;
          cursor: pointer;
          i {
            display: inline-block;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            position: absolute;
            top: 10px;
            left: 14px;
          }
          p {
            font-size: 14px;
            color: #333333;
          }
          span {
            font-size: 12px;
            color: #666666;
          }
          .triangleIocn {
            width: 20px;
            height: 20px;
            border-width: 10px;
            border-style: solid;
            border-color: transparent;
            border-left-color: #68b6e7;
            display: none;
            position: absolute;
            top: 15px;
            right: -20px;
            // transition: 0.5s all;
          }
        }
        .active {
          background-color: #68b6e7;
          color: #fff !important;
          p {
            color: #fff;
          }
          span {
            color: #fff;
          }
          .triangleIocn {
            //   border-left-color: #68b6e7;
            display: block;
          }
        }
      }
    }
    .assessDetailedInformation {
      float: left;
      padding: 15px 0px 0px 30px;
      width: 800px;
      .tableHeader {
        font-size: 16px;
        color: #68b7e7;
        margin-bottom: 14px;
        .assessDegree {
          position: relative;
          margin-right: 30px;
          &:after {
            content: " ";
            position: absolute;
            top: 2px;
            right: -15px;
            width: 2px;
            height: 14px;
            background-color: #68b7e7;
          }
        }
      }
      .assessexamination {
        position: relative;
        margin-right: 30px;
        &:after {
          content: " ";
          position: absolute;
          top: 2px;
          right: -15px;
          width: 2px;
          height: 14px;
          background-color: #68b7e7;
        }
      }
      .wire {
        width: 100%;
        height: 1px;
        background-color: #ccc;
        margin: 20px 0px;
      }

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
          top: 50%;
          right: 0px;
          width: 90%;
          height: 1px;
          background-color: #ccc;
        }
        .positionWire2 {
          width: 90%;
          position: absolute;
          top: 50%;
          right: 0px;
          height: 1px;
          background-color: #ccc;
        }
        .assessInformationBtn,
        .postscriptBtn {
          padding: 0px 5px;
          position: absolute;
          right: 28px;
          top: 0px;
          background-color: #fff;
          cursor: pointer;
          -moz-user-select: none; /*火狐*/
          -webkit-user-select: none; /*webkit浏览器*/
          -ms-user-select: none; /*IE10*/
          -khtml-user-select: none; /*早期浏览器*/
          user-select: none;
          i {
            color: #68b6e7;
          }
          span {
            color: #999999;
          }
        }
      }
      .postscriptContent {
        margin-top: 16px;
        padding-bottom: 14px;
      }
      .assessInformationBox {
        margin-top: 20px;
        p {
          position: relative;
          color: #333333;
        }
        i {
          display: inline-block;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          position: absolute;
          top: 3px;
          left: 0px;
        }
      }
      .colour {
        margin-left: 18px;
        position: relative;
        margin-right: 26px;
        &:after {
          content: " ";
          position: absolute;
          top: 2px;
          right: -13px;
          width: 1px;
          height: 14px;
          background-color: #ccc;
        }
      }
      .colorTxt {
        font-size: 14px;
        color: #666666 !important;
        padding-bottom: 8px;
        border-bottom: 1px solid #999999;
        margin-bottom: 16px;
      }
    }
  }
  // 产后42天模块
  .fortyTwoBox {
    padding: 18px 28px 30px 28px;
    min-height: 600px;
    .fortyTwoImgShow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .noDataImg {
        margin: 0px auto;
        background: url("../../../assets/42NoData.png") no-repeat -1px -22px;
        width: 180px;
        height: 98px;
      }
      p {
        font-size: 16px;
        color: #010101;
        text-align: center;
      }
    }
    .fortyTwoShooBox {
      .fortyTwoTittle {
        border-bottom: 1px solid black;
        width: 100%;
        height: 54px;
        line-height: 54px;
        .fortyTwoTittle_left {
          span {
            color: #68b6e7;
            position: relative;
            margin-right: 36px;
            // &:before {
            //   content: " ";
            //   position: absolute;
            //   top: 4px;
            //   right: -18px;
            //   width: 1px;
            //   height: 10px;
            //   background: #68b6e7;
            // }
          }
          span:nth-child(1) {
            &:before {
              content: " ";
              position: absolute;
              top: 4px;
              right: -18px;
              width: 1px;
              height: 10px;
              background: #68b6e7;
            }
          }
          span:nth-child(2) {
            &:before {
              content: " ";
              position: absolute;
              top: 4px;
              right: -18px;
              width: 1px;
              height: 10px;
              background: #68b6e7;
            }
          }
        }
        i {
          font-style: normal;
          color: #666666;
        }
      }
      .fortyTwoTable {
        margin-top: 18px;
        border: 1px solid #ccc;
        border-radius: 4px;
        div {
          padding: 24px 0px 30px 20px;
          h4 {
            font-size: 16px;
            color: #333333;
            margin-bottom: 20px;
          }
          h2 {
            font-size: 14px;
            p {
              display: inline;
              margin-right: 40px;
              position: relative;
              line-height: 30px;
              &:before {
                content: " ";
                position: absolute;
                top: 4px;
                right: -20px;
                width: 1px;
                height: 10px;
                background: #ccc;
              }
              i {
                color: #666666;
                font-style: normal;
                margin-right: 10px;
              }
            }
            .mgr70 {
              margin-right: 120px;
            }
            p:nth-last-child(1):before {
              display: none;
            }
          }
        }
        div:nth-child(1),
        div:nth-child(2) {
          border-bottom: 1px solid #ccc;
          position: relative;
          img {
            background: url("../../../assets/cross.png") no-repeat 0 0;
            width: 8px;
            height: 8px;
            position: absolute;
            bottom: -4px;
            left: 50%;
            background-color: #fff;
            padding: 0px 5px;
          }
        }
        div:nth-last-child(1) {
          border: none;
        }
        div:nth-child(2) {
          p:nth-last-child(2):before {
            display: none;
          }
        }
      }
      .unit {
        font-size: 14px;
        margin-left: 6px;
        color: #999999;
      }
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
          top: 50%;
          right: 0px;
          width: 90%;
          height: 1px;
          background-color: #ccc;
        }
        .positionWire2 {
          width: 90%;
          position: absolute;
          top: 50%;
          right: 0px;
          height: 1px;
          background-color: #ccc;
        }
        .fortyTwoAtallBtn,
        .fortyTwoGuidanceBtn {
          padding: 0px 5px;
          position: absolute;
          right: 28px;
          top: 0px;
          background-color: #fff;
          cursor: pointer;
          -moz-user-select: none; /*火狐*/
          -webkit-user-select: none; /*webkit浏览器*/
          -ms-user-select: none; /*IE10*/
          -khtml-user-select: none; /*早期浏览器*/
          user-select: none;
          i {
            color: #68b6e7;
          }
          span {
            color: #999999;
          }
        }
      }
      .newbornContent,
      .guidanceCantent {
        margin-top: 18px;
      }
    }
  }
  // 新增记录按钮
  .recordNewsNav,
  .spouseNewsnav {
    position: fixed;
    width: 100%;
    height: 88px;
    line-height: 88px;
    vertical-align: middle;
    bottom: 0;
    left: 0;
    background-color: #92c9eb;
    opacity: 0.8;
    input {
      width: 160px;
      height: 40px;
      background-color: #f4fafd;
      color: #000000;
      text-align: center;
      line-height: 40px;
      border-radius: 4px;
      font-size: 14px;
      float: right;
      margin-right: 56px;
      margin-top: 25px;
    }
  }
  .newlyLayerTop {
    padding: 24px;
    background: url("../../../assets/backgroundIcon.png") no-repeat 0 0;
    width: 774px;
    height: 124px;
    h2 {
      font-size: 16px;
      color: #333333;
    }
    p {
      font-size: 14px;
      color: #666666;
    }
  }
  .newlyLayerBottom {
    background: url("../../../assets/bigBackgroundIcon.png") no-repeat 0 0;
    width: 774px;
    height: 300px;
    position: relative;
    .lengthways {
      writing-mode: tb-rl;
      font-size: 16px;
      float: left;
      letter-spacing: 10px;
      padding-top: 40px;
      padding-left: 24px;
    }
    .lengtweeks {
      position: absolute;
      bottom:34px;
      left: 50%;
      transform: translate(-50%,0);
      letter-spacing: 10px;
      font-size: 16px;
    }
  }
}
</style>

<style lang="less">
#personalCenter {
  .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    width: 260px;
  }
  .el-tabs__nav-scroll {
    height: 64px;
    line-height: 64px;
    background-color: #fff;
    color: #333333;
    margin-top: 16px;
    box-shadow: 0px 0px 12px 4px rgba(51, 51, 51, 0.08);
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
    padding: 0px;
    background-color: #fff;
  }
  .el-dialog__header {
    background-color: #ededed;
  }
}
</style>


