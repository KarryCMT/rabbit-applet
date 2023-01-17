<template>
  <!-- 首页 -->
  <view class="index-container">
    首页
  </view>
</template>

<script>
export default {
  name: 'RbIndex',
  components: {},
  data() {
    return {
      unreadRows: 0,
    };
  },
  methods: {
    toPage(name, url) {
      uni.navigateTo({
        url,
      });
    },
  },
};
</script>

<style lang="scss">
.index-container {
  width: 100%;
  height: 100%;
  background-color: #eeeef4;
}
</style>
