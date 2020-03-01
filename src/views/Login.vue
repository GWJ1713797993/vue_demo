<template>
  <div class="login">
    <van-nav-bar title="Flyme 账号登录">
      <a href="#" slot="left" @click="btn">
        <van-icon name="arrow-left" />
      </a>
    </van-nav-bar>
    <div class="form container">
      <div class="form-group">
        <input type="text" class="form-control" v-model="username" placeholder="手机号/Flyme" />
      </div>
      <div class="form-group">
        <input type="password" class="form-control" v-model="password" placeholder="密码" />
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox" />记住登录状态
        </label>
        <span style="float:right;">
          <a href="#">忘记密码？</a>
        </span>
      </div>

      <van-button type="primary" size="large" @click="loginfun">登录</van-button>
      <van-button type="primary" size="large" class="btn btn-default res">注册</van-button>
    </div>
  </div>
</template>

<script>
import { Notify } from "vant";
export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    btn() {
      this.$router.go(-1);
    },
    loginfun() {
      // ajax请求后台登录API功能
      this.$axios
        .get("/login", {
          params: {
            username: this.username,
            password: this.password
          }
        })
        .then(response => {
          // console.log(response);
          // 1.把token存储cookie或localStorage
          if (response.data.code == 200) {
            let token = response.data.result.token;
            localStorage.login = token;
            localStorage.islogin = true;
            // this.$router.push("/my");
            this.$router.go(-1);
          } else {
            Notify({
              message: "登录失败",
              color: "#F8A1A4",
              duration: 1000
            });
          }
        });
    }
  }
};
</script>

<style lang="scss">
.login {
  .van-nav-bar__title {
    color: #666666;
    font-size: 18px;
  }
  .form {
    padding-top: 20px;
    .res {
      margin-top: 5px;
      outline: none;
    }
  }
}
</style>