<template>
  <view class="area-container">
    <text class="title">{{ title }}</text>
    <view class="area-box">
      <view
        class="items"
        @click="onAbout(item)"
        v-for="(item, index) in areaList"
        :key="index"
      >
        <text>{{ item }}</text>
        <image :src="rightIcon"></image>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'Area',
  data() {
    return {
      rightIcon:'http://cdn.lengnuanit.top/stacy/icon/ic_arr_right@2x.png',
      title: '广州',
      areaList: [
        '广州东部地区',
        '广州东南部地区',
        '广州西南部地区',
        '广州西部地区',
        '广州西北部地区',
        '广州北部地区',
        '广州中心地区',
        '广州郊区',
      ],
    };
  },
  methods: {
    onAbout(name) {
      const ad = uni.getStorageSync('ad');
      if (ad) {
        uni.setStorageSync('ad', { ...ad, areaName: name });
        uni.navigateTo({
          url: `/advertising/about/index`,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.area-container {
  padding: 0 50rpx;
  box-sizing: border-box;
  .title {
    margin-top: 18rpx;
    font-size: 72rpx;
    font-family: PingFang;
    font-weight: bold;
    color: #020433;
  }
  .area-box {
    display: flex;
    flex-direction: column;
    .items {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 53rpx 0;
      border-bottom: 1px solid #f0f0f0;
      text {
        font-size: 32rpx;
        font-family: PingFang;
        font-weight: bold;
        color: #020433;
      }
      image {
        width: 13rpx;
        height: 20rpx;
      }
    }
    .items:active {
      opacity: 0.5;
    }
  }
}
</style>
