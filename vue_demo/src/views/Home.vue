<template>
  <div>
    <h2>
      Home
    </h2>
    <div>
      <ul class="nav nav-tabs">
        <!-- 路由链接 -->
        <li>
          <router-link to="/home/news">News</router-link>
        </li>
        <li>
          <router-link to="/home/message">Message</router-link>
        </li>
      </ul>

      <!-- 当前显示的内容 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import News from "../views/News";
  import Message from "../views/Message";

  export default {}
</script>

<style scoped>

</style>
