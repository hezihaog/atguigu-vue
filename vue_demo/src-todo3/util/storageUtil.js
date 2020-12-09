/**
 * 使用localStorage存储数据的工具模块
 *
 * 注意：如果要暴露对象，文件名的第一个字母用大写，如果暴露的是函数则使用小写
 *
 * 1.函数
 * 2.对象
 * 需要暴露函数还是暴露对象，看你是暴露一个功能还是多个功能
 */

const TODOS_KEY = 'todos_key';

export default {
  /**
   * 保存Todo列表
   */
  saveTodos(todos) {
    //将todos最新的json数据，保存到localStorage中
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  },
  /**
   * 获取Todo列表
   */
  readTodos() {
    //读取localStorage本地数据，如果没有返回一个空数组
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]');
  }
}
