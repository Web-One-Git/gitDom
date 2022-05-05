<template>
  <div class="empty-container">
    <Icon type="empty" :size="200" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  props: {
    text: {
      type: String,
      require: false,
      default: "无数据",
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
@import "~@/styles/mixin.less";
.empty-container {
  .sref-center();
  color: @gray;
  text-align: center;
}
.icon-container {
    font-size: 72px;
  }
</style>