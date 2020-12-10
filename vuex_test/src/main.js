import Vue from 'vue'
import App from './App'

//引入store
import store from "./store";

//引入基础CSS样式
import './base.css'

new Vue({
  el: '#app',
  components: {
    App
  },
  render: h => h(App),
  store
});
