<template>
  <div class="test-container">
      <Contact />
  </div>
</template>

<script>
import Contact from "./";
export default {
  components:{
    Contact,
  }
}
</script>

<style lang="less" scoped>
  .test-container{
    width: 300px;
    height: 500px;
    background: rgb(37, 42, 51);
    padding: 0 20px;

  }
</style>