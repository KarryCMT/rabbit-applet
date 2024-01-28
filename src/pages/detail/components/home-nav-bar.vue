<template>
  <view
    class="navbar"
    :style="{ height: statusBarHeight + barHeight + 'px', background }"
  >
    <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>
    <view
      class="navbar-box"
      :style="{ top: statusBarHeight + 'px', height: barHeight + 'px' }"
    >
      <view class="navbar-cont" :style="{ width: barWidth + 'px' }">
        <view class="search-box">
          <image class="icon" :src="searchIcon"></image>
          <text class="name">搜索你感兴趣的内容</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import searchIcon from '@/static/svg/search.svg';
export default {
  props: {
    top: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      searchIcon,
      statusBarHeight: 20,
      barHeight: 44,
      barWidth: null,
      background: null,
    };
  },
  watch: {
    top(v) {
      this.background = `rgba(233,206,102,${v / 100})`;
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

<style lang="scss">
.navbar {
  position: fixed;
  left: 0;
  right: 0;
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

    .search-box {
      cursor: pointer;
      margin-left: 20rpx;
      /* 矩形 1 */
      width: 80%;
      height: 60rpx;
      border-radius: 60rpx;
      display: flex;
      align-items: center;

      /* 底色灰 */
      background: rgb(246, 246, 246);
      .icon {
        margin-left: 20rpx;
        width: 40rpx;
        height: 40rpx;
      }
      .name {
        margin-left: 20rpx;
        color: #666;
        font-size: 26rpx;
      }
    }
  }
}
</style>
