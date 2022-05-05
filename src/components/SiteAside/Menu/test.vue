
<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
import "@/styles/global.less";
export default {
  components: {
    Menu,
  },
  
};
</script>

<style lang="less" scoped>
 .test-container{
   width: 360px;
  height: 500px;
  background: rgb(30, 37, 46);
}
</style>