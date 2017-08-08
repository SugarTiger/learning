export default {
    state: {
        count: 3,
        todos:[
            { id:1, text:'....',done:true},
            { id:2, text:'....',done:false}
        ]
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    getters:{
        doneTodos:state => {
            return state.todos.filter(todo => todo.done).length
        }
    }
}