<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <RouterView />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
export default {
  components: {
    Layout,
    SiteAside,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";

.app-container {
  .sref-fill(fixed);
  // background: lightslategray;
  .aside {
    width: 250px;
    height: 100%;
    background: rgb(0, 0, 0);
  }
}
</style>