<template>
  <div class="reportBox">
    <h2 class="reportBoxTittle">报告单解读维护</h2>
    <div class="reportBoxContant clearfix">
      <div class="Contant_left">
        <div class="Contant_left_overflow">
          <p class="wireP">产检次数列表</p>
          <ul class="leftList">
            <li
              v-for="(item,index) in antenatalCareNums"
              :key="index"
              :id="item.id"
              @click="antenatalCareNum(index)"
              :class="{active:index==showActive}"
              v-html="item.name"
            >
            </li>
          </ul>
        </div>
      </div>
      <div class="Contant_right clearfix">
        <div class="Contant_tittle">
          <div class="lattleSelectBox clearfix">
            <span>报告单类型</span>
            <el-radio-group
              v-model="types"
              @change='choiceRadio'
            >
              <el-radio :label="0">未激活</el-radio>
              <el-radio :label="1">已激活</el-radio>
            </el-radio-group>
          </div>
          <input
            type="button"
            value="添加标签"
            @click="dialogVisible = true"
          >
        </div>
        <ul class="category clearfix">
          <i
            class="noreportIcon"
            v-show="noreportIconShow"
          ></i>
          <li
            v-for="(item,index) in arr"
            v-html="item.pcCheckCellsBean.name"
            @click="toggleClass(index)"
            @dblclick="dblclickBtn"
            :class="[item.types ==1?'actives':'nonactivated',{active:index==clickActive}] "
            :id='item.id'
            v-show="typeReport"
          >
          </li>
        </ul>
        <div class="labelContant">
          <h2>标签内容</h2>
          <div class="labelContant_font">
            <div class="labelIntroduce">
              <p><span id="tittleName">{{pcCheckCellsBean.name}}</span>介绍</p>
              <el-input
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 10 }"
                placeholder="请输入内容"
                :disabled="compile"
                :value='pcCheckCellsBean.checkDetail'
                v-model="labelIntroduce"
              >
              </el-input>
            </div>
            <div class="wire"></div>
            <div class="labelExplain">
              <p>解释说明</p>
              <el-input
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 10 }"
                placeholder="请输入内容"
                :disabled="compile"
                :value='pcCheckCellsBean.remarks'
                v-model="labelExplain"
              >
              </el-input>
            </div>
          </div>
        </div>
        <el-button
          type="primary"
          class="saveBtn"
          @click="checkCellsUpdate"
        >保 存</el-button>
      </div>
    </div>
    <!-- 新增标签弹框 -->
    <el-dialog
      title="添加标签"
      :visible.sync="dialogVisible"
      width="450px"
      :before-close="handleClose"
      class="newlyLayer"
    >
      <p>标签名称</p>
      <el-input
        v-model="newlyLayerInput"
        placeholder="请输入报告单名称"
      ></el-input>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="checkForWeekAndCellInsert()"
        >确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改标签弹框 -->
    <el-dialog
      title="修改标签"
      :visible.sync="modification"
      width="450px"
      :before-close="handleClose"
      class="modificationlyLayer"
    >
      <p>标签名称</p>
      <el-input
        v-model="modificationlyLayerInput"
        placeholder="请输入报告单名称"
      ></el-input>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="modification = false">取 消</el-button>
        <el-button
          type="primary"
          @click="modificationOk()"
        >确 定</el-button>
      </span>
    </el-dialog>
    <div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      // 报告单类型
      arr: {},
      pcCheckCellsBean: {}, //标签内容
      isActive: 0,
      // 标签内容介绍
      labelIntroduce: "",
      // 标签解释说明
      labelExplain: "",
      dialogVisible: false, //新建弹框
      modification: false, //编辑弹框
      typeReport: true, //报告单类型
      noreportIconShow: false, // 报告单类型暂无数据
      // 状态
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
      newlyLayerInput: "",
      modificationlyLayerInput: "",
      antenatalCareNums: [], //产检次数列表
      showActive: "0",
      compile: true, // 介绍和解释说明是否能编辑编辑
      clickActive: -1,
      types: 0 //激活状态
    };
  },
  mounted() {
    let token1 = window.localStorage.getItem("mayernal-web-token");
    this.getUser(token1);
    this.choiceRadio();
    // console.log(this.types);
  },

  methods: {
    choiceRadio() {
      if (this.types == 0) {
        this.compile = true;
      } else if (this.types == 1) {
        this.compile = false;
      }
    },
    // 切换产检次数列表
    antenatalCareNum(index) {
      let token = localStorage.getItem("mayernal-web-token");
      this.showActive = index;
      this.checkForWeekAndCellFindList(token, this.antenatalCareNums[index].id);
    },
    //根据状态值判断标签页样式显示
    //切换"报告单类型"样式
    toggleClass(index) {
      // console.log(index);
      this.clickActive = index;
      this.pcCheckCellsBean = this.arr[index].pcCheckCellsBean;
      this.labelIntroduce = this.pcCheckCellsBean.checkDetail;
      this.labelExplain = this.pcCheckCellsBean.remarks;
      this.types = parseInt(this.arr[index].types);
      if (this.types == 0) {
        this.compile = true;
      } else if (this.types == 1) {
        this.compile = false;
      }
    },
    // 弹框右上角关闭按钮
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    // 左边产检次数列表查询
    getUser(token) {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .checkForWeekFindList({
          token: token1
        })
        .then(res => {
          // console.log(res)
          if (res.status === "20200") {
            this.antenatalCareNums = res.pcCheckForWeekBeanList;
            this.antenatalCareNum(0);
            // this.toggleClass(0);
          } else {
            // this.$Message.info(res.desc);
          }
        })
        .catch(error => {
          // this.$Message.info(error);
        });
    },
    // 报告类型查询
    checkForWeekAndCellFindList(token, weekId) {
      let self = this;
      this.$api
        .checkForWeekAndCellFindList({
          token: token,
          weekId: weekId
        })
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            self.arr = res.pcCheckForWeekAndCellBeanList;
            // self.pcCheckCellsBean =
            //   res.pcCheckForWeekAndCellBeanList[0].pcCheckCellsBean;
            this.typeReport = true;
            this.noreportIconShow = false;
            // console.log(self.pcCheckCellsBean);
          } else if (res.status === "20209") {
            this.typeReport = false;
            this.noreportIconShow = true;
          }
        })
        .catch(error => {
          this.$message.error("查询错误，请稍后重试");
        });
    },
    // 新增
    checkForWeekAndCellInsert() {
      console.log($(".leftList"));
      let _this = $(".leftList")
        .children("li.active")
        .attr("id");
      let reportNumber = this.arr.length;
      if (reportNumber > 0) {
        reportNumber = this.arr.length + 1;
      } else {
        reportNumber = 1;
      }
      console.log(reportNumber);
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .checkForWeekAndCellInsert({
          token: token1,
          weekId: _this,
          name: this.newlyLayerInput,
          number: reportNumber,
          types: 0
        })
        .then(res => {
          // console.log(res);
          if (res.status === "20200") {
              this.$message.success("新建成功");
            self.dialogVisible = false;
            let _thisId = $(".leftList")
              .children("li.active")
              .attr("id");
            this.checkForWeekAndCellFindList(token1, _thisId);
            this.newlyLayerInput = "";
          } else {
            this.$message.error("新建错误，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("新建错误，请稍后重试");
        });
    },

    dblclickBtn(event) {
      this.modification = true;
      var el = event.currentTarget; //复杂的click哈哈
      this.modificationlyLayerInput = el.innerText;
    },
    // 双击修改确认名称
    modificationOk(index) {
      this.pcCheckCellsBean.name = this.modificationlyLayerInput;
      this.modification = false;
    },
    // 修改
    // 报告类型修改保存按钮
    checkCellsUpdate() {
      let _this = $(".category")
        .children("li.active")
        .attr("id");
      console.log(_this);
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .checkCellsUpdate({
          token: token1,
          id: _this,
          cellId: this.pcCheckCellsBean.id,
          name: this.pcCheckCellsBean.name,
          number: this.pcCheckCellsBean.number,
          checkDetail: this.labelIntroduce,
          remarks: this.labelExplain,
          types: this.types
        })
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.$message({
              showClose: true,
              message: "修改成功",
              type: "success"
            });
            this.modification = false;
            // this.clickActive = -1;
            let _thisId = $(".leftList")
              .children("li.active")
              .attr("id");
            this.checkForWeekAndCellFindList(token1, _thisId);
          } else {
            this.$message.error("修改错误，请稍后重试");
          }
        })
        .catch(error => {
          this.$message.error("修改错误，请稍后重试");
        });
    }
  }
};
</script>
<style lang="less" scoped>
[v-cloak] {
  display: none;
}
.mgr18 {
  margin-right: 18px;
}
.reportBox {
  position: relative;
  width: 100%;
  min-height: 600px;
  background-color: #fff;
  .reportBoxTittle {
    display: block;
    width: 100%;
    background-color: #fbfbfb;
    padding: 24px 24px 24px 24px;
    font-size: 18px;
    color: #333333;
  }
  .Contant_left {
    float: left;
    min-height: 640px;
    height: 100%;
    width: 206px;
    border-right: 1px solid #ccc;
    position: relative;
    overflow: hidden;
    .Contant_left_overflow {
      position: absolute;
      left: 0;
      top: 0;
      right: -17px;
      bottom: 0;
      overflow-x: hidden;
      overflow-y: scroll;
      p {
        color: #333333;
        font-size: 16px;
        display: block;
        width: 100%;
        height: 60px;
        padding: 20px 0 0 30px;
        border-bottom: 1px solid #ccc;
      }
      ul {
        li {
          height: 46px;
          line-height: 46px;
          color: #333333;
          padding-left: 30px;
          cursor: pointer;
          -moz-user-select: none; /*火狐*/
          -webkit-user-select: none; /*webkit浏览器*/
          -ms-user-select: none; /*IE10*/
          -khtml-user-select: none; /*早期浏览器*/
          user-select: none;
        }
        .active {
          background-color: #68b6e7;
          color: #fff;
        }
      }
    }
  }
  .Contant_right {
    float: left;
    width: 726px;
    margin-left: 24px;
    .Contant_tittle {
      padding: 20px 0;
      padding-bottom: 40px;
      border-bottom: 1px solid #ccc;
      input {
        width: 86px;
        height: 32px;
        background-color: #68b6e7;
        color: #fff;
        font-size: 12px;
        border-radius: 8px;
        float: right;
      }
      .lattleSelectBox {
      display: inline-block;

        span {
          color: #333333;
          font-size: 16px;
          float: left;
          margin-right:30px;
        }
      }
    }
    .category {
      margin-top: 20px;
      min-height: 186px;
      border-bottom: 1px solid #ccc;
      position: relative;
      .noreportIcon {
        background: url("../../assets/noreportIcon.png") no-repeat 0 0;
        width: 722px;
        height: 186px;
        background-size: 722px 186px;
        position: absolute;
      }
      li {
        float: left;
        height: 40px;
        line-height: 40px;
        text-align: center;
        padding: 0px 18px;
        border: 1px solid #999999;
        color: #666666;
        border-radius: 8px;
        margin-bottom: 20px;
        // margin:20px 9px;
        margin-right: 18px;
        cursor: pointer;
        user-select: none;
      }
      li:nth-child(1) {
        margin-left: 0px;
      }
      .nonactivated {
        border: none;
        background-color: #f6f6f6;
        color: #999;
      }
      .actives {
        // background-color: #68b6e7;
        // color: #fff;
        color: #68b6e7;
        border: 1px solid #68b6e7;
      }
      .active {
        background-color: #68b6e7;
        color: #fff;
      }
    }
    .labelContant {
      margin-top: 20px;
      .labelContant_font {
        margin-top: 20px;
        background-color: #f6f6f6;
        padding: 16px 12px;
        border-radius: 8px;
        .wire {
          width: 100%;
          height: 1px;
          background-color: #ccc;
          margin: 12px 0;
        }
        p {
          color: #666666;
        }
      }
    }
  }
}
.saveBtn {
  width: 200px;
  height: 40px;
  margin: 16px auto;
  text-align: center;
  margin-left: 260px;
}
.newlyLayer,
.modificationlyLayer {
  p {
    margin-bottom: 12px;
    margin-top: 20px;
  }
  p:nth-child(1) {
    margin-top: 20px;
  }
}
</style>
<style lang='less'>
.reportBox {
  .el-textarea__inner {
    border: none;
    min-height: 40px;
    background-color: #f6f6f6;
    color: #333333;
    padding-left: 0px;
  }
  .el-button--primary {
    background-color: #68b6e7;
  }
  .el-dialog__header {
    background-color: #ededed;
  }
  .el-select {
    width: 100%;
  }
  .el-dialog__header {
    background-color: #ededed;
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
  /* // 配偶一般信息组件样式修改 */
  .el-input__inner {
    border-radius: 8px;
    border-color: #ccc;
    background-color: #f6f6f6;
  }
  .el-dialog__body {
    padding: 0px 20px;
  }
  .el-dialog__footer {
    padding: 30px;
  }
  .el-radio__input.is-checked + .el-radio__label {
    color: #68b6e7;
  }
  .el-radio__input.is-checked .el-radio__inner {
    border-color: #68b6e7;
    background: #68b6e7;
  }
}
</style>


