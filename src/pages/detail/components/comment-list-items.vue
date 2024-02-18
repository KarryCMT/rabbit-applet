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
        <view v-if="isAuthor" class="author">作者</view>
      </view>
      <view class="body">
        <text v-if="item.replyName" @tap="onReply(item)" class="is-reply"
          >回复</text
        >
        <text v-if="item.replyName" class="reply-name">{{
          item.replyName
        }}</text>
        <text v-if="item.replyName" class="text">: {{ item.content }}</text>
        <text v-if="!item.replyName" class="text">{{ item.content }}</text>
      </view>
      <view class="content-bottom">
        <view>
          <text
            v-if="isUnfold && item.children.length"
            class="unfold"
            @tap="onUnfold(item)"
            >展开({{ item.children.length }})</text
          >
          <text
            v-if="item.children.length === 0"
            class="time"
            :style="{ 'margin-left': '0rpx;' }"
            >{{ formatTime(item.createTime) }}</text
          >
          <text
            v-if="item.children.length"
            class="time"
            :style="{ 'margin-left': '20rpx;' }"
            >{{ formatTime(item.createTime) }}</text
          >
          <text class="city">{{ item.city || '重庆' }}</text>
        </view>
      </view>
    </view>
    <view class="like">
      <text v-if="index !== -1"> {{ index }} 楼 </text>
      <text v-else>层主</text>
      <text class="reply" v-if="!isReply" @tap="onReply(item)">回复</text>
    </view>
  </view>
</template>

<script>
import likeIcon from '@/static/svg/like.svg';
import { formatTime } from '@/utils/index.js';
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    form: {
      type: Object,
      default: () => {},
    },
    isUnfold: {
      type: Boolean,
      default: true,
    },
    index: {
      type: [String, Number],
      default: 1,
    },
  },
  data() {
    return {
      likeIcon,
    };
  },
  onLoad() {},
  computed: {
    isReply() {
      return this.item.userId === uni.getStorageSync('userInfo').id;
    },
    isAuthor(){
      return this.form.userId === this.item.userId;
    }
  },
  methods: {
    formatTime,
    onUnfold(row) {
      this.$emit('unfold', row);
    },
    onReply(row) {
      this.$emit('reply', row);
    },
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
    }
    .content-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .unfold {
        color: #1d1d1d;
        font-size: 26rpx;
        font-weight: 300;
      }
      .time {
        margin-left: 20rpx;
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

      .unfold:active {
        opacity: 0.5;
      }
    }
  }
  .like {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 26rpx;
    color: #8c8c8c;
    .reply {
      cursor: pointer;
      color: #8c8c8c;
      font-size: 26rpx;
      font-weight: 300;
    }
    .reply:active {
      opacity: 0.5;
    }
  }
}
</style>
