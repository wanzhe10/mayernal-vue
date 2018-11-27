// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import App from './App'
// import axios from 'axios'
import 'babel-polyfill'
import Qs from 'qs'
import VueAreaLinkage from 'vue-area-linkage';
import 'vue-area-linkage/dist/index.css';
import '../static/reset.css' /*引入公共样式*/
import $ from "jquery"
import axios from 'axios'
import {
  post,
  fetch,
  patch,
  put
} from './components/api/axios'



Vue.use(Element);
Vue.use(VueAreaLinkage);
// Vue.prototype.$http = axios;
Vue.prototype.qs = Qs;
//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;

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
