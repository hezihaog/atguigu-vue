<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
          <span>已完成{{ completeSize }}</span> / 全部{{ todos.length }}
        </span>
    <!-- 当已完成数量大于0，才显示清除按钮 -->
    <button class="btn btn-danger" v-show="completeSize > 0" @click="deleteCompleteTodos">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props: {
      todos: Array,
      //删除已完成的Todo
      deleteCompleteTodos: Function,
      //全选中或非全选中，所有Todo
      selectAllTodos: Function
    },
    computed: {
      //计算已完成的数量
      completeSize() {
        //reduce统计，每次回调时，判断todo是否完成，完成则加1，否则不加，初始容量为0
        //最后一个参数代表初始容量是多少，这里为0
        return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
      },
      //是否全选的勾选，监视它的改变
      isAllCheck: {
        get() {
          //判断完成数量是否等于Todo个数，就是是否全都已完成
          //completeSize不要加括号，Vue会自动调用这个函数获取到的值来比较
          //completeSize > 0，必须这个条件，否则没有一条Todo时，则条件成立了，变成了勾选
          return this.completeSize === this.todos.length && this.completeSize > 0;
        },
        set(value) {//value是当前checkBox最新的值，是一个布尔值
          //改变时，调用全选或全不选的切换
          this.selectAllTodos(value);
        }
      }
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
