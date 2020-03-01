<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../assets/img/1.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/2.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/3.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/4.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/5.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/6.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/7.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/img/8.jpg" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 中间广告 -->
    <div class="container">
      <div class="row">
        <div class="col-xs-4">
          <span>
            <img src="../assets/img/x1.png" alt />魅族官方直供
          </span>
        </div>
        <div class="col-xs-4">
          <span>
            <img src="../assets/img/x2.png" alt />满80包邮
          </span>
        </div>
        <div class="col-xs-4">
          <span>
            <img src="../assets/img/x3.png" alt />7天无理由退货
          </span>
        </div>
      </div>
      <ul class="list">
        <li>
          <a href="#">
            <img src="../assets/img/li1.jpg" alt />
            <span>魅族 16T</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/img/li2.png" alt />
            <span>魅族 16S Pro</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/img/li3.jpg" alt />
            <span>魅族 Note9</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/img/li4.jpg" alt />
            <span>mCycle</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="section">
      <div class="col-xs-6">
        <img src="../assets/img/g1.jpg" alt />
      </div>
      <div class="col-xs-6">
        <img src="../assets/img/g2.png" alt />
        <img src="../assets/img/g3.jpg" alt />
      </div>
    </div>
    <div class="phone_section">
      <h3 class="title1">智能手机</h3>
      <div class="pic">
        <a href="#">
          <img src="../assets/img/s1.jpg" alt />
        </a>
      </div>
      <div class="phone_content">
        <ul>
          <li>
            <router-link to="/xq/0" tag="a">
                <div class="left">
                  <img src="../assets/img/c1.png" alt />
                  <p>
                    <span class="title">魅族 16T</span>
                  </p>
                  <p>
                    <span>
                      <em>新品</em>6.5英寸极边全面屏 | 骁龙855旗舰处理器 | 4500mAh续航怪兽 | UFS 3.0 高速闪存 | 双·立体声扬声器 | 全球频段 | 超广角 AI 三摄 | Flyme8尝鲜体验
                    </span>
                  </p>
                  <p>
                    <i>￥</i>2499
                  </p>
                </div>
            </router-link>
            <router-link to="/xq/1" tag="a">
              <div class="right">
                <img src="../assets/img/c2.png" alt />
                <p>
                  <span class="title">魅族 16S Pro</span>
                </p>
                <p>
                  <span>
                    <em>新品</em>⾼通骁⻰ 855 Plus | 索尼 4800W 像素超广角 AI 三摄
                  </span>
                </p>
                <p>
                  <i>￥</i>2699
                </p>
              </div>
            </router-link>
          </li>
          <li>
            <a href="#">
              <div class="left">
                <img src="../assets/img/c1.png" alt />
                <p>
                  <span class="title">魅族 16T</span>
                </p>
                <p>
                  <span>
                    <em>新品</em>6.5英寸极边全面屏 | 骁龙855旗舰处理器 | 4500mAh续航怪兽 | UFS 3.0 高速闪存 | 双·立体声扬声器 | 全球频段 | 超广角 AI 三摄 | Flyme8尝鲜体验
                  </span>
                </p>
                <p>
                  <i>￥</i>2499
                </p>
              </div>
            </a>
            <a href="#">
              <div class="right">
                <img src="../assets/img/c2.png" alt />
                <p>
                  <span class="title">魅族 16S Pro</span>
                </p>
                <p>
                  <span>
                    <em>新品</em>⾼通骁⻰ 855 Plus | 索尼 4800W 像素超广角 AI 三摄
                  </span>
                </p>
                <p>
                  <i>￥</i>2699
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="left">
                <img src="../assets/img/c1.png" alt />
                <p>
                  <span class="title">魅族 16T</span>
                </p>
                <p>
                  <span>
                    <em>新品</em>6.5英寸极边全面屏 | 骁龙855旗舰处理器 | 4500mAh续航怪兽 | UFS 3.0 高速闪存 | 双·立体声扬声器 | 全球频段 | 超广角 AI 三摄 | Flyme8尝鲜体验
                  </span>
                </p>
                <p>
                  <i>￥</i>2499
                </p>
              </div>
            </a>
            <a href="#">
              <div class="right">
                <img src="../assets/img/c2.png" alt />
                <p>
                  <span class="title">魅族 16S Pro</span>
                </p>
                <p>
                  <span>
                    <em>新品</em>⾼通骁⻰ 855 Plus | 索尼 4800W 像素超广角 AI 三摄
                  </span>
                </p>
                <p>
                  <i>￥</i>2699
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="left">
                <img src="../assets/img/c1.png" alt />
                <p>
                  <span class="title">魅族 16T</span>
                </p>
                <p>
                  <span>
                    <em>新品</em>6.5英寸极边全面屏 | 骁龙855旗舰处理器 | 4500mAh续航怪兽 | UFS 3.0 高速闪存 | 双·立体声扬声器 | 全球频段 | 超广角 AI 三摄 | Flyme8尝鲜体验
                  </span>
                </p>
                <p>
                  <i>￥</i>2499
                </p>
              </div>
            </a>
            <a href="#">
              <div class="right">
                <img src="../assets/img/c2.png" alt />
                <p>
                  <span class="title">魅族 16S Pro</span>
                </p>
                <p>
                  <span>
                    <em>新品</em>⾼通骁⻰ 855 Plus | 索尼 4800W 像素超广角 AI 三摄
                  </span>
                </p>
                <p>
                  <i>￥</i>2699
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="Flyme_section">
      <h3 class="title1">Flyme</h3>
      <div class="phone_content">
        <ul>
          <li>
            <a href="#">
              <img src="../assets/img/f1.jpg" alt />
              <p>
                <span>Flyme 8.0 稳定版更新</span>
              </p>
            </a>
            <a href="#">
              <div class="right">
                <img src="../assets/img/f2.png" alt />
                <p>
                  <span class="title">魅族 16S Pro</span>
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/img/f1.jpg" alt />
              <p>
                <span>Flyme 8.0 稳定版更新</span>
              </p>
            </a>
            <a href="#">
              <div class="right">
                <img src="../assets/img/f2.png" alt />
                <p>
                  <span class="title">魅族 16S Pro</span>
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/img/f1.jpg" alt />
              <p>
                <span>Flyme 8.0 稳定版更新</span>
              </p>
            </a>
            <a href="#">
              <div class="right">
                <img src="../assets/img/f2.png" alt />
                <p>
                  <span class="title">魅族 16S Pro</span>
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/img/f1.jpg" alt />
              <p>
                <span>Flyme 8.0 稳定版更新</span>
              </p>
            </a>
            <a href="#">
              <div class="right">
                <img src="../assets/img/f2.png" alt />
                <p>
                  <span class="title">魅族 16S Pro</span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="back_to_top">
      <span @click="back_top">返回顶部</span>
    </div>
    <footer class="meizu_footer">
      <div class="footer_btn">
        <div class="col-xs-6">
          <a href="#">
            <van-icon name="phone-o"></van-icon>
            <span>400-788-3333</span>
          </a>
        </div>
        <div class="col-xs-6">
          <a href="#">
            <van-icon name="chat-o"></van-icon>
            <span>在线客服</span>
          </a>
        </div>
      </div>
      <div class="footer_text">
        <div class="col-xs-8">
          <p>粤ICP备13003602号-2合字B2-20170010</p>
          <p>营业执照©2018 Meizu All rights reserved</p>
        </div>
        <div class="col-xs-4">
          <span class="icon"></span>
          <span>简体中文</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null
    };
  },
  methods: {
    back_top() {
      let hval = document.documentElement.scrollTop;
      this.timer = setInterval(() => {
        if (hval > 0) {
          hval -= window.innerHeight;
          window.scrollTo(0, hval);
        } else {
          clearInterval(this.timer);
        }
      }, 30);
    }
  },
  // created(){
    
  // }
};
</script>

<style lang="scss">
//主体
.van-tab {
  font-size: 1.2rem;
  color: #333333;
}
.van-swipe__indicators {
  left: 75%;
}
.van-swipe-item {
  width: 100%;
  img {
    width: 100%;
  }
}

.van-tab--active {
  color: #0bbbef;
}
.row {
  padding: 5px 0;
  vertical-align: middle;
  div {
    color: #999999;
    font-size: 0.5rem;
    text-align: center;
    img {
      width: 1.1em;
      margin-right: 3px;
      margin-bottom: 3px;
    }
  }
}
ul.list {
  width: 100%;
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  padding: 10px 0;
  li {
    flex: 1;
    text-align: center;
    a {
      display: block;
      img {
        display: block;
        width: 4.1rem;
        height: 4.1rem;
        margin: 0 auto;
      }
      span {
        font-size: 1.1rem;
        color: #000000;
      }
    }
  }
}
.section {
  width: 100%;
  overflow: hidden;
  padding: 10px 0 15px 0;
  .col-xs-6 {
    padding: 0;
    img {
      width: 100%;
    }
  }
}
.phone_section {
  width: 100%;
  h3.title1 {
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 1.5rem;
  }
  h3.title1::after {
    content: "";
    display: block;
    width: 2.4rem;
    height: 0.3rem;
    margin: 0 auto;
    background: #0bbbef;
    margin-top: 10px;
  }
  .pic {
    width: 100%;
    a {
      display: block;
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .phone_content {
    width: 100%;
    ul {
      width: 100%;
      list-style: none;
      padding: 5px 0;
      margin: 0;
      background: #f4f4f4;
      li {
        width: 100%;
        text-align: center;
        background: #f4f4f4;
        overflow: hidden;
        margin: 5px 0;
        a {
          display: block;
          width: 49%;
          background: #fff;
          float: left;
          padding: 20px 0 15px 0;
          div {
            width: 100%;
            img {
              width: 85%;
            }
            p {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #c00;
              font-size: 1.2rem;
              span {
                color: #999999;
                font-size: 1.05rem;
                padding: 0 1rem;
              }
              span.title {
                font-size: 1.25rem;
                color: #333;
                font-weight: 700;
              }
              em {
                font-style: normal;
                padding: 0 0.5rem;
                font-size: 0.8rem;
                color: #fff;
                background-color: #c00;
                margin-right: 2px;
              }
              i {
                font-style: normal;
              }
            }
          }
          &:nth-child(even) {
            float: right;
          }
        }
      }
    }
  }
}

.Flyme_section {
  width: 100%;
  background: #f4f4f4;
  h3.title1 {
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 1.5rem;
    margin: 0;
    padding: 20px 0 10px 0;
  }
  h3.title1::after {
    content: "";
    display: block;
    width: 2.4rem;
    height: 0.3rem;
    margin: 0 auto;
    background: #147df0;
    margin-top: 10px;
  }
  .phone_content {
    width: 100%;
    ul {
      width: 100%;
      list-style: none;
      padding: 5px 0;
      margin: 0;
      background: #f4f4f4;
      li {
        width: 100%;
        text-align: center;
        background: #f4f4f4;
        overflow: hidden;
        margin: 5px 0;
        a {
          display: block;
          width: 49%;
          background: #fff;
          float: left;
          img {
            width: 100%;
          }
          p {
            margin: 0;
            padding: 10px 0;
            color: #333333;
            font-size: 1.1rem;
          }
          &:nth-child(even) {
            float: right;
          }
        }
      }
    }
  }
}
.back_to_top {
  text-align: center;
  background: #f4f4f4;
  span {
    display: inline-block;
    color: #999;
    font-size: 1.3rem;
    padding: 20px;
  }
}
.meizu_footer {
  width: 100%;
  background: #fff;
  overflow: hidden;
  .footer_btn {
    padding: 20px 0 0 0;
    overflow: hidden;
    div {
      text-align: center;
      a {
        background: #00b4ff;
        display: block;
        padding: 5px;
        border-radius: 15px;
        color: #fff;
        font-size: 1.3rem;
        i.van-icon {
          font-size: 1.3rem;
          margin-right: 5px;
        }
        span {
        }
      }
    }
  }
  .footer_text {
    width: 100%;
    overflow: hidden;
    padding: 16px 0;
    div {
      p {
        color: #999999;
        font-size: 0.9rem;
        margin: 0;
      }
      .icon {
        display: inline-block;
        width: 18px;
        height: 18px;
        background-image: url("../assets/img/q.png");
        background-size: 100%;
        background-position: center;
        vertical-align: middle;
        margin-right: 5px;
      }
      span {
        color: #3b3b3b;
        font-size: 1.2rem;
      }
    }
  }
}
</style>