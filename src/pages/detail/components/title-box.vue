<!-- 瀑布流布局 -->
<template>
  <view class="title-box">
    <text class="name">{{ form.title }}</text>
  </view>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  onLoad() {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.title-box {
  width: 100%;
  border-left: 8px solid $main-color;
  padding: 0 20rpx;
  box-sizing: border-box;
  .name {
    display: flex;
    align-items: baseline;
    font-size: 40rpx;
    font-weight: 600;
    word-wrap: break-word;
    word-spacing: 20rpx;
  }
}
</style>
