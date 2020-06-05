import Vue from "vue"
import App from "./App.vue"
import router from "./router/index"

new Vue({
  // el:"#app",
  render:h=>h(App),
  router, //配置路由器 所有组件都可以$router属性得到路由器对象
}).$mount("#app")

var a = 3