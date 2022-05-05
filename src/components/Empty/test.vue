<template>
  <div class="test-container">
      <Empty :text="text" />
  </div>
</template>

<script>
import Empty from "@/components/Empty"
export default {
    data(){
        return {
            text: "暂无数据"
        }
    },
    components:{
        Empty,
    }
}
</script>

<style lang="less" scoped>
    .test-container{
        width: 332px;
        height: 320px;
        margin: 100px auto;
        border: 2px solid #ccc;
        position: relative;
    }
</style>