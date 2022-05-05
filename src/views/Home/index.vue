<template>
  <div class="home-container" ref="container" @wheel="handleWheel">
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in banners" :key="item.id">
        <CarouselItem :carousel="item"/>
      </li>
    </ul>
    <div v-show="index > 0" class="icon icon-up" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < banners.length - 1"
      class="icon icon-down"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="focus">
      <li
        :class="{ active: i === index }"
        @click="switchTo(i)"
        v-for="(item, i) in banners"
        :key="item.id"
      ></li>
    </ul>
  </div>
</template>

<script>
import { getBanners } from "@/api/banner";
import CarouselItem from "./CarouselItem.vue";
import Icon from "@/components/Icon";

export default {
  components: {
    CarouselItem,
    Icon,
  },
  data() {
    return {
      banners: [],
      index: 0, // 当前显示的第几章图片 索引
      contentHeight: 0, // 整个容器的高度
      switching: false, // 是否正在切换中
    };
  },
  async created() {
    this.banners = await getBanners();
  },
  mounted() {
    this.contentHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.contentHeight + "px";
    },
  },
  methods: {
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY > 10 && this.index < this.banners.length - 1) {
        this.switching = true;
        this.index++;
      } else if (e.deltaY < -10 && this.index > 0) {
        this.switching = true;
        this.index--;
      }
    },
    handleTransitionEnd() {
      this.switching = false;
    },
    handleResize() {
      console.log("change");
      this.contentHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/color.less";

.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  
  //测试
  width:60%;
  height: 50%;
  border: 2px solid #008c8c;
  margin: 100px auto;
  overflow: visible;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 0.5s;
  li {
    width: 100%;
    height: 100%;
  }
}
.icon {
  .sref-center();
  @spacing: 30px;
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);
  &.icon-up {
    top: @spacing;
    animation: jump-down 1.5s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @spacing;
    animation: jump-down 1.5s infinite;
  }
  @jump: 8px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.focus {
  .sref-center();
  right: 15px;
  left: auto;
  li {
    width: 7px;
    height: 7px;
    margin: 10px 0;
    border: 1px solid #fff;
    border-radius: 50%;
    box-sizing: border-box;
    cursor: pointer;
    &.active {
      background: #fff;
    }
  }
}
</style>