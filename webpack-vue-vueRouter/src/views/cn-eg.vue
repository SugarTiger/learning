<template>
    <div class="content">
        <div class="title">
            英汉互译
        </div>
        <div class="controller">
            <!-- <input type="text" class="input-text" placeholder="输入英文/汉字" v-model='text'> -->
            <Input v-model="text" placeholder="输入英文/汉字" style="width: 80%;margin-top:20px"></Input>
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
    created(){
        this.$store.dispatch("inOther");
    },
    methods:{
        goApi(){
            let that = this;
            this.axios.post(this.apiUrl,
            {
                showapi_appid: this.showapi_appid,
                showapi_sign: this.showapi_sign,
                q:this.text
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
    .controller{
        text-align:center;
    }
    .button{
        display:block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
    }
    .show-content{
        margin:20px;
        color:#FF4949;
        font-size:12px;
    }
</style>