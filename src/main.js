import Vue from "vue"
import App from "./App.vue"
import router from "./router/index"
import store from './store/index'

import TypeNav from "./components/TypeNav";
// 注册全局组件
Vue.component("TypeNav",TypeNav)

new Vue({
  // el:"#app",
  render:h=>h(App),
  router, //配置路由器 所有组件都可以$router属性得到路由器对象
  store, //注册vuex的store 所有组件都可以得到$store
}).$mount("#app")
