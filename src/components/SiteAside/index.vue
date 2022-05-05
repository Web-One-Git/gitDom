<template>
  <div class="siteAside-container">
    <Avatar :size="150" url="https://image.meiye.art/pic_1628655566765" />
    <h1 class="title">树袋黑熊</h1>
    <Menu />
    <Contact />
    <p class="footer">@版权所有</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";
export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
.siteAside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;

  overflow-x: hidden;
  overflow-y: scroll;
  .title {
    font-size: 1.3em;
    color: #fff;
    text-align: center;
    letter-spacing: 1px;
  }
  .footer {
    color: #666;
    text-align: center;
    font-size: 12px;
  }
}
.avatar-container {
  margin: 0 auto;
}
</style>