import Vue from 'vue'
import App from './App'

//引入store
import store from "./store";

//引入基础CSS样式
import './base.css'

//使用components和template，这2个属性，来指定根组件是App组件
// new Vue({
//   el: '#app',
//   components: {
//     App
//   },
//   template: '<App/>',
//   store
// });

//使用render渲染函数，一个函数返回App组件，代替上面components和template，2个属性的功能
// new Vue({
//   el: '#app',
//   render: function (createElement) {
//     //相当于返回了<App/>组件
//     //1句话，代替了上面的components和template
//     return createElement(App);
//   },
//   store
// });

new Vue({
  el: '#app',
  //箭头函数，简洁标签上面复杂的函数定义
  render: h => h(App),
  store
});
