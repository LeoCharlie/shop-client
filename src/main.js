import Vue from "vue"
import App from "./App.vue"
import router from "./router/index"
import store from './store/index'
import TypeNav from "./components/TypeNav";
import '@/mock/mockServer'
import 'swiper/css/swiper.min.css' //如果查找不是包的主模块，必须指定具体路径
import Carousel from "./components/Caroused"
import Pagination from "./components/Pagination"
// 注册全局组件
Vue.component("TypeNav",TypeNav)
Vue.component("Carousel",Carousel)
Vue.component("Pagination",Pagination)
new Vue({
  // el:"#app",
  render:h=>h(App),
  router, //配置路由器 所有组件都可以$router属性得到路由器对象
  store, //注册vuex的store 所有组件都可以得到$store

  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount("#app")
