<template>
    <div>
        <h1>Home</h1>
        <p>{{msg}}</p>
        <ul class="nav nav-tabs">
            <li>
                <router-link to="/home/news">News</router-link>
            </li>
            <li>
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
            msg: 'Hello, Vue router !!!'
        }
    }
}
</script>