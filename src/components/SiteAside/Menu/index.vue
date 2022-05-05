
<template>
  <nav class="menu-container">
    <RouterLink
      exact
      v-for="n in items"
      :key="n.name"
      :to="{ name: n.name }"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="n.icon" />
      </div>
      <span>{{ n.title }}</span>
    </RouterLink>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        { name: "home", title: "首页", icon: "home", exact: true },
        { name: "blog", title: "博客", icon: "blog", exact: false },
        { name: "about", title: "关于我", icon: "about", exact: true },
        { name: "project", title: "项目&效果", icon: "code", exact: true },
        { name: "message", title: "留言板", icon: "chat", exact: true },
      ],
    };
  },
  // methods: {
  //   isSelected(n) {
  //     let link = n.link.toLowerCase(); //菜单的链接地址
  //     let curPathname = location.pathname.toLowerCase(); // 当前浏览器链接地址
  //     if (n.startWith) {
  //       return curPathname.startsWith(link);
  //     } else {
  //       return curPathname === link;
  //     }
  //   },
  // },
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;
    &:hover {
      color: #fff;
    }
    &.selected {
      background: rgba(255, 255, 255, 0.05);
    }
    .icon {
      font-size: 18px;
      width: 30px;
    }
  }
}
</style>