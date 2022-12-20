<template>
  <swiper
    class="swiper-container"
    circular
    autoplay
  >
    <swiper-item class="swiper-item" v-for="(item, index) in list" :key="index">
      <image :src="item"></image>
    </swiper-item>
  </swiper>
</template>

<script>
export default {
  name: 'CoverSwiper',
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 600rpx;
  .swiper-item {
    image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
