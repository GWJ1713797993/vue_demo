<template>
  <div class="cars">
    <!-- 购物车顶部栏 -->
    <van-nav-bar title="购物车">
      <a href="#" slot="left" @click="back">
        <van-icon name="arrow-left" />
      </a>
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <!-- 购物车内容 -->
    <div class="cars_content" v-show="$store.state.flag">
      <div class="card" v-for="(item, i) in goods" :key="i">
        <van-swipe-cell>
          <input type="checkbox" class="ischeck" :checked="item.ischeck" @click="checkfun(i)" />
          <van-card
            :num="item.num"
            :price="item.price"
            :desc="item.intro"
            :title="item.name"
            :thumb="item.pic[0]"
          >
            <div slot="footer">
              <van-button size="mini" @click="item.num<=1?1:item.num--">-</van-button>
              <van-button size="mini" @click="item.num++">+</van-button>
            </div>
          </van-card>
          <template slot="right">
            <van-button square type="danger" text="删除" @click="del(i)" />
            <van-button square type="primary" text="收藏" />
          </template>
        </van-swipe-cell>
      </div>
      
    </div>
    <van-submit-bar :price="totalPrice" button-text="结算" @submit="onSubmit" />
    <!-- 提示登录页面 -->
      <div class="nologin" v-show="!$store.state.flag">
        <p>
          <span>登陆后可显示您账号中已加入的商品</span>
        </p>
        <p>
          <a href="/login">去登陆</a>
        </p>
      </div>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast, Dialog } from "vant";

export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },

  data() {
    return {
      checkedGoods: [],
      goods: []
    };
  },

  computed: {
    submitBarText() {
      let count = 0;
      this.goods.forEach(element => {
        if (element.ischeck) {
          count += 1;
        }
      });

      return "结算" + (count ? `(${count})` : "");
    },
    // jy(){
    //   let count = 0;
    //   this.goods.forEach(element=>{
    //     if (element.ischeck) {
    //       count +=1;
    //     }
    //   })
    //   return count;
    // },

    totalPrice() {
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

  methods: {
    back() {
      this.$router.go(-1);
    },
    onSubmit() {
      if (localStorage.islogin) {
        if (this.goods < 1) {
          Toast("购物车空空如也！先去逛逛吧~");
        } else {
          this.$router.push("/js");
          this.$store.commit("zfing", this.goods);
        }
      } else {
        Toast("你还没登录啊~");
        this.$router.push("/login");
      }
    },
    checkfun(id) {
      this.goods[id].ischeck = !this.goods[id].ischeck;
      // console.log(this.goods[id]);
    },
    del(i) {
      // console.log(i);

      Dialog.confirm({
        title: "确认",
        message: "是否删除该商品"
      })
        .then(() => {
          this.goods.splice(i, 1);
          this.$store.commit[("delfun", i)];
          Toast("成功删除商品！");
        })
        .catch(() => {
          // on cancel
        });
    }
  },
  mounted() {
    if (localStorage.islogin) {
      // console.log(localStorage.islogin)
      this.$store.commit("islogin", true);
    }
    this.goods = this.$store.state.carslist;
    // console.log(this.goods);
  }
};
</script>

<style lang="scss">
body,
html {
  position: relative;
}
.cars {
  .van-nav-bar__title {
    color: #666666;
    font-size: 18px;
  }
  .cars_content {
    background: #eee;
    // position: fixed;
    // top: 46px;
    // bottom: 0;
    width: 100%;
    margin-bottom: 50px;
    position: relative;
    .van-card {
      margin: 0;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
    .card-goods {
      padding: 0;
      width: 100%;
      //   background-color: #fff;

      &__item {
        position: relative;
        background-color: #fafafa;

        .van-checkbox__label {
          width: 100%;
          height: auto; // temp
          padding: 0 10px 0 15px;
          box-sizing: border-box;
        }

        .van-checkbox__icon {
          top: 50%;
          left: 10px;
          z-index: 1;
          position: absolute;
          margin-top: -10px;
        }

        .van-card__price {
          color: #f44;
        }
      }
    }

    .van-submit-bar__bar {
      // background: #ccc;
    }
  }
  .nologin {
    text-align: center;
    margin-top: 13rem;
    position: fixed;
    top: 40px;
    bottom: 50px;
    width: 100%;
    p {
      margin-bottom: 20px;
      span {
        color: #666666;
        font-size: 12px;
      }
      a {
        display: inline-block;
        background: #00c3f5;
        color: #fff;
        padding: 7px 20px;
        border-radius: 5px;
        font-size: 16px;
      }
    }
  }
}
.card {
  position: relative;
  .ischeck {
    position: absolute;
    top: 40%;
    left: 10px;
    z-index: 9;
  }
}
.van-swipe-cell__right {
  height: 100%;
  button {
    width: 100%;
    height: 50%;
  }
}
</style>


