<template>
  <view class="search-container">
    <view class="content">
      <image class="icon" :src="searchPng" />
      <input
        :value="keywords"
        @input="change"
        class="txt"
        placeholder-class="txt"
        placeholder="搜索..."
      />
    </view>
  </view>
</template>
<script>
export default {
  name: 'Search',
  model: {
    prop: 'keywords', //绑定的值，通过父组件传递
    event: 'change', //自定义时间名
  },
  data() {
    return {
      searchPng:'http://cdn.lengnuanit.top/stacy/icon/search-icon.png',
      keywords: '',
    };
  },
  created() {},
  methods: {
    change(e){
     this.$emit('input',e.target.value)
    }
  },
};
</script>
<style lang="scss" scoped>
.search-container {
  position: fixed;
  z-index: 9;
  top: 40rpx;
  left: 0;
  right: 0;
  padding: 0 48rpx;
  .content {
    width: 100%;
    height: 84rpx;
    background: #ffffff;
    box-shadow: 0px 10rpx 20rpx 0px rgba(0, 0, 0, 0.08);
    border-radius: 12rpx;
    display: flex;
    align-items: center;
    padding: 0 33rpx;
    box-sizing: border-box;
    .icon {
      width: 32rpx;
      height: 32rpx;
    }
    .txt {
      margin-left: 33rpx;
      font-size: 28rpx;
      font-family: PingFang;
      font-weight: bold;
      color: #95a0b6;
    }
  }
}
</style>
