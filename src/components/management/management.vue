<template>
	<div class="rightContant">
		<div class="topBox clearfix">
			<div class="btnsBOx">
				 <router-link :to="{path: 'newfile'}">
                                   <div class="newBtn">新建孕妇档案</div>
                                </router-link>
				
			</div>
			<div class="selectBox clearfix">
				<div class="pdl20 fl w170">
					<p>档案管理</p>
					<el-select v-model="value1" placeholder="请选择" class="recordSelect">
						<el-option size='126px' v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="assess fl w180">
					<p>风险评估</p>
					<el-select v-model="value2" placeholder="请选择" class="assessSelect">
						<el-option size='126px' v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="fl w154">
					<p>就诊目的</p>
					<el-select v-model="value3" placeholder="请选择" class="seeSelect">
						<el-option size='126px' v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>

				</div>
				<div class="fl w224">
					<p>搜索</p>
					<el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="fileSearch" class="fileSearch">
					</el-input>

				</div>
				<el-button type="primary" round class="inquireBtn">查询</el-button>
			</div>
		</div>
		<div class="bottomBox">
			<!-- <div class="tableBox"> -->
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="tableNum" label="序号" width="70px" style="text-align: center;"></el-table-column>
				<el-table-column prop="username" label="姓名" width="76px"></el-table-column>
				<el-table-column prop="goal" label="就诊目的" width="106px"></el-table-column>
				<el-table-column prop="idCard" label="身份证" width="184px"></el-table-column>
				<el-table-column prop="age" label="年龄" width="60px"></el-table-column>
				<el-table-column prop="gestational" label="孕周" width="72px"></el-table-column>
				<el-table-column prop="pregnant" label="孕产期" width="110px"></el-table-column>
				<el-table-column prop="blood" label="血型" width="46px"></el-table-column>
				<el-table-column prop="grade" label="评分等级" width="96px"></el-table-column>
				<el-table-column prop="element" label="高危因素" width="96px">
					<template slot-scope="scope" class="elementFont">
						<p class="greenStrip">绿色（12）项</p>
						<p class="yellowStrip">黄色（12）项</p>
						<p class="orangeStrip">橙色（12）项</p>
						<p class="proponStrip">紫色（12）项</p>
						<p class="redStrip">红色（12）项</p>
					</template>
				</el-table-column>
				<el-table-column prop="address" label="操作" width="48px">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
						<!-- <el-button type="text" size="small">编辑</el-button> -->
					</template>
				</el-table-column>
			</el-table>
			<div class="block" style="margin-top:30px; text-align:center;">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage2" :page-sizes="[7, 14, 21, 28]" :page-size="100" layout="sizes, prev, pager, next" :total="1000" background>
				</el-pagination>
			</div>
		</div>

	</div>
</template>
<script>
export default {
  data() {
    return {
      // 档案管理下拉框数据
      options1: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      // 风险评估下拉框数据
      options2: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      // 就诊目的下拉框数据
      options3: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],

      value1: "",
      value2: "",
      value3: "",
      fileSearch: "",
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
          element: "26+3"
        },
        {
          tableNum: "2",
          username: "王小虎2",
          goal: "第三次产检",
          idCard: "1302281988092741118",
          age: "29",
          gestational: "26+3",
          pregnant: "2017-10-03",
          blood: "O",
          grade: "10",
          element: "26+3"
        },
        {
          tableNum: "3",
          username: "王小虎3",
          goal: "第三次产检",
          idCard: "1302281988092741118",
          age: "29",
          gestational: "26+3",
          pregnant: "2017-10-03",
          blood: "O",
          grade: "10",
          element: "26+3"
        },
        {
          tableNum: "4",
          username: "王小虎4",
          goal: "第三次产检",
          idCard: "1302281988092741118",
          age: "29",
          gestational: "26+3",
          pregnant: "2017-10-03",
          blood: "O",
          grade: "10",
          element: "26+3"
        }
      ],
       currentPage2: 1,
    };
  },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
};
</script>

<style lang="less">
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
.rightContant {
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
      th:nth-child(9) {
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
      td:nth-child(9) {
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
