<template>
    <Row class='nav-box'>
        <Col span="12">
        <router-link to='/'>
            <Icon type="home" size="60" :color="home?'#2D8CF0':'#666'"></Icon>
        </router-link>
        </Col>
        <Col span="12">
        <router-link to="/my">
            <Icon type="person" size="60" :color="my?'#2D8CF0':'#666'"></Icon>
        </router-link>
        </Col>
    </Row>
</template>
<script>
export default {
    name: 'footer',
    computed: {
        home() {
            return this.$store.state.home
        },
        my() {
            return this.$store.state.my
        }
    }
}
</script>
<style lang="less">
.nav-box {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    >div{
        text-align: center;
    }
}
</style>