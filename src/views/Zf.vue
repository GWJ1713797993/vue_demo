<template>
  <div>
    <!-- 头部栏 -->
    <van-nav-bar title="结算">
      <a href="#" @click.prevent="back" slot="left">
        <van-icon name="arrow-left" />
      </a>
    </van-nav-bar>
    <!-- 结果 -->
    <div class="page">
      <div class="zf_container">
        <van-icon name="passed"></van-icon>
        <span>订单支付成功</span>
        <div class="js_btn">
          <router-link to="/dd" tag="a">查看订单</router-link>
          <router-link to="/" tag="a">返回首页</router-link>
        </div>
      </div>

      <!-- 猜你喜欢 -->
      <div class="container section">
          <p><span>猜你喜欢：</span></p>
          <tj></tj>
      </div>
    </div>
  </div>
</template>

<script>
import tj from "@/components/tj.vue";
export default {
  methods: {
    back() {
      this.$router.push('/my');
    }
  },
  components:{
    tj,
  },
};
</script>

<style lang='scss'>
.van-nav-bar .van-nav-bar__title {
  color: #666666;
  border-bottom: 1px solid #eee;
}
.page{
    background: #eee;
}
.zf_container {
  text-align: center;
  padding: 30px 0 20px 0;
  margin-bottom: 20px;
  background: #fff;
  .js_btn {
    margin-top: 20px;
    a {
      display: inline-block;
      border: 1px solid #666;
      border-radius: 15px;
      color: #333;
      padding: 5px 10px;
      margin: 0 2px;
    }
  }
  i {
    font-size: 20px;
    color: green;
    margin-right: 5px;
  }
  span {
    font-size: 20px;
    color: green;
  }
}
</style>