<template>
    <div>
        <h2>{{count}}</h2>
        <h2>{{doneTodos}}</h2>
    </div>
</template>
<script>
import { mapState,mapGetters ,mapMutations  } from 'vuex'
export default {
    computed: {
        count() {
            return this.$store.state.count
        },
        // doneTodosCount(){
        //     return this.$store.getters.doneTodos
        // },
        ...mapGetters([
            'doneTodos'
        ])
    },
    methods:{
        ...mapMutations([
            'increment' // 映射 this.increment() 为 this.$store.commit('increment')
        ]),
    }
}
</script>