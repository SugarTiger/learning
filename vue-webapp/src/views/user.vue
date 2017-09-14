<template>
    <div class="user">
        <v-header :left="showMenu?'200px':0" :theme="theme" @menuShow="showMenu=true"></v-header>
        <v-menu :left="showMenu?0:'-200px'" @menuHidden="showMenu=false"></v-menu>
        <v-mask v-show="showMenu" @menuHidden="showMenu=false"></v-mask>
        <div class="info">
            <img :src="info.avatar_url" alt="">
            <p>{{info.loginname}}</p>
        </div>
        <div class="msghead">
            <p class="noread" :class="{active: (which === 1? true:false)}" @click="which=1">最近回复</p>
            <p class="read" :class="{active: (which === 2? true:false)}" @click="which=2">最近发布</p>
        </div>
        <div class="msgbody">
            <ul>
                <li class="msg" v-for="(msg, index) in msgList" :key="index">
                    <router-link :to="{path: `/topic/${msg.id}`}">
                        <p class="title">{{msg.title}}</p>
                        <p class="time">最近更新<strong>{{msg.last_reply_at | formatTime}}</strong></p>
                    </router-link>
                </li>
            </ul>
        </div>
        <a v-if="accesstoken" @click="loginout" class="loginout">退出</a>
    </div>
</template>

<script>
    import vHeader from '../components/header.vue'
    import vMask from '../components/mask.vue'
    import vMenu from '../components/menu.vue'
    import store from '../store'
    export default {
        data () {
            return {
                accesstoken: '',
                which: 1,
                showMenu: false,
                theme: '用户信息',
                info: {}
            }
        },
        components: {
            vHeader,
            vMask,
            vMenu
        },
        computed: {
            msgList () {
                if (this.which === 1) { return this.info.recent_replies }
                return this.info.recent_topics
            }
        },
        mounted () {
            if (this.$store.state.user.accesstoken) {
                this.accesstoken = this.$store.state.user.accesstoken
            }
            this.fetchmsg()
        },
        watch: {
            $route () {
                this.fetchmsg()
            }
        },
        methods: {
            fetchmsg () {
                let loginname = this.$route.params.id
                this.axios.get(`https://www.vue-js.com/api/v1/user/${loginname}`).then((res) => {
                    this.info = res.data.data
                }).catch(() => {
                    this.$store.commit('alert', '获取个人信息失败')
                })
            },
            loginout () {
                this.$store.commit('logout')
                this.$router.push({name: 'list'})
            }
        },
        beforeRouteEnter (to, from, next) {
            if (!store.state.user.accesstoken) {
                next({ name: 'login' })
            } else {
                next()
            }
        }
    }

</script>

<style lang="stylus">
.user
    padding-top: 44px
    .info
        padding: 15px 0
        background: #e7e7e7
        img
            display: block
            width: 100px
            height: 100px
            margin: 0 auto
            border-radius: 50%
        p
            line-height: 20px
            text-align: center
            font-size: 12px
            color: #333
    .msghead
        height: 40px
        p
            float: left
            box-sizing: border-box
            height: 40px
            width: 50%
            line-height: 40px
            text-align: center
            font-size: 14px
            font-weight: 700
            border-bottom: solid 1px #d4d4d4
            &.noread
                border-right: solid 1px #d4d4d4
            &.active
                color: #ff5a5f
                border-bottom: solid 2px #ff5a5f;
    .msgbody
        .msg
            padding: 10px
            border-bottom: 1px solid #d5dbdb
            p
                white-space: nowrap
                text-overflow: ellipsis
                overflow: hidden
                &.title
                    height: 30px
                    line-height: 30px
                    font-size: 14px
                    font-weight: 600
                    color: #7e8c8d
                &.time
                    height: 20px
                    line-height: 20px
                    font-size: 10px
                    text-align: right
                strong
                    color: #42b983
    .loginout
        position: fixed
        left: 0
        bottom: 0
        width: 100%
        font-size: 20px
        font-weight: 600
        line-height: 40px
        text-align: center
        background: #ff5a5f
        color: #fff
        z-index: 999
</style>

