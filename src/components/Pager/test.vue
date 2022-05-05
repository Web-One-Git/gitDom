<template>
  <div>
    <Pager
      :total="total"
      :current="current"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
export default {
  name: "App",
  data() {
    return {
      total: 346,
      current: 1,
    };
  },
  components: {
    Pager,
  },
  methods: {
    handlePageChange(newPage) {
      console.log(newPage);
      this.current = newPage;
    },
  },
};
</script>

<style lang="less">

</style>
