/**
 * 接收组件通知，调用mutations间接更新状态的对象
 */

import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, CLEAR_ALL_COMPLETED} from './mutation-types';

export default {
  /**
   * 添加一个Todo
   */
  addTodo({commit}, todo) {
    //提交对mutation的请求
    commit(ADD_TODO, {todo});
  },
  /**
   * 删除一个Todo
   * @param index todo的索引
   */
  deleteTodo({commit}, index) {
    commit(DELETE_TODO, {index});
  },
  /**
   * 全选或全部选，所有Todo
   * @param check 是否全选
   */
  selectAllTodos({commit}, check) {
    commit(SELECT_ALL_TODOS, {check});
  },
  /**
   * 清除所有已完成的Todo
   */
  clearAllCompleted({commit}) {
    commit(CLEAR_ALL_COMPLETED);
  }
}
