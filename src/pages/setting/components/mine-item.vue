<template>
  <view class="mine-item-container">
    <!-- 头像 -->
    <view class="items" @click="onItems(item)">
      <view class="left-box">
        <text class="name">头像</text>
      </view>
      <view class="right-box">
        <image class="avatar" :src="userInfo.avatar"></image>
        <image class="icon" :src="rightIcon"></image>
      </view>
    </view>
    <!-- 姓名 -->
    <view class="items" @click="onItems(item)">
      <view class="left-box">
        <text class="name">姓名</text>
      </view>
      <view class="right-box">
        <text class="text">{{ userInfo.name || '' }}</text>
        <image class="icon" :src="rightIcon"></image>
      </view>
    </view>
    <!-- 昵称 -->
    <view class="items" @click="onItems(item)">
      <view class="left-box">
        <text class="name">昵称</text>
      </view>
      <view class="right-box">
        <text class="text">{{ userInfo.nickName || '' }}</text>
        <image class="icon" :src="rightIcon"></image>
      </view>
    </view>
    <!-- 邮箱 -->
    <view class="items" @click="onItems(item)">
      <view class="left-box">
        <text class="name">邮箱</text>
      </view>
      <view class="right-box">
        <text class="text">{{ userInfo.email || '' }}</text>
        <image class="icon" :src="rightIcon"></image>
      </view>
    </view>
    <!-- 电话号码 -->
    <view class="items" @click="onItems(item)">
      <view class="left-box">
        <text class="name">电话号码</text>
      </view>
      <view class="right-box">
        <text class="text">{{ userInfo.phone || '' }}</text>
        <image class="icon" :src="rightIcon"></image>
      </view>
    </view>
    <!-- 性别 -->
    <view class="items" @click="onItems(item)">
      <view class="left-box">
        <text class="name">性别</text>
      </view>
      <view class="right-box">
        <text class="text">{{
          userInfo.gender === 1 ? '男' : userInfo.gender === 2 ? '女' : '未知'
        }}</text>
        <image class="icon" :src="rightIcon"></image>
      </view>
    </view>
    <!--  -->
    <view class="back-box" @click="onOpenLogin">
      <view class="center-box">
        <text class="name">退出登录</text>
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
      followIcon,
      messageIcon,
      postIcon,
      promptIcon,
    };
  },
  computed: {
    userInfo() {
      return uni.getStorageSync('userInfo') || {};
    },
  },
  methods: {
    onItems({ path }) {
      uni.navigateTo({
        url: path,
      });
    },
    // 退出登录
    onOpenLogin() {
      uni.clearStorageSync();
      uni.switchTab({
        url: '/pages/mine/index',
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
    .right-box {
      display: flex;
      align-items: center;
      .avatar {
        margin-right: 20rpx;
        width: 65rpx;
        height: 65rpx;
        border-radius: 50%;
      }
      .text {
        margin-right: 20rpx;
        font-size: 30rpx;
        color: #333;
      }
      .icon {
        width: 30rpx;
        height: 27rpx;
      }
    }
  }
  .back-box {
    display: flex;
    height: 100rpx;
    align-items: center;
    justify-content: center;
    .center-box {
      display: flex;
      justify-content: center;
      align-items: center;
      .name {
        margin-left: 20rpx;
        color: #333;
        font-size: 28rpx;
      }
    }
    .center-box:active {
      opacity: 0.5;
    }
  }
  .items:last-child {
    border-bottom: none;
  }
  .items:active {
    opacity: 0.5;
  }
}
</style>
