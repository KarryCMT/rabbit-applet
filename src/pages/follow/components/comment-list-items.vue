<!-- 瀑布流布局 -->
<template>
  <view class="main-items">
    <image
      :class="[item.children.length ? 'avatar-lager' : 'avatar']"
      :src="item.avatar"
    ></image>
    <view class="content">
      <view class="userinfo">
        <text class="name">{{ item.name }}</text>
        <view v-if="item.isAuthor" class="author">作者</view>
      </view>
      <view class="body">
        <text v-if="item.replyName" class="is-reply">回复</text>
        <text v-if="item.replyName" class="reply-name">{{
          item.replyName
        }}</text>
        <text v-if="item.replyName" class="text">: {{ item.content }}</text>
        <text v-if="!item.replyName" class="text">{{ item.content }}</text>
        <text class="time">{{ formatTime(item.time) }}</text>
        <text class="city">{{ item.city }}</text>
        <text class="reply">回复</text>
      </view>
    </view>
    <view class="like">
      <image class="icon" :src="likeIcon"></image>
      <text class="txt">{{ item.likeCount }}</text>
    </view>
  </view>
</template>

<script>
import likeIcon from '@/static/svg/like.svg';
import { formatTime } from "@/utils/index.js";
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      likeIcon,
    };
  },
  onLoad() {},
  computed: {},
  methods: {
    formatTime,
  },
};
</script>

<style lang="scss" scoped>
.main-items {
  margin-top: 20rpx;
  display: flex;
  .avatar-lager {
    width: 70rpx;
    height: 70rpx;
    border-radius: 50%;
  }
  .avatar {
    width: 50rpx;
    height: 50rpx;
    border-radius: 50%;
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 20rpx;
    box-sizing: border-box;
    .userinfo {
      display: flex;
      align-items: center;
      .name {
        color: #a5a5a5;
        font-weight: 400;
        font-size: 26rpx;
      }
      .author {
        margin-left: 20rpx;
        background: #f6f6f6;
        font-size: 22rpx;
        color: #7f7f7f;
        font-weight: 400;
        padding: 5rpx 15rpx;
        border-radius: 30rpx;
      }
    }
    .body {
      .is-reply {
        color: #666;
        font-size: 26rpx;
      }
      .reply-name {
        margin-left: 10rpx;
        margin-right: 10rpx;
        font-weight: 400;
        color: #a5a5a5;
        font-size: 26rpx;
      }
      .text {
        color: #343434;
        font-size: 26rpx;
      }
      .time {
        margin-left: 10rpx;
        color: #cacaca;
        font-size: 26rpx;
        font-weight: 300;
      }
      .city {
        margin-left: 10rpx;
        color: #cacaca;
        font-size: 26rpx;
        font-weight: 300;
      }
      .reply {
        cursor: pointer;
        margin-left: 10rpx;
        color: #8c8c8c;
        font-size: 26rpx;
        font-weight: 300;
      }
      .reply:active {
        opacity: 0.5;
      }
    }
  }
  .like {
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      width: 40rpx;
      height: 40rpx;
      color: #8c8c8c;
    }
    .txt {
      font-size: 26rpx;
      color: #8c8c8c;
    }
  }
}
</style>
