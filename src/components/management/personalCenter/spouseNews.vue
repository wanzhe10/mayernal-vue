<template>
	<div class="personalCenterSpouseNewsBox">
		<el-tabs v-model="activeName" class="aaaa">
			<el-tab-pane label="高危评估" name="fifth">
				<!-- 高危评估模块 -->
				<div class="riskAssessmentBox ">
					<span>项目类型</span>
					<div class="mgl10">
						<el-select v-model="projectTypeModel1" placeholder="请选择">
							<el-option v-for="item in projectType1" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
					<div class="mgl24">
						<el-select v-model="projectTypeModel2" placeholder="请选择">
							<el-option v-for="item in projectType2" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
					<span class="mgl174">历史评估记录</span>
					<div class="mgl10">
						<el-select v-model="historyAssessModel" placeholder="请选择">
							<el-option v-for="item in historyAssess" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
					</div>
					<input type="button" value="套用" class="useBtn mgl16">
					<div class="wire"></div>
					<!-- 基本情况 -->
					<div class="lookAtallBtnBox">
						<h2>基本情况</h2>
						<div class="positionWire"></div>
						<div class="basicLookAtallBtn" @click="toggle1()">
							<span>查看全部</span>
							<i class="el-icon-arrow-down" v-show="downIcon"></i>
							<i class="el-icon-arrow-up" v-show="!downIcon"></i>
						</div>
					</div>
					<el-collapse-transition>
						<div class="basicInformationBox" v-show="isShow1">
							<div class="partBox mgr34">
								<div class="partBox_top">
									<i>5</i>
									<span class="fen">分</span>
									<span class="mgl28">黄色（一般风险）</span>
								</div>
								<div class="fivepartBox topicBox">
									<el-checkbox label="年龄≤35岁或≥18 A"></el-checkbox>
									<el-checkbox label="年龄≤35岁或≥18 B"></el-checkbox>
									<el-checkbox label="年龄≤35岁或≥18 C"></el-checkbox>
									<el-checkbox label="年龄≤35岁或≥18 D"></el-checkbox>

									<!-- <a class="topicItem" href="javascript:;"></a>
									<a class="topicItem" href="javascript:;">年龄≤35岁或≥18</a>
									<a class="topicItem" href="javascript:;">年龄≤35岁或≥18</a>
									<a class="topicItem" href="javascript:;">年龄≤35岁或≥18</a> -->
								</div>
							</div>
							<div class="partBox mgr34">
								<div class="partBox_top">
									<i>10</i>
									<span class="fen">分</span>
									<span class="mgl28">橙色（较高风险）</span>
								</div>
								<div class="tenpartBox topicBox">
									<el-checkbox label="年龄≤35岁或≥18 A"></el-checkbox>
									<el-checkbox label="年龄≤35岁或≥18 B"></el-checkbox>
									<el-checkbox label="年龄≤35岁或≥18 C"></el-checkbox>
									<el-checkbox label="年龄≤35岁或≥18 D"></el-checkbox>
								</div>
							</div>
							<div class="partBox">
								<div class="partBox_top">
									<i>20</i>
									<span class="fen">分</span>
									<span class="mgl28">红色（高风险）</span>
								</div>
								<div class="twentypartBox topicBox">
									<el-checkbox label="年龄≤35岁或≥18 A"></el-checkbox>
									<el-checkbox label="年龄≤35岁或≥18 B"></el-checkbox>
									<el-checkbox label="年龄≤35岁或≥18 C"></el-checkbox>
									<el-checkbox label="年龄≤35岁或≥18 D"></el-checkbox>
								</div>
							</div>
						</div>
					</el-collapse-transition>

					<!-- 孕期合并发症块 -->
					<div class="lookAtallBtnBox">
						<h2>孕期合并发症</h2>
						<div class="positionWire2"></div>
						<div class="pregnancyAllBtn" @click="toggle2()">
							<span>查看全部</span>
							<i class="el-icon-arrow-down" v-show="downIcon2"></i>
							<i class="el-icon-arrow-up" v-show="!downIcon2"></i>
						</div>
					</div>
					<el-collapse-transition>
						<div class="pregnancyAllBox" v-show="isShow2">
							<ul class="pregnancySelectBox">
								<li class="selectAllBtn">全部</li>
								<li>心血管系统疾病</li>
								<li>呼吸系统疾病</li>
								<li>消化系统疾病</li>
								<li>泌尿系统疾病</li>
								<li>内分泌系统疾病</li>
								<li style="margin-right:0px;">精神神经系统疾病</li>
								<li>血液系统疾病</li>
								<li>性传播疾病</li>
								<li>免疫系统疾病</li>
								<li>肿瘤</li>
								<li>吸毒史</li>
								<li>其他</li>
							</ul>

							<div class="basicInformationBox">
								<div class="partBox mgr34">
									<div class="partBox_top">
										<i>5</i>
										<span class="fen">分</span>
										<span class="mgl28">黄色（一般风险）</span>
									</div>
									<div class="fivepartBox topicBox">
										<el-checkbox label="年龄≤35岁或≥18 A"></el-checkbox>
										<el-checkbox label="年龄≤35岁或≥18 B"></el-checkbox>
										<el-checkbox label="年龄≤35岁或≥18 C"></el-checkbox>
										<el-checkbox label="年龄≤35岁或≥18 D"></el-checkbox>
									</div>
								</div>
								<div class="partBox mgr34">
									<div class="partBox_top">
										<i>10</i>
										<span class="fen">分</span>
										<span class="mgl28">橙色（较高风险）</span>
									</div>
									<div class="tenpartBox topicBox">
										<el-checkbox label="年龄≤35岁或≥18 A"></el-checkbox>
										<el-checkbox label="年龄≤35岁或≥18 B"></el-checkbox>
										<el-checkbox label="年龄≤35岁或≥18 C"></el-checkbox>
										<el-checkbox label="年龄≤35岁或≥18 D"></el-checkbox>
									</div>
								</div>
								<div class="partBox">
									<div class="partBox_top">
										<i>20</i>
										<span class="fen">分</span>
										<span class="mgl28">红色（高风险）</span>
									</div>
									<div class="twentypartBox topicBox">
										<el-checkbox label="年龄≤35岁或≥18 A"></el-checkbox>
										<el-checkbox label="年龄≤35岁或≥18 B"></el-checkbox>
										<el-checkbox label="年龄≤35岁或≥18 C"></el-checkbox>
										<el-checkbox label="年龄≤35岁或≥18 D"></el-checkbox>
									</div>
								</div>
							</div>

							<div class="contentBox">
								<div class="lookAtallBtnBox">
									<h2>呼吸系统疾病</h2>
									<div class="positionWire2"></div>
								</div>
								<div class="partBox mgr34">
									<div class="fivepartBox topicBox">
										<el-checkbox label="年龄≤35岁或≥18 A"></el-checkbox>
										<el-checkbox label="年龄≤35岁或≥18 B"></el-checkbox>
										<el-checkbox label="年龄≤35岁或≥18 C"></el-checkbox>
										<el-checkbox label="年龄≤35岁或≥18 D"></el-checkbox>
									</div>
								</div>
								<div class="partBox mgr34">
									<div class="tenpartBox topicBox">
										<el-checkbox label="年龄≤35岁或≥18 A"></el-checkbox>
										<el-checkbox label="年龄≤35岁或≥18 B"></el-checkbox>
										<el-checkbox label="年龄≤35岁或≥18 C"></el-checkbox>
										<el-checkbox label="年龄≤35岁或≥18 D"></el-checkbox>
									</div>
								</div>
								<div class="partBox">
									<div class="twentypartBox topicBox">
										<el-checkbox label="年龄≤35岁或≥18 A"></el-checkbox>
										<el-checkbox label="年龄≤35岁或≥18 B"></el-checkbox>
										<el-checkbox label="年龄≤35岁或≥18 C"></el-checkbox>
										<el-checkbox label="年龄≤35岁或≥18 D"></el-checkbox>
									</div>
								</div>
							</div>
						</div>
					</el-collapse-transition>

					<!-- 紫色块 -->
					<div class="lookAtallBtnBox">
						<h2>紫色</h2>
						<div class="positionWire3"></div>
						<div class="violetBtn" @click="toggle3()">
							<span>查看全部</span>
							<i class="el-icon-arrow-down" v-show="downIcon3"></i>
							<i class="el-icon-arrow-up" v-show="!downIcon3"></i>
						</div>
					</div>
					<el-collapse-transition>
						<div class="violetConcealBox topicBox" v-show="isShow3">
							<el-checkbox label="所有妊娠合传染性疾病--如毒性肝炎、霉素、HIV感染及艾滋病、结核病、重症感染性肺炎、特殊病毒感染（H1N7/塞卡等）"></el-checkbox>
						</div>
					</el-collapse-transition>

					<div class="flaxBox">
						<div class="flaxBoxPart">
							<span class="totalPoints">65分</span>
							<span>绿色（<i>0</i>）项</span>
							<span>黄色（<i class="fiveLength">0</i>）项</span>
							<span>橙色（<i class="tenLength">0</i>）项</span>
							<span>红色（<i class="twentyLength">0</i>）项</span>
							<span>紫色（<i class="purpleLength">0</i>）项</span>
							<input type="button" value="完  成" class="finishBtn">
						</div>
					</div>
				</div>

			</el-tab-pane>
			<el-tab-pane label="检查确认" name="sixth">
				<div class="checkAffirmBox">
					<div class="checkAffirmBox_top clearfix">
						<div class="fl assessmentInformation">
							<p>评估信息</p>
							<span class="greenStrip">绿色（12）项</span>
							<span class="yellowStrip">黄色（12）项</span>
							<span class="orangeStrip">橙色（12）项</span>
							<span class="redStrip">红色（12）项</span>
							<span class="proponStrip">紫色（12）项</span>
						</div>
						<div class="fr gradeInformation">
							<h2><span class="grade">56</span><i>分</i></h2>
							<p>初次筛查与评分</p>
						</div>
					</div>
					<div class="wire4"></div>
					<div class="affirmBox2">
						<h3>评估详情</h3>
						<span class="greenStrip">绿色(低风险)</span>
						<div class="greenDiv"></div>
						<span class="yellowStrip">黄色(一般风险)</span>
						<div class="yellowDiv"></div>
						<span class="orangeStrip">橙色(较高风险)</span>
						<div class="orangeDiv"></div>
						<span class="redStrip">红色(高风险)</span>
						<div class="redDiv"></div>
						<span class="proponStrip">紫色(传染病)</span>
						<div class="purpleDiv"></div>
					</div>
					<h1 class="operator">操作人：<span>周晓晓</span></h1>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "fifth",
      // 项目类型
      projectType1: [
        {
          value: "1",
          label: "1"
        },
        {
          value: "2",
          label: "2"
        },
        {
          value: "3",
          label: "3"
        },
        {
          value: "4",
          label: "4"
        },
        {
          value: "5",
          label: "5"
        }
      ],
      //项目类型2
      projectType2: [
        {
          value: "1",
          label: "1"
        },
        {
          value: "2",
          label: "2"
        },
        {
          value: "3",
          label: "3"
        },
        {
          value: "4",
          label: "4"
        },
        {
          value: "5",
          label: "5"
        }
      ],
      historyAssess: [
        {
          value: "1",
          label: "1"
        },
        {
          value: "2",
          label: "2"
        },
        {
          value: "3",
          label: "3"
        },
        {
          value: "4",
          label: "4"
        },
        {
          value: "5",
          label: "5"
        }
      ],
      baseHeartRateModel: "",
      baseLungModel: "",
      baseAbdomenLiverModel: "",
      baseAbdomenSpleenModel: "",
      baseSpinalLimbsDeformityModel: "",
      baseSpinalLimbsEdemaModel: "",
      baseBreastsModel: "",
      baseNippleModel: "",
      obstetricsVulvaModel: "",
      obstetricsVaginaModel: "",
      obstetricsCervixModel: "",
      obstetricsCorpusModel: "",
      obstetricsPairsAttachmentModel: "",
      assayBloodTypeModel: "",
      obstetricsFirstDewModel: "",
      obstetricsPlacentalModel: "",
      projectTypeModel1: "",
      projectTypeModel2: "",
      historyAssessModel: "",
      isShow1: true,
      isShow2: true,
      isShow3: true,
      downIcon: true,
      downIcon2: true,
      downIcon3: true
    };
  },
  methods: {
    modifyButton: function() {},
    // 配偶一般信息吸烟
    handleCheckAllChange() {
      //  this.isshow= false;
      console.log(this.smoking);
    },
    //孕妇基本信息户口所在地
    registeredModelResidence() {
      console.log(this.registeredModel);
    },
    //孕妇基本信息现住地址
    registeredModelPresentAddressModel() {
      console.log(this.presentAddressModel);
    },
    //匹配欧一般信息现住地址
    spousePresentAddressModelAddressModel() {
      console.log(this.spousePresentAddressModel);
    },
    // 基本情况点击显示隐藏
    toggle1: function() {
      this.isShow1 = !this.isShow1;
      this.downIcon = !this.downIcon;
    },
    // 孕期合并发症显示隐藏
    toggle2: function() {
      this.isShow2 = !this.isShow2;
      this.downIcon2 = !this.downIcon2;
    },
    // 紫色显示隐藏
    toggle3: function() {
      this.isShow3 = !this.isShow3;
      this.downIcon3 = !this.downIcon3;
    }
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
  margin-right: 70px !important;
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
.el-select {
  input {
    background-color: #f6f6f6;
    color: #333333;
  }
}
// 高危评估模块
.riskAssessmentBox {
  padding: 14px 24px 70px 26px;
  div {
    display: inline-block;
    h3 {
      font-size: 14px;
      color: #666666;
      margin: 10px 0;
    }
    input {
      width: 154px;
      height: 40px;
      border: 1px solid #ccc;
      border-radius: 4px;
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
    height: 2px;
    background-color: #e8e8e8;
    margin-top: 24px;
  }
  .useBtn {
    width: 60px;
    height: 30px;
    background-color: #68b6e7;
    text-align: center;
    line-height: 30px;
    color: #fff;
    border-radius: 4px;
  } // 基本情况块
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
      display: inline-block;
      top: 50%;
      right: 0px;
      width: 860px;
      height: 1px;
      background-color: black;
    }
    .positionWire2 {
      position: absolute;
      display: inline-block;
      top: 50%;
      right: 0px;
      width: 830px;
      height: 1px;
      background-color: black;
    }
    .basicLookAtallBtn,
    .pregnancyAllBtn {
      padding: 0px 5px;
      position: absolute;
      right: 28px;
      top: 0px;
      background-color: #fff;
      cursor: pointer;
        -moz-user-select: none; /*火狐*/
        -webkit-user-select: none; /*webkit浏览器*/
        -ms-user-select: none; /*IE10*/
        -khtml-user-select: none; /*早期浏览器*/
      user-select: none;
      i {
        color: #68b6e7;
      }
      span {
        color: #999999;
      }
    }
  }
  .basicInformationBox {
    .partBox {
      margin-top: 26px;
      width: 284px;
      .partBox_top {
        padding-bottom: 10px;
        width: 284px;
        border-bottom: 1px solid #999999;
        i {
          font-style: normal;
          font-size: 19px;
        }
        span {
          font-size: 14px;
        }
        .fen {
          position: relative;
          &:before {
            content: " ";
            position: absolute;
            top: 2px;
            left: 30px;
            width: 1px;
            height: 16px;
            background: #cccccc;
          }
        }
      }
      .topicBox {
        margin-top: 16px;
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        > a {
          font-size: 14px;
          color: #666666;
          margin-right: 40px;
          line-height: 30px;
          padding-left: 26px;
          background: url("../../../assets/radio_false.png") no-repeat left
            center;
          background-size: 16px 16px;
          &.active {
            background: url("../../../assets/radio_true.png") no-repeat left
              center;
            background-size: 16px 16px;
          }
        }
      }
    }
  } // 孕期合并发症选择块
  .pregnancySelectBox {
    margin-top: 20px;
    li {
      font-size: 14px;
      color: #666666;
      padding: 8px 15px;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-right: 14px;
      margin-bottom: 14px;
    }
    li:hover {
      cursor: pointer;
    }
    .selectAllBtn {
      width: 64px;
      height: 32px;
      line-height: 32px;
      border-radius: 50px;
      text-align: center;
      margin-right: 14px;
      padding: 0px;
    }
  } // 添加内容块
  .contentBox {
    .lookAtallBtnBox {
      width: 100%;
      position: relative;
      margin-top: 16px;
      h2 {
        font-size: 14px;
        display: inline-block;
        padding-right: 14px;
      }
      .positionWire {
        position: absolute;
        display: inline-block;
        top: 50%;
        right: 0px;
        width: 860px;
        height: 1px;
        background-color: black;
      }
      .positionWire2 {
        position: absolute;
        display: inline-block;
        top: 50%;
        right: 0px;
        width: 830px;
        height: 1px;
        background-color: #cccccc;
      }
    }
    .partBox {
      width: 284px;
      .topicBox {
        margin-top: 16px;
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        margin-right: 40px;
        > a {
          font-size: 14px;
          color: #666666;
          line-height: 30px;
          padding-left: 26px;
          background: url("../../../assets/radio_false.png") no-repeat left
            center;
          background-size: 16px 16px;
          &.active {
            background: url("../../../assets/radio_true.png") no-repeat left
              center;
            background-size: 16px 16px;
          }
        }
      }
    }
  }
  .violetBtn {
    cursor: pointer;
    padding: 0px 5px;
    position: absolute;
    right: 28px;
    top: 0px;
    background-color: #fff;
    i {
      color: #68b6e7;
    }
    span {
      color: #999999;
    }
  }
  .positionWire3 {
    position: absolute;
    display: inline-block;
    top: 50%;
    right: 0px;
    width: 890px;
    height: 1px;
    background-color: #999;
  }
  .violetConcealBox {
    margin-top: 10px;
    > a {
      font-size: 14px;
      color: #666666;
      line-height: 30px;
      padding-left: 26px;
      background: url("../../../assets/radio_false.png") no-repeat left center;
      background-size: 16px 16px;
      &.active {
        background: url("../../../assets/radio_true.png") no-repeat left center;
        background-size: 16px 16px;
      }
    }
  }
  .flaxBox {
    height: 88px;
    width: 100%;
    position: fixed; // background-color: #fff;
    opacity: 1;
    bottom: 0px;
    left: 0;
    text-align: center;
    z-index: 2;
    .flaxBoxPart {
      width: 1200px;
      background-color: #86c5ec;
      .totalPoints {
        position: relative;
        font-size: 24px;
        color: #ffffff;
        line-height: 88px;
        margin-right: 74px;
        &:before {
          content: " ";
          position: absolute;
          top: 2px;
          right: -28px;
          width: 1px;
          height: 30px;
          background: #fff;
        }
      }
      span {
        font-size: 16px;
        color: #fff;
        margin-right: 26px;
        i {
          font-style: normal;
        }
      }
      .finishBtn {
        background-color: #f3f9fd;
        width: 160px;
        text-align: center;
        padding: 0px;
        border: none;
        margin-left: 60px;
      }
    }
  }
}
// 检查确认模块
.checkAffirmBox {
  padding: 14px 24px 24px 26px;
  .checkAffirmBox_top {
    .assessmentInformation {
      p {
        font-size: 16px;
        color: #333333;
        margin-bottom: 20px;
      }
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
          top: 5px;
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
          top: 5px;
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
          top: 5px;
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
          top: 5px;
          right: -14px;
          width: 1px;
          height: 10px;
          background-color: #ccc;
        }
      }
    }
  }
  .gradeInformation {
    height: 62px;
    border-left: 1px solid #ccc; // padding-left: 60px;
    width: 210px;
    text-align: center;
    h2 {
      margin-bottom: 4px;
      .grade {
        font-size: 24px;
        color: #68b6e7;
      }
      i {
        font-size: 14px;
        font-style: normal;
        color: #68b6e7;
      }
    }
    p {
      color: #666666;
      font-size: 12px;
    }
  }
  .wire4 {
    left: 0;
    width: 994px;
    height: 12px;
    background-color: #f6f6f6;
    position: absolute;
    margin-top: 20px;
  }
  .affirmBox2 {
    margin-top: 46px;
    h3 {
      display: block;
      color: #333333;
    }
    span {
      color: #666666;
      margin-top: 16px;
      margin-bottom: 40px;
      position: relative;
      padding-left: 18px;
      display: inline-block;
    }
    div {
      flex: 1;
      border-bottom: 1px solid black;
    }
    .greenStrip {
      &:after {
        content: " ";
        position: absolute;
        top: 3px;
        left: 0;
        width: 14px;
        height: 14px;
        background-color: green;
        border-radius: 50%;
      }
    }
    .yellowStrip {
      &:after {
        content: " ";
        position: absolute;
        top: 3px;
        left: 0;
        width: 14px;
        height: 14px;
        background-color: yellow;
        border-radius: 50%;
      }
    }
    .orangeStrip {
      &:after {
        content: " ";
        position: absolute;
        top: 3px;
        left: 0;
        width: 14px;
        height: 14px;
        background-color: orange;
        border-radius: 50%;
      }
    }
    .proponStrip {
      &:after {
        content: " ";
        position: absolute;
        top: 3px;
        left: 0;
        width: 14px;
        height: 14px;
        background-color: purple;
        border-radius: 50%;
      }
    }
    .redStrip {
      &:after {
        content: " ";
        position: absolute;
        top: 3px;
        left: 0;
        width: 14px;
        height: 14px;
        background-color: red;
        border-radius: 50%;
      }
    }
  }
  .operator {
    text-align: right;
    font-size: 14px;
    color: #333333;
    margin-top: 30px;
  }
}
</style>
<style lang='less'>
.el-select-dropdown__item.selected {
  color: #68b6e7;
}
/* // 高危评估组件样式修改 */
.riskAssessmentBox .el-input__inner {
  width: 152px;
  height: 30px;
  border-radius: 8px;
  border-color: #ccc;
  background-color: #f6f6f6;
}
.riskAssessmentBox .el-input__icon {
  line-height: 30px;
}

.personalCenterSpouseNewsBox .el-tabs__nav-scroll {
  height: 64px;
  line-height: 64px;
  background-color: #fff;
  color: #333333;
}
.personalCenterSpouseNewsBox .el-tabs__item.is-active {
  color: #68b6e7;
}
.personalCenterSpouseNewsBox .el-tabs__item:hover {
  color: #68b6e7;
  cursor: pointer;
}
.personalCenterSpouseNewsBox .el-tabs__active-bar {
  background-color: #68b6e7;
}
.personalCenterSpouseNewsBox .el-tabs__nav {
  margin-left: 26px;
}
.personalCenterSpouseNewsBox .el-tabs__content {
  background-color: #fff;
}

.pregnantNewsBox .area-select.large,
.personalCenterSpouseNewsBox .area-select.large {
  width: 260px;
  height: 40px;
  border-radius: 8px;
  background-color: #f6f6f6;
  color: #606266;
}
.pregnantNewsBox
  .cascader-menu-list
  .cascader-menu-option.selected
  ，
  .personalCenterSpouseNewsBox
  .cascader-menu-list
  .cascader-menu-option.selected {
  background-color: #f5f7fa;
  color: #68b6e7;
  font-weight: 700;
}
.personalCenterSpouseNewsBox .el-checkbox {
  width: 160px;
  margin: 5px 0;
  display: block;
  margin-left: 0px;
}
.personalCenterSpouseNewsBox
  .el-checkbox__input.is-checked
  + .el-checkbox__label {
  color: #68b6e7;
}
.personalCenterSpouseNewsBox .el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #68b6e7;
  border-color: #68b6e7;
}
</style>
