<template>
  <div class="dz">
    <van-nav-bar title="我的地址">
      <a href="#" @click.prevent="back" slot="left">
        <van-icon name="arrow-left" />
      </a>
    </van-nav-bar>
    <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit" @click-item="dzid" />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: []
    };
  },

  methods: {
    onAdd() {
      this.$router.push("/add");
    },

    onEdit(item, index) {
      Toast("编辑地址:" + index);
      this.$store.commit('updz',index);
      this.$router.push('/add');
    },

    back() {
      this.$router.go(-1);
    },
    dzid(){
      // console.log(this.chosenAddressId);
      // console.log(typeof(this.chosenAddressId));
      this.$store.commit("dzstrfun", parseInt(this.chosenAddressId));
    }
  },
  mounted() {
    // console.log();
    this.list = this.$store.state.dzlist;
    this.chosenAddressId = String(this.$store.state.psid);
    // console.log(typeof(this.chosenAddressId));
  }
};
</script>

<style lang="scss">
.dz {
  .van-nav-bar {
    border-bottom: 1px solid #eee;
  }
  .van-button--danger {
    background: #00c3f3;
    border: none;
  }
  .van-address-item .van-radio__icon--checked .van-icon {
    background-color: #00c3f3;
    border-color: #00c3f3;
  }
}
</style>