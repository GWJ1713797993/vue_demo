import Vue from "vue";
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/dist/css/bootstrap.css"
//数据请求
import axios from "axios";
//统一配置全局路径
axios.defaults.baseURL = 'http://180.76.147.214:8080/';
Vue.prototype.$axios = axios;
// import VueJsonp from "vue-jsonp";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
