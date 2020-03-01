<template>
  <div>
    <!-- 头部 start -->
    <div id="nav">
      <van-nav-bar title="MEIZU">
        <router-link to="/seach" slot="left">
          <span><van-icon name="search" slot="left" /></span>
        </router-link>
        <router-link to="/cars" slot="right">
          <span><van-icon name="cart-o" slot="right" /></span>
        </router-link>
        <van-icon name="wap-nav dian" slot="right" @click="app" />
      </van-nav-bar>
    </div>
    <!-- 下滑页面 start -->
    <div class="xq_list">
      <van-nav-bar title="魅族官网">
        <van-icon name="cross" slot="right" @click="del" />
      </van-nav-bar>

      <van-grid>
        <router-link to="/my">
        <van-grid-item data-name="gr" icon="manager" text="个人中心" />
        </router-link>
        <router-link to="/dd">
        <van-grid-item data-name="my" icon="balance-list" text="我的订单" />
        </router-link>
        <a href="#">
        <van-grid-item data-name="hb" icon="bill" text="我的红包" />
        </a>
        <a href="#">
        <van-grid-item data-name="yh" icon="card" text="我的优惠券" />
        </a>
        <router-link to="/dz">
        <van-grid-item data-name="dz" icon="location" text="我的地址" />
        </router-link>
        <router-link to="/sc">
        <van-grid-item data-name="sc" icon="star" text="我的收藏" />
        </router-link>
      </van-grid>

      <div class="row">
        <ul>
          <li>
            <p>
              <img src="../assets/img/xz1.png" alt />
            </p>
            <p>
              <span>产品</span>
            </p>
          </li>
          <li>
            <p>
              <img src="../assets/img/xz2.png" alt />
            </p>
            <p>
              <span>Flyme</span>
            </p>
          </li>
          <li>
            <p>
              <img src="../assets/img/xz3.png" alt />
            </p>
            <p>
              <span>云服务</span>
            </p>
          </li>
          <li>
            <p>
              <img src="../assets/img/xz4.png" alt />
            </p>
            <p>
              <span>专卖店</span>
            </p>
          </li>
          <li>
            <p>
              <img src="../assets/img/xz5.png" alt />
            </p>
            <p>
              <span>服务支持</span>
            </p>
          </li>
          <li>
            <p>
              <img src="../assets/img/xz6.png" alt />
            </p>
            <p>
              <span>社区</span>
            </p>
          </li>
          <li>
            <p>
              <img src="../assets/img/xz7.png" alt />
            </p>
            <p>
              <span>App下载</span>
            </p>
          </li>
        </ul>
      </div>

      <div class="row">
        <div class="col-xs-3">
          <img src="../assets/img/xq1.png" alt />
          <p>
            <span>魅族16S</span>
          </p>
        </div>
        <div class="col-xs-3">
          <img src="../assets/img/xq2.png" alt />
          <p>
            <span>魅族 16Xs</span>
          </p>
        </div>
        <div class="col-xs-3">
          <img src="../assets/img/xq3.jpg" alt />
          <p>
            <span>以旧换新</span>
          </p>
        </div>
        <div class="col-xs-3">
          <img src="../assets/img/xq4.png" alt />
          <p>
            <span>M码通道</span>
          </p>
        </div>
      </div>
    </div>
    <!-- 下滑页面 end -->
    <!-- 头部 end -->

    <!-- 主体 选项卡 -->
    <van-tabs v-model="active" :swipe-threshold="5" color="#0bbbef">
      <van-tab title="推荐">
        <sy/>
      </van-tab>
      <van-tab title="手机">
        <phone />
      </van-tab>
      <van-tab title="声学">
        <acoustics />
      </van-tab>
      <van-tab title="配件">
        <mountings></mountings>
      </van-tab>
      <van-tab title="生活">
        <life></life>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import phone from "@/components/phone.vue";
import acoustics from "@/components/acoustics.vue";
import mountings from "@/components/mountings.vue";
import sy from "@/components/sy.vue";
import life from "@/components/life.vue";
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    app() {
      document.querySelector(".xq_list").style.top = 0 + "px";
      document.querySelector(".xq_list").style.bottom = 0 + "px";
    },
    del() {
      document.querySelector(".xq_list").style.top = -3000 + "px";
      document.querySelector(".xq_list").style.bottom = 3000 + "px";
    }
  },
  components: {
    phone,
    acoustics,
    sy,
    mountings,
    life
  }
};
</script>

<style lang='scss'>

//头部
.van-nav-bar {
  .van-nav-bar__title {
    color: #00b4ff;
  }
  .van-icon {
    font-size: 16px;
    color: #333;
  }
  .dian {
    // transform: rotate(90deg);
    // background-image: red;
    margin-left: 10px;
  }
}
.xq_list {
  width: 100%;
  z-index: 999;
  position: fixed;
  top: -3000px;
  bottom: 3000px;
  background: #fff;
  transition: all 0.5s;
  .van-nav-bar__title {
    color: #000;
    font-size: 1.4rem;
  }
  .van-grid {
    a{
      display: block;
      flex-basis: 25%
    }
    .van-grid-item {
      width: 100%;
      .van-icon {
        // color:#00b4ff;
        border-radius: 50%;
        color: #fff;
        padding: 5px;
        font-size: 2rem;
      }
    }
    [data-name="gr"] {
      .van-icon {
        background: #50a9f1;
      }
    }
    [data-name="my"] {
      .van-icon {
        background: #50a9f1;
      }
    }
    [data-name="hb"] {
      .van-icon {
        background: #fb447e;
      }
    }
    [data-name="yh"] {
      .van-icon {
        background: #fb447e;
      }
    }
    [data-name="dz"] {
      .van-icon {
        background: #2fcbd8;
      }
    }
    [data-name="sc"] {
      .van-icon {
        background: #ffb920;
      }
    }
    .van-grid-item__text {
      font-size: 0.9rem;
      color: #000000;
    }
  }

  .row {
    width: 100%;
    margin: 0;
    padding-top: 20px;
    div {
      text-align: center;
      img {
        display: inline-block;
        width: 4rem;
        margin: 0 auto;
      }
      p {
        margin: 0;
        padding: 10px 0;
        span {
          color: #000000;
        }
      }
    }
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    li {
      width: 25%;
      float: left;
      text-align: center;

      margin-bottom: 10px;
      p {
        margin-bottom: 5px;
        img {
          width: 2.5rem;
        }
        span {
          color: #000000;
          font-size: 0.9rem;
          word-wrap: break-word;
        }
      }
    }
  }
}
</style>