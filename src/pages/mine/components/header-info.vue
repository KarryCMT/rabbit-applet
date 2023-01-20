<template>
  <view class="header-info-container">
    <image class="header-img" :src="item.coverImg"></image>
    <view class="content">
      <text class="content-text">{{ item.title }}</text>
      <view class="icons">
        <text class="type">iPhone 13</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'header-info',
  props: {
    item: Object,
  },
};
</script>

<style lang="scss">
.header-info-container {
  display: flex;
  margin-top: 20rpx;
  padding: 0 20rpx;
  box-sizing: border-box;
  .header-img{
    width: 180rpx;
    height: 180rpx;
    border-radius: 50%;
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20rpx;
    padding-top: 20rpx;
    padding-bottom: 20rpx;
    .content-text {
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      word-break: break-all;
      width: 100%;
      letter-spacing: 5rpx;
      font-size: 32rpx;
    }
    .icons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 28rpx;
      .type{
        padding: 5rpx 20rpx;
        background:#dbdbdb;
        border-radius: 40rpx;
      }
      .time {
        color: #999;
      }
      .comment {
        color: #999;
      }
    }
  }

  .content-image {
    display: block;
    width: 200rpx;
    border-radius: 8rpx;
  }
}
</style>
