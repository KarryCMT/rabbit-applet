<template>
  <view class="cover-box">
    <view
      class="items"
      @longpress="onLongPress"
      v-for="(item, index) in fileList"
      :key="item.id"
    >
      <image
        v-show="isCurrentLongPress"
        class="close"
        :src="closeIcon"
        @click.stop="onClose(index)"
      ></image>
      <image
        :class="[isCurrentLongPress ? 'ani' : '']"
        class="image"
        :src="item.url"
      ></image>
    </view>
    <view class="items" @click="onPush">
      <image class="add-icon" :src="addIcon"></image>
    </view>
  </view>
</template>

<script>
import addIcon from '@/static/svg/add.svg';
import closeIcon from '@/static/svg/close.svg';
export default {
  data() {
    return {
      closeIcon,
      isCurrentLongPress: false, // 是否长按
      addIcon,
      fileList: [
        {
          name: '图片',
          url: 'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
        },
      ],
    };
  },
  methods: {
    // 删除
    onClose(index) {
        this.fileList.splice(index, 1);
    },
    onPush() {
      this.isCurrentLongPress = false;
      this.fileList = [
        ...this.fileList,
        {
          name: '图片',
          url: 'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
        },
      ];
    },
    onLongPress(v) {
      this.isCurrentLongPress = !this.isCurrentLongPress;
      console.log(this.isCurrentLongPress);
    },
  },
};
</script>

<style lang="scss">
.cover-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  .items {
    position: relative;
    margin-left: 20rpx;
    margin-top: 20rpx;
    width: 220rpx;
    height: 220rpx;
    border-radius: 8rpx;
    .close {
      position: absolute;
      z-index: 3;
      width: 40rpx;
      height: 40rpx;
      right: -15rpx;
      top: -15rpx;
    }
    .close:active {
      opacity: 0.5;
    }
    .image {
      width: 100%;
      border-radius: 8rpx;
      height: 100%;
    }
    .ani {
      position: relative;
      animation: swing 1s infinite;
    }
    /* 关键帧动画 */
    @keyframes swing {
      0% {
        left: 0;
      }
      50% {
        left: 5rpx;
      }
      100% {
        left: 0;
      }
    }
  }

  .items:last-child {
    background: #f7f7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    .add-icon {
      width: 80rpx;
      height: 80rpx;
    }
  }
  .items:last-child :active {
    opacity: 0.5;
  }
}
</style>
