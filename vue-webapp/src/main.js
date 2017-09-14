import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import filters from './filters'
import routes from './routers'
import store from './store'
import './common/css/markdown.css'
import './common/css/reset.css'
import './common/stylus/index.styl'

axios.defaults.timeout = 5000
Vue.prototype.axios = axios
Vue.use(VueRouter)
// Vue.config.productionTip = false

// 注册filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

const router = new VueRouter({
    mode: 'history',
    routes
})
/* eslint-disable no-new */
new Vue({
    data () {
        return {
        }
    },
    mounted () {
        this.$store.commit('userInit')
    },
    router,
    store,
    components: {
        vAlert: require('./components/alert')
    },
    computed: {
        alertshow () {
            return this.$store.state.alertshow
        }
    }
}).$mount('#app')
