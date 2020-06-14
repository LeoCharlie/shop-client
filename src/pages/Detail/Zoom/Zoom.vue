<template>
  <div class="spec-preview">
    <img :src="imgUrl"/>
    <div class="event" @mousemove="move"></div>
    <div class="big">
      <img :src="imgUrl" ref="imgA"/>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
  import throttle from 'lodash/throttle';
  export default {
    name: "Zoom",
    props:{
      imgUrl:String,
      bigUrl: String
    },
    methods:{
      move:throttle(function(event){
        let left,top
        const maskWidth = this.$refs.mask.clientWidth
        const maskHeight = this.$refs.mask.clientHeight
        const {offsetX, offsetY} = event
        left = offsetX - maskWidth/2 
        top = offsetY - maskHeight/2 
        if(left<=0){
          left = 0
        }else if(left >= maskWidth){
          left = maskWidth
        }
        if(top<=0){
          top = 0
        }else if(top >= maskHeight){
          top = maskHeight
        }
        this.$refs.mask.style.left = left + "px"
        this.$refs.mask.style.top = top + "px"
        
        this.$refs.imgA.style.left = -2 * left + "px"
        this.$refs.imgA.style.top = -2 * top + "px"

      },50)
    }
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>