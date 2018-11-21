<template>
  <div class="setBox">
    <h2 class="setBoxTittle">模板数据维护</h2>
    <div class="setBoxTop clearfix">
      <div class="setBoxTop_left">
        <span class="mgr18">激活状态</span>
        <el-select v-model="contactsModel" placeholder="请选择" clear="contactsModel">
          <el-option v-for="item in contacts" :key="item.value" :label="item.label" :value="item.value" popper-class="borderNo">
          </el-option>
        </el-select>
      </div>
      <input type="button" value="新建模板" class="NewdepartmentBtn" @click="dialogVisible = true">
    </div>
    <div class="setBoxContant">
      <img src="../../assets/noDataIcon.png" alt="暂无数据" class="noDataIcon">
      <el-table :data="officeTableData" style="width: 100%">
        <el-table-column prop="officeNum" label="序号" width="120px"></el-table-column>
        <el-table-column prop="officeName" label="模板名称" width="150px"></el-table-column>
        <el-table-column prop="officeDescribe" label="模板描述" width="366px" style="padding-right:100px">
          <template slot-scope="scope">
            <el-tooltip placement="bottom-start" effect="light">
              <div slot="content" style="width:300px;display:block;word-break: break-all;word-wrap:break-word;">{{ scope.row.officeDescribe }}</div>
              <span style=" width:248px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{ scope.row.officeDescribe }}</span>
            </el-tooltip>
            <!-- <el-tooltip :content= scope.row.officeDescribe   placement="bottom" effect="light">
							<div>{{ scope.row.officeDescribe }}</div>
                     </el-tooltip> -->
          </template>
        </el-table-column>
        <el-table-column prop="officeState" label="状态" width="112px"></el-table-column>
        <el-table-column prop="officeAddTime" label="添加时间" width="154px"></el-table-column>
        <el-table-column prop="officeOperate" label="操作" width="74px">
          <template slot-scope="scope">
            <el-button type="text" size="small" style="text-align: center;" @click="dialogVisible2 = true">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="setBoxBlock" style="margin-top:30px; text-align:center;">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPageOfice" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="sizes, prev, pager, next" :total="1000" background>
        </el-pagination>
      </div>
    </div>
    <!-- 新增模板弹窗 -->
    <el-dialog title="新增模板" :visible.sync="dialogVisible" width="820px" :before-close="handleClose" class="newlyLayer">
      <div class="addTemplateLayer">
        <div class="addTemplateLayer_top">
          <div class="clearfix">
            <div class="fl modolNameBox">
              <p>模板名称</p>
              <el-input v-model="templateName" placeholder="请输入模板名称"></el-input>
            </div>
            <div class="fr activatedBox">
              <p>激活状态</p>
              <el-select v-model="activatedStateModel" placeholder="请选择" size='100%'>
                <el-option v-for="item in activatedState" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="mgt22">
            <p class="clearfix">模板描述<span>（可不填）</span><span class="fr">{{remnant}}/100</span></p>
            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="输入模板描述......." v-model="templateDscription" maxlength='100' @input="descInput">
            </el-input>
          </div>
        </div>
        <div class="addTemplateLayer_bottom">
          <p class="clearfix">自觉不适<span class="fr">{{remnantFont}}/2000</span></p>
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="输入模板自觉不适描述......." v-model="remnantFontContant" maxlength='2000' @input="descInput2">
          </el-input>
          <p class="clearfix">指导处理意见<span class="fr">{{opinion}}/2000</span></p>
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="输入模板指导处理意见描述......." v-model="opinionModel" maxlength='2000' @input="descInput3">
          </el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑模板弹框 -->
    <el-dialog title="编辑模板" :visible.sync="dialogVisible2" width="820px" :before-close="handleClose2" class="newlyLayer">
      <div class="editaddTemplateLayer">
        <div class="addTemplateLayer_top">
          <div class="clearfix">
            <div class="fl modolNameBox">
              <p>模板名称</p>
              <el-input v-model="edittemplateName" placeholder="请输入模板名称"></el-input>
            </div>
            <div class="fr activatedBox">
              <p>激活状态</p>
              <el-select v-model="editactivatedStateModel" placeholder="请选择" size='100%'>
                <el-option v-for="item in editactivatedState" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="mgt22">
            <p class="clearfix">模板描述<span>（可不填）</span><span class="fr">{{editremnant}}/100</span></p>
            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="输入模板描述......." v-model="edittemplateDscription" maxlength='100' @input="editdescInput">
            </el-input>
          </div>
        </div>
        <div class="addTemplateLayer_bottom">
          <p class="clearfix">自觉不适<span class="fr">{{editremnantFont}}/2000</span></p>
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="输入模板自觉不适描述......." v-model="editremnantFontContant" maxlength='2000' @input="editdescInput2">
          </el-input>
          <p class="clearfix">指导处理意见<span class="fr">{{editopinion}}/2000</span></p>
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="输入模板指导处理意见描述......." v-model="editopinionModel" maxlength='2000' @input="editdescInput3">
          </el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
      </span>
    </el-dialog>

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
      activatedState: [
        {
          value: "0",
          label: "未激活"
        },
        {
          value: "1",
          label: "已激活"
        }
      ],
      editactivatedState: [
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
          officeDescribe:
            "孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我.孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我.孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我.孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我孕产妇-住院或是间距备注设大二大所我.",
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
      activatedStateModel: "", //弹框激活状态
      templateName: "", //弹框模板名称
      templateDscription: "", //模板描述
      remnantFontContant: "", //自觉不适
      opinionModel: "", //指导与处理意见
      currentPageOfice: 1,
      remnant: 100,
      remnantFont: 2000,
      opinion: 2000,

      editactivatedStateModel: "", //弹框激活状态
      edittemplateName: "", //弹框模板名称
      edittemplateDscription: "", //模板描述
      editremnantFontContant: "", //自觉不适
      editopinionModel: "", //指导与处理意见
      editcurrentPageOfice: 1,
      editremnant: 100,
      editremnantFont: 2000,
      editopinion: 2000,
      dialogVisible: false,
      dialogVisible2: false
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    descInput() {
      var txtVal = this.templateDscription.length;
      this.remnant = 100 - txtVal;
    },
    descInput2() {
      var remnantFontVal = this.remnantFontContant.length;
      this.remnantFont = 2000 - remnantFontVal;
    },
    descInput3() {
      var opinionVal = this.opinionModel.length;
      this.opinion = 2000 - opinionVal;
    },
    editdescInput() {
      var edittxtVal = this.edittemplateDscription.length;
      this.editremnant = 100 - edittxtVal;
    },
    editdescInput2() {
      var editremnantFontVal = this.editremnantFontContant.length;
      this.editremnantFont = 2000 - editremnantFontVal;
    },
    editdescInput3() {
      var editopinionVal = this.editopinionModel.length;
      this.editopinion = 2000 - editopinionVal;
    },
    //切换"记住密码"样式
    toggleClass(event) {
      this.isActive = !this.isActive;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleClose2(done) {
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
.fl {
  float: left;
}
.fr {
  float: right;
}
.mgt22 {
  margin-top: 22px;
}
.mgt106 {
  margin-top: 106px;
}
.mgr18 {
  margin-right: 18px;
}
.setBox {
  position: relative;
  width: 100%;
  min-height: 600px;
  background-color: #fff;
  .setBoxTittle {
    display: block;
    width: 100%;
    background-color: #fbfbfb;
    padding: 24px 24px 24px 24px;
    font-size: 18px;
    color: #333333;
  }
  .setBoxTop {
    padding: 24px;
    span {
      color: #666666;
    }
  }
  .setBoxTop_left {
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
  .setBoxContant {
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
  // 新增模板弹框
  .addTemplateLayer {
    // width: 820px;
    .addTemplateLayer_top {
      padding: 24px 38px;
      border-bottom: 1px solid #ccc;
      p {
        margin-bottom: 14px;
        font-size: 14px;
        color: #666666;
        span {
          font-size: 12px;
          color: #cccccc;
        }
      }
      .modolNameBox {
        width: 298px;
      }
    }
    .addTemplateLayer_bottom {
      padding: 4px 38px;
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
  .editaddTemplateLayer {
    // width: 820px;
    .addTemplateLayer_top {
      padding: 24px 38px;
      border-bottom: 1px solid #ccc;
      p {
        margin-bottom: 14px;
        font-size: 14px;
        color: #666666;
        span {
          font-size: 12px;
          color: #cccccc;
        }
      }
      .modolNameBox {
        width: 298px;
      }
    }
    .addTemplateLayer_bottom {
      padding: 4px 38px;
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
}
</style>
<style lang='less'>
.setBox .setBoxTop_left .el-select {
  width: 128px;
  height: 32px;
  background-color: #f6f6f6;
  display: inline-block;
  position: relative;
}
.el-select-dropdown__item.selected {
  color: #68b6e7;
}
.setBox .el-input--suffix .el-input__inner {
  padding-right: 30px;
  border-radius: 10px;
  border: 1px solid #ccc;
}
.setBox .area-select.large {
  width: 160px;
  height: 40px;
  line-height: 40px;
  border: none;
}
.setBox {
  .modolNameBox {
    .el-input__inner {
      border-radius: 8px;
    }
    .el-textarea__inner:focus {
      border-color: #68b6e7;
    }
  }
  .el-textarea__inner {
    border-radius: 8px;
    border: 1px solid #ccc;
  }
  .el-dialog__header {
    background-color: #ededed;
  }
  .el-dialog__body {
    padding: 0px;
  }
  .dialog-footer {
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
  .el-dialog__footer {
    margin-top: 15px;
  }
}

// 右侧下面块
.setBoxContant {
  .el-table .cell{
  }
  .el-table--enable-row-transition .el-table__body td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
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
    td:nth-child(3) {
      padding-right:118px;
      .el-table .cell{
      width: 248px !important;

      }
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  width: 100%;
  background-color: #fff;
  margin-top: 10px;
  padding-bottom: 30px;
}
</style>


