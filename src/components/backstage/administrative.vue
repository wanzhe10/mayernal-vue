<template>
  <div class="administrativeBox">
    <h2 class="administrativeBoxTittle">科室信息维护</h2>
    <div class="administrativeBoxTop clearfix">
      <div class="administrativeBoxTop_left">
        <span class="mgr18">激活状态</span>
        <el-select
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
        value="新建科室"
        class="NewdepartmentBtn"
        @click="dialogVisible = true"
      >
    </div>
    <div class="administrativeBoxContant">
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
          class="administrativeBoxBlock"
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

    <!-- 新增标签弹框 -->
    <el-dialog
      title="新建科室"
      :visible.sync="dialogVisible"
      width="458px"
      :before-close="handleClose"
      class="newlyLayer"
    >
      <el-form :model="form">
        <el-form-item label="科室名称">
          <el-input
            v-model="form.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="激活状态">
          <el-select
            v-model="form.isProhibit"
            placeholder="请选择"
          >
            <el-option
              label="未激活"
              value="0"
            ></el-option>
            <el-option
              label="激活"
              value="1"
            ></el-option>
          </el-select>
        </el-form-item>
        <div class="addTemplateLayer_bottom">
          <p class="clearfix">科室描述<span>(可不填)</span><span class="fr">{{form.remnantFont}}/100</span></p>
          <el-form-item label="">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 10}"
              placeholder="输入模板自觉不适描述......."
              v-model="form.remarks"
              maxlength='100'
              @input="descInput2"
            >
            </el-input>
          </el-form-item>
        </div>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="radioEvent()"
        >确 定</el-button>
      </div>
    </el-dialog>

    <!-- 编辑标签弹框 -->
    <el-dialog
      title="编辑科室"
      :visible.sync="editdialogVisible"
      width="458px"
      :before-close="handleClose"
      class="newlyLayer"
    >
      <el-form :model="form2">
        <el-form-item label="科室名称">
          <el-input
            v-model="form2.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="激活状态">
          <el-select
            v-model="form2.isProhibit"
            placeholder="请选择"
          >
            <el-option
              label="未激活"
              value="0"
            ></el-option>
            <el-option
              label="激活"
              value="1"
            ></el-option>
          </el-select>
        </el-form-item>
        <div class="addTemplateLayer_bottom">
          <p class="clearfix">科室描述<span>(可不填)</span><span class="fr fontNum">{{form2.editremnantFont}}/100</span></p>
          <el-form-item label="">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 10}"
              placeholder="输入模板自觉不适描述......."
              v-model="form2.remarks"
              maxlength='100'
              @input="editdescInput2"
            >
            </el-input>
          </el-form-item>
        </div>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="editdialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="editRadioBtn()"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    let token1 = window.localStorage.getItem("token");
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
          id: "",
          name: "",
          remarks: "",
          isProhibit: "",
          createDate: ""
        }
      ],
      contactsModel: "",
      dialogVisible: false, //新建按钮弹框
      editdialogVisible: false, // 编辑按钮弹框
      tableShow: false,
      imgShow: false,
      // 新建科室
      form: {
        isProhibit: "", //激活状态
        name: "", //科室名称
        remnantFont: "",
        remarks: "", //角色描述
        token: token1 //token
      },

      // 编辑科室
      form2: {
        isProhibit: "",
        name: "",
        editremnantFont: "",
        remarks: "", //角色描述
        token: token1 //token
      },
      currentPageOfice: 1, //分页
      cur_page: 10, //分页
      pagerCount: 3 //分页
    };
  },
  mounted() {
    let token1 = window.localStorage.getItem("token");
    this.getUser(token1, 1, 10);
  },
  methods: {
    handleSizeChange(val) {
      let token1 = window.localStorage.getItem("token");
      console.log(`每页 ${val} 条`);
      this.currentPageOfice = 1;
      this.getUser(token1, 1, `${val}`);
    },
    handleCurrentChange(val) {
      let token1 = window.localStorage.getItem("token");
      console.log(`当前页: ${val}`);
      this.currentPageOfice = val;
      this.getUser(token1, `${val}`, this.cur_page);
    },
    descInput2() {
      var remnantFontVal = this.form.remarks.length;
      this.form.remnantFont = 100 - remnantFontVal;
    },
    editdescInput2() {
      var remarks2 = this.form2.remarks.length;
      this.form2.editremnantFont = 100 - remarks2;
    },

    // 弹框右上角关闭按钮
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    // 查询
    getUser(token, pageNum, pageSize, isProhibit) {
      let self = this;
      let token1 = window.localStorage.getItem("token");
      this.$api
        .deptSimpleFindList({
          token: token1,
          pageNum: pageNum,
          pageSize: pageSize,
          isProhibit: isProhibit
        })
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.officeTableData = res.pcDeptSimpleBeanList;
            console.log(this.officeTableData);
            this.pagerCount = res.pageNum;
            self.imgShow = false;
            self.tableShow = true;
          } else if (res.status === "20209") {
            self.tableShow = false;
            self.imgShow = true;
          }
        })
        .catch(error => {
           this.$message.error('查询错误，请稍后重试');
        });
    },
    // 激活状态查询
    isProhibitSelect() {
      let token1 = window.localStorage.getItem("token");
      this.getUser(token1, 1, 10, this.contactsModel);
    },
    // 新建
    radioEvent() {
      if (this.form.name == "") {
        this.$message({
          showClose: true,
          message: "科室名称不能为空",
          type: "warning"
        });
      } else if (this.form.isProhibit == "") {
        this.$message({
          showClose: true,
          message: "请选择激活状态",
          type: "warning"
        });
      } else {
        var token = localStorage.getItem("token");
        console.log(this.form);
        this.$api
          .deptSimpleInsert(this.form)
          .then(res => {
            if (res.status === "20200") {
              //  console.log('成功')
              this.dialogVisible = false;
              console.log(res);
              getUser(token, 1, pageSize);
            } else {
              // this.$Message.info(res.desc);
            }
          })
          .catch(error => {
            // this.$Message.info(error);
          });
      }
    },
    // 编辑
    handleEdit(index, row) {
      this.editdialogVisible = true;
      this.form2 = JSON.parse(JSON.stringify(row));
      console.log(this.form2);
    },
    // 编辑确认按钮
    editRadioBtn() {
      if (this.form2.name == "") {
        this.$message({
          showClose: true,
          message: "科室名称不能为空",
          type: "warning"
        });
      } else {
        var token = localStorage.getItem("token");
        var self = this;
        this.$api
          .deptSimpleUpdate({
            id: this.form2.id,
            token: token,
            isProhibit: this.form2.isProhibit,
            remarks: this.form2.remarks,
            name: this.form2.name
          })
          .then(res => {
            if (res.status === "20200") {
              console.log("成功");
              // console.log(res);
              this.editdialogVisible = false;
              this.getUser(token, 1, self.cur_page);
            } else {
              // this.$Message.info(res.desc);
            }
          })
          .catch(error => {
            // this.$Message.info(error);
          });
      }
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
    .hideBox {
      // display: none;
    }
    table {
      width: 100%;
    }
  }

  .noDataIcon {
    width: 153px;
    height: 141px;
    position: absolute;
    top: 50%;
    left: 50%;
    // display: none;
    z-index: 111;
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
.administrativeBox {
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


