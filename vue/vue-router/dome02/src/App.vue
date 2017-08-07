<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router Dome - 02</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link class="list-group-item" to="/home" >Home</router-link>
          <router-link class="list-group-item" to="/about" >About</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <p>当前路径：{{$route.path}}</p>
        <p>当前参数：{{ JSON.stringify($route.params)}}</p>
        <p>路由名称：{{$route.name}}</p>
        <p>路由查询参数：{{JSON.stringify($route.query)}}</p>
        <p>路由匹配项：{{ JSON.stringify($route.matched)}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>

</style>
