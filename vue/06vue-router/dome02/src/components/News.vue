<template>
    <div>
        <ul>
            <li>
                <router-link to="/home/news/detail/01">News 01</router-link>
            </li>
            <li>
                <router-link to="/home/news/detail/02">News 02</router-link>
            </li>
            <li>
                <router-link to="/home/news/detail/03">News 03</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        
    }
</script>