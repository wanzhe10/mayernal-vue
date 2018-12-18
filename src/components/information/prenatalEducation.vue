<template>
  <div class="prenatalEducationBox">
    <h2 class="prenatalEducationBoxTittle">孕期宣教维护</h2>
    <div class="prenatalEducationBoxContant clearfix">
      <div class="Contant_right clearfix">
        <div class="Contant_tittle">
          <span>孕期检查标签</span>
          <el-radio-group
            v-model="types"
            @change='choiceRadio'
          >
            <el-radio :label="0">未激活</el-radio>
            <el-radio :label="1">已激活</el-radio>
          </el-radio-group>
          <input
            type="button"
            value="添加标签"
            @click="dialogVisible = true"
          >
        </div>
        <ul class="category clearfix" style="overflow:hidden">
          <i
            class="noreportIcon"
            v-show="noreportIconShow"
          ></i>
          <li
            v-for="(item,index) in categoryItems"
            v-html="item.className"
            :id="item.id"
            @click="toggleClass(index)"
            @dblclick="dblclickBtn($event)"
            :class="[item.classIsProhibit ==1?'actives':'nonactivated',{active:index==clickActive}]"
            :key="index"
            v-show="typeReport"
          ></li>
        </ul>
      </div>
      <div class="prenatalEducationBottom clearfix">
        <div class="headlineBox">
          <h2>孕期检查标题</h2>
          <el-table
            :data="tittledata"
            class="prenatalEducationTable"
          >
            <el-table-column
              prop="name"
              label=""
            >
              <template slot-scope="scope">
                <el-input
                  v-model="tittledata[scope.$index].cellTitle"
                  placeholder="请输入"
                ></el-input>
              </template>
            </el-table-column>
          </el-table>
          <div class="newConstruction">
            <div
              class="addBox"
              @click="add"
            >
              <i class="addIcon"></i>
              <p class="newConstructionBtn">添加标题</p>
            </div>
          </div>
        </div>
        <div class="matterBox">
          <div id="editorElem">
            <p class="examineTittle">为什么要做B超检查，检查项目为什么什么</p>
            <div id="editor"></div>
            <textarea
              id="text1"
              style="width:100%; height:200px;"
            ></textarea>

          </div>
          <input
            type="button"
            value="保 存"
            @click=""
          >
        </div>
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
          @click="pregnantPrenatalEducationAndClassInsert"
        >确 定</el-button>
      </span>
    </el-dialog>

    <!-- 编辑标签弹框 -->
    <el-dialog
      title="编辑标签"
      :visible.sync="modification"
      width="450px"
      :before-close="handleClose"
      class="newlyLayer"
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
          @click="modification = false"
        >确 定</el-button>
      </span>
    </el-dialog>
    <!-- <div> -->
  </div>
  </div>
</template>
<script>
import E from "wangeditor";
import $ from "jquery";
export default {
  data() {
    return {
      categoryItems: {}, // 孕期检查标签数据
      dialogVisible: false,
      modification: false,
      newlyLayerInput: "",
      modificationlyLayerInput: "",
      tittledata: [],//标题的数据
      editorContent: "",
      clickActive: -1,
      types: 0, //激活状态
      typeReport: true, //报告单类型
      noreportIconShow: false // 报告单类型暂无数据
    };
  },
  mounted() {
    this.choiceRadio();
    this.pregnantPrenatalEducationAndClassFindList();
    var editor = new E("#editor");
    editor.customConfig.uploadImgShowBase64 = true;
    editor.customConfig.showLinkImg = false;
    var $text1 = $("#text1");
    editor.customConfig.onchange = function(html) {
      // 监控变化，同步更新到 textarea
      $text1.val(html);
    };
    editor.create();
    // 初始化 textarea 的值
    $text1.val(editor.txt.html());
  },
  methods: {
    choiceRadio() {
      // if (this.types == 0) {
      //   this.compile = true;
      // } else if (this.types == 1) {
      //   this.compile = false;
      // }
    },
    //  标签切换
    toggleClass(index) {
      this.clickActive = index;
      this.isShow1 = index;
      console.log(this.categoryItems[index].id);
      console.log(this.categoryItems[index].classNumber);
      this.types = parseInt(this.categoryItems[index].classIsProhibit);
        let token1= window.localStorage.getItem("mayernal-web-token");
      this.pregnantPrenatalEducationClassAndCellFindList(token1,this.categoryItems[index].id);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    add() {
      this.tittledata.push({});
    },
    getContent: function() {
      alert(this.editorContent);
    },
    // 标签查询
    pregnantPrenatalEducationAndClassFindList() {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      this.$api
        .pregnantPrenatalEducationAndClassFindList({
          token: token1
        })
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.categoryItems =
              res.pcPregnantPrenatalEducationAndClassBeanList;
            $(".category").css("height", "0px");
            this.typeReport = true;
            this.noreportIconShow = false;
            //     this.typeReport = false;
            // this.noreportIconShow = true;
          } else if (res.status === "20209") {
            $(".category").css("height", "189px");
            this.typeReport = false;
            this.noreportIconShow = true;
          }
        })
        .catch(error => {
          this.$message.error("查询错误，请稍后重试");
        });
    },
    // 孕期检查标签-添加
    pregnantPrenatalEducationAndClassInsert() {
      let self = this;
      let token1 = window.localStorage.getItem("mayernal-web-token");
      let classNumber = this.categoryItems.length;
      if (classNumber > 0) {
        classNumber = this.categoryItems.length + 1;
      } else {
        classNumber = 1;
      }
      this.$api
        .pregnantPrenatalEducationAndClassInsert({
          token: token1,
          className: this.newlyLayerInput,
          classNumber: classNumber,
          classIsProhibit: 0
        })
        .then(res => {
          console.log(res);
          if (res.status === "20200") {
            this.dialogVisible = false;
            this.pregnantPrenatalEducationAndClassFindList();
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
    pregnantPrenatalEducationClassAndCellFindList(token,classId){
        let self = this;
        let token1= window.localStorage.getItem("mayernal-web-token");
      this.$api
        .pregnantPrenatalEducationClassAndCellFindList({
          token: token,
          classId:classId
        })
        .then(res => {
          // console.log(res);
          if (res.status === "20200") {
            this.tittledata = res.pcPregnantPrenatalEducationClassAndCellBeanList;
            console.log(this.tittledata)
          } else if (res.status === "20209") {
          this.tittledata = [];
          }
        })
        .catch(error => {
          this.$message.error("查询错误，请稍后重试");
        });
    }
  }
};
</script>
<style lang="less" scoped>
.mgr18 {
  margin-right: 18px;
}
.prenatalEducationBox {
  position: relative;
  width: 100%;
  // min-height: 600px;
  background-color: #f6f6f6;
  .prenatalEducationBoxTittle {
    display: block;
    width: 100%;
    background-color: #fbfbfb;
    padding: 24px 24px 24px 24px;
    font-size: 18px;
    color: #333333;
  }
  .Contant_right {
    padding: 0px 20px;
    background-color: #fff;
    .Contant_tittle {
      padding: 20px 0;
      height: 60px;
      border-bottom: 1px solid #ccc;
      span {
        color: #333333;
        font-size: 16px;
        float: left;
        margin-right: 30px;
      }
      input {
        width: 86px;
        height: 32px;
        background-color: #68b6e7;
        color: #fff;
        font-size: 12px;
        border-radius: 8px;
        float: right;
      }
    }
    .category {
      margin-top: 20px;
       min-height: 120px;
      position: relative;
      .noreportIcon {
        background: url("../../assets/noreportIcon.png") no-repeat 0 0;
        width: 722px;
        height: 120px;
        background-size: 722px 186px;
        position: absolute;
        margin-left: 80px;
        top:-40px;
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
        margin-right: 18px;
        cursor: pointer;
        -moz-user-select: none; /*火狐*/
        -webkit-user-select: none; /*webkit浏览器*/
        -ms-user-select: none; /*IE10*/
        -khtml-user-select: none; /*早期浏览器*/
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
  }
  .prenatalEducationBottom {
    margin-top: 8px;
    height: 500px;
    .headlineBox {
      position: relative;
      float: left;
      width: 250px;
      height: 500px;
      background-color: #fff;
      .prenatalEducationTable {
        height: 380px;
        overflow: hidden;
        overflow-y: auto;
      }

      h2 {
        width: 100%;
        font-size: 16px;
        color: #333333;
        display: inline-block;
        padding: 16px;
        border-bottom: 1px solid #ccc;
      }
      .newConstruction {
        position: absolute;
        left: 0;
        bottom: 0px;
        box-shadow: 0px 2px 12px 5px #e1e1e1;
        height: 60px;
        line-height: 60px;
        width: 100%;
        -moz-user-select: none; /*火狐*/
        -webkit-user-select: none; /*webkit浏览器*/
        -ms-user-select: none; /*IE10*/
        -khtml-user-select: none; /*早期浏览器*/
        user-select: none;
        .addBox {
          position: relative;
          width: 92px;
          margin: auto;
          cursor: pointer;
          .newConstructionBtn {
            color: #68b7e7;
            font-size: 16px;
            margin-left: 8px;
          }
          .addIcon {
            background: url("../../assets/addIcon.png") no-repeat 0 0;
            width: 16px;
            height: 16px;
            position: absolute;
            left: -16px;
            top: 36%;
          }
        }
      }
    }
    .matterBox {
      float: right;
         background-color: #fff;
        height: 500px;
                width: 710px;
        padding: 0 14px;
      #editorElem {
        .examineTittle {
          display: block;
          border-bottom: 1px solid #ccc;
          height: 48px;
          padding-left: 14px;
          font-size: 14px;
          color: #333333;
          line-height: 48px;
        }
        #editor {
          margin-top: 20px;
          height: 340px;
        }
        #text1 {
          display: none;
        }
      }
      input {
        width: 174px;
        height: 42px;
        background-color: #68b7e7;
        color: #fff;
        border-radius: 8px;
        margin: 22px auto;
        display: block;
      }
    }
  }
}
.newlyLayer {
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
.prenatalEducationBox {
  .el-textarea__inner {
    border: none;
    // min-height: 40px;
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
  .el-radio__input.is-checked + .el-radio__label {
    color: #68b6e7;
  }
  .el-radio__input.is-checked .el-radio__inner {
    border-color: #68b6e7;
    background: #68b6e7;
  }
}
.headlineBox {
  /* // 配偶一般信息组件样式修改 */
  .el-input__inner {
    width: 100%;
    border-color: #ccc;
    background-color: #f6f6f6;
    border: none;
  }
  .el-table .cell {
    padding: 0 4px;
  }
}
</style>


