<template>
  <div class="documentedBox">
    <h2 class="documentedBoxTittle">已建档数据统计列表</h2>
    <div class="documentedBox_top clearfix">
      <el-date-picker
        v-model="starTime"
        type="month"
        placeholder="选择月"
        format="yyyy-MM"
        value-format="yyyy-MM"
        @change='starTimeSelect()'
      >
      </el-date-picker>
      <span class="mglr10">至</span>
      <el-date-picker
        v-model="endTime"
        type="month"
        placeholder="选择月"
        format="yyyy-MM"
        value-format="yyyy-MM"
        @change='endTimeSelect()'
      >
      </el-date-picker>
      <div class="higherRiskSelectBox">
        <span class="mgl40 mgr10">高危风险</span>
        <el-select
          v-model="highRiskClass"
          placeholder="请选择"
          clear="highRiskClass"
          @change='selectChange'
        >
          <el-option
            v-for="item in higherRiskSelect"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            popper-class="borderNo"
          >
          </el-option>
        </el-select>
      </div>
      <div class="seekBox">
        <el-select
          v-model="countType"
          placeholder="请选择"
          clear="countType"
        >
          <el-option
            v-for="item in seekSelect"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            popper-class="borderNo"
          >
          </el-option>
        </el-select>
        <el-input
          placeholder="请输入内容"
          v-model="countDetail"
          class="seekContant"
        >
          <i
            slot="prefix"
            class="el-input__icon el-icon-search"
          ></i>
        </el-input>
      </div>
      <input
        type="button"
        value="刷新/搜索"
        class="seekBtn"
        @click="searchBtn()"
      >

    </div>
    <div class="documentedBox_bottom">
      <div class="documentedBoxTeb clearfix">
        <ul class="clearfix fl">
          <li
            v-for="(item,index) in documentedBoxTebLi"
            @click="toggle1(index)"
            :class="{active:index==current}"
          >
            {{item.name}}{{item.number}}
          </li>
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
          v-show='imgShow'
        >
        <div class="TableDataBox"  v-show='tableShow'>
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
              prop=""
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

      </div>
    </div>

  </div>
</template>

 <script>
export default {
  data() {
    return {
      activeName: "first",
      officeTableData: [],
      documentedBoxTebLi: [
        { name: "全部" },
        { name: "13周-27周" },
        { name: "28周-35周" },
        { name: "36周-分娩前" }
      ],
      current: 0,

      //   高危风险
      higherRiskSelect: [
        {
          value: "0",
          label: "无"
        },
        {
          value: "1",
          label: "黄"
        },
        {
          value: "2",
          label: "橙"
        },
        {
          value: "3",
          label: "红"
        },
        {
          value: "4",
          label: "紫"
        }
      ],
      highRiskClass: "", //高危风险等级

      //   搜索下拉框
      seekSelect: [
        {
          value: "1",
          label: "姓名"
        },
        {
          value: "2",
          label: "档案号"
        }
      ],
      starTime: "", //建档开始时间
      endTime: "", //建档结束时间
      countDetail: "", //   输入框内容 /检索内容
      currentPageOfice: 1, //页码
      cur_page: 10, //分页条数
      pagerCount: 0, //总页数
      startWeek: "", //孕周开始
      endWeek: "", //孕周结束
      countType: "", //检索类型countType
      searching: "", //检索类型countType
      tableShow:true,
      imgShow:false,
    };
  },
  mounted() {
    let token1 = window.localStorage.getItem("token");
    this.getTime();
    // 初始近一个月的全部数据
    this.documentedInquire();
  },
  methods: {
    // 日期默认当前月
    getTime() {
      let date = new Date();
      let y = date.getFullYear();
      let m = date.getMonth();
      if (m == 0) {
        m = 12;
        y = y - 1;
      }
      if (m < 10) {
        m = "0" + m;
      }
      let time = y + "-" + m;
      m++;
      var endDay = y + "-" + m;
      this.starTime = time;
      this.endTime = endDay;
    },

    // 刷新/搜索
    searchBtn() {
      if (this.countDetail == "") {
        this.documentedInquire();
      } else {
        this.searching = 4;
        this.documentedInquire();
      }
    },
    // 切换每页条数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.cur_page = val;
      this.currentPageOfice = 1;
      this.documentedInquire();
    },
    // 切换页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPageOfice = val;
      this.documentedInquire();
    },
    // 开始时间切换
    starTimeSelect() {
      if (this.starTime >this.endTime) {
          this.$message({
          message: '起始时间不能大于截止时间',
          type: 'warning'
        });
          return false;
      }else{
      this.documentedInquire();
      }
    },
    // 结束时间切换
    endTimeSelect() {
       if (this.starTime >this.endTime) {
          this.$message({
          message: '截止时间不能小于起始时间',
          type: 'warning'
        });
          return false;
       }else{
      this.documentedInquire();
       }
    },
    // 高危风险下拉选择切换
    selectChange() {
      this.documentedInquire();
    },
    // 孕周切换
    toggle1(index) {
      this.current = index;
      let token = localStorage.getItem("token");
      if (this.current == 0) {
        this.startWeek = "";
        this.endWeek = "";
        this.documentedInquire();
      } else if (this.current == 1) {
        this.startWeek = 13;
        this.endWeek = 27;
        this.documentedInquire();
      } else if (this.current == 2) {
        this.startWeek = 28;
        this.endWeek = 35;
        this.documentedInquire();
      } else {
        this.startWeek = 36;
        this.endWeek = "";
        this.documentedInquire();
      }
    },
    // 查询
    documentedInquire() {
      let  self = this;
      let token = localStorage.getItem("token");
      this.$api
        .patientCenterCountEntityForOthers({
          token: token,
          startDateStr: this.starTime,
          endDateStr: this.endTime,
          startWeek: this.startWeek,
          endWeek: this.endWeek,
          countType: this.searching,
          countDetail: this.countDetail,
          highRiskClass: this.highRiskClass,
          pageNum: this.currentPageOfice,
          pageCell: this.cur_page
        })
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.officeTableData = res.pcPatientCenterBeans;
            this.pagerCount = res.pages;
             self.imgShow = false;
            self.tableShow = true;
          } else if (res.status === "20209") {
            this.officeTableData = [];
            self.tableShow = false;
            self.imgShow = true;
          }
        })
        .catch(error => {
          // this.$Message.info(error);
        });
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
.mglr10 {
  margin: 0 10px;
}
.mgl40 {
  margin-left: 40px;
  color: #666666;
}
.mgr10 {
  margin-right: 10px;
}
.documentedBox {
  min-height: 600px;
  .documentedBoxTittle {
    display: block;
    width: 100%;
    background-color: #fbfbfb;
    padding: 24px 24px 24px 24px;
    font-size: 18px;
    color: #333333;
  }
  .documentedBox_top {
    height: 70px;
    width: 100%;
    background-color: #fff;
    padding: 0 24px;
    line-height: 70px;
    .higherRiskSelectBox,
    .seekBox {
      display: inline-block;
    }
    .seekBox {
      margin-left: 50px;
      border: 1px solid #ccc;
      border-radius: 50px;
      height: 33px;
      line-height: 28px;
      padding: 1px;
      width: 286px;
    }
    .seekBtn {
      width: 76px;
      height: 32px;
      background-color: #68b6e7;
      border-radius: 50px;
      color: #fff;
      font-size: 12px;
    }
  }
  .documentedBox_bottom {
    margin-top: 6px;
    width: 100%;
    background-color: #fff;
    .documentedBoxTeb {
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
          color: #68b6e7;
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
      transform: translate(-50%, -50%);
      z-index: 111;
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

.documentedBox .el-tabs__nav-scroll {
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  color: #333333;
}
.documentedBox .el-tabs__item.is-active {
  color: #68b6e7;
}
.documentedBox .el-tabs__item:hover {
  color: #68b6e7;
  cursor: pointer;
}
.documentedBox .el-tabs__active-bar {
  background-color: #68b6e7;
}
.documentedBox .el-tabs__nav {
  margin-left: 26px;
}
.documentedBox .el-tabs__content {
  background-color: #fff;
}
.documentedBox .el-tabs__header {
  margin: 0;
}
// 右侧下面块
.documentedBox {
  .el-table th,
  .el-table tr {
    background-color: #fff;
    color: #333;
  }
  .el-table td,
  .el-table th {
    padding: 10px;
  }
  .documentedBox .el-table td,
  .documentedBox .el-table th {
  }
  .el-table .cell,
  .el-table th div,
  .el-table--border td:first-child .cell,
  .el-table--border th:first-child .cell {
    padding-left: 0px;
  }
  .documentedBox .el-table td,
  .documentedBox .el-table th {
    padding: 10px 0;
  }
  .documentedBox_top {
    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 118px;
    }
    .el-input--prefix .el-input__inner {
      border-radius: 8px;
      border: 1px solid #ccc;
      height: 30px;
    }
    .el-month-table td .cell:hover,
    .el-month-table td.current:not(.disabled) .cell {
      color: #68b6e7;
    }
    .el-input {
      width: 102px;
    }
    .el-select .el-input__inner:focus {
      border-color: #68b6e7;
    }
    .higherRiskSelectBox {
      .el-input__inner {
        border-radius: 8px;
        height: 30px;
        border: 1px solid #ccc;
        background-color: #f6f6f6;
      }
    }
    .seekBox {
      .el-input {
        width: 60px;
      }
      .el-input__inner {
        padding: 0px;
        padding-left: 4px;
        font-size: 12px;
        border-radius: 20px;
        height: 30px;
        border: none;
        background-color: #f6f6f6;
        border-radius: 50px 0 0 50px;
        border-right: 1px solid #ccc;
      }
      .el-input__inner:focus {
        border-color: #ccc;
      }
      .el-select .el-input .el-select__caret {
        font-size: 12px;
        width: 10px;
      }
      .el-input__icon {
        line-height: 30px;
      }
      .seekContant {
        input {
          width: 218px;
          padding-left: 30px;
          background-color: #fff;
          border: none;
          border-radius: 50px;
        }
      }
    }
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #68b6e7;
  }
  .el-button--text {
    color: #68b6e7;
  }
}
</style>


