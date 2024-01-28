<template>
  <view class="footer-box">
    <view class="left" @click="onDraft">保存为草稿</view>
    <view class="right" @click="onPublish"> 发布帖子 </view>
  </view>
</template>

<script>
import addIcon from '@/static/svg/add.svg';
import closeIcon from '@/static/svg/close.svg';
export default {
  data() {
    return {
      closeIcon,
      addIcon,
    };
  },
  methods: {
    // 发布
    onPublish() {
      this.$emit('publish')
    },

    // 保存为草稿
    onDraft() {
      this.$emit('draft')
    },
  },
};
</script>

<style lang="scss">
.footer-box {
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 99;
  left: 0;
  right: 0;
  padding-bottom: env(safe-area-inset-bottom);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20rpx;
  padding-right: 20rpx;
  box-sizing: border-box;
  .left {
    padding-left: 30rpx;
    font-size: 28rpx;
    color: #333;
  }
  .left:active {
    opacity: 0.5;
  }
  .right {
    width: 490rpx;
    height: 90rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 60rpx;
    background: #ec302c;
  }
  .right:active {
    opacity: 0.5;
  }
}
</style>
