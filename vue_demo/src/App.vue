<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!-- :addComment，将定义的增加评论的方法传递给子组件使用 -->
      <Add :addComment="addComment"/>
      <!-- :comments，将数据通过属性传递到子组件 -->
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
  //引入子组件
  import Add from './components/Add'
  import List from './components/List'

  export default {
    data() {
      return {
        comments: [//数据在哪个组件，更新数据的行为（方法）就应该定义在那个组件
          {
            name: 'Bom',
            content: 'Vue 还不错'
          }, {
            name: 'Cat',
            content: 'Vue So Easy'
          }, {
            name: 'BZ',
            content: 'Vue So So'
          }
        ]
      }
    },
    methods: {
      //添加评论
      addComment(comment) {
        //将新评论插入到最前面
        this.comments.unshift(comment);
      },
      //删除指定下标的评论
      deleteComment(index) {
        this.comments.splice(index, 1);
      }
    },
    //将组件映射成标签
    components: {
      Add,
      List
    }
  }
</script>

<style scoped>

</style>
