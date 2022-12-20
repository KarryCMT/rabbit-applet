<template>
  <!-- 重置密码 -->
  <view class="very-good-container">
    <view class="content">
      <image :src="successPng" />
    </view>
    <view class="login-box">
      <text class="title">非常好！</text>
      <text class="desc">我们已经根据你的反馈信息，为你推荐了适合的用户给你，请返回首页查看</text>
      <button @click="onHome">好的，马上查看</button>
    </view>
  </view>
</template>

<script>
export default {
  name: 'VeryGood',
  components: {
  },
  data() {
    return {
      successPng:'http://cdn.lengnuanit.top/stacy/success/ic_success.png',
      height: 0,
    };
  },
  methods: {
    onHome() {
      uni.navigateTo({
        url: `/pages/home/home/index`,
      });
    },
  },
};
</script>

<style lang="scss">
.very-good-container {
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
      padding: 0 56rpx;
      text-align: center;
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
