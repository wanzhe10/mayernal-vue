<template>
  <div class="newfileBox">
    <el-tabs v-model="activeName" class="aaaa">
      <el-tab-pane label="孕妇基本信息" name="first" class='pregnantNewsBox'>
        <!-- 孕妇基本信息 -->
        <div class="lookAtallBtnBox">
          <h2>孕妇基本信息</h2>
          <div class="positionWire"></div>
          <!-- <div class="basicLookAtallBtn conscientiousAll" @click="toggle1()">
                        <span>查看全部</span>
                        <i class="el-icon-arrow-down" v-show="downIcon"></i>
                        <i class="el-icon-arrow-up" v-show="!downIcon"></i>
                    </div> -->
        </div>
        <!-- 孕妇基本信息查看全部块 -->
        <!-- <el-collapse-transition> -->
        <p><i>孕妇姓名：</i><span>王越越</span></p>
        <p><i>就诊卡号：</i><span>20181022003</span></p>
        <p><i>手&nbsp;&nbsp;机&nbsp;&nbsp;号：</i><span>15093357355</span></p>
        <p><i>证件类型：</i><span>居民身份证</span></p>
        <p><i>身份证号：</i><span>130110201812102018</span></p>
        <p><i>出生年月：</i><span>2018-12-10 27岁 女</span></p>
        <p><i>结婚年龄：</i><span>23岁</span></p>
        <p><i>孕前体重：</i><span>70kg</span></p>
        <div class="wire"></div>
        <p><i>结婚状况：</i><span>初婚</span></p>
        <p><i>婚&nbsp;&nbsp;检：</i><span>是</span></p>
        <p><i>近半年避孕方法：</i><span>未避孕</span></p>
        <p><i>文化程度：</i><span>本科</span></p>
        <p><i>民&nbsp;&nbsp;族：</i><span>汉族</span></p>
        <p><i>职&nbsp;&nbsp;业：</i><span>医疗、科技</span><span class="jobBox mgl20">北京安智杰科技有限</span></p>
        <div class="wire"></div>
        <h4 class="mgt26"><i>户口所在地：</i><span>河北省陕西省山西市</span></h4>
        <h4><i>详细地址：</i><span>明发雅苑10号楼，1单元，158室 </span></h4>
        <h4><i>现住地址：</i><span>君月国际22号楼，6单元，1200室</span></h4>

        <!-- </el-collapse-transition> -->
      </el-tab-pane>
      <el-tab-pane label="配偶一般信息" name="second" class='spouseNewsBox'>
        <!-- 配偶一般信息 -->
        <div class="lookAtallBtnBox">
          <h2>配偶一般信息</h2>
          <div class="positionWire"></div>
          <!-- <div class="basicLookAtallBtn conscientiousAll" @click="toggle1()">
                        <span>查看全部</span>
                        <i class="el-icon-arrow-down" v-show="downIcon"></i>
                        <i class="el-icon-arrow-up" v-show="!downIcon"></i>
                    </div> -->
        </div>
        <!-- 孕妇基本信息查看全部块 -->
        <!-- <el-collapse-transition> -->
        <p><i>配偶姓名：</i><span>王越越</span></p>
        <p><i>手&nbsp;&nbsp;机&nbsp;&nbsp;号：</i><span>15093357355</span></p>

        <p><i>结婚年龄：</i><span>23岁</span></p>
        <p><i>证件类型：</i><span>居民身份证</span></p>
        <p><i>身份证号：</i><span>130110201812102018</span></p>
        <p><i>配偶年龄：</i><span> 7岁</span></p>
        <div class="wire"></div>
        <p><i>结婚状况：</i><span>初婚</span></p>
        <p><i>婚&nbsp;&nbsp;检：</i><span>是</span></p>
        <p><i>将康状态：</i><span>健康</span></p>
        <p><i>文化程度：</i><span>本科</span></p>
        <p><i>民&nbsp;&nbsp;族：</i><span>汉族</span></p>
        <p><i>职&nbsp;&nbsp;业：</i><span>医疗、科技</span></p>
        <div class="wire"></div>
        <p><i>吸&nbsp;&nbsp;烟：</i><span>每天<i>10</i>支</span></p>
        <p><i>饮&nbsp;&nbsp;酒：</i><span>经常</span></p>
        <h4><i>家族史：</i><span>高血压、糖尿病、遗传性疾病</span></h4>
        <div class="wire"></div>
        <h4><i>详细地址：</i><span>明发雅苑10号楼，1单元，158室 </span></h4>
        <h4><i>现住地址：</i><span>君月国际22号楼，6单元，1200室</span></h4>

        <!-- </el-collapse-transition> -->
      </el-tab-pane>
      <!--孕产信息 -->
      <el-tab-pane label="孕产信息" name="third" class='pregnancyNewsBox'>
        <div class="lookAtallBtnBox">
          <h2>孕产信息</h2>
          <div class="positionWire"></div>
          <!-- <div class="basicLookAtallBtn conscientiousAll" @click="toggle1()">
                        <span>查看全部</span>
                        <i class="el-icon-arrow-down" v-show="downIcon"></i>
                        <i class="el-icon-arrow-up" v-show="!downIcon"></i>
                    </div> -->
        </div>
        <!-- 孕妇基本信息查看全部块 -->
        <!-- <el-collapse-transition> -->
        <p><i>出诊时间：</i><span>2018-12-10</span></p>
        <p><i>末次月经：</i><span>2018-10-09</span></p>
        <p><i>预&nbsp;产&nbsp;期：</i><span>2019-12-10</span></p>
        <p><i>孕&nbsp;周：</i><span>13+4周</span></p>
        <p><i>月&nbsp;经&nbsp;史：</i><span>初潮，<i>32</i>岁<span class="jobBox mgl20">周期，<i>12</i>天</span></span></p>
        <div class="wire"></div>
        <p><i>怀孕次数：</i><span>2次</span></p>
        <div class="mgb24">
               <el-table :data="PregnancyInformation" border style="width: 100%" class="dynamicTable"  stripe>
          <el-table-column prop="number" label="胎次" align='center' width="80px">
          </el-table-column>
          <el-table-column prop="ageOfMenarche" label="孕周" align='center' width="102px">
          </el-table-column>
          <el-table-column prop="productionDate" label="年月日" align='center' width="">
          </el-table-column>
          <el-table-column prop="productionOfAge" label="年龄" align='center'>
          </el-table-column>
          <el-table-column prop="productionAbortion" label="分娩方式" align='center'>
          </el-table-column>
          <el-table-column prop="babySex" label="性别" align='center'>
          </el-table-column>
          <el-table-column prop="babyHealthType" label="健否" align='center'>
          </el-table-column>
          <el-table-column prop="remarks" label="备注" align='center'>
          </el-table-column>
        </el-table>
        </div>
   
          <div class="wire"></div>
        <p><i>孕期用药：</i><span>2018-12-10</span></p>
        <p><i>尿&nbsp;酮&nbsp;体：</i><span>2018-12-10</span></p>
        <p><i>早孕反应程度：</i><span>轻</span></p>
        <p><i>宠物接触：</i><span>无</span></p>
        <p><i>接触放射性：</i><span>是</span><span class="jobBox mgl20">2018-12-12</span></p>
        <div class="wire"></div>
        <h4><i>接触毒物：</i><span>无 </span></h4>
        <h4><i>病毒感染：</i><span>无</span></h4>
        <h4><i>家&nbsp;族&nbsp;史：</i><span>是</span><span class="jobBox mgl20">糖尿病、高血压、慢性传染病、白血病</span></h4>
        <h4><i>现&nbsp;病&nbsp;史：</i><span>无</span></h4>

        <!-- </el-collapse-transition> -->
      </el-tab-pane>
      <el-tab-pane label="体格检查" name="fourth" class='healthCheckupBox'>
        <!-- 体格检查 -->
          <div class="lookAtallBtnBox">
          <h2>体格检查</h2>
          <div class="positionWire"></div>
          <!-- <div class="basicLookAtallBtn conscientiousAll" @click="toggle1()">
                        <span>查看全部</span>
                        <i class="el-icon-arrow-down" v-show="downIcon"></i>
                        <i class="el-icon-arrow-up" v-show="!downIcon"></i>
                    </div> -->
        </div>
        <div class="subheadingBox" style="margin-top:0px;">
          <h5>一般检查</h5>
           <div class="positionWire2"></div>
        </div>
        <!-- 孕妇基本信息查看全部块 -->
        <!-- <el-collapse-transition> -->
        <p><i>血&nbsp;压：</i><span>100/80</span><i>mmHg</i></p>
        <p><i>身&nbsp;高：</i><span>177cm</span></p>
        <p><i>体&nbsp;重：</i><span>65kg</span></p>
        <p><i>心&nbsp;率：</i><span>正常</span></p>
        <p><i>肺：</i><span>正常</span></p>
        <p><i>肝：</i><span> 正常</span></p>
        <p><i>脾：</i><span>正常</span></p>
        <p><i>脊&nbsp;椎：</i><span>正常</span></p>
        <p><i>乳&nbsp;房：</i><span>正常</span></p>
        <p><i>乳&nbsp;头：</i><span>凸</span></p>
        <p><i>四肢水肿：</i><span>无</span></p>
        <div class="subheadingBox">
          <h5>妇科检查</h5>
           <div class="positionWire2"></div>
        </div>
        <p><i>外&nbsp;阴：</i><span>正常</span></p>
        <p><i>阴&nbsp;道：</i><span>正常</span></p>
        <p><i>宫&nbsp;颈：</i><span>正常</span></p>
          <div class="subheadingBox">
          <h5>化验检查</h5>
           <div class="positionWire2"></div>
        </div>
        <p><i>尿蛋白：</i><span>1</span></p>
        <p><i>血红蛋白：</i><span>1</span></p>
        <p><i>血小板：</i><span>1</span></p>
        <p><i>血&nbsp;型：</i><span>0型</span></p>
          <div class="subheadingBox">
          <h5>产科检查</h5>
           <div class="positionWire2"></div>
        </div>
        <p><i>宫&nbsp;高：</i><span>12cm</span></p>
        <p><i>腹&nbsp;围：</i><span>12cm</span></p>
        <p><i>先&nbsp;露：</i><span>先露头</span></p>
        <p><i>胎方位：</i><span>12cm</span></p>
        <p><i>胎心率：</i><span>120次/分</span></p>
        <p><i>盆骨出口横径：</i><span>12cm</span></p>
        <div class="subheadingBox mgb10">
          <h5>诊断处置</h5>
           <div class="positionWire2"></div>
        </div>
        <h4><i>诊断：</i><span>无 </span></h4>
        <h4 style="margin-bottom:0px;"><i>处置：</i><span>此处所有填写信息字号为：14px,字和字的上下间距是20px,各项标题和数据之间间距12px,数据颜色为：#3333333</span></h4>

        <!-- </el-collapse-transition> -->
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
      activeName: "first",
      downIcon: true,
      isShow1: true,
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
        },
        
      ]
    };
  },
  methods: {
    //复检记录- 自觉不适点击显示隐藏
    toggle1: function() {
      this.isShow1 = !this.isShow1;
      this.downIcon = !this.downIcon;
    }
  }
};
</script>

<style lang="less" scoped>

.mgt26 {
  margin-top: 26px;
}
.mgb10{
  margin-bottom:10px;
}
.mgb24{
  margin-bottom:24px;
}


.pregnantNewsBox,
.spouseNewsBox,
.pregnancyNewsBox,.healthCheckupBox{
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
      top: 2px;
      left: -10px;
    }
  }
}
.healthCheckupBox{
  .subheadingBox{
     width: 100%;
    position: relative;
    height:26px;
    margin-top:10px;
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
      border-bottom:1px dashed #ccc;
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
