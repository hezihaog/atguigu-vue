<template>
  <div class="row">
    <h2 v-if="firstView">请输入用户名，进行搜索！</h2>
    <h2 v-if="loading">Loading</h2>
    <h2 v-if="errorMsg">{{ errorMsg }}</h2>
    <div class="card" v-for="(user, index) in users" :key="index">
      <a :href="user.url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{ user.name }}</p>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'

  export default {
    data() {
      return {
        firstView: true,//是否显示第一个View
        loading: false,//是否正在加载中
        users: null,//搜索结果，[{url: '', avatar_url: '', name: ''}]
        errorMsg: ''//搜索失败的错误信息
      }
    },
    mounted() {
      //订阅搜索消息
      PubSub.subscribe('search', (msg, searchName) => {
        //更新为请求中的状态
        this.firstView = false;
        this.loading = true;
        //清理之前的数据
        this.users = null;
        this.errorMsg = '';

        //发送ajax请求，进行搜索
        const url = `https://api.github.com/search/users?q=${searchName}`;
        axios.get(url).then(response => {
          const result = response.data;
          const users = result.items;
          //成功，更新为成功状态
          this.loading = false;
          //数据模型转换
          this.users = users.map(item => ({
            url: item.html_url,
            avatar_url: item.avatar_url,
            name: item.login
          }));
        }).catch(error => {
          console.log(error);
          //失败，更新为失败状态
          this.loading = false;
          this.errorMsg = '请求失败';
        });
      });
    }
  }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
