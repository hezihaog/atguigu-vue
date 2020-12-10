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
  import {mapState} from 'vuex'
  import storageUtil from "./util/storageUtil";

  import TodoHeader from "./components/TodoHeader";
  import TodoList from "./components/TodoList";
  import TodoFooter from "./components/TodoFooter";

  export default {
    mounted() {
      //发送命令，让action异步获取，本地保存的todos数据并显示
      this.$store.dispatch('reqTodos');
    },
    //计算属性，获取state中的todos，在当前组件监视todos的变化，当列表数据发生改变时，保存数据到本地
    computed: {
      ...mapState(['todos'])
    },
    //监视
    watch: {
      todos: {
        deep: true,//deep = true，代表深度监视，除了数组本身变化外，数组中的元素发生变化也会回调
        handler: function (value) {//回调函数，当有变化时回调，数组的元素和本身发生变化时，保存到本地即可
          //将todos最新的json数据，保存到本地localStorage
          storageUtil.saveTodos(value);
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
