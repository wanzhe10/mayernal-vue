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
          <li v-for="(item,index) in todayBoxTebLi"  @click="toggle1(index)" :class="{active:index==current}"> 
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
      todayBoxTebLi: [
        {name:'今日总预约复检人数',number:'20人'},
        {name:'今当前挂号人数',number:'10人'},
        {name:'今日未到复检人数',number:'30人'},
      ],
      current:0,
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
    toggle1(index){
      this.current=index;
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
  .todayBoxTittle{
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
    	.noDataIcon{
		// display: none;
		position: absolute;
		top:50%;
    left: 50%;
    z-index: 111;
		transform:translate(-50%,-50%);
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
}
</style>


