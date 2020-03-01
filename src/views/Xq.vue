<template>
  <div class="goods">
    <div class="header">
      <a href="#" @click.prevent="go">
        <van-icon name="arrow-left" slot="left" id="fl" />
      </a>
      <router-link to="/">
        <span>
          <van-icon name="wap-home-o" slot="right" id="fr" />
        </span>
      </router-link>
    </div>

    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in comm.pic" :key="thumb">
        <img :src="thumb" />
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell class="xx">
        <div class="goods-title">{{ comm.name }}</div>
        <div class="goods-price">{{ '￥'+comm.price }}</div>
        <!-- <div class="goods-price">{{ formatPrice(comm.price) }}</div> -->
        <!-- <div class="fq">{{goods.fq}}</div> -->
        <div class="jj">{{comm.intro}}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">
          <van-icon name="passed" color="#00c3f5"></van-icon>花呗分期
        </van-col>
        <van-col span="14">
          <van-icon name="passed" color="#00c3f5"></van-icon>顺丰发货
        </van-col>
        <van-col span="14">
          <van-icon name="passed" color="#00c3f5"></van-icon>七天无理由退货
        </van-col>
      </van-cell>
    </van-cell-group>

    <!-- <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">有赞的店</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>-->
    <!-- <van-popup v-model="show" position="bottom" :style="{ height: '20%' }" /> -->

    <van-cell-group class="goods-cell-group" id="jz">
      <van-cell title="已选" is-link />
      <van-cell title="配送至" is-link @click="showPopup" :value="dzstr" />
      <van-popup v-model="show" closeable position="bottom" :style="{ height: '50%' }">
        <van-address-list v-model="chosenAddressId" :list="list" @click-item="updz" />
      </van-popup>
      <p>
        本商品由
        <span>魅族</span>负责发货并提供售后服务
      </p>
    </van-cell-group>

    <van-tabs v-model="active" line-height="0">
      <van-tab title="图文详情">
        <div class="tw_pic">
          <img src="../assets/img/16txq1.jpg" alt />
          <img src="../assets/img/16txq2.jpg" alt />
          <img src="../assets/img/16txq3.jpg" alt />
        </div>
      </van-tab>
      <van-tab title="规格参数">
        <div class="tw_pic">
          <img src="../assets/img/16txq1.jpg" alt />
          <img src="../assets/img/16txq2.jpg" alt />
          <img src="../assets/img/16txq3.jpg" alt />
        </div>
      </van-tab>
    </van-tabs>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o">客服</van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">购物车</van-goods-action-icon>
      <van-goods-action-button type="warning" @click="sorry">加入购物车</van-goods-action-button>
      <van-goods-action-button type="danger" @click="buy">立即购买</van-goods-action-button>
    </van-goods-action>
  </div>
</template>

<script>
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from "vant";

export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },

  data() {
    return {
      active: 0,
      show: false,
      chosenAddressId: "1",
      list: [],
      comm: [],
      id: 0,
      dzstr: ""
    };
  },

  methods: {
    formatPrice() {
      return "¥" + (this.goods.price / 100).toFixed(2);
    },

    onClickCart() {
      this.$router.push("/cars");
    },

    sorry() {
      // Toast("暂无后续逻辑~");
      // console.log(this.id);
      if (localStorage.islogin) {
        this.$store.commit("dzstrfun", this.chosenAddressId);
        this.$store.commit("addcars", this.id);
        Toast({
          message: "加入购物车成功！",
          icon: "passed"
        });
      } else {
        Toast("你还没登录喔~");
      }
    },
    buy() {
      if (localStorage.islogin) {
        Toast("立即购买！");
        this.$store.commit("buyfun", this.id);
        this.$store.commit("dzstrfun", this.chosenAddressId);
        this.$router.push("/bjs");
      }else {
        Toast("你还没登录喔~");
      }
    },
    go() {
      this.$router.go(-1);
    },
    showPopup() {
      this.show = true;
    },
    updz() {
      // console.log(this.chosenAddressId);
      this.dzstr = this.list[this.chosenAddressId - 1].address;
    }
  },
  created() {
    // console.log(this.$route.params.id);
    this.id = this.$route.params.id;
    this.comm = this.$store.state.comlist[this.id];
    // console.log(this.comm);
  },
  mounted() {
    this.list = this.$store.state.dzlist;
    this.chosenAddressId = this.$store.state.psid;
    this.dzstr = this.list[this.chosenAddressId - 1].address;
    this.chosenAddressId = String(this.$store.state.psid);
  }
};
</script>

<style lang="scss">
.goods {
  padding-bottom: 50px;
  background: #eee;
  position: relative;
  .header {
    width: 100%;
    height: 40px;
    position: fixed;
    z-index: 10;
    top: 0;
    padding: 10px;
    .van-icon {
      font-size: 20px;
      color: #333;
    }
    #fr {
      float: right;
      background: #fff;
      border-radius: 50%;
    }
  }
  .van-cell.xx {
    border-top: 1px solid rgb(228, 228, 228);
    border-bottom: 1px solid rgb(228, 228, 228);
  }
  .goods-express {
    margin-bottom: 6px;
  }
  .goods-cell-group {
    margin: 0;
    .van-cell {
      padding: 10px;
      span {
        color: #999999;
        font-size: 13px;
      }
      &:nth-child(2) {
        border-top: 1px solid #eee;
      }
    }
  }
  #jz {
    p {
      text-align: center;
      color: #999999;
      font-size: 13px;
      padding: 5px 0;
      border-top: 1px solid #eee;
      span {
        color: #666;
        font-size: 13px;
      }
    }
  }
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }

  .fq {
    font-size: 14px;
    color: #f0415f;
  }
  .jj {
    color: #f0415f;
    font-size: 13px;
  }
  &-title {
    font-size: 16px;
    color: #333333;
  }

  &-price {
    color: #f0415f;
    font-size: 18px;
  }

  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }

  &-cell-group {
    margin: 15px 0;

    .van-cell__value {
      color: #999;
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  &-tag {
    margin-left: 5px;
  }
  .van-col {
    font-size: 12px;
    color: #999999;
    i {
      margin-right: 5px;
    }
  }
  span.van-ellipsis {
    font-size: 14px;
  }
  .van-goods-action {
    button {
      margin: 0;
      border-radius: 0%;
      height: 50px;
      &.van-goods-action-button--first {
        background: #00c3f5;
      }
      &.van-goods-action-button--last {
        background: #f0415f;
      }
    }
  }
  .van-tabs__content {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .van-popup {
    .van-radio-group {
      width: 100%;
      padding: 30px 5px;
      .van-cell {
        width: 100%;
        // padding: 0;
        margin-bottom: 10px;
        i.van-address-item__edit {
          font-size: 0px;
        }
      }
    }
    .van-button {
      width: 0;
      height: 0;
    }
  }
}
</style>
