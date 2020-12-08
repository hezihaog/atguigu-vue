/**
 * 入口JS，创建Vue实例
 */
import Vue from 'vue'
//导入根组件
import App from './App'

new Vue({
  el: '#app',
  //声明使用的组件
  components: {
    App
  },
  //使用组件标签
  template: '<App/>'
});
