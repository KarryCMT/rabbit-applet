<template>
  <view class="message-list-item-box">
    <view class="cover">
      <image :src="detail.pic"></image>
      <image class="star" :src="starIcon"></image>
    </view>
    <view class="box">
      <text class="title">{{ detail.title }}</text>
      <view class="content">
        <text class="type">{{ detail.type }}</text>
        <text class="time">{{ detail.time }}</text>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: 'MessageListItem',
  components: {},
  props: {
    detail: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      starIcon:'http://cdn.lengnuanit.top/stacy/icon/yes-star.png',
    };
  },
  created() {},
  mounted() {},
  methods: {
    onChange(index) {
      this.currentTabsIndex = index;
      this.$emit('change', this.currentTabsIndex);
    },
  },
};
</script>
<style lang="scss" scoped>
.message-list-item-box {
  width: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  .cover {
    width: 100%;
    height: 480rpx;
    position: relative;
    image {
      width: 100%;
      height: 100%;
    }
    .star {
      position: absolute;
      right: 32rpx;
      top: 34rpx;
      width: 48rpx;
      height: 44rpx;
    }
  }

  .box {
    display: flex;
    flex-direction: column;
    padding: 41rpx 55rpx 33rpx 49rpx;
    .title {
      font-size: 36rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: #020433;
    }
    .content {
      margin-top: 33rpx;
      display: flex;
      align-items: center;
      .type {
        font-size: 26rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #0f73ee;
      }
      .time {
        margin-left: 74rpx;
        font-size: 26rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #404b69;
      }
    }
  }
}
</style>
