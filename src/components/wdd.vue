<template>
  <div class="container text-center wdd">
    <van-icon name="records" />
    <p>
      <span>没有订单...</span>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.wdd{
    padding-top: 50px;
    i{
        font-size: 40px;
        display: inline-block;
        padding: 30px;
        background: #eee;
        border-radius: 15px;
    }
    p{
        span{
            color: #ccc;
            font-weight: bolder;
        }
    }
}
</style>