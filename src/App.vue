<template>
  <div id="app">
    <Header></Header>
    <!-- 一级路由组件显示区域 -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
export default {
  name:"App",
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
