<template>
  <view class="empty-main-container">
    <image class="image" :src="empty"></image>
    <text class="text">{{ desc }}</text>
  </view>
</template>

<script>
import empty from '@/static/svg/empty.svg';
export default {
  name: 'RbEmpty',
  props: {
    desc: {
      type: String,
      default: '暂无数据',
    },
  },
  data() {
    return {
      empty,
    };
  },
  computed: {},
  created() {},
  watch: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.empty-main-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .image {
    margin-top: 100rpx;
    width: 280rpx;
    height: 300rpx;
  }
  .text{
    color: #d7dadf;
    font-weight: 200;
    font-size: 28rpx;
    word-spacing: 30rpx;
  }
}
</style>
