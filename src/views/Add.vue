<template>
  <div class="add">
    <van-nav-bar title="我的地址">
      <a href="#" @click.prevent="back" slot="left">
        <van-icon name="arrow-left" />
      </a>
    </van-nav-bar>

    <div class="form container">
      <div class="form-group">
        <div class="col-sm-10">
          姓名:
          <input type="text" id="inputEmail3" placeholder="收货人姓名" v-model="name" />
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-10">
          电话:
          <input type="text" id="inputEmail3" placeholder="收货人手机号"  v-model="dh" />
        </div>
      </div>
      

      <!-- <div class="form-group">
        <div class="col-sm-10">
          选择地区:
          <van-area :area-list="areaList" />
        </div>
      </div> -->

      <div class="form-group">
        <div class="col-sm-10">
          详细地址:
          <input type="text" id="inputEmail3" placeholder="街道门牌、楼层房间号等信息"  v-model="dz" />
        </div>
      </div>
      <van-button type="primary" size="large" @click="Onsubmit">确认</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id:'',
      name:'',
      dh:'',
      dz:''
    };
  },
  methods:{
    back(){
      this.$router.go(-1);
      var obj = {
        id:this.id,
        name:this.name,
        tel:this.dh,
        address:this.dz,
      }
      this.$store.commit('editdz',obj);
    },
    Onsubmit(){
      var obj = {
        id:this.id,
        name:this.name,
        tel:this.dh,
        address:this.dz,
      }
      this.$store.commit('editdz',obj);
      this.$router.go(-1);
    }
  },
  mounted(){
    if (this.$store.state.updzlist.length > 0) {
      this.id = this.$store.state.updzlist[0].id;
      this.name = this.$store.state.updzlist[0].name;
      this.dh = this.$store.state.updzlist[0].tel;
      this.dz = this.$store.state.updzlist[0].address;
    }
    // console.log(this.$store.state.updzlist);
  }
};
</script>

<style lang="scss">
.add {
  .van-nav-bar {
    border-bottom: 1px solid #eee;
  }
  .form {
    padding-top: 30px;
    .form-group {
      border-bottom: 1px solid #eee;
      margin: 0;
      padding: 10px 0;
      .col-sm-10 {
        padding: 10px 0px;
      }
      input {
        float: right;
        width: 70%;
        outline: none;
        border: none;
      }
      input::-webkit-input-placeholder {
        color: #ccc;
      }
      input:-moz-placeholder {
        color: #ccc;
      }
    }
    .van-button {
      margin-top: 15px;
      background: #00c3f3;
    }
  }
}
</style>