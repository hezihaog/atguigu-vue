import Vue from 'vue'
import App from './App'
//导入mint-ui
import {Button} from 'mint-ui'

//注册成标签（全局）
//Vue.component('mt-button', Button);//自己起名字
Vue.component(Button.name, Button);//也可以使用内部默认的名字

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
});
