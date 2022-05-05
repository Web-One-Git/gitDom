<template>
  <div>
    <Avatar :size="100" url="https://image.meiye.art/pic_1628655566765" />
    <Avatar :size="200" url="https://image.meiye.art/pic_1628655566765" />
    <Avatar :size="160" url="https://image.meiye.art/pic_1628655566765" />
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
export default {
  name: "App",

  components: {
    Avatar,
  },
};
</script>

<style lang="less">
</style>
