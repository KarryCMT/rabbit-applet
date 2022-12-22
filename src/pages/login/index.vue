<template>
  <!-- 登录-引导 -->
  <view class="index-container">
    <image :src="logo" class="logo" mode="widthFix"></image>
    <view class="logo-title">EMOS企业在线办公系统</view>
    <view class="logo-subtitle">Ver 2050.2</view>
    <button class="login-btn" open-type="getUserInfo" @tap="login()">
      登陆系统
    </button>
    <view class="register-container">
      没有账号？
      <text class="register" @tap="toRegister()">立即注册</text>
    </view>
  </view>
</template>

<script>
import logo from '@/static/logo-1.png';
export default {
  name: 'Index',
  components: {},
  data() {
    return { logo };
  },
  methods: {
    toRegister: function () {
      uni.navigateTo({
        url: '/pages/register/index',
      });
    },
    login: function () {
      let that = this;
      uni.login({
        provider: 'weixin',
        success: (resp) => {
          let code = resp.code;
          that.ajax(that.url.login, 'POST', { code: code }, (resp) => {
            let permission = resp.data.permission;
            uni.setStorageSync('permission', permission);
            //跳转到登陆页面
            uni.switchTab({
              url: '../index/index',
            });
          });
        },
        fail: (e) => {
          uni.showToast({
            icon: 'none',
            title: '执行异常',
          });
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.index-container {
  width: 100%;
  height: 100%;

  .logo {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: 30%;
  }
  .logo-title {
    font-size: 48rpx;
    font-weight: bold;
    text-align: center;
    margin-top: 8%;
    color: $font-color;
  }
  .logo-subtitle {
    font-size: 34rpx;
    text-align: center;
    color: $font-color;
    margin-top: 20rpx;
  }
  .login-btn {
    width: 60%;
    position: absolute;
    bottom: 20%;
    left: 20%;
    background-color: $background-color;
    color: #fff;
    box-sizing: border-box;
    &:active {
      background-color: $background-color-active;
    }
  }
  .register-container {
    position: absolute;
    bottom: 50rpx;
    width: 100%;
    text-align: center;
    font-size: 30rpx;
    color: $font-color;
    .register {
      color: $background-color;
    }
  }
}
</style>
