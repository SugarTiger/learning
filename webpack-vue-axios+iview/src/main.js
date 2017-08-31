import Vue from 'vue';
import router from './router.js';
import axios from 'axios';
import iView from 'iview';
import 'iview/dist/styles/iview.css'; 
import './assets/less/index.less';
import App from './app.vue';
var qs = require('qs');

Vue.use(iView);
Vue.config.debug = true;
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//添加请求拦截器
axios.interceptors.request.use(function(config){
    //在发送请求之前做某事
    config.data = qs.stringify(config.data);
    return config;
  },function(error){
    //请求错误时做些事
    return Promise.reject(error);
  });

Vue.prototype.axios = axios;

new Vue({
    router,
    el: '#appIndex',
    render: h => h(App)
})