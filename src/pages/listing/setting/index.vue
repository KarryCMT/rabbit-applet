<template>
  <view class="setting-container">
    <view class="col-items" @click="onLogout">退出登录</view>
  </view>
</template>
<script>
import { UserLogout } from '@/api/index.js';
export default {
  name: 'Setting',
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  onShow() {},
  mounted() {},
  methods: {
    async onLogout() {
      const { code } = await UserLogout();
      if (code === 200) {
        uni.showToast({
          title:'已退出',
          icon:'none'
        })
        uni.clearStorageSync()
        setTimeout(() => {
          uni.reLaunch({
            url:`/base/login/index`
          })
        }, 2000);
      }
    },
  },
};
</script>
<style>
page {
  background: #f8f8ff;
}
</style>
<style lang="scss" scoped>
.setting-container {
  .col-items {
    margin-top: 20rpx;
    width: 100%;
    height: 100rpx;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28rpx;
    font-family: PingFang;
    font-weight: 500;
    color: #333;
  }
  .col-items:active {
    opacity: 0.5;
  }
}
</style>
