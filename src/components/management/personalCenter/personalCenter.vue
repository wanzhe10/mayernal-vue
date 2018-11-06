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
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
         </div>
       
            
</template>
<script>
export default {
    data() {
      return {
        activeName: 'first'
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
.cl666{
    color:#666666;
}

#personalCenter{
 .informationBox {
            width: 978px;
            background-color: #fff;
            .informationBox_left {
                float: left;
                padding-top: 20px;
                position: relative;
                width: 164px;
                &:before {
                    content: ' ';
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
                    background-image: url("/maternal-web/images/woman.png");
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

                .crossIcon{
                    background: url('../../../assets/cross.png') no-repeat 0 0;
                    width: 8px;
                    height: 8px;
                    position: absolute;
                    top:88px;
                    right:-3px;
                    background-color: #fff;
                }
            }
            .informationBox_right {
                float: left;
                width: 814px;
                .newsBoxTop {
                    padding: 6px 0 14px 0px;
                    border-bottom: 1px solid #ccc;
                    margin-left:26px;
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
                                content: ' ';
                                position: absolute;
                                top: 4px;
                                left: 0;
                                width: 10px;
                                height: 10px;
                                background-color: green;
                                border-radius: 50%;
                            }
                            &:before {
                                content: ' ';
                                position: absolute;
                                top: 5px;
                                right: -14px;
                                width: 1px;
                                height: 10px;
                                background-color: #ccc;
                            }
                        }
                        .yellowStrip {
                            &:after {
                                content: ' ';
                                position: absolute;
                                top: 4px;
                                left: 0;
                                width: 10px;
                                height: 10px;
                                background-color: yellow;
                                border-radius: 50%;
                            }
                            &:before {
                                content: ' ';
                                position: absolute;
                                top: 5px;
                                right: -14px;
                                width: 1px;
                                height: 10px;
                                background-color: #ccc;
                            }
                        }
                        .orangeStrip {
                            &:after {
                                content: ' ';
                                position: absolute;
                                top: 4px;
                                left: 0;
                                width: 10px;
                                height: 10px;
                                background-color: orange;
                                border-radius: 50%;
                            }
                            &:before {
                                content: ' ';
                                position: absolute;
                                top: 5px;
                                right: -14px;
                                width: 1px;
                                height: 10px;
                                background-color: #ccc;
                            }
                        }
                        .proponStrip {
                            &:after {
                                content: ' ';
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
                                content: ' ';
                                position: absolute;
                                top: 4px;
                                left: 0;
                                width: 10px;
                                height: 10px;
                                background-color: red;
                                border-radius: 50%;
                            }
                            &:before {
                                content: ' ';
                                position: absolute;
                                top: 5px;
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
}
</style>

<style lang="less">
    .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 260px;
}
.el-tabs__nav-scroll {
  height: 64px;
  line-height: 64px;
  background-color: #fff;
  color: #333333;
  margin-top:16px;
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
  background-color: #fff;
  padding: 14px 24px 24px 26px;
}

</style>


