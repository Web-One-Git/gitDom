<template>
  <div class="pager-container" v-if="pageNumber > 1">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }">|&lt;&lt;</a>
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }" href="">&lt;&lt;</a>
    <a @click="handleClick(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: n === current }"
    
      >{{ n }}</a
    >
    <a @click="handleClick(current + 1)" :class="{ disabled: current === pageNumber }">&gt;&gt;</a>
    <a @click="handleClick(pageNumber)" :class="{ disabled: current === pageNumber }">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      // 当前页
      type: Number,
      require: false,
      default: 1,
    },
    total: {
      // 总数
      type: Number,
      require: false,
      default: 0,
    },
    limit: {
      //  每页可容纳的数据量
      type: Number,
      require: false,
      default: 10,
    },
    visibleNumber: {
      // 每页最多显示页码数
      type: Number,
      require: false,
      default: 10,
    },
  },
  computed: {
    //总页数
    pageNumber() {
      console.log(Math.ceil(this.total / this.limit))

      return Math.ceil(this.total / this.limit);
    },
    //可显示最小页码数
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    //可显示最大页码数
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    numbers() {
      //显示当前可视的页码数字
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods:{
      handleClick(newPage){
          // 抛出一个事件
        //   console.log(e);
        if(newPage <1){
            newPage = 1;
        }if(newPage > this.pageNumber){
            newPage = this.pageNumber;
        }
        if(newPage === this.current){
            return
        }
        this.$emit("pageChange",newPage);

      },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 8px;
    cursor: pointer;
    &.disabled {
      color: @gray;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
    }
  }
}
</style>