<template>
  <div class="personnelBox">
    <div class="personnelBox_top clearfix">
      <div class="btnsBOx">
        <div
          class="newBtn"
          @click="dialogVisible = true"
        >新建人员</div>
      </div>
      <div class="selectBox clearfix">
        <div class="pdl20 fl w170">
          <p>激活状态</p>
          <el-select
          clearable
            v-model="contactsModel"
            placeholder="请选择"
            class="recordSelect"
            @change='isProhibitSelect'
          >
            <el-option
              size='126px'
              v-for="item in contacts"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="assess fl w180">
          <p>科室</p>
          <el-select
          clearable
            v-model="value2"
            placeholder="请选择"
            class="assessSelect"
            @change="officeInquire"
          >
            <el-option
              size='126px'
              v-for="(item,index) in departments"
              :key="index"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </div>
        <div class="fl w154">
          <p>用户角色</p>
          <el-select
          clearable
            v-model="value3"
            placeholder="请选择"
            class="seeSelect"
            @change="userInquire"
          >
            <el-option
              size='126px'
              v-for="(item,index) in role"
              :key="index"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </div>
        <div class="fl w224">
          <p>搜索</p>
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="fileSearch"
            class="fileSearch"
          >
          </el-input>

        </div>
        <el-button
          type="primary"
          round
          class="inquireBtn"
          @click="inquireBtn()"
          @keyup.enter="submit"
        >查询</el-button>
      </div>
    </div>
    <div class="personnelBox_bottom" :class="{'active':backActtive}">
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
          :data="personnelableData"
          style="width: 100%"
        >
          <el-table-column
            prop=""
            label="序号"
            width="110px"
            type="index"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="148px"
          ></el-table-column>
          <el-table-column
            prop="telephone"
            label="手机号"
            width="178px"
          ></el-table-column>
          <el-table-column
            prop="deptSimpleName"
            label="科室"
            width="178px"
          ></el-table-column>
          <el-table-column
            prop="occupationName"
            label="用户角色"
            width="164px"
          ></el-table-column>
          <el-table-column
            prop="types"
            label="状态"
            width="128px"
          >
            <template slot-scope="scope">
              <div v-show="scope.row.types == 0">未激活</div>
              <div v-show="scope.row.types == 1">激活</div>
            </template></el-table-column>
          <el-table-column
            prop="personnelOperate"
            label="操作"
            width="70px"
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
            <span class="total">总共{{total}}人</span>
        </div>
      </div>

    </div>
    <!-- 新增标签弹框 -->
    <el-dialog
      title="新增人员"
      :visible.sync="dialogVisible"
      width="458px"
      :before-close="handleClose"
      class="newlyLayer"
         @opened = 'banSliding'
        @closed = 'allowSliding'
    >
      <p>用户姓名</p>
      <el-input
        v-model="arr.name"
        placeholder="请输入用户姓名"
      ></el-input>
      <p>手机号</p>
      <el-input
        v-model="arr.telephone"
        placeholder="请输入手机号"
      ></el-input>

      <div class="addTemplateLayer_bottom clearfix">
        <div
          class="fl"
          style="width:45%"
        >
          <p>科室</p>
          <el-select
            v-model="arr.deptId"
            placeholder="请选择"
            size='100%'
          >
            <el-option
              v-for="(item,index) in departments"
              :key="index"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </div>
        <div
          class="fr"
          style="width:45%"
        >
          <div>
            <p>角色名称</p>
            <el-select
              v-model="arr.occupationId"
              placeholder="请选择"
              size='100%'
            >
              <el-option
                v-for="(item,index) in role"
                :key="index"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="addTemplateLayer_bottom_select">
        <p>激活状态</p>
        <el-select
          v-model="arr.types"
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

      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="patientCenterInsertBtn()"
        >确 定</el-button>
      </span>
    </el-dialog>

    <!-- 编辑标签弹框 -->
    <el-dialog
      title="编辑信息"
      :visible.sync="editdialogVisible"
      width="458px"
      :before-close="handleClose"
      class="newlyLayer"
        @opened = 'banSliding'
        @closed = 'allowSliding'>
      <p>用户姓名</p>
      <el-input
        v-model="arr2.name"
        placeholder="请输入用户姓名"
      ></el-input>
      <p>手机号</p>
      <el-input
        v-model="arr2.telephone"
        placeholder="请输入用户手机号"
      ></el-input>

      <div class="addTemplateLayer_bottom clearfix">
        <div
          class="fl"
          style="width:45%"
        >
          <p>科室</p>
          <el-select
            v-model="arr2.deptId"
            placeholder="请选择"
            size='100%'
          >
            <el-option
              v-for="(item,index) in departments"
              :key="index"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </div>
        <div
          class="fr"
          style="width:45%"
        >
          <div>
            <p>角色名称</p>
            <el-select
              v-model="arr2.occupationId"
              placeholder="请选择"
              size='100%'
            >
              <el-option
                v-for="(item,index) in role"
                :key="index"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="addTemplateLayer_bottom_select">
        <p>激活状态</p>
        <el-select
          v-model="arr2.types"
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

      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="editdialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="patientCenterUpdateBtn()"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    var token = window.localStorage.getItem("mayernal-web-token");
    return {
      // 档案管理下拉框数据
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
      personnelableData: [
        {
          id: "",
          name: "",
          telephone: "",
          deptSimpleId: "",
          deptSimpleName: "",
          occupationId: "",
          occupationName: "",
          types: "",
          token: token
        }
      ],

      // 弹框科室
      departments: [],
      // 新建人员弹框角色名称
      role: [],
      arr: {
        telephone: "", //新建人员弹框 用户手机号
        name: "", //新建人员弹框 用户名字
        deptId: "", //新建人员弹框 科室
        occupationId: "", //新建人员弹框角色
        types: "", // 新建人员弹框激活状态
        token: token,
        rolesType: "0" //角色类型
      },
      arr2: {
        telephone: "", // 编辑人员弹框 手机号
        name: "", // 编辑人员弹框 用户姓名
        occupationId: "", //编辑人员弹框角色id
        deptId: "", //编辑人员弹框 科室id
        types: "", // 编辑人员弹框激活状态
        rolesType: "0", //角色描述
        id: "", //人员编号
        token: token
      },
      dialogVisible: false, //新增人员弹框
      editdialogVisible: false, //编辑信息弹框

      currentPageOfice: 1, //分页 - 页数
      cur_page: 10, //分页 -条数
      pagerCount: 3, //分页 -总页数
      paramType: "0", //查询类型 0.姓名 1.手机号
      fileSearch: "", //查询详情
      contactsModel: "", //激活状态 0.未激活 1.已激活
      value2: "", //科室id
      value3: "", //角色id
      tableShow: false,
      imgShow: false,
       backActtive:false,
        total:"" //总人数
    };
  },
  mounted() {
    let token = window.localStorage.getItem("mayernal-web-token");
    this.inquire();
    this.getUser(token, 1, 10);
    this.getUseInquire(token, 1, 10);
    var lett = this;
    document.onkeydown = function(e) {
      var key = window.event.keyCode;
      if (key == 13) {
        lett.submit();
      }
    };
  },
  methods: {
     // 选择每页条数 页数切换到1页
    handleSizeChange(val) {
        this.currentPageOfice =1;
      this.inquire();
    },
    handleCurrentChange(val) {
      this.inquire();
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
          this.allowSliding();

        })
        .catch(_ => {});
    },

    // 科室信息查询
    getUser(token, pageNum, pageSize) {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .deptSimpleFindList({
          token: token1,
          pageNum: pageNum,
          pageSize: pageSize
        })
        .then(res => {
          if (res.status === "20200") {
            this.departments = res.pcDeptSimpleBeanList;
          } else {
            // this.$Message.info(res.desc);
          }
        })
        .catch(error => {
          // this.$Message.info(error);
        });
    },

    // 用户角色查询
    getUseInquire(token, pageNum, pageSIze) {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .occupationFindList({
          token: token,
          pageNum: pageNum,
          pageSize: pageSIze
        })
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.role = res.pcOccupationBeanList;
          } else {
            // this.$Message.info(res.desc);
          }
        })
        .catch(error => {
          // this.$Message.info(error);
        });
    },
    //查询
    inquire() {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .patientCenterFindSelfDoctorList({
          token: token1,
          pageNum: this.currentPageOfice,
          pageSize: this.cur_page,
          paramType: this.paramType,
          paramDetails: this.fileSearch,
          types: this.contactsModel,
          deptSimpleId: this.value2,
          occupationId: this.value3
        })
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            self.personnelableData = res.pcDoctorBeanList;
            this.pagerCount = res.pageNum;
            self.imgShow = false;
            self.tableShow = true;
            self.backActtive = false;
                self.total =res.total;
          } else if (res.status === "20209") {
            self.tableShow = false;
            self.imgShow = true;
             self.backActtive = true;
          } else {
            self.personnelableData = [];
            this.$message.error("查询失败，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("查询失败，请稍后重试");
        });
    },
    // 激活状态筛选
    isProhibitSelect() {
      this.inquire();
    },
    // 科室选择筛选
    officeInquire() {
      this.inquire();
    },
    // 用户角色筛选
    userInquire() {
      this.inquire();
    },
    submit() {
      this.inquireBtn();
    },
    // 查询按钮
    inquireBtn() {
      if (isNaN(this.fileSearch)) {
        this.paramType = 0;
        this.paramType = this.inquire();
      } else {
        //  手机号
        this.paramType = 1;
        this.inquire();
      }
    },
    // 人员信息维护新增
    patientCenterInsertBtn() {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.arr.name == "") {
        this.$message({
          showClose: true,
          message: "用户姓名不能为空",
          type: "warning"
        });
      } else if (this.arr.telephone == "") {
        this.$message({
          showClose: true,
          message: "手机号不能为空",
          type: "warning"
        });
      } else if (!reg.test(this.arr.telephone)) {
        this.$message({
          showClose: true,
          message: "手机格式不正确",
          type: "warning"
        });
      } else if (this.arr.deptId == "") {
        this.$message({
          showClose: true,
          message: "请选择科室",
          type: "warning"
        });
      } else if (this.arr.occupationId == "") {
        this.$message({
          showClose: true,
          message: "请选择角色名称",
          type: "warning"
        });
      } else if (this.arr.types == "") {
        this.$message({
          showClose: true,
          message: "请选择激活状态",
          type: "warning"
        });
      } else {
        var token = localStorage.getItem("mayernal-web-token");
        let self = this;
        this.$api
          .patientCenterInsert(this.arr)
          .then(res => {
            console.log(res);
            if (res.status === "20200") {
              this.$message.success("新增成功");
              this.arr.telephone = "";
              this.arr.name = "";
              this.arr.occupationId = "";
              this.arr.types = "";
              this.arr.deptId = "";
              this.dialogVisible = false;
              this.inquire(token, 1, 10);
            } else if (res.status === "20210") {
              this.$message.error("信息重复，请勿重复添加");
            }
          })
          .catch(error => {
            this.$message.error("新增失败，请稍后重试");
          });
      }
    },

    // 编辑
    handleEdit(index, row) {
      this.editdialogVisible = true;
      console.log(row);
      this.arr2 = JSON.parse(JSON.stringify(row));
      this.arr2.deptId = row.deptSimpleName;
    },
    // 人员信息维护编辑确定按钮
    patientCenterUpdateBtn() {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.arr2.name == "") {
        this.$message({
          showClose: true,
          message: "用户姓名不能为空",
          type: "warning"
        });
      } else if (this.arr2.telephone == "") {
        this.$message({
          showClose: true,
          message: "手机号不能为空",
          type: "warning"
        });
      } else if (!reg.test(this.arr2.telephone)) {
        this.$message({
          showClose: true,
          message: "手机格式不正确",
          type: "warning"
        });
      } else {
        let token = localStorage.getItem("mayernal-web-token");
        let self = this;
        console.log(this.arr2);
        this.$api
          .patientCenterUpdate({
            telephone: this.arr2.telephone, // 编辑人员弹框 手机号
            name: this.arr2.name, // 编辑人员弹框 用户姓名
            occupationId: this.arr2.occupationId, //编辑人员弹框角色id
            deptId: this.arr2.deptSimpleId, //编辑人员弹框 科室id
            types: this.arr2.types, // 编辑人员弹框激活状态
            rolesType: "0", //角色描述
            id: this.arr2.id, //人员编号
            token: token
          })
          .then(res => {
            console.log(res);
            if (res.status === "20200") {
              this.$message.success("编辑成功");
              this.editdialogVisible = false;
              this.inquire(token, 1, self.cur_page);
            } else {
              this.$message.error("编辑失败，请稍后重试");
            }
          })
          .catch(error => {
            this.$message.error("编辑失败，请稍后重试");
          });
      }
    },
        // 禁止滑动
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
    border-radius: 4px;
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
        margin-top: 28px;
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
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .administrativeBoxBlock{
         height: 30px;
        line-height: 30px;
        div {
          display: inline-block;
        }
    }
  }
    .active{
    background-color: #fcfcfc;
  }
  .newlyLayer {
    p {
      margin: 12px 0px;
    }
  }
}
</style>
<style lang="less">
.personnelBox {
  .el-button.is-round{
    padding: 10px 23px;
  }
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
            border-radius: 4px;
          }
        }
        .assessSelect {
          input {
            width: 162px;
            border-radius: 4px;
          }
        }
        .seeSelect {
          input {
            width: 126px;
            border-radius: 4px;
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
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #68b6e7;
  }
  .el-button--text {
    color: #68b6e7;
  }
  .newlyLayer {
    .el-dialog__header {
      background-color: #ededed;
    }
    .el-dialog__body {
      padding: 0px 34px;
    }
    .el-input__inner {
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .addTemplateLayer_bottom {
      .el-input__inner {
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f6f6f6;
      }
    }
    // .addTemplateLayer_bottom_select {
    //   .el-select {
    //     width: 100%;
    //     .el-input__inner {
    //       border: 1px solid #ccc;
    //       border-radius: 4px;
    //       background-color: #f6f6f6;
    //     }
    //   }
    // }
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
  }
  .el-select  .el-input__inner{
    background-color: #f6f6f6 !important;
}
}
</style>


