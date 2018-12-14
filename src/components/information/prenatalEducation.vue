<template>
  <div class="prenatalEducationBox">
    <h2 class="prenatalEducationBoxTittle">孕期宣教维护</h2>
    <div class="prenatalEducationBoxContant clearfix">
      <div class="Contant_right clearfix">
        <div class="Contant_tittle">
          <span>孕期检查标签</span>
          <input
            type="button"
            value="添加标签"
            @click="dialogVisible = true"
          >
        </div>
        <ul class="category clearfix">
          <!-- <li v-for="item in categoryItems" v-html="item" :key="item.num" @click="toggleClass($event)" :class="{'actives':isActive}"></li> -->
          <li
            v-for="(item,index) in categoryItems"
            v-html="item"
            @click="toggleClass(index)"
            @dblclick="modification = true"
            :class="{actives:index==isActive}"
            :key="index"
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
                  v-model="tittledata[scope.$index].name"
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
        <!-- <div class="matterBox"> -->
          <div id="editorElem"></div>
        <!-- </div> -->
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
      <p>状态</p>
      <el-select
        v-model="value"
        placeholder="请选择"
        size='100%'
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false"
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
      <p>状态</p>
      <el-select
        v-model="modificationvalue"
        placeholder="请选择"
        size='100%'
      >
        <el-option
          v-for="item in modificationoptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
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
    <div>
    </div>
  </div>
</template>
<script>
import E from "wangeditor";
export default {
  data() {
    return {
      // 孕期检查标签
      categoryItems: [
        "宫高",
        "脐带",
        "股骨长",
        "胎囊",
        "胎心",
        "胎头",
        "胎芽",
        "胎芽",
        "宫高",
        "脐带",
        "股骨长",
        "最大羊水深处",
        "宫高",
        "脐带",
        "股骨长",
        "宫高",
        "宫双顶径高",
        "羊水指数"
      ],
      isActive: 0,
      dialogVisible: false,
      modification: false,
      // 添加标签 状态
      options: [
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
      value: "",
      // 编辑标签 状态
      modificationoptions: [
        {
          value: "0",
          label: "未激活"
        },
        {
          value: "1",
          label: "已激活"
        }
      ],
      modificationlyLayerInput: "",
      modificationvalue: "",

      tittledata: [
        { name: "11111111111" },
        { name: "2222222222222" },
        { name: "33333333333" }
      ],
      editorContent: ''
    };
  },
  methods: {
    //切换"记住密码"样式
    toggleClass(index) {
      this.isActive = index;
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
     getContent: function () {
            alert(this.editorContent)
        }
  },
  mounted() {
        var editor = new E('#editorElem')
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
        }
        editor.create()
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
  min-height: 600px;
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
    padding: 22px 20px;
    background-color: #fff;
    .Contant_tittle {
      padding: 20px 0;
      padding-bottom: 40px;
      border-bottom: 1px solid #ccc;
      span {
        color: #333333;
        font-size: 16px;
        float: left;
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
      border-bottom: 1px solid #ccc;
      li {
        float: left;
        padding: 10px 18px;
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
      .actives {
        background-color: #68b6e7;
        color: #fff;
        border: 1px solid #68b6e7;
      }
    }
  }
  .prenatalEducationBottom {
    margin-top: 8px;
    height: 500px;
    .headlineBox {
      position: relative;
      float: left;
      width: 260px;
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
     #editorElem {
      float: right;
      width: 710px;
      background-color: #fff;
      height: 500px;
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
  //   .el-input__inner {
  //     border-radius: 8px;
  //     border-color: #ccc;
  //     background-color: #f6f6f6;
  //   }
  //   .el-dialog__body {
  //     padding: 0px 20px;
  //   }
  //   .el-dialog__footer {
  //     padding: 30px;
  //   }
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


