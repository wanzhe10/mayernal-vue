<template>
    <div class="recordNewsBox clearfix">
        <div id="recordNewsBox_top">
            <div class="recordNewsBox_tittle clearfix">
                <h2>新增产后42天检查记录</h2>
                <p class="fl fortyTwoTittle_left">
                    <span class="fake">检查日期：<i>2018-11-11</i></span>
                </p>
                <p class="fr"><span>操作医生：<i class="doctorName">周晓晓</i></span></p>
            </div>
            <div class="pregnantNewsBox">
                <div class="subheadingBox">
                    <h5>一般检查</h5>
                    <div class="positionWire2"></div>
                </div>
                <div class="mgr70">
                    <h3>血压（mmHg）</h3>
                    <div class="separateBox">
                        <input type="text" class="" placeholder="低压">
                        <input type="text" class="" placeholder="高压">
                    </div>
                    <p class="redFont">此项为必填项！</p>
                </div>
                <div class="mgr70">
                    <h3>当前体重（kg）</h3>
                    <input type="text" class="pregnantPhone" placeholder="请输入当前体重">
                    <p class="redFont">此项为必填项！</p>
                </div>
                <div class="mgr0">
                    <h3>产后天数（天）</h3>
                    <input type="text" class="postpartumDays" placeholder="请输入产后天数">
                    <p class="redFont">此项为必填项！</p>
                </div>
                <div class="mgr70">
                    <h3>乳汁</h3>
                    <el-select v-model="milkModel" placeholder="请选择">
                        <el-option v-for="item in milk" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="mgr70">
                    <h3>乳房</h3>
                    <el-select v-model="breastModel" placeholder="请选择">
                        <el-option v-for="item in milk" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="mgr0">
                    <h3>乳头</h3>
                    <el-select v-model="papillaModel" placeholder="请选择">
                        <el-option v-for="item in milk" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="subheadingBox">
                    <h5>妇科检查</h5>
                    <div class="positionWire2"></div>
                </div>
                <!-- </div> -->
                <!-- <div class="recordNewSelectBox"> -->
                <div class="mgr70">
                    <h3>外阴</h3>
                    <el-select v-model="vulvaModel" placeholder="请选择">
                        <el-option v-for="item in milk" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="mgr70">
                    <h3>阴道</h3>
                    <el-select v-model="vaginaModel" placeholder="请选择">
                        <el-option v-for="item in milk" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="mgr0">
                    <h3>宫颈</h3>
                    <el-select v-model="cervixModel" placeholder="请选择">
                        <el-option v-for="item in milk" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="mgr70">
                    <h3>子宫</h3>
                    <el-select v-model="uterusModel" placeholder="请选择">
                        <el-option v-for="item in milk" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="mgr70">
                    <h3>恶露</h3>
                    <el-select v-model="lochiaModel" placeholder="请选择">
                        <el-option v-for="item in milk" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="mgr0">
                    <h3>双侧附件</h3>
                    <el-select v-model="bilateralModel" placeholder="请选择">
                        <el-option v-for="item in milk" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="subheadingBox">
                    <h5>婴儿情况</h5>
                    <div class="positionWire2"></div>
                </div>
                <div class="mgr70">
                    <h3>血压（mmHg）</h3>
                    <div class="separateBox">
                        <input type="text" class="" placeholder="低压">
                        <input type="text" class="" placeholder="高压">
                    </div>
                    <p class="redFont">此项为必填项！</p>
                </div>
                <div class="mgr70">
                    <h3>当前体重（kg）</h3>
                    <input type="text" class="pregnantPhone" placeholder="请输入当前体重">
                    <p class="redFont">此项为必填项！</p>
                </div>
                <div class="mgr70">
                    <h3>胸&nbsp;部</h3>
                    <el-select v-model="chestModel" placeholder="请选择">
                        <el-option v-for="item in milk" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="mgr70">
                    <h3>心</h3>
                    <el-select v-model="heartModel" placeholder="请选择">
                        <el-option v-for="item in milk" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="mgr0">
                    <h3>肺</h3>
                    <el-select v-model="lungModel" placeholder="请选择">
                        <el-option v-for="item in milk" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="subheadingBox">
                    <h5>婴儿情况</h5>
                    <div class="positionWire2"></div>
                </div>
                <el-radio-group v-model="radio3" @change = 'theBaby'>
                    <el-radio-button label="母乳" ></el-radio-button>
                    <el-radio-button label="混合"></el-radio-button>
                    <el-radio-button label="人工喂养"></el-radio-button>
                </el-radio-group>
            </div>
            <div class="wire"></div>
            <div>
                <div class="importDatabase1">
                    <span>新生儿评估</span>
                    <i class="joinIco"></i>
                    <span>导入模板</span>
                </div>
                <input type="text" class="malaise">
            </div>
            <div>
                <div class="importDatabase1">
                    <span>指导与处理</span>
                    <i class="joinIco2"></i>
                    <span>导入模板</span>
                </div>
                <input type="text" class="guideTheProcessing">
            </div>
        </div>
        <div class="BtnBox clearfix">
            <input type="button" value="放弃本次编辑" class="abandonBtn">
            <input type="button" value="完 成" class="finishBtn">
        </div>

    </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      // 孕妇婚姻状况
      marryType: [
        {
          value: "0",
          label: "初婚"
        },
        {
          value: "1",
          label: "再婚"
        },
        {
          value: "2",
          label: "其他"
        }
      ],
      marryTypeeModel: "",
      //   异常和未见异常
      milk: [
        {
          value: "0",
          label: "未见异常"
        },
        {
          value: "1",
          label: "异常"
        }
      ],
      milkModel: "", //乳汁
      breastModel: "", //乳房
      papillaModel: "", //乳头
      vulvaModel: "", //外阴
      vaginaModel: "", //阴道
      cervixModel: "", //宫颈
      uterusModel: "", //子宫
      lochiaModel: "", //恶露
      bilateralModel: "", //双侧附件
      chestModel: "", //胸部
      heartModel: "", //心
      lungModel: "", //肺
      textarea2: "",
      guigeSpan: "-1", //控制点亮状态 -1为默认不点亮
      kouweiSpan: "-1", //控制点亮状态
      radio3: "母乳"
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 婴儿情况
    theBaby(){
        console.log(this.radio3)
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
.mgl10 {
  margin-left: 10px;
}
.mgl24 {
  margin-left: 24px;
}
.mgl174 {
  margin-left: 174px;
}
.mgl16 {
  margin-left: 16px;
}
.mgl28 {
  margin-left: 28px;
}
.mgr0 {
  margin-right: 0px !important;
}

.mgr34 {
  margin-right: 34px !important;
}
.mgr38 {
  margin-right: 40px !important;
}
.mgr70 {
  margin-right: 68px !important;
}
.mgr76 {
  margin-right: 70px;
  display: inline-block;
}
.mgr77 {
  margin-right: 70px;
}
.mgr110 {
  margin-right: 110px;
}
.mgb12 {
  margin-bottom: 12px;
}
.w260 {
  width: 260px;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.recordNewsBox {
  width: 100%;
  min-height: 600px;
  background-color: #fff;
  box-shadow: 0px 0px 12px 4px rgba(51, 51, 51, 0.08);
  position: relative;
  #recordNewsBox_top {
    padding: 20px 26px;
    i {
      font-style: normal;
    }
    .wire {
      width: 100%;
      height: 1px;
      border-bottom: 1px dashed #ccc;
      margin-top: 24px;
    }
    .recordNewsBox_tittle {
      border-bottom: 1px solid black;
      padding-bottom: 22px;
      h2 {
        font-size: 18px;
        color: #333333;
        margin-bottom: 18px;
      }
    }
    .fake {
      position: relative;
      margin-right: 28px;
    }
    .pregnantNewsBox {
      .subheadingBox {
        width: 100%;
        position: relative;
        height: 26px;
        margin-top: 24px;
        h5 {
          background-color: #fff;
          display: block;
          z-index: 101;
          position: absolute;
          top: 0px;
          left: 0px;
          font-size: 16px;
          padding-right: 10px;
          font-weight: 500;
        }
        .positionWire2 {
          position: absolute;
          top: 10px;
          right: 0px;
          width: 100%;
          border-bottom: 1px dashed #ccc;
        }
      }
      // 孕妇基本信息块
      div {
        display: inline-block;
        h3 {
          font-size: 14px;
          color: #666666;
          margin: 10px 0;
        }
        input {
          width: 260px;
          height: 40px;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding-left: 16px;
        }
        p {
          color: #fd4242;
          display: none;
        }
      }
      .separateBox {
        width: 260px;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 8px;
        line-height: 40px;
        padding: 0 5px;
        input {
          width: 46%;
          height: 30px;
          display: inline-block;
          border: none;
          border-radius: 0px;
        }
        input:nth-child(1) {
          border-right: 1px solid #ccc;
        }
      }
      // 绑定卡号
      .bindingBox {
        width: 252px;
        line-height: 40px;
        border: 1px solid #ccc;
        border-radius: 8px;
        input {
          width: 154px;
          border: none;
        }
        .bindingBtn {
          cursor: pointer;
          height: 40px;
          width: 92px;
          background-color: #f6f6f6;
          color: #333333;
          font-size: 14px;
          line-height: 36px;
          text-align: center;
          border-radius: 8px;
        }
      }
      .feed {
        width: 84px;
        height: 36px;
        border: 1px solid #999999;
        background: #fff;
        color: #999999;
        border-radius: 8px;
        line-height: 36px;
        text-align: center;
        margin-right: 20px;
        cursor: pointer;
        margin-top: 16px;
      }
      .active {
        background-color: #68b6e7;
        border: none;
        color: #fff;
      }
    }
    .recordNewsFont {
      margin-left: 6px;
      i {
        margin: 0 10px;
      }
    }
    .importDatabase1 {
      margin-top: 24px;
      position: relative;
      span:nth-child(1) {
        font-size: 16px;
        color: #333333;
        margin-right: 40px;
        position: relative;
        &:after {
          content: " ";
          position: absolute;
          top: 2px;
          right: -16px;
          width: 2px;
          height: 14px;
          background-color: #ccc;
        }
      }
      span:nth-child(3) {
        font-size: 14px;
        color: #999999;
      }
      i {
        position: absolute;
        top: 4px;
        left: 108px;
        font-style: normal;
        background: url("../../../assets/file.png") no-repeat 0 0;
        width: 12px;
        height: 14px;
      }
      .joinIco2 {
        left: 108px;
      }
    }
    .malaise,
    .guideTheProcessing {
      width: 100%;
      margin-top: 20px;
      border-bottom: 1px solid #a7a7a7;
    }
  }
  .BtnBox {
    height: 78px;
    margin-top: 20px;
    box-shadow: 0px -4px 8px 0px rgba(51, 51, 51, 0.08);
    .finishBtn,
    .abandonBtn {
      margin-top: 18px;
      width: 187px;
      height: 42px;
      border-radius: 6px;
      font-size: 14px;
      cursor: pointer;
    }
    .finishBtn {
      background-color: #68b6e7;
      color: #ffffff;
      float: right;
      margin-right: 30px;
    }
    .abandonBtn {
      background-color: #e0e0e0;
      color: #878787;
      float: left;
      margin-left: 80px;
    }
  }
}
</style>
<style lang="less">
.el-select-dropdown__item.selected {
  color: #68b6e7;
}
/* // 孕妇基本信息组件样式修改 */
.recordNewsBox .el-input__inner {
  width: 260px;
  border-radius: 8px;
  border-color: #ccc;
  background-color: #f6f6f6;
}
.recordNewsBox {
  #recordNewsBox_top {
    .el-tabs__nav-scroll {
      height: 47px;
      line-height: 47px;
      background-color: #fff;
      color: #333333;
    }
    .el-tabs__item.is-active {
      color: #68b6e7;
    }
    .el-tabs__item:hover {
      color: #68b6e7;
      cursor: pointer;
    }
    .el-tabs__active-bar {
      background-color: #68b6e7;
    }
    .el-tabs__nav {
      margin-left: 26px;
    }
    .el-tabs__content {
      background-color: #fff;
    }

    .area-select.large,
    .spouseNewsBox .area-select.large {
      width: 260px;
      height: 40px;
      border-radius: 8px;
      background-color: #f6f6f6;
      color: #606266;
    }
    .el-carousel__arrow {
      cursor: pointer;
      -webkit-transition: 0.3s;
      transition: 0.3s;
      position: absolute;
      top: 36%;
      z-index: 10;
      color: #68b6e7;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      text-align: center;
      font-size: 36px;
      background: none;
    }
    .el-carousel__arrow--left {
      left: -4px;
    }
    .el-carousel__arrow--right {
      right: -4px;
    }
    .el-textarea {
      width: 500px;
      float: left;
    }
    .el-textarea__inner {
      display: block;
      resize: vertical;
      padding: 0px 15px;
      line-height: 1.5;
      color: #333;
      border: none;
    }
  }
  .el-radio-button,
  .el-radio-button__inner {
    margin-right: 20px;
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
  }
  .el-radio-button:first-child .el-radio-button__inner {
    border-radius: 8px;
    border: 1px solid #999999;
    color: #999999;
  }
  .el-radio-button__inner {
    border-radius: 8px;
    border: 1px solid #999999;
    color: #999999;
  }
  .el-radio-button:last-child .el-radio-button__inner {
    border-radius: 8px;
    border: 1px solid #999999;
    color: #999999;
  }
  .el-radio-button__orig-radio:checked + .el-radio-button__inner {
    background-color: #68b6e7;
    color: #fff;
    border: 1px solid #68b6e7;
  }
}
//  .el-radio-button__inner{
//         border:1px solid #999999;
//       color:#999999;
//       background-color: #fff;
//
//   }
</style>


