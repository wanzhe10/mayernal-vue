<template>
  <div class="managementBox">
    <div class="topBox clearfix">
      <div class="btnsBOx">
        <!-- <router-link :to="{path: 'newfile'}"> -->
          <div class="newBtn">新建孕妇档案</div>
        <!-- </router-link> -->
      </div>
      <div class="selectBox clearfix">
        <div class="pdl20 fl w170">
          <p>档案管理</p>
          <el-select
            v-model="filingType"
            placeholder="请选择"
            class="recordSelect"
          >
            <el-option
              size='126px'
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="assess fl w180">
          <p>风险评估</p>
          <el-select
            v-model="highClass"
            placeholder="请选择"
            class="assessSelect"
          >
            <el-option
              size='126px'
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <i
                style="float: left; margin-top:12px; margin-right:10px;"
                id="clolrLump"
                :class="item.name"
              ></i>
              <!-- <span style="float: left">{{ item.value }}</span> -->
              <span style="float: left; color: #8492a6; font-size: 13px">{{ item.label }}</span>
            </el-option>
          </el-select>
        </div>
        <div class="fl w154">
          <p>就诊目的</p>
          <el-select
            v-model="secondCheckType"
            placeholder="请选择"
            class="seeSelect"
          >
            <el-option
              size='126px'
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>

        </div>
        <div class="fl w224">
          <p>搜索</p>
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="fileSearch"
            class="fileSearch"
          >
          </el-input>

        </div>
        <el-button
          type="primary"
          round
          class="inquireBtn"
          @click="inquireBtn()"
        >查询</el-button>
      </div>
    </div>
    <div class="bottomBox">
      <!-- <div class="tableBox"> -->
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          prop="tableNum"
          label="序号"
          width="70px"
          style="text-align: center;"
          type="index"
          :index="indexMethod"
        ></el-table-column>
        <el-table-column
          prop="checkName"
          label="姓名"
          width="76px"
        ></el-table-column>
        <el-table-column
          prop="goal"
          label="就诊目的"
          width="106px"
        ></el-table-column>
        <el-table-column
          prop="checkIdCard"
          label="身份证"
          width="184px"
        ></el-table-column>
        <el-table-column
          prop="checkAge"
          label="年龄"
          width="60px"
        ></el-table-column>
        <el-table-column
          prop="gestational"
          label="孕周"
          width="72px"
        >
          <template slot-scope="scope">
            <div v-html="'孕'+scope.row.newAgeOfMenarche+'-'+scope.row.newAgeOfMenarcheDay+'天'"></div>
          </template>
        </el-table-column>
        <el-table-column
          prop="parturitionDetailDueDate"
          label="孕产期"
          width="110px"
        ></el-table-column>
        <el-table-column
          prop="healthAssayBloodType"
          label="血型"
          width="46px"
        ></el-table-column>
        <el-table-column
          prop="highRiskNumber"
          label="评分等级"
          width="96px"
        ></el-table-column>
        <el-table-column
          prop="highRiskClass"
          label="高危因素"
          width="100px"
        >
          <template slot-scope="scope">
            <p
              class="greenStrip"
              v-show="scope.row.highRiskClass !=0"
            >
              绿色（{{scope.row.colorNumGreen}}）项
              <!-- 绿色（<span v-for="(item,index) in colorNum" :key="index">{{item.green}}</span>）项 -->

            </p>
            <p
              class="yellowStrip"
              v-show="scope.row.highRiskClass !=1"
            >黄色（{{scope.row.colorNumYellow}}）项</p>
            <p
              class="orangeStrip"
              v-show="scope.row.highRiskClass !=2"
            >橙色（{{scope.row.colorNumOrange}}）项</p>
            <p
              class="proponStrip"
              v-show="scope.row.highRiskClass !=3"
            >紫色（{{scope.row.colorNumPurple}}）项</p>
            <p
              class="redStrip"
              v-show="scope.row.highRiskClass !=4"
            >红色（{{scope.row.colorNumRed}}）项</p>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作"
          width="58px"
        >
          <template slot-scope="scope">
            <router-link :to="{path: 'personalCenter'}">
              <el-button
                type="text"
                size="small"
                style="text-align: center;"
                @click="handleEdit(scope.$index, scope.row)"
              >查看</el-button>
            </router-link>
            <!-- <el-button type="text" size="small">编辑</el-button> -->
          </template>
        </el-table-column>
      </el-table>
      <div
        class="block"
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
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      // 档案管理下拉框数据
      options1: [
        {
          value: "0",
          label: "申请建档"
        },
        {
          value: "1",
          label: "已建档"
        }
      ],
      // 风险评估下拉框数据
      options2: [
        {
          value: "0",
          label: "绿色(低风险)",
          name: "level0"
        },
        {
          value: "1",
          label: "黄(一般风险)",
          name: "level1"
        },
        {
          value: "2",
          label: "橙(较高风险)",
          name: "level2"
        },
        {
          value: "3",
          label: "红(高风险)",
          name: "level3"
        },
        {
          value: "4",
          label: "紫(传染病)",
          name: "level4"
        }
      ],
      // 就诊目的下拉框数据
      options3: [
        {
          value: "0",
          label: "正常复检"
        },
        {
          value: "1",
          label: "异常复检"
        }
      ],

      filingType: "1", //档案管理 已建档/未建档
      highClass: "", //高危等级
      secondCheckType: "", //就诊目的
      fileSearch: "", //搜索内容
      tableData: [
        {
          tableNum: "1",
          username: "王小虎1",
          goal: "第三次产检",
          idCard: "1302281988092741118",
          age: "29",
          gestational: "26+3",
          pregnant: "2017-10-03",
          blood: "O",
          grade: "10",
          element: "26+3",
          green: ""
        }
      ],
      colorNum: [],
      currentPageOfice: 1, //页码
      cur_page: 10, //分页条数
      pagerCount: 0 //总页数
    };
  },
  mounted() {
    this.indexInquire();
    // this.colorNum = this.tableData.highRiskTotalNum
  },
  methods: {
    handleEdit(index, row) {
      localStorage.setItem("tableDataParticulars", JSON.stringify(row));
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.cur_page = val;
      this.currentPageOfice = 1;
      this.indexInquire();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPageOfice = val;
      this.indexInquire();
    },
    // 点击查询按钮
    inquireBtn() {
      this.indexInquire();
    },
    // 查询
    indexInquire() {
      let self = this;
      let token1 = window.localStorage.getItem("token");
      this.$api
        .findListWithParamForFiling({
          token: token1,
          pageNum: this.currentPageOfice,
          pageSize: this.cur_page,
          filingType: this.filingType,
          orderByType: "",
          paramDetail: this.fileSearch,
          paramType: "",
          highClass: this.highClass,
          secondCheckType: this.secondCheckType
        })
        .then(res => {
          // console.log(res);
          if (res.status === "20200") {
            // var highRiskTotalNum = res.pcPatientCenterBeans.highRiskTotalNum;
            // console.log(highRiskTotalNum);
            //  var colorNum  = eval("(" +highRiskTotalNum + ")");
            this.pagerCount = res.pages;
            self.imgShow = false;
            self.tableShow = true;
            // console.log(this.tableData);
            var aaa = res.pcPatientCenterBeans;
            for (let i = 0; i < aaa.length; i++) {
              const element = aaa[i];
              if (element.highRiskTotalNum == "") {
                var colorNum = JSON.parse(element.highRiskTotalNum);
                element.colorNumGreen = 0;
                element.colorNumYellow = 0;
                element.colorNumOrange = 0;
                element.colorNumRed = 0;
                element.colorNumPurple = 0;
              } else {
                var colorNum = JSON.parse(element.highRiskTotalNum);
                element.colorNumGreen = colorNum.green;
                element.colorNumYellow = colorNum.yellow;
                element.colorNumOrange = colorNum.orange;
                element.colorNumRed = colorNum.red;
                element.colorNumPurple = colorNum.purple;
              }
            }
            this.tableData = res.pcPatientCenterBeans;
            //  this.colorNum = colorNum
            //  console.log(this.colorNum)
          } else {
            this.officeTableData = [];
            self.tableShow = false;
            self.imgShow = true;
            // this.$Message.info(res.desc);
          }
        })
        .catch(error => {
          // this.$Message.info(error);
        });
    },
    indexMethod(index) {
      return index + 1;
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
#clolrLump {
  width: 10px;
  height: 10px;
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
.mal20 {
  margin-left: 20px;
}
.pdl20 {
  padding-left: 20px;
}
.w154 {
  width: 154px;
}
.w170 {
  width: 170px;
}
.w180 {
  width: 180px;
}
.w224 {
  width: 224px;
}
.w56 {
  width: 56px; // width: 8.6%;
}

.w58 {
  width: 58px; // width: 10.8%;
}

.w60 {
  width: 60px; // width: 5.2%;
}

.w68 {
  width: 68px; // width: 5.8%;
}

.w72 {
  width: 72px; // width: 7.8%;
}

.w76 {
  // width: 8.3%;
  width: 76px;
}

.w90 {
  width: 90px; // width: 9.5%;
}

.w96 {
  width: 96px; // width: 9.8%;
}

.w110 {
  width: 110px; // width: 11.3%;
}

.w184 {
  width: 184px; // width: 17.3%;
}

.mal20 {
  margin-left: 20px;
}

.greenStrip {
  &:after {
    content: " ";
    position: absolute;
    top: 1px;
    left: 0;
    width: 10px;
    height: 10px;
    background-color: green;
    border-radius: 50%;
  }
}
.yellowStrip {
  &:after {
    content: " ";
    position: absolute;
    top: 1px;
    left: 0;
    width: 10px;
    height: 10px;
    background-color: yellow;
    border-radius: 50%;
  }
}
.orangeStrip {
  &:after {
    content: " ";
    position: absolute;
    top: 1px;
    left: 0;
    width: 10px;
    height: 10px;
    background-color: orange;
    border-radius: 50%;
  }
}
.proponStrip {
  &:after {
    content: " ";
    position: absolute;
    top: 1px;
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
    top: 1px;
    left: 0;
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
  }
}
</style>
<style lang="less">
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #68b6e7;
  color: #fff;
}

.managementBox {
  width: 100%;
  height: 100%; //右侧上面块
  .topBox {
    width: 100%;
    height: 98px;
    background-color: #fff;
    .btnsBOx {
      width: 160px;
      height: 100px;
      float: left;
      position: relative;
      .newBtn {
        width: 128px;
        height: 34px;
        background-color: #68b6e7;
        color: #fff;
        font-size: 14px;
        border-radius: 10px 10px 10px 10px;
        text-align: center;
        line-height: 34px;
        margin: 30px 16px 30px 16px;
        cursor: pointer;
      }
      &:after {
        content: " ";
        position: absolute;
        top: 10px;
        right: 0px;
        width: 1px;
        height: 80px;
        background-color: #ccc;
      }
    }
    .selectBox {
      padding-top: 20px;
      width: 810px;
      height: 98px;
      float: left;
      .fl {
        float: left;
        height: 100%;
        p {
          font-size: 14px;
          color: #666666;
          margin-bottom: 10px;
        }
        input {
          height: 30px;
          border: 1px solid #ccc;
          color: #333333;
        }
        .el-input__icon {
          line-height: 30px;
        }
        .recordSelect {
          input {
            width: 126px;
            border-radius: 10px;
          }
        }
        .assessSelect {
          input {
            width: 162px;
            border-radius: 10px;
          }
        }
        .seeSelect {
          input {
            width: 126px;
            border-radius: 10px;
          }
        }
        .fileSearch {
          input {
            width: 206px;

            border-radius: 50px;
          }
        }
      }
      .inquireBtn {
        margin-top: 20px;
        background-color: #68b6e7 !important;
        border: none;
        margin-top: 20px;
      }
    }
  }
  // 右侧下面块
  .bottomBox {
    thead {
      th {
        color: #333333;
        font-weight: 100;
        background-color: #e7f3fb;
      }

      th:nth-child(1),
      th:nth-child(5),
      th:nth-child(8),
      th:nth-child(9),
      th:nth-child(11) {
        text-align: center;
      }
    }
    tbody {
      td {
        padding: 0px;
      }
      td:nth-child(1),
      td:nth-child(5),
      td:nth-child(8),
      td:nth-child(9),
      td:nth-child(11) {
        text-align: center;
      }
    }
    p {
      text-align: left;
      font-size: 12px;
      position: relative;
      display: block;
      height: 13px;
      line-height: 13px;
      padding-left: 12px;
    }
    div {
      padding: 0px;
    }
    width: 100%;
    background-color: #fff;
    margin-top: 10px;
    padding-bottom: 30px;
  }
}
</style>
