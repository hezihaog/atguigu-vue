<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos"/>
      <!-- <todo-footer :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/> -->
      <!-- 插槽使用，在需要使用插槽的标签体中，将要插入的组件或标签放入，并且制定slot属性为插槽的name属性的值 -->
      <!-- 注意，子组件需要用到的属性要放在父组件中！例如这里的 computed计算属性 -->
      <todo-footer>
        <input slot="checkAll" type="checkbox" v-model="isAllCheck"/>
        <span slot="count">已完成{{ completeSize }} / 全部 {{ todos.length }}  </span>
        <button slot="delete" class="btn btn-danger" v-show="completeSize > 0" @click="deleteCompleteTodos">清除已完成任务
        </button>
      </todo-footer>
    </div>
  </div>
</template>

<!--
  绑定事件监听 --- 订阅消息
  触发事件 --- 发布消息
-->

<script>
  //PubSub，发布订阅第三方库，可以支持任意层级的组件通信（隔代元素通信）
  import PubSub from 'pubsub-js'

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
    },
    mounted() {
      //挂载时，订阅消息，传入消息名称以及回调函数
      PubSub.subscribe('deleteTodo', (msg, index) => {
        this.deleteTodo(index);
      });
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
