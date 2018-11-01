// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import '../static/reset.css' /*引入公共样式*/
// import '../static/root.less' 
// import '!style-loader!css-loader!less-loader!../static/root.less' /*引入公共样式*/
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

import App from './App'

Vue.use(Element);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
