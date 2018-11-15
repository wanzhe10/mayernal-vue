<template>
	<div class="administrativeBox">
		<h2 class="administrativeBoxTittle">报告单解读维护</h2>
		<div class="administrativeBoxContant clearfix">
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
					<input type="button" value="添加标签">
				</div>
				<ul class="category clearfix">
					<li>宫高</li>
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
					<li>羊水指数</li>
				</ul>
			</div>
		</div>
	
	</div>
</template>
<script>
export default {
  data() {
    return {
     
    };
  },

};
</script>
<style lang="less" scoped>
.mgr18 {
  margin-right: 18px;
}
.administrativeBox {
  position: relative;
  width: 100%;
  min-height: 600px;
  background-color: #fff;
  .administrativeBoxTittle {
    display: block;
    width: 100%;
    background-color: #fbfbfb;
    padding: 24px 24px 24px 24px;
    font-size: 18px;
    color: #333333;
  }
  .Contant_left{
	  float: left;
	 height:500px;
		width: 206px;
		border-right: 1px solid #ccc;
		  position: relative;
	  overflow: hidden;
	  .Contant_left_overflow{
		  	  position: absolute;
        left: 0;
        top: 0;
        right: -17px;
        bottom: 0;
        overflow-x: hidden;
        overflow-y: scroll;
		  	  p{
		  color: #333333;
		  font-size: 16px;
		  display: block;
		  width: 100%;
		  height: 60px;
		  padding:20px 0 0 30px;
	  }
	ul{
	
		li{
			height: 46px;
			line-height: 46px;
			color:#333333;
			padding-left: 30px;
		}
		.active{
			background-color: #68b6e7;
			color:#fff;
		}
	}
	  }

  }
  .Contant_right{
	  float: left;
	  height: 500px;
	  width: 726px;
	  margin-left: 24px;
	  .Contant_tittle{
		  padding:20px 0;
		  padding-bottom:40px;
		  border-bottom:1px solid #ccc;
		  span{
			  color:#333333;
			  font-size: 16px;
			  float: left;

		  }
		  input{
			  width: 86px;
			  height: 32px;
			  background-color: #68b6e7;
			  color:#fff;
			  font-size: 12px;
			  border-radius: 8px;
			  float: right;
		  }
	  }
	  .category{
		  margin-top:20px;
		  li{
			  float: left;
			  padding:10px 20px;
			  border:1px solid #999999;
			  color:#666666;
			  border-radius: 8px;
			  margin-bottom:20px;
			  margin-right:20px;
		  }
		
	  }
  }
}
</style>
<style lang='less'>

</style>


