<template>
  <view class="footer-btn-box">
    <view class="btn" @click="onBtn">{{btnTitle}}</view>
  </view>
</template>

<script>
export default {
    name:'FooterBtn',
    props:{
      btnTitle:{
        type:String,
        default:'下一步'
      }
    },
    data(){
        return {}
    },
    methods:{
        onBtn(){
            this.$emit('change')
        }
    }
};
</script>

<style lang="scss" scoped>
.footer-btn-box {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  width: 100%;
  height: 200rpx;
  box-shadow: 0 2rpx 12rpx 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  padding-bottom: env(safe-area-inset-bottom);
  padding: 0 48rpx;
  box-sizing: border-box;
  .btn {
    margin-top: 24rpx;
    width: 100%;
    height: 100rpx;
    border-radius: 10rpx;
    background: linear-gradient(135deg, #0f73ee 0%, #c644fc 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28rpx;
    font-family: PingFang;
    font-weight: bold;
    color: #ffffff;
  }
  .btn:active{
    opacity: .5;
  }
}
</style>
