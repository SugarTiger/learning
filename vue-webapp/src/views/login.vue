<template>
    <div class="login">
        <v-header :left="showMenu ? '200px' : 0" :theme="theme" @menuShow="showMenu=true"></v-header>
        <v-menu :left="showMenu?0:'-200px'" @menuHidden="showMenu=false"></v-menu>
        <v-mask v-show="showMenu" @menuHidden="showMenu=false"></v-mask>
        <div class="loginWrap">
            <div>
                <input type="text" v-model="access" placeholder="Access Token"/>
                <a class="loginBtn">登录</a>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import vHeader from '../components/header.vue'
    import vMenu from '../components/menu.vue'
    import vMask from '../components/mask.vue'
    import $ from 'webpack-zepto'
    export default {
        data () {
            return {
                showMenu: false,
                theme: '登录',
                access: ''
            }
        },
        components: {
            vHeader,
            vMenu,
            vMask
        },
        mounted () {
            $('.loginBtn').on('click', () => {
                this.axios.post('https://www.vue-js.com/api/v1/accesstoken', {accesstoken: this.access}).then((res) => {
                    res.data.accesstoken = this.access
                    this.$store.commit('login', res.data)
                    this.$router.push({
                        name: 'list'
                    })
                }).catch(() => {
                    this.$store.commit('alert', '登录失败')
                })
            })
        }
    }

</script>

<style lang="stylus">
    .login
        .loginWrap
            padding-top: 44px
            div
                margin-top: 50px
                padding: 40px
                input
                    display: block
                    width: 100%
                    line-height: 24px
                    font-size: 16px
                    text-indent: 10px
                    outline: none
                    border: none
                    border-bottom: 1px solid #4fc08d
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

