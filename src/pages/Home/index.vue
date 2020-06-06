<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
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
export default {
    components:{
        ListContainer,
        Brand,
        Floor,
        Like,
        Rank,
        TodayRecommend
    },
    name:"Home"
}
</script>

<style scoped></style>
