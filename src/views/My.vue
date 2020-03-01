<template>
  <div class="my">
    <div class="mybg">
      <van-nav-bar>
        <a href="#" slot="left" @click.prevent="back">
          <van-icon name="arrow-left" slot="left" />
        </a>
        <van-icon name="chat-o" slot="right" />
      </van-nav-bar>
      <div class="tx" @click="login">
        <div class="tx_bg">
          <img :src="img" alt />
        </div>
        <p>
          <span>{{name}}</span>
        </p>
      </div>
    </div>
    <!-- <img class="user-poster" src="../assets/img/mybg.jpg"> -->
    <van-cell-group class="user-group" @click="checkdd">
      <van-cell title="我的订单" is-link />
      <span class="check">查看全部订单</span>
    </van-cell-group>

    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />待付款
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />待收货
      </van-col>
      <van-col span="6">
        <van-icon name="cash-back-record" />退款/售后
      </van-col>
    </van-row>

    <ul class="my_list">
      <li @click.prevent="scgo">
        <img src="../assets/img/m1.png" alt />
        <a href="#">我的收藏</a>
      </li>
      <li @click.prevent="dzgo">
        <img src="../assets/img/m2.png" alt />
        <a href="#">我的地址</a>
      </li>
      <li>
        <img src="../assets/img/m3.png" alt />
        <a href="#">我的红包</a>
      </li>
      <li>
        <img src="../assets/img/m4.png" alt />
        <a href="#">我的优惠卷</a>
      </li>
    </ul>

    <van-cell-group>
      <van-cell title="M码通道" is-link />
      <van-cell title="手机号查询订单" is-link />
      <van-cell title="以旧换新" is-link />
      <van-cell title="百城速达" is-link />
      <van-cell title="联系客服" is-link />
      <van-cell title="意见反馈" is-link />
    </van-cell-group>
    <van-button type="primary" @click="tuichu" size="large" color="#1989fa">退出登录</van-button>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from "vant";

export default {
  data() {
    return {
      img: require("../assets/img/mytx.png"),
      name: "点击登录"
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    back() {
      this.$router.push("/");
    },
    checkdd() {
      this.$router.push("/dd");
    },
    scgo() {
      this.$router.push("/sc");
    },
    dzgo() {
      this.$router.push("/dz");
    },
    tuichu() {
      // console.log(localStorage.login);
      // console.log(localStorage.islogin);
      this.$router.push("/login");
      localStorage.removeItem("login");
      localStorage.removeItem("islogin");
    }
  },
  created() {
    if (localStorage.login) {
      this.$axios
        .get("/getdata", {
          params: {
            token: localStorage.login
          }
        })
        .then(res => {
          // console.log(res);
          // console.log(res.data.result.img);
          // console.log(res.data.result.name);
          this.img = res.data.result.img;
          this.name = res.data.result.name;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  // mounted(){

  // },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
};
</script>

<style lang="scss">
.my {
  .mybg {
    width: 100%;
    background-image: url("../assets/img/mybg.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    text-align: center;
    .van-nav-bar {
      background: transparent;
      .van-icon {
        color: #fff !important;
        font-size: 2rem;
      }
    }
    .van-hairline--bottom::after {
      border-bottom-width: 0;
    }
    .tx {
      display: inline-block;
      .tx_bg {
        width: 7rem;
        height: 7rem;
        border: 3px solid #fff;
        // background-image: url('../assets/img/mytx.png');
        // background-size: 100% 100%;
        // background-repeat: no-repeat;
        // background-position: center;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      p {
        margin: 0;
        span {
          display: block;
          padding: 5px 0;
          color: #fff;
          font-size: 1.2rem;
        }
      }
    }
  }
  .my_list {
    width: 100%;
    overflow: hidden;
    list-style: none;
    margin: 0;
    background: #ecebeb;
    li {
      width: 25%;
      float: left;
      text-align: center;
      background: #fff;
      margin: 0.7rem 0;
      padding: 10px 0;
      img {
        width: 2.5rem;
        margin: 0 auto;
        display: block;
      }
      a {
        color: #666666;
        font-size: 1.1rem;
      }
    }
  }
  .user-group {
    margin: 0 !important;
    position: relative;
    .van-cell__title {
      span {
        color: #444444;
        font-size: 1.35rem;
      }
    }
    .van-icon {
      color: #ccc;
      font-size: 1.5rem;
    }
    .check {
      position: absolute;
      top: 33%;
      right: 10%;
      color: #999999;
      font-size: 1rem;
    }
  }
  .user-links {
    .van-col {
      color: #666666;
      font-size: 1rem;
      border-right: 1px solid #e7e7e7;
      i {
        color: #666666;
        margin-bottom: 5px;
      }
      &:nth-child(4) {
        border: none;
      }
    }
  }
  .van-cell-group {
    span {
      color: #333333;
      font-size: 1.35rem;
    }
    i {
      color: #ccc;
      margin-bottom: 5px;
    }
  }
  .van-button {
    margin-top: 10px;
  }
  .user {
    &-poster {
      width: 100%;
      height: 53vw;
      display: block;
    }

    &-group {
      margin-bottom: 15px;
    }

    &-links {
      padding: 15px 0;
      font-size: 12px;
      text-align: center;
      background-color: #fff;

      .van-icon {
        display: block;
        font-size: 24px;
      }
    }
  }
}
</style>
