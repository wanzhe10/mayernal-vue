// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import App from './App'
import VueAreaLinkage from 'vue-area-linkage';
import 'vue-area-linkage/dist/index.css';
import '../static/reset.css' /*引入公共样式*/
import $ from "jquery"
import axios from 'axios'
import Qs from 'qs'
import api from './components/http/index'
import Print from 'vue-print-nb'
Vue.use(Print); //注册
 import echarts from 'echarts'
Vue.use(echarts)
Vue.use(api)
Vue.use(Element);
Vue.use(VueAreaLinkage);
Vue.prototype.qs = Qs;
Vue.config.productionTip = false;
//弹出框禁止滑动
Vue.prototype.noScroll = function () {
  var mo = function (e) {
    e.preventDefault()
  }
  document.body.style.overflow = 'hidden'
  document.addEventListener('touchmove', mo, false) // 禁止页面滑动
}

//弹出框可以滑动
Vue.prototype.canScroll = function () {
  var mo = function (e) {
    e.preventDefault()
  }
  document.body.style.overflow = '' // 出现滚动条
  document.removeEventListener('touchmove', mo, false)
}

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
