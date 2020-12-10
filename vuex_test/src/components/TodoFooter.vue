<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
          <span>已完成{{ completeCount }}</span> / 全部{{ totalCount }}
        </span>
    <!-- 当已完成数量大于0，才显示清除按钮 -->
    <button class="btn btn-danger" v-show="completeCount > 0" @click="clearAllCompleted">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    computed: {
      ...mapGetters(['totalCount', 'completeCount']),

      //是否全选的勾选，监视它的改变
      isAllCheck: {
        get() {
          return this.$store.getters.isAllSelect;
        },
        set(value) {//value是当前checkBox最新的值，是一个布尔值
          //改变时，调用全选或全不选的切换
          this.$store.dispatch('selectAllTodos', value)
        }
      }
    },
    methods: {
      ...mapActions(['clearAllCompleted'])
    }
  }
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
