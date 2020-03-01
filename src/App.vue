<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    app() {
      console.log("xxx");
    }
  },
  watch: {
    // "$route.path":function(newValue,oldValue) {
    //     if(newValue == "/gg" || newValue == "/"){
    //       this.showactiove = false;
    //     }else{
    //       this.showactiove = true;
    //     }
    //     window.console.log(newValue);
    //     window.console.log(oldValue);
    // }
    // this.$router.push('/gg');
  },
  mounted(){
      if (!localStorage.one) {
        this.$router.push('/gg');
        console.log('xxx')
      }
      
  }
};
</script>


<style lang="scss">
#app {
  position: relative;
}
</style>
