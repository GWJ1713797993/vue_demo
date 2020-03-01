<template>
  <div class="dd">
    <van-nav-bar title="我的订单">
      <a href="#" @click.prevent="back" slot="left">
        <van-icon name="arrow-left" />
      </a>
    </van-nav-bar>

    <van-tabs v-model="active" :swipe-threshold="num">
      <van-tab title="全部">
        <wdd v-show="isfalg"></wdd>
        <div class="dd_card" v-show="!isfalg" v-for="(item, i) in goods" :key="i">
          <div class="dd_header">
            <van-cell title="供货商：魅族" value="交易完成" />
          </div>
          <van-card
            :num="item.num"
            :price="item.price"
            :desc="item.intro"
            :title="item.name"
            :thumb="item.pic[0]"
          />
          <div class="dd_footer">
            <p>
              共{{item.num}}件商品 合计：
              <span>{{'￥'+item.price}}</span> (免运费)
            </p>
          </div>
        </div>
      </van-tab>
      <van-tab title="待付款">
        <wdd></wdd>
      </van-tab>
      <van-tab title="待发货">
        <wdd></wdd>
      </van-tab>
      <van-tab title="待收货">
        <wdd></wdd>
      </van-tab>
      <van-tab title="退款/售后">
        <wdd></wdd>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import wdd from "@/components/wdd.vue";
export default {
  data() {
    return {
      active: 0,
      num: 5,
      isfalg: true,
      goods:[],
    };
  },
  components: {
    wdd
  },
  methods: {
    back() {
      this.$router.push('/my');
    }
  },
  mounted() {
    if (this.$store.state.ddlist.length > 0) {
      this.goods = this.$store.state.ddlist;
      // console.log(this.goods)
      this.isfalg = false;
    }
  }
};
</script>

<style lang="scss">
.dd {
  background: #eee;
  .van-nav-bar {
    border-bottom: 1px solid #eee;
  }
  .van-tabs__line {
    background-color: #00c3f3;
  }
  .van-tabs__content {
    margin-top: 10px;
    background: #fff;
  }
  .dd_card {
    margin-bottom: 10px;
    .dd_header {
      border-bottom: 1px solid #eee;
    }
    .van-card {
      border-bottom: 1px solid #eee;
    }
    .dd_footer {
      border-bottom: 1px solid #eee;
    }
    p{
      margin: 0;
      padding: 10px 0;
      text-align: right;
      padding-right: 20px;
      font-size: 12px;
      span{
        color: #ee0a24;
        font-size: 14px;
      }
    }
  }
}
</style>