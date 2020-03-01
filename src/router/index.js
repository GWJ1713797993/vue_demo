import Vue from "vue";
import VueRouter from "vue-router";
import Seach from "../views/Seach.vue";
import Tab from "../views/Tab.vue";
import My from "../views/My.vue";
import Gg from "../views/Gg.vue";
import Cars from "../views/Cars.vue";
import Login from "../views/Login.vue";
import Xq from "../views/Xq.vue";
import Js from "../views/Js.vue";
import Zf from "../views/Zf.vue";
import Dd from "../views/Dd.vue";
import Bjs from "../views/Bjs.vue";
import Collect from "../views/Collect.vue";
import Dz from "../views/Dz.vue";
import Add from "../views/Add.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    name:"tab",
    component:Tab,
  },
  {path:"/seach",name:"seach",component:Seach},
  {path:"/my",name:"my",component:My},
  {path:"/gg",name:"gg",component:Gg},
  {path:"/cars",name:"cars",component:Cars},
  {path:"/login",name:"login",component:Login},
  {path:"/xq/:id",name:"xq",component:Xq},
  {path:"/js",name:"js",component:Js},
  {path:"/zf",name:"zf",component:Zf},
  {path:"/dd",name:"dd",component:Dd},
  {path:"/bjs",name:"bjs",component:Bjs},
  {path:'/sc',name:'sc',component:Collect},
  {path:'/dz',name:'dz',component:Dz},
  {path:'/add',name:'add',component:Add},
  // {
  //   path: "/",
  //   name: "home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
