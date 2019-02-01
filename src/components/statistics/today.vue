<template>
  <div class="todayBox">
    <h2 class="todayBoxTittle">今日全部复检统计列表</h2>
    <div class="todayBox_top clearfix">
      <ul class="clearfix">
        <li
          v-for="(item,index) in weekData"
          v-html="item.value"
          :class="{'active':index==showActive}"
          @click="weekDataClick(index)"
        ></li>
      </ul>
      <div
        class="tuoyuan"
        @click="tuoyuanBtn"
      ><i class="el-icon-refresh"></i>刷新列表</div>
    </div>
    <div
      class="todayBox_bottom"
      id="printTest"
    >
      <div class="todayBoxTeb clearfix">
        <ul class="clearfix fl">
          <li
            @click='toggle();addNameClick(1)'
            :class="{'active':tab === 1}"
          >今日总预约复检人数<span v-model='numToggle'>{{numToggle}}</span>人</li>
          <li
            @click='toggle2();addNameClick(2)'
            :class="{'active':tab === 2}"
          >今日当前挂号人数0人</li>
          <li
            @click='toggle();addNameClick(3)'
            :class="{'active':tab === 3}"
          >今日未到复检人数<span v-model='numToggle'>{{numToggle}}</span>人</li>
        </ul>
        <div class="fr mgr38">
          <el-button
            round
            v-print="'#printTest'"
          >打印</el-button>
          <el-button
            round
            @click="exportExcel"
          >导出</el-button>
        </div>
      </div>
      <div class="administrativeBoxContant" :class="{'active':backActtive}">
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
                  @click="lookBtn(scope.row)"
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
                <span class="total">总共{{numToggle}}人</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
 <script>
import $ from "jquery";
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  data() {
    return {
      activeName: "first",
      officeTableData: [], //今日预约数据
      // officeTableData3: [], //今日未到复检人数
      tab: 1,
      showActive: "0",
      weekData: [
        { value: "周一" },
        { value: "周二" },
        { value: "周三" },
        { value: "周四" },
        { value: "周五" },
        { value: "周六" },
        { value: "周日" }
      ],
      todayBoxTebLi: [
        { name: "今日总预约复检人数", number: "20人" },
        { name: "今当前挂号人数", number: "10人" },
        { name: "今日未到复检人数", number: "30人" }
      ],
      current: 0,
      currentPageOfice: 1, //分页 -页数
      cur_page: 10, //分页 --条数
      pagerCount: 0, //分页 --总条数
      tableShow: true, //今日预约表格显示隐藏
      imgShow: false, //图片显示隐藏
     backActtive:false, //图片显示隐藏
      numToggle: 0, //今日总预约人数
      strTime: "", //开始时间
      endTime: "" //结束时间
    };
  },
  mounted() {
    this.inquireFun();
    this.weekApllay();
  },
  methods: {
    // 日期切换
    weekDataClick(index) {
      this.showActive = index;
      switch (index) {
        case 0:
          this.strTime = this.showWeekDay(0);
          this.endTime = this.showWeekDay(1);
          break;
        case 1:
          this.strTime = this.showWeekDay(1);
          this.endTime = this.showWeekDay(2);
          break;
        case 2:
          this.strTime = this.showWeekDay(2);
          this.endTime = this.showWeekDay(3);

          break;
        case 3:
          this.strTime = this.showWeekDay(3);
          this.endTime = this.showWeekDay(4);

          break;
        case 4:
          this.strTime = this.showWeekDay(4);
          this.endTime = this.showWeekDay(5);

          break;
        case 5:
          this.strTime = this.showWeekDay(5);
          this.endTime = this.showWeekDay(6);

          break;
        case 6:
          this.strTime = this.showWeekDay(6);
          this.endTime = this.showWeekDay(7);
          break;
      }
        this.currentPageOfice = 1, //分页 -页数
        this.cur_page = 10,
        this.numInquire();
    },
    // 获取当前是星期几
    weekApllay() {
      let str = "日一二三四五六".charAt(new Date().getDay());
      if (str == "一") {
        this.showActive = 0;
      } else if (str == "二") {
        this.showActive = 1;
      } else if (str == "三") {
        this.showActive = 2;
      } else if (str == "四") {
        this.showActive = 3;
      } else if (str == "五") {
        this.showActive = 4;
      } else if (str == "六") {
        this.showActive = 5;
      } else if (str == "日") {
        this.showActive = 6;
      }
    },
    // 本周第几天
    showWeekDay: function(datNum) {
      let Nowdate = new Date();
      let WeekFirstDay = new Date(Nowdate - (Nowdate.getDay() - 1) * 86400000);
      let WeekLastDay = new Date((WeekFirstDay / 1000 + datNum * 86400) * 1000);
      let M = Number(WeekLastDay.getMonth()) + 1;
      if (M < 10) {
        M = "0" + M;
      }
      let D = WeekLastDay.getDate();
      if (D < 10) {
        D = "0" + D;
      }
      return WeekLastDay.getFullYear() + "-" + M + "-" + D;
    },
    // 复检teb切换
    addNameClick(index) {
      this.tab = index;
    },
    // 导出表格
    exportExcel() {
      if (
        $(".todayBoxTeb>ul>li")
          .eq(0)
          .hasClass("active")
      ) {
        var jsono = this.officeTableData;
      } else if (
        $(".todayBoxTeb>ul>li")
          .eq(1)
          .hasClass("active")
      ) {
        alert("第二个");
      } else {
        var jsono = this.officeTableData3;
      }
      // var jsono = this.officeTableData;
      var jsonp = [];
      if (typeof Array.prototype.forEach != "function") {
        Array.prototype.forEach = function(callback) {
          for (var i = 0; i < this.length; i++) {
            callback.apply(this, [this[i], i, this]);
          }
        };
      }
      jsono.forEach(element => {
        var tempJson = {};
        tempJson.复检时间 = element.makeAppointmentTime;
        tempJson.姓名 = element.checkName;
        tempJson.孕周 =
          "孕" +
          element.newAgeOfMenarche +
          "-" +
          element.newAgeOfMenarcheDay +
          "天";
        tempJson.预产期 = element.parturitionDetailDueDate;
        tempJson.年龄 = element.checkAge;
        tempJson.高危评估 = getHighRiskClass(element.highRiskClass);
        jsonp.push(tempJson);
      });
      function getHighRiskClass(param) {
        var highClassStr = "";
        if (param == null) {
          return highClassStr;
        }
        console.log(param);
        switch (param) {
          case "0":
            highClassStr = "绿色";
            break;
          case "1":
            highClassStr = "黄色";
            break;
          case "2":
            highClassStr = "橘色";
            break;
          case "3":
            highClassStr = "红色";
            break;
          case "4":
            highClassStr = "紫色";
            break;
          default:
            break;
        }
        console.log(highClassStr);
        return highClassStr;
      }

      const wopts = { bookType: "xlsx", bookSST: false, type: "binary" }; // 这里的数据是用来定义导出的格式类型
      downloadExl(jsonp, wopts);
      function downloadExl(data, type) {
        const wb = { SheetNames: ["Sheet1"], Sheets: {}, Props: {} };
        wb.Sheets["Sheet1"] = XLSX.utils.json_to_sheet(data); //  通过json_to_sheet转成单页(Sheet)数据
        saveAs(
          new Blob([s2ab(XLSX.write(wb, wopts))], {
            type: "application/octet-stream"
          }),
          "今日复检统计列表" +
            "." +
            (wopts.bookType == "biff2" ? "xls" : wopts.bookType)
        );
      }
      function s2ab(s) {
        if (typeof ArrayBuffer !== "undefined") {
          var buf = new ArrayBuffer(s.length);
          var view = new Uint8Array(buf);
          for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
          return buf;
        } else {
          var buf = new Array(s.length);
          for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xff;
          return buf;
        }
      }
    },

    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSizeChange(val) {
      this.numInquire();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.numInquire();
    },
    // 今日总预约复检人数 -点击teb
    toggle() {
      (this.currentPageOfice = 1), //分页 -页数
        (this.cur_page = 10),
        this.numInquire();
    },
    // 首次进入查询封装
    inquireFun() {
      this.currentdate(startDateStr, endDateStr);
      var day = new Date();
      var startDateStr = day.format("yyyy-MM-dd");
      this.strTime =startDateStr; //开始时间
      day.setDate(day.getDate() + 1);
      var endDateStr = day.format("yyyy-MM-dd");
      this.endTime = endDateStr; //结束时间
      //测试、
      // this.strTime = "2018-01-01";
      // this.endTime = "2018-10-01";
      this.numInquire();
    },
    toggle2() {
      this.tableShow = false;
      this.imgShow = true;
    },
    // 刷新按钮
    tuoyuanBtn() {
        this.inquireFun();
    },
    //今日总预约查询
    numInquire(token, startDateStr, endDateStr, pageNum, pageCell) {
      let token1 = localStorage.getItem("mayernal-web-token");
      this.$api
        .countEntityWithStartDateAndEndDate({
          token: token1,
          startDateStr: this.strTime,
          endDateStr: this.endTime,
          pageNum: this.currentPageOfice,
          pageCell: this.cur_page
        })
        .then(res => {
          if (res.status === "20200") {
            console.log(res);
            this.officeTableData = res.pcPatientCenterBeans;
            this.pagerCount = res.pages;
            this.tableShow = true;
            this.imgShow = false;
            this.backActtive = false;
            this.numToggle = res.total;
          } else if (res.status === "20209") {
            this.tableShow = false;
            this.imgShow = true;
             self.backActtive = true;
            this.numToggle = 0;
          }else{
               this.$message.error('今日全部复检统计查询错误，请稍后重试');
          }
        })
        .catch(error => {
           this.$message.error('今日全部复检统计查询错误，请稍后重试');
        });
    },
    // 获取当前时间
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
    },
    // 查看按钮 跳转到--->个人中心
    lookBtn(row) {
      localStorage.setItem("tableDataParticulars", JSON.stringify(row));
      this.$router.push({ name: "personalCenter" });
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
      .active {
        color: #68b6e7;
        font-weight: 600;
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
      cursor: pointer;
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
          color:#68b6e7;
          font-weight: 600;
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
    .administrativeBoxBlock{
          height: 30px;
        line-height: 30px;
        div {
          display: inline-block;
        }
    }
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
  .el-button--text {
    color: #68b6e7;
  }
}
</style>


