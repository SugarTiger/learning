<template>
    <div class='box'>
        <Row :gutter="16">
            <Col span="6">
            <div>
                <router-link class="item" to="/luck">
                    <i class='luck'></i>运势
                </router-link>
            </div>
            </Col>
            <Col span="6">
            <div>
                <router-link class="item" to="/joke">
                    <i class='joke'></i>笑一笑
                </router-link>
            </div>
            </Col>
            <Col span="6">
            <div>
                <router-link class="item" to="/today">
                    <i class='today'></i>今天
                </router-link>
            </div>
            </Col>
            <Col span="6">
            <div>
                <router-link class="item" to="/eg">
                    <i class='eg'></i>英文励志
                </router-link>
            </div>
            </Col>
        </Row>
        <Row :gutter="16">
            <Col span="6">
            <div>
                <router-link class="item" to="/cn-eg">
                    <i class='cn-eg'></i>翻译
                </router-link>
            </div>
            </Col>
            <Col span="6">
            <div>
                <router-link class="item" to="/">
                    <Icon type="plus-round" size='38'></Icon>敬请期待
                </router-link>
            </div>
            </Col>
            <Col span="6">
            <div>
                <router-link class="item" to="/">
                    <Icon type="plus-round" size='38'></Icon>敬请期待
                </router-link>
            </div>
            </Col>
        </Row>
    </div>
</template>
<style lang='less'>
.images(@img: other) {
    background-image:url("./../assets/images/@{img}.jpg");
}
.box {
    width: 100%;
    margin: 10px 0;
    .item {
        width: 100%;
        float: left;
        height: 60px;
        text-align: center;
        color: #00a6c6;
        text-decoration: none;
        font-size: 12px;
        i {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            display: block;
            margin: 5px auto;
            background-size: 100%;
        }

        .luck {
            .images(luck)
        }
        .joke {
            .images(joke)
        }
        .today {
            .images(today)
        }
        .eg {
            .images(eg)
        }
        .cn-eg {
            .images(cn-eg)
        }
        .other {
            .images()
        }
    }
}
</style>