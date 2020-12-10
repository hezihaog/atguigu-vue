/**
 * 包含所有基于state的getter计算属性的对象
 */

export default {
  /**
   * todo列表的总数量
   */
  totalCount(state) {
    return state.todos.length;
  },
  /**
   * 完成的todo个数
   */
  completeCount(state) {
    //reduce统计，每次回调时，判断todo是否完成，完成则加1，否则不加，初始容量为0
    //最后一个参数代表初始容量是多少，这里为0
    return state.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
  },
  /**
   * 判断是否全部选中
   */
  isAllSelect(state, getters) {
    //判断完成数量是否等于Todo个数，就是是否全都已完成
    //并且，必须有一条todo，才算全部选中
    return getters.totalCount === getters.completeCount && state.todos > 0;
  }
}
