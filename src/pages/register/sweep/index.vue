<template>
  <!-- 重置密码 -->
  <view class="sweep-container">
    <view class="content">
      <image :src="sweepPng" />
    </view>
    <view class="login-box">
      <!-- <text class="title">成功！</text> -->
      <text class="desc">你多久打扫一次房间？</text>
    </view>
    <view class="item-box">
      <view
        class="items"
        @click="onSmoke"
        v-for="(item, index) in itemList"
        :key="index"
      >
        <image :src="item.isSelect ? yesPng : noPng" />
        <text>{{ item.name }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "Sweep",
  components: {
  },
  data() {
    return {
      sweepPng:"http://cdn.lengnuanit.top/stacy/register/sweep-icon.png",
      yesPng:"http://cdn.lengnuanit.top/stacy/register/yes.png",
      noPng:"http://cdn.lengnuanit.top/stacy/register/no.png",
      height: 0,
      itemList: [
        {
          name: "从不",
          isSelect: false,
          value:1,
        },
        {
          name: "每月一次",
          isSelect: false,
          value:2,
        },
        {
          name: "每周一次",
          isSelect: false,
          value:3,
        },
        {
          name: "一两天一次",
          isSelect: false,
          value:4,
        },
      ],
    };
  },
  methods: {
    onSmoke() {
      uni.navigateTo({
        url: `/base/register/smoke/index`,
      });
    },
  },
};
</script>

<style lang="scss">
.sweep-container {
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
    background: url("http://cdn.lengnuanit.top/stacy/success/circle.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    image {
      width: 203rpx;
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
    flex-direction: column;
    padding: 0 64rpx;
    box-sizing: border-box;
    .items {
      margin-top: 32rpx;
      width: 100%;
      height: 112rpx;
      background: #ffffff;
      box-shadow: 0px 4rpx 10rpx 0px rgba(0, 0, 0, 0.05);
      border-radius: 12rpx;
      display: flex;
      align-items: center;
      image {
        margin-left: 26rpx;
        width: 59rpx;
        height: 59rpx;
      }
      text {
        margin-left: 28rpx;
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #020433;
      }
      image:active {
        opacity: 0.5;
      }
    }
     .items:active{
      opacity: .5;
     }
  }
}
</style>
