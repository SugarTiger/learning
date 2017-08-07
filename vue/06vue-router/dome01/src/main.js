import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'

import routes from './routeConfig/router-config'

Vue.use(vueRouter)


const router = new vueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
