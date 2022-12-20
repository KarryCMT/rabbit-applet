<template>
  <view class="filter-container" :style="{bottom:offset+'rpx'}">
    <view
      class="content"
      :style="{ width: type === 'map' ? '348rpx' : '174rpx' }"
    >
      <view v-if="type === 'map'" class="map" @click="onMap">
        <text>地图</text>
        <image :src="mapPng" />
      </view>
      <view class="line" v-if="type == 'map'"></view>
      <view
        v-if="type === 'filter'"
        class="filter"
        :style="{ width: type === 'filter' ? '100%' : '50%' }"
        @click="onFilter"
      >
        <text>筛选</text>
        <image :src="filterPng" />
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: 'Filter',
  props: {
    type: {
      type: String,
      default: 'map',
    },
    offset: {
      type: String,
      default: '48',
    },
  },
  data() {
    return {
      filterPng:'http://cdn.lengnuanit.top/stacy/icon/ic_filter.png',
      mapPng:'http://cdn.lengnuanit.top/stacy/icon/ic_map.png',
    };
  },
  created() {},
  methods: {
    onMap() {
      this.$emit('map');
    },
    onFilter() {
      this.$emit('filter');
    },
  },
};
</script>
<style lang="scss" scoped>
.filter-container {
  position: fixed;
  bottom: 48rpx;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 348rpx;
    height: 80rpx;
    background: #ffffff;
    box-shadow: 0px 4rpx 10rpx 0px rgba(0, 0, 0, 0.05);
    border-radius: 40rpx;
    display: flex;
    align-items: center;
    .map {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      text {
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: bold;
        color: #020433;
      }
      image {
        margin-left: 18rpx;
        width: 32rpx;
        height: 32rpx;
      }
    }
    .line {
      width: 2rpx;
      height: 48rpx;
      background: #f0f0f0;
    }
    .filter {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text {
        font-size: 28rpx;
        font-family: PingFang;
        font-weight: bold;
        color: #020433;
      }
      image {
        margin-left: 27rpx;
        width: 32rpx;
        height: 32rpx;
      }
    }
    .map:active,
    .filter:active {
      opacity: 0.5;
    }
  }
}
</style>
