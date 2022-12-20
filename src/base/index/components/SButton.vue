<template>
  <view class="s-button-container">
    <view class="btn" @click="onLogin">{{ title }}</view>
  </view>
</template>
<script>
export default {
  name: 'SButton',
  props: {
    title: {
      type: String,
      default: '马上开始',
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onLogin() {
      uni.navigateTo({
        url: `/base/login/index`,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.s-button-container {
  width: 100%;
  position: fixed;
  bottom: 200rpx;
  left: 0;
  right: 0;
  padding: 0 64rpx;
  box-sizing: border-box;
  .btn {
    width: 100%;
    height: 100rpx;
    border-radius: 8rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #0f73ee 0%, #c644fc 100%);
    font-size: 28rpx;
    font-family: PingFang;
    font-weight: bold;
    color: #ffffff;
  }
  .btn:active {
    opacity: 0.5;
  }
}
</style>
