<template>
  <view class="mine-header-info-container">
    <view class="left-box" v-if="isLogin">
      <image
        src="https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp"
        class="image"
      ></image>
      <view class="info-box">
        <view class="username">
          <text class="name">{{ '小狐狸不吃素' }}</text>
          <image class="icon" :src="rightIcon"></image>
        </view>
      </view>
    </view>
    <view class="right-box" v-if="isLogin">
      <view class="btn" @click="onPublish">发布</view>
    </view>
    <view class="login-box" v-if="!isLogin">
      <button class="btn" @click="onLogin">立即登录</button>
    </view>
  </view>
</template>

<script>
import rightIcon from '@/static/svg/right-icon.svg';
export default {
  name: 'header-info',
  props: {
    item: Object,
  },
  computed: {
    isLogin() {
      return false;
    },
  },
  data() {
    return {
      rightIcon,
    };
  },
  methods: {
    onPublish() {
      uni.navigateTo({
        url: '/pages/publish/index',
      });
    },
    onLogin() {
      this.$emit('login');
    },
  },
};
</script>

<style lang="scss">
.mine-header-info-container {
  display: flex;
  width: 100%;
  height: 200rpx;
  box-sizing: border-box;
  padding: 0 20rpx;
  align-items: center;
  justify-content: space-between;
  .left-box {
    display: flex;
    align-items: center;
    .image {
      width: 120rpx;
      height: 120rpx;
      background: #0868f9;
      line-height: 120rpx;
      text-align: center;
      border-radius: 50%;
      color: #fff;
      border: 4rpx solid #fff;
      font-size: 36rpx;
    }
    .info-box {
      padding-left: 20rpx;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .username {
        cursor: pointer;
        display: flex;
        align-items: center;

        .name {
          color: #333;
          font-size: 32rpx;
        }
        .icon {
          margin-left: 20rpx;
          color: #333;
          width: 30rpx;
          height: 30rpx;
        }
      }
    }
  }
  .right-box {
    .btn {
      cursor: pointer;
      width: 120rpx;
      height: 60rpx;
      border-radius: 60rpx;
      color: rgb(255, 255, 255);
      font-family: PingFang SC;
      font-size: 26rpx;
      font-weight: 400;
      line-height: 60rpx;
      letter-spacing: 0%;
      text-align: center;
      /* 主色 */
      background: #eecd50;
      border: 2px solid #fff;
    }
    .btn:active {
      opacity: 0.5;
    }
  }
  .login-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn {
      background-color: $main-color;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0rpx 60rpx;
      box-sizing: border-box;
      font-size: 28rpx;
    }
    button:active {
      opacity: 0.5;
    }
  }
}
</style>
