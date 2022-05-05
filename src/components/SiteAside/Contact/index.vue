<template>
  <ul class="contact-container">
    <li>
      <a href="">
        <div class="icon"><Icon type="github" /></div>
        <span>github</span>
      </a>
    </li>
    <li>
      <a href="">
        <div class="icon"><Icon type="mail" /></div>
        <span>1014346323@qq.com</span>
      </a>
    </li>
    <li>
      <a href="">
        <div class="icon"><Icon type="qq" /></div>
        <span>1014346323</span>
      </a>
      <div class="pop">
        <img src="https://image.meiye.art/pic_1628655566765" alt="" />
      </div>
    </li>
    <li>
      <a href="">
        <div class="icon"><Icon type="weixin" /></div>
        <span>13271618598</span>
      </a>
      <div class="pop">
        <img src="https://image.meiye.art/pic_1628655566765" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/color.less";
.contact-container {
  list-style: none;
  margin: 0;
  padding: 20px;
  color: @gray;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .icon {
    font-size: 26px;
    width: 36px;
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight + 8px;
    padding: 10px 15px;
    background: #fff;
    border-radius: 6px;
    transform: scaleY(0);
    transform-origin: center bottom;
    img {
      width: 150px;
      height: 150px;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #fff;
      bottom: -4px;
    }
  }
}
</style>