<template>
  <view class="mine-item-container">
    <view
      class="items"
      @click="onItems(item)"
      v-for="(item, index) in tabsArr"
      :key="index"
    >
      <view class="left-box">
        <image class="icon" :src="item.icon"></image>
        <text class="name">{{ item.name }}</text>
      </view>
      <view class="right-box">
        <text class="text">{{ item.text }}</text>
        <image class="icon" :src="rightIcon"></image>
      </view>
    </view>
  </view>
</template>

<script>
import rightIcon from '@/static/svg/right.svg';
import followIcon from '@/static/svg/collection.svg';
import messageIcon from '@/static/svg/messages.svg';
import postIcon from '@/static/svg/suggestion.svg';
import promptIcon from '@/static/svg/prompt.svg';
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
          path: '/pages/message/index',
        },
        {
          name: '我的关注',
          icon: followIcon,
          path: '/pages/follow/index',
        },
        {
          name: '我的草稿',
          icon: postIcon,
          path: '/pages/draft/index',
        },
        {
          name: '关于',
          icon: promptIcon,
          text:'v1.0.0',
          path: '/pages/about/index',
        },
      ],
    };
  },
  methods: {
    onItems({ path }) {
      uni.navigateTo({
        url: path,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.mine-item-container {
  display: flex;
  width: 100%;
  /* 矩形 941 */
  flex-direction: column;

  border-bottom: 20rpx solid #f6f6f6;
  /* 白色 */
  background: #fff;
  .items {
    display: flex;
    height: 100rpx;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f9f9f9;
    padding: 0 16rpx;
    .left-box {
      display: flex;
      align-items: center;
      .icon {
        width: 55rpx;
        height: 55rpx;
      }
      .name {
        margin-left: 20rpx;
        color: #333;
        font-size: 28rpx;
      }
    }
    .right-box{
      display: flex;
      align-items: center;
      .text{
        font-size: 28rpx;
        color: #bababa;
      }
      .icon {
      width: 30rpx;
      height: 27rpx;
    }
    }

  }
  .items:last-child {
    border-bottom: none;
  }
  .items:active{
    opacity: .5;
  }
}
</style>
