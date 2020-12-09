import Vue from 'vue'
import App from './App'
//引入路由器
import router from './router'

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  //配置路由器对象
  router
});
