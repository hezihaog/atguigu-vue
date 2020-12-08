<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
  export default {//配置对象（与Vue一致）
    data() {//必须写函数，不能写对象
      return {
        msg: 'Hello Vue Component'
      }
    }
  }
</script>

<style scoped>
  .msg {
    color: red;
    font-size: 30px;
  }
</style>
