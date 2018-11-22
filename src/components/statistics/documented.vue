<template>
	<div class="documentedBox">
		<h2 class="documentedBoxTittle">已建档数据统计列表</h2>
		<div class="documentedBox_top clearfix">
			<el-date-picker v-model="starTime" type="month" placeholder="选择月">
			</el-date-picker>
			<span class="mglr10">至</span>
			<el-date-picker v-model="endTime" type="month" placeholder="选择月">
			</el-date-picker>
			<div class="higherRiskSelectBox">
				<span class="mgl40 mgr10">高危风险</span>
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
		<div class="documentedBox_bottom">
			<div class="documentedBoxTeb clearfix">
				<ul class="clearfix fl">
					<li v-for="(item,index) in documentedBoxTebLi" @click="toggle1(index)" :class="{active:index==current}">
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
      documentedBoxTebLi: [
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
      seekContant: ""
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
	  color:#fff;
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
			color:#68b6e7;
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
	.noDataIcon{
		display: none;
		position: absolute;
		top:50%;
		left: 50%;
    transform:translate(-50%,-50%);
    z-index: 111;
	}
    table {
	  width: 100%;
  }
   .TableDataBox{
    padding-bottom:26px;
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
		padding-left:4px;
        font-size: 12px;
        border-radius: 20px;
        height: 30px;
        border: none;
		background-color: #f6f6f6;
		  border-radius: 50px 0 0 50px;
		  border-right:1px solid #ccc;
		
	  }
.el-input__inner:focus{
		  border-color:#ccc;
	  }
	  .el-select .el-input .el-select__caret{
		  font-size:12px;
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
		   border:none;
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


