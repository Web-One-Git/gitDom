<template>
  <div class="test-container">
      <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./";
import "@/styles/global.less";
export default {
    components:{
        SiteAside,
    }
}
</script>

<style lang="less" scoped>
    .test-container{
        width: 260px;
        height: 600px;
        background: rgb(28, 33, 42);
    }
</style>