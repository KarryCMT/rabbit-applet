<template>
  <view class="close-container" @click="onBack">
    <image class="icon" :src="closePng" />
  </view>
</template>
<script>
export default {
  name: 'Close',
  data() {
    return {
      closePng:'http://cdn.lengnuanit.top/stacy/icon/close-icon.png',
    };
  },
  created() {},
  methods: {
    onBack(){
     this.$emit('back')
    }
  },
};
</script>
<style lang="scss" scoped>
.close-container {
  position: fixed;
  left: 48rpx;
  z-index: 9;
  bottom: 592rpx;
  height: 84rpx;
  width: 84rpx;
  background: #ffffff;
  box-shadow: 0px 10rpx 20rpx 0px rgba(0, 0, 0, 0.08);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    width: 24rpx;
    height: 24rpx;
  }
  .icon:active {
    opacity: 0.5;
  }
}
</style>
