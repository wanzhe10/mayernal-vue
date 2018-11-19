<template>
	<div class="todayBox">
		<div class="todayBox_top clearfix">
			<ul class="clearfix">
				<li>周一</li>
				<li>周二</li>
				<li>周三</li>
				<li>周四</li>
				<li>周五</li>
				<li>周六</li>
				<li>周日</li>
			</ul>
			<div class="tuoyuan"><i class="el-icon-refresh"></i>刷新列表</div>
		</div>
		<div class="todayBox_bottom">
			<div class="todayBoxTeb">
				<el-tabs v-model="activeName" @tab-click="handleClick" class="fl">
					<el-tab-pane name="first">
						<span slot="label">今日总预约复检人数 <span>20</span>人</span>
						我的行程
					</el-tab-pane>
						<el-tab-pane name="second">
						<span slot="label">今当前挂号人数<span class="todayOrder">20</span>人</span>
						我的行程
					</el-tab-pane>
						<el-tab-pane name="third">
						<span slot="label">今日未到复检人数<span class="todayOrder">20</span>人</span>
						我的行程
					</el-tab-pane>
				</el-tabs>

				<div class="fr">hahahs </div>
			</div>
		</div>

	</div>
</template>

 <script>
export default {
  data() {
    return {
      activeName: "first"
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
.fl{
	float: left;
}
.fr{
	float: right;
}
.todayBox {
  .todayBox_top {
    width: 100%;
    height: 70px;
    background-color: #fff;
    ul {
      float: left;
      li {
        float: left;
        height: 70px;
        line-height: 70px;
        padding: 0 10px 0 24px;
        cursor: pointer;
        user-select: none;
      }
    }
    .tuoyuan {
      float: right;
      padding: 0 10px;
      width: 96px;
      border-radius: 50px;
      height: 32px;
      line-height: 32px;
      background-color: #68b6e7;
      color: #fff;
      margin-right: 36px;
      margin-top: 16px;
    }
  }
  .todayBox_bottom {
    margin-top: 6px;
    width: 100%;
    height: 70px;
    background-color: #fff;
  }
}
</style>
<style>
.el-select-dropdown__item.selected {
  color: #68b6e7;
}

.riskAssessmentBox .el-input__icon {
  line-height: 30px;
}

.todayBox .el-tabs__nav-scroll {
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  color: #333333;
}
.todayBox .el-tabs__item.is-active {
  color: #68b6e7;
}
.todayBox .el-tabs__item:hover {
  color: #68b6e7;
  cursor: pointer;
}
.todayBox .el-tabs__active-bar {
  background-color: #68b6e7;
}
.todayBox .el-tabs__nav {
  margin-left: 26px;
}
.todayBox .el-tabs__content {
  background-color: #fff;
}
.todayBox .el-tabs__header {
  margin: 0;
}
</style>


