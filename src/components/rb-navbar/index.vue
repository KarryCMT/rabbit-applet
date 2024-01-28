<template>
  <view class="navbar" :style="{ height: statusBarHeight + barHeight + 'px' }">
    <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>
    <view
      class="navbar-box"
      :style="{ top: statusBarHeight + 'px', height: barHeight + 'px' }"
    >
      <view class="navbar-cont" :style="{ width: barWidth + 'px' }">
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      statusBarHeight: 20,
      barHeight: 44,
      barWidth: null,
    };
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
  width: 100%;
  background: transparent;
}
.status-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: rgba(0,0,0,0);
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
  }
}
</style>
