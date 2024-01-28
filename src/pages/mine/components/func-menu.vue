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
import collectIcon from "@/static/svg/collect-icon.svg";
import postIcon from "@/static/svg/post-icon.svg";
import viewIcon from "@/static/svg/view-icon.svg";
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
  /* 矩形 940 */
  width: 100%;
  height: 186rpx;
  border-radius: 12rpx;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  /* 白色 */
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: space-around;
  .menu-items {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      width: 90rpx;
      height: 90rpx;
    }
    .name {
      margin-top: 5rpx;
      font-size: 26rpx;
      color: #333;
    }
  }
}
</style>
