//my.vue
<template>
    <div>
        <div class='my-hide'>
            <div class='my-logo'></div>
            <span class='my-name'>SugarTiger</span>
        </div>
        <div class='my-detail'>
            <Icon type="social-github" size='17'></Icon>
            <a href='https://github.com/SugarTiger'>https://github.com/SugarTiger</a><br><br>
            <Icon type="ios-email" size='17'></Icon>
            1029109173@qq.com<br><br>
            <Icon type="android-contacts" size='17'></Icon>
            1029109173<br><br>
            <Icon type="social-wordpress" size='17'></Icon>
            <a href='http://www.cnblogs.com/afeihome/'>http://www.cnblogs.com/afeihome/</a>
        </div>
    </div>
</template>
<script>
export default {
  name: 'my',
  components:{
    
  },
  created(){
    //用vuex设置状态，改变class;
     this.$store.dispatch("inMy");
  }
}
</script>
<style lang='less'>
    .my-hide{
        width:100%;
        height:180px;
        background:url("./../assets/images/bg1.png") no-repeat;
        background-size:cover;
        position:relative;
        .my-logo{
            width:80px;
            height:80px;
            background:url("./../assets/images/logo.jpg") no-repeat;
            background-size:100%;
            border-radius:50%;
            position:absolute;
            top:60px;
            left:0;
            right:0;
            margin:0 auto;
        }
        .my-name{
            position:absolute;
            bottom:10px;
            color:#fff;
            left:0;
            right:0;
            margin:0 auto;
            display:block;
            text-align:center;
        }
    }
    .my-detail{
            margin:10px 10px;
            >a{
                line-height: 20px;  
            }
        }
</style>