<template>
  <view class="notice-list-item-box">
    <view class="box">
      <view class="header-box">
        <view v-if="detail.isRead" class="icons"></view>
        <image :src="detail.pic"></image>
      </view>
      <view class="content">
        <text class="username">{{ detail.name }}</text>
        <text class="desc">{{
          detail.type === 1
            ? '接受了你的联系对话申请。'
            : '添加了新的房间到列表里。'
        }}</text>
        <text class="dialogue" v-if="detail.type === 1">马上对话</text>
      </view>
      <text class="date">{{ formatTime(detail.date) }}</text>
    </view>
  </view>
</template>
<script>
import { formatTime } from '@/utils/index.js';
export default {
  name: 'NoticeListItem',
  components: {},
  props: {
    detail: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      verifiedIcon:'http://cdn.lengnuanit.top/stacy/icon/verified-icon.png',
      boyIcon:'http://cdn.lengnuanit.top/stacy/icon/boy-icon.png',
      girlIcon:'http://cdn.lengnuanit.top/stacy/icon/girl-icon.png',
    };
  },
  created() {},
  mounted() {},
  methods: {
    formatTime,
    onChange(index) {
      this.currentTabsIndex = index;
      this.$emit('change', this.currentTabsIndex);
    },
  },
};
</script>
<style lang="scss" scoped>
.notice-list-item-box {
  width: 100%;
  height: 196rpx;
  background: #ffffff;
  box-shadow: 0px 4rpx 8rpx 0px rgba(2, 4, 51, 0.08);
  display: flex;
  align-items: center;
  padding-left: 48rpx;
  box-sizing: border-box;
  padding-top: 48rpx;
  .box {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    padding-right: 52rpx;
    .header-box {
      position: relative;
      .icons {
        width: 16rpx;
        position: absolute;
        left: -15rpx;
        top: 0;
        height: 16rpx;
        background: #0f73ee;
        border-radius: 50%;
      }
      image {
        width: 80rpx;
        height: 80rpx;
        border-radius: 40rpx;
      }
    }

    .content {
      padding-left: 32rpx;
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      .username {
        font-size: 28rpx;
        font-family: Montserrat;
        font-weight: bold;
        color: #020433;
      }
      .desc {
        margin-left: 5rpx;
        font-size: 28rpx;
        font-family: Montserrat;
        color: #020433;
      }
      .dialogue {
        font-size: 26rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #0f73ee;
      }
    }
    .date {
      font-size: 26rpx;
      font-family: PingFang;
      font-weight: 500;
      color: #95a0b6;
    }
  }
}
</style>
