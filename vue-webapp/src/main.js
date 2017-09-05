import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import './common/css/markdown.css'
import './common/css/reset.css'

axios.defaults.timeout = 5000
Vue.prototype.axios = axios
Vue.use(VueRouter)
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
