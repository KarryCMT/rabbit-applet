<template>
  <view class="mine-version-container">
    <view class="text">
      <text>——————</text>
      <text>{{ ` ${'v1.0.0'} ` }}</text>
      <text>——————</text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'mine-version',
  props: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.mine-version-container {
  width: 100%;
  margin-top: 47rpx;
  display: flex;
  justify-content: center;
  .text {
    color: #f3f3f3;
  }
}
</style>
