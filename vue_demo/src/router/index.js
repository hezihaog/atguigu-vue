/**
 * 路由器模块
 */

import Vue from 'vue'
//导入路由
import VueRouter from 'vue-router';

//导入路由组件
import About from "../views/About";
import Home from "../views/Home";
import News from "../views/News";
import Message from "../views/Message";

//使用路由
Vue.use(VueRouter);

export default new VueRouter({
  //配置路由
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      //嵌套路由，使用children属性指定
      children: [
        {
          //path: '/news',//path最左侧的/，永远代表根路径，不对
          path: '/home/news',//解决方案一：写完整路径
          component: News
        },
        {
          path: 'message',//解决方案二：省略不写/，它在哪个路由下面，就会自动拼上面的路由的path在前面
          component: Message
        },
        //默认选中News
        {
          path: '',
          redirect: '/home/news'
        }
      ]
    },
    //配置根路径，转发到about，就可以默认选中about
    {
      path: '/',
      redirect: '/about'
    }
  ]
});
