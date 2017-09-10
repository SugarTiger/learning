<template>
    <div class="about">
        <v-header :left="showMenu?'200px':0" :theme="theme" @menuShow="showMenu=true"></v-header>
        <v-menu :left="showMenu?0:'-200px'" @menuHidden="showMenu=false"></v-menu>
        <v-mask v-show="showMenu" @menuHidden="showMenu=false"></v-mask>
        <div class="aboutBody">
            <p>Vue 中文社区是全球最大的 Vueframework 中文开源技术社区，致力于 Vue 在中国的学习、推广、研究工作。</p>
            <p>Vue 中文社区正在努力建设中，如果你有什么想法，欢迎吐槽。</p>
            <div class="imgBox">
                <img src="../common/images/qq.png" alt="">
                <p>群二维码</p>
            </div>
            <p>尽管建了QQ群，但是还是希望大家尽量有问题在社区讨论，这样才可以有一些沉淀和积累，不至于每天都有人在问同样的问题，通过对问题的总结和用文字表达的过程，自己也可以对知识进行一个梳理。</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import vHeader from '../components/header.vue'
    import vMask from '../components/mask.vue'
    import vMenu from '../components/menu.vue'
    export default {
        data () {
            return {
                showMenu: false,
                theme: '关于'
            }
        },
        components: {
            vHeader,
            vMask,
            vMenu
        }
    }

</script>

<style lang="stylus">
.about
    .aboutBody
        margin-top 45px
        >p
            text-indent 2em
            padding 5px 15px
            line-height 25px
    .imgBox
        width 100%
        text-align center
        img
            display inline
        >p
            color #666
            font-size 14px
</style>

