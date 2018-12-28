<template>
  <div class="setBox">
    <h2 class="setBoxTittle">模板数据维护</h2>
    <div class="setBoxTop clearfix">
      <div class="setBoxTop_left">
        <span class="mgr18">激活状态</span>
        <el-select
         clearable
          v-model="contactsModel"
          placeholder="请选择"
          clear="contactsModel"
          @change='isProhibitSelect'
        >
          <el-option
            v-for="item in contacts"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            popper-class="borderNo"
          >
          </el-option>
        </el-select>
      </div>
      <input
        type="button"
        value="新建模板"
        class="NewdepartmentBtn"
        @click="dialogVisible = true"
      >
    </div>
    <div class="setBoxContant" :class="{'active':backActtive}">
      <img
        src="../../assets/noDataIcon.png"
        alt="暂无数据"
        class="noDataIcon"
        v-show='imgShow'
      >
      <div
        class="hideBox"
        v-show='tableShow'
      >
        <el-table
          :data="officeTableData"
          style="width: 100%"
        >
          <el-table-column
            prop="id"
            label="序号"
            type="index"
            width="120px"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="科室名称"
            width="150px"
          ></el-table-column>
          <el-table-column
            prop="remarks"
            label="科室描述"
            width="366px"
          >
            <template slot-scope="scope">
              <el-tooltip
                placement="bottom-start"
                effect="light"
              >
                <div
                  slot="content"
                  style="width:300px;display:block;word-break: break-all;word-wrap:break-word;"
                >{{ scope.row.remarks }}</div>
                <span style=" width:248px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{ scope.row.remarks }}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column
            prop="isProhibit"
            label="状态"
            width="112px"
          >
            <template slot-scope="scope">
              <div v-show="scope.row.isProhibit == 0">未激活</div>
              <div v-show="scope.row.isProhibit == 1">激活</div>
            </template>
          </el-table-column>
          <el-table-column
            prop="createDate"
            label="添加时间"
            width="154px"
          ></el-table-column>
          <el-table-column
            prop="officeOperate"
            label="操作"
            width="74px"
          >
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                style="text-align: center;"
                @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 分页 -->
        <div
          class="setBoxBlock"
          style="margin-top:30px; text-align:center;"
        >
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPageOfice"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="cur_page"
            layout="sizes, prev, pager, next"
            background
            :page-count='pagerCount'
          >
          </el-pagination>
           <span class="total">总共{{total}}人</span>
        </div>
      </div>

    </div>
    <!-- 新增模板弹窗 -->
    <el-dialog
      title="新增模板"
      :visible.sync="dialogVisible"
      width="820px"
      :before-close="handleClose"
      class="newlyLayer"
           @opened = 'banSliding'
        @closed = 'allowSliding'
    >
      <div class="addTemplateLayer">
        <div class="addTemplateLayer_top">
          <div class="clearfix">
            <div class="fl modolNameBox">
              <p>模板名称</p>
              <el-input
                v-model="form1.name"
                placeholder="请输入模板名称"
              ></el-input>
            </div>
            <div class="fr activatedBox">
              <p>激活状态</p>
              <el-select
                v-model="form1.isProhibit"
                placeholder="请选择"
                size='100%'
              >
                <el-option
                  v-for="item in contacts"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="mgt22">
            <p class="clearfix">模板描述<span>（可不填）</span><span class="fr">{{remnant}}/100</span></p>
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 10}"
              placeholder="输入模板描述......."
              v-model="form1.remarks"
              maxlength='100'
              @input="descInput"
            >
            </el-input>
          </div>
        </div>
        <div class="addTemplateLayer_bottom">
          <p class="clearfix">自觉不适<span class="fr">{{remnantFont}}/2000</span></p>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 10}"
            placeholder="输入模板自觉不适描述......."
            v-model="form1.malaise"
            maxlength='2000'
            @input="descInput2"
          >
          </el-input>
          <p class="clearfix">指导处理意见<span class="fr">{{opinion}}/2000</span></p>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 10}"
            placeholder="输入模板指导处理意见描述......."
            v-model="form1.dispose"
            maxlength='2000'
            @input="descInput3"
          >
          </el-input>
        </div>
      </div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="templateInsert"
        >确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑模板弹框 -->
    <el-dialog
      title="编辑模板"
      :visible.sync="dialogVisible2"
      width="820px"
      :before-close="handleClose2"
      class="newlyLayer"
           @opened = 'banSliding'
        @closed = 'allowSliding'
    >
      <div class="editaddTemplateLayer">
        <div class="addTemplateLayer_top">
          <div class="clearfix">
            <div class="fl modolNameBox">
              <p>模板名称</p>
              <el-input
                v-model="form2.name"
                placeholder="请输入模板名称"
              ></el-input>
            </div>
            <div class="fr activatedBox">
              <p>激活状态</p>
              <el-select
                v-model="form2.isProhibit"
                placeholder="请选择"
                size='100%'
              >
                <el-option
                  v-for="item in contacts"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="mgt22">
            <p class="clearfix">模板描述<span>（可不填）</span><span class="fr">{{editremnant}}/100</span></p>
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 10}"
              placeholder="输入模板描述......."
              v-model="form2.remarks"
              maxlength='100'
              @input="editdescInput"
            >
            </el-input>
          </div>
        </div>
        <div class="addTemplateLayer_bottom">
          <p class="clearfix">自觉不适<span class="fr">{{editremnantFont}}/2000</span></p>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 10}"
            placeholder="输入模板自觉不适描述......."
            v-model="form2.malaise"
            maxlength='2000'
            @input="editdescInput2"
          >
          </el-input>
          <p class="clearfix">指导处理意见<span class="fr">{{editopinion}}/2000</span></p>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 10}"
            placeholder="输入模板指导处理意见描述......."
            v-model="form2.dispose"
            maxlength='2000'
            @input="editdescInput3"
          >
          </el-input>
        </div>
      </div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button
          type="primary"
          @click="templateUpdate"
        >确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
export default {
  data() {
    let token1 = window.localStorage.getItem("mayernal-web-token");
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
      officeTableData: [], //模板数据维护数据
      contactsModel: "", //激活状态
      remnant: 100,
      remnantFont: 2000,
      opinion: 2000,
      form1: {
        isProhibit: "", //弹框激活状态
        name: "", //弹框模板名称
        remarks: "", //模板描述
        malaise: "", //自觉不适
        dispose: "", //指导与处理意见
        token: token1 //token
      },
      form2: {
        id: "",
        isProhibit: "", //弹框激活状态
        name: "", //弹框模板名称
        remarks: "", //模板描述
        malaise: "", //自觉不适
        dispose: "", //指导与处理意见
        token: token1 //token
      },
      editremnant: 100,
      editremnantFont: 2000,
      editopinion: 2000,
      dialogVisible: false,
      dialogVisible2: false,
      tableShow: false,
      imgShow: false,
       backActtive:false,
      currentPageOfice: 1, //页码
      cur_page: 10, //分页条数
      pagerCount: 0, //总页数
      total:"" //总人数
    };
  },
  mounted() {
    this.templateFindList();
  },
  methods: {
    handleSizeChange(val) {
      this.currentPageOfice = 1;
      this.templateFindList();
    },
    handleCurrentChange(val) {
      this.templateFindList();
    },
    descInput() {
      var txtVal = this.form1.remarks.length;
      this.remnant = 100 - txtVal;
    },
    descInput2() {
      var remnantFontVal = this.form1.malaise.length;
      this.remnantFont = 2000 - remnantFontVal;
    },
    descInput3() {
      var opinionVal = this.form1.dispose.length;
      this.opinion = 2000 - opinionVal;
    },
    editdescInput() {
      var edittxtVal = this.form2.remarks.length;
      this.editremnant = 100 - edittxtVal;
    },
    editdescInput2() {
      var editremnantFontVal = this.form2.malaise.length;
      this.editremnantFont = 2000 - editremnantFontVal;
    },
    editdescInput3() {
      var editopinionVal = this.form2.dispose.length;
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
    },
    // 激活状态查询
    isProhibitSelect() {
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.templateFindList();
    },
    // 查询
    templateFindList() {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .templateFindList({
          token: token1,
          pageNum: this.currentPageOfice,
          pageSize: this.cur_page,
          isProhibit: this.contactsModel
        })
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            self.officeTableData = res.pcTemplateBeanList;
            self.pagerCount = parseInt(res.pages);
            self.imgShow = false;
            self.tableShow = true;
            self.backActtive = false;
              self.total =res.total;
          } else if (res.status === "20209") {
            self.officeTableData = [];
            self.tableShow = false;
            self.imgShow = true;
              self.backActtive = true;
          } else {
            this.$message.error("查询失败，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("查询失败，请稍后重试");
        });
    },
    //新建
    templateInsert() {
      if (this.form1.name == "") {
        this.$message({
          showClose: true,
          message: "模板名称不能为空",
          type: "warning"
        });
      } else if (this.form1.isProhibit == "") {
        this.$message({
          showClose: true,
          message: "请选择激活状态",
          type: "warning"
        });
      } else if (this.form1.malaise == "") {
        this.$message({
          showClose: true,
          message: "自觉不适不能为空",
          type: "warning"
        });
      } else if (this.form1.dispose == "") {
        this.$message({
          showClose: true,
          message: "指导处理意见不能为空",
          type: "warning"
        });
      } else {
        let self = this;
        this.$api
          .templateInsert(this.form1)
          .then(res => {
            console.log(res);
            if (res.status === "20200") {
               this.$message.success("新增成功");
              this.templateFindList();
              this.form1.name = "";
              this.form1.malaise = "";
              this.form1.dispose = "";
              this.form1.remarks = "";
              this.form1.isProhibit = "";
              this.dialogVisible = false;
            }  else {
              this.$message.error("新增失败，请稍后重试");
            }
          })
          .catch(error => {
            this.$message.error("新增失败，请稍后重试");
          });
      }
    },

    handleEdit(index, row) {
      let token1 = localStorage.getItem("mayernal-web-token");
      this.dialogVisible2 = true;
      this.form2 = JSON.parse(JSON.stringify(row));
      this.form2.token = token1;
      console.log(this.form2);
      console.log(this.form1);
    },
    // 修改
    templateUpdate() {
      if (this.form2.name == "") {
        this.$message({
          showClose: true,
          message: "模板名称不能为空",
          type: "warning"
        });
      } else if (this.form2.isProhibit == "") {
        this.$message({
          showClose: true,
          message: "请选择激活状态",
          type: "warning"
        });
      } else if (this.form2.malaise == "") {
        this.$message({
          showClose: true,
          message: "自觉不适不能为空",
          type: "warning"
        });
      } else if (this.form2.dispose == "") {
        this.$message({
          showClose: true,
          message: "指导处理意见不能为空",
          type: "warning"
        });
      } else {
        let self = this;
        this.$api
          .templateUpdate(this.form2)
          .then(res => {
            console.log(res);
            if (res.status === "20200") {
               this.$message.success("编辑成功");
              this.templateFindList();
              this.dialogVisible2 = false;
            }else {
              this.$message.error("编辑失败，请稍后重试");
            }
          })
          .catch(error => {
            this.$message.error("编辑失败，请稍后重试");
          });
      }
    },           // 禁止滑动
    banSliding(){
    document.documentElement.style.overflow='hidden';
    },
    // 允许滑动
    allowSliding(){
       document.documentElement.style.overflow='scroll';
    },
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
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
  }
  .setBoxContant {
    .hideBox {
    padding-bottom:30px;
    .setBoxBlock{
        height: 30px;
        line-height: 30px;
        div {
          display: inline-block;
        }
    }
    }
    table {
      width: 100%;
    }
  }
    .active{
    background-color: #fcfcfc;
  }

  .noDataIcon {
    width: 153px;
    height: 141px;
    position: absolute;
    top: 50%;
    left: 50%;
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
  display: inline-block;
  position: relative;
  .el-input__inner{
  background-color: #f6f6f6;

  }
}
.el-select-dropdown__item.selected {
  color: #68b6e7;
}
.setBox .el-input--suffix .el-input__inner {
  padding-right: 30px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #f6f6f6;

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
      border-radius: 4px;
    }
    .el-textarea__inner:focus {
      border-color: #68b6e7;
    }
  }
  .el-textarea__inner {
    border-radius: 4px;
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
  .el-table .cell {
  }
  .el-table--enable-row-transition .el-table__body td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #68b6e7;
  }
  .el-button--text {
    color: #68b6e7;
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
      padding-right: 118px;
      .el-table .cell {
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
  width: 100%;
  background-color: #fff;
  margin-top: 10px;
}
</style>
