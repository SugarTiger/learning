import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        user: {},
        msg: '',
        alertshow: false
    },
    mutations: {
        userInit: (state) => {
            if (window.sessionStorage.user) {
                state.user = JSON.parse(window.sessionStorage.user)
            }
        },
        logout: (state) => {
            state.user = {}
            window.sessionStorage.removeItem('user')
        },
        login: (state, date) => {
            state.user = date
            window.sessionStorage.user = JSON.stringify(date)
        },
        alert: (state, date) => {
            state.msg = date
            state.alertshow = true
            setTimeout(() => {
                state.alertshow = false
            }, 2000)
        }
    }
})
