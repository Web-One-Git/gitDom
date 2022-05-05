<template>
  <div class="image-loader-container">
    <img v-if="!originLoaded" class="placeholder" :src="placeholder" />
    <img @load="handleLoad" :style="{opacity: originOpacity, transition:`${duration}ms`}" :src="src" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      require: true,
    },
    placeholder: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      require: false,
      default: 500,
    },
  },
  data(){
    return{
      originLoaded: false, //原图是否加载完成
      thingDone: false,  //图片完全显现出来
    }
  },
  computed:{
    originOpacity(){
      return this.originLoaded ? 1 : 0;
    },
  },
  methods:{
    handleLoad(){
      this.originLoaded = true;
      setTimeout(()=>{
        this.thingDone = true;
        this.$emit("load")
      },this.duration)
    },
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";

.image-loader-container {
  width: 100%;
  height: 100%;
  position:relative; 
  overflow: hidden;
  img {
    .sref-fill();
    object-fit: cover;
  }
  .placeholder{
    filter: blur(2vw);
  }
}
</style>