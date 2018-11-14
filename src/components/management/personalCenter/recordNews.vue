<template>
  <div class="recordNewsBox">
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
        <div class="bindingBtn">预约记录</div>
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
      <!-- <div class="discomfortBox"> -->
        <input type="text" class="malaise">
      <!-- </div> -->
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
  </div>

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
      marryTypeeModel: ""
    };
  }
};
</script>
<style lang="less" scoped>
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
        border-radius: 8px; // margin: 10px 0px;
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
  }
  .recordNewsFont {
    margin-left: 6px;
    i {
      margin: 0 10px;
    }
  }
  .importDatabase1 {
    margin-top:24px;
    position: relative;
    span:nth-child(1) {
      font-size: 16px;
      color: #333333;
      margin-right:40px;
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
      left:90px;
      font-style: normal;
      background: url("../../../assets/file.png") no-repeat 0 0;
      width: 12px;
      height: 14px;
    }
    .joinIco2{
      left:120px;
  }
  }
  .malaise,.guideTheProcessing{
    width: 100%;
    margin-top:20px;
    border-bottom: 1px solid #a7a7a7;
  }

  // 图片上传模块
  .imageUploadBox{
    margin-top:20px;
    span{
      font-size: 16px;
      color:#333333;
    }
    i{
      font-size: 12px;
      color:#999999;
      font-style: normal;
      margin-left: 12px;
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
</style>


