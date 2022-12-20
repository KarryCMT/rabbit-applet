<template>
  <view class="reserve-box">
    <view class="content">
      <text class="desc">非常漂亮的两房户型，独立卫生间1房间闲置求合租。</text>
      <text class="price">{{ '¥1200' }} 每月</text>
    </view>
    <view class="btn" @click="onReserve">马上预订</view>
  </view>
</template>

<script>
export default {
  name: 'Reserve',
  props: {
    detail: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    onReserve() {
      this.$emit('change', this.detail);
    },
  },
};
</script>

<style></style>

<style lang="scss" scoped>
.reserve-box {
  position: sticky;
  top: 0;
  width: 100%;
  height: 148rpx;
  background: #f7f9ff;
  box-shadow: 0px 4rpx 8rpx 0px rgba(2, 4, 51, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48rpx;
  box-sizing: border-box;
  .content {
    display: flex;
    flex-direction: column;
    padding-right: 46rpx;
    .desc {
      font-size: 26rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #020433;
    }
    .price {
      font-size: 24rpx;
      font-family: PingFang;
      font-weight: 500;
      color: #020433;
    }
  }
  .btn {
    width: 208rpx;
    height: 84rpx;
    background: linear-gradient(135deg, #0f73ee 0%, #c644fc 100%);
    border-radius: 12rpx;
    font-size: 28rpx;
    font-family: PingFang;
    font-weight: bold;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn:active {
    opacity: 0.5;
  }
}
</style>
