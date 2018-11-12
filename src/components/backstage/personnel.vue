<template>
	<div class="personnelBox">
		<div class="personnelBox_top clearfix">
			<div class="btnsBOx">
				<div class="newBtn">新建人员</div>
			</div>
			<div class="selectBox clearfix">
				<div class="pdl20 fl w170">
					<p>激活状态</p>
					<el-select v-model="contactsModel" placeholder="请选择" class="recordSelect">
						<el-option size='126px' v-for="item in contacts" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="assess fl w180">
					<p>科室</p>
					<el-select v-model="value2" placeholder="请选择" class="assessSelect">
						<el-option size='126px' v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="fl w154">
					<p>用户角色</p>
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
		<div class="personnelBox_bottom">
			<img src="../../assets/noDataIcon.png" alt="暂无数据" class="noDataIcon">
			<el-table :data="personnelableData" style="width: 100%">
				<el-table-column prop="personnelNum" label="序号" width="112px"></el-table-column>
				<el-table-column prop="personnelName" label="姓名" width="148px"></el-table-column>
				<el-table-column prop="personnelPhone" label="手机号" width="178px"></el-table-column>
				<el-table-column prop="personnelOffice" label="科室" width="178px"></el-table-column>
				<el-table-column prop="personnelUser" label="用户角色" width="164px"></el-table-column>
				<el-table-column prop="personnelState" label="状态" width="128px"></el-table-column>
				<el-table-column prop="personnelOperate" label="操作" width="70px">
					<template slot-scope="scope">
						<el-button type="text" size="small" style="text-align: center;">编辑</el-button>
					</template>
				</el-table-column>
			</el-table>
			<!-- 分页 -->
			<div class="administrativeBoxBlock" style="margin-top:30px; text-align:center;">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPagePersonnel" :page-sizes="[7, 14, 21, 28]" :page-size="100" layout="sizes, prev, pager, next" :total="1000" background>
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
      contacts: [
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
      personnelableData: [
        {
          personnelNum: "1",
          personnelName: "周晓晓1",
          personnelPhone: "13511111111.",
          personnelOffice: "孕产妇-住院",
          personnelUser: "主治医生",
          personnelState: "已激活"
        },
        {
          personnelNum: "2",
          personnelName: "周晓晓2",
          personnelPhone: "13511111111",
          personnelOffice: "孕产妇-住院",
          personnelUser: "主治医生",
          personnelState: "已激活"
        },
        {
          personnelNum: "3",
          personnelName: "周晓晓3",
          personnelPhone: "13511111111",
          personnelOffice: "孕产妇-住院",
          personnelUser: "主治医生",
          personnelState: "已激活"
        },
        {
          personnelNum: "4",
          personnelName: "周晓晓4",
          personnelPhone: "13511111111",
          personnelOffice: "孕产妇-住院",
          personnelUser: "主治医生",
          personnelState: "已激活"
        }
      ],

      contactsModel: "",
      value2: "",
      value3: "",
      fileSearch: "",
      currentPagePersonnel: 1
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="less" scoped>
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
.personnelBox {
  width: 100%;
  min-height: 600px;

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
  .btnsBOx {
    width: 160px;
    height: 100px;
    float: left;
    position: relative;
  }
  .inquireBtn {
    margin-top: 20px;
    background-color: #68b6e7 !important;
    border: none;
    margin-top: 20px;
  }
  .personnelBox_bottom {
    position: relative;
    margin-top: 12px;
    background-color: #fff;
    width: 100%;
    min-height: 500px;
    .noDataIcon {
      width: 153px;
      height: 141px;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
    }
  }
}
</style>
<style lang="less">
.personnelBox {
  .personnelBox_top {
    background-color: #fff;
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
    }
  }
  // 右侧下面块
  .personnelBox_bottom {
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


