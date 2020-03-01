<template>
  <div class="js">
    <!-- 头部栏 -->
    <van-nav-bar title="结算">
      <a href="#" @click.prevent="back" slot="left">
        <van-icon name="arrow-left" />
      </a>
    </van-nav-bar>
    <!-- 地址 -->
    <van-cell is-link @click="dz" :value="psdz" />

    <!-- 订单主主体内容 -->

    <div class="content">
      <van-cell>
        <span>供应商：魅族</span>
      </van-cell>
      <div class="cards" v-for="(item,i) in goods" :key="i">
        <van-card
          id="spxx"
          :num="item.num"
          :price="item.price"
          :desc="item.intro"
          :title="item.title"
          :thumb="item.pic[0]"
        />
      </div>
      <van-cell title="配送方式" value="快递配送(运费￥0.00)" />
      <van-cell title="发票类型">
        电子发票
        <van-icon name="info-o"></van-icon>
      </van-cell>
      <van-cell title="发票抬头" is-link value="个人" />
      <van-cell title="抬头全称" value="chaoren" />
      <van-cell-group>
        <van-field
          v-model="message"
          rows="1"
          autosize
          label="留言"
          type="textarea"
          placeholder="备注信息"
        />
      </van-cell-group>
      <!-- {{'共1件商品 合计：￥'+item.price}} -->
      <van-cell>{{'共'+goods.length+'件商品 合计：￥'+ zfje/100}}</van-cell>
      <van-cell title="回购金" value="未使用" is-link />
      <van-cell title="礼品卡" is-link />
      <p>
        <span>请选择支付方式：</span>
      </p>
      <van-cell>
        <img src="../assets/img/zfb.png" alt />支付宝支付
        <input type="checkbox" :checked="a" @click="ischeck(1)" />
      </van-cell>
      <van-cell>
        <img src="../assets/img/hb.png" alt />花呗分期
        <input type="checkbox" :checked="b" @click="ischeck(2)" />
      </van-cell>
      <van-cell>
        <img src="../assets/img/wx.png" alt />微信支付
        <input type="checkbox" :checked="c" @click="ischeck(3)" />
      </van-cell>
    </div>

    <van-submit-bar :price="zfje" button-text="提交订单" @submit="onSubmit" />
    <van-notice-bar
      color="#666666"
      background="#ecf9ff"
      left-icon="info-o"
    >该订单含付款减库存的商品，支付完成后才会为您预留库存</van-notice-bar>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      message: "",
      a: true,
      b: false,
      c: false,
      goods: [],
      psdz:'',
    };
  },
  methods: {
    onSubmit() {
      Toast.loading({
        message: "订单提交中...",
        forbidClick: true
      });
      this.$store.commit('add', this.goods);
      this.$store.commit('buydel',this.goods);
      this.$router.push('/zf');
    },
    ischeck(num) {
      switch (num) {
        case 1:
          this.a = true;
          this.b = this.c = !this.a;
          break;

        case 2:
          this.b = true;
          this.a = this.c = !this.b;
          break;

        case 3:
          this.c = true;
          this.a = this.b = !this.c;
          break;
      }
    },
    back() {
      this.$router.push('/my');
    },
    dz(){
      this.$router.push('dz');
    }
  },
  computed: {
    zfje() {
      var number = 0;
      this.goods.forEach(element => {
        if (element.ischeck) {
          number += element.price * element.num;
        }
      });
      number *= 100;
      return number;
    }
  },
  mounted() {
    this.$store.state.zflist.forEach(element=>{
      if (element.ischeck) {
        this.goods.push(element);
      }
    })
    
    for (const k in this.$store.state.dzlist[this.$store.state.psid - 1]) {
        if (k != 'id') {
          this.psdz += this.$store.state.dzlist[this.$store.state.psid - 1][k] +'，';
        }
    }
  }
};
</script>

<style lang="scss">
.js {
  margin-bottom: 90px;
  position: relative;
  background: #eee;
  .van-nav-bar .van-nav-bar__title {
    color: #666666;
  }
  .content {
    margin-top: 10px;
    #spxx {
      margin: 0;
    }
    p {
      margin: 5px 0 5px 10px;
      font-size: 10px;
    }
    .van-cell {
      .van-cell__title {
        span {
          font-size: 1.3rem;
          color: #999999;
        }
      }
      .van-cell__value {
        font-size: 10px;
        img {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
        input {
          width: 15px;
          height: 15px;
          float: right;
          border-radius: 50px;
        }
        span {
          font-size: 1.2rem;
          color: #333333;
        }
        //   div {
        //     float: right;
        //   }
      }
    }
  }
  .van-notice-bar {
    position: fixed;
    z-index: 9;
    width: 100%;
    bottom: 50px;
    font-size: 1rem;
  }
}
</style>