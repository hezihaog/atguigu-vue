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
  //因为原始方法中，computed计算属性、methods方法中，都是模板代码，都是转调store中的函数，所以vuex提供了映射对象来生成转调，简化书写
  import {mapState, mapGetters, mapActions} from 'vuex';

  export default {
    computed: {
      ...mapState(['count']),//mapState()返回值：{count() {return this.$store.state['count']}}
      ...mapGetters(['evenOfOdd']),//mapGetters()返回值：{evenOfOdd() {return this.$store.getters['evenOfOdd']}}
      //如果事件回调函数和actions中的函数名不同，则使用对象做映射关系即可
      //...mapGetters([{evenOfOdd: 'evenOfOdd2'}])//对象属性是事件回调名，value是actions中的函数名

      //通过mapGetters，直接将evenOfOdd
      // evenOfOdd() {
      //   return this.$store.getters.evenOfOdd;
      // },
      // count() {
      //   return this.$store.state.count;
      // }
    },
    methods: {
      ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
    }
    // methods: {
    //   //增加
    //   increment() {
    //     //通知Vuex更新状态
    //     this.$store.dispatch('increment');//触发store中的对应的action调用
    //   },
    //   //减少
    //   decrement() {
    //     this.$store.dispatch('decrement');
    //   },
    //   //如果是奇数，才增加1
    //   incrementIfOdd() {
    //     this.$store.dispatch('incrementIfOdd');
    //   },
    //   //过1秒后，再增加
    //   incrementAsync() {
    //     this.$store.dispatch('incrementAsync');
    //   },
    // }
  }
</script>

<style scoped>

</style>
