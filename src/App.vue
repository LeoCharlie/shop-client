<template>
  <div id="app">
    <Header></Header>
    <!-- 一级路由组件显示区域 -->
    <router-view></router-view>
    <Footer v-if="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"

import {reqCategorys} from './api'
export default {
  name:"App",
  components: {
    Header,
    Footer
  },

  async mounted(){
    const res = await reqCategorys()
    console.log("res", res);
    
  }
}
</script>

<style>

</style>
