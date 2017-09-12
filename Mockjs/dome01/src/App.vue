<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <img :src="imgSrc" alt="">
    <h1>{{ msg }}</h1>
    <div class="tab">
      <table>
        <thead>
          <td>ID</td>
          <td>姓名</td>
          <td>性别</td>
          <td>年龄</td>
          <td>生日</td>
          <td>所在城市</td>
        </thead>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.isMale | isMale}}</td>
          <td>{{item.age}}</td>
          <td>{{item.birthday}}</td>
          <td>{{item.city}}</td>
        </tr>
      </table>
    </div>
    <input type="text" v-model="name">
    <input type="text" v-model="age">
    <button @click="toPost">发送</button>
    <p>{{text}}</p>
  </div>
</template>

<script>
import Mock from 'mockjs'
import './data/get'
import './data/post'
export default {
  name: 'app',
  data() {
    return {
      msg: 'Test MockJS',
      list: [],
      name: '',
      age: '',
      imgSrc: Mock.Random.image('200x100','#fb0a2a','Mock.js'),
      text:Mock.Random.cparagraph()
    }
  },
  mounted() {
    this.axios.get('http://test.com').then((res) => {
      this.list = res.data.user
    }).catch((error) => {
      console.log('错误：', error)
    })
  },
  filters: {
    isMale(boolean) {
      return boolean ? '男' : '女'
    }
  },
  methods: {
    toPost() {
      this.axios.post('http://test.com', {
        name: this.nane,
        age: this.age
      }).then((res) => {
        console.log('返回，', res.data)
      })
    }
  }
}
</script>

<style lang="sass">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .tab{
    width:100%;
    display:flex;
    justify-content:center;
  }
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
