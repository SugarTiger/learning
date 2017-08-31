<template>
    <div class="content">
        <div class='title'>今日运气</div>
        <div class='content-item'>公历：{{data.gongli}}</div>
        <div class='content-item'>冲煞：{{data.chongsha}}</div>
        <div class='content-item'>运势：{{data.jrhh}}</div>
        <div class='content-item'>宜：{{data.yi}}</div>
        <div class='content-item'>星座：{{data.xingzuo}}</div>
        <div class='content-item'>日：{{data.zhiri}}</div>
    </div>
</template>
<script>
export default {
    name: 'joke',
    mounted() {
        let that = this;
        this.axios.post(this.apiUrl,
            {
                showapi_appid: this.showapi_appid,
                showapi_sign: this.showapi_sign
            }).then(res => {
                console.log(res)
                that.data = res.data.showapi_res_body;
            }).catch(err => {
                console.log(err)
            })
    },
    created() {
        //用vuex设置状态，改变class;
        this.$store.dispatch("inOther");
    },
    data() {
        return {
            apiUrl: "http://route.showapi.com/856-1",
            showapi_sign: "11eb291d9eae49e191ca546967daf8c7",
            showapi_appid: "45144",
            data: '',
        }
    },
}
</script>
<style lang='less'>
.content {
    margin: 0;
    padding: 40px 0;
    position: relative;
    font-size: 14px;
    .title {
        text-align: center;
        position: fixed;
        top: 0;
        width: 100%;
        color: #fff;
        font-size: 16px;
        background: #00a6c6;
        text-align: center;
        line-height: 40px;
        font-family: cursive;
    }
    .content-item {
        padding: 10px 0;
        margin: 0 10px;
        border-bottom: 1px solid #cdcdcd
    }
}
</style>