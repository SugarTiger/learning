<template>
    <Carousel autoplay v-model="value2">
        <CarouselItem>
            <div class="demo-carousel"><img src="./../assets/images/banner.jpg" alt=""></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="./../assets/images/banner1.jpg" alt=""></div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value2: 0
            }
        }
    }
</script>
<style lang='less'>
.demo-carousel{
    >img{
        width: 100%;
        height: 200px;
    }
}
</style>