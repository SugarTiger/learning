<template>
    <div class="message">
        <v-header :left="showMenu?'200px':0" :theme='theme' @menuShow="showMenu=true"></v-header>
        <v-menu :left="showMenu?0:'-200px'" @menuHidden="showMenu=false"></v-menu>
        <v-mask v-show="showMenu" @menuHidden="showMenu=false"></v-mask>
        <div class="msghead">
            <p class="noread" :class="{active: (which===1 ? true : false)}" @click="which=1">未读消息</p>
            <p class="read" :class="{active: (which===2 ? true : false)}" @click="which=2"><a @click="markread">已读消息</a></p>
        </div>
        <div class="msgbody">
            <ul>
                <li class="msg" v-for="(msg,index) in msgList" :key="index">
                    <img :src="msg.author.avatar_url">
                    <div>
                        <p class="name">{{msg.author.loginname}}</p>
                        <p class="content">{{msg.reply.content | formatMsg}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import vHeader from '../components/header.vue'
    import vMenu from '../components/menu.vue'
    import vMask from '../components/mask.vue'

    export default {
        data () {
            return {
                flag: 1,
                which: 1,
                showMenu: false,
                theme: '消息',
                msg: {}
            }
        },
        components: {
            vHeader,
            vMenu,
            vMask
        },
        computed: {
            msgList () {
                if (this.which === 1) {
                    return this.msg.hasnot_read_messages
                }
                return this.msg.has_read_messages
            }
        },
        mounted () {
            this.axios.get(`https://www.vue-js.com/api/v1/messages?accesstoken=${this.$store.state.user.accesstoken}`).then((res) => {
                console.log(res)
                this.msg = res.data.data
            }).catch(() => {
                this.$store.commit('alert', '获取信息失败')
            })
        },
        methods: {
            markread () {
                if (this.flag === 1) {
                    this.axios.post('https://www.vue-js.com/api/v1/message/mark_all', {accesstoken: this.$store.state.user.accesstoken}).then((res) => {
                        this.flag++
                    })
                }
            }
        }
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
    .message
        padding-top: 44px
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
                    border-bottom: solid 2px #ff5a5f
                a
                    display: block
                    width: 100%
                    height: 100%
        .msgbody
            .msg
                display: flex
                padding: 10px
                border-bottom: 1px solid #d5dbdb
                img
                    display: block
                    width: 40px
                    height: 40px
                    margin-right: 15px
                    border-radius: 50%
                div
                    flex: 1
                    .name
                        line-height: 20px
                        font-size: 14px
                        font-weight: 600
                    .content
                        font-size: 12px
                        line-height: 20px
                        color: #333
</style>
