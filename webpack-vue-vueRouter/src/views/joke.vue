//joke-img.vue
<template>
    <div class='content'>
        <div class='title'>搞笑段子</div>
        <div class='content-img' v-for='(item,index) in data' :key='index'>
            <div class='img-title'>{{index+1}} : {{item.text}}</div>
            <!-- <img v-bind:src='item.url'/> -->
        </div>
    </div>
</template>
<script>
export default {
  name: 'joke',
  mounted(){
        let that = this;
        this.$http.post(this.apiUrl,{showapi_appid:this.showapi_appid,showapi_sign:this.key},{emulateJSON:true})
				.then((res) => {
          console.log(res.body.showapi_res_body.contentlist);
                    that.data = res.body.showapi_res_body.contentlist;
				}),function(error){}     
  },
  created(){
    //用vuex设置状态，改变class;
     this.$store.dispatch("inOther");
  },
  data () {
    return {
       apiUrl:"http://route.showapi.com/341-1",
       key:"11eb291d9eae49e191ca546967daf8c7",
       showapi_appid:"45144",
       data:'',
    }
  },
}
</script>
<style lang='less'>
  .content-img{
    padding:10px 10px;
    border-bottom: 1px solid #cdcdcd;
    text-align: center;
    .img-title{
      text-align: left;
      line-height:30px;
    }
    img{
      width:250px;
      height:auto;
    }
  }
</style>