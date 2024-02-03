<template>
  <!-- 我的 -->
  <view class="func-menu-container">
    <view class="menu-items" v-for="(item, index) in menus" :key="index">
      <image class="icon" :src="item.icon"></image>
      <text class="name">{{ item.name }}</text>
    </view>
  </view>
</template>

<script>
import commentIcon from '@/static/svg/comment-icon.svg';
import collectIcon from '@/static/svg/collect-icon.svg';
import postIcon from '@/static/svg/post-icon.svg';
import viewIcon from '@/static/svg/view-icon.svg';
export default {
  name: 'FuncMenu',
  data() {
    return {
      menus: [
        {
          icon: commentIcon,
          name: '评论',
        },
        {
          icon: postIcon,
          name: '帖子',
        },
        {
          icon: collectIcon,
          name: '收藏',
        },
        {
          icon: viewIcon,
          name: '足迹',
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.func-menu-container {
  width: 100%;
  height: 166rpx;
  background: #fff;
  display: flex;
  justify-content: space-around;
  border-bottom: 24rpx solid #f6f6f6;
  .menu-items {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    .icon {
      width: 90rpx;
      height: 90rpx;
      user-select: none;
    }
    .name {
      margin-top: 5rpx;
      font-size: 30rpx;
      font-weight: 400;
      user-select: none;
      color: #252525;
    }
  }
}
</style>
