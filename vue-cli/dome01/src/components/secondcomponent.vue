<template>
    <div id="secondcomponent">
        <h1>I am another page</h1>
        <a> written by {{author}}</a>
        <p>感谢<a href="https://github.com/SugarTiger">SugarTiger</a>大神的技术指导</p>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h1 style="line-height:36px;color:#20a0ff">豆瓣电影排行榜</h1>
            </div>
            <div v-for="(article,index) in articles" :key='index' class="text item">
                 {{article.title}}
            </div>
        </el-card>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                authod:"微信公众号 阿飞22",
                articles:[]
            }
        },
        mounted:function(){
            this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
                headers:{},
                emulateJSON:true
            }).then(function(response){
                this.articles = response.data.subjects
                console.log(this.articles)
            },function(error){
                console.log(error);
            })
        }
    }
</script>
<style>
</style>