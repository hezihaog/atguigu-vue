/**
 * vuex的核心管理对象模块：store
 */
import Vue from 'vue'
import Vuex from 'vuex'

//声明使用Vuex
Vue.use(Vuex);

//状态对象
const state = {//定义初始化状态（对应data）
  count: 0
};

//包含多个更新state函数的对象，里面定义的函数的名称都用大写！要和actions里面的区分
const mutations = {
  //增加的mutation
  INCREMENT(state) {
    state.count++;
  },
  //减少的mutation
  DECREMENT(state) {
    state.count--;
  }
};

//包含多个对应事件回调函数的对象
const actions = {
  //增加的action
  increment({commit}) {
    //提交增加的mutation
    commit('INCREMENT');
  },
  //减少的action
  decrement({commit}) {
    //提交减少的mutation
    commit('DECREMENT');
  },
  //带条件的action
  incrementIfOdd({commit, state}) {
    //当时奇数时，才加1
    if (state.count % 2 === 1) {
      commit('INCREMENT');
    }
  },
  //异步的action
  incrementAsync({commit}) {
    //在action中，可以直接执行异步代码
    //1秒后，再增加
    setTimeout(() => {
      commit('INCREMENT');
    }, 1000);
  }
};

//包含多个getter计算属性函数的对象
const getters = {//对应计算属性，会传入一个state属性，通过state属性操作state中定义的状态
  //不需要自己调用，只需要在组件中获取这个对象即可
  evenOfOdd(state) {
    return state.count % 2 === 0 ? '偶数' : '奇数';
  }
};

export default new Vuex.Store({
  state,//状态对象
  mutations,//包含多个更新state函数的对象
  actions,//包含多个对应事件回调函数的对象
  getters//包含多个getter计算属性函数的对象
});
