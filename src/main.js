/*
 * @Author: zhaobo 1427246356@qq.com
 * @Date: 2021-11-15 20:46:21
 * @LastEditors: zhaobo 1427246356@qq.com
 * @LastEditTime: 2022-08-21 19:42:31
 * @FilePath: \my-site\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 入口文件
// import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import showMessage from "./utils/showMessage";
import "./eventBus";
import store from "./store";
store.dispatch("setting/fetchSetting");
Vue.prototype.$showMessage = showMessage;

// 注册全局指令
import vLoading from "./directives/loading";
import vLazy from "./directives/lazy";
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
