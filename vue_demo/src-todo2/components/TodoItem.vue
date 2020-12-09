<template>
  <!--
    onmouseenter，鼠标移入Item时触发
    onmouseleave，鼠标移出Item时触发
    onmouseover，鼠标如果移入到内部的子元素时触发
    onmouseout，鼠标输入移出到内部的子元素时触发
    不能选 onmouseover，onmouseout，因为使用它们2个，当鼠标移入和移出到子元素时，Item的背景颜色就消失了
    所以应该选择onmouseenter和onmouseleave
    注意：Vue中使用事件绑定，要将on前缀去掉，例如onmouseenter => @mouseenter，onmouseleave => @mouseleave
  -->
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)"
      :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem" style="display: block">删除</button>
  </li>
</template>

<script>
  export default {
    //声明接收的属性
    props: {
      todo: Object,
      index: Number,
      deleteTodo: Function
    },
    data() {
      return {
        //Item的背景颜色
        bgColor: 'white',
        //是否显示删除按钮，默认不显示
        isShow: false
      }
    },
    methods: {
      /**
       * 处理鼠标移入
       * @param isEnter 是否移入，true为移入，false为移出
       */
      handleEnter(isEnter) {
        //切换删除按钮是否显示
        this.isShow = isEnter;
        //切换背景颜色
        if (isEnter) {
          this.bgColor = '#aaaaaa';
        } else {
          this.bgColor = 'white';
        }
      },
      /**
       * 删除一条Todo
       */
      deleteItem() {
        const {todo, index, deleteTodo} = this;
        if (window.confirm(`确认删除${todo.title}吗？`)) {
          deleteTodo(index);
        }
      }
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
