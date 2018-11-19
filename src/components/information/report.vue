<template>
	<div class="reportBox">
		<h2 class="reportBoxTittle">报告单解读维护</h2>
		<div class="reportBoxContant clearfix">
			<div class="Contant_left">
				<div class="Contant_left_overflow">
					<p>产检次数列表</p>
					<ul>
						<li class="active">第一次产检</li>
						<li>第二次产检</li>
						<li>第三次产检</li>
						<li>第一次产检</li>
						<li>第一次产检</li>
						<li>第一次产检</li>
						<li class="active">第一次产检</li>
						<li>第一次产检</li>
						<li>第一次产检</li>
						<li>第一次产检</li>
						<li>第一次产检</li>
						<li class="active">第十二次产检</li>
					</ul>
				</div>

			</div>
			<div class="Contant_right clearfix">
				<div class="Contant_tittle">
					<span>报告单类型</span>
					<input type="button" value="添加标签" @click="dialogVisible = true">
				</div>
				<ul class="category clearfix">
					<li v-for="item in categoryItems" v-html="item" :key="item.num" @click="toggleClass($event)" :class="{'actives':isActive}"></li>
					<!-- <li>宫高</li>
					<li>脐带</li>
					<li>股骨长</li>
					<li>胎囊</li>
					<li>胎心</li>
					<li>胎头</li>
					<li>胎芽</li>
					<li style="margin-right:0px;">胎芽</li>
					<li>宫高</li>
					<li>脐带</li>
					<li>股骨长</li>
					<li>最大羊水深处</li>
					<li>宫高</li>
					<li>脐带</li>
					<li>股骨长</li>
					<li>宫高</li>
					<li>宫双顶径高</li>
					<li>羊水指数</li> -->
				</ul>
				<div class="labelContant">
					<h2>标签内容</h2>
					<div class="labelContant_font">
						<div class="labelIntroduce">
							<p>宫高介绍</p>
							<el-input type="textarea" autosize placeholder="请输入内容" v-model="labelIntroduce">

							</el-input>
						</div>
						<div class="wire"></div>
						<div class="labelExplain">
							<p>解释说明</p>
							<el-input type="textarea" autosize placeholder="请输入内容" v-model="labelExplain">
							</el-input>
						</div>
					</div>
				</div>
				<el-button type="primary" class="saveBtn" disabled>保 存</el-button>
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
      newlyLayerInput: ""
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
    }
  }
};
</script>
<style lang="less" scoped>
.mgr18 {
  margin-right: 18px;
}
.reportBox {
  position: relative;
  width: 100%;
  min-height: 600px;
  background-color: #fff;
  .reportBoxTittle {
    display: block;
    width: 100%;
    background-color: #fbfbfb;
    padding: 24px 24px 24px 24px;
    font-size: 18px;
    color: #333333;
  }
  .Contant_left {
    float: left;
    height: 600px;
    width: 206px;
    border-right: 1px solid #ccc;
    position: relative;
    overflow: hidden;
    .Contant_left_overflow {
      position: absolute;
      left: 0;
      top: 0;
      right: -17px;
      bottom: 0;
      overflow-x: hidden;
      overflow-y: scroll;
      p {
        color: #333333;
        font-size: 16px;
        display: block;
        width: 100%;
        height: 60px;
        padding: 20px 0 0 30px;
      }
      ul {
        li {
          height: 46px;
          line-height: 46px;
          color: #333333;
          padding-left: 30px;
        }
        .active {
          background-color: #68b6e7;
          color: #fff;
        }
      }
    }
  }
  .Contant_right {
    float: left;
    width: 726px;
    margin-left: 24px;
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
        padding: 10px 20px;
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
    .labelContant {
      margin-top: 20px;
      h2 {
        color: #333333;
        font-size: 16px;
      }
      .labelContant_font {
        margin-top: 20px;
        background-color: #f6f6f6;
        padding: 16px 12px;
        border-radius: 8px;
        .wire {
          width: 100%;
          height: 1px;
          background-color: #ccc;
          margin: 12px 0;
        }
        p {
          color: #666666;
        }
      }
    }
  }
}
.saveBtn {
  width: 200px;
  height: 40px;
  margin: 16px auto;
  text-align: center;
  margin-left: 260px;
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
.reportBox {
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
  .el-input__inner {
    border-radius: 8px;
    border-color: #ccc;
    background-color: #f6f6f6;
  }
  .el-dialog__body{
	  padding:0px 20px;
  }
  .el-dialog__footer{
	  padding:30px;
  }
}
</style>


