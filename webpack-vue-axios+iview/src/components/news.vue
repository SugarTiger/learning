<template>
    <div class="news">
        <Card class="news-item" v-for='(item,index) in data' :key='index'>
            <p slot="title">
                {{item.title}}
            </p>
            <a :href="item.link">
                <img v-if='item.imageurls[0]' :src="item.imageurls[0]?item.imageurls[0].url:''" alt="新闻图片" class='news-img'>
            </a>
            <p class='date'>{{item.pubDate}}</p>
        </Card>
    </div>
</template>
<script>
export default {
    name: 'news',
    mounted() {
        let that = this;
        this.axios.post(this.apiUrl,
            {
                showapi_appid: this.showapi_appid,
                showapi_sign: this.showapi_sign
            }).then(res => {
                that.data = res.data.showapi_res_body.pagebean.contentlist.splice(1, 5)
            }).catch(function(error) {
                console.log(error);
            });
    },
    data() {
        return {
            apiUrl: "http://route.showapi.com/109-35",
            showapi_sign: "11eb291d9eae49e191ca546967daf8c7",
            showapi_appid: "45144",
            data: '',
        }
    }
}
</script>
<style lang='less'>
.news {
    padding: 10px 20px;
    display: block;
    .news-item {
        width: 100%;
        margin: 20px 0;
        a{
            display: inline-block;
            width: 100%;
            text-align: center;
            img{
                width: 100%;
                display:inline-block;
            }
        }
        .date{
            text-align: right;
        }
    }
}
</style>