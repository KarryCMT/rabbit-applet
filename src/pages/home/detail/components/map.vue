<template>
  <view class="map-container">
    <view class="map-border"></view>
    <!-- 地图组件 经纬度 -->
    <map
      style="width: 100%; height: 100%"
      :latitude="options.latitude"
      :longitude="options.longitude"
    />
  </view>
</template>
<script>
export default {
  name: "Map",
  props: {
    options: {
      type: Object,
      default: () => {},
    },
     GetLocationAddress: {
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
.map-container {
  position: relative;
  width: 100%;
  height: 560rpx;
  margin-bottom: 70rpx;

  .map-border {
    position: absolute;
    transform: translate(50%,50%);
    width: 324rpx;
    height: 324rpx;
    z-index: 1;
    border-radius: 50%;
    background: rgba(2, 4, 51, 0.08);
    border: 4rpx solid #0f73ee;
  }
}
</style>