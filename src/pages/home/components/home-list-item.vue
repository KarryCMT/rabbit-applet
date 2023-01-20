<template>
  <view class="home-list-item-container">
    <view class="content">
      <text class="content-text">{{ item.title }}</text>
      <view class="icons">
        <text class="time">{{ item.time }}</text>
        <text class="comment">{{ item.commentCount || 0 }} 评</text>
      </view>
    </view>
    <image class="content-image" mode="widthFix" :src="item.coverImg"></image>
  </view>
</template>

<script>
export default {
  name: 'home-list-item',
  props: {
    item: Object,
  },
};
</script>

<style lang="scss">
.home-list-item-container {
  display: flex;
  margin-top: 20rpx;
  padding: 0 20rpx;
  box-sizing: border-box;
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 20rpx;
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
