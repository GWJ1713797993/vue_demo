<template>
    <div>
        <div class="show">
            <div class="time">
                <span>{{time}}</span>
            </div>
            <!-- <div class="title">
                <p>魅族手机</p>
                <p></p>
            </div> -->
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                time:3,
                cleardata:null,
            }
        },
        created(){
            localStorage.one = true;
            this.cleardata = setInterval(() => {
                if (this.time == 0) {
                    this.$router.push('/');
                    localStorage.removeItem("one");
                }else{
                    this.time--;
                }
            }, 1000);
        },
        beforeDestroy(){
            clearInterval(this.cleardata);
        }
    }
</script>

<style lang="scss">
html, body{
    position: relative;
}
.show{
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    background: url('../assets/img/16txq2.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.time{
    width: 100%;
    text-align: right;
    span{
        display: inline-block;
        padding: 0px 15px;
        border-radius: 15px;
        border: 2px solid #fff;
        margin: 5px 5px 0px 0px;
        color: #333;
    }
}
</style>