import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    oldurl: "/",
    flag:false,
    comlist:[
      {ischeck:true,name:"魅族16T",num:1,price:2499.00,intro:"6.5英寸极边全面屏 | 骁龙855旗舰处理器 | 4500mAh续航怪兽 | UFS 3.0 高速闪存 | 双·立体声扬声器 | 全球频段 | 超广角 AI 三摄 | Flyme8尝鲜体验 ",
      pic:[require("../assets/img/16t1.jpg"),
      require("../assets/img/16t2.jpg"),
      require("../assets/img/16t3.jpg"),
      require("../assets/img/16t4.jpg")]},
      {ischeck:true,name:"魅族 16s Pro",num:1,price:2699.00,intro:"【暮光森林 现货开售】【限时3期免息】高通骁龙 855 Plus  | 索尼 4800W 像素超广角 AI 三摄 | 极边全面屏 | Flyme8 尝鲜体验 | 极速屏下指纹 | 全功能NFC",
      pic:[require("../assets/img/16s1.jpg"),
      require("../assets/img/16s2.jpg"),
      require("../assets/img/16s3.jpg"),
      require("../assets/img/16s4.jpg")]},
      {ischeck:true,name:"魅族 HD60 头戴式蓝牙耳机",num:1,price:499.00,intro:"【11月25日10:00 热带橙色限量发售】40mm生物振膜  | Type-C充电 | 触控操作 | 蓝牙5.0 | 轻奢品质",
      pic:[require("../assets/img/ej1.jpg"),
      require("../assets/img/ej2.jpg"),
      require("../assets/img/ej3.jpg"),
      require("../assets/img/ej4.jpg")]},
      {ischeck:true,name:"MEIZU UR 高端定制耳机  预约",num:1,price:200.00,intro:"【预约专用】私人定制，为你而声",
      pic:[require("../assets/img/dz1.jpg"),
      require("../assets/img/dz2.jpg"),
      require("../assets/img/dz3.jpg"),
      require("../assets/img/dz4.jpg")]},
      {ischeck:true,name:"魅族 16s Pro 亲肤壳膜套装",num:1,price:29.00,intro:"亲肤亲近，安全防护",
      pic:[require("../assets/img/sjt1.jpg"),
      require("../assets/img/sjt2.jpg"),
      require("../assets/img/sjt3.jpg")]},
      {ischeck:true,name:"魅族移动电源3",num:1,price:79.00,intro:"双向快充双充电口 轻薄小巧",
      pic:[require("../assets/img/db1.jpg"),
      require("../assets/img/db2.jpg"),
      require("../assets/img/db3.jpg"),
      require("../assets/img/db4.jpg")]},
      {ischeck:true,name:"魅族防飞溅声波电动牙刷",num:1,price:299.00,intro:"智能压感防飞溅 | 超强震动清洁 | FDA 杜邦软毛 | 30天超长续航 | IPX7 级防水全身防霉防污垢 | 四种模式全面呵护 ",
      pic:[require("../assets/img/ys1.jpg"),
      require("../assets/img/ys2.jpg"),
      require("../assets/img/ys3.jpg"),
      require("../assets/img/ys4.jpg")]},
      {ischeck:true,name:"Pandaer 魔术师帽衫",num:1,price:399.00,intro:"Magic Pandaer前卫设计 | 100％精梳棉纱 | 潮流款式 挺括有型 | 亲肤内衬 柔顺舒适 ",
      pic:[require("../assets/img/yf1.jpg"),
      require("../assets/img/yf2.jpg")]},
    ],
    carslist:[],
    submit:true,
    zflist:[],
    ddlist:[],
    buyslist:[],
    updzlist:[],
    dzlist:[{
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }],
        psid:"1",
  },
  mutations: {
    islogin(state, a){
      state.flag = a;
      // console.log(state.flag);
    },
    //加入购物车
    addcars(state, index){
      let id = state.carslist.findIndex(value => value.name == state.comlist[index].name);
      if (id == -1) {
        state.carslist.push(state.comlist[index]);
      }else{
        state.carslist[id].num += 1;
      }
      console.log(id);
      state.submit = false;
      // console.log(state.carslist);
    },
    //选择购买
    zfing(state,obj){
      state.zflist = obj;
      // console.log(state.zflist);
    },
    //购买删除
    buydel(state,obj){
      // console.log(state.carslist);
      // console.log(obj);
      for (let i = 0; i < state.carslist.length; i++) {
        if (state.carslist[i].name.indexOf(obj.name)) {
          state.carslist.splice(i, 1);
          i--;
        }
      }  
    },
    //购物车删除
    delfun(state,id){
      state.carslist.splice(id, 1);
    },
    //添加订单
    add(state,obj){
      obj.forEach(element => {
        state.ddlist.push(element);
      });
      state.buyslist = [];
    },
    //立即购买
    buyfun(state, id){
      state.buyslist.push(state.comlist[id]);
      // console.log(state.buyslist);
    },
    //修改地址
    updz(state,id){
      state.dzlist.forEach((element)=>{
        if (element.id == id+1) {
          state.updzlist[0] = element;
        }
      })
      // console.log(state.updzlist);
    },

    editdz(state,obj){
      let count = 0;
      state.updzlist = [];
      state.dzlist.forEach((element)=>{
        if (element.id == obj.id) {
          element.name = obj.name;
          element.tel = obj.tel;
          element.address = obj.address;
          count += 1;
        }
      })
      if (count == 0) {
        obj.id = String(state.dzlist.length + 1);
        state.dzlist.push(obj);
      }
      // console.log(state.dzlist);
    },
    //选择配送地址
    dzstrfun(state,id){
      state.psid = id;
      // console.log(state.psid);
      // console.log(state.dzlist);
    }
  },
  actions: {},
  modules: {}
});
