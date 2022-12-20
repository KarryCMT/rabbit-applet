<template>
  <view class="progress-bar-container" :style="{ width: width + '%' }"> </view>
</template>
<script>
export default {
  name: 'ProgressBar',
  props: {
    width: {
      type: Number,
      default: 20,
    },
    top: {
      type: Number,
      default: 0,
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
.progress-bar-container {
  position: sticky;
  top: 0;
  z-index: 10;
  height: 4rpx;
  background: linear-gradient(90deg, #0f73ee 0%, #c644fc 100%);
}
</style>
