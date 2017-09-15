<template>
    <div class="topic" :class="{noscroll: showMenu}">
        <v-header :left="showMenu?'200px':0" :theme="theme" @menuShow="showMenu=true"></v-header>
        <v-menu :left="showMenu?0:'-200px'" @menuHidden="showMenu=false"></v-menu>
        <v-mask v-show="showMenu" @menuHidden="showMenu=false"></v-mask>
        <div class="page">
            <h2 class="title">{{topic.title}}</h2>
            <div class="infoWrapper">
                <router-link :to="{path: `/user/${topic.author.loginname}`}">
                    <img :src="topic.author.avatar_url" alt="" class="avatar">
                </router-link>
                <div class="inf">
                    <p>
                        <span class="authorname">{{topic.author.loginname}}</span>
                        <span class="label" :class="tabToClass(topic.tab, topic.top, topic.good)">{{topic.tab | tabToLabel(topic.top, topic.good)}}</span>
                    </p>
                    <p>
                        <span class="createat">发布于{{topic.create_at | formatTime}}</span>
                        <span class="visitcount">{{topic.visit_count}}次浏览</span>
                    </p>
                </div>
            </div>
            <div class="content markdown-body" v-html="topic.content"></div>
            <div class="reply">
                <p class="replycount"><strong>{{replies.length}}</strong> 条回复</p>
                <ul class="replylist">
                    <li class="replyitem" v-for="(reply, index) in replies" :key="index">
                        <div class="replyitemhead">
                            <router-link :to="{path: `/user/${reply.author.loginname}`}">
                                <img :src="reply.author.avatar_url" alt="">
                            </router-link>
                            <div>
                                <p>{{reply.author.loginname}}发布于{{reply.create_at | formatTime}}</p>
                                <p>
                                    <span class="icon-thumb-up" @click="up(index)" :class="{uped: upList[index]}">{{reply.ups.length}}</span>
                                    <span class="icon-mail-reply" @click="showreplybox(index, reply.author.loginname)"></span>
                                </p>
                            </div>
                        </div>
                        <div class="replyitembody markdown-body" v-html="reply.content"></div>
                        <div class="replybox" v-if="replybox[index]" :class="'replybox-'+index">
                            <textarea rows="8" placeholder="支持markdown语法"></textarea>
                            <a class="replyBtn" @click="submitreply($event, reply.id)">确定</a>
                        </div>
                    </li>
                </ul>
                <div class="replybox" v-if="accesstoken">
                    <textarea rows="8" placeholder="支持markdown语法"></textarea>
                    <a class="replyBtn" @click="submitreply($event)">确定</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import vHeader from '../components/header.vue'
    import vMenu from '../components/menu'
    import vMask from '../components/mask'
    import $ from 'webpack-zepto'
    export default {
        data () {
            return {
                accesstoken: '',
                theme: '文章',
                showMenu: false,
                topic: {
                    author: {
                        loginname: ''
                    }
                },
                replies: [],
                upList: [],
                replybox: []
            }
        },
        components: {
            vHeader,
            vMenu,
            vMask
        },
        mounted () {
            if (this.$store.state.user.accesstoken) {
                this.accesstoken = this.$store.state.user.accesstoken
            }
            let topicId = this.$route.params.id
            this.axios.get(`https://www.vue-js.com/api/v1/topic/${topicId}`).then((res) => {
                let data = res.data.data
                this.topic = {
                    id: data.id,
                    title: data.title,
                    author: data.author,
                    content: data.content,
                    create_at: data.create_at,
                    visit_count: data.visit_count,
                    top: data.top,
                    good: data.good,
                    tab: data.tab
                }
                this.replies = data.replies
                this.replies.forEach((reply) => {
                    this.replybox.push(false)
                    if (!reply.ups.length) {
                        this.upList.push(false)
                    } else {
                        if (reply.ups.includes(this.$store.state.user.id)) {
                            this.upList.push(true)
                        } else {
                            this.upList.push(false)
                        }
                    }
                })
            }).catch(() => {
                this.$store.commit('alert', '获取信息失败')
            })
        },
        methods: {
            tabToClass (tab, top, good) {
                if (top) {
                    return 'top'
                }
                if (good) {
                    return 'good'
                }
                return tab
            },
            up (index) {
                if (!this.$store.state.user.accesstoken) {
                    this.$store.commit('alert', '请先登录')
                    return
                }

                this.axios.post(`https://www.vue-js.com/api/v1/reply/${this.replies[index].id}/ups`, {accesstoken: this.$store.state.user.accesstoken}).then((res) => {
                    res = res.data
                    let num = Number($('.icon-thumb-up').eq(index).html())
                    if (res.error_msg !== undefined) {
                        throw new Error('错误')
                    }
                    if (res.action === 'up') {
                        $('.icon-thumb-up').eq(index).html(num + 1)
                        this.upList.splice(index, 1, true)
                    } else if (res.action === 'down') {
                        $('.icon-thumb-up').eq(index).html(num - 1)
                        this.upList.splice(index, 1, false)
                    }
                }).catch(() => {
                    this.$store.commit('alert', '点赞失败')
                })
            },
            showreplybox (index, name) {
                if (!this.$store.state.user.accesstoken) {
                    this.$store.commit('alert', '请先登录')
                    return
                }
                this.replybox.splice(index, 1, true)
                this.$nextTick(() => {
                    $(`.topic .replybox-${index} textarea`).val(`@${name}`)
                })
            },
            submitreply (ev, id) {
                let content = $(ev.target).siblings('textarea').val()
                if (id) {
                    this.axios.post(`https://www.vue-js.com/api/v1/topic/${this.topic.id}/replies`, {accesstoken: this.$store.state.user.accesstoken, content: content, reply_id: id}).then((res) => {
                        window.location.reload()
                    }).catch(() => {
                        this.$store.commit('alert', '回复失败')
                    })
                } else {
                    this.axios.post(`https://www.vue-js.com/api/v1/topic/${this.topic.id}/replies`, {accesstoken: this.$store.state.user.accesstoken, content: content}).then((res) => {
                        window.location.reload()
                    }).catch(() => {
                        this.$store.commit('alert', '回复失败')
                    })
                }
            }
        }
    }

</script>

<style lang="stylus">
.topic
    height: 100%
    &.noscroll
        overflow: hidden
    .page
        padding-top: 44px
        .title
            margin: 15px
            padding: 5px
            font-size: 18px
            font-weight: 700
            color: #2c3e50
            line-height: 1.5
            background-color: #f0f0f0
            border-radius: 5px
        .infoWrapper
            display: flex
            padding: 0 15px
            height: 50px
            img
                display: block
                width: 45px
                height: 45px
                margin-right: 15px
                border-radius: 50%
            .info
                flex: 1
                p
                    height: 24px
                    .authorname, .createat
                        float: left
                        font-size: 12px
                        line-height: 24px
                    .label, .visitcount
                        float: right
                        font-size: 12px
                    .visitcount
                        line-height: 24px
                    .label
                        padding: 6px 12px
                        color: #fff
                        border-radius: 4px
                        &.top
                            background: #E74C3C
                        &.good
                            background: #E67E22
                        &.share
                            background: #1ABC9C
                        &.ask
                            background: #3498DB
                        &.gob
                            background: #9B59B6

        .content
            padding: 15px
            border-bottom: solid 1px #d4d4d4


        .reply
            .replycount
                padding: 15px
                font-size: 16px
                line-height: 24px
                font-weight: 700
                border-bottom: solid 1px #d4d4d4
                strong
                    color: #42b983
                    font-weight: 700
            .replyitem
                padding: 15px
                border-bottom: solid 1px #d4d4d4
                .replyitemhead
                    display: flex
                    height: 48px
                    img
                        display: block
                        width: 45px
                        height: 45px
                        margin-right: 15px
                        border-radius: 8px
                    div
                        flex: 1
                        p
                            line-height: 24px
                            &:nth-child(2)
                                font-size: 16px
                                text-align: right
                                span
                                    margin-left: 20px
                            .uped
                                color: #4fc08d
                .replyitembody
                    padding: 15px 0
            .replybox
                margin: 15px
                textarea
                    display: block
                    box-sizing: border-box
                    padding: 15px
                    width: 100%
                    font-size: 14px
                    resize: none
                a
                    display: block
                    margin-top: 10px
                    width: 100%
                    line-height: 42px
                    font-size: 16px
                    text-align: center
                    background: #4fc08d
                    border-bottom: 2px solid #3aa373;
                    color: #fff
                    border-radius: 4px
</style>

