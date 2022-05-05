<template>
  <div>
    <Icon type="empty" />
    <Icon type="github" />
    <Icon type="weixin" />
    <div class="icon">
      <Icon type="mail" />
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang="less">
.icon {
  font-size: 95px;
}
</style>
