<template>
  <div>
    <div v-if="!repoUrl">loading</div>
    <div v-else>most star repo is <a :href="repoUrl">{{ repoName }}</a></div>
  </div>
</template>

<script>
  //引入axios
  import axios from 'axios'

  export default {
    data() {
      return {
        repoUrl: '',
        repoName: ''
      }
    },
    mounted() {
      //发送ajax请求，获取数据
      const keyword = 'v';
      const url = `https://api.github.com/search/repositories?q=${keyword}&sort=stars`;

      //使用vue-resource，发送ajax请求
      // this.$http.get(url)
      //   .then(response => {
      //     //成功
      //     const result = response.data;
      //     //得到最受欢迎的repo
      //     const mostRepo = result.items[0];
      //     this.repoUrl = mostRepo.html_url;
      //     this.repoName = mostRepo.name;
      //   }, response => {
      //     //失败
      //     alert('请求失败！');
      //   });

      //使用axios，发送ajax请求
      axios.get(url)
        .then(response => {
          //成功
          const result = response.data;
          //得到最受欢迎的repo
          const mostRepo = result.items[0];
          this.repoUrl = mostRepo.html_url;
          this.repoName = mostRepo.name;
        }).catch(error => {
        //失败
        console.log(error);
        alert('请求失败！');
      });
    }
  }
</script>

<style scoped>

</style>
