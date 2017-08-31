import Vue from 'vue'
import Router from 'vue-router'
import homePage from './views/home.vue'
import Today from './views/today.vue'
import jokePage from './views/joke.vue'
import My from './views/my.vue'
import Luck from './views/luck.vue'
import Eg from './views/eg.vue'
import CnEg from './views/cn-eg.vue'
Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            component: resolve => require(['./views/home.vue'], resolve)
        },
        {
            path: '/cn-eg',
            component: CnEg
        },
        {
            path: '/luck',
            component: Luck
        },
        {
            path: '/eg',
            component: Eg
        },
        {
            path: '/today',
            component: Today
        },
        {
            path: '/joke',
            component: jokePage
        },
        {
            path: '/my',
            component: My
        },
    ]
})