<template>
  <div>
    <h2>About</h2>
    <p>{{ msg }}</p>
    <input type="text">
  </div>
</template>

<script>
  export default {
    props: {
      //获取前面通过，<router-view>，携带的msg属性的值
      msg: String
    }
  }
</script>

<style scoped>

</style>
