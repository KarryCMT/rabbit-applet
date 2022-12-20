<template>
  <!-- 重置密码 -->
  <view class="success-container">
    <view class="content">
      <image :src="successPng" />
    </view>
    <view class="login-box">
      <text class="title">成功！</text>
      <text class="desc">您已成功更改密码。登录时请使用新密码。</text>
      <button @click="onLogin">马上登录</button>
    </view>
  </view>
</template>

<script>
export default {
  name: 'reset',
  components: {
  },
  data() {
    return {
      successPng:'http://cdn.lengnuanit.top/stacy/success/ic_success.png',
    };
  },
  methods: {
    onLogin( ) {
     uni.navigateTo({
      url:`/base/steps/target/index`
     })
    },
  },
};
</script>

<style lang="scss">
.success-container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #0f73ee 0%, #c644fc 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 116rpx;
    width: 680rpx;
    height: 680rpx;
    background: url('http://cdn.lengnuanit.top/stacy/success/circle.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    image {
      width: 240rpx;
      height: 240rpx;
    }
  }
  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      margin-top: 35rpx;
      font-size: 60rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #ffffff;
    }
    .desc {
      margin-top: 38rpx;
      font-size: 28rpx;
      font-family: PingFang;
      font-weight: 500;
      color: #ffffff;
    }
    button {
      margin-top: 127rpx;
      width: 398rpx;
      height: 100rpx;
      background: #ffffff;
      font-size: 28rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #020433;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button:active{
      opacity: .5;
    }
  }
}
</style>
