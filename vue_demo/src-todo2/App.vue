<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 自定义事件和监听，用于替代父子组件传递函数属性来通信繁琐的问题，不适用于多层组件嵌套的情况！ -->
      <!-- 第一种方式，直接给TodoHeader标签对象，绑定addTodo事件监听 -->
      <!-- @addTodo="addTodo"，自定义事件监听，@xxx为自定义事件名，value值为回调函数名，一般和回调函数名一致 -->
      <TodoHeader ref="header" @addTodo="addTodo"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <todo-footer :todos="todos"
                   :deleteCompleteTodos="deleteCompleteTodos"
                   :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</template>

<script>
  import TodoHeader from "./components/TodoHeader";
  import TodoList from "./components/TodoList";
  import TodoFooter from "./components/TodoFooter";

  export default {
    data() {
      return {
        //读取localStorage本地数据，如果没有返回一个空数组
        todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
      }
    },
    mounted() {//挂载，一般在这里做异步任务和绑定监听
      //第二种：手动在挂载时给<TodoHeader/>标签，绑定addTodo事件监听
      //this.$on('addTodo', this.addTodo);//这是给当前App组件绑定监听，不对
      //需要找到TodoHeader子组件进行绑定
      //this.$refs.header.$on('addTodo', this.addTodo);//这才对
    },
    methods: {
      //添加一个todo到列表中
      addTodo(todo) {
        this.todos.unshift(todo);
      },
      /**
       * 删除一个todo
       */
      deleteTodo(index) {
        this.todos.splice(index, 1);
      },
      /**
       * 删除所有已完成的Todo
       */
      deleteCompleteTodos() {
        //过滤数组，只留下未完成的
        this.todos = this.todos.filter((todo) => {
          return !todo.complete
        });
      },
      /**
       * 全选中或非全选中，所有Todo
       * @param check 是否全选
       */
      selectAllTodos(check) {
        //遍历数组，将完成属性设置为传过来的check
        this.todos.forEach((todo) => {
          todo.complete = check;
        });
      }
    },
    //监视
    watch: {
      todos: {
        deep: true,//deep = true，代表深度监视，除了数组本身变化外，数组中的元素发生变化也会回调
        handler: function (value) {//回调函数，当有变化时回调，数组的元素和本身发生变化时，保存到本地即可
          //将todos最新的json数据，保存到localStorage中
          window.localStorage.setItem('todos_key', JSON.stringify(value));
        }
      }
    },
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
