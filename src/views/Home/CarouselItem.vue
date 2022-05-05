<template>
  <div class="carousel-itme-container">
    <div class="carousel-img" :style="ImagePosition">
      <ImageLoader
        @load="this.showWords"
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
      />
    </div>
    <div class="text">
      <div class="title" ref="title">{{ carousel.title }}</div>
      <div class="desc" ref="desc">{{ carousel.description }}</div>
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["carousel"],
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
    };
  },
  components: {
    ImageLoader,
  },

  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    console.log(this.titleWidth, this.descWidth);
    // this.showWords();
  },
  computed:{
    ImagePosition(){
      return {
        left:"-20px",
        top:"-20px",
      }
    }
  },
  methods: {
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.clientWidth;
      this.$refs.title.style.width = this.titleWidth + "px";
      this.$refs.title.style.transition = "1s";

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      this.$refs.desc.clientWidth;
      this.$refs.desc.style.transition = "1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/color.less";
.carousel-itme-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.carousel-img {
  width: 110%;
  height: 110%;
  position: absolute;
  z-index: -1;
}
.text {
  .sref-center();
  transform: translateY(-50%);
  left: 5%;
  .title,
  .desc {
    margin: 0;
    opacity: 0;
    letter-spacing: 2px;
    white-space: nowrap;
    overflow: hidden;
    color: #f9f9f9;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.4), -1px 0 0 rgba(0, 0, 0, 0.4),
      0 1px 0 rgba(0, 0, 0, 0.4), 0 -1px 0 rgba(0, 0, 0, 0.4);
  }
  .title {
    font-size: 40px;
    font-weight: bold;
  }
  .desc {
    font-size: 24px;
    font-weight: normal;
    line-height: 3;
  }
}
</style>