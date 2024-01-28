<template>
  <view class="mine-item-container">
    <view class="items" @click="onItems(item)" v-for="(item, index) in tabsArr" :key="index">
      <view class="left-box">
        <image class="icon" :src="item.icon"></image>
        <text class="name">{{ item.name }}</text>
      </view>
      <image class="right" :src="rightIcon"></image>
    </view>
  </view>
</template>

<script>
import rightIcon from '@/static/svg/right-icon.svg';
import followIcon from '@/static/svg/follow.svg';
import messageIcon from '@/static/svg/message.svg';
import postIcon from '@/static/svg/post.svg';
export default {
  name: 'mine-item',
  props: {},
  data() {
    return {
      rightIcon,
      tabsArr: [
        {
          name: '我的消息',
          icon: messageIcon,
          path:'/pages/message/index'
        },
        {
          name: '我的关注',
          icon: followIcon,
          path:'/pages/follow/index'
        },
        {
          name: '我的草稿',
          icon: postIcon,
          path:'/pages/draft/index'
        },
      ],
    };
  },
  methods:{
    onItems({path}){
      uni.navigateTo({
        url:path
      })
    }
  }
};
</script>

<style lang="scss">
.mine-item-container {
  margin-top: 17rpx;
  display: flex;
  width: 100%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  /* 矩形 941 */
  flex-direction: column;
  border-radius: 12rpx;

  /* 白色 */
  background: rgb(255, 255, 255);
  .items {
    display: flex;
    height: 100rpx;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #E6E6E6;
    padding: 0 16rpx;
    .left-box {
      display: flex;
      align-items: center;
      .icon {
        width: 75rpx;
        height: 75rpx;
      }
      .name {
        margin-left: 20rpx;
        color: #333;
        font-size: 28rpx;
      }
    }
    .right {
      width: 40rpx;
      height: 40rpx;
      color: #999;
    }
  }
  .items:last-child{
    border-bottom: none;
  }
}
</style>
