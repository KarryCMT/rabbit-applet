<template>
  <!-- 重置密码 -->
  <view class="interest-container">
    <view class="content">
      <image :src="interestPng" />
    </view>
    <view class="login-box">
      <!-- <text class="title">成功！</text> -->
      <text class="desc">你的兴趣是什么？</text>
    </view>
    <view class="item-box">
      <view
        :class="[item.isSelect ? 'items-active' : 'items']"
        @click="onInterest"
        v-for="(item, index) in itemList"
        :key="index"
      >
        {{ item.name }}
      </view>
    </view>
    <view class="footer-box">
      <button @click="onSuccess">完成</button>
    </view>
  </view>
</template>

<script>
export default {
  name: 'interest',
  components: {
  },
  data() {
    return {
      interestPng:'http://cdn.lengnuanit.top/stacy/register/interest-icon.png',
      height: 0,
      itemList: [
        {
          name: '美食',
          isSelect: false,
          value: 1,
        },
        {
          name: '体育&健身',
          isSelect: false,
          value: 2,
        },
        {
          name: '派对',
          isSelect: false,
          value: 3,
        },
        {
          name: '看书阅读',
          isSelect: false,
          value: 3,
        },
        {
          name: '夜生活',
          isSelect: false,
          value: 3,
        },
        {
          name: '听音乐',
          isSelect: true,
          value: 3,
        },
        {
          name: '旅游',
          isSelect: false,
          value: 3,
        },
        {
          name: '玩游戏',
          isSelect: false,
          value: 3,
        },
        {
          name: '看电视',
          isSelect: false,
          value: 3,
        },
      ],
    };
  },
  methods: {
    onSuccess() {
      uni.navigateTo({
        url: `/base/register/success/index`,
      });
    },
  },
};
</script>

<style lang="scss">
.interest-container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #0f73ee 0%, #c644fc 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 116rpx;
    width: 680rpx;
    height: 680rpx;
    background: url('http://cdn.lengnuanit.top/stacy/success/circle.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    image {
      width: 240rpx;
      height: 240rpx;
    }
  }
  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      margin-top: 35rpx;
      font-size: 60rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #ffffff;
    }
    .desc {
      font-size: 36rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #ffffff;
    }
  }
  .item-box {
    width: 100%;
    display: flex;
    padding: 0 64rpx 0 48rpx;
    flex-wrap: wrap;
    box-sizing: border-box;
    .items,
    .items-active {
      margin-top: 32rpx;
      padding: 30rpx 48rpx;
      background: #ffffff;
      box-shadow: 0px 4rpx 10rpx 0px rgba(0, 0, 0, 0.05);
      border-radius: 12rpx;
      display: flex;
      margin-left: 16rpx;
      align-items: center;
      font-size: 2r8px;
      font-family: PingFang;
      font-weight: bold;
      color: #020433;
      image:active {
        opacity: 0.5;
      }
    }
    .items-active {
      border: 2rpx solid #ffffff;
      background: rgba(255, 255, 255, 0);
      color: #ffffff;
    }
    .items:active,
    .items-active:active {
      opacity: 0.5;
    }
  }
  .footer-box {
    position: fixed;
    bottom: 90rpx;
    width: 100%;
    padding: 0 48rpx;
    left: 0;
    right: 0;
    box-sizing: border-box;
    button {
      width: 100%;
      height: 92rpx;
      background: #ffffff;
      font-size: 28rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #020433;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button:active{
      opacity: .5;
    }
  }
}
</style>
