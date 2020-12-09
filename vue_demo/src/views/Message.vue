<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="id">
        <a href="">{{ message.title }}</a>
      </li>
    </ul>
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
