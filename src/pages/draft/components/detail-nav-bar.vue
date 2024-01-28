<template>
  <view class="navbar" :style="{ height: statusBarHeight + barHeight + 'px' }">
    <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>
    <view
      class="navbar-box"
      :style="{
        top: statusBarHeight + 'px',
        height: barHeight + 'px',
        opacity,
      }"
    >
      <view class="navbar-cont" :style="{ width: barWidth + 'px' }">
        <image class="icon" @click="onBack" :src="backIcon"></image>
        <view class="search-box">
          <view class="left-box">
            <image class="avatar" :src="avatar"></image>
            <text class="name">李同学</text>
          </view>

          <view class="follow">关注</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import backIcon from '@/static/svg/back.svg';
export default {
  props: {
    top: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      backIcon,
      statusBarHeight: 20,
      barHeight: 44,
      barWidth: null,
      opacity: 1,
      avatar:
        'https://i0.hdslb.com/bfs/face/fef46d61fefa684aff591c4648a899a81a5fc092.jpg@240w_240h_1c_1s_!web-avatar-nav.webp',
    };
  },
  watch: {
    top(v) {
      this.opacity = 1 - `${v / 100}`;
    },
  },
  methods: {
    onBack() {
      uni.navigateBack();
    },
  },
  mounted() {
    let that = this;
    //通过uni自带api获取手机系统信息
    uni.getSystemInfo({
      success: function (res) {
        // console.log(res)
        that.statusBarHeight = res.statusBarHeight; //手机状态栏高度
        let isiOS = res.system.indexOf('iOS') > -1; //是否为iOS系统
        that.barHeight = !isiOS ? 48 : 44; //导航栏高度，iOS：48，Android：44
        that.barWidth = res.windowWidth - 87; //nabbar可操作宽度 = 屏幕宽度 - 小程序右上角的胶囊宽度（87）
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  z-index: 9999;
  width: 100%;
  background: transparent;
}
.status-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  // height: var(--status-bar-height);
  z-index: 999;
}
.navbar-box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 88rpx;
  padding: 0 16rpx;
  z-index: 999;
  .navbar-cont {
    height: 100%;
    display: flex;
    align-items: center;
    .icon {
      margin-left: 10rpx;
      width: 40rpx;
      height: 40rpx;
    }
    .search-box {
      cursor: pointer;
      margin-left: 10rpx;
      /* 矩形 1 */
      width: 80%;
      height: 60rpx;
      border-radius: 60rpx;
      display: flex;
      align-items: center;

      /* 底色灰 */
      background: rgb(246, 246, 246);
      justify-content: space-between;
      .follow {
        color: #c95552;
        font-size: 24rpx;
        border: 1px solid #c95552;
        padding: 4rpx 15rpx;
        border-radius: 60rpx;
        margin-right: 20rpx;
      }
      .left-box {
        display: flex;
        align-items: center;
        .name {
          margin-left: 20rpx;
          color: #666;
          font-size: 26rpx;
        }
        .avatar {
          margin-left: 20rpx;
          width: 40rpx;
          height: 40rpx;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
