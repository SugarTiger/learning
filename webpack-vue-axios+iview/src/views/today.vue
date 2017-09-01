//about.vue
<template>
    <div class='content'>
        <div class='title'>历史上的今天</div>
        <Card class="content-item" v-for='(item,index) in data' :key='index'>
            <p slot="title">
                {{item.title}}
            </p>
            <img class='item-img' :src='item.img'>
        </Card>
    </div>
</template>
<script>
export default {
    name: 'today',
    mounted() {
        let that = this;
        this.axios.post(this.apiUrl, {
            showapi_appid: this.showapi_appid,
            showapi_sign: this.showapi_sign
        }).then(res => {
            that.data = res.data.showapi_res_body.list;
        }).catch(function(error) {
            console.log(error);
        });
    },
    created() {
        //用vuex设置状态，改变class;
        this.$store.dispatch("inOther");
    },
    data() {
        return {
            apiUrl: "http://route.showapi.com/119-42",
            showapi_sign: "1688d17e4c41492daaef9e12d36dcd0d",
            showapi_appid: "35517",
            data: '',
        }
    },
}
</script>
<style lang='less'>
.item-img {
    width: 100%;
    margin: 0 auto;
}

</style>
