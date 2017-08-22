import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'
import * as types from './store/types'
import Index from './index.vue'


Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'/',
        component:Index
    }
]

// 页面刷新时，重新赋值token
if(window.localStorage.getItem('token')){
    store.commit(types.LOGIN,window.localStorage.getItem('token'))
}

const router = new VueRouter({
    routes
})

// router.beforeEach((to,from,next)=>{
// })

export default router