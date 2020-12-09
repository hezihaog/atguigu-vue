<template>
  <div>
    <ul>
      <!-- 消息条目 -->
      <li v-for="message in messages" :key="id">
        <!-- 点击后，跳转到详情，:to=``，路由地址动态变化，每个消息的id都不一样 -->
        <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
      </li>
    </ul>
    <hr>
    <!-- 消息详情 -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        messages: []
      }
    },
    mounted() {
      //模拟异步获取数据
      setTimeout(() => {
        const messages = [
          {
            id: 1,
            title: 'message001',
          },
          {
            id: 3,
            title: 'message003',
          },
          {
            id: 5,
            title: 'message005',
          }
        ];
        this.messages = messages;
      }, 1000);
    }
  }
</script>

<style scoped>

</style>
