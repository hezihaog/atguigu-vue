/**
 * 包含多个由action触发，直接更新状态的对象
 */

import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, CLEAR_ALL_COMPLETED} from './mutation-types';

export default {
  /**
   * 增加一个Todo
   */
  //重要，使用中括号，将变量的值作为方法名！
  [ADD_TODO](state, {todo}) {
    state.todos.unshift(todo);
  },
  /**
   * 删除一个todo
   */
  [DELETE_TODO](state, {index}) {
    state.todos.splice(index, 1);
  },
  /**
   * 全选或全部选，所有Todo
   * @param check 是否全选
   */
  [SELECT_ALL_TODOS](state, {check}) {
    //遍历所有Todo，设置为check的值
    state.todos.forEach((todo) => {
      todo.complete = check;
    });
  },
  /**
   * 清除所有已完成的Todo
   */
  [CLEAR_ALL_COMPLETED](state) {
    //过滤出没有完成的Todo列表，覆盖即可（就是删除掉所有已完成的）
    state.todos = state.todos.filter((todo) => {
      return !todo.complete;
    });
  }
}
