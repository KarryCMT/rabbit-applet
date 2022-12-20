<template>
  <view class="recomend-box">
    <!-- 图片 -->
    <view class="img-box">
      <swiper indicator-dots autoplay circular enable-flex>
        <swiper-item>
          <image :src="item.room" class="room-img" />
          <image class="collect" :src="item.collect"></image>
        </swiper-item>
      </swiper>
    </view>
    <!-- 图标文字部分 -->
    <view class="icon-title-box">
      <image class="verify-icon" :src="item.IconVerify"></image>
      <text class="title">{{ item.attestation }}</text>
      <text>{{ item.house }}</text>
    </view>
    <!-- 详情部分 -->
    <h6 class="detail">{{ item.detail }}</h6>
    <!-- 价格部分 -->
    <view class="monthly-box">
      <text class="price">{{ item.price }}</text>
      <text>{{ item.month }}</text>
    </view>
    <!-- 有效期 -->
    <view class="indate-box">
      <text>{{ item.deadline }}</text>
      <text>{{ item.tenancy }}</text>
    </view>
  </view>
</template>
<script>
export default {
  name: "Recomend",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.recomend-box {
  display: inline-block;
  flex-direction: column;
  padding-left: 40rpx;
  width: 398rpx;
  .img-box {
    position: relative;
    margin-top: 52rpx;
    width: 100%;
    height: 256rpx;
    .room-img {
      width: 100%;
      height: 100%;
    }
    .collect {
      position: absolute;
      right: 15rpx;
      top: 10rpx;
      width: 48rpx;
      height: 44rpx;
      background: rgba(2, 4, 51, 0.08);
    }
  }
  .icon-title-box {
     margin-top: 59rpx;
    display: flex;
    width: 157px;
    font-size: 20px;
    font-weight: 500;
    .verify-icon {
      width: 24rpx;
      height: 28rpx;
      margin: 0 13rpx 0rpx;
    }
    text {
      font-size: 20rpx;
      padding-right: 10rpx;
      font-family: PingFang;
      color: #08c299;
    }
  }
  .detail {
    margin-top: 10rpx;
    width: 100%;
    height: 64rpx;
    font-size: 28rpx;
    font-weight: bold;
    white-space: normal;
    color: #020433;
  }
  .monthly-box {
    display: flex;
    margin-top: 14rpx;

    height: 26rpx;
    font-size: 26rpx;
    font-family: Montserrat-Regular;
    font-weight: 400;
    color: #020433;
    .price {
      margin-right: 10rpx;
    }
  }
  .indate-box {
    margin-bottom: 71rpx;
    display: flex;
    margin-top: 13rpx;
    width: 189rpx;
    height: 20rpx;
    font-size: 20rpx;
    color: #404b69;
    text {
      margin-right: 8rpx;
    }
  }
}
</style>