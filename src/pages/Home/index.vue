<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend :todayList="todayList"></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script type="text/ecmascript-6">
import ListContainer from "./ListContainer/ListContainer"
import Brand from "./Brand/Brand"
import Floor from "./Floor/Floor"
import Like from "./Like/Like"
import Rank from "./Rank/Rank"
import TodayRecommend from "./TodayRecommend/TodayRecommend"

import {mapState} from "vuex"
export default {
    components:{
        ListContainer,
        Brand,
        Floor,
        Like,
        Rank,
        TodayRecommend
    },
    name:"Home",
    mounted(){
      this.$store.dispatch("getBanners")
      this.$store.dispatch("getFloors")
      this.$store.dispatch("getTodayRecommend")
    },
    computed:{
      ...mapState({
        floors: state => state.HOME.floors,
        todayList:state => state.HOME.todayList
      })
    }
}
</script>

<style scoped></style>
