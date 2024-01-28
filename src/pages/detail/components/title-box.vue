<!-- 瀑布流布局 -->
<template>
  <view>
    <view class="title-box">
      <text class="name">习近平同法国总统马克龙互致贺电</text>
    </view>
    <view class="userinfo-box">
      <text class="time">2024-01-11 12:00:00</text>
      <view class="user-info">
        <image
          class="url"
          src="https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp"
        ></image>
        <text class="txt">李同学</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  onLoad() {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.title-box {
  width: 100%;
  border-left: 8px solid red;
  .name {
    margin-left: 10px;
    font-size: 40rpx;
    font-weight: 600;
  }
}
.userinfo-box {
  margin-top: 8px;
  margin-left: 8px;
  display: flex;
  .time {
    font-size: 24rpx;
    color: #999;
  }
  .user-info {
    margin-left: 60rpx;
    display: flex;
    align-items: center;
    .url {
      width: 40rpx;
      height: 40rpx;
      border-radius: 50%;
    }
    .txt {
      font-size: 24rpx;
      margin-left: 20rpx;
      color: #999;
    }
  }
}
</style>
