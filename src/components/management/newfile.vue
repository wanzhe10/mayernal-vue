<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="孕妇基本信息" name="first">
      <!-- 孕妇基本信息 -->
      <div class="pregnantNewsBox ">
        <div class="mgr70">
          <h3>孕妇姓名（必填）</h3>
          <input type="text" class="pregnantName" placeholder="请输入姓名">
          <p class="redFont">此项为必填项！</p>
        </div>
        <div class="mgr70 bindingBox">
          <h3>就诊卡号（必填）</h3>
          <input type="text" class="pregnantFN" placeholder="请输入就诊卡号">
          <p class="redFont">此项为必填项！</p>
          <div class="bindingBtn">卡号绑定</div>
        </div>
        <div class="mgr0">
          <h3>手机号</h3>
          <input type="text" class="pregnantPhone" placeholder="请输入手机号">
          <p class="redFont">此项为必填项！</p>
        </div>
        <div class="mgr70">
          <h3>证件类型（必填）</h3>
          <el-select v-model="value1" placeholder="请选择">
            <el-option v-for="item in idCardSelect" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>

          <p class="redFont">此项为必填项！</p>
        </div>
        <div class="mgr70">
          <h3>身份证号（必填）</h3>
          <input type="tel" class="pregnantIdCard" placeholder="请输入身份证号码">
          <p class="redFont">此项为必填项！</p>
        </div>
        <div class="mgr0 birthBox">
          <h3>出生年月（自动获取）</h3>
          <input type="text" class="layui-input pregnantDateBirth" placeholder="" id="test1" readonly="readonly">
          <h5 class="birth">
            <span class="birth_sex">女</span>
          </h5>
        </div>
        <div class="mgr70">
          <h3>结婚年龄（岁）</h3>
          <input type="text" class="pregnantMarriageAge" placeholder="请输入结婚年龄">
          <p class="redFont">此项为必填项！</p>
        </div>
        <div class="mgr70">
          <h3>孕前体重（kg）</h3>
          <input type="text" class="pregnantWeight" placeholder="请输入年龄">
          <p class="redFont">此项为必填项！</p>
        </div>
        <div class="wire"></div>
        <div class="mgr70">
          <h3>婚姻状况</h3>
          <el-select v-model="value2" placeholder="请选择">
            <el-option v-for="item in marryType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="mgr70">
          <h3>婚检</h3>
          <el-select v-model="value3" placeholder="请选择">
            <el-option v-for="item in marryCheck" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="mgr0">
          <h3>近半年避孕方法</h3>
          <el-select v-model="value4" placeholder="请选择">
            <el-option v-for="item in contraception" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="mgr70">
          <h3>文化程度</h3>
          <el-select v-model="value5" placeholder="请选择">
            <el-option v-for="item in education" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="mgr70">
          <h3>民族</h3>
          <el-select v-model="value6" placeholder="请选择">
            <el-option v-for="item in nation" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <br />
        <div class="mgr70">
          <h3>职业</h3>
          <el-select v-model="value7" placeholder="请选择">
            <el-option v-for="item in job" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="mgr70">
          <h3>工作单位</h3>
          <input type="text" class="work" placeholder="请输入工作单位">
        </div>
        <div class="wire"></div>
        <div class="mgr70">
          <h3>户口所在地</h3>
          <el-select v-model="value8" placeholder="请选择">
            <el-option v-for="item in registered" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <input type="text" placeholder="请输入详细地址" class="mgl16">
        </div>
        <div class="mgr70">
          <h3>现住地址</h3>
          <el-select v-model="value9" placeholder="请选择">
            <el-option v-for="item in presentAddress" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>

          <input type="text" placeholder="请输入详细地址" class="presentAddress mgl16">
        </div>

      </div>
    </el-tab-pane>
    <el-tab-pane label="配偶一般信息" name="second">
      <!-- 配偶一般信息 -->
      <div class=" spouseNewsBox  clearfix">
        <div class="mgr70">
          <h3>配偶姓名</h3>
          <input type="text" class="spouseName" placeholder="请输入姓名">
          <p class="redFont">此项为必填项！</p>
        </div>
        <div class="mgr70">
          <h3>手机号</h3>
          <input type="number" class="spousePhone" placeholder="请输入手机号">
          <p class="redFont">此项为必填项！</p>
        </div>
        <div class="mgr0">
          <h3>结婚年龄（岁）</h3>
          <input type="number" class="spouseMarriageAge" placeholder="请输入结婚年龄">
          <p class="redFont">此项为必填项！</p>
        </div>
        <div class="mgr70">
          <h3>证件类型</h3>
          <el-select v-model="value10" placeholder="请选择">
            <el-option v-for="item in spouseIdCardType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>

          <p class="redFont">此项为必填项！</p>
        </div>
        <div class="mgr70">
          <h3>身份证号</h3>
          <input type="tel" class="spouseIdCard" placeholder="请输入身份证号码">
          <p class="redFont">此项为必填项！</p>
        </div>
        <div class="mgr0 birthBox">
          <h3>配偶年龄</h3>
          <input type="number" class="spouseAge">
          <h5 class="birth">
            <span class="birth_sex">男</span>
          </h5>
        </div>
        <div class="wire"></div>

        <div class="mgr70">
          <h3>结婚状况</h3>
          <el-select v-model="value11" placeholder="请选择">
            <el-option v-for="item in spouseMarryType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
             
        <div class="mgr70">
          <h3>婚检</h3>
          <el-select v-model="value12" placeholder="请选择">
            <el-option v-for="item in spouseMarryCheck" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="mgr0">
          <h3>健康状态</h3>
          <el-select v-model="value13" placeholder="请选择">
            <el-option v-for="item in healthType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="mgr70">
          <h3>文化程度</h3>
          <el-select v-model="value14" placeholder="请选择">
            <el-option v-for="item in spouseEducation" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="mgr70">
          <h3>民族</h3>
          <el-select v-model="value15" placeholder="请选择">
            <el-option v-for="item in spouseNation" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="wire"></div>
        <div class="somkingBox clearfix">
                                <div class="somkingFont">吸烟</div>
                                 <div class="somkingSelect clearfix">
                                      <el-radio v-model="radio1" label="1">是</el-radio>
                                <el-radio v-model="radio1" label="2">否</el-radio>
                                </div>
                             
                            </div>

                               <div class="somkingBox clearfix">
                                <div class="somkingFont">饮酒</div>
                                  <div class="somkingSelect clearfix">
                                        <el-radio v-model="radio2" label="1">是</el-radio>
                                <el-radio v-model="radio2" label="2">否</el-radio>
                                </div>
                               
                            </div>
                            <!-- 家族史 -->
                            <div class="somkingBox clearfix" style="margin-right:0px;">
                                <div class="somkingFont">家族史</div>
                                 <div class="somkingSelect clearfix">
                                     <el-radio v-model="radio3" label="1">是</el-radio>
                                <el-radio v-model="radio3" label="2">否</el-radio>
                                </div>
                             
                            </div>
                                <!-- 吸烟隐藏显示块 -->
                            <div class="somkingCirculationBox">
                                <p>请您输入每天的支数</p>
                                <input type="text" placeholder="请输入" class="cigaretteNUm">
                                <h5 class="birth">
                                    <span class="bar_day">支/日</span>
                                </h5>
                            </div>
                            <!-- 饮酒隐藏显示块 -->
                            <div class="drinkCirculationBox">
                                <p>请选择饮酒习惯</p>
                                <a href="jsvascript:;" class="drinkOccasionally">偶尔</a>
                                <a href="jsvascript:;" class="drinkOften">经常</a>
                            </div>
                            <!-- 家族史隐藏显示块 -->
                            <div class="history1CirculationBox" style="margin-right:0px;">
                                <input type="email" class="inquire" placeholder="请输入拼音首字母" onKeyUp="value=value.replace(/[\W]/g,'')">
                                <i class="seekIcon"></i>
                                <p>已选择</p>
                                <ul class="hideBox clearfix">
                                    <li>糖尿病1</li>
                                    <li>糖尿病2</li>
                                    <li>糖尿病3</li>
                                    <li>糖尿病4</li>
                                    <li>糖尿病5</li>
                                    <li>糖尿病6</li>
                                </ul>
                                <div class="history1Select">
                                    <ul>
                                        <li>选择1</li>
                                        <li>选择2</li>
                                        <li>选择3</li>
                                        <li>选择4</li>
                                        <li>选择5</li>
                                        <li>选择6</li>
                                        <li>选择7</li>
                                        <li>选择8</li>
                                        <li>选择9</li>
                                        <li>选择10</li>
                                    </ul>
                                </div>
                            </div>
                              <div class="wire"></div>

                            <div class="mgr76 spouseSiteBox">
                                <p>现住地址</p>
                                <el-select v-model="value16" placeholder="请选择">
            <el-option v-for="item in spousePresentAddress" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
                                <input type="text" placeholder="请输入详细地址" class="mgl16">
                            </div>

      </div>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName: "second",
         radio1: '1',
         radio2: '1',
         radio3: '1',
      idCardSelect: [
        {
          value: "0",
          label: "居民身份证"
        },
        {
          value: "1",
          label: "护照"
        }
      ],
      spouseIdCardType: [
        {
          value: "0",
          label: "居民身份证"
        },
        {
          value: "1",
          label: "护照"
        }
      ],
      contraception: [
        {
          value: "0",
          label: "未避孕"
        },
        {
          value: "1",
          label: "口服避孕药"
        },
        {
          value: "2",
          label: "避孕套"
        },
        {
          value: "3",
          label: "避孕膜"
        },
        {
          value: "4",
          label: "其他"
        }
      ],
      marryCheck: [
        {
          value: "0",
          label: "没有"
        },
        {
          value: "1",
          label: "有"
        }
      ],
      education: [
        {
          value: "0",
          label: "硕士以上"
        },
        {
          value: "1",
          label: "本科"
        },
        {
          value: "2",
          label: "大专"
        },
        {
          value: "3",
          label: "中专及高中"
        },
        {
          value: "4",
          label: "初中"
        },
        {
          value: "5",
          label: "文盲"
        }
      ],
      job: [
        {
          value: "0",
          label: "无"
        },
        {
          value: "1",
          label: "农、牧、渔"
        },
        {
          value: "2",
          label: "干部、职员"
        },
        {
          value: "3",
          label: "医院、科技"
        },
        {
          value: "4",
          label: "工人"
        },
        {
          value: "5",
          label: "个体"
        },
        {
          value: "6",
          label: "家务"
        }
      ],
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
      nation: [
        {
          value: "0",
          label: "北京"
        }
      ],
      registered: [
        {
          value: "0",
          label: "北京"
        }
      ],
      presentAddress: [
        {
          value: "0",
          label: "北京"
        }
      ],
      spousePresentAddress: [
        {
          value: "0",
          label: "北京"
        }
      ],
      

      spouseMarryType: [
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
           
    spouseMarryCheck: [ 
          { 
          value: "0",
          label: "没有"
          },
          {
          value: "1",
          label: "有"
          },
          ],
          healthType: [
          {
          value: "0",
          label: "健康"
          },
          {
          value: "1",
          label: "一般"
          },
          {
          value: "2",
          label: "较弱"
          },
          ],
          spouseEducation: [
          {
          value: "0",
          label: "硕士以上"
          },
          {
          value: "1",
          label: "本科"
          },
          {
          value: "2",
          label: "大专"
          },
          {
          value: "3",
          label: "中专及高中"
          },
          {
          value: "4",
          label: "初中"
          },
          {
          value: "5",
          label: "文盲"
          }
          ],
          spouseNation: [
          {
          value: "0",
          label: "北京"
          }
          ],
     
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      value9: "",
      value10: "",
      value11: "",
      value12: "",
      value13: "",
      value14: "",
      value15: "",
      value16: "",
    };
  }
};
</script>
<style lang="less">
.mgr70 {
  margin-right: 70px !important;
}
.el-tabs__nav-scroll {
  height: 64px;
  line-height: 64px;
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
  padding: 14px 24px 24px 26px;
}
// 孕妇基本信息
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
    .layui-unselect,
    .layui-form-select {
      width: 260px;
      height: 40px; // margin: 10px 0px;
      input {
        background-color: #f6f6f6;
      }
    }
  }
  div:nth-child(3n) {
    margin-right: 0px;
  }
  .wire {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ccc;
    margin-top: 24px;
  } // 绑定卡号
  .bindingBox {
    position: relative;
    .bindingBtn {
      position: absolute;
      top: 38px;
      right: 0;
      width: 72px;
      height: 40px;
      background-color: #68b6e7;
      color: #fff;
      font-size: 14px;
      line-height: 40px;
      text-align: center;
      border-radius: 8px;
    }
  } // 出生年月
  .birthBox {
    position: relative;
    .birth {
      position: absolute;
      top: 50px;
      right: 10px;
      display: inline;
      color: #666666;
      .birth_age {
        position: relative;
        margin-right: 10px;
      }
      .birth_sex {
        margin-right: 8px;
        &:before {
          content: " ";
          position: absolute;
          top: -10px;
          right: 36px;
          width: 1px;
          height: 40px;
          background: #cccccc;
        }
      }
    }
  }
}
.el-select {
  input {
    background-color: #f6f6f6;
    color: #333333;
  }
}
.el-select .el-input.is-focus .el-input__inner {
  border-color: #68b6e7;
}
.el-select-dropdown__item.selected {
  color: #68b6e7;
}
// 配偶一般信息模块
.spouseNewsBox {
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
    .redFont {
      color: #fd4242;
      display: none;
    }
    .layui-unselect,
    .layui-form-select {
      input {
        background-color: #f6f6f6;
      }
    }
  }
  .wire {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ccc;
    margin-top: 24px;
  } // 绑定卡号
  .bindingBox {
    position: relative;
    .bindingBtn {
      position: absolute;
      top: 38px;
      right: -76px;
      width: 72px;
      height: 40px;
      background-color: #68b6e7;
      color: #fff;
      font-size: 14px;
      line-height: 40px;
      text-align: center;
      border-radius: 8px;
    }
  } // 出生年月
  .birthBox {
    position: relative;
    .birth {
      position: absolute;
      top: 50px;
      right: 10px;
      display: inline;
      color: #666666;
      .birth_age {
        position: relative;
        margin-right: 10px;
      }
      .birth_sex {
        margin-right: 8px;
        &:before {
          content: " ";
          position: absolute;
          top: -10px;
          right: 36px;
          width: 1px;
          height: 40px;
          background: #cccccc;
        }
      }
    }
  } //吸烟等三个模块
  .somkingBox {
    margin-top: 24px;
    margin-right: 70px;
    width: 260px;
    height: 52px;
    line-height: 52px;
    .somkingFont {
      width: 75px;
      height: 52px;
      background-color: #f6f6f6;
      text-align: center;
      line-height: 52px;
      float: left;
    }
    .somkingSelect {
      padding-left: 26px;
      width: 185px;
      float: left;
      .smkingYes {
        width: 50%;
        float: left;
        position: relative;
        &:before {
          content: " ";
          position: absolute;
          top: 15px;
          right: 18px;
          width: 1px;
          height: 20px;
          background: #cccccc;
        }
      }
      .smokingNo {
        float: left;
        width: 50%;
      }
      .layui-form-radio {
        line-height: 52px;
        margin: 0px;
        font-size: 0;
      }
    }
  } // 吸烟显示隐藏等三个模块
  .somkingCirculationBox,
  .drinkCirculationBox,
  .history1CirculationBox {
    float: left;
    margin-top: 24px;
    margin-right: 70px;
    width: 260px; // height: 86px;
    position: relative;
     box-shadow: 0px 0px 12px 4px rgba(51, 51, 51, 0.08);
    p {
      font-size: 12px;
      color: #666666;
      margin-bottom: 12px;
    }
  } // 配偶吸烟显示隐藏快
  .somkingCirculationBox {
    // text-align: center;
    padding: 14px 18px 14px 18px;
    input {
      width: 224px;
      height: 32px;
    }
    .birth {
      position: absolute;
      top: 50px;
      right: 20px;
      display: inline;
      color: #666666;
      .bar_day {
        margin-right: 8px;
        &:before {
          content: " ";
          position: absolute;
          top: -7px;
          right: 52px;
          width: 1px;
          height: 30px;
          background: #cccccc;
        }
      }
    }
  } // 配偶饮酒显示隐藏块
  .drinkCirculationBox {
    padding: 13px 20px 13px 20px;
    .drinkOccasionally,
    .drinkOften {
      width: 80px;
      height: 32px;
      font-size: 14px;
      text-align: center;
      line-height: 32px;
      border: 1px solid #ccc;
      display: inline-block;
      border-radius: 8px;
    }
    .drinkOccasionally {
      margin-right: 50px;
    }
    .active {
      background-color: #68b6e7;
      color: #fff;
      border: none;
    }
  } // 配偶显示隐藏家族史块
  .history1CirculationBox {
    padding: 10px 14px 5px 14px;
    position: relative;
    input {
      width: 226px;
      height: 32px;
    }
    p {
      margin-top: 12px;
    }
    .seekIcon {
      background: url("/maternal-web/images/seek.png") no-repeat 0 0;
      width: 14px;
      height: 14px;
      background-size: 14px 14px;
      position: absolute;
      top: 20px;
      right: 30px;
    }
    .hideBox {
      li {
        float: left;
        width: 65px;
        height: 30px;
        background-color: #68b6e7;
        color: #fff;
        text-align: center;
        line-height: 30px;
        border-radius: 8px;
        margin-right: 12px;
        margin-bottom: 8px;
      }
    }
    .history1Select {
      // display: none;
      width: 226px;
      height: 200px;
      position: relative;
      overflow: hidden;
      ul {
        position: absolute;
        left: 0;
        top: 0;
        right: -17px;
        bottom: 0;
        overflow-x: hidden;
        overflow-y: scroll;
        li {
          font-size: 14px;
          margin: 0;
          padding: 10px;
          border-bottom: 1px;
          border-bottom-style: solid;
          border-bottom-color: #999;
        }
        li:hover {
          background-color: #d4e8f5;
        }
      }
    }
  } // 配偶现住地址块
  .spouseSiteBox {
    p {
      margin-top: 24px;
      font-size: 14px;
      color: #666666;
      margin-bottom: 16px;
    }
  }
}
 .el-radio__input.is-checked .el-radio__inner{
   border-color: #68b6e7;
    background: #68b6e7;
 }
 .el-radio__input.is-checked+.el-radio__label{
   color: #68b6e7;
 }

</style>
