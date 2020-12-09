<template>
  <div>
    <mt-button type="primary" @click.native="handleClick" style="width: 100%">Test</mt-button>
  </div>
</template>

<script>
  //引入Toast提示
  import {Toast} from 'mint-ui';

  export default {
    methods: {
      handleClick() {
        Toast('提示信息');
      }
    }
  }
</script>

<style scoped>

</style>
