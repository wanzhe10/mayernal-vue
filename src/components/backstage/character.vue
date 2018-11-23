<template>
  <div class="characterBox">
    <h2 class="characterBoxTittle">科室信息维护</h2>
    <div class="characterBoxTop clearfix">
      <div class="characterBoxTop_left">
        <span class="mgr18">激活状态</span>
        <el-select v-model="characterModel" placeholder="请选择" clear="characterModel">
          <el-option v-for="item in character" :key="item.value" :label="item.label" :value="item.value" popper-class="borderNo">
          </el-option>
        </el-select>
      </div>
      <input type="button" value="新建角色" class="NewdepartmentBtn" @click="dialogVisible = true">
    </div>
    <div class="characterBoxContant">
      <img src="../../assets/noDataIcon.png" alt="暂无数据" class="noDataIcon">
      <div class="hideBox">
        <el-table :data="characterTableData" style="width: 100%">
          <el-table-column prop="characterNum" label="序号" width="120px"></el-table-column>
          <el-table-column prop="characterName" label="角色名称" width="150px"></el-table-column>
          <el-table-column prop="characterDescribe" label="角色描述" width="366px">
            <template slot-scope="scope">
              <el-tooltip placement="bottom-start" effect="light">
                <div slot="content" style="width:300px;display:block;word-break: break-all;word-wrap:break-word;">{{ scope.row.characterDescribe }}</div>
                <span style=" width:248px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{ scope.row.characterDescribe }}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column prop="characterState" label="状态" width="112px"></el-table-column>
          <el-table-column prop="characterAddTime" label="添加时间" width="154px"></el-table-column>
          <el-table-column prop="characterOperate" label="操作" width="74px">
            <template slot-scope="scope">
              <el-button type="text" size="small" style="text-align: center;" @click="editdialogVisible = true">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="characterBoxBlock" style="margin-top:30px; text-align:center;">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPageOfice" :page-sizes="[7, 14, 21, 28]" :page-size="100" layout="sizes, prev, pager, next" :total="1000" background>
          </el-pagination>
        </div>
      </div>

    </div>
    <!-- 新增标签弹框 -->
    <el-dialog title="添加角色" :visible.sync="dialogVisible" width="458px" :before-close="handleClose" class="newlyLayer">
      <p>标签名称</p>
      <el-input v-model="newlyLayerInput" placeholder="请输入报告单名称"></el-input>
      <p>状态</p>
      <el-select v-model="contactsModel" placeholder="请选择" size='100%'>
        <el-option v-for="item in contacts" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <div class="addTemplateLayer_bottom">
        <p class="clearfix">角色描述<span>(可不填)</span><span class="fr">{{remnantFont}}/100</span></p>
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="输入模板自觉不适描述......." v-model="remnantFontContant" maxlength='100' @input="descInput2">
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑标签弹框 -->
    <el-dialog title="编辑角色" :visible.sync="editdialogVisible" width="458px" :before-close="handleClose" class="newlyLayer">
      <p>标签名称</p>
      <el-input v-model="editnewlyLayerInput" placeholder="请输入报告单名称"></el-input>
      <p>状态</p>
      <el-select v-model="editcontactsModel" placeholder="请选择" size='100%'>
        <el-option v-for="item in contacts" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <div class="addTemplateLayer_bottom">
        <p class="clearfix">角色描述<span>(可不填)</span><span class="fr">{{editremnantFont}}/100</span></p>
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="输入模板自觉不适描述......." v-model="editremnantFontContant" maxlength='100' @input="editdescInput2">
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editdialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 激活状态
      character: [
        {
          value: "0",
          label: "未激活"
        },
        {
          value: "1",
          label: "已激活"
        }
      ],

      characterTableData: [
        {
          characterNum: "1",
          characterName: "妇产科-门诊",
          characterDescribe:
            "孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我...",
          characterState: "已激活",
          characterAddTime: "2018-10-22"
        },
        {
          characterNum: "2",
          characterName: "妇产科-门诊",
          characterDescribe: "这里限制字数在18个之内，超出......表示",
          characterState: "已激活",
          characterAddTime: "2018-10-22"
        },
        {
          characterNum: "3",
          characterName: "妇产科-门诊",
          characterDescribe: "这里限制字数在18个之内，超出......表示",
          characterState: "已激活",
          characterAddTime: "2018-10-22"
        },
        {
          characterNum: "4",
          characterName: "妇产科-门诊",
          characterDescribe: "这里限制字数在18个之内，超出......表示",
          characterState: "已激活",
          characterAddTime: "2018-10-22"
        }
      ],
      characterModel: "", //激活状态
      currentPageOfice: 1,
      // 新建角色状态
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
      contactsModel: "", //新增标签状态
      dialogVisible: false,
      newlyLayerInput: "",
      remnantFont: 100,
      remnantFontContant: "", //角色描述

      editcontactsModel: "",
      editdialogVisible: false,
      editnewlyLayerInput: "",
      editremnantFont: 100,
      editremnantFontContant: "" //角色描述
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    descInput2() {
      var remnantFontVal = this.remnantFontContant.length;
      this.remnantFont = 100 - remnantFontVal;
    },
    editdescInput2() {
      var editremnantFontContant = this.editremnantFontContant.length;
      this.remnantFont = 100 - editremnantFontContant;
    },

    // 弹框右上角关闭按钮
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style lang="less" scoped>
.mgr18 {
  margin-right: 18px;
}
.characterBox {
  position: relative;
  width: 100%;
  min-height: 600px;
  background-color: #fff;
  .characterBoxTittle {
    display: block;
    width: 100%;
    background-color: #fbfbfb;
    padding: 24px 24px 24px 24px;
    font-size: 18px;
    color: #333333;
  }
  .characterBoxTop {
    padding: 24px;
    span {
      color: #666666;
    }
  }
  .characterBoxTop_left {
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
  .characterBoxContant {
    position: relative;
    table {
      width: 100%;
    }
  }
  .hideBox {
    // display: none;
  }
  .noDataIcon {
    width: 153px;
    height: 141px;
    position: absolute;
    top: 50%;
    left: 50%;
    display: none;
    z-index: 111;
    transform: translate(-50%, -50%);
  }

  // 新增模板弹框
  .addTemplateLayer_bottom {
    p {
      margin-top: 14px;
      margin-bottom: 14px;
      font-size: 14px;
      color: #666666;
      span {
        font-size: 12px;
        color: #cccccc;
      }
    }
  }
}
</style>
<style lang="less">
.characterBox .characterBoxTop_left .el-select {
  width: 128px;
  height: 32px;
  background-color: #f6f6f6;
  display: inline-block;
  position: relative;
}
.el-select-dropdown__item.selected {
  color: #68b6e7;
}
.characterBox .el-input--suffix .el-input__inner {
  padding-right: 30px;
  border-radius: 10px;
}
.characterBox .area-select.large {
  width: 160px;
  height: 40px;
  line-height: 40px;
  border: none;
}
// 右侧下面块
.characterBoxContant {
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
.characterBox {
  .el-dialog__body {
    padding: 0px 34px;
    .el-input__inner {
      border: 1px solid #ccc;
      border-radius: 8px;
      background-color: #f6f6f6;
    }
    .el-select {
      width: 100%;
    }
    p {
      margin: 16px 0px;
    }
  }
  .el-textarea__inner {
    border-radius: 8px;
    border: 1px solid #ccc;
  }
  .el-dialog__header {
    background-color: #ededed;
  }
  .el-dialog__footer {
    padding: 15px 36px;
    overflow: hidden;
    .el-button--default {
      float: left;
      width: 122px;
      height: 40px;
      background-color: #cccccc;
      color: #999999;
    }
    .el-button--primary {
      width: 122px;
      height: 40px;
      background-color: #68b6e7;
      color: #fff;
    }
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #68b6e7;
  }
  .el-button--text {
    color: #68b6e7;
  }
  .el-table--enable-row-transition .el-table__body td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  tbody td:nth-child(3) {
    padding-right: 118px;
  }
}
</style>


