<template>
    <div class="content">
        <div class="title">
            <Icon type="ios-arrow-back"></Icon>
            英汉互译
        </div>
        <div class="controller">
            <Input class='input-text' v-model="text" placeholder="输入英文/汉字" ></Input>
            <Button type="success" @click='goApi' class="button">立即翻译</Button>
            <div class="show-content">
                <div v-for='(item,index) in content' :key='index'>
                    {{item}}<br>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'eg',
    data() {
        return {
            apiUrl: "http://route.showapi.com/32-9",
            showapi_sign: "1688d17e4c41492daaef9e12d36dcd0d",
            showapi_appid: "35517",
            data: '',
            text: '',
            content: ''
        }
    },
    created() {
        this.$store.dispatch("inOther");
    },
    methods: {
        goApi() {
            let that = this;
            this.axios.post(this.apiUrl,
                {
                    showapi_appid: this.showapi_appid,
                    showapi_sign: this.showapi_sign,
                    q: this.text
                }).then(res => {
                    that.content = res.data.showapi_res_body.basic.explains
                }).catch(function(error) {
                    console.log(error);
                });
        }
    }
}
</script>
<style lang='less'>
.show-content {
    margin: 20px;
    color: #FF4949;
    font-size: 12px;
}

.controller {
    .input-text {
        display: block;
        width: 80%;
        margin: 20px auto 0 auto;
    }
    .button {
        display: block;
        cursor: pointer;
        margin: 10px auto;
    }
}
</style>