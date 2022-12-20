<template>
  <!-- 重置密码 -->
  <view class="welcome-container">
    <view class="content">
      <image :src="welcomePng" />
    </view>
    <view class="login-box">
      <text class="title">欢迎使用Stacy!</text>
      <text class="desc">现在我们有5个问题可以帮助你与同心室友相匹配</text>
      <button @click="onSweep">马上开始</button>
    </view>
  </view>
</template>

<script>
export default {
  name: 'Welcome',
  components: {
  },
  data() {
    return {
      welcomePng:'http://cdn.lengnuanit.top/stacy/register/welcome-icon.png',
    };
  },
  methods: {
    onSweep( ) {
     uni.navigateTo({
      url:`/base/register/sweep/index`
     })
    },
  },
};
</script>

<style lang="scss">
.welcome-container {
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
      width: 210rpx;
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
