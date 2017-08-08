import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './state'


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
