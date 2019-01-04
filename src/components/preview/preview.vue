<template>
  <div class="newfileBox">
    <el-tabs
      v-model="activeName"
      class="aaaa"
      @tab-click="handleClick"
    >
      <!-- 孕妇基本信息 -->
      <el-tab-pane
        label="孕妇基本信息"
        name="first"
        class='pregnantNewsBox'
        @click="firstClick()"
      >
        <div class="lookAtallBtnBox">
          <h2>孕妇基本信息</h2>
          <div class="positionWire"></div>
        </div>
        <!-- 孕妇基本信息查看全部块 -->
        <p><i>孕妇姓名：</i><span>{{essentialInformation.name}}</span></p>
        <p><i>就诊卡号：</i><span>{{essentialInformation.number}}</span></p>
        <p><i>手&nbsp;&nbsp;机&nbsp;&nbsp;号：</i><span>{{essentialInformation.telephone}}</span></p>
        <p><i>证件类型：</i><span v-show="essentialInformation.idCardType == 0">身份证</span><span v-show="essentialInformation.idCardType == 1">护照</span></p>
        <p><i>身份证号：</i><span>{{essentialInformation.idCard}}</span></p>
        <p><i>出生年月：</i><span >{{essentialInformation.birthdayDate}}</span><span class="jobBox mgl20">{{essentialInformation.age}}岁</span><span v-show="essentialInformation.sex == 0" class="jobBox mgl20">男</span><span v-show="essentialInformation.sex == 1" class="jobBox mgl20">女</span></p>
        <p><i>结婚年龄：</i><span>{{essentialInformation.marryAge}}岁</span></p>
        <p><i>孕前体重：</i><span>{{essentialInformation.lastWeight}}kg</span></p>
        <div class="wire"></div>
        <p><i>结婚状况：</i><span v-show="essentialInformation.marryType ==0">初婚</span><span v-show="essentialInformation.marryType ==1">再婚</span><span v-show="essentialInformation.marryType ==2">其他</span></p>
        <p><i>婚&nbsp;&nbsp;检：</i><span v-show="essentialInformation.marryCheck ==0">无</span><span v-show="essentialInformation.marryCheck ==1">有</span></p>
        <p><i>近半年避孕方法：</i><span v-show="essentialInformation.contraception == 0">未避孕</span><span v-show="essentialInformation.contraception ==1">口服避孕药</span><span v-show="essentialInformation.contraception ==2">避孕套</span><span v-show="essentialInformation.contraception ==3">避孕膜</span><span v-show="essentialInformation.contraception ==4">其他</span></p>
        <p><i>文化程度：</i><span v-show="essentialInformation.education ==0">硕士以上</span><span v-show="essentialInformation.education ==1">本科</span><span v-show="essentialInformation.education ==2">大专</span><span v-show="essentialInformation.education ==3">中专及高中</span><span v-show="essentialInformation.education ==4">初中</span><span v-show="essentialInformation.education ==5">文盲</span></p>
        <p><i>民&nbsp;&nbsp;族：</i><span>{{essentialInformation.nation}}</span></p>
        <p><i>职&nbsp;&nbsp;业：</i><span v-show="essentialInformation.job ==0">无</span><span v-show="essentialInformation.job ==1">农、牧、渔</span><span v-show="essentialInformation.job ==2">干部、职员</span><span v-show="essentialInformation.job ==3">医院、科技</span><span v-show="essentialInformation.job ==4">工人</span><span v-show="essentialInformation.job ==5">个体</span><span v-show="essentialInformation.job ==6">家务</span><span class="jobBox mgl20">{{essentialInformation.jobCompanyName}}</span></p>
        <div class="wire"></div>
        <h4 class="mgt26"><i>户口所在地：</i><span>{{essentialInformation.idCardAddressProvince}}{{essentialInformation.idCardAddressCity}}{{essentialInformation.idCardAddressCounty}}</span></h4>
        <h4><i>现住地址：</i><span>{{essentialInformation.newAddressProvince}}{{essentialInformation.newAddressCity}}{{essentialInformation.newAddressCounty}}</span></h4>
        <h4><i>详细地址：</i><span>{{essentialInformation.newAddressRemarks}}</span></h4>

      </el-tab-pane>
      <el-tab-pane
        label="配偶一般信息"
        name="second"
        class='spouseNewsBox'
        @click="secondClick()"
      >
        <!-- 配偶一般信息 -->
        <div class="lookAtallBtnBox">
          <h2>配偶一般信息</h2>
          <div class="positionWire"></div>
        </div>
        <!-- 孕妇基本信息查看全部块 -->
        <p><i>配偶姓名：</i><span>{{spouseInformation.name}}</span></p>
        <p><i>手&nbsp;&nbsp;机&nbsp;&nbsp;号：</i><span>{{spouseInformation.telephone}}</span></p>
        <p><i>结婚年龄：</i><span>{{spouseInformation.marryAge}}岁</span></p>
        <p><i>证件类型：</i><span v-show="spouseInformation.idCardType == 0">身份证</span><span v-show="spouseInformation.idCardType == 1">护照</span></p>
        <p><i>身份证号：</i><span>{{spouseInformation.idCard}}</span></p>
        <p><i>配偶年龄：</i><span> {{spouseInformation.age}}岁</span></p>
        <div class="wire"></div>
        <p><i>结婚状况：</i><span v-show="spouseInformation.marryType ==0">初婚</span><span v-show="spouseInformation.marryType ==1">再婚</span><span v-show="spouseInformation.marryType ==2">其他</span></p>
        <p><i>婚&nbsp;&nbsp;检：</i><span v-show="spouseInformation.marryCheck ==0">无</span><span v-show="spouseInformation.marryCheck ==1">有</span></p>
        <p><i>将康状态：</i><span v-show="spouseInformation.healthType ==0">健康</span><span v-show="spouseInformation.healthType ==1">一般</span><span v-show="spouseInformation.healthType ==2">较弱</span></p>
        <p><i>文化程度：</i><span v-show="spouseInformation.education ==0">硕士以上</span><span v-show="spouseInformation.education ==1">本科</span><span v-show="spouseInformation.education ==2">大专</span><span v-show="spouseInformation.education ==3">中专及高中</span><span v-show="spouseInformation.education ==4">初中</span><span v-show="spouseInformation.education ==5">文盲</span></p>
        <!-- <p><i>民&nbsp;&nbsp;族：</i><span>{{spouseInformation.nation}}</span></p> -->
        <p><i>职&nbsp;&nbsp;业：</i><span v-show="spouseInformation.job ==0">无</span><span v-show="spouseInformation.job ==1">农、牧、渔</span><span v-show="spouseInformation.job ==2">干部、职员</span><span v-show="spouseInformation.job ==3">医院、科技</span><span v-show="spouseInformation.job ==4">工人</span><span v-show="spouseInformation.job ==5">个体</span><span v-show="spouseInformation.job ==6">家务</span></p>
        <div class="wire"></div>
        <p><i>吸&nbsp;&nbsp;烟：</i><span v-show="spouseInformation.smoke !== ''">每天<i>{{spouseInformation.smoke}}</i>支</span> <span v-show="spouseInformation.smoke == ''">无</span></p>
        <p><i>饮&nbsp;&nbsp;酒：</i><span v-show="spouseInformation.drink ==0">否</span><span v-show="spouseInformation.drink ==1">偶尔</span><span v-show="spouseInformation.drink ==2">经常</span></p>
        <h4><i>家族史：</i><span v-show="spouseInformation.patientHistory == ''">无</span><span v-show="spouseInformation.patientHistory !== ''">{{spouseInformation.patientHistory}}</span></h4>
        <div class="wire"></div>
        <h4><i>现住地址：</i><span>{{spouseInformation.newAddressProvince}}{{spouseInformation.newAddressCity}}{{spouseInformation.newAddressCounty}}</span></h4>
        <h4><i>详细地址：</i><span>{{spouseInformation.newAddressRemarks}}</span></h4>
      </el-tab-pane>
      <!--孕产信息 -->
      <el-tab-pane
        label="孕产信息"
        name="third"
        class='pregnancyNewsBox'
        @click="thirdClick()"
      >
        <div class="lookAtallBtnBox">
          <h2>孕产信息</h2>
          <div class="positionWire"></div>
        </div>
        <!-- 孕妇基本信息查看全部块 -->
        <p><i>出诊时间：</i><span v-html="pregnancyNewsInformation.firstCheckDate"></span></p>
        <p><i>末次月经：</i><span  v-html="pregnancyNewsInformation.lastMenstruation"></span></p>
        <p><i>预&nbsp;产&nbsp;期：</i><span  v-html="pregnancyNewsInformation.dueDate"></span></p>
        <p><i>孕&nbsp;周：</i><i v-html="pregnancyNewsInformation.newAgeOfMenarche"></i>+<i v-html="pregnancyNewsInformation.newAgeOfMenarcheDay"></i>周</p>
        <p><i>月&nbsp;经&nbsp;史：</i><span>初潮，<i v-html="pregnancyNewsInformation.menstrualHistoryAge"></i>岁<span class="jobBox mgl20">周期，<i v-html="pregnancyNewsInformation.menstrualHistoryDay"></i>天</span></span></p>
        <div class="wire"></div>
        <p><i>怀孕次数：</i><span v-html="PregnancyNum"></span>次</p>
        <div class="mgb24">
          <el-table
            :data="PregnancyInformation"
            border
            style="width: 100%"
            class="dynamicTable"
            stripe
          >
            <el-table-column
              prop="number"
              label="胎次"
              align='center'
              width="80px"
            >
            </el-table-column>
            <el-table-column
              prop="ageOfMenarche"
              label="孕周"
              align='center'
              width="102px"
            >
              <template slot-scope="scope">
                <div v-show="scope.row.pregnantType == 0">早产</div>
                <div v-show="scope.row.pregnantType == 1">足月妊娠</div>
                <div v-show="scope.row.pregnantType == 2">过期妊娠</div>
              </template>
            </el-table-column>
            <el-table-column
              prop="productionDate"
              label="年月日"
              align='center'
              width=""
            >
            </el-table-column>
            <el-table-column
              prop="productionOfAge"
              label="年龄"
              align='center'
            >
            </el-table-column>
            <el-table-column
              prop="productionAbortion"
              label="分娩方式"
              align='center'
            >
              <template slot-scope="scope">
                <div v-show="scope.row.productionAbortion == 0">自然</div>
                <div v-show="scope.row.productionAbortion == 1">人工</div>
              </template>
            </el-table-column>
            <el-table-column
              prop="babySex"
              label="性别"
              align='center'
            >
              <template slot-scope="scope">
                <div v-show="scope.row.babySex == 0">男</div>
                <div v-show="scope.row.babySex == 1">女</div>
              </template>
            </el-table-column>
            <el-table-column
              prop="babyHealthType"
              label="健否"
              align='center'
            >
              <template slot-scope="scope">
                <div v-show="scope.row.babyHealthType == 0">健康</div>
                <div v-show="scope.row.babyHealthType == 1">死亡</div>
              </template>
            </el-table-column>
            <el-table-column
              prop="remarks"
              label="备注"
              align='center'
            >
            </el-table-column>
          </el-table>
        </div>
        <div class="wire"></div>
        <p><i>孕期用药：</i><span v-show="pregnancyNewsInformation.parturitionFrontPharmacy ==0">无</span><span v-show="pregnancyNewsInformation.parturitionFrontPharmacy ==1">有</span></p>
        <p><i>尿&nbsp;酮&nbsp;体：</i><span v-show="pregnancyNewsInformation.ketosis ==0">无</span><span v-show="pregnancyNewsInformation.ketosis ==1">有</span></p>
        <p><i>早孕反应程度：</i><span v-show="pregnancyNewsInformation.morningSickness ==0">轻</span><span v-show="pregnancyNewsInformation.morningSickness ==1">中</span><span v-show="pregnancyNewsInformation.morningSickness ==2">重</span><span v-show="pregnancyNewsInformation.morningSickness ==3">无</span></p>
        <p><i>宠物接触：</i><span v-show="pregnancyNewsInformation.animalContact ==0">无</span><span v-show="pregnancyNewsInformation.animalContact ==1">有</span></p>
        <p><i>接触放射性：</i><span v-show="pregnancyNewsInformation.contactRadioactiveRays ==0">否</span><span v-show="pregnancyNewsInformation.contactRadioactiveRays ==1">是<span class="jobBox mgl20">{{pregnancyNewsInformation.contactRadioactiveRaysDate}}</span></span></p>
        <div class="wire"></div>
        <h4><i>接触毒物：</i><span v-show="pregnancyNewsInformation.contactToxic ==0">无</span><span v-show="pregnancyNewsInformation.contactToxic ==1">{{pregnancyNewsInformation.contactToxicName}}</span></h4>
        <h4><i>病毒感染：</i><span v-show="pregnancyNewsInformation.virusInfection ==0">无</span><span v-show="pregnancyNewsInformation.virusInfection ==1">{{pregnancyNewsInformation.virusInfectionOther}}</span></h4>
        <h4><i>家&nbsp;族&nbsp;史：</i><span v-show="pregnancyNewsInformation.familyHistory ==''">无</span><span v-show="pregnancyNewsInformation.familyHistory !==''">{{pregnancyNewsInformation.familyHistory}}</span></h4>
        <h4><i>现&nbsp;病&nbsp;史：</i><span v-show="pregnancyNewsInformation.nowHistory ==''">无</span><span v-show="pregnancyNewsInformation.nowHistory !==''">{{pregnancyNewsInformation.nowHistory}}</span></h4>
      </el-tab-pane>
      <el-tab-pane
        label="体格检查"
        name="fourth"
        class='healthCheckupBox'
      >
        <!-- 体格检查 -->
        <div class="lookAtallBtnBox">
          <h2>体格检查</h2>
          <div class="positionWire"></div>
        </div>
        <div
          class="subheadingBox"
          style="margin-top:0px;"
        >
          <h5>一般检查</h5>
          <div class="positionWire2"></div>
        </div>
        <!-- 孕妇基本信息查看全部块 -->
        <p><i>血&nbsp;压：</i><span>{{healthCheckup.baseBloodPressureHigh}}/{{healthCheckup.baseBloodPressureLow}}</span><i>mmHg</i></p>
        <p><i>身&nbsp;高：</i><span>{{healthCheckup.baseHeight}}cm</span></p>
        <p><i>体&nbsp;重：</i><span>{{healthCheckup.baseWeight}}kg</span></p>
        <p><i>心&nbsp;率：</i><span v-show="healthCheckup.baseHeartRate ==0">正常</span><span v-show="healthCheckup.baseHeartRate ==1">异常</span></p>
        <p><i>肺：</i><span v-show="healthCheckup.baseAbdomenLiver ==0">正常</span><span v-show="healthCheckup.baseAbdomenLiver ==1">异常</span></p>
        <p><i>肝：</i><span v-show="healthCheckup.baseAbdomenLiver ==0">正常</span><span v-show="healthCheckup.baseAbdomenLiver ==1">异常</span></p>
        <p><i>脾：</i><span v-show="healthCheckup.baseAbdomenSpleen ==0">正常</span><span v-show="healthCheckup.baseAbdomenSpleen ==1">异常</span></p>
        <p><i>脊&nbsp;椎：</i><span v-show="healthCheckup.baseSpinalLimbsDeformity ==0">正常</span><span v-show="healthCheckup.baseSpinalLimbsDeformity ==1">畸形</span></p>
        <p><i>乳&nbsp;房：</i><span v-show="healthCheckup.baseBreasts ==0">丰满</span><span v-show="healthCheckup.baseBreasts ==1">扁平</span></p>
        <p><i>乳&nbsp;头：</i><span v-show="healthCheckup.baseNipple ==0">凸</span><span v-show="healthCheckup.baseNipple ==1">凹</span></p>
        <p><i>四肢水肿：</i><span v-show="healthCheckup.baseSpinalLimbsEdema ==0">无</span><span v-show="healthCheckup.baseSpinalLimbsEdema ==1">轻</span><span v-show="healthCheckup.baseSpinalLimbsEdema ==2">中</span><span v-show="healthCheckup.baseNipple ==3">重</span></p>
        <div class="subheadingBox">
          <h5>妇科检查</h5>
          <div class="positionWire2"></div>
        </div>
        <p><i>外&nbsp;阴：</i><span v-show="healthCheckup.obstetricsVulva ==0">正常</span><span v-show="healthCheckup.obstetricsVulva ==1">异常</span></p>
        <p><i>阴&nbsp;道：</i><span v-show="healthCheckup.obstetricsVagina ==0">正常</span><span v-show="healthCheckup.obstetricsVagina ==1">异常</span></p>
        <p><i>宫&nbsp;颈：</i><span v-show="healthCheckup.obstetricsCervix ==0">正常</span><span v-show="healthCheckup.obstetricsCervix ==1">异常</span></p>
        <div class="subheadingBox">
          <h5>化验检查</h5>
          <div class="positionWire2"></div>
        </div>
        <p><i>尿蛋白：</i><span>{{healthCheckup.assayUrineProtein}}</span></p>
        <p><i>血红蛋白：</i><span>{{healthCheckup.assayHemoglobin}}</span></p>
        <p><i>血小板：</i><span>{{healthCheckup.assayBloodPlatelet}}</span></p>
        <p><i>血&nbsp;型：</i><span v-show="healthCheckup.assayBloodType ==0">0型</span><span v-show="healthCheckup.assayBloodType ==1">A型</span><span v-show="healthCheckup.assayBloodType ==2">B型</span><span v-show="healthCheckup.assayBloodType ==3">AB型</span><span v-show="healthCheckup.assayBloodType ==4">RH型</span></p>
        <div class="subheadingBox">
          <h5>产科检查</h5>
          <div class="positionWire2"></div>
        </div>
        <p><i>宫&nbsp;高：</i><span>{{healthCheckup.obstetricsHeight}}cm</span></p>
        <p><i>腹&nbsp;围：</i><span>{{healthCheckup.obstetricsAbdominalGirth}}cm</span></p>
        <p><i>先&nbsp;露：</i><span v-show="healthCheckup.obstetricsFirstDew ==0">未填写</span><span v-show="healthCheckup.obstetricsFirstDew ==1">先头露</span><span v-show="healthCheckup.obstetricsFirstDew ==2">臀先露</span></p>
        <p><i>胎方位：</i><span v-show="healthCheckup.obstetricsPlacental ==0">未填写</span><span v-show="healthCheckup.obstetricsPlacental ==1">枕左前位</span><span v-show="healthCheckup.obstetricsPlacental ==2">枕右横位</span><span v-show="healthCheckup.obstetricsPlacental ==3">枕右前位</span></p>
        <p><i>胎心率：</i><span>{{healthCheckup.obstetricsFetalHeart}}次/分</span></p>
        <p><i>盆骨出口横径：</i><span>{{healthCheckup.obstetricsTransversePelvicDiameter}}cm</span></p>
        <div class="subheadingBox mgb10">
          <h5>诊断处置</h5>
          <div class="positionWire2"></div>
        </div>
        <h4><i>诊断：</i><span v-show="healthCheckup.primaryDiagnosis == ''">无 </span><span v-show="healthCheckup.primaryDiagnosis !== ''">{{healthCheckup.primaryDiagnosis}}</span></h4>
        <h4 style="margin-bottom:0px;"><i>处置：</i><span v-show="healthCheckup.disposal == ''">无 </span><span v-show="healthCheckup.disposal !== ''">{{healthCheckup.disposal}}</span></h4>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import $ from "jquery";
import { AreaCascader } from "vue-area-linkage";
import { pca, pcaa } from "area-data";
export default {
  data() {
    return {
      activeName: "first", //first 基本信息，second 配偶信息，third孕产信息，fourth体格检查
      checkId: "", // 基本信息ID
      superId: "", //配偶ID
      id: "", //id
      parturitionDetailId: "", //孕产id
      healthCheckId: "", //体格检查id
      essentialInformation: {}, //基本信息数据
      spouseInformation: {}, //配偶信息数据
      pregnancyNewsInformation: {}, //孕产信息数据
      PregnancyInformation: [], //怀孕次数数据
      PregnancyNum: '', //怀孕次数数据
      healthCheckup: {} //体格检查数据
    };
  },
  activated() {
    let tableDataParticulars = eval(
      "(" + localStorage.getItem("tableDataParticulars") + ")"
    );
    this.checkId = tableDataParticulars.checkId; //基本信息ID
    this.superId = tableDataParticulars.husbandsId; //配偶id
    this.id = tableDataParticulars.id; //孕产
    this.parturitionDetailId = tableDataParticulars.parturitionDetailId; //孕产
    this.healthCheckId = tableDataParticulars.healthCheckId; //体格检查
    //基本信息查询
    //  直接调接口
    this.essentialInquire();
    // this.patientHusbandsFindForFiling();
    // this.patientParturitionDetailFindForFiling();
    // this.patientHealthCheckFindById();
  },
  methods: {
    // 点击teb切换在调接口
    handleClick(tab) {
        var _val = tab.index;
        if (_val == 0) {
          this.essentialInquire();
        } else if (_val == 1) {
          this.patientHusbandsFindForFiling();
        } else if (_val == 2) {
          this.patientParturitionDetailFindForFiling();
        } else {
            this.patientHealthCheckFindById();
        }
    },
    //基本信息查询
    essentialInquire() {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .patientCheckControllerFindForFiling({
          token: token1,
          id: this.checkId
        })
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.essentialInformation = res;
          } else if (res.status === "20209") {
          }
        })
        .catch(error => {
          this.$message.error('基本信息查询错误，请稍后重试');
        });
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
          // console.log(res);
          if (res.status === "20200") {
            this.spouseInformation = res;
          } else if (res.status === "20209") {
          }
        })
        .catch(error => {
          this.$message.error('配偶信息查询错误，请稍后重试');
        });
    },
    // 孕产信息查询
    patientParturitionDetailFindForFiling() {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .patientParturitionDetailFindForFiling({
          token: token1,
          id: this.parturitionDetailId,
          patientCenterId: this.id
        })
        .then(res => {
          // console.log(res);
          if (res.status === "20200") {
            this.pregnancyNewsInformation = res;
            this.PregnancyInformation =
              res.patientParturitionDetailHistoryBeanList;
              this.PregnancyNum =  res.patientParturitionDetailHistoryBeanList.length;
          } else if (res.status === "20209") {
          }
        })
        .catch(error => {
          this.$message.error('孕产信息查询错误，请稍后重试');
        });
    },
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
            // console.log(this.healthCheckup);
          } else if (res.status === "20209") {
          }
        })
        .catch(error => {
         this.$message.error('体格检查查询错误，请稍后重试');
        });
    }
  }
};
</script>

<style lang="less" scoped>
.mgt26 {
  margin-top: 26px;
}
.mgb10 {
  margin-bottom: 10px;
}
.mgb24 {
  margin-bottom: 24px;
}

.pregnantNewsBox,
.spouseNewsBox,
.pregnancyNewsBox,
.healthCheckupBox {
  padding: 24px;
  width: 100%;
  background-color: #fff;
  p {
    width: 33%;
    padding: 10px 0px;
    display: inline-block;
    span {
      color: #333333;
      margin-left: 12px;
    }
  }
  h4 {
    margin-bottom: 24px;
  }
  .mgl20 {
    margin-left: 20px;
  }
  i {
    font-style: normal;
    color: #666666;
  }

  .wire {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ccc;
    margin: 10px 0;
  }
  //  查看全部块
  .lookAtallBtnBox {
    width: 100%;
    position: relative;
    height: 40px;
    h2 {
      background-color: #fff;
      display: block;
      z-index: 101;
      position: absolute;
      top: 0px;
      left: 0px;
      font-size: 16px;
      padding-right: 14px;
      font-weight: 500;
    }
    .positionWire {
      position: absolute;
      top: 10px;
      right: 0px;
      width: 90%;
      height: 1px;
      background-color: #ccc;
    }

    .basicLookAtallBtn {
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
  .jobBox {
    position: relative;
    &:after {
      content: " ";
      position: absolute;
      height: 12px;
      width: 1px;
      background-color: #ccc;
      top: 4px;
      left: -10px;
    }
  }
}
.healthCheckupBox {
  .subheadingBox {
    width: 100%;
    position: relative;
    height: 26px;
    margin-top: 10px;
    h5 {
      background-color: #fff;
      display: block;
      z-index: 101;
      position: absolute;
      top: 0px;
      left: 0px;
      font-size: 14px;
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
}
</style>
<style>
.el-select-dropdown__item.selected {
  color: #68b6e7;
}
/* // 孕妇基本信息组件样式修改 */
.pregnantNewsBox .el-input__inner {
  width: 260px;
  border-radius: 8px;
  border-color: #ccc;
  background-color: #f6f6f6;
}
/* // 配偶一般信息组件样式修改 */
.spouseNewsBox .el-input__inner {
  width: 260px;
  border-radius: 8px;
  border-color: #ccc;
  background-color: #f6f6f6;
}
/* // 孕产信息组件样式修改 */
.pregnancyNewsBox .el-input__inner {
  width: 260px;
  border-radius: 8px;
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
