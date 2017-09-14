<template>
    <div class="alert">
        <p>{{msg}}</p>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        computed: {
            msg () {
                return this.$store.state.msg
            }
        }
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
    .alert
        position fixed
        top 500px
        left 0
        width 100%
        height 30px
        z-index 999
        p
            margin 30px
            line-height 50px
            text-align center
            background #f2dede
            font-size 18px
            color #a94442
            border-radius 4px
</style>
