<template>
  <view class="tabs-box">
    <!-- 左边价格 -->
    <view class="price-box">
      <view class="price">${{deposit}}<text class="month">每月</text></view>
      <view class="cash-pledge">(${{monthRent}} 押金)</view>
    </view>
    <!-- 右边按钮 -->
    <view class="btn-box"> 请求联系对方 </view>
  </view>
</template>
<script>
export default {
  name: "Tabs",
  props: {
    deposit: {
      type: Number,
      default: "800",
    },
     monthRent: {
      type: Number,
      default: "800",
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
.tabs-box {
  border-top: 2px solid #f0f0f0;
  display: flex;
  height: 135rpx;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;

  .price-box {
    display: flex;
    flex-direction: column;
   align-items: center;
    margin-right: 56rpx;
    .price {
      font-size: 36rpx;
      font-family: Montserrat;
      font-weight: bold;
      color: #020433;
    }
    .month {
      font-weight: 500;
      margin-left: 5rpx;
    }
    .cash-pledge {
      font-size: 24rpx;
      font-weight: 500;
      color: #404b69;
    }
  }
  .btn-box {
    color: #ffffff;
    text-align: center;
    line-height: 100rpx;
    border-radius: 10rpx;
    width: 372rpx;
    height: 100rpx;
    background: linear-gradient(135deg, #0f73ee 0%, #c644fc 100%);
  }
}
</style>