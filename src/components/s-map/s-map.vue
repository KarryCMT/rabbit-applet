<template>
  <view class="map-container">
    <!-- 地图组件 经纬度 -->
    <map
      :style="{ width: options.width, height: options.height }"
      :latitude="options.latitude"
      :longitude="options.longitude"
      :markers="markers"
      @markertap="markertap"
    />
  </view>
</template>
<script>
export default {
  name: 'Map',
  props: {
    options: {
      type: Object,
      default: () => {},
    },
    markers: {
      type: Array,
      default: () => {
        return [
        ];
      },
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    markertap(e){
      console.log(e,'markertap');
      
    }
  },
};
</script>
<style lang="scss" scoped>
.map-container {
  width: 100%;
}
</style>
