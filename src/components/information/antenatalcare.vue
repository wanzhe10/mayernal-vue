<template>
	<div class="antenatalcareBox">
		<h2 class="antenatalcareBoxTittle">机构信息维护</h2>
		<!-- 基本信息块 -->
		<div class="antenatalcareTable">
			<ul class="tableHeader clearfix">
				<li style="width:140px; padding-left:12px;">产检次数</li>
				<li style="width:134px;">孕周</li>
				<li style="width:108px;">状态</li>
				<li style="width:214px;">产检须知</li>
				<li style="width:240px;">温馨提示</li>
				<li style="width:100px;">操作</li>
			</ul>
			<ul class="tableContant">
				<li v-for="item in tableContantData">
					<div class="positonBox active">
						<span style="width:132px; padding-left:12px;">{{item.num}}</span>
						<span style="width:134px;">{{item.gestationalWeeks}}</span>
						<span style="width:104px;">{{item.state}}</span>
						<span style="width:210px;">{{item.notice}}</span>
						<span style="width:210px;">{{item.hint}}</span>
						<span>
							<a href="javascript:;" @click="toggle1()">查看</a>
							<a href="javascript:;">操作</a>
						</span>
					</div>
					<el-collapse-transition>
						<div class="concealBox" v-show="isShow1">
							<p>
								<span>{{item.num}}</span>|
								<span>{{item.gestationalWeeks}}</span>|
								<span>{{item.state}}</span>
							</p>
							<div class="concealBox_font">
								<span class="top20">产检须知：</span>
								<el-input type="textarea" autosize placeholder="请输入内容" v-model="item.theRequirements" class="theRequirements">
								</el-input>
								<span class="top70">温馨提示：</span>
								<el-input type="textarea" autosize placeholder="请输入内容" v-model="item.warmPrompt" clear="warmPrompt">
								</el-input>
							</div>
						</div>
					</el-collapse-transition>
				</li>
			</ul>
		</div>
		<div class="newConstruction">
			<div class="addBox">
				<i class="addIcon"></i>
				<p class="newConstructionBtn">新增产检</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      textarea2: "",
      textarea3: "",
      isShow1: true,
      tableContantData: [
        {
          num: "第一次产检",
          gestationalWeeks: "孕6—13周",
          state: "已激活",
          notice: "建立妊娠保健手册是的...",
          hint: "之前没有做过婚检额度.....",
          theRequirements:
            "建立妊娠保健手册、确定孕周、推算预产期、评估妊娠高危因素，血压、体重指数、胎心率、血常规、血型（ABO和Rh）空腹血糖、刚功能和肾功能、乙型肝炎病毒表面抗原、梅毒螺旋体、HIV筛查、心电图",
          warmPrompt:
            "第3次产检，最重要的项目是B超胎儿畸形筛查，在孕期20周做超声波检查，主要是看胎儿外观发育上是否有较大问，医生会仔细量胎儿的头围、腹围、看大腿骨长度及检查脊柱是否有先天性异常。如果准妈妈照的是思维彩超，还可以看到宝宝的实时面部表情呢。照彩超之前，准妈妈要做的是保持平和的心态，如果过于紧张会影响胎儿的活动呢"
        },
        {
          num: "第二次产检",
          gestationalWeeks: "孕6—13周",
          state: "已激活",
          notice: "建立妊娠保健手册是的...",
          hint: "之前没有做过婚检额度.....",
          theRequirements:
            "建立妊娠保健手册、确定孕周、推算预产期、评估妊娠高危因素，血压、体重指数、胎心率、血常规、血型（ABO和Rh）空腹血糖、刚功能和肾功能、乙型肝炎病毒表面抗原、梅毒螺旋体、HIV筛查、心电图",
          warmPrompt:
            "第3次产检，最重要的项目是B超胎儿畸形筛查，在孕期20周做超声波检查，主要是看胎儿外观发育上是否有较大问，医生会仔细量胎儿的头围、腹围、看大腿骨长度及检查脊柱是否有先天性异常。如果准妈妈照的是思维彩超，还可以看到宝宝的实时面部表情呢。照彩超之前，准妈妈要做的是保持平和的心态，如果过于紧张会影响胎儿的活动呢"
        }
      ]
    };
  },
  methods: {
    // 基本情况点击显示隐藏
    toggle1: function() {
      this.isShow1 = !this.isShow1;
    }
  }
};
</script>

<style lang="less" scoped>
.top20 {
  top: 20px;
}
.top70 {
  top: 70px;
}
.mgr20 {
  margin-right: 20px;
}
.mgr24 {
  margin-right: 24px;
}
.mgr30 {
  margin-right: 30px;
}
.mgr36 {
  margin-right: 36px;
}
.mgr46 {
  margin-right: 46px;
}
.mgr50 {
  margin-right: 50px;
}
.mgt40 {
  margin-top: 40px !important;
}
.antenatalcareBox {
  width: 100%;
  min-height: 600px;
  background-color: #fff;
  .antenatalcareBoxTittle {
    display: block;
    width: 100%;
    background-color: #fbfbfb;
    padding: 24px 24px 24px 24px;
    font-size: 18px;
    color: #333333;
  }
  .antenatalcareTable {
    padding: 0px 20px;
    .tableHeader {
      border-bottom: 1px solid #999999;
      li {
        float: left;
        color: #333333;
        padding: 20px 0px;
      }
    }
    .tableContant {
      li {
        .positonBox {
          margin-top: 5px;
          border-bottom: 1px solid #cccccc;
          span {
            display: inline-block;
            padding: 20px 0px;
            a {
              color: #68b7e7;
            }
            a:nth-child(1) {
              margin-right: 20px;
            }
          }
        }
        .active {
          box-shadow: 0px 2px 12px 5px #e1e1e1;
        }
      }
    }
    .concealBox {
      width: 100%;
      background-color: #f9f9f9;
      z-index: 2;
      padding: 0px 14px 30px 14px;
      margin-top: 8px;
      border-radius: 8px;
      p {
        border-bottom: 1px solid #ccc;
        color: #333333;
        padding: 20px 0;
        span {
          padding: 0px 14px;
        }
        span:nth-child(1) {
          padding-left: 0;
        }
      }
      .concealBox_font {
        position: relative;
        span {
          position: absolute;
          left: 0;
        }
      }
    }
  }
  .newConstruction {
    height: 60px;
    line-height: 60px;
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
</style>
<style lang="less">
.antenatalcareBox {
  .el-textarea {
    width: 90%;
    border: none;
    padding-top: 16px;
  }
  .el-textarea__inner {
    border: none;
    background-color: #f9f9f9;
    margin-left: 84px;
    min-height: 40px;
  }
}
</style>


