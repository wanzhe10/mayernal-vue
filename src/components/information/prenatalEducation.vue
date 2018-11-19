<template>
    <div class="prenatalEducationBox">
        <h2 class="prenatalEducationBoxTittle">孕期宣教维护</h2>
        <div class="prenatalEducationBoxContant clearfix">
            <div class="Contant_right clearfix">
                <div class="Contant_tittle">
                    <span>孕期检查标签</span>
                    <input type="button" value="添加标签" @click="dialogVisible = true">
                </div>
                <ul class="category clearfix">
                    <li v-for="item in categoryItems" v-html="item" :key="item.num" @click="toggleClass($event)" :class="{'actives':isActive}"></li>
                </ul>
            </div>
            <div class="prenatalEducationBottom clearfix">
                <div class="headlineBox">
                    <h2>孕期检查标题</h2>
                      <el-table :data="tittledata" class="prenatalEducationTable">
                    <el-table-column prop="name" label="">
                        <template slot-scope="scope">
                            <el-input v-model="tittledata[scope.$index].name" placeholder="请输入"></el-input>
                        </template>
                    </el-table-column>
                    </el-table>
                    <div class="newConstruction">
                        <div class="addBox"  @click="add">
                            <i class="addIcon"></i>
                            <p class="newConstructionBtn">添加标题</p>
                        </div>
                    </div>

                </div>
                <div class="matterBox">
                    
                </div>
            </div>
        </div>
        <!-- 新增标签弹框 -->
        <el-dialog title="添加标签" :visible.sync="dialogVisible" width="450px" :before-close="handleClose" class="newlyLayer">
            <p>标签名称</p>
            <el-input v-model="newlyLayerInput" placeholder="请输入报告单名称"></el-input>
            <p>状态</p>
            <el-select v-model="value" placeholder="请选择" size='100%'>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <div>

        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
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
      isActive: false,
      labelIntroduce:
        "建立妊娠保健手册、确定孕周、推算预产期、评估妊娠高危因素，血压、体重指数、胎心率、血常规、血型（ABO和Rh）、空腹血糖、刚功能和肾功能、乙型肝炎病毒表面抗原、梅毒螺旋体、HIV筛查、心电图,）、空腹血糖、刚功能和肾功能、乙型肝炎病毒表面抗原、梅毒螺旋体、HIV筛查、心电图",
      labelExplain:
        "之前没有做过婚检，孕期检查的人，还要增加地中海贫血筛查，家里养宠物的人，则要增加寄生虫检查，专家提醒：第一次产检做的检查项目相对最多，也是为了全面检查准妈妈的健康情况，要带上准爸爸一起检查，并且要了解你和他的直属亲属及家庭成员的健康情况",
      dialogVisible: false,
      options: [
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
      value: "",
      newlyLayerInput: "",
      tittledata: [
          {name:'11111111111'},
          {name:'2222222222222'},
          {name:'33333333333'},
      ]
    };
  },
  methods: {
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
    add() {
      this.tittledata.push({});
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
      .prenatalEducationTable{
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
        width: 98%;
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
      width: 710px;
      background-color: yellow;
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
 .headlineBox{
         /* // 配偶一般信息组件样式修改 */
  .el-input__inner {
      width: 100%;
    border-color: #ccc;
    background-color: #f6f6f6;
    border:none;
  }
  .el-table .cell{
      padding: 0 4px;
  }
    }
</style>


