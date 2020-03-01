<template>
  <div class="sc">
    <van-nav-bar title="我的收藏">
      <a href="#" @click.prevent="back" slot="left">
        <van-icon name="arrow-left" />
      </a>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang='scss'>
.sc {
  .van-nav-bar {
    border-bottom: 1px solid #eee;
  }
}
</style>