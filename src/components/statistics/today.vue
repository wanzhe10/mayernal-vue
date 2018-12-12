<template>
  <div class="todayBox">
    <h2 class="todayBoxTittle">今日全部复检统计列表</h2>
    <div class="todayBox_top clearfix">
      <ul class="clearfix">
        <li>周一</li>
        <li>周二</li>
        <li>周三</li>
        <li>周四</li>
        <li>周五</li>
        <li>周六</li>
        <li>周日</li>
      </ul>
      <div class="tuoyuan"><i class="el-icon-refresh"></i>刷新列表</div>
    </div>
    <div class="todayBox_bottom">
      <div class="todayBoxTeb clearfix">
        <ul class="clearfix fl">
          <!-- <li @click="toggle()"></li> -->
          <li
            @click='toggle1();nonArrival1()'
            class='active'
          >今日总预约复检人数<span v-model='numToggle1'>{{numToggle1}}</span>人</li>
          <li @click='toggle2'>今日当前挂号人数10人</li>
          <li @click='toggle3();nonArrival3()'>今日未到复检人数<span v-model='numToggle3'>{{numToggle3}}</span>人</li>
        </ul>
        <div class="fr mgr38">
          <el-button round>打印</el-button>
          <el-button round>导出</el-button>
        </div>
      </div>
      <div class="administrativeBoxContant">
        <img
          src="../../assets/noDataIcon.png"
          alt="暂无数据"
          class="noDataIcon"
          v-show="imgShow"
        >
        <!-- 今日总预约复检人数 -->
        <div
          class="TableDataBox"
          v-show="tableShow"
        >
          <el-table
            :data="officeTableData"
            style="width: 100%"
          >
            <el-table-column
              prop="makeAppointmentTime"
              label="复检时间"
              width="130px"
            ></el-table-column>
            <el-table-column
              prop="checkName"
              label="姓名"
              width="140px"
            ></el-table-column>
            <el-table-column
              prop=''
              label="孕周"
              width="125px"
            >
              <template slot-scope="scope">
                <div v-html="'孕'+scope.row.newAgeOfMenarche+'-'+scope.row.newAgeOfMenarcheDay+'天'"></div>
              </template>
            </el-table-column>
            <el-table-column
              prop="parturitionDetailDueDate"
              label="预产期"
              width="156px"
            ></el-table-column>
            <el-table-column
              prop="checkAge"
              label="年龄"
              width="94px"
            ></el-table-column>
            <el-table-column
              prop="highRiskClass"
              label="高危评估"
              width="126px"
            >
              <template slot-scope="scope">
                <i
                  class="clolrLump level0"
                  v-show=" scope.row.highRiskClass ==0"
                ></i>
                <i
                  class="clolrLump level1"
                  v-show=" scope.row.highRiskClass ==1"
                ></i>
                <i
                  class="clolrLump level2"
                  v-show=" scope.row.highRiskClass ==2"
                ></i>
                <i
                  class="clolrLump level3"
                  v-show=" scope.row.highRiskClass ==3"
                ></i>
                <i
                  class="clolrLump level4"
                  v-show=" scope.row.highRiskClass ==4"
                ></i>
                <span
                  style="margin-left: 10px"
                  v-show=" scope.row.highRiskClass ==0"
                >绿色</span>
                <span
                  style="margin-left: 10px"
                  v-show=" scope.row.highRiskClass ==1"
                >黄色</span>
                <span
                  style="margin-left: 10px"
                  v-show=" scope.row.highRiskClass ==2"
                >橙色</span>
                <span
                  style="margin-left: 10px"
                  v-show=" scope.row.highRiskClass ==3"
                >红色</span>
                <span
                  style="margin-left: 10px"
                  v-show=" scope.row.highRiskClass ==4"
                >紫色</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="recheckOvertime"
              label="超时"
              width="86px"
            >
              <template slot-scope="scope">
                <div>- -</div>
              </template>
            </el-table-column>
            <el-table-column
              prop=""
              label="操作"
              width="70px"
            >
              <template slot-scope="scope">
                <el-button
                  type="text"
                  size="small"
                  style="text-align: center;"
                >查看</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <div
            class="administrativeBoxBlock"
            style="margin-top:30px; text-align:center;"
          >
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPageOfice"
              :page-sizes="[10, 20, 30, 40]"
              :page-size.sync="cur_page"
              layout="sizes, prev, pager, next"
              background
              :page-count='pagerCount'
            >
            </el-pagination>
          </div>
        </div>
        <!-- 今日当前挂号人数 -->

        <!-- 今日未到复检人数 -->
        <div
          class="TableDataBox"
          v-show='tableShow3'
        >
          <el-table
            :data="officeTableData3"
            style="width: 100%"
          >
            <el-table-column
              prop="makeAppointmentTime"
              label="复检时间2"
              width="130px"
            ></el-table-column>
            <el-table-column
              prop="checkName"
              label="姓名2"
              width="140px"
            ></el-table-column>
            <el-table-column
              prop=''
              label="孕周2"
              width="125px"
            >
              <template slot-scope="scope">
                <div v-html="'孕'+scope.row.newAgeOfMenarche+'-'+scope.row.newAgeOfMenarcheDay+'天'"></div>
              </template>
            </el-table-column>
            <el-table-column
              prop="parturitionDetailDueDate"
              label="预产期"
              width="156px"
            ></el-table-column>
            <el-table-column
              prop="checkAge"
              label="年龄"
              width="94px"
            ></el-table-column>
            <el-table-column
              prop="highRiskClass"
              label="高危评估"
              width="126px"
            >
              <template slot-scope="scope">
                <i
                  class="clolrLump level0"
                  v-show=" scope.row.highRiskClass ==0"
                ></i>
                <i
                  class="clolrLump level1"
                  v-show=" scope.row.highRiskClass ==1"
                ></i>
                <i
                  class="clolrLump level2"
                  v-show=" scope.row.highRiskClass ==2"
                ></i>
                <i
                  class="clolrLump level3"
                  v-show=" scope.row.highRiskClass ==3"
                ></i>
                <i
                  class="clolrLump level4"
                  v-show=" scope.row.highRiskClass ==4"
                ></i>
                <span
                  style="margin-left: 10px"
                  v-show=" scope.row.highRiskClass ==0"
                >绿色</span>
                <span
                  style="margin-left: 10px"
                  v-show=" scope.row.highRiskClass ==1"
                >黄色</span>
                <span
                  style="margin-left: 10px"
                  v-show=" scope.row.highRiskClass ==2"
                >橙色</span>
                <span
                  style="margin-left: 10px"
                  v-show=" scope.row.highRiskClass ==3"
                >红色</span>
                <span
                  style="margin-left: 10px"
                  v-show=" scope.row.highRiskClass ==4"
                >紫色</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="recheckOvertime"
              label="超时"
              width="86px"
            >
              <template slot-scope="scope">
                <div>- -</div>
              </template>
            </el-table-column>
            <el-table-column
              prop=""
              label="操作"
              width="70px"
            >
              <template slot-scope="scope">
                <el-button
                  type="text"
                  size="small"
                  style="text-align: center;"
                >查看</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <div
            class="administrativeBoxBlock"
            style="margin-top:30px; text-align:center;"
          >
            <el-pagination
              @size-change="handleSizeChange3"
              @current-change="handleCurrentChange3"
              :current-page.sync="currentPageOfice3"
              :page-sizes="[10, 20, 30, 40]"
              :page-size.sync="cur_page3"
              layout="sizes, prev, pager, next"
              background
              :page-count='pagerCount3'
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
 <script>
import $ from "jquery";

export default {
  data() {
    return {
      activeName: "first",
      officeTableData: [ ],//今日预约数据
      officeTableData3: [],//今日未到复检人数
      todayBoxTebLi: [
        { name: "今日总预约复检人数", number: "20人" },
        { name: "今当前挂号人数", number: "10人" },
        { name: "今日未到复检人数", number: "30人" }
      ],
      current: 0,
      currentPageOfice: 1, //分页
      cur_page: 10, //分页
      pagerCount: 3, //分页
      tableShow: true, //今日预约表格显示隐藏
      imgShow: false, //图片显示隐藏
      numToggle1: 1, //今日总预约人数

      tableShow3: false, // 今日未到表格显示隐藏
      numToggle3: 1, //今日未到预约人数
      currentPageOfice3: 1, //分页
      cur_page3: 10, //分页
      pagerCount3: 3 //分页
    };
  },
  mounted() {
    this.toggle1();
    this.toggle3();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSizeChange(val) {
      let token1 = window.localStorage.getItem("token");
      this.currentPageOfice = 1;
      console.log(`每页 ${val} 条`);
      this.currentdate(startDateStr, endDateStr);
      var day = new Date();
      // 开始时间 /今天 startDateStr
      var startDateStr = day.format("yyyy-MM-dd");
      // console.log(startDateStr);
      // 结束时间 /明天 endDateStr
      day.setDate(day.getDate() + 1);
      var endDateStr = day.format("yyyy-MM-dd");
      // console.log(endDateStr);
      // this.numInquire(token,startDateStr,endDateStr,1,`${val}`);
      this.numInquire(token1, "2018-01-01", "2018-10-01", 1, `${val}`); //测试
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentdate(startDateStr, endDateStr);
      var day = new Date();
      // 开始时间 /今天 startDateStr
      var startDateStr = day.format("yyyy-MM-dd");
      // console.log(startDateStr);
      // 结束时间 /明天 endDateStr
      day.setDate(day.getDate() + 1);
      var endDateStr = day.format("yyyy-MM-dd");
      // console.log(endDateStr);
      let token1 = window.localStorage.getItem("token");
      this.currentPageOfice = val;
      //  this.numInquire(token,startDateStr,endDateStr,`${val}`,this.cur_page);
      this.numInquire(
        token1,
        "2018-01-01",
        "2018-10-01",
        `${val}`,
        this.cur_page
      );
    },
    handleSizeChange3(val) {
      let token1 = window.localStorage.getItem("token");
      this.currentPageOfice3 = 1;
      console.log(`每页 ${val} 条`);
      this.currentdate(startDateStr, endDateStr);
      var day = new Date();
      // 开始时间 /今天 startDateStr
      var startDateStr = day.format("yyyy-MM-dd");
      // console.log(startDateStr);
      // 结束时间 /明天 endDateStr
      day.setDate(day.getDate() + 1);
      var endDateStr = day.format("yyyy-MM-dd");
      // console.log(endDateStr);
      // this.numInquire(token,startDateStr,endDateStr,1,`${val}`);
      this.numInquire3(token1, "2018-01-01", "2018-10-01", 1, `${val}`); //测试
    },
    handleCurrentChange3(val) {
      console.log(`当前页: ${val}`);
      this.currentdate(startDateStr, endDateStr);
      var day = new Date();
      // 开始时间 /今天 startDateStr
      var startDateStr = day.format("yyyy-MM-dd");
      // console.log(startDateStr);
      // 结束时间 /明天 endDateStr
      day.setDate(day.getDate() + 1);
      var endDateStr = day.format("yyyy-MM-dd");
      // console.log(endDateStr);
      let token1 = window.localStorage.getItem("token");
      this.currentPageOfice3 = val;
      //  this.numInquire(token,startDateStr,endDateStr,`${val}`,this.cur_page);
      this.numInquire3(
        token1,
        "2018-01-01",
        "2018-10-01",
        `${val}`,
        this.cur_page3
      );
    },
    toggle1() {
      this.currentdate(startDateStr, endDateStr);
      var day = new Date();
      // 开始时间 /今天 startDateStr
      var startDateStr = day.format("yyyy-MM-dd");
      // console.log(startDateStr);
      // 结束时间 /明天 endDateStr
      day.setDate(day.getDate() + 1);
      var endDateStr = day.format("yyyy-MM-dd");
      // console.log(endDateStr);
      var token = localStorage.getItem("token");
      // this.numInquire(token,startDateStr,endDateStr,1,10);
      this.numInquire(token, "2018-01-01", "2018-10-01", 1, 10); //测试
    },
    nonArrival1(e) {
      console.log(e.target);
      if (this.officeTableData1 !== null) {
        this.tableShow1 = true;
        this.tableShow3 = false;
      } else {
        this.tableShow1 = false;
        this.imgShow = true; //图片显示隐藏
      }
    },
    toggle2() {
      alert(2);
    },
    // 今日未到复检人数按钮
    toggle3() {
      this.currentdate(startDateStr, endDateStr);
      var day = new Date();
      // 开始时间 /今天 startDateStr
      var startDateStr = day.format("yyyy-MM-dd");
      // console.log(startDateStr);
      // 结束时间 /明天 endDateStr
      day.setDate(day.getDate() + 1);
      var endDateStr = day.format("yyyy-MM-dd");
      // console.log(endDateStr);
      var token = localStorage.getItem("token");
      // this.numInquire(token,startDateStr,endDateStr,1,10);
      this.numInquire3(token, "2018-01-01", "2018-10-01", 1, 10); //测试
    },
       nonArrival1() {
      if (this.officeTableData !== null) {
        this.tableShow3 = false;
        this.tableShow = true;
      } else {
        this.tableShow = false;
        this.tableShow3 = false;
        this.imgShow = true; //图片显示隐藏
      }
    },
    nonArrival3() {
      if (this.officeTableData3 !== null) {
        this.tableShow3 = true;
        this.tableShow = false;
      } else {
        this.tableShow = false;
        this.tableShow = false;
        this.imgShow = true; //图片显示隐藏
      }
    },

    //今日总预约查询
    numInquire(token, startDateStr, endDateStr, pageNum, pageCell) {
      this.$api
        .countEntityWithStartDateAndEndDate({
          token: token,
          startDateStr: startDateStr,
          endDateStr: endDateStr,
          pageNum: pageNum,
          pageCell: pageCell
        })
        .then(res => {
          if (res.status === "20200") {
            console.log(res);
            this.officeTableData = res.pcPatientCenterBeans;
            this.pagerCount = res.pages;
            this.tableShow = true;
            this.imgShow = false;
            this.numToggle1 = res.total;
          } else if (res.status === "20209") {
            this.tableShow = false;
            this.imgShow = true;
          }
          {
            // this.$Message.info(res.desc);
          }
        })
        .catch(error => {
          // this.$Message.info(error);
        });
    },
    //今日未到查询
    numInquire3(token, startDateStr, endDateStr, pageNum, pageCell) {
      this.$api
        .countEntityWithStartDateAndEndDate({
          token: token,
          startDateStr: startDateStr,
          endDateStr: endDateStr,
          pageNum: pageNum,
          pageCell: pageCell
        })
        .then(res => {
          if (res.status === "20200") {
            console.log(res);
            this.officeTableData3 = res.pcPatientCenterBeans;
            this.pagerCount3 = res.pages;
            this.numToggle3 = res.total;
          } else if (res.status === "20209") {
            this.tableShow3 = false;
          }
          {
            // this.$Message.info(res.desc);
          }
        })
        .catch(error => {
          // this.$Message.info(error);
        });
    },
    currentdate(startDateStr, endDateStr) {
      Date.prototype.format = function(fmt) {
        var o = {
          "M+": this.getMonth() + 1, //月份
          "d+": this.getDate(), //日
          "h+": this.getHours(), //小时
          "m+": this.getMinutes(), //分
          "s+": this.getSeconds(), //秒
          "q+": Math.floor((this.getMonth() + 3) / 3), //季度
          S: this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            (this.getFullYear() + "").substr(4 - RegExp.$1.length)
          );
        for (var k in o)
          if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length == 1
                ? o[k]
                : ("00" + o[k]).substr(("" + o[k]).length)
            );
        return fmt;
      };
      var day = new Date();
      // 开始时间 /今天 startDateStr
      var startDateStr = day.format("yyyy-MM-dd");
      // console.log(startDateStr);
      // 结束时间 /明天 endDateStr
      day.setDate(day.getDate() + 1);
      var endDateStr = day.format("yyyy-MM-dd");
      // console.log(endDateStr);
      return startDateStr;
      return endDateStr;
    }
  }
};
</script>


<style lang="less" scoped>
@level0: green;
@level1: yellow;
@level2: orange;
@level3: red;
@level4: purple;
.fl {
  float: left;
}
.fr {
  float: right;
}
.mgr38 {
  margin-right: 38px;
}
.todayBox {
  min-height: 600px;
  .todayBoxTittle {
    display: block;
    width: 100%;
    background-color: #fbfbfb;
    padding: 24px 24px 24px 24px;
    font-size: 18px;
    color: #333333;
  }
  .todayBox_top {
    width: 100%;
    height: 70px;
    background-color: #fff;
    ul {
      float: left;
      li {
        float: left;
        height: 70px;
        line-height: 70px;
        padding: 0 10px 0 24px;
        cursor: pointer;
        -moz-user-select: none; /*火狐*/
        -webkit-user-select: none; /*webkit浏览器*/
        -ms-user-select: none; /*IE10*/
        -khtml-user-select: none; /*早期浏览器*/
        user-select: none;
      }
    }
    .tuoyuan {
      float: right;
      padding: 0 10px;
      width: 96px;
      border-radius: 50px;
      height: 32px;
      line-height: 32px;
      background-color: #68b6e7;
      color: #fff;
      margin-right: 36px;
      margin-top: 16px;
    }
  }
  .todayBox_bottom {
    margin-top: 6px;
    width: 100%;
    background-color: #fff;
    .todayBoxTeb {
      width: 100%;
      background-color: #fff;
      border-bottom: 1px solid #ccc;
      height: 60px;
      line-height: 60px;
      ul {
        float: left;
        li {
          float: left;
          height: 60px;
          line-height: 60px;
          padding: 0 10px 0 24px;
          cursor: pointer;
          -moz-user-select: none; /*火狐*/
          -webkit-user-select: none; /*webkit浏览器*/
          -ms-user-select: none; /*IE10*/
          -khtml-user-select: none; /*早期浏览器*/
          user-select: none;
          position: relative;
        }
        li:nth-child(1) {
          margin-left: 24px;
          padding-left: 0px;
        }
        .active {
          border-bottom: 2px solid #68b6e7;
        }
      }
    }
    .clolrLump {
      width: 10px;
      height: 10px;
      background-color: red;
      border-radius: 59%;
      display: inline-block;
    }
    .level0 {
      background: @level0;
    }

    .level1 {
      background: @level1;
      color: #999 !important;
    }

    .level2 {
      background: @level2;
    }

    .level3 {
      background: @level3;
    }

    .level4 {
      background: @level4;
    }
  }
  .administrativeBoxContant {
    min-height: 400px;
    position: relative;
    padding: 0 24px;
    background-color: #fff;
    .noDataIcon {
      // display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 111;
      transform: translate(-50%, -50%);
    }
    table {
      width: 100%;
    }
    .TableDataBox {
      padding-bottom: 26px;
    }
  }
}
</style>
<style lang='less'>
.el-select-dropdown__item.selected {
  color: #68b6e7;
}

.riskAssessmentBox .el-input__icon {
  line-height: 30px;
}

.todayBox .el-tabs__nav-scroll {
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  color: #333333;
}
.todayBox .el-tabs__item.is-active {
  color: #68b6e7;
}
.todayBox .el-tabs__item:hover {
  color: #68b6e7;
  cursor: pointer;
}
.todayBox .el-tabs__active-bar {
  background-color: #68b6e7;
}
.todayBox .el-tabs__nav {
  margin-left: 26px;
}
.todayBox .el-tabs__content {
  background-color: #fff;
}
.todayBox .el-tabs__header {
  margin: 0;
}
// 右侧下面块
.todayBox {
  .el-table th,
  .el-table tr {
    background-color: #fff;
    color: #333;
  }
  .el-table td,
  .el-table th {
    padding: 10px;
  }
  .todayBox .el-table td,
  .todayBox .el-table th {
  }
  .el-table .cell,
  .el-table th div,
  .el-table--border td:first-child .cell,
  .el-table--border th:first-child .cell {
    padding-left: 0px;
  }
  .todayBox .el-table td,
  .todayBox .el-table th {
    padding: 10px 0;
  }
   .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #68b6e7;
  }
}
</style>


