/**
 * 入口js
 */
import Vue from 'vue'
import App from './App'
//引入我们配置的Vuex store对象
import store from "./store";

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  store//所有的组件对象都多了一个属性：$store
});
