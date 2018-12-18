// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import App from './App'
import 'babel-polyfill'
import VueAreaLinkage from 'vue-area-linkage';
import 'vue-area-linkage/dist/index.css';
import '../static/reset.css' /*引入公共样式*/
import $ from "jquery"
import axios from 'axios'
import Qs from 'qs'
import api from './components/http/index'
// // 导入vue-echarts插件
// import ECharts from 'vue-echarts/components/ECharts'
// // 导入echarts的图形类型
// import 'echarts/lib/chart/line'
// // 导入工具部分
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/title';
// // register component to use
// import 'echarts/lib/component/legendScroll';
// // register component to use
// import 'echarts/lib/component/dataZoom';
// import 'echarts/lib/component/markPoint';
// import 'echarts/lib/component/markLine';
// import 'echarts/lib/component/markArea';
// import 'echarts/lib/component/dataZoom';

// import echarts from 'echarts'
 import echarts from 'echarts'
// Vue.prototype.$echarts = echarts


Vue.use(api)
Vue.use(Element);
Vue.use(VueAreaLinkage);
// Vue.prototype.$http = axios;
Vue.prototype.qs = Qs;
Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
