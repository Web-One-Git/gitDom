<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">left</div>
      </template>
      <div class="main">中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容</div>
      <template #right>
        <div class="right">right</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped lang="less">
.test-container {
  width: 80%;
  height: 600px;
  border: 2px solid lightseagreen;
  margin: 0 auto;
  white-space: nowrap;

}
.left {
  width: 200px;
  height: 100%;
  background: lightgreen;
  border: 0;
}
.right {
  width: 150px;
  height: 100%;
  border: 0;
  background: lightsalmon;
}
.main {
  width: 100%;
  border: 0;
  height: 100%;
  background: lightslategray;

}
</style>