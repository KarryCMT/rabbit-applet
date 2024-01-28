<template>
  <!-- 我的 -->
  <view class="history-box">
    <view class="control">
      <text>搜索历史</text>
      <text class="clear">清空</text>
    </view>
    <view class="list-box">
      <view class="items" v-for="item in historyList">{{ item }}</view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'history-box',
  components: {},

  data() {
    return {
      historyList: ['二手交易', '情感之家', '电脑', 'Apple', '手机'],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.history-box {
  .control {
    padding: 20rpx;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 26rpx;
    justify-content: space-between;
    .clear{
        color: #d6938e;
    }
  }
  .list-box {
    display: flex;
    flex-wrap: wrap;
    .items {
      margin-left: 20rpx;
      color: #3d3e41;
      background: #f1f2f5;
      box-sizing: border-box;
      padding: 5rpx 20rpx;
      border-radius: 40rpx;
      font-size: 26rpx;
    }
  }
}
</style>
