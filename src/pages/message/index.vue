<template>
  <view class="dg-message-container">
    <view class="list-box">
      <view
        class="items"
        v-for="(item,index) in list"
        :key="item.id"
        @tap="()=>onNavigation(item)"
      >
        <view class="icon-box">
          <image class="cover" :src="item.icon"></image>
        </view>
        <view class="content" >
          <view class="info">
            <text class="name txt-overflow">{{ item.name }}</text>
            <text class="time">{{ formatTime(item.time) }}</text>
          </view>
          <text class="desc txt-overflow">{{ item.desc }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import sysIcon from '@/static/svg/sys-icon.svg';
import msgIcon from '@/static/svg/msg-icon.svg';
import tipsIcon from '@/static/svg/tips-icon.svg';
import { formatTime } from '@/utils/index.js';
export default {
  name: 'DgMessage',
  components: {},
  data() {
    return {
      list: [
        {
          name: '系统消息',
          desc: '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述',
          time: 1213232434343,
          icon: sysIcon,
        },
        {
          name: '系统公告',
          time: 1213232434343,
          desc: '这是描述',
          icon: msgIcon,
        },
        {
          time: 1213232434343,
          name: '关注消息',
          desc: '这是描述',
          icon: tipsIcon,
        },
      ],
    };
  },
  methods: {
    formatTime,
    onNavigation(row) {
      console.log(row);
    },
  },
};
</script>

<style lang="scss" scoped>
.dg-message-container {
  width: 100%;
  height: 100%;
  .list-box {
    box-sizing: border-box;
    width: 100%;
    .items {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      padding: 20rpx 10rpx 10rpx 10rpx;
      .icon-box {
        width: 100rpx;
        height: 100rpx;
        background: #e9ce66;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        .cover {
          width: 50rpx;
          height: 50rpx;
        }
      }

      .content {
        flex: 1;
        padding-left: 20rpx;
        border-bottom: 1px solid #f8f8f8;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 20rpx;
        .info {
          width: 100%;
          padding-right: 20rpx;
          display: flex;
          box-sizing: border-box;
          justify-content: space-between;
          .name {
            font-size: 30rpx;
            color: #282828;
            font-weight: 400;
          }
          .time {
            color: #686868;
            font-size: 26rpx;
            font-weight: 300;
          }
        }
        .desc {
          width: 560rpx;
          margin-top: 20rpx;
          font-size: 26rpx;
          color: #6a6a6a;
          font-weight: 300;
        }
      }
    }
  }
}
</style>
