<template>
	<div class="berthBox">
		<h2 class="berthBoxTittle">预分娩床位数量统计</h2>
		<div class="berthBox_top clearfix">
			<div class="monthBox">
				<p class="mgb16">孕周范围</p>
				<el-select v-model="starWeeksModel" placeholder="请选择">
					<el-option v-for="item in starWeeks" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<el-select v-model="endWeeksModel" placeholder="请选择">
					<el-option v-for="item in endWeeks" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="ageBox">
				<el-date-picker v-model="starTime" type="month" placeholder="选择月">
				</el-date-picker>-
				<el-date-picker v-model="endTime" type="month" placeholder="选择月">
				</el-date-picker>
			</div>
			<div class="higherRiskSelectBox">
				<span class="mgr10">高危风险</span>
				<el-select v-model="higherRiskModel" placeholder="请选择" clear="higherRiskModel">
					<el-option v-for="item in higherRiskSelect" :key="item.value" :label="item.label" :value="item.value" popper-class="borderNo">
					</el-option>
				</el-select>
			</div>
			<div class="seekBox">
				<el-select v-model="seekSelectModel" placeholder="请选择" clear="seekSelectModel">
					<el-option v-for="item in seekSelect" :key="item.value" :label="item.label" :value="item.value" popper-class="borderNo">
					</el-option>
				</el-select>
				<el-input placeholder="请输入内容" v-model="seekContant" class="seekContant">
					<i slot="prefix" class="el-input__icon el-icon-search"></i>
				</el-input>
			</div>
			<input type="button" value="刷新/搜索" class="seekBtn">
		</div>
		<div class="berthBox_bottom">
			<div class="berthBoxTeb clearfix">
				<ul class="clearfix fl">
					<li v-for="(item,index) in berthBoxTebLi" @click="toggle1(index)" :class="{active:index==current}">
						{{item.name}}{{item.number}}
					</li>
				</ul>
				<div class="fr mgr38">
					<el-button round>打印</el-button>
					<el-button round>导出</el-button>
				</div>
			</div>
			<div class="administrativeBoxContant">
				<img src="../../assets/noDataIcon.png" alt="暂无数据" class="noDataIcon">
				<div class="TableDataBox">
						<el-table :data="officeTableData" style="width: 100%">
					<el-table-column prop="recheckTime" label="复检时间" width="130px"></el-table-column>
					<el-table-column prop="recheckName" label="姓名" width="140px"></el-table-column>
					<el-table-column prop="recheckWeek" label="孕周" width="125px"></el-table-column>
					<el-table-column prop="recheckTerm" label="预产期" width="156px"></el-table-column>
					<el-table-column prop="recheckAge" label="年龄" width="94px"></el-table-column>
					<el-table-column prop="recheckAssess" label="高危评估" width="126px">
						<template slot-scope="scope">
							<i class="clolrLump"></i>
							<span style="margin-left: 10px">{{ scope.row.recheckAssess }}</span>
						</template>
					</el-table-column>
					<el-table-column prop="recheckOvertime" label="超时" width="86px"></el-table-column>
					<el-table-column prop="" label="操作" width="70px">
						<template slot-scope="scope">
							<el-button type="text" size="small" style="text-align: center;">查看</el-button>
						</template>
					</el-table-column>
				</el-table>
				<!-- 分页 -->
				<div class="administrativeBoxBlock" style="margin-top:30px; text-align:center;">
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPageOfice" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="sizes, prev, pager, next" :total="1000" background>
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
      officeTableData: [
        {
          recheckTime: "2018-10-22",
          recheckName: "小明一",
          recheckWeek: "孕13-6周",
          recheckTerm: "2018-10-22",
          recheckAge: "32",
          recheckAssess: "红色",
          recheckOvertime: " -- "
        },
        {
          recheckTime: "2018-10-22",
          recheckName: "小明一",
          recheckWeek: "孕13-6周",
          recheckTerm: "2018-10-22",
          recheckAge: "32",
          recheckAssess: "红色",
          recheckOvertime: " -- "
        },
        {
          recheckTime: "2018-10-22",
          recheckName: "小明一",
          recheckWeek: "孕13-6周",
          recheckTerm: "2018-10-22",
          recheckAge: "32",
          recheckAssess: "红色",
          recheckOvertime: " -- "
        },
        {
          recheckTime: "2018-10-22",
          recheckName: "小明一",
          recheckWeek: "孕13-6周",
          recheckTerm: "2018-10-22",
          recheckAge: "32",
          recheckAssess: "红色",
          recheckOvertime: " -- "
        }
      ],
      currentPageOfice: 1,
      berthBoxTebLi: [
        { name: "全部" },
        { name: "13周-27周" },
        { name: "28周-35周" },
        { name: "36周-分娩前" }
      ],
      current: 0,
      starTime: "",
      endTime: "",
      //   高危风险
      higherRiskSelect: [
        {
          value: "0",
          label: "未激活"
        },
        {
          value: "1",
          label: "已激活"
        }
      ],
      higherRiskModel: "",
      //   搜索下拉框
      seekSelect: [
        {
          value: "0",
          label: "姓名"
        },
        {
          value: "1",
          label: "档案号"
        }
      ],
      seekSelectModel: "",
      //   输入框内容
      seekContant: "",
      starWeeks: [
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
        },
        {
          value: "6",
          label: "6"
        }
      ],
      endWeeks: [
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
        },
        {
          value: "6",
          label: "6"
        }
	  ],
	  starWeeksModel:'',
	  endWeeksModel:'',
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    toggle1(index) {
      this.current = index;
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
.mgb16 {
  margin-bottom: 16px;
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
.berthBox {
  min-height: 600px;
  .berthBoxTittle {
    display: block;
    width: 100%;
    background-color: #fbfbfb;
    padding: 24px 24px 24px 24px;
    font-size: 18px;
    color: #333333;
  }
  .berthBox_top {
    width: 100%;
    background-color: #fff;
    padding: 20px 26px 0 26px;
    .higherRiskSelectBox,
    .seekBox,
    .ageBox,
    .monthBox {
      display: inline-block;
      height: 70px;
    }
    .seekBox {
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
  .berthBox_bottom {
    margin-top: 6px;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #fff;
    .berthBoxTeb {
      width: 100%;
      background-color: #fff;
      border-bottom: 1px solid #ccc;
      ul {
        float: left;
        li {
          float: left;
          height: 60px;
          line-height: 60px;
          padding: 0 10px 0 24px;
          cursor: pointer;
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
    padding: 0 24px;
    background-color: #fff;
    .noDataIcon {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    table {
      width: 100%;
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

.berthBox .el-tabs__nav-scroll {
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  color: #333333;
}
.berthBox .el-tabs__item.is-active {
  color: #68b6e7;
}
.berthBox .el-tabs__item:hover {
  color: #68b6e7;
  cursor: pointer;
}
.berthBox .el-tabs__active-bar {
  background-color: #68b6e7;
}
.berthBox .el-tabs__nav {
  margin-left: 26px;
}
.berthBox .el-tabs__content {
  background-color: #fff;
}
.berthBox .el-tabs__header {
  margin: 0;
}
// 右侧下面块
.berthBox {
  .el-table th,
  .el-table tr {
    background-color: #fff;
    color: #333;
  }
  .el-table td,
  .el-table th {
    padding: 10px;
  }
  .berthBox .el-table td,
  .berthBox .el-table th {
  }
  .el-table .cell,
  .el-table th div,
  .el-table--border td:first-child .cell,
  .el-table--border th:first-child .cell {
    padding-left: 0px;
  }
  .berthBox .el-table td,
  .berthBox .el-table th {
    padding: 10px 0;
  }
  .berthBox_top {
    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 66px;
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
      width: 94px;
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


