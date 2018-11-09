<template>
    <!-- 个人信息模块 -->
    <div id="personalCenter">
        <div class="informationBox clearfix">
            <div class="informationBox_left clearfix">
                <div class="headIcon">
                    <a href="javascript:;">
                        <div class="preview">预&nbsp;览</div>
                    </a>
                </div>
                <p>
                    <span class="name">王多余</span>
                    <span class="age">25岁</span>
                </p>
                <div class="BMLValue">BMI值</div>
                <i class="crossIcon"></i>
            </div>
            <div class="informationBox_right">
                <div class="newsBoxTop">
                    <p><span>就诊卡号：</span>98054321<span></span></p>
                    <p><span>建档时间：</span>2018-09-28<span></span></p>
                    <p><span>联系方式：</span><span>16619703541</span></p>
                    <p><span>身份证号：</span><span>130184199903292018x</span></p>
                    <p><span>出生年月：</span><span>1999-03-29</span></p>
                    <p><span class="mgl24">血 型：</span><span>O型</span></p>
                    <p><span>孕前体重：</span><span>65kg</span></p>
                    <p><span class="mgl12">孕产史：</span><span>13+14周</span></p>
                </div>
                <div class="newsBoxBottom">
                    <p class="newsBoxBottomFamily"><span>家族史：</span><span>高血压、冠心病、阑尾炎、精神病</span></p>
                    <div class="assessmentInformation">
                        <span class="pdl0 mgr0">高危因素：</span>
                        <span class="greenStrip">绿色（12）项</span>
                        <span class="yellowStrip">黄色（12）项</span>
                        <span class="orangeStrip">橙色（12）项</span>
                        <span class="redStrip">红色（12）项</span>
                        <span class="proponStrip">紫色（12）项</span>
                    </div>
                </div>
            </div>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="复检记录" name="recheck">
                <div class="recordNumsBox">
                    <h2>产检记录（<i class="recordNum">10</i>）<i class="crossIcon"></i></h2>
                    <ul >
                        <li class="active">
                            <p>第一次产检</p>
                            <span>2018-12-12</span>
                            <div class="triangleIocn"></div>

                        </li>
                        <li>
                            <p>第二次产检</p>
                            <span>2018-12-12</span>
                            <div class="triangleIocn"></div>

                        </li>
                        <li>
                            <p>第三次产检</p>
                            <span>2018-12-12</span>
                            <div class="triangleIocn"></div>

                        </li>
                        <li class="">
                            <p>第四次产检</p>
                            <span>2018-12-12</span>
                            <div class="triangleIocn"></div>

                        </li>
                        <li>
                            <p>第五次产检</p>
                            <span>2018-12-12</span>
                            <div class="triangleIocn"></div>
                        </li>
                    </ul>
                </div>
                <!-- 复检右边详细信息块 -->
                <div class="recheckDetailedInformation">
                    <p class="tableHeader"><span class="recheckDegree">第二次产检</span><span class="recheckWeek">5+3周</span></p>
                    <p><span class="cl666">检查日期：</span><span class="examination">2018-12-12</span><span class="cl666">预约下次日期：</span><span>2018-11-11</span></p>
                    <div class="wire"></div>
                    <div class="recheckTable clearfix">
                        <div>
                            <i class="triangleIocn1"></i>
                            <p>血压：<span>110/120</span><i>mmHg</i></p>
                            <p>体重：<span>110</span><i>kg</i></p>
                            <p>宫高：<span>15</span><i>cm</i></p>
                            <p>腹围：<span>50</span><i>cm</i></p>
                        </div>
                        <div>
                            <i class="triangleIocn2"></i>
                            <p>胎方位：<span>枕左前位</span></p>
                            <p>先&nbsp;&nbsp;&nbsp;露：<span>头先露</span></p>
                            <p>衔&nbsp;&nbsp;&nbsp;接：<span>已衔接</span></p>
                        </div>
                        <div>
                            <p>胎心率：<span>110 次/分</span></p>
                            <p>浮&nbsp;&nbsp;&nbsp;肿：<span>轻</span></p>
                            <p>腹&nbsp;&nbsp;&nbsp;围：<span>+1</span></p>
                        </div>
                    </div>
                    <!-- 自觉不适查看全部 -->
                    <div class="lookAtallBtnBox">
                        <h2>自觉不适</h2>
                        <div class="positionWire"></div>
                        <div class="basicLookAtallBtn conscientiousAll">
                            <span>查看全部</span>
                            <i class="el-icon-arrow-down" id="conscientiousAllIcon"></i>
                        </div>
                    </div>
                    <!-- 自觉不适内容 -->
                    <p class="malaise">哪里那里离有点好像不舒服呀，怎办法呢哪里那里离有点好像不舒服呀，怎办法呢，哪里那里离有点好像不舒服
                        呀，怎办法呢哪里那里离有点好像不舒服呀，怎办法呢哪里那里离有点好像不舒服呀，怎办法呢</p>

                    <!-- 指导处理意见查看全部 -->
                    <div class="lookAtallBtnBox">
                        <h2>指导处理意见</h2>
                        <div class="positionWire2"></div>
                        <div class="guidanceBtn">
                            <span>查看全部</span>
                            <i class="el-icon-arrow-down" id="guidanceBtnIcon"></i>
                        </div>
                    </div>
                    <!-- 指导处理意见内容 -->
                    <p class="handlingSuggestion">哪里那里离有点好像不舒服呀，怎办法呢哪里那里离有点好像不舒服呀，怎办法呢，哪里那里离有点好像不舒服
                        呀，怎办法呢哪里那里离有点好像不舒服呀，怎办法呢哪里那里离有点好像不舒服呀，怎办法呢</p>

                    <!-- 检查结果查看全部 -->
                    <div class="lookAtallBtnBox">
                        <h2>检查结果</h2>
                        <div class="positionWire"></div>
                        <div class="inspectionResult">
                            <span>查看全部</span>
                            <i class="el-icon-arrow-down" id="inspectionResultIcon"></i>
                        </div>
                    </div>

                    <!-- 检查结果内容 -->
                    <div class="consequenceBox">
                        <ul class="clearfix">
                            <li>
                                <div></div>
                            </li>
                            <li>
                                <div></div>
                            </li>
                            <li>
                                <div></div>
                            </li>
                            <li>
                                <div></div>
                            </li>
                            <li>
                                <div></div>
                            </li>
                            <li>
                                <div></div>
                            </li>
                            <li>
                                <div></div>
                            </li>
                            <li>
                                <div></div>
                            </li>
                            <li>
                                <div></div>
                            </li>
                            <li>
                                <div></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="高危评估记录" name="evaluate">

                <!-- 高危评估块 -->
                <div class="layui-tab-item spouseNewsBox layui-show assessBox clearfix">
                    <div class="spouseNumsBox">
                        <h2>评估记录（<i class="spouseNum">10</i>）<i class="crossIcon"></i></h2>
                        <ul>
                            <li class="active">
                                <i class="colorLump level1"></i>
                                <p>第二次评估</p>
                                <span>2018-12-12</span>
                                <div class="triangleIocn"></div>
                            </li>
                            <li>
                                <i class="colorLump level3"></i>
                                <p>第二次评估</p>
                                <span>2018-12-12</span>
                                <div class="triangleIocn"></div>

                            </li>
                            <li>
                                <i class="colorLump level4"></i>
                                <p>第三次评估</p>
                                <span>2018-12-12</span>
                                <div class="triangleIocn"></div>

                            </li>
                            <li class="">
                                <i class="colorLump level0"></i>
                                <p>第四次评估</p>
                                <span>2018-12-12</span>
                                <div class="triangleIocn"></div>

                            </li>
                            <li>
                                <i class="colorLump level2"></i>
                                <p>第五次评估</p>
                                <span>2018-12-12</span>
                                <div class="triangleIocn"></div>
                            </li>
                        </ul>
                    </div>
                    <div class="assessDetailedInformation">
                        <p class="tableHeader"><span class="assessDegree">第二次评估</span><span class="assessexamination">2018-12-12</span><span class="assessWeek">5+3周</span></p>
                        <div class="wire"></div>

                        <!-- 自觉不适查看全部 -->
                        <div class="lookAtallBtnBox">
                            <h2>评估信息</h2>
                            <div class="positionWire"></div>
                            <div class="assessInformationBtn">
                                <span>查看全部</span>
                                <i class="el-icon-arrow-down" id="assessInformationIcon"></i>
                            </div>
                        </div>
                        <!-- 自觉不适内容 -->
                        <div class="assessInformationBox">
                            <p class="mgb16"><i class="level0"></i> <span class="colour">绿色（低风险）</span><span class="greenNum">10项</span></p>
                            <p class="colorTxt greenText">孕妇基本情况良好，未发现妊娠合</p>
                            <p class="mgb16"><i class="level3"></i> <span class="colour">红色（高风险）</span><span class="redNum">8项</span></p>
                            <p class="colorTxt redText">孕妇基本情况良好，未发现妊娠合</p>
                            <p class="mgb16"><i class="level1"></i> <span class="colour">黄色（一般风险）</span><span class="yellowNum">6项</span></p>
                            <p class="colorTxt yellowText">孕妇基本情况良好，未发现妊娠合</p>
                            <p class="mgb16"><i class="level2"></i> <span class="colour">橙色（较高风险）</span><span class="orangeNum">4项</span></p>
                            <p class="colorTxt orangeText">孕妇基本情况良好，未发现妊娠合</p>
                            <p class="mgb16"><i class="level4"></i> <span class="colour">紫色（传染性疾病）</span><span class="purpleNum">2项</span></p>
                            <p class="colorTxt purpleText">孕妇基本情况良好，未发现妊娠合</p>
                        </div>

                        <div class="lookAtallBtnBox">
                            <h2>备注信息</h2>
                            <div class="positionWire2"></div>
                            <div class="postscriptBtn">
                                <span>查看全部</span>
                                <i class="el-icon-arrow-down" id="postscriptBtnIcon"></i>
                            </div>
                        </div>

                        <p class="postscriptContent">哪里那里离有点好像不舒服呀，怎办法呢哪里那里离有点好像不舒服呀，怎办法呢，哪里那里离有点好像不舒服
                            呀，怎办法呢哪里那里离有点好像不舒服呀，怎办法呢哪里那里离有点好像不舒服呀，怎办法呢</p>

                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="产后42天检查记录" name="record">产后42天检查记录</el-tab-pane>
        </el-tabs>
    </div>

</template>
<script>
export default {
  data() {
    return {
      activeName: "recheck"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="less" scoped>
.w78 {
  width: 78px;
}

.w80 {
  width: 80px;
}

.w84 {
  width: 84px;
}

.w86 {
  width: 86px;
}

.w112 {
  width: 112px;
}

.w122 {
  width: 122px;
}

.w124 {
  width: 124px;
}

.w150 {
  width: 150px;
}

.mgl10 {
  margin-left: 10px;
}

.mgl12 {
  margin-left: 12px;
}

.mgl16 {
  margin-left: 16px;
}

.mgl24 {
  margin-left: 24px;
}

.mgl28 {
  margin-left: 28px;
}

.mgl174 {
  margin-left: 174px;
}

.mgr0 {
  margin-right: 0px !important;
  display: inline-block;
}

.mgr30 {
  margin-right: 30px !important;
}

.mgr34 {
  margin-right: 34px !important;
}

.mgr38 {
  margin-right: 44px !important;
}

.mgr76 {
  margin-right: 76px;
  display: inline-block;
}

.mgr77 {
  margin-right: 78px;
}

.mgb0 {
  margin-bottom: 0px !important;
}

.mgt140 {
  margin-top: 140px !important;
}

.mgb12 {
  margin-bottom: 12px;
}
.mgb16 {
  margin-bottom: 16px;
}

.mgb20 {
  margin-bottom: 20px;
}

.pdl0 {
  padding-left: 0px !important;
  color: #666;
}

.fl {
  float: left;
}

.fr {
  float: right;
}
.cl666 {
  color: #666666;
}

#personalCenter {
  .informationBox {
    width: 978px;
    background-color: #fff;
    .informationBox_left {
      float: left;
      padding-top: 20px;
      position: relative;
      width: 164px;
      &:before {
        content: " ";
        position: absolute;
        top: 16px;
        right: 0px;
        width: 1px;
        height: 155px;
        background: #ccc;
      }
      .headIcon {
        overflow: hidden;
        width: 74px;
        height: 74px; // .height(173);
        border-radius: 50%;
        background-color: #ededed;
        border-width: 1px;
        border-style: solid;
        position: relative;
        border-color: #7dc1ea; // .margin(0, 0, 20, 152);
        background-image: url("../../../assets/woman.png");
        background-repeat: none;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        margin: 0 auto;
        a {
          position: absolute;
          top: 50px;
          left: 0;
          .preview {
            text-align: center;
            background-color: black;
            opacity: 0.5;
            height: 25px;
            line-height: 25px;
            width: 70px;
            font-size: 12px;
            color: #fff;
          }
        }
      }
      p {
        text-align: center;
        margin-top: 14px;
      }
      .name {
        font-size: 14px;
        color: #333333;
      }
      .age {
        display: inline-block;
        width: 36px;
        height: 18px;
        background-color: #95ccee;
        text-align: center;
        line-height: 18px;
        border-radius: 25%;
        color: #666666;
        font-size: 12px;
      }
      .BMLValue {
        width: 100px;
        height: 38px;
        background-color: #77bee9;
        color: #fff;
        text-align: center;
        line-height: 38px;
        font-size: 12px;
        border-radius: 50px 50px 50px 50px;
        margin: 14px auto;
        cursor: pointer;
      }

      .crossIcon {
        background: url("../../../assets/cross.png") no-repeat 0 0;
        width: 8px;
        height: 8px;
        position: absolute;
        top: 88px;
        right: -3px;
        background-color: #fff;
      }
    }
    .informationBox_right {
      float: left;
      width: 814px;
      .newsBoxTop {
        padding: 6px 0 14px 0px;
        border-bottom: 1px solid #ccc;
        margin-left: 26px;
        p {
          width: 32%;
          margin-top: 16px;
          display: inline-block;
          span:nth-child(2n-1) {
            color: #666666;
            margin-right: 14px;
            text-align: right;
          }
        }
      }
      .newsBoxBottom {
        margin-left: 26px;
        padding: 6px 0 0px 0px;
        .newsBoxBottomFamily {
          margin-bottom: 14px;
          span:nth-child(2n-1) {
            color: #666666;
            margin-right: 14px;
            text-align: right;
          }
        }
        .assessmentInformation {
          span {
            position: relative;
            margin-right: 20px;
            padding-left: 16px;
          }
          .greenStrip {
            &:after {
              content: " ";
              position: absolute;
              top: 4px;
              left: 0;
              width: 10px;
              height: 10px;
              background-color: green;
              border-radius: 50%;
            }
            &:before {
              content: " ";
              position: absolute;
              top: 2px;
              right: -14px;
              width: 1px;
              height: 10px;
              background-color: #ccc;
            }
          }
          .yellowStrip {
            &:after {
              content: " ";
              position: absolute;
              top: 4px;
              left: 0;
              width: 10px;
              height: 10px;
              background-color: yellow;
              border-radius: 50%;
            }
            &:before {
              content: " ";
              position: absolute;
              top: 2px;
              right: -14px;
              width: 1px;
              height: 10px;
              background-color: #ccc;
            }
          }
          .orangeStrip {
            &:after {
              content: " ";
              position: absolute;
              top: 4px;
              left: 0;
              width: 10px;
              height: 10px;
              background-color: orange;
              border-radius: 50%;
            }
            &:before {
              content: " ";
              position: absolute;
              top: 2px;
              right: -14px;
              width: 1px;
              height: 10px;
              background-color: #ccc;
            }
          }
          .proponStrip {
            &:after {
              content: " ";
              position: absolute;
              top: 4px;
              left: 0;
              width: 10px;
              height: 10px;
              background-color: purple;
              border-radius: 50%;
            }
          }
          .redStrip {
            &:after {
              content: " ";
              position: absolute;
              top: 4px;
              left: 0;
              width: 10px;
              height: 10px;
              background-color: red;
              border-radius: 50%;
            }
            &:before {
              content: " ";
              position: absolute;
              top: 2px;
              right: -14px;
              width: 1px;
              height: 10px;
              background-color: #ccc;
            }
          }
        }
      }
    }
  }
  .recordNumsBox {
    // display: inline-block;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 168px;
    height: 500px;
    background-color: #fff;
    border: 1px solid #ccc;
    float: left;
    h2 {
      display: inline-block;
      height: 52px;
      width: 100%;
      text-align: center;
      line-height: 52px;
      font-size: 14px;
      color: #333333;
      border-bottom: 1px solid #ccc;
      position: relative;
      .crossIcon {
        background: url("../../../assets/cross.png") no-repeat 0 0;
        width: 8px;
        height: 8px;
        position: absolute;
        top: 48px;
        right: 84px;
        background-color: #fff;
      }
      i {
        font-style: normal;
      }
    }
    ul {
      margin-top: 10px;
      > li {
        position: relative;
        width: 100%;
        padding: 8px 0px;
        padding-left: 20px;

        p {
          font-size: 14px;
          color: #333333;
        }
        span {
          font-size: 12px;
          color: #666666;
        }
        .triangleIocn {
          width: 20px;
          height: 20px;
          border-width: 10px;
          border-style: solid;
          border-color: transparent;
          border-left-color: #68b6e7;
          display: none;
          position: absolute;
          top: 15px;
          right: -20px;
          // transition: 0.5s all;
        }
      }
      .active {
        background-color: #68b6e7;
        color: #fff !important;
        p {
          color: #fff;
        }
        span {
          color: #fff;
        }
        .triangleIocn {
          //   border-left-color: #68b6e7;
          display: block;
        }
      }
    }
  }
  .recheckDetailedInformation {
    float: left;
    padding: 15px 0px 0px 30px;
    width: 800px;
    .tableHeader {
      font-size: 16px;
      color: #68b7e7;
      margin-bottom: 14px;
      .recheckDegree {
        position: relative;
        margin-right: 30px;
        &:after {
          content: " ";
          position: absolute;
          top: 2px;
          right: -15px;
          width: 2px;
          height: 14px;
          background-color: #68b7e7;
        }
      }
    }
    .examination {
      position: relative;
      margin-right: 30px;
      &:after {
        content: " ";
        position: absolute;
        top: 2px;
        right: -15px;
        width: 1px;
        height: 14px;
        background-color: #ccc;
      }
    }
    .wire {
      width: 100%;
      height: 1px;
      background-color: #ccc;
      margin: 20px 0px;
    }
    .recheckTable {
      width: 752px;
      border: 1px solid #ccc;
      div {
        float: left;
        width: 28%;
        height: 120px;
        margin: 14px 0px 16px 34px;
        border-right: 1px solid #ccc;

        p {
          color: #666666;
          span {
            color: #333333;
          }
          margin-bottom: 16px;
          i {
            color: #999999;
            font-style: normal;
            margin-left: 8px;
          }
        }
        p:last-child {
          margin-bottom: 0px;
        }
      }
      div:last-child {
        border-right: none;
      }
      div:nth-child(1) {
        position: relative;
        .triangleIocn1 {
          background: url("../../../assets/cross.png") no-repeat 0 0;
          width: 8px;
          height: 8px;
          position: absolute;
          top: 48px;
          right: -4px;
          background-color: #fff;
        }
      }
      div:nth-child(2) {
        position: relative;
        .triangleIocn2 {
          background: url("../../../assets/cross.png") no-repeat 0 0;
          width: 8px;
          height: 8px;
          position: absolute;
          top: 48px;
          right: -4px;
          background-color: #fff;
        }
      }
    }
    //  查看全部块
    .lookAtallBtnBox {
      width: 100%;
      position: relative;
      margin-top: 16px;
      h2 {
        font-size: 16px;
        display: inline-block;
        padding-right: 14px;
      }
      .positionWire {
        position: absolute;
        top: 50%;
        right: 0px;
        width: 90%;
        height: 1px;
        background-color: #ccc;
      }
      .positionWire2 {
        width: 86%;
        position: absolute;
        top: 50%;
        right: 0px;
        height: 1px;
        background-color: #ccc;
      }
      .basicLookAtallBtn,
      .guidanceBtn,
      .inspectionResult {
        padding: 0px 5px;
        position: absolute;
        right: 28px;
        top: 0px;
        background-color: #fff;
        cursor: pointer;
        i {
          color: #68b6e7;
        }
        span {
          color: #999999;
        }
      }
    }
    .malaise,
    .handlingSuggestion {
      margin-top: 16px;
      padding-bottom: 14px;
    }

    .consequenceBox {
      ul {
        margin-top: 24px;
        li {
          float: left;
          margin-right: 34px;
          margin-bottom: 20px;
          div {
            width: 96px;
            height: 96px;
            border: 1px solid #ccc;
            border-radius: 10px;
          }
        }
        li:nth-child(6n) {
          margin-right: 0px;
        }
      }
    }
  }
  // 高危评估模块
  .spouseNewsBox {
    .spouseNumsBox {
      // display: inline-block;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      width: 168px;
      height: 500px;
      background-color: #fff;
      border: 1px solid #ccc;
      float: left;
      h2 {
        display: inline-block;
        height: 52px;
        width: 100%;
        text-align: center;
        line-height: 52px;
        font-size: 14px;
        color: #333333;
        border-bottom: 1px solid #ccc;
        position: relative;
        .crossIcon {
          background: url("../../../assets/cross.png") no-repeat 0 0;
          width: 8px;
          height: 8px;
          position: absolute;
          top: 48px;
          right: 84px;
          background-color: #fff;
        }
        i {
          font-style: normal;
        }
      }
      ul {
        margin-top: 10px;
        > li {
          position: relative;
          width: 100%;
          padding: 8px 0px;
          padding-left: 40px;
          i {
            display: inline-block;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            position: absolute;
            top: 10px;
            left: 14px;
          }
          p {
            font-size: 14px;
            color: #333333;
          }
          span {
            font-size: 12px;
            color: #666666;
          }
          .triangleIocn {
            width: 20px;
            height: 20px;
            border-width: 10px;
            border-style: solid;
            border-color: transparent;
            border-left-color: #68b6e7;
            display: none;
            position: absolute;
            top: 15px;
            right: -20px;
            // transition: 0.5s all;
          }
        }
        .active {
          background-color: #68b6e7;
          color: #fff !important;
          p {
            color: #fff;
          }
          span {
            color: #fff;
          }
          .triangleIocn {
            //   border-left-color: #68b6e7;
            display: block;
          }
        }
      }
    }
    .assessDetailedInformation {
      float: left;
      padding: 15px 0px 0px 30px;
      width: 800px;
      .tableHeader {
        font-size: 16px;
        color: #68b7e7;
        margin-bottom: 14px;
        .assessDegree {
          position: relative;
          margin-right: 30px;
          &:after {
            content: " ";
            position: absolute;
            top: 2px;
            right: -15px;
            width: 2px;
            height: 14px;
            background-color: #68b7e7;
          }
        }
      }
      .assessexamination {
        position: relative;
        margin-right: 30px;
        &:after {
          content: " ";
          position: absolute;
          top: 2px;
          right: -15px;
          width: 2px;
          height: 14px;
          background-color: #68b7e7;
        }
      }
      .wire {
        width: 100%;
        height: 1px;
        background-color: #ccc;
        margin: 20px 0px;
      }

      //  查看全部块
      .lookAtallBtnBox {
        width: 100%;
        position: relative;
        margin-top: 16px;
        h2 {
          font-size: 16px;
          display: inline-block;
          padding-right: 14px;
        }
        .positionWire {
          position: absolute;
          top: 50%;
          right: 0px;
          width: 90%;
          height: 1px;
          background-color: #ccc;
        }
        .positionWire2 {
          width: 90%;
          position: absolute;
          top: 50%;
          right: 0px;
          height: 1px;
          background-color: #ccc;
        }
        .assessInformationBtn,
        .postscriptBtn {
          padding: 0px 5px;
          position: absolute;
          right: 28px;
          top: 0px;
          background-color: #fff;
          cursor: pointer;
          i {
            color: #68b6e7;
          }
          span {
            color: #999999;
          }
        }
      
      }
        .postscriptContent {
          margin-top: 16px;
          padding-bottom: 14px;
        }
      .assessInformationBox {
        margin-top: 20px;
        p {
          position: relative;
          color: #333333;
        }
        i {
          display: inline-block;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          position: absolute;
          top: 3px;
          left: 0px;
        }
      }
      .colour {
        margin-left: 18px;
        position: relative;
        margin-right: 26px;
        &:after {
          content: " ";
          position: absolute;
          top: 2px;
          right: -13px;
          width: 1px;
          height: 14px;
          background-color: #ccc;
        }
      }
      .colorTxt {
        font-size: 14px;
        color: #666666 !important;
        padding-bottom: 8px;
        border-bottom: 1px solid #999999;
        margin-bottom: 16px;
      }
    }
  }
}

</style>

<style lang="less">
#personalCenter {
    .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 260px;
}
.el-tabs__nav-scroll {
  height: 64px;
  line-height: 64px;
  background-color: #fff;
  color: #333333;
  margin-top: 16px;
  box-shadow: 0px 0px 12px 4px rgba(51, 51, 51, 0.08);
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
    padding:0px;
  background-color: #fff;
}
}
</style>


