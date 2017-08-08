import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import stores from './state'
Vue.use(Vuex);

const store = new Vuex.Store(stores)
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
