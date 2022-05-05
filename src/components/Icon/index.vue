<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
let iconClass = {
  home: "icon-home",
  success: "icon-zhengque",
  error: "icon-cuowu",
  close: "icon-guanbi",
  warn: "icon-jinggao",
  info: "icon-xinxi",
  blog: "icon-blog",
  code: "icon-Code-1",
  about: "icon-set_about_hov",
  weixin: "icon-weixin-copy",
  mail: "icon-email",
  github: "icon-github",
  qq: "icon-qq",
  arrowUp: "icon-shangjiantou",
  arrowDown: "icon-xiajiantou",
  empty: "icon-empty",
  chat: "icon-liuyan",
};
export default {
  props: {
    type: {
      type: String,
      require: true,
    },
    size: {
      type: Number,
      require: false,
      default: 36,
    },
  },
  computed: {
    fontClass() {
      return iconClass[this.type];
    },
  },
};
</script>

<style lang="less" scoped>
@import "//at.alicdn.com/t/font_2482104_hp7fjd3o0gl.css";
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>