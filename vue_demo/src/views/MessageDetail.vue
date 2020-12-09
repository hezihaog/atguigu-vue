<template>
  <div>
    <p>ID：{{$route.params.id}}</p>
    <ul>
      <li>id：{{ messageDetail.id }}</li>
      <li>title：{{ messageDetail.title }}</li>
      <li>content：{{ messageDetail.content }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        messageDetail: {}
      }
    },
    mounted() {
      //模拟异步获取数据
      setTimeout(() => {
        const allMessageDetails = [
          {
            id: 1,
            title: 'message001',
            content: 'message001 content...'
          },
          {
            id: 3,
            title: 'message003',
            content: 'message003 content...'
          },
          {
            id: 5,
            title: 'message005',
            content: 'message005 content...'
          }
        ];
        //缓存数据到组件中，方便下面的watch监视使用
        this.allMessageDetails = allMessageDetails;
        //获取到当前的id，* 1是因为可能传过来是一个字符串，让它变为一个数字类型
        const id = this.$route.params.id * 1;
        this.messageDetail = allMessageDetails.find(detail => detail.id === id);
      }, 1000);
    },
    watch: {
      $route: function (value) {//监视路由的路径（param参数）发生了改变
        const id = value.params.id * 1;
        this.messageDetail = this.allMessageDetails.find(detail => detail.id === id);
      }
    }
  }
</script>

<style scoped>

</style>
