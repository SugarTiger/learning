<template>
    <div>
        <h1>Home</h1>
        <p>{{msg}}</p>
        <ul class="nav nav-tabs">
            <li :class="currentPath === '/home/news'?'active':''">
                <router-link to="/home/news">News</router-link>
            </li>
            <li :class="currentPath === '/home/message'?'active':''">
                <router-link to="/home/message">Messages</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: 'Hello, Vue router !!!',
            currentPath: ''
        }
    },
    watch:{
        $route:'cData'
    },
    methods:{
        cData(opt){
            this.currentPath = opt.path;
        }
    }
}
</script>