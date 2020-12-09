<template>
  <div class="container">
    <Search/>
    <users-main/>
  </div>
</template>

<script>
  import Search from './components/Search'
  import Main from './components/Main'

  export default {
    components: {
      Search,
      //Main，在HTML中不能使用，所以单独给它起名字叫UsersMain
      UsersMain: Main
    }
  }
</script>

<style scoped>

</style>
