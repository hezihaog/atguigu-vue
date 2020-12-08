<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length === 0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <!-- :comment，将评论数据传递到子组件中 -->
      <!-- :deleteComment，将删除评论的方法传递到子组件中 -->
      <!-- :index，将当前条目的下标传递到子组件中 -->
      <Item v-for="(comment, index) in comments" :key="index"
            :comment="comment" :deleteComment="deleteComment" :index="index"/>
    </ul>
  </div>
</template>

<script>
  //引入子组件
  import Item from './Item'

  export default {
    //声明接收属性，这个属性就会成为组件对象的属性
    props: [
      'comments',
      'deleteComment'
    ],
    //将组件映射成标签
    components: {
      Item
    }
  }
</script>

<style>
  .reply {
    margin-top: 0px;
  }
</style>
