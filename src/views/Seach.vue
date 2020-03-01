<template>
  <div>
    <div class="meizu-header">
      <div class="col-xs-1">
        <router-link to="/">
          <van-icon name="arrow-left"></van-icon>
        </router-link>
      </div>
      <div class="col-xs-9">
        <img src="../assets/img/search.jpg" alt />
        <input type="text" />
        <van-icon name="clear"></van-icon>
      </div>
      <div class="col-xs-2">
        <span>搜索</span>
      </div>
    </div>
    <div class="search_section">
      <p>大家都在搜</p>
      <a href="#"><span>魅族 POP2</span></a>
    </div>
    <div class="box"></div>
    <div class="footer">
      <p>历史记录</p>
      <div class="ls">
        <span>暂无搜索历史</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {},
    // a(){
    //   // console.log(this.$router);
    //   this.$router.go(-1);
    // }
  }
};
</script>

<style lang="scss">
.meizu-header {
  padding: 10px 5px;
  width: 100%;
  overflow: hidden;
  vertical-align: middle;
  // box-sizing: border-box;
  // height: 44px;
  div {
    // box-sizing: border-box;
    position: relative;
    padding: 0;
    text-align: center;

    input {
      width: 100%;
      border-radius: 15px;
      border: 1px solid #ccc;
      padding: 3px 20px;
      outline: none;
      z-index: 10;
    }
  }
  .col-xs-1 {
    .van-icon {
      color: #666;
      font-size: 2.5rem;
    }
  }
  .col-xs-2 {
    margin-top: 5px;
    span {
      margin-top: 0px;
    }
  }
  .col-xs-9 {
    img {
      width: 15px;
      height: 15px;
      position: absolute;
      top: 50%;
      margin-top: -7.5px;
      left: 5px;
    }
    i.van-icon {
      position: absolute;
      right: 5px;
      top: 25%;
      font-size: 1.5rem;
      color: #ccc;
    }
  }
}
.search_section{
  border-top: 1px solid #e5e5e5;
  padding: 20px 10px 50px 10px;
  p{
    color: #333333;
    font-size: 1.2rem;
    padding-left: 5px;
  }
  a{
    display: inline-block;
    padding: 5px;
    border-radius: 15px;
    font-size: 12px;
    border: 1px solid #666;
    span{
      color: #666;
    }
  }
}
.box{
  width: 100%;
  height: 1rem;
  background: #eee;
}
.footer{
  p{
    margin: 0;
    font-size: 1.2rem;
    color: #333333;
    padding: 10px;
  }
  .ls{
    border-top: 1px solid #e5e5e5;
    text-align: center;
    height: 800px;
    span{
      display: inline-block;
      color: #999999;
      padding: 10px 0;
    }
  }
}
</style>