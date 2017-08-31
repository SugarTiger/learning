<template>
    <div class='home'>
        <div class="home-title">App</div>
        <banner></banner>
        <navBox></navBox>
        <news></news>
    </div>
</template>
<script>
import banner from './../components/banner.vue';
import news from './../components/news.vue';
import navBox from './../components/nav-box.vue';
export default {
    name:'home',
    components:{
        banner,
        news,
        navBox
    },
    created(){
        this.$store.dispatch('inHome')
    }
}
</script>
<style lang='less'>
 .home{
    width: 100%;
    height: auto;
    margin-bottom: 40px;
    .home-title{
      height:30px;
      background:#2D8CF0;
      color:#fff;
      line-height:30px;
      text-align: center;
      font-size:14px;  
    }
}
</style>