<template>
  <div class="test-container">
    <ImageLoader
     src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      @load="handleLoaded"
    />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    handleLoaded() {
      console.log("组件load时间被触发，图片记载完成");
    },
  },
};
</script>
<style lang="less" scoped>

.test-container {
  width: 600px;
  height: 450px;
  margin: 100px auto;
  border: 2px solid rgb(29, 66, 66);
}
</style>