<template>
  <view class="news-list-item-box" @click="onChange(detail)">
    <view class="box">
      <view class="header-box">
        <view v-if="detail.isRead" class="icons"></view>
        <image :src="detail.pic"></image>
      </view>
      <view class="content">
        <view class="t">
          <text class="username">{{ detail.name }}</text>
          <text class="date">{{timestampToTime(detail.date)}}</text>
        </view>
        <text :class="[detail.isRead ? 'is-read' : 'receive']">{{
          detail.receive
        }}</text>
        <text :class="[detail.isRead ? 'is-read' : 'send']">— {{ detail.send }}</text>
      </view>
    </view>
  </view>
</template>
<script>
import { timestampToTime } from "@/utils/index.js";
export default {
  name: 'NewsListItem',
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
    timestampToTime,
    onChange(row) {
      this.$emit('change', row);
    },
  },
};
</script>
<style lang="scss" scoped>
.news-list-item-box {
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
        width: 64rpx;
        height: 64rpx;
        border-radius: 40rpx;
      }
    }
    .content {
      padding-left: 32rpx;
      flex: 1;
      display: flex;
      flex-direction: column;
      width: 100%;
      .t {
        width: 100%;

        display: flex;
        justify-content: space-between;
        .username {
          font-size: 28rpx;
          font-family: Montserrat;
          font-weight: 500;
          color: #020433;
        }
        .date {
          font-size: 26rpx;
          font-family: PingFang;
          font-weight: 500;
          color: #95a0b6;
        }
      }
      .receive {
        margin-top: 13rpx;
        font-size: 26rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #020433;
      }
      .send {
        margin-top: 13rpx;
        font-size: 26rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #0f73ee;
      }
      .is-read {
        font-size: 26rpx;
        font-family: PingFang;
        font-weight: 500;
        color: #95a0b6;
      }
    }
  }
}
.news-list-item-box:active{
  opacity: .5;
}
</style>
