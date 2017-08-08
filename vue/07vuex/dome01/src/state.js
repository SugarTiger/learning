    import Vue from 'vue'
    import Vuex from 'vuex'
    Vue.use(Vuex)
    const state = {
        count: 3,
        todos: [{
                id: 1,
                text: '....',
                done: true
            },
            {
                id: 2,
                text: '....',
                done: false
            }
        ]
    }
    const mutations = {
        increment(state) {
            state.count++
        }
    }
    const getters = {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done).length
        }
    }

    const actions = {
        increment({commit}){
            setTimeout(()=>{
                commit('increment')
            },1000)
        }
    }


    export default new Vuex.Store({
        state,
        mutations,
        getters
    })