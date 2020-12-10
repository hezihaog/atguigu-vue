<template>
  <div>
    <p>click {{count}} times, count is {{evenOfOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      }
    },
    computed: {
      evenOfOdd() {
        return this.count % 2 === 0 ? '偶数' : '奇数';
      }
    },
    methods: {
      //增加
      increment() {
        const count = this.count;
        this.count = count + 1;
      },
      //减少
      decrement() {
        const count = this.count;
        this.count = count - 1;
      },
      //如果是奇数，才增加1
      incrementIfOdd() {
        const count = this.count;
        if (count % 2 === 1) {
          this.count = count + 1;
        }
      },
      //过1秒后，再增加
      incrementAsync() {
        setTimeout(() => {
          const count = this.count;
          this.count = count + 1;
        }, 1000)
      },
    }
  }
</script>

<style scoped>

</style>
