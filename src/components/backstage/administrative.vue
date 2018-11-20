<template>
  <div class="administrativeBox">
    <h2 class="administrativeBoxTittle">科室信息维护</h2>
    <div class="administrativeBoxTop clearfix">
      <div class="administrativeBoxTop_left">
        <span class="mgr18">激活状态</span>
        <el-select v-model="contactsModel" placeholder="请选择" clear="contactsModel">
          <el-option v-for="item in contacts" :key="item.value" :label="item.label" :value="item.value" popper-class="borderNo">
          </el-option>
        </el-select>
      </div>
      <input type="button" value="新建科室" class="NewdepartmentBtn">
    </div>
    <div class="administrativeBoxContant">
      <img src="../../assets/noDataIcon.png" alt="暂无数据" class="noDataIcon">
      <el-table :data="officeTableData" style="width: 100%">
        <el-table-column prop="officeNum" label="序号" width="120px"></el-table-column>
        <el-table-column prop="officeName" label="科室名称" width="150px"></el-table-column>
        <el-table-column prop="officeDescribe" label="科室描述" width="366px">
        </el-table-column>
        <el-table-column prop="officeState" label="状态" width="112px"></el-table-column>
        <el-table-column prop="officeAddTime" label="添加时间" width="154px"></el-table-column>
        <el-table-column prop="officeOperate" label="操作" width="74px">
          <template slot-scope="scope">
            <el-button type="text" size="small" style="text-align: center;">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="administrativeBoxBlock" style="margin-top:30px; text-align:center;">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPageOfice" :page-sizes="[7, 14, 21, 28]" :page-size="100" layout="sizes, prev, pager, next" :total="1000" background>
        </el-pagination>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      // 激活状态
      contacts: [
        {
          value: "0",
          label: "未激活"
        },
        {
          value: "1",
          label: "已激活"
        }
      ],
      officeTableData: [
        {
          officeNum: "1",
          officeName: "妇产科-门诊",
          officeDescribe: "孕产妇-住院或是间距备注设大二大所我...",
          officeState: "已激活",
          officeAddTime: "2018-10-22"
        },
        {
          officeNum: "2",
          officeName: "妇产科-门诊",
          officeDescribe: "这里限制字数在18个之内，超出......表示",
          officeState: "已激活",
          officeAddTime: "2018-10-22"
        },
        {
          officeNum: "3",
          officeName: "妇产科-门诊",
          officeDescribe: "这里限制字数在18个之内，超出......表示",
          officeState: "已激活",
          officeAddTime: "2018-10-22"
        },
        {
          officeNum: "4",
          officeName: "妇产科-门诊",
          officeDescribe: "这里限制字数在18个之内，超出......表示",
          officeState: "已激活",
          officeAddTime: "2018-10-22"
        }
      ],
      contactsModel: "", //激活状态
      currentPageOfice: 1
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
.mgr18 {
  margin-right: 18px;
}
.administrativeBox {
  position: relative;
  width: 100%;
  min-height: 600px;
  background-color: #fff;
  .administrativeBoxTittle {
    display: block;
    width: 100%;
    background-color: #fbfbfb;
    padding: 24px 24px 24px 24px;
    font-size: 18px;
    color: #333333;
  }
  .administrativeBoxTop {
    padding: 24px;
    span {
      color: #666666;
    }
  }
  .administrativeBoxTop_left {
    float: left;
  }
  .NewdepartmentBtn {
    float: right;
    width: 99px;
    height: 36px;
    background-color: #68b6e7;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
  }
  .administrativeBoxContant {
    table {
      width: 100%;
    }
  }

  .noDataIcon {
    width: 153px;
    height: 141px;
    position: absolute;
    top: 70%;
    left: 50%;
    display: none;
    transform: translate(-50%, -50%);
  }
}
</style>
<style lang='less'>
.administrativeBox .administrativeBoxTop_left .el-select {
  width: 128px;
  height: 32px;
  background-color: #f6f6f6;
  display: inline-block;
  position: relative;
}
.el-select-dropdown__item.selected {
  color: #68b6e7;
}
.administrativeBox .el-input--suffix .el-input__inner {
  padding-right: 30px;
  border-radius: 10px;
}
.administrativeBox .area-select.large {
  width: 160px;
  height: 40px;
  line-height: 40px;
  border: none;
}
// 右侧下面块
.administrativeBoxContant {
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
</style>


