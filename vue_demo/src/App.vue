<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Router Test</h2></div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 生成路由链接 -->
          <!-- to属性代表路由的地址 -->
          <router-link to="/about" class="list-group-item">About</router-link>
          <router-link to="/home" class="list-group-item">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- keep-alive标签，缓存路由组件对象，不每次切换都重新创建 -->
            <keep-alive>
              <!-- 显示当前组件，msg属性，向组件传递参数，不能加:，如果是:msg="abc"，则abc变为了变量，这里是传固定的字符串值 -->
              <router-view msg="abc"></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>

</style>
