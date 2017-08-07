import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import routes from './routerConfig'

Vue.use(vueRouter)
const router = new vueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  mounted(){
    console.log(this.$route)
  },
  render: h => h(App)
})
