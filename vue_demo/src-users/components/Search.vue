<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search"
             v-model="searchName" @keyup.enter="search"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
  import PubSub from 'pubsub-js'

  export default {
    data() {
      return {
        searchName: ''
      }
    },
    methods: {
      //搜索
      search() {
        const searchName = this.searchName.trim();
        if (!searchName) {
          alert('请输入要搜索的内容');
          return
        }
        //发布消息
        PubSub.publish('search', searchName);
      }
    }
  }
</script>

<style scoped>

</style>
