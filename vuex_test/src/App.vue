<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- Vue组件标签有2种写法，它们都支持，直接写即可，不需要做什么配置支持 -->
      <!-- 第一种写法：驼峰 -->
      <TodoHeader/>
      <TodoList/>
      <!-- 第二种写法：小写加单词中间间隔 -->
      <todo-footer/>
    </div>
  </div>
</template>

<script>
  import TodoHeader from "./components/TodoHeader";
  import TodoList from "./components/TodoList";
  import TodoFooter from "./components/TodoFooter";

  export default {
    // methods: {
    //   //添加一个todo到列表中
    //   addTodo(todo) {
    //     this.todos.unshift(todo);
    //   },
    //   /**
    //    * 删除一个todo
    //    */
    //   deleteTodo(index) {
    //     this.todos.splice(index, 1);
    //   },
    //   /**
    //    * 删除所有已完成的Todo
    //    */
    //   deleteCompleteTodos() {
    //     //过滤数组，只留下未完成的
    //     this.todos = this.todos.filter((todo) => {
    //       return !todo.complete
    //     });
    //   },
    //   /**
    //    * 全选中或非全选中，所有Todo
    //    * @param check 是否全选
    //    */
    //   selectAllTodos(check) {
    //     //遍历数组，将完成属性设置为传过来的check
    //     this.todos.forEach((todo) => {
    //       todo.complete = check;
    //     });
    //   }
    // },

    //监视
    // watch: {
    //   todos: {
    //     deep: true,//deep = true，代表深度监视，除了数组本身变化外，数组中的元素发生变化也会回调
    //     handler: function (value) {//回调函数，当有变化时回调，数组的元素和本身发生变化时，保存到本地即可
    //       //将todos最新的json数据，保存到localStorage中
    //       window.localStorage.setItem('todos_key', JSON.stringify(value));
    //     }
    //   }
    // },
    //配置组件
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
