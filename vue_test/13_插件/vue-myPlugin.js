/**
 * Vue的插件库
 */
(function (window) {
    //需要向外暴露的插件对象
    const MyPlugin = {};
    //插件必须要有一个install方法
    MyPlugin.install = function (Vue, options) {
        //1.添加全局方法或属性
        Vue.myGlobalMethod = function () {
            console.log('Vue函数对象的myGlobalMethod()')
        };

        //2.添加全局资源
        Vue.directive('my-directive', function (el, binding) {
            el.textContent = binding.value.toUpperCase();
        });

        //4.添加实例方法，一般都有$前缀
        Vue.prototype.$myMethod = function () {
            console.log('Vue实例对象的$myMethod()');
        };
    };
    //重点，向外暴露插件对象，外部才能获取到插件对象
    window.MyPlugin = MyPlugin
})(window);