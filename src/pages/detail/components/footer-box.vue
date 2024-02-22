<!-- 瀑布流布局 -->
<template>
  <view class="detail-footer-Box">
    <view class="input-box" @tap="onComment">
      <image class="icon" :src="createIcon"></image>
      <text class="txt">评论一下</text>
    </view>
    <view class="icon-box">
      <view class="items" @tap="onLike">
        <image
          class="icon"
          :src="form.isLike ? likeActiveIcon : likeIcon"
        ></image>
        <text class="txt">{{ form.likeCount }}</text>
      </view>
      <view class="items" @tap="onCollect">
        <image
          class="icon"
          :src="form.isCollect ? collectActiveIcon : collectIcon"
        ></image>
        <text class="txt">{{ form.collectCount }}</text>
      </view>
      <view class="items">
        <image class="icon" :src="commentIcon"></image>
        <text class="txt">{{ form.commentCount }}</text>
      </view>
    </view>
  </view>
</template>

<script>
import collectActiveIcon from '@/static/svg/collect-active.svg';
import collectIcon from '@/static/svg/collect.svg';
import likeActiveIcon from '@/static/svg/like-active.svg';
import likeIcon from '@/static/svg/like.svg';
import commentIcon from '@/static/svg/comment.svg';
import createIcon from '@/static/svg/create.svg';
export default {
  props: {
    form: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      collectActiveIcon,
      createIcon,
      collectIcon,
      likeActiveIcon,
      likeIcon,
      commentIcon,
    };
  },
  onLoad() {},
  computed: {
    userId() {
      return uni.getStorageSync('userInfo').id;
    },
  },
  methods: {
    onComment() {
      this.$emit('comment', null, false);
    },
    // 点赞
    onLike() {
      this.$emit('like');
    },
    // 收藏
    onCollect() {
      this.$emit('collect');
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-footer-Box {
  background: #fff;
  border-top: 1rpx solid #efefef;
  padding-top: 10rpx;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: env(safe-area-inset-bottom);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 30rpx;
  padding-right: 30rpx;
  box-sizing: border-box;

  .input-box {
    display: flex;
    align-items: center;
    background: #efefef;
    padding: 10rpx 80rpx 10rpx 50rpx;
    box-sizing: border-box;
    border-radius: 50rpx;
    .icon {
      width: 40rpx;
      height: 40rpx;
    }
    .txt {
      margin-left: 8rpx;
      font-size: 28rpx;
      color: #333;
    }
  }
  .icon-box {
    display: flex;
    align-items: center;
    .items {
      display: flex;
      align-items: center;
      margin-right: 20rpx;
      .icon {
        width: 50rpx;
        height: 50rpx;
      }
      .txt {
        margin-left: 8rpx;
        color: #333;
      }
    }
    .items:last-child {
      margin-right: 0;
    }
  }
}
</style>
