<template>
  <div class="recordNewsBox clearfix">
    <div id="recordNewsBox_top">
      <div class="recordNewsBox_tittle clearfix">
        <h2>新增复检记录</h2>
        <p class="fl fortyTwoTittle_left">
          <span class="fake">检查日期：<i>2018-11-11</i></span>
          <span>复健次数：<i>2次</i></span>
        </p>
        <p class="fr"><span>操作医生：<i class="doctorName">周晓晓</i></span></p>
      </div>
      <div class="pregnantNewsBox">
        <div class="mgr70">
          <h3>孕周（必填）</h3>
          <div class="separateBox">
            <input type="text" class="" placeholder="孕周">
            <input type="text" class="" placeholder="孕天">
          </div>
          <p class="redFont">此项为必填项！</p>
        </div>
        <div class="mgr70">
          <h3>当前体重（kg）</h3>
          <input type="text" class="pregnantPhone" placeholder="请输入当前体重">
          <p class="redFont">此项为必填项！</p>
        </div>
        <div class="mgr0">
          <h3>血压（mmHg）</h3>
          <div class="separateBox">
            <input type="text" class="" placeholder="低压">
            <input type="text" class="" placeholder="高压">
          </div>
          <p class="redFont">此项为必填项！</p>
        </div>
        <div class="mgr70">
          <h3>宫高（cm）</h3>
          <input type="tel" class="" placeholder="请输入宫高">
          <p class="redFont">此项为必填项！</p>
        </div>
        <div class="mgr70">
          <h3>腹围（cm）</h3>
          <input type="tel" class="" placeholder="请输入腹围">
          <p class="redFont">此项为必填项！</p>
        </div>
        <!-- </div> -->
        <div class="wire"></div>
        <!-- <div class="recordNewSelectBox"> -->
        <div class="mgr70">
          <h3>胎方位</h3>
          <el-select v-model="marryTypeeModel" placeholder="请选择">
            <el-option v-for="item in marryType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="mgr70">
          <h3>先露</h3>
          <el-select v-model="marryTypeeModel" placeholder="请选择">
            <el-option v-for="item in marryType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="mgr0">
          <h3>胎心率</h3>
          <el-select v-model="marryTypeeModel" placeholder="请选择">
            <el-option v-for="item in marryType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="mgr70">
          <h3>衔接</h3>
          <el-select v-model="marryTypeeModel" placeholder="请选择">
            <el-option v-for="item in marryType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="mgr70">
          <h3>尿蛋白</h3>
          <el-select v-model="marryTypeeModel" placeholder="请选择">
            <el-option v-for="item in marryType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="mgr0">
          <h3>浮肿</h3>
          <el-select v-model="marryTypeeModel" placeholder="请选择">
            <el-option v-for="item in marryType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="wire"></div>
        <p style="margin-top:24px;margin-bottom:12px;"><i style='color:red;margin-right:5px;'>*</i>预约下次日期</p>
        <div class="bindingBox">

          <input type="text" class="pregnantFN" placeholder="请输入年月日">
          <div class="bindingBtn" @click="dialogVisible = true">预约记录</div>
        </div>
        <span class="recordNewsFont"><i>第二次产检</i>|<i>孕13-4周</i></span>
      </div>
      <div class="wire"></div>

      <div>
        <div class="importDatabase1">
          <span>自觉不适</span>
          <i class="joinIco"></i>
          <span>导入模板</span>
        </div>
        <input type="text" class="malaise">
      </div>
      <div>
        <div class="importDatabase1">
          <span>指导处理意见</span>
          <i class="joinIco2"></i>
          <span>导入模板</span>
        </div>
        <input type="text" class="guideTheProcessing">
      </div>
      <!-- 图片上传 -->
      <div class="imageUploadBox">
        <span>检查结果</span>
        <i>注：请您不要上传模糊图，影响检查结果，最多上传不得超过20张</i>
        <div class="imageBox">
        </div>
      </div>
    </div>

    <div class="BtnBox clearfix">
      <input type="button" value="放弃本次编辑" class="abandonBtn">
      <input type="button" value="完 成" class="finishBtn">
    </div>

    <!-- // 预约下次时间弹框 -->
    <el-dialog :visible.sync="dialogVisible" width="1010px" :before-close="handleClose">
      <div class="appointmentLayer clearfix">
        <div class="fl appointmentLayer_left">
          <p>选择下次预约时间</p>
        </div>
        <div class="fr  appointmentLayer_rigth">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="正常复检" name="normal">
              <div class="reviewNumBox">
                <el-carousel arrow="hover" :autoplay="false" height="150px">
                  <el-carousel-item>
                    <ul class="clearfix reviewNum">
                      <li>
                        <p>第一次复检</p>
                        <span>孕3+14周</span>
                      </li>
                      <li>
                        <p>第二次复检</p>
                        <span>孕3+14周</span>
                      </li>
                      <li>
                        <p>第三次复检</p>
                        <span>孕3+14周</span>
                      </li>
                      <li>
                        <p>第四次复检</p>
                        <span>孕3+14周</span>
                      </li>
                      <li>
                        <p>第五次复检</p>
                        <span>孕3+14周</span>
                      </li>
                      <li>
                        <p>第六次复检</p>
                        <span>孕3+14周</span>
                      </li>
                      <li>
                        <p>第七次复检</p>
                        <span>孕3+14周</span>
                      </li>
                      <li>
                        <p>第八次复检</p>
                        <span>孕3+14周</span>
                      </li>
                      <li>
                        <p>第九次复检</p>
                        <span>孕3+14周</span>
                      </li>
                      <li>
                        <p>第十次复检</p>
                        <span>孕3+14周</span>
                      </li>
                    </ul>

                  </el-carousel-item>
                  <el-carousel-item>
                    <ul class="clearfix reviewNum">
                      <li>
                        <p>第一次复检</p>
                        <span>孕3+14周</span>
                      </li>
                      <li>
                        <p>第二次复检</p>
                        <span>孕3+14周</span>
                      </li>
                      <li>
                        <p>第三次复检</p>
                        <span>孕3+14周</span>
                      </li>
                      <li>
                        <p>第四次复检</p>
                        <span>孕3+14周</span>
                      </li>
                      <li>
                        <p>第五次复检</p>
                        <span>孕3+14周</span>
                      </li>
                      <li>
                        <p>第六次复检</p>
                        <span>孕3+14周</span>
                      </li>
                      <li>
                        <p>第七次复检</p>
                        <span>孕3+14周</span>
                      </li>
                      <li>
                        <p>第八次复检</p>
                        <span>孕3+14周</span>
                      </li>
                      <li>
                        <p>第九次复检</p>
                        <span>孕3+14周</span>
                      </li>
                      <li>
                        <p>第十次复检</p>
                        <span>孕3+14周</span>
                      </li>
                    </ul>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="wier">
              </div>
              <div class="normalRecheckCtant">
                <h3>产检项目</h3>
                <textarea>建立妊娠保健手册、确定孕周、推算预产期、评估妊娠高危因素，血压、体重指数、胎心率、血常规
                  血型（ABO和Rh）、空腹血糖、刚功能和肾功能、乙型肝炎病毒表面抗原、梅毒螺旋
                  体、HIV筛查、心电图</textarea>
              </div>
              <div class="dotted"></div>
              <div class="normalRecheckCtant">
                <h3>温馨提示</h3>
                <textarea name="" id="" style="height:74px;">第3次产检，最重要的项目是B超胎儿畸形筛查，在孕期20周做超声波检查，主要是看胎儿外观发育上
                  是否有较大问，医生会仔细量胎儿的头围、腹围、看大腿骨长度及检查脊柱是否有先天性异常。如果
                  准妈妈照的是思维彩超，还可以看到宝宝的实时面部表情呢。照彩超之前，准妈妈要做的是保持平和
                  的心态，如果过于紧张会影响胎儿的活动呢</textarea>
              </div>
            </el-tab-pane>
            <el-tab-pane label="异常复检" name="abnormal" class="abnormalRecheckBox clearfix">
              <span>异常名称：</span>
              <input type="text" placeholder="请输入异常复检名称">
              <div class="dotted"></div>
              <span class="fl">异常备注：</span>
              <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea2" clear="abnormalNote">
              </el-input>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
 
  </div>
</template>
<script>
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
      dialogVisible: false,
      activeName: "normal", //正常复检异常复检
      textarea2: ""
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
    }
  }
};
</script>
<style lang="less" scoped>
// 预约下次日期弹框
.appointmentLayer {
  width: 980px;
  height: 500px;
  padding: 16px;
  .appointmentLayer_left {
    width: 290px;
    padding: 16px 20px;
    background: #fff;
    height: 100%;
    background-color: #fff;

    p {
      color: #333333;
      font-size: 14px;
    }
  }
  .appointmentLayer_rigth {
    width: 627px;
    background-color: #fff;
    height: 100%;
    .reviewNumBox {
      .reviewNum {
        width: 580px;
        margin: auto;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        li {
          cursor: pointer;
          float: left;
          margin: 2px 7px;
          width: 102px;
          height: 56px;
          background-color: #f9f9f9;
          p {
            font-size: 14px;
          }
          span {
            font-size: 12px;
          }
        }
        li:nth-child(5n) {
          margin-right: 0px;
        }
      }
    }
    .wier {
      width: 100%;
      height: 1px;
      background-color: #ccc;
      position: relative;
      img {
        position: absolute;
        top: -5px;
        width: 10px;
        height: 10px;
        left: 50%;
      }
    }
    .normalRecheckCtant {
      padding: 0 20px;
      h3 {
        margin-top: 20px;
        font-size: 14px;
        color: #666666;
        margin-bottom: 10px;
      }
      textarea {
        height: 54px;
        width: 100%;
        font-size: 12px;
        color: #333333;
      }
    }
    .dotted {
      border-bottom: 1px dashed #ccc;
      margin: 22px 0;
    }
    .abnormalRecheckBox {
      padding: 0 20px;
      .abnormalNote {
        display: inline-block;
        width: 500px;
        border: none;
        font-size: 14px;
        color: #333;
        textarea {
          border: none;
        }
      }
    }
  }
}

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
      margin-bottom: 10px;
      h2 {
        font-size: 18px;
        color: #333333;
        margin-bottom: 18px;
      }
    }
    .fake {
      position: relative;
      margin-right: 28px;
      &:after {
        content: " ";
        position: absolute;
        top: 2px;
        right: -14px;
        width: 2px;
        height: 14px;
        background-color: #ccc;
      }
    }
    .pregnantNewsBox {
      // 孕妇基本信息块
      div {
        // margin-right: 70px;
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
          border-radius: 4px; // margin: 10px 0px;
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
        border-radius: 4px;
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
        border-radius: 4px;
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
          border-radius: 4px;
        }
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
        left: 90px;
        font-style: normal;
        background: url("../../../assets/file.png") no-repeat 0 0;
        width: 12px;
        height: 14px;
      }
      .joinIco2 {
        left: 120px;
      }
    }
    .malaise,
    .guideTheProcessing {
      width: 100%;
      margin-top: 20px;
      border-bottom: 1px solid #a7a7a7;
    }

    // 图片上传模块
    .imageUploadBox {
      margin-top: 20px;
      span {
        font-size: 16px;
        color: #333333;
      }
      i {
        font-size: 12px;
        color: #999999;
        font-style: normal;
        margin-left: 12px;
      }
      .imageBox {
        background-color: #ccc;
        width: 100%;
        height: 100px;
        margin-top: 22px;
      }
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
        border-radius: 4px;
        font-size: 14px;
      }
      .finishBtn {
        background-color: #68b6e7;
        color: #ffffff;
        float: right;
        margin-right:30px;
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
      border-radius: 4px;
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
    .el-dialog {
      position: relative;
      margin: 0 auto 50px;
      border-radius: 2px;
      -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 50%;
      background: #f9f9f9;
    }
    .dialog-footer {
      overflow: hidden;
      .el-button--default {
        float: left;
        width: 216px;
        height: 44px;
        background-color: #cccccc;
        color: #999999;
      }
      .el-button--primary {
        width: 216px;
        height: 44px;
        background-color: #68b6e7;
        color: #fff;
      }
    }
  }
}
</style>


