<template>
  <div class="tj_section">
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
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.tj_section {
  ul {
    width: 100%;
    list-style: none;
    padding: 5px 0;
    margin: 0;
    // background: #f4f4f4;
    li {
      width: 100%;
      text-align: center;
      //   background: #f4f4f4;
      overflow: hidden;
      margin: 5px 0;
      a {
        display: block;
        width: 49%;
        background: #fff;
        float: left;
        padding: 20px 0 15px 0;
        border: none;
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
</style>